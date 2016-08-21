import "zone.js"

//The Symbol under which the original bootstrap function is still available
const bootstrapSymbol = Symbol.for("angular.bootstrap");

//The default zone where runOutsideAngular() calls are being executed
const outerZone = Zone.current;

//Create the angular zone
export const NgZone = outerZone.fork({
    name : "Angular Zone <ng-next>",
    onInvoke : function(delegate, current, target, callback, applyThis, args) {
        try {
            return delegate.invoke(target, callback, applyThis, args);
        } finally {
            NgZone.$$digestOnce();
        }
    },
    onInvokeTask : function(delegate, current, target, task, applyThis, args) {
        try {
            return delegate.invokeTask(target, task, applyThis, args);
        } finally {
            NgZone.$$digestOnce();
        }
    }
});

// Add $digest to the zone
NgZone.$digest = function(){};

// Digests only if not already done, internal api
NgZone.$$digestOnce = function () {
    if (!NgZone.$digested) NgZone.$digest();
    NgZone.$digested = false;
};

// Add runOutsideAngular to the zone
NgZone.runOutsideAngular = function (fn) {
    outerZone.run(fn);
};

//Export the angular zone onto the window if not existing
if (!window.NgZone) {
    window.NgZone = NgZone;
}

//NgZone module
export const ngZoneModule = angular.module("ngZone", []);
ngZoneModule.factory("NgZone", () => NgZone);

/**
 * Bootstraps the angular application inside it's own angular zone
 * @param node
 * @param modules
 * @param additional
 */
function bootstrapInNgZone(node, modules, ... additional)
{
    //Auto add ngZone as dependency
    (modules || []).push("ngZone");

    //Bootstrap angular inside the angular zone
    NgZone.run(() => {
        angular[bootstrapSymbol](node, modules, ... additional).invoke(function ($rootScope) {

            //Patch root scopes digest to set an indicator on the zone
            const digestSymbol = Symbol.for("$digest");
            $rootScope[digestSymbol] = $rootScope.$digest;

            //If you want to digest on zone leave give "false" as parameter to $rootScope.$digest
            $rootScope.$digest = function (disableZoneJS = true) {
                if (disableZoneJS) NgZone.$digested = true;
                this[digestSymbol]();
            };

            //Add digest to the angular zone
            NgZone.$digest = function(){
                $rootScope.$digest();
            }
        });
    });
}

//Add auto-bootstrap handler
angular.element(document).ready(() => {
    let root = angular.element(document.querySelector("[ng-zone-app]"))[0];
    if (root) {
        let moduleName = root.getAttribute('ng-zone-app');
        bootstrapInNgZone(root, [moduleName]);
    }
});

//Monkey patch angular.bootstrap
angular[bootstrapSymbol] = angular.bootstrap;
angular.bootstrap = function (...args) {
  bootstrapInNgZone(... args);
};