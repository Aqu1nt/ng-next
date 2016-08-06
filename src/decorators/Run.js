import {lookupAngularModule} from "../util/AngularModuleResolver"
import {fetch} from "../util/AngularUtils"
const App = lookupAngularModule();

/**
 * Defines a method as run block
 * @decorator
 * @exports
 */
export function Run(target, name) {
    target = fetch(target);
    if (target instanceof Function) App.run(target);
    else App.run(target[name]);
}