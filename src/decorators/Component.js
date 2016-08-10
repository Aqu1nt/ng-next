import {lookupAngularModule} from "../util/AngularModuleResolver"
import {decorateView} from "./View"
import * as symbols from "../util/Symbols"
const App = lookupAngularModule();

/**
 * Defines the class as Component
 *
 * A component is typically restricted to "E" => Element, meaning it will look like
 * <component></component> in html.
 *
 * You can configure the decorator either just with the component selector as string, or
 * with a typical angular directive config object, there are some shortcuts available:
 *  - controllerAs => as
 *  - scope => bind
 *  - template => view
 *
 *  A Component doesn't use the scope, but binds all properties to the controller directly instead.
 *
 *  If you're using class properties you can use the @Bind([type]) decorator to directly indicate the
 *  attributes that should be bound to the outer scope
 *
 * The @Component decorator can be used together with @View and @Alias and @Bind!
 *
 * @decorator
 * @param conf
 * @exports
 */
export function Component(conf = {})
{
    if (conf.constructor == String) {
        conf = { selector : conf };
    }
    conf.controllerAs = conf.as || conf.controllerAs;
    conf.restrict = conf.restrict || "E";
    if (conf.bind == false) conf.bind = false;
    else conf.bind = conf.bind || {};


    conf.template = conf.view || conf.template;
    conf.selector = conf.name || conf.selector;

    return target => {
        conf.controller = target;
        App.directive(conf.selector, () => {

            //Merge @Bind properties
            if (conf.bind !== false) {
                conf.bind = Object.assign(conf.bind || {}, target[symbols.bind] || {});
            }

            conf.controllerAs = target[symbols.alias] || conf.controllerAs || "$ctrl";
            conf.bindToController = conf.bind;

            decorateView(target, conf);

            return conf;
        });
    }
}

/**
 * Defines a class property as bound attribute
 * @decorator
 * @param bindType = or & or @
 * @param [attributeName] the name of the attribute, defaults to the property name
 * @return {function(*, *, *)}
 */
export function Bind(bindType, attributeName)
{
    return (target, name, desc) => {

        //Set default attribute name
        if (!attributeName) attributeName = name;

        //Add the bind property to the type
        let type = target.constructor;
        type[symbols.bind] = type[symbols.bind] || {};
        type[symbols.bind][name] = bindType+attributeName;

        return {
            writable : true,
            value : desc.value
        };
    }
}