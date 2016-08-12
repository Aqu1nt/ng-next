// The purpose of this file is to provide an easy configuration API
// accesible from the outside

/**
 * The module configuration, as an anonymous object
 */
const NgNextConfig =  {
    //Angular module
    MODULE : undefined,

    //Angular module
    MODULE : null,

    //PromiseHook configuration
    DEBOUNCE_DIGEST_MILLIS : false,
    ASYNC_AWAIT_ENABLED : true,

    //Further configuration
    ALLOW_DECORATORS_IN_SERVICES : true,

    //Decorators
    STATE_DECORATOR : state => state
};

export {NgNextConfig as config};