// The purpose of this file is to provide an easy configuration API
// accesible from the outside

/**
 * The module configuration, as an anonymous object
 */
const NgNextConfig =  {
    //Angular module
    MODULE : undefined,

    /**
     * @deprecated since zone.js integration is used for change detection
     */
    DEBOUNCE_DIGEST_MILLIS : false,

    /**
     * @deprecated since zone.js integration is used for change detection
     */
    ASYNC_AWAIT_ENABLED : false,

    //Further configuration
    ALLOW_DECORATORS_IN_SERVICES : true,

    //Decorators
    STATE_DECORATOR : state => state
};

export {NgNextConfig as config};