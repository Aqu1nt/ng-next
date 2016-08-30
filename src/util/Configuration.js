// The purpose of this file is to provide an easy configuration API
// accesible from the outside

/**
 * The module configuration, as an anonymous object
 */
const NgNextConfig =  {

    //Angular module
    MODULE : undefined,

    //Zone.js
    ZONE_JS : true,

    //Further configuration
    ALLOW_DECORATORS_IN_SERVICES : true,

    //Decorators
    STATE_DECORATOR : state => state
};

export {NgNextConfig as config};