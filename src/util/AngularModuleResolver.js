import {config} from "./Configuration"

/**
 * Reference to the angular module used by Angular2to1, this module is either
 * resolved via ng-app or by useAngularModule(...)
 */
let angularModule = null;

/**
 * The injector of our main module
 * This $injector service is set as soon as the module was requested
 * the first time and angular is beyond its run phase
 */
let $injector = null;
let $injectorRequested = false;

let requestInjector = function(){
    if (angularModule && !$injectorRequested)
    {
        angularModule.run(["$injector", i => $injector = i]);
        $injectorRequested = true;
    }
};

/**
 * Attempts to lookup the root angular module of the app by resolving the first
 * ng-app on the DOM
 * As an alternative you can set your module with useAngularModule(), which will
 * then be returned by this function
 */
export function lookupAngularModule()
{
    try {
        //Get manually specified module from config
        if (config.MODULE && !angularModule) {
            angularModule = config.MODULE;
        }

        //Returns the preset module if available
        if (angularModule) {
            return angularModule;
        }

        let ngAppHolder = angular.element(document.querySelector("[ng-app]"));


        if (!ngAppHolder.length) {
            throw new Error("No element with [ng-app] found and no module set with 'useAngularModule()'");
        }

        let moduleName = ngAppHolder[0].getAttribute('ng-app');
        angularModule = angular.module(moduleName);

        return angularModule;
    } finally {
        requestInjector();
    }
}


/**
 * Sets the angular module which is used by Angular2to1
 * @param module
 */
export function useAngularModule(module)
{
    angularModule = module;
    requestInjector();
}

/**
 * Returns the main $injector of the root angular
 * module, is available as soon as the module has been requested at least
 * once and angular is beyond its run phase
 * @decorator
 * @return {*}
 */
export function angularInjector()
{
    return $injector;
}


const modulePromise = new Promise(function (resolve) {
    try  //If we're lucky the module does already exist
    {
        let module = lookupAngularModule();
        resolve(module);
    }
    catch (e) //Otherwise we must attempt to await its creation
    {
        /**
         * If ng-app is defined we're monkey patching angulars module() function
         * in order to get notified as soon as the module is available
         * @type {Object}
         */
        let ngAppHolder = angular.element(document.querySelector("[ng-app]"));
        if (ngAppHolder.length)
        {
            let appModuleName = ngAppHolder[0].getAttribute('ng-app');
            const origModuleFunction = angular.module;

            if (!angular) {
                throw new Error("Please include angular before ng-next!");
            }

            //Monkey patch the module function to detect its creation
            angular.module = function(name, dependencies)
            {
                let module = origModuleFunction(name, dependencies);

                //Our main module is available
                if (name == appModuleName && dependencies) {
                    angular.module = origModuleFunction;
                    resolve(module);
                }

                return module;
            };
        } else {
            //In case no ng-app is available we must monkey patch the config object to get
            //Notified when the module is getting configured
            let moduleSymbol = Symbol("MODULE");
            Object.defineProperty(config, "MODULE", {
                set : module => {
                    if (!config[moduleSymbol]) {
                        resolve(module);
                    }
                    config[moduleSymbol] = module
                },
                get : () => config[moduleSymbol]
            })
        }

    }
});

export {modulePromise as module}
