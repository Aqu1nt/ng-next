/**
 * This wrapper enables an intuitive way to use of es6 classes
 * as angular directive.
 * If you wrap your directive class with this function you can
 * use link/compile functions with "this" reference and @ngInject
 * on both the constructor and the controller!
 *
 * @param directive
 * @returns {fn}
 */
export default function(directive)
{
    /**
     * Fetch function from array
     */
    if (directive.constructor == Array)
    {
        let arr = directive;
        directive = arr.splice(arr.length - 1, 1)[0];
        directive.$inject = arr;
    }

    //Check if directive is an actual class
    try
    {
        directive();
        return directive;
    }
    catch (e)
    {
        //Continue and wrap class to make it usable in angular
        if(!(e instanceof TypeError)) return directive;
    }

    let fn = function(...inject)
    {
        //Create Directive
        let instance = new directive(...inject);

        //Wrap link call to keep this references
        if (!!instance.link)
        {
            let link = instance.link;

            instance.link = function(...args){
                link.apply(instance, args);
            };
        }

        //Wrap compile call to keep "this" reference
        if (!!instance.compile)
        {
            let compile = instance.compile;

            instance.compile = function(...args)
            {
                compile.apply(instance, args);
            }
        }

        //Return the directive to angular
        return instance;
    };

    //Kepp ngAnnotate injects
    fn.$inject = directive.$inject;

    return fn;
};