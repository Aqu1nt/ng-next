import {alias as aliasSymbol} from "../util/Symbols"

/**
 * Sets the alias for a controller, can only be used together with @State
 * and @Component
 * @decorator
 */
export function Alias(alias)
{
    return (target, name) => {
        (target[name] || target)[aliasSymbol] = alias;
        return target;
    }
}
