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