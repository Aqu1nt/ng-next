import {angularInjector} from "../util/AngularModuleResolver"
import * as symbols from "../util/Symbols"

// This file contains the following decorators
// @Init
// @Destroy
// @Watch
// @WatchCollection
// @On
// @Debounce
// @Abstract

/**
 * Executes all Methods annotated with this annotation after
 * the object has been created
 *
 * Only working in services and controllers!
 *
 * @decorator
 */
export function Init(target, name, descriptor){
    if (!descriptor) {
        throw new Error("@Init can only be used on class methods");
    }
    target[symbols.init] = target[symbols.init] || [];
    target[symbols.init].push(name);
}

/**
 * Executes all Methods annotated with this annotation after
 * the object gets destroyed.
 *
 * Only usable in controllers!
 *
 * @param target
 * @param name
 * @exports
 * @decorator
 */
export function Destroy(target, name){
    target[symbols.destroy] = target[symbols.destroy] || [];
    target[symbols.destroy].push(name);
}

/**
 * Sets a $watch on the given controller evaluation, the method will be used
 * as regular $watch callback.
 *
 * If your controller has a property "foo" the following method would watch for
 * changes on "foo"
 *
 * \@Watch("foo")
 * fooChanged(newVal, oldVal)
 * {
 *  ........
 * }
 *
 * @param property
 * @param {boolean} [deep]
 * @exports
 * @decorator
 */
export function Watch(property, deep = false){

    return (target, name) => {
        target[symbols.watch] = target[symbols.watch] || [];
        target[symbols.watch].push({property, name, deep, collection : false});
    };
}

/**
 * Same as @Watch but for collections
 * @param [property]
 * @exports
 * @decorator
 */
export function WatchCollection(property){

    return (target, name) => {
        target[symbols.watch] = target[symbols.watch] || [];
        target[symbols.watch].push({property, name, false, collection : true});
    };
}

/**
 * Schedules the method so it will get executed every n milliseconds
 * @param interval in milliseconds
 * @decorator
 */
export function Schedule(interval)
{
    return (target, name, desc) => {
        target[symbols.schedule] = target[symbols.schedule] || [];
        target[symbols.schedule].push({interval, name})
    }
}

/**
 * Registers the method as an eventhandler via $scope.$on
 *
 * \@On("$stateChangeSucces")
 * stateChanged(newState, oldState ...)
 * {
 *  .......
 * }
 *
 * @param event
 * @decorator
 */
export function On(event)
{
    return (target, name, desc) => {
        target[symbols.on] = target[symbols.on] || [];
        target[symbols.on].push({event, name})
    }
}


/**
 * Debounces the method so it will only get executed after it hasn't been called
 * for n millis
 *
 * @param millis
 * @param {boolean} [angularTimeout=true] - if false the window timeout will get used
 * @returns {Function}
 * @decorator
 */
export function Debounce(millis, angularTimeout = true)
{
    return (target, name, desc) => {
        let timeout;
        let fn = desc.value;
        desc.value = function(...args){

            //Setup
            let context = this;
            let timeoutFn = function(){
                fn.apply(context,args);
            };

            //Use angular $timeout ($apply cycle)
            if (angularTimeout)
            {
                let $timeout = angularInjector().get("$timeout");
                $timeout.cancel(timeout);
                timeout = $timeout(timeoutFn, millis);
            }
            //Use window timeout
            else
            {
                clearTimeout(timeout);
                timeout = setTimeout(timeoutFn, millis);
            }
        }
    }
}

/**
 * Marks a method as abstract, this means the method will get replaced
 * with one that throws an error when called saying the method
 * is not implemented
 * @param target
 * @param name
 * @param desc
 * @decorator
 */
export function Abstract(target, name, desc)
{
    desc.value = function(){
        throw new Error(`${target.name}@${name} is not implemented (Abstract)`);
    };
}