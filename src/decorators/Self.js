/**
 * The decorator may be used on classes or methods
 * ```
 * @Self
 * class FullBound {}
 *
 * class PartBound {
 *   @Self
 *   method () {}
 * }
 * ```
 *
 * @decorator
 */
export function Self(...args) {
    if (args.length === 1) {
        return boundClass(...args);
    } else {
        return boundMethod(...args);
    }
}

/**
 * Use boundMethod to bind all methods on the target.prototype
 */
function boundClass(target) {
    // (Using reflect to get all keys including symbols)
    let keys;
    // Use Reflect if exists
    if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
        keys = Reflect.ownKeys(target.prototype);
    } else {
        keys = Object.getOwnPropertyNames(target.prototype);
        // use symbols if support is provided
        if (typeof Object.getOwnPropertySymbols === 'function') {
            keys = keys.concat(Object.getOwnPropertySymbols(target.prototype));
        }
    }

    keys.forEach(key => {
        // Ignore special case target method
        if (key === 'constructor') {
            return;
        }

        let descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);

        // Only methods need binding
        if (typeof descriptor.value === 'function') {
            Object.defineProperty(target.prototype, key, boundMethod(target, key, descriptor));
        }
    });
    return target;
}

/**
 * Return a descriptor removing the value and returning a getter
 * The getter will return a .bind version of the function
 * and memoize the result against a symbol on the instance
 */
function boundMethod(target, key, descriptor) {
    let fn = descriptor.value;

    if (typeof fn !== 'function') {
        throw new Error(`@Self decorator can only be applied to methods not: ${typeof fn}`);
    }

    return {
        configurable: true,
        get : function() {
            let self = this;
            return (...params) => fn.call(self, ...params);
        }
    };
}