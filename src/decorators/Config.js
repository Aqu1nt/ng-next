import {lookupAngularModule as module} from "../util/AngularModuleResolver"
import {fetch} from "../util/AngularUtils"

/**
 * Defines a method as config block
 * @decorator
 * @exports
 */
export function Config(target, name) {
    target = fetch(target);
    if (target instanceof Function) module().config(target);
    else module().config(target[name]);
}