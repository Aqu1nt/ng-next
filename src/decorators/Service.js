import {module} from "../util/AngularModuleResolver"
import {fetch} from "../util/AngularUtils"

/**
 * Defines a class as Service, if no name is provided aka the decorator is
 * used as @Service then the class name is used as service name, you can
 * specify the name by using the decorator like @Service("ServiceName") to
 * make the decorator minify safe
 *
 * @decorator
 * @param {string | function} [clazz]
 */
export function Service(clazz) {
    clazz = fetch(clazz);

    //Function to add the controller
    let addService = (name, clazz) => module.then(m => m.service(name, clazz));

    if (clazz instanceof Function) {
        addService(clazz.name, clazz);
    }
    else return (target) => {
        addService(clazz, target);
    };
}