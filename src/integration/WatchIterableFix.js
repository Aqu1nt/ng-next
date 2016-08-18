import {module} from "../util/AngularModuleResolver"

/**
 * This module targets angulars missing ability to track objects following the ES6 iterator pattern,
 * where any object which has a [Symbol.iterator]() method is iterable.
 *
 * This module monkey patches every $scope to proxy $watchCollection and transform a possible iterable
 * into a simple array.
 *
 * If you want to access the original methods, you will have to call $scope[Symbol.for("$watchCollection")]
 */
module.then(module => {
    /**
     * Hook into the $rootScopeProvider to make sure we're the first ones to modify the $rootScope
     */
    module.config(["$rootScopeProvider", function($rootScopeProvider){
        const $get = $rootScopeProvider.$get;
        $rootScopeProvider.$get = ["$injector", "$parse", function($injector, $parse){
            let $rootScope = $injector.invoke($get);

            monkeyPatch$watchCollection($rootScope, $parse);
            monkeyPatch$watchCollection($rootScope.__proto__.constructor.prototype, $parse);

            return $rootScope;
        }];
    }]);
});

/**
 * Global symbols to access the
 * @type {Symbol}
 * @private
 */
const $watchCollection = Symbol.for("$watchCollection");


/**
 * Here we're actually patching the $watchCollection method
 * @param $target
 * @param $parse
 */
function monkeyPatch$watchCollection($target, $parse)
{
    $target[$watchCollection] = $target.$watchCollection;

    $target.$watchCollection = function(property, action){

        let isFunc = typeof property == 'function';
        let getter = isFunc ? property : $parse(property);
        let iterableAsArray = undefined;
        let $scope = this;

        let monkeyPatchedObserver = function(){
            let resolved = getter(isFunc ? undefined : $scope);

            if (resolved && !(resolved instanceof Array) && resolved[Symbol.iterator])
            {
                //Reference changed, change our too
                if (resolved !== iterableAsArray) {
                    iterableAsArray = [];
                }

                //Refill array
                iterableAsArray.length = 0;
                for (let item of resolved) {
                    iterableAsArray.push(item);
                }

                //And return it as result of the watch expression
                return iterableAsArray;
            }
            iterableAsArray = undefined;

            //If it's not an iterable non-array just return the original object
            return resolved;
        };

        return this[$watchCollection](monkeyPatchedObserver, action); //Must be this way because of maximum call stack size exceeded error
    }
}