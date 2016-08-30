//Not implemented yet
import {module} from "../util/AngularModuleResolver"

//Angular parse service
let $parse = null;

function postCompileList(elementList, subcall = false) {

    //Iterate over each element in the list and attempt to find compileable attributes
    for (let i = 0, len = elementList.length; i < len; i++) {

        let element = elementList[i];
        let angularElement = angular.element(element);

        if (angularElement.data("$$NgNextPostCompiled") ||
            (subcall && angularElement.hasClass("ng-binding"))) {
            continue;
        }
        angularElement.data("$$NgNextPostCompiled", true);

        let scope = angularElement.scope();

        for (let attribute of angularElement[0].attributes || [])
        {
            let name = attribute.name;
            let value = attribute.value;

            if (name.startsWith("(") && name.endsWith(")")) {
                compileEventBindingAttributes(angularElement, scope, name, value);
            }
        }

        //Recursion
        postCompileList(angularElement.children(), true);
    }
}

function compileEventBindingAttributes(element, scope, name, value)
{
    let event = name.substring(1, name.length - 1);
    let invoker = $parse(value);

    let cb = ($event) => invoker(scope, {$event});

    //Remove listener on destroy
    scope.$on("$destroy", () => element.off(event, cb));
    element.on(event, cb);
}

module.then(module => {
    module.decorator("$compile", ["$delegate", "$parse", "$rootScope", function($delegate, $p, $rootScope) {
        $parse = $p;

        let elementList = [];

        function scheduleAsyncPostCompile(element) {
            if (!elementList.length) {
                $rootScope.$evalAsync(() => {
                    postCompileList(elementList);
                    elementList = [];
                })
            }
            elementList.push(element);
        }

        //Patch addScopeInfo method to catch each element creation
        const $$addScopeInfo = $delegate.$$addScopeInfo;
        $delegate.$$addScopeInfo = function(element, scope){
            $$addScopeInfo.call($delegate, element, scope);
            scheduleAsyncPostCompile(element);
        };

        return $delegate;
    }]);
});
