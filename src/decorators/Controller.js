import {lookupAngularModule} from "../util/AngularModuleResolver"
import {fetch} from "../util/AngularUtils"
const App = lookupAngularModule();

/**
 * Defines a class as Controller, if no name is provided aka the decorator is
 * used as @Controller then the class name is used as controller name, you can
 * specify the name by using the decorator like @Controller("ControllerName") to
 * make the decorator minify safe
 *
 * @decorator
 * @param {string | function} [clazz]
 */
export function Controller(clazz) {
    clazz = fetch(clazz);

    //Function to add the controller
    let addController = (name, clazz) => App.controller(name, clazz);

    if (clazz instanceof Function) {
        addController(clazz.name, clazz);
    }
    else return (target) => {
        addController(clazz, target);
    };
}