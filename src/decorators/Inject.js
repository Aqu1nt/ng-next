import {angularInjector, lookupAngularModule} from "../util/AngularModuleResolver"
import {callAnnotations} from "../util/AngularUtils"
const App = lookupAngularModule();

/**
 * Inject one of the following into the object:
 *      - services
 *      - $scope
 *      - any $scope variable
 *
 * the variable: usage =>
 * class foo {
 *      @Inject $timeout;
 *      @Inject("$timeout") tmout;
 *      @Inject fooCtrl
 *      @Inject scopeVar
 *      @Inject $scope
 *
 *      constructor()
 *      {
 *          console.log(this.$timeout, this.tmout);
 *      }
 * }
 *
 * Attention! The property won't get injected instantly, but a getter
 * which will replace itself with the resolved object on the first call,
 * with this technique we're able to resolve circular dependencies sometimes
 *
 * @param target
 * @param name
 * @param descriptor
 * @decorator
 */
export function Inject(target, name, descriptor)
{
    let fieldName;
    let injector = (target, name, descriptor) =>
    {
        if (descriptor.value instanceof Function) {
            throw new Error("Can't use @Inject on a method");
        }

        return {
            set : function(value) {
                Object.defineProperty(this, fieldName, {value, writable : true});
            },
            get : function() {

                let $injector = angularInjector();
                let obj = null;
                let injected = false;

                let locals = this.$$locals || currentLocals;

                //Locale
                if (locals && (locals.hasOwnProperty(name) || locals[name])){
                    obj = locals[name];
                    injected = true;
                }

                //Service
                else if ($injector.has(name)) {
                    obj = $injector.get(name);
                    injected = true;
                }

                //$scope or parent scope property
                else if (locals && locals.$scope && (Reflect.hasOwnProperty(locals.$scope, name) || locals.$scope[name])){
                    obj = locals.$scope[name];
                    injected = true;
                }

                if (!injected) {
                    console.error(`Wasn't able to @Inject ${name} as ${fieldName} into ${target.constructor.name}`);
                    return;
                }

                Object.defineProperty(this, fieldName, {value : obj, writable : true});
                return obj;
            }
        };
    };

    if (descriptor) {
        fieldName = name;
        return injector(target, name, descriptor);
    }
    else {
        let nameReplacement = target;
        return function(target, name, descriptor) {
            fieldName = name;
            return injector(target, nameReplacement, descriptor);
        };
    }
}


let currentLocals = undefined;
App.config(["$provide", function($provide){
    $provide.decorator("$controller", ["$delegate", function($delegate){
        return function(expression, locals, later, ident){

            //For usage in constructor
            currentLocals = locals;

            //Create the controller
            let controller = $delegate(expression, locals, later, ident);

            //Reset the locals
            currentLocals = undefined;

            //Check if its an object
            if (!later){
                controller.$$locals = locals;
                controller.$$scope = locals.$scope;
                callAnnotations(controller, locals.$scope);
                return controller;
            }
            else {
                return function(){
                    currentLocals = locals;
                    let c = controller();
                    currentLocals = undefined;
                    c.$$locals = locals;
                    c.$$scope = locals.$scope;
                    callAnnotations(c, locals.$scope);
                    return c;
                }
            }
        };
    }])
}]);
