/**
 * Sets the view of an @Component or a @State can either be
 * a template or a templateUrl, the view is recognized as template
 * if it contains at least 1 tag!
 * @param view
 * @Decorator
 */
export function View(view)
{
    return (target) => {
        target.$$view = view;
        return target;
    }
}

/**
 * Decorates the view to the configuration
 * @param clazz
 * @param conf
 */
export function decorateView(clazz, conf)
{
    let view = clazz.$$view;
    if (!view) return;
    let urlRegex = /[^<>]+\.[A-Za-z]{2,5}$/;
    if (urlRegex.test(view)) { //url
        conf.templateUrl = view;
    } else {
        conf.template = view;
    }
}