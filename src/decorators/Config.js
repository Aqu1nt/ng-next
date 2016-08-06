import {lookupAngularModule} from "../util/AngularModuleResolver"
import {fetch} from "../util/AngularUtils"
const App = lookupAngularModule();

/**
 * Defines a method as config block
 * @decorator
 * @exports
 */
export function Config(target, name) {
    target = fetch(target);
    if (target instanceof Function) App.config(target);
    else App.config(target[name]);
}