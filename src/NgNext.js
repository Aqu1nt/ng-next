// import "./integration/ES6PromiseHook" DEPRECATED for the sake of zone.js
import "./util/AngularModuleResolver" //Initialize the resolver at least once
import "./integration/WatchIterableFix"
// import "./integration/NG2EventBinding" still experimental


//Export the angular zone
export {NgZone} from "./integration/ZoneJSIntegration"

//Export config
export {config} from "./util/Configuration"

//Export decorators
export {Controller} from "./decorators/Controller"
export {Service} from "./decorators/Service"
export {Directive} from "./decorators/Directive"
export {Component, Bind} from "./decorators/Component"
export {Filter} from "./decorators/Filter"
export {Config} from "./decorators/Config"
export {Run} from "./decorators/Run"
export {View} from "./decorators/View"
export {Alias} from "./decorators/Alias"
export {Self} from "./decorators/Self"
export {State} from "./decorators/State"
export {Inject} from "./decorators/Inject"
export {Init, Destroy, Watch, WatchCollection, On, Debounce, Schedule, Abstract} from "./decorators/MethodDecorators"