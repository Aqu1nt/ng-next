import "zone.js"
import {config} from "../util/Configuration"

//The default zone where runOutsideAngular() calls are being executed
const outerZone = Zone.current;

//Create the angular zone
export const NgZone = outerZone.fork({
    name : "Angular Zone <ng-next>",
    onInvoke : function(delegate, current, target, callback, applyThis, args) {
        try {
            NgZone.$digested = false;
            return delegate.invoke(target, callback, applyThis, args);
        } finally {
            $digestOnce();
        }
    },
    onInvokeTask : function(delegate, current, target, task, applyThis, args) {
        try {
            NgZone.$digested = false;
            return delegate.invokeTask(target, task, applyThis, args);
        } finally {
            $digestOnce();
        }
    }
});

// Add $digest to the zone
NgZone.$digest = function(){};

// Digests only if not already done
const $digestOnce = function () {
    if (!NgZone.$digested) NgZone.$digest();
    NgZone.$digested = false;
};

// Add runOutsideAngular to the zone
NgZone.runOutsideAngular = function (fn) {
    outerZone.run(fn);
};

//NgZone module
export const ngZoneModule = angular.module("ngZone", []);
ngZoneModule.factory("NgZone", () => NgZone);

//Add auto-bootstrap handler
angular.element(document).ready(() => {

    if (!config.ZONE_JS)
    {
        angular.resumeBootstrap();
    }
    else
    {
        NgZone.run(() => {

            //Export the angular zone onto the window if not existing
            window.NgZone = window.NgZone || NgZone;

            //Resume bootstrap inside of our angular zone
            angular.resumeBootstrap(["ngZone"]).invoke(["$rootScope", ($rootScope) => {

                //Patch root scopes digest to set an indicator on the zone
                const digestSymbol = Symbol.for("$digest");
                $rootScope[digestSymbol] = $rootScope.$digest;

                //If you want to digest on zone leave give "false" as parameter to $rootScope.$digest
                $rootScope.$digest = function (disableZoneJS = true) {
                    if (disableZoneJS) NgZone.$digested = true;
                    this[digestSymbol]();
                };

                //Add digest to the angular zone
                NgZone.$digest = function () {
                    if (!$rootScope.$$phase){
                        $rootScope.$digest();
                    }
                }

            }]);
        });
    }
});

//Force angular to stop the bootstrap process
window.name = "NG_DEFER_BOOTSTRAP!";
