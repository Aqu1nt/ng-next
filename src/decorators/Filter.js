import {lookupAngularModule as module} from "../util/AngularModuleResolver"
import {fetch} from "../util/AngularUtils"

/**
 * REgisters a method as an angular Filter
 * If used like @Filter the method name will be chosen as filter name,
 * Alternatively you can give the filter name as argument, your method will then look
 * like @Filter("myFilter")...
 * @decorator
 * @exports
 */
export function Filter(clazz, method) {
    clazz = fetch(clazz);

    //Function to add the controller
    let registerFilter = (name, fn) => module().filter(name, fn);

    if (clazz.constructor != String) { //With method name as filter name
        registerFilter(method, clazz[method]);
    }
    else return (target, method) => { //With specified name
        registerFilter(clazz, target[method]);
    };
}