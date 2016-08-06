// The purpose of this file is to provide an easy configuration API
// accesible from the outside

/**
 * The module configuration, as an anonymous object
 */
const Angular2to1Config =  {

    //PromiseHook configuration
    DEBOUNCE_DIGEST : false,
    DEBOUNCE_DIGEST_MILLIS : 25,
    ASYNC_AWAIT_ENABLED : true,

    //Further configuration
    ALLOW_DECORATORS_IN_SERVICES : true
};

export {Angular2to1Config as config};