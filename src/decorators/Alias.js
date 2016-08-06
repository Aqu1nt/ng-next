/**
 * Sets the alias for a controller, can only be used together with @State
 * and @Component
 * @decorator
 */
export function Alias(alias)
{
    return (target, name) => {
        (target[name] || target).$$alias = alias;
        return target;
    }
}
