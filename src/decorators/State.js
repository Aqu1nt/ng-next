import {Controller} from "./Controller"
import {module} from "../util/AngularModuleResolver"
import {decorateView} from "./View"
import {config} from "../util/Configuration"
import * as symbols from "../util/Symbols"

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
        target[symbols.state] = conf;
        Controller(target);
        return target;
    }
}

/**
 * Tries to configure the state from the $$state var on
 * the all controllers
 * @param clazz
 */
module.then( m => {
    m.config(["$injector", function ($injector) {
        "ngInject";

        let registeredControllers = [];
        let states = [];

        //Find every state controller
        m._invokeQueue.forEach(item => {
            let constructor = item[2][1];
            if (registeredControllers.find((t) => t.type == constructor)) return;
            if (constructor[symbols.state]) {
                constructor[symbols.state].clazz = constructor;
                states.push(constructor[symbols.state]);
                registeredControllers.push({type: constructor});
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
        let $urlRouterProvider = $injector.get("$urlRouterProvider");

        //Indicator if a default state has been set
        let defaultState = false;

        //Configure all states
        for (let conf of states) {
            let clazz = conf.clazz;

            //Set the default state if
            if (conf.default) {
                if (defaultState) {
                    throw new Error(`Default state has already been set while configuring ${conf.name}, other default: ${defaultState.name}`);
                }
                defaultState = conf;
                $urlRouterProvider.otherwise(function ($injector) {
                    $injector.invoke(['$state', function ($state) {
                        $state.go(conf.name, {}, {location: "replace"});
                    }]);
                });
            }

            //Set the controller
            conf.controller = clazz;
            conf.controllerAs = conf.as || conf.controllerAs || clazz[symbols.alias];

            //Attempt to decorate @View decorator
            decorateView(clazz, conf);

            //Apply decorators
            let decoratedConf = config.STATE_DECORATOR(conf);
            if (decoratedConf) conf = decoratedConf;

            //Finally configure the state onto the ui-router
            $stateProvider.state(conf);
        }
    }]);
});