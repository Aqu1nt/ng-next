import {module} from "../util/AngularModuleResolver"
import {fetch} from "../util/AngularUtils"

/**
 * Defines a method as run block
 * @decorator
 * @exports
 */
export function Run(target, name) {
    target = fetch(target);
    if (target instanceof Function) module.then(m => m.run(target));
    else module.then(m => m.run(target[name]));
}