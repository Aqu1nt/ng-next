import {Controller} from "./Controller"
import {lookupAngularModule} from "../util/AngularModuleResolver"
import {decorateView} from "./View"
import {config} from "../util/Configuration"
const App = lookupAngularModule();

/**
 * Angular UI Router support
 *
 * With this Decorator you are able to decorate any class with @State,
 * as parameter you will give the usual state config
 *
 * In addition you can specify a default state by adding default : true
 * to the state config, this state will be called when a 404 aka a missing
 * url is requested. You're also able to shorten controllerAS to as.
 *
 * The class which is being decorated with @State will work as controller
 * for the specified state
 *
 * The State decorator works best with @Alias and @View
 *
 * @decorator
 * @param conf
 * @returns {Function}
 * @exports
 */
export function State(conf)
{
    return target => {
        target.$$state = conf;
        Controller(target);
        return target;
    }
}

/**
 * Tries to configure the state from the $$state var on
 * the all controllers
 * @param clazz
 */
App.config(["$urlRouterProvider", "$injector", function($urlRouterProvider, $injector){
    "ngInject";

    let registeredControllers = [];
    let states = [];

    //Find every state controller
    App._invokeQueue.forEach(item => {
        let constructor = item[2][1];
        if (registeredControllers.find((t) => t.type == constructor)) return;
        if (constructor.$$state) {
            constructor.$$state.clazz = constructor;
            states.push(constructor.$$state);
            registeredControllers.push({type : constructor});
        }
    });

    //Return if ui-router is not installed
    if (!$injector.has("$stateProvider")) {

        if (states.length) {
            console.error("Error: @State is used but ui-router is not installed!")
        }
        return;
    }

    //Fetch the state provider
    let $stateProvider = $injector.get("$stateProvider");

    //Configure all states
    for (let conf of states) {
        let clazz = conf.clazz;

        /*
         * Default state
         */
        if (conf.default) {
            $urlRouterProvider.otherwise(function ($injector) {
                $injector.invoke(['$state', function ($state) {
                    $state.go(conf.name, {}, {location: "replace"});
                }]);
            });
        }

        /*
         * Set Controller
         */
        conf.controller = clazz;
        conf.controllerAs = conf.as || conf.controllerAs || clazz.$$alias;

        /**
         * Decorate the view if possible
         */
        decorateView(clazz, conf);

        //Apply decorators
        let decoratedConf = config.STATE_DECORATOR(conf);
        if (decoratedConf) conf = decoratedConf;

        /**
         * Finally configure the state onto the ui-router
         */
        $stateProvider.state(conf);
    }
}]);