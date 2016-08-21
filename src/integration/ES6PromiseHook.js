import {angularInjector} from "../util/AngularModuleResolver"
import {config} from "../util/Configuration"

// Attempt to fetch the main angular module


// The main injector
let $injector = null;

/**
 * Hook angular $digest callback into Promises in order to work
 * with async / await
 */
let nextAvailableDigest = new Date().getTime();
let scheduledDigest = null;
let $rootScope = null;

let digest = function ()
{
    try
    {
        $rootScope.$digest();
    } catch (e)
    {
        //Digest probably already in progress
    }
};

let requestDigestCycle = function()
{
    if (!$injector) {
        $injector = angularInjector();
    }

    if (!$rootScope && $injector) {
        $rootScope = $injector.get("$rootScope");
    }

    if ($rootScope) {
        //Limit digest to once per [...]ms
        let now = new Date().getTime();

        //Digest is available
        if (now >= nextAvailableDigest || !config.DEBOUNCE_DIGEST_MILLIS) {
            nextAvailableDigest = now + config.DEBOUNCE_DIGEST_MILLIS;
            digest();
        }
        //Digest must be delayed slightly
        else
        {
            //No digest is currently scheduled, enter one
            if (scheduledDigest == null) {
                scheduledDigest = setTimeout(() => {
                    scheduledDigest = null;
                    nextAvailableDigest = new Date().getTime() + config.DEBOUNCE_DIGEST_MILLIS;
                    digest();
                }, nextAvailableDigest - now)
            }
        }
    }
};

//Create a proxy which will request a digest cycle after executing the
//Method
let proxy = function(fn){
    return function(...params) {
        if (!fn) return fn;
        let result = fn(...params);
        if (config.ASYNC_AWAIT_ENABLED) { // Only request if enabled
            requestDigestCycle();
        }
        return result;
    };
};

//Inject proxies as then callback
const thenSymbol = Symbol.for("Promise.then");
Promise.prototype[thenSymbol] = Promise.prototype.then;
Promise.prototype.then = function(success, error, ... additional) {
    return this[thenSymbol](proxy(success), proxy(error), ... additional);
};

//Inject proxies as success callback
const successSymbol = Symbol.for("Promise.success");
Promise.prototype[successSymbol] = Promise.prototype.success;
Promise.prototype.success = function(result) {
    return this[successSymbol](proxy(result));
};

//Inject proxies as catch callback
const catchSymbol = Symbol.for("Promise.catch");
Promise.prototype[catchSymbol] = Promise.prototype.catch;
Promise.prototype.catch = function(error) {
    return this[catchSymbol](proxy(error));
};