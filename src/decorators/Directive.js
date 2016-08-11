module
import {fetch} from "../util/AngularUtils"
import es6enabler from "../util/ES6Directive"

/**
 * Defines a class or a class method as Directive, if no name is provided aka the decorator is
 * used as @Directive then the class name or the method name is used as directive name, you can
 * specify the name by using the decorator like @Directive("myDirectiy") to
 * make the decorator minify safe
 *
 * @decorator
 * @param {string | function} clazz
 * @param {string} [name]
 * @returns {Function}
 * @exports
 */
export function Directive(clazz, name) {
    clazz = fetch(clazz);

    let registerDirective = (name, fn) => module().directive(name, es6enabler(fn));

    if (clazz.constructor != String) //Directive is called without name => @Directive
    {
        if (clazz instanceof Function) registerDirective(clazz.name, clazz); //Class
        else registerDirective(name, clazz[name]); //Class method
    }
    else return (target, n) => { //Directive is called without name => @Directive("myDirective")
        if (target instanceof Function) registerDirective(clazz, target); //Class
        else registerDirective(n, target[n]); //Class method
    };
}