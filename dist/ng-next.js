(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.NgNext = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Abstract = exports.Schedule = exports.Debounce = exports.On = exports.WatchCollection = exports.Watch = exports.Destroy = exports.Init = exports.Inject = exports.State = exports.Self = exports.Alias = exports.View = exports.Run = exports.Config = exports.Filter = exports.Bind = exports.Component = exports.Directive = exports.Service = exports.Controller = exports.config = exports.NgZone = undefined;

var _ZoneJSIntegration = _dereq_("./integration/ZoneJSIntegration");

Object.defineProperty(exports, "NgZone", {
  enumerable: true,
  get: function get() {
    return _ZoneJSIntegration.NgZone;
  }
});

var _Configuration = _dereq_("./util/Configuration");

Object.defineProperty(exports, "config", {
  enumerable: true,
  get: function get() {
    return _Configuration.config;
  }
});

var _Controller = _dereq_("./decorators/Controller");

Object.defineProperty(exports, "Controller", {
  enumerable: true,
  get: function get() {
    return _Controller.Controller;
  }
});

var _Service = _dereq_("./decorators/Service");

Object.defineProperty(exports, "Service", {
  enumerable: true,
  get: function get() {
    return _Service.Service;
  }
});

var _Directive = _dereq_("./decorators/Directive");

Object.defineProperty(exports, "Directive", {
  enumerable: true,
  get: function get() {
    return _Directive.Directive;
  }
});

var _Component = _dereq_("./decorators/Component");

Object.defineProperty(exports, "Component", {
  enumerable: true,
  get: function get() {
    return _Component.Component;
  }
});
Object.defineProperty(exports, "Bind", {
  enumerable: true,
  get: function get() {
    return _Component.Bind;
  }
});

var _Filter = _dereq_("./decorators/Filter");

Object.defineProperty(exports, "Filter", {
  enumerable: true,
  get: function get() {
    return _Filter.Filter;
  }
});

var _Config = _dereq_("./decorators/Config");

Object.defineProperty(exports, "Config", {
  enumerable: true,
  get: function get() {
    return _Config.Config;
  }
});

var _Run = _dereq_("./decorators/Run");

Object.defineProperty(exports, "Run", {
  enumerable: true,
  get: function get() {
    return _Run.Run;
  }
});

var _View = _dereq_("./decorators/View");

Object.defineProperty(exports, "View", {
  enumerable: true,
  get: function get() {
    return _View.View;
  }
});

var _Alias = _dereq_("./decorators/Alias");

Object.defineProperty(exports, "Alias", {
  enumerable: true,
  get: function get() {
    return _Alias.Alias;
  }
});

var _Self = _dereq_("./decorators/Self");

Object.defineProperty(exports, "Self", {
  enumerable: true,
  get: function get() {
    return _Self.Self;
  }
});

var _State = _dereq_("./decorators/State");

Object.defineProperty(exports, "State", {
  enumerable: true,
  get: function get() {
    return _State.State;
  }
});

var _Inject = _dereq_("./decorators/Inject");

Object.defineProperty(exports, "Inject", {
  enumerable: true,
  get: function get() {
    return _Inject.Inject;
  }
});

var _MethodDecorators = _dereq_("./decorators/MethodDecorators");

Object.defineProperty(exports, "Init", {
  enumerable: true,
  get: function get() {
    return _MethodDecorators.Init;
  }
});
Object.defineProperty(exports, "Destroy", {
  enumerable: true,
  get: function get() {
    return _MethodDecorators.Destroy;
  }
});
Object.defineProperty(exports, "Watch", {
  enumerable: true,
  get: function get() {
    return _MethodDecorators.Watch;
  }
});
Object.defineProperty(exports, "WatchCollection", {
  enumerable: true,
  get: function get() {
    return _MethodDecorators.WatchCollection;
  }
});
Object.defineProperty(exports, "On", {
  enumerable: true,
  get: function get() {
    return _MethodDecorators.On;
  }
});
Object.defineProperty(exports, "Debounce", {
  enumerable: true,
  get: function get() {
    return _MethodDecorators.Debounce;
  }
});
Object.defineProperty(exports, "Schedule", {
  enumerable: true,
  get: function get() {
    return _MethodDecorators.Schedule;
  }
});
Object.defineProperty(exports, "Abstract", {
  enumerable: true,
  get: function get() {
    return _MethodDecorators.Abstract;
  }
});

_dereq_("./util/AngularModuleResolver");

_dereq_("./integration/WatchIterableFix");

},{"./decorators/Alias":2,"./decorators/Component":3,"./decorators/Config":4,"./decorators/Controller":5,"./decorators/Directive":6,"./decorators/Filter":7,"./decorators/Inject":8,"./decorators/MethodDecorators":9,"./decorators/Run":10,"./decorators/Self":11,"./decorators/Service":12,"./decorators/State":13,"./decorators/View":14,"./integration/WatchIterableFix":15,"./integration/ZoneJSIntegration":16,"./util/AngularModuleResolver":17,"./util/Configuration":19}],2:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Alias = Alias;

var _Symbols = _dereq_("../util/Symbols");

/**
 * Sets the alias for a controller, can only be used together with @State
 * and @Component
 * @decorator
 */
function Alias(alias) {
    return function (target, name) {
        (target[name] || target)[_Symbols.alias] = alias;
        return target;
    };
}

},{"../util/Symbols":21}],3:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Component = Component;
exports.Bind = Bind;

var _AngularModuleResolver = _dereq_("../util/AngularModuleResolver");

var _View = _dereq_("./View");

var _Symbols = _dereq_("../util/Symbols");

var symbols = _interopRequireWildcard(_Symbols);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Defines the class as Component
 *
 * A component is typically restricted to "E" => Element, meaning it will look like
 * <component></component> in html.
 *
 * You can configure the decorator either just with the component selector as string, or
 * with a typical angular directive config object, there are some shortcuts available:
 *  - controllerAs => as
 *  - scope => bind
 *  - template => view
 *
 *  A Component doesn't use the scope, but binds all properties to the controller directly instead.
 *
 *  If you're using class properties you can use the @Bind([type]) decorator to directly indicate the
 *  attributes that should be bound to the outer scope
 *
 * The @Component decorator can be used together with @View and @Alias and @Bind!
 *
 * @decorator
 * @param name
 * @param conf
 * @exports
 */
function Component(name) {
    var conf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (name.constructor != String) {
        name = name.selector || name.name;
    }

    conf.controllerAs = conf.as || conf.controllerAs;
    conf.restrict = conf.restrict || "E";

    if (conf.bindings == false) conf.bindings = false;else conf.bindings = conf.bindings || conf.bind || {};

    if (conf.bindings == false) {
        throw new Error("Components must have an isolated binding! in " + name);
    }

    conf.template = conf.view || conf.template;

    return function (target) {
        conf.controller = target;

        _AngularModuleResolver.module.then(function (m) {

            m.directive(name, function () {

                //Merge @Bind properties
                conf.bindings = Object.assign(conf.bindings || {}, target[symbols.bind] || {});

                conf.controllerAs = target[symbols.alias] || conf.controllerAs || "$ctrl";
                conf.bindToController = conf.bindings;

                (0, _View.decorateView)(target, conf);

                return conf;
            });
        });
    };
}

/**
 * Defines a class property as bound attribute
 * @decorator
 * @param bindType = or & or @
 * @param [attributeName] the name of the attribute, defaults to the property name
 * @return {function(*, *, *)}
 */
function Bind(bindType, attributeName) {
    return function (target, name, desc) {

        //Set default attribute name
        if (!attributeName) attributeName = name;

        //Add the bind property to the type
        var type = target.constructor;
        type[symbols.bind] = type[symbols.bind] || {};
        type[symbols.bind][name] = bindType + attributeName;

        return {
            writable: true,
            value: desc.value
        };
    };
}

},{"../util/AngularModuleResolver":17,"../util/Symbols":21,"./View":14}],4:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Config = Config;

var _AngularModuleResolver = _dereq_("../util/AngularModuleResolver");

var _AngularUtils = _dereq_("../util/AngularUtils");

/**
 * Defines a method as config block
 * @decorator
 * @exports
 */
function Config(target, name) {
  target = (0, _AngularUtils.fetch)(target);
  if (target instanceof Function) _AngularModuleResolver.module.then(function (m) {
    return m.config(target);
  });else _AngularModuleResolver.module.then(function (m) {
    return m.config(target[name]);
  });
}

},{"../util/AngularModuleResolver":17,"../util/AngularUtils":18}],5:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Controller = Controller;

var _AngularModuleResolver = _dereq_("../util/AngularModuleResolver");

var _AngularUtils = _dereq_("../util/AngularUtils");

/**
 * Defines a class as Controller, if no name is provided aka the decorator is
 * used as @Controller then the class name is used as controller name, you can
 * specify the name by using the decorator like @Controller("ControllerName") to
 * make the decorator minify safe
 *
 * @decorator
 * @param {string | function} [clazz]
 */
function Controller(clazz) {
    clazz = (0, _AngularUtils.fetch)(clazz);

    //Function to add the controller
    var addController = function addController(name, clazz) {
        return _AngularModuleResolver.module.then(function (m) {
            return m.controller(name, clazz);
        });
    };

    if (clazz instanceof Function) {
        addController(clazz.name, clazz);
    } else return function (target) {
        addController(clazz, target);
    };
}

},{"../util/AngularModuleResolver":17,"../util/AngularUtils":18}],6:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Directive = Directive;

var _AngularModuleResolver = _dereq_("../util/AngularModuleResolver");

var _AngularUtils = _dereq_("../util/AngularUtils");

var _ES6Directive = _dereq_("../util/ES6Directive");

var _ES6Directive2 = _interopRequireDefault(_ES6Directive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Defines a class or a class method as Directive, if no name is provided aka the decorator is
 * used as @Directive then the class name or the method name is used as directive name, you can
 * specify the name by using the decorator like @Directive("myDirectiy") to
 * make the decorator minify safe
 *
 * @decorator
 * @param {string | function} clazz
 * @param {string} [name]
 * @returns {Function}
 * @exports
 */
function Directive(clazz, name) {
    clazz = (0, _AngularUtils.fetch)(clazz);

    var registerDirective = function registerDirective(name, fn) {
        return _AngularModuleResolver.module.then(function (m) {
            return m.directive(name, (0, _ES6Directive2.default)(fn));
        });
    };

    if (clazz.constructor != String) //Directive is called without name => @Directive
        {
            if (clazz instanceof Function) registerDirective(clazz.name, clazz); //Class
            else registerDirective(name, clazz[name]); //Class method
        } else return function (target, n) {
        //Directive is called without name => @Directive("myDirective")
        if (target instanceof Function) registerDirective(clazz, target); //Class
        else registerDirective(n, target[n]); //Class method
    };
}

},{"../util/AngularModuleResolver":17,"../util/AngularUtils":18,"../util/ES6Directive":20}],7:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Filter = Filter;

var _AngularModuleResolver = _dereq_("../util/AngularModuleResolver");

var _AngularUtils = _dereq_("../util/AngularUtils");

/**
 * REgisters a method as an angular Filter
 * If used like @Filter the method name will be chosen as filter name,
 * Alternatively you can give the filter name as argument, your method will then look
 * like @Filter("myFilter")...
 * @decorator
 * @exports
 */
function Filter(clazz, method) {
    clazz = (0, _AngularUtils.fetch)(clazz);

    //Function to add the controller
    var registerFilter = function registerFilter(name, fn) {
        return _AngularModuleResolver.module.then(function (m) {
            return m.filter(name, fn);
        });
    };

    if (clazz.constructor != String) {
        //With method name as filter name
        registerFilter(method, clazz[method]);
    } else return function (target, method) {
        //With specified name
        registerFilter(clazz, target[method]);
    };
}

},{"../util/AngularModuleResolver":17,"../util/AngularUtils":18}],8:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.Inject = Inject;

var _AngularModuleResolver = _dereq_("../util/AngularModuleResolver");

var _Symbols = _dereq_("../util/Symbols");

var symbols = _interopRequireWildcard(_Symbols);

var _AngularUtils = _dereq_("../util/AngularUtils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Inject one of the following into the object:
 *      - services
 *      - $scope
 *      - any $scope variable
 *
 * the variable: usage =>
 * class foo {
 *      @Inject $timeout;
 *      @Inject("$timeout") tmout;
 *      @Inject fooCtrl
 *      @Inject scopeVar
 *      @Inject $scope
 *
 *      constructor()
 *      {
 *          console.log(this.$timeout, this.tmout);
 *      }
 * }
 *
 * Attention! The property won't get injected instantly, but a getter
 * which will replace itself with the resolved object on the first call,
 * with this technique we're able to resolve circular dependencies sometimes
 *
 * @param target
 * @param name
 * @param descriptor
 * @decorator
 */
function Inject(target, name, descriptor) {
    var fieldName = void 0;
    var injector = function injector(target, name, descriptor) {
        if (descriptor.value instanceof Function) {
            throw new Error("Can't use @Inject on a method");
        }

        return {
            set: function set(value) {
                Object.defineProperty(this, fieldName, { value: value, writable: true });
            },
            get: function get() {

                var $injector = (0, _AngularModuleResolver.angularInjector)();
                var obj = null;
                var injected = false;

                var locals = this[symbols.locals] || currentLocals;

                //Locale
                if (locals && (locals.hasOwnProperty(name) || locals[name])) {
                    obj = locals[name];
                    injected = true;
                }

                //Service
                else if ($injector.has(name)) {
                        obj = $injector.get(name);
                        injected = true;
                    }

                    //$scope or parent scope property
                    else if (locals && locals.$scope && (Reflect.hasOwnProperty(locals.$scope, name) || locals.$scope[name])) {
                            obj = locals.$scope[name];
                            injected = true;
                        }

                if (!injected) {
                    console.error("Wasn't able to @Inject " + name + " as " + fieldName + " into " + target.constructor.name);
                    return;
                }

                Object.defineProperty(this, fieldName, { value: obj, writable: true });
                return obj;
            }
        };
    };

    if (descriptor) {
        fieldName = name;
        return injector(target, name, descriptor);
    } else {
        var _ret = function () {
            var nameReplacement = target;
            return {
                v: function v(target, name, descriptor) {
                    fieldName = name;
                    return injector(target, nameReplacement, descriptor);
                }
            };
        }();

        if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
    }
}

var currentLocals = undefined;
_AngularModuleResolver.module.then(function (m) {
    return m.config(["$provide", function ($provide) {
        $provide.decorator("$controller", ["$delegate", function ($delegate) {
            return function (expression, locals, later, ident) {

                //For usage in constructor
                currentLocals = locals;

                //Create the controller
                var controller = $delegate(expression, locals, later, ident);

                //Reset the locals
                currentLocals = undefined;

                //Check if its an object
                if (!later) {
                    controller[symbols.locals] = locals;
                    controller[symbols.scope] = locals.$scope;
                    (0, _AngularUtils.callAnnotations)(controller, locals.$scope);
                    return controller;
                } else {
                    return function () {
                        currentLocals = locals;
                        var c = controller();
                        currentLocals = undefined;
                        c[symbols.locals] = locals;
                        c[symbols.scope] = locals.$scope;
                        (0, _AngularUtils.callAnnotations)(c, locals.$scope);
                        return c;
                    };
                }
            };
        }]);
    }]);
});

},{"../util/AngularModuleResolver":17,"../util/AngularUtils":18,"../util/Symbols":21}],9:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Init = Init;
exports.Destroy = Destroy;
exports.Watch = Watch;
exports.WatchCollection = WatchCollection;
exports.Schedule = Schedule;
exports.On = On;
exports.Debounce = Debounce;
exports.Abstract = Abstract;

var _AngularModuleResolver = _dereq_("../util/AngularModuleResolver");

var _Symbols = _dereq_("../util/Symbols");

var symbols = _interopRequireWildcard(_Symbols);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// This file contains the following decorators
// @Init
// @Destroy
// @Watch
// @WatchCollection
// @On
// @Debounce
// @Abstract

/**
 * Executes all Methods annotated with this annotation after
 * the object has been created
 *
 * Only working in services and controllers!
 *
 * @decorator
 */
function Init(target, name, descriptor) {
    if (!descriptor) {
        throw new Error("@Init can only be used on class methods");
    }
    target[symbols.init] = target[symbols.init] || [];
    target[symbols.init].push(name);
}

/**
 * Executes all Methods annotated with this annotation after
 * the object gets destroyed.
 *
 * Only usable in controllers!
 *
 * @param target
 * @param name
 * @exports
 * @decorator
 */
function Destroy(target, name) {
    target[symbols.destroy] = target[symbols.destroy] || [];
    target[symbols.destroy].push(name);
}

/**
 * Sets a $watch on the given controller evaluation, the method will be used
 * as regular $watch callback.
 *
 * If your controller has a property "foo" the following method would watch for
 * changes on "foo"
 *
 * \@Watch("foo")
 * fooChanged(newVal, oldVal)
 * {
 *  ........
 * }
 *
 * @param property
 * @param {boolean} [deep]
 * @exports
 * @decorator
 */
function Watch(property) {
    var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


    return function (target, name) {
        target[symbols.watch] = target[symbols.watch] || [];
        target[symbols.watch].push({ property: property, name: name, deep: deep, collection: false });
    };
}

/**
 * Same as @Watch but for collections
 * @param [property]
 * @exports
 * @decorator
 */
function WatchCollection(property) {

    return function (target, name) {
        target[symbols.watch] = target[symbols.watch] || [];
        target[symbols.watch].push({ property: property, name: name, false: false, collection: true });
    };
}

/**
 * Schedules the method so it will get executed every n milliseconds
 * @param interval in milliseconds
 * @decorator
 */
function Schedule(interval) {
    return function (target, name, desc) {
        target[symbols.schedule] = target[symbols.schedule] || [];
        target[symbols.schedule].push({ interval: interval, name: name });
    };
}

/**
 * Registers the method as an eventhandler via $scope.$on
 *
 * \@On("$stateChangeSucces")
 * stateChanged(newState, oldState ...)
 * {
 *  .......
 * }
 *
 * @param event
 * @decorator
 */
function On(event) {
    return function (target, name, desc) {
        target[symbols.on] = target[symbols.on] || [];
        target[symbols.on].push({ event: event, name: name });
    };
}

/**
 * Debounces the method so it will only get executed after it hasn't been called
 * for n millis
 *
 * @param millis
 * @param {boolean} [angularTimeout=true] - if false the window timeout will get used
 * @returns {Function}
 * @decorator
 */
function Debounce(millis) {
    var angularTimeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    return function (target, name, desc) {
        var timeout = void 0;
        var fn = desc.value;
        desc.value = function () {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            //Setup
            var context = this;
            var timeoutFn = function timeoutFn() {
                fn.apply(context, args);
            };

            //Use angular $timeout ($apply cycle)
            if (angularTimeout) {
                var $timeout = (0, _AngularModuleResolver.angularInjector)().get("$timeout");
                $timeout.cancel(timeout);
                timeout = $timeout(timeoutFn, millis);
            }
            //Use window timeout
            else {
                    clearTimeout(timeout);
                    timeout = setTimeout(timeoutFn, millis);
                }
        };
    };
}

/**
 * Marks a method as abstract, this means the method will get replaced
 * with one that throws an error when called saying the method
 * is not implemented
 * @param target
 * @param name
 * @param desc
 * @decorator
 */
function Abstract(target, name, desc) {
    desc.value = function () {
        throw new Error(target.name + "@" + name + " is not implemented (Abstract)");
    };
}

},{"../util/AngularModuleResolver":17,"../util/Symbols":21}],10:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Run = Run;

var _AngularModuleResolver = _dereq_("../util/AngularModuleResolver");

var _AngularUtils = _dereq_("../util/AngularUtils");

/**
 * Defines a method as run block
 * @decorator
 * @exports
 */
function Run(target, name) {
  target = (0, _AngularUtils.fetch)(target);
  if (target instanceof Function) _AngularModuleResolver.module.then(function (m) {
    return m.run(target);
  });else _AngularModuleResolver.module.then(function (m) {
    return m.run(target[name]);
  });
}

},{"../util/AngularModuleResolver":17,"../util/AngularUtils":18}],11:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.Self = Self;
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
function Self() {
    if (arguments.length === 1) {
        return boundClass.apply(undefined, arguments);
    } else {
        return boundMethod.apply(undefined, arguments);
    }
}

/**
 * Use boundMethod to bind all methods on the target.prototype
 */
function boundClass(target) {
    // (Using reflect to get all keys including symbols)
    var keys = void 0;
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

    keys.forEach(function (key) {
        // Ignore special case target method
        if (key === 'constructor') {
            return;
        }

        var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);

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
    var fn = descriptor.value;

    if (typeof fn !== 'function') {
        throw new Error('@Self decorator can only be applied to methods not: ' + (typeof fn === 'undefined' ? 'undefined' : _typeof(fn)));
    }

    return {
        configurable: true,
        get: function get() {
            var self = this;
            return function () {
                for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
                    params[_key] = arguments[_key];
                }

                return fn.call.apply(fn, [self].concat(params));
            };
        }
    };
}

},{}],12:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Service = Service;

var _AngularModuleResolver = _dereq_("../util/AngularModuleResolver");

var _AngularUtils = _dereq_("../util/AngularUtils");

/**
 * Defines a class as Service, if no name is provided aka the decorator is
 * used as @Service then the class name is used as service name, you can
 * specify the name by using the decorator like @Service("ServiceName") to
 * make the decorator minify safe
 *
 * @decorator
 * @param {string | function} [clazz]
 */
function Service(clazz) {
    clazz = (0, _AngularUtils.fetch)(clazz);

    //Function to add the controller
    var addService = function addService(name, clazz) {
        return _AngularModuleResolver.module.then(function (m) {
            return m.service(name, clazz);
        });
    };

    if (clazz instanceof Function) {
        addService(clazz.name, clazz);
    } else return function (target) {
        addService(clazz, target);
    };
}

},{"../util/AngularModuleResolver":17,"../util/AngularUtils":18}],13:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.State = State;

var _Controller = _dereq_("./Controller");

var _AngularModuleResolver = _dereq_("../util/AngularModuleResolver");

var _View = _dereq_("./View");

var _Configuration = _dereq_("../util/Configuration");

var _Symbols = _dereq_("../util/Symbols");

var symbols = _interopRequireWildcard(_Symbols);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Angular UI Router support
 *
 * With this Decorator you are able to decorate any class with @State,
 * as parameter you will give the usual state config
 *
 * In addition you can specify a default state by adding default : true
 * to the state config, this state will be called when a 404 aka a missing
 * url is requested. You're also able to shorten controllerAS to as.
 *
 * The class which is being decorated with @State will work as controller
 * for the specified state
 *
 * The State decorator works best with @Alias and @View
 *
 * @decorator
 * @param conf
 * @returns {Function}
 * @exports
 */
function State(conf) {
    return function (target) {
        target[symbols.state] = conf;
        (0, _Controller.Controller)(target);
        return target;
    };
}

/**
 * Tries to configure the state from the $$state var on
 * the all controllers
 * @param clazz
 */
_AngularModuleResolver.module.then(function (m) {
    m.config(["$injector", function ($injector) {
        "ngInject";

        var registeredControllers = [];
        var states = [];

        //Find every state controller
        m._invokeQueue.forEach(function (item) {
            var constructor = item[2][1];
            if (registeredControllers.find(function (t) {
                return t.type == constructor;
            })) return;
            if (constructor[symbols.state]) {
                constructor[symbols.state].clazz = constructor;
                states.push(constructor[symbols.state]);
                registeredControllers.push({ type: constructor });
            }
        });

        //Return if ui-router is not installed
        if (!$injector.has("$stateProvider")) {

            if (states.length) {
                console.error("Error: @State is used but ui-router is not installed!");
            }
            return;
        }

        //Fetch the state provider
        var $stateProvider = $injector.get("$stateProvider");
        var $urlRouterProvider = $injector.get("$urlRouterProvider");

        //Indicator if a default state has been set
        var defaultState = false;

        //Configure all states
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            var _loop = function _loop() {
                var conf = _step.value;

                var clazz = conf.clazz;

                //Set the default state if
                if (conf.default) {
                    if (defaultState) {
                        throw new Error("Default state has already been set while configuring " + conf.name + ", other default: " + defaultState.name);
                    }
                    defaultState = conf;
                    $urlRouterProvider.otherwise(function ($injector) {
                        $injector.invoke(['$state', function ($state) {
                            $state.go(conf.name, {}, { location: "replace" });
                        }]);
                    });
                }

                //Set the controller
                conf.controller = clazz;
                conf.controllerAs = conf.as || conf.controllerAs || clazz[symbols.alias];

                //Attempt to decorate @View decorator
                (0, _View.decorateView)(clazz, conf);

                //Apply decorators
                var decoratedConf = _Configuration.config.STATE_DECORATOR(conf);
                if (decoratedConf) conf = decoratedConf;

                //Finally configure the state onto the ui-router
                $stateProvider.state(conf);
            };

            for (var _iterator = states[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                _loop();
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }]);
});

},{"../util/AngularModuleResolver":17,"../util/Configuration":19,"../util/Symbols":21,"./Controller":5,"./View":14}],14:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.View = View;
exports.decorateView = decorateView;

var _Symbols = _dereq_("../util/Symbols");

var symbols = _interopRequireWildcard(_Symbols);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Sets the view of an @Component or a @State can either be
 * a template or a templateUrl, the view is recognized as template
 * if it contains at least 1 tag!
 * @param view
 * @Decorator
 */
function View(view) {
    return function (target) {
        target[symbols.view] = view;
        return target;
    };
}

/**
 * Decorates the view to the configuration
 * @param clazz
 * @param conf
 */
function decorateView(clazz, conf) {
    var view = clazz[symbols.view];
    if (!view) return;
    var urlRegex = /[^<>]+\.[A-Za-z]{2,5}$/;
    if (urlRegex.test(view)) {
        //url
        conf.templateUrl = view;
    } else {
        conf.template = view;
    }
}

},{"../util/Symbols":21}],15:[function(_dereq_,module,exports){
"use strict";

var _AngularModuleResolver = _dereq_("../util/AngularModuleResolver");

/**
 * This module targets angulars missing ability to track objects following the ES6 iterator pattern,
 * where any object which has a [Symbol.iterator]() method is iterable.
 *
 * This module monkey patches every $scope to proxy $watchCollection and transform a possible iterable
 * into a simple array.
 *
 * If you want to access the original methods, you will have to call $scope[Symbol.for("$watchCollection")]
 */
_AngularModuleResolver.module.then(function (module) {
    /**
     * Hook into the $rootScopeProvider to make sure we're the first ones to modify the $rootScope
     */
    module.config(["$rootScopeProvider", function ($rootScopeProvider) {
        var $get = $rootScopeProvider.$get;
        $rootScopeProvider.$get = ["$injector", "$parse", function ($injector, $parse) {
            var $rootScope = $injector.invoke($get);

            monkeyPatch$watchCollection($rootScope, $parse);
            monkeyPatch$watchCollection($rootScope.__proto__.constructor.prototype, $parse);

            return $rootScope;
        }];
    }]);
});

/**
 * Global symbols to access the
 * @type {Symbol}
 * @private
 */
var $watchCollection = Symbol.for("$watchCollection");

/**
 * Here we're actually patching the $watchCollection method
 * @param $target
 * @param $parse
 */
function monkeyPatch$watchCollection($target, $parse) {
    $target[$watchCollection] = $target.$watchCollection;

    $target.$watchCollection = function (property, action) {

        var isFunc = typeof property == 'function';
        var getter = isFunc ? property : $parse(property);
        var iterableAsArray = undefined;
        var $scope = this;

        var monkeyPatchedObserver = function monkeyPatchedObserver() {
            var resolved = getter(isFunc ? undefined : $scope);

            if (resolved && !(resolved instanceof Array) && resolved[Symbol.iterator]) {
                //Reference changed, change our too
                if (resolved !== iterableAsArray) {
                    iterableAsArray = [];
                }

                //Refill array
                iterableAsArray.length = 0;
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = resolved[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var item = _step.value;

                        iterableAsArray.push(item);
                    }

                    //And return it as result of the watch expression
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                return iterableAsArray;
            }
            iterableAsArray = undefined;

            //If it's not an iterable non-array just return the original object
            console.log(resolved, property);
            return resolved;
        };

        return this[$watchCollection](monkeyPatchedObserver, action); //Must be this way because of maximum call stack size exceeded error
    };
}

},{"../util/AngularModuleResolver":17}],16:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ngZoneModule = exports.NgZone = undefined;

var _Configuration = _dereq_("../util/Configuration");

//The default zone where runOutsideAngular() calls are being executed
var outerZone = Zone.current;

//Create the angular zone
var NgZone = exports.NgZone = outerZone.fork({
    name: "Angular Zone <ng-next>",
    onInvoke: function onInvoke(delegate, current, target, callback, applyThis, args) {
        try {
            NgZone.$digested = false;
            return delegate.invoke(target, callback, applyThis, args);
        } finally {
            $digestOnce();
        }
    },
    onInvokeTask: function onInvokeTask(delegate, current, target, task, applyThis, args) {
        try {
            NgZone.$digested = false;
            return delegate.invokeTask(target, task, applyThis, args);
        } finally {
            $digestOnce();
        }
    }
});

// Add $digest to the zone
NgZone.$digest = function () {};

// Digests only if not already done
var $digestOnce = function $digestOnce() {
    if (!NgZone.$digested) NgZone.$digest();
    NgZone.$digested = false;
};

// Add runOutsideAngular to the zone
NgZone.runOutsideAngular = function (fn) {
    outerZone.run(fn);
};

//NgZone module
var ngZoneModule = exports.ngZoneModule = angular.module("ngZone", []);
ngZoneModule.factory("NgZone", function () {
    return NgZone;
});

//Add auto-bootstrap handler
angular.element(document).ready(function () {

    if (!_Configuration.config.ZONE_JS) {
        angular.resumeBootstrap();
    } else {
        NgZone.run(function () {

            //Export the angular zone onto the window if not existing
            window.NgZone = window.NgZone || NgZone;

            //Resume bootstrap inside of our angular zone
            angular.resumeBootstrap(["ngZone"]).invoke(["$rootScope", function ($rootScope) {

                //Patch root scopes digest to set an indicator on the zone
                var digestSymbol = Symbol.for("$digest");
                $rootScope[digestSymbol] = $rootScope.$digest;

                //If you want to digest on zone leave give "false" as parameter to $rootScope.$digest
                $rootScope.$digest = function () {
                    var disableZoneJS = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

                    if (disableZoneJS) NgZone.$digested = true;
                    this[digestSymbol]();
                };

                //Add digest to the angular zone
                NgZone.$digest = function () {
                    if (!$rootScope.$$phase) {
                        $rootScope.$digest();
                    }
                };
            }]);
        });
    }
});

//Force angular to stop the bootstrap process
window.name = "NG_DEFER_BOOTSTRAP!";

},{"../util/Configuration":19}],17:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.module = undefined;
exports.lookupAngularModule = lookupAngularModule;
exports.useAngularModule = useAngularModule;
exports.angularInjector = angularInjector;

var _Configuration = _dereq_("./Configuration");

/**
 * Reference to the angular module used by Angular2to1, this module is either
 * resolved via ng-app or by useAngularModule(...)
 */
var angularModule = null;

/**
 * The injector of our main module
 * This $injector service is set as soon as the module was requested
 * the first time and angular is beyond its run phase
 */
var $injector = null;
var $injectorRequested = false;

var requestInjector = function requestInjector() {
    if (angularModule && !$injectorRequested) {
        angularModule.run(["$injector", function (i) {
            return $injector = i;
        }]);
        $injectorRequested = true;
    }
};

/**
 * Attempts to lookup the root angular module of the app by resolving the first
 * ng-app on the DOM
 * As an alternative you can set your module with useAngularModule(), which will
 * then be returned by this function
 */
function lookupAngularModule() {
    try {
        //Get manually specified module from config
        if (_Configuration.config.MODULE && !angularModule) {
            angularModule = _Configuration.config.MODULE;
        }

        //Returns the preset module if available
        if (angularModule) {
            return angularModule;
        }

        var ngAppHolder = angular.element(document.querySelector("[ng-app]"));

        if (!ngAppHolder.length) {
            throw new Error("No element with [ng-app] found and no module set with 'useAngularModule()'");
        }

        var moduleName = ngAppHolder[0].getAttribute('ng-app');
        angularModule = angular.module(moduleName);

        return angularModule;
    } finally {
        requestInjector();
    }
}

/**
 * Sets the angular module which is used by Angular2to1
 * @param module
 */
function useAngularModule(module) {
    angularModule = module;
    requestInjector();
}

/**
 * Returns the main $injector of the root angular
 * module, is available as soon as the module has been requested at least
 * once and angular is beyond its run phase
 * @decorator
 * @return {*}
 */
function angularInjector() {
    return $injector;
}

function moduleError(e) {
    console.log(e);
}

var modulePromise = new Promise(function (resolve) {
    try //If we're lucky the module does already exist
    {
        var module = lookupAngularModule();
        requestInjector();
        resolve(module);
    } catch (e) //Otherwise we must attempt to await its creation
    {
        /**
         * If ng-app is defined we're monkey patching angulars module() function
         * in order to get notified as soon as the module is available
         * @type {Object}
         */
        var ngAppHolder = angular.element(document.querySelector("[ng-app]"));
        if (ngAppHolder.length) {
            (function () {
                var appModuleName = ngAppHolder[0].getAttribute('ng-app');
                var origModuleFunction = angular.module;

                if (!angular) {
                    throw new Error("Please include angular before ng-next!");
                }

                //Monkey patch the module function to detect its creation
                angular.module = function (name, dependencies) {
                    var module = origModuleFunction(name, dependencies);

                    //Our main module is available
                    if (name == appModuleName && dependencies) {
                        angular.module = origModuleFunction;
                        angularModule = module;
                        requestInjector();
                        resolve(module);
                    }

                    return module;
                };
            })();
        } else {
            (function () {
                //In case no ng-app is available we must monkey patch the config object to get
                //Notified when the module is getting configured
                var moduleSymbol = Symbol("MODULE");
                Object.defineProperty(_Configuration.config, "MODULE", {
                    set: function set(module) {
                        if (!_Configuration.config[moduleSymbol]) {
                            angularModule = module;
                            requestInjector();
                            resolve(module);
                        }
                        _Configuration.config[moduleSymbol] = module;
                    },
                    get: function get() {
                        return _Configuration.config[moduleSymbol];
                    }
                });
            })();
        }
    }
});

exports.module = modulePromise;

},{"./Configuration":19}],18:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetch = fetch;
exports.callAnnotations = callAnnotations;

var _AngularModuleResolver = _dereq_("./AngularModuleResolver");

var _Configuration = _dereq_("./Configuration");

var _Symbols = _dereq_("../util/Symbols");

var symbols = _interopRequireWildcard(_Symbols);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * If the argument is an array (inject) this method
 * will return only the function with the $inject property
 * set
 * @param arg
 * @returns {Function}
 */
function fetch(arg) {
    if (arg.constructor == Array) {
        var arr = arg;
        arg = arr.splice(arr.length - 1, 1)[0];
        arg.$inject = arr;
    }
    return arg;
}

// Run block which will configure all annotations on any services available
// All services are used together with the $rootScope
/**
 * Exposes all services of a single module
 * @param module
 */
var exposeModule = function exposeModule(module) {
    var $injector = (0, _AngularModuleResolver.angularInjector)();
    var $rootScope = $injector.get("$rootScope");
    module._invokeQueue.forEach(function (item) {
        var def = item[2];
        if ($injector.has(def[0])) {
            var service = $injector.get(def[0]);
            callAnnotations(service, $rootScope);
        }
    });
};

//Await the angular module
_AngularModuleResolver.module.then(function (m) {
    m.run(function () {
        if (_Configuration.config.ALLOW_DECORATORS_IN_SERVICES) {
            exposeModule(m);
        }
    });
});

/**
 * Calls all registered annotations on the controller, or on
 * a service
 * @param controller
 * @param $scope
 */
function callAnnotations(controller, $scope) {
    //Async wrapper
    var asyncWrapper = function asyncWrapper(result) {
        if (result instanceof Promise) {
            result.then(function () {
                return $scope.$digest.call($scope);
            });
        }
    };

    //Call init methods
    var inited = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = (controller[symbols.init] || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var initializer = _step.value;

            if (!inited.includes(initializer)) {
                asyncWrapper(controller[initializer]());
            }
            inited.push(initializer);
        }

        //Bind watches
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    var watched = [];
    var $parse = (0, _AngularModuleResolver.angularInjector)().get("$parse");
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        var _loop = function _loop() {
            var watcher = _step2.value;

            if (!watched.includes(watcher)) {
                (function () {

                    //Parse the angular expression
                    var parse = $parse(watcher.property);
                    var getter = function getter() {
                        return parse(controller);
                    };

                    var action = function () {
                        controller[watcher.name].apply(controller, arguments);
                    }.bind(controller);

                    if (!watcher.collection) $scope.$watch(getter, action, !!watcher.deep);else $scope.$watchCollection(getter, action);
                })();
            }
            watched.push(watcher);
        };

        for (var _iterator2 = (controller[symbols.watch] || [])[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            _loop();
        }

        //Bind events
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    var evented = [];
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        var _loop2 = function _loop2() {
            var on = _step3.value;

            if (!evented.includes(on)) {
                $scope.$on(on.event, function () {
                    asyncWrapper(controller[on.name].apply(controller, arguments));
                }).bind(controller);
            }
            evented.push(on);
        };

        for (var _iterator3 = (controller[symbols.on] || [])[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            _loop2();
        }

        //Scheduled methods
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }

    var $interval = (0, _AngularModuleResolver.angularInjector)().get("$interval");
    var scheduled = [];
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        var _loop3 = function _loop3() {
            var schedule = _step4.value;

            if (!scheduled.includes(schedule)) {
                (function () {
                    var id = $interval(function () {
                        asyncWrapper(controller[schedule.name]());
                    }.bind(controller), schedule.interval);
                    $scope.$on("$destroy", function () {
                        return $interval.cancel(id);
                    });
                })();
            }
        };

        for (var _iterator4 = (controller[symbols.schedule] || [])[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            _loop3();
        }

        //Call destroy methods
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
            }
        } finally {
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
    }

    $scope.$on("$destroy", function () {
        var destroyed = [];
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
            for (var _iterator5 = (controller[symbols.destroy] || [])[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var destroyer = _step5.value;

                if (!destroyed.includes(destroyer)) controller[destroyer]();
                destroyed.push(destroyer);
            }
        } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion5 && _iterator5.return) {
                    _iterator5.return();
                }
            } finally {
                if (_didIteratorError5) {
                    throw _iteratorError5;
                }
            }
        }
    });
}

},{"../util/Symbols":21,"./AngularModuleResolver":17,"./Configuration":19}],19:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// The purpose of this file is to provide an easy configuration API
// accesible from the outside

/**
 * The module configuration, as an anonymous object
 */
var NgNextConfig = {

    //Angular module
    MODULE: undefined,

    //Zone.js
    ZONE_JS: true,

    //Further configuration
    ALLOW_DECORATORS_IN_SERVICES: true,

    //Decorators
    STATE_DECORATOR: function STATE_DECORATOR(state) {
        return state;
    }
};

exports.config = NgNextConfig;

},{}],20:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (directive) {
    /**
     * Fetch function from array
     */
    if (directive.constructor == Array) {
        var arr = directive;
        directive = arr.splice(arr.length - 1, 1)[0];
        directive.$inject = arr;
    }

    //Check if directive is an actual class
    try {
        directive();
        return directive;
    } catch (e) {
        //Continue and wrap class to make it usable in angular
        if (!(e instanceof TypeError)) return directive;
    }

    var fn = function fn() {
        for (var _len = arguments.length, inject = Array(_len), _key = 0; _key < _len; _key++) {
            inject[_key] = arguments[_key];
        }

        //Create Directive
        var instance = new (Function.prototype.bind.apply(directive, [null].concat(inject)))();

        //Wrap link call to keep this references
        if (!!instance.link) {
            (function () {
                var link = instance.link;

                instance.link = function () {
                    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                        args[_key2] = arguments[_key2];
                    }

                    link.apply(instance, args);
                };
            })();
        }

        //Wrap compile call to keep "this" reference
        if (!!instance.compile) {
            (function () {
                var compile = instance.compile;

                instance.compile = function () {
                    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                        args[_key3] = arguments[_key3];
                    }

                    return compile.apply(instance, args);
                };
            })();
        }

        //Return the directive to angular
        return instance;
    };

    //Keep ngAnnotate injects
    fn.$inject = directive.$inject;

    return fn;
};

; /**
   * This wrapper enables an intuitive way to use of es6 classes
   * as angular directive.
   * If you wrap your directive class with this function you can
   * use link/compile functions with "this" reference and @ngInject
   * on both the constructor and the controller!
   *
   * @param directive
   */

},{}],21:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var state = exports.state = Symbol("@State");
var view = exports.view = Symbol("@View");
var alias = exports.alias = Symbol("@Alias");
var init = exports.init = Symbol("@Init");
var destroy = exports.destroy = Symbol("@Destroy");
var watch = exports.watch = Symbol("@Watch");
var on = exports.on = Symbol("@On");
var schedule = exports.schedule = Symbol("@Schedule");
var bind = exports.bind = Symbol("@Bind");
var scope = exports.scope = Symbol("Scope");
var locals = exports.locals = Symbol("Locals");

},{}]},{},[1])(1)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXE5nTmV4dC5qcyIsInNyY1xcZGVjb3JhdG9yc1xcQWxpYXMuanMiLCJzcmNcXGRlY29yYXRvcnNcXENvbXBvbmVudC5qcyIsInNyY1xcZGVjb3JhdG9yc1xcQ29uZmlnLmpzIiwic3JjXFxkZWNvcmF0b3JzXFxDb250cm9sbGVyLmpzIiwic3JjXFxkZWNvcmF0b3JzXFxEaXJlY3RpdmUuanMiLCJzcmNcXGRlY29yYXRvcnNcXEZpbHRlci5qcyIsInNyY1xcZGVjb3JhdG9yc1xcSW5qZWN0LmpzIiwic3JjXFxkZWNvcmF0b3JzXFxNZXRob2REZWNvcmF0b3JzLmpzIiwic3JjXFxkZWNvcmF0b3JzXFxSdW4uanMiLCJzcmNcXGRlY29yYXRvcnNcXFNlbGYuanMiLCJzcmNcXGRlY29yYXRvcnNcXFNlcnZpY2UuanMiLCJzcmNcXGRlY29yYXRvcnNcXFN0YXRlLmpzIiwic3JjXFxkZWNvcmF0b3JzXFxWaWV3LmpzIiwic3JjXFxpbnRlZ3JhdGlvblxcV2F0Y2hJdGVyYWJsZUZpeC5qcyIsInNyY1xcaW50ZWdyYXRpb25cXFpvbmVKU0ludGVncmF0aW9uLmpzIiwic3JjXFx1dGlsXFxBbmd1bGFyTW9kdWxlUmVzb2x2ZXIuanMiLCJzcmNcXHV0aWxcXEFuZ3VsYXJVdGlscy5qcyIsInNyY1xcdXRpbFxcQ29uZmlndXJhdGlvbi5qcyIsInNyY1xcdXRpbFxcRVM2RGlyZWN0aXZlLmpzIiwic3JjXFx1dGlsXFxTeW1ib2xzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OzhCQ09RLE07Ozs7Ozs7OzswQkFHQSxNOzs7Ozs7Ozs7dUJBR0EsVTs7Ozs7Ozs7O29CQUNBLE87Ozs7Ozs7OztzQkFDQSxTOzs7Ozs7Ozs7c0JBQ0EsUzs7Ozs7O3NCQUFXLEk7Ozs7Ozs7OzttQkFDWCxNOzs7Ozs7Ozs7bUJBQ0EsTTs7Ozs7Ozs7O2dCQUNBLEc7Ozs7Ozs7Oztp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QUFNLHdCQUFRLE9BQU8sUUFBUCxDQUFkO0FBQ0EsSUFBTSxzQkFBTyxPQUFPLE9BQVAsQ0FBYjtBQUNBLElBQU0sd0JBQVEsT0FBTyxRQUFQLENBQWQ7QUFDQSxJQUFNLHNCQUFPLE9BQU8sT0FBUCxDQUFiO0FBQ0EsSUFBTSw0QkFBVSxPQUFPLFVBQVAsQ0FBaEI7QUFDQSxJQUFNLHdCQUFRLE9BQU8sUUFBUCxDQUFkO0FBQ0EsSUFBTSxrQkFBSyxPQUFPLEtBQVAsQ0FBWDtBQUNBLElBQU0sOEJBQVcsT0FBTyxXQUFQLENBQWpCO0FBQ0EsSUFBTSxzQkFBTyxPQUFPLE9BQVAsQ0FBYjtBQUNBLElBQU0sd0JBQVEsT0FBTyxPQUFQLENBQWQ7QUFDQSxJQUFNLDBCQUFTLE9BQU8sUUFBUCxDQUFmIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIGltcG9ydCBcIi4vaW50ZWdyYXRpb24vRVM2UHJvbWlzZUhvb2tcIiBERVBSRUNBVEVEIGZvciB0aGUgc2FrZSBvZiB6b25lLmpzXHJcbmltcG9ydCBcIi4vdXRpbC9Bbmd1bGFyTW9kdWxlUmVzb2x2ZXJcIiAvL0luaXRpYWxpemUgdGhlIHJlc29sdmVyIGF0IGxlYXN0IG9uY2VcclxuaW1wb3J0IFwiLi9pbnRlZ3JhdGlvbi9XYXRjaEl0ZXJhYmxlRml4XCJcclxuLy8gaW1wb3J0IFwiLi9pbnRlZ3JhdGlvbi9ORzJFdmVudEJpbmRpbmdcIiBzdGlsbCBleHBlcmltZW50YWxcclxuXHJcblxyXG4vL0V4cG9ydCB0aGUgYW5ndWxhciB6b25lXHJcbmV4cG9ydCB7Tmdab25lfSBmcm9tIFwiLi9pbnRlZ3JhdGlvbi9ab25lSlNJbnRlZ3JhdGlvblwiXHJcblxyXG4vL0V4cG9ydCBjb25maWdcclxuZXhwb3J0IHtjb25maWd9IGZyb20gXCIuL3V0aWwvQ29uZmlndXJhdGlvblwiXHJcblxyXG4vL0V4cG9ydCBkZWNvcmF0b3JzXHJcbmV4cG9ydCB7Q29udHJvbGxlcn0gZnJvbSBcIi4vZGVjb3JhdG9ycy9Db250cm9sbGVyXCJcclxuZXhwb3J0IHtTZXJ2aWNlfSBmcm9tIFwiLi9kZWNvcmF0b3JzL1NlcnZpY2VcIlxyXG5leHBvcnQge0RpcmVjdGl2ZX0gZnJvbSBcIi4vZGVjb3JhdG9ycy9EaXJlY3RpdmVcIlxyXG5leHBvcnQge0NvbXBvbmVudCwgQmluZH0gZnJvbSBcIi4vZGVjb3JhdG9ycy9Db21wb25lbnRcIlxyXG5leHBvcnQge0ZpbHRlcn0gZnJvbSBcIi4vZGVjb3JhdG9ycy9GaWx0ZXJcIlxyXG5leHBvcnQge0NvbmZpZ30gZnJvbSBcIi4vZGVjb3JhdG9ycy9Db25maWdcIlxyXG5leHBvcnQge1J1bn0gZnJvbSBcIi4vZGVjb3JhdG9ycy9SdW5cIlxyXG5leHBvcnQge1ZpZXd9IGZyb20gXCIuL2RlY29yYXRvcnMvVmlld1wiXHJcbmV4cG9ydCB7QWxpYXN9IGZyb20gXCIuL2RlY29yYXRvcnMvQWxpYXNcIlxyXG5leHBvcnQge1NlbGZ9IGZyb20gXCIuL2RlY29yYXRvcnMvU2VsZlwiXHJcbmV4cG9ydCB7U3RhdGV9IGZyb20gXCIuL2RlY29yYXRvcnMvU3RhdGVcIlxyXG5leHBvcnQge0luamVjdH0gZnJvbSBcIi4vZGVjb3JhdG9ycy9JbmplY3RcIlxyXG5leHBvcnQge0luaXQsIERlc3Ryb3ksIFdhdGNoLCBXYXRjaENvbGxlY3Rpb24sIE9uLCBEZWJvdW5jZSwgU2NoZWR1bGUsIEFic3RyYWN0fSBmcm9tIFwiLi9kZWNvcmF0b3JzL01ldGhvZERlY29yYXRvcnNcIiIsImltcG9ydCB7YWxpYXMgYXMgYWxpYXNTeW1ib2x9IGZyb20gXCIuLi91dGlsL1N5bWJvbHNcIlxyXG5cclxuLyoqXHJcbiAqIFNldHMgdGhlIGFsaWFzIGZvciBhIGNvbnRyb2xsZXIsIGNhbiBvbmx5IGJlIHVzZWQgdG9nZXRoZXIgd2l0aCBAU3RhdGVcclxuICogYW5kIEBDb21wb25lbnRcclxuICogQGRlY29yYXRvclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEFsaWFzKGFsaWFzKVxyXG57XHJcbiAgICByZXR1cm4gKHRhcmdldCwgbmFtZSkgPT4ge1xyXG4gICAgICAgICh0YXJnZXRbbmFtZV0gfHwgdGFyZ2V0KVthbGlhc1N5bWJvbF0gPSBhbGlhcztcclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7bW9kdWxlfSBmcm9tIFwiLi4vdXRpbC9Bbmd1bGFyTW9kdWxlUmVzb2x2ZXJcIlxyXG5pbXBvcnQge2RlY29yYXRlVmlld30gZnJvbSBcIi4vVmlld1wiXHJcbmltcG9ydCAqIGFzIHN5bWJvbHMgZnJvbSBcIi4uL3V0aWwvU3ltYm9sc1wiXHJcblxyXG4vKipcclxuICogRGVmaW5lcyB0aGUgY2xhc3MgYXMgQ29tcG9uZW50XHJcbiAqXHJcbiAqIEEgY29tcG9uZW50IGlzIHR5cGljYWxseSByZXN0cmljdGVkIHRvIFwiRVwiID0+IEVsZW1lbnQsIG1lYW5pbmcgaXQgd2lsbCBsb29rIGxpa2VcclxuICogPGNvbXBvbmVudD48L2NvbXBvbmVudD4gaW4gaHRtbC5cclxuICpcclxuICogWW91IGNhbiBjb25maWd1cmUgdGhlIGRlY29yYXRvciBlaXRoZXIganVzdCB3aXRoIHRoZSBjb21wb25lbnQgc2VsZWN0b3IgYXMgc3RyaW5nLCBvclxyXG4gKiB3aXRoIGEgdHlwaWNhbCBhbmd1bGFyIGRpcmVjdGl2ZSBjb25maWcgb2JqZWN0LCB0aGVyZSBhcmUgc29tZSBzaG9ydGN1dHMgYXZhaWxhYmxlOlxyXG4gKiAgLSBjb250cm9sbGVyQXMgPT4gYXNcclxuICogIC0gc2NvcGUgPT4gYmluZFxyXG4gKiAgLSB0ZW1wbGF0ZSA9PiB2aWV3XHJcbiAqXHJcbiAqICBBIENvbXBvbmVudCBkb2Vzbid0IHVzZSB0aGUgc2NvcGUsIGJ1dCBiaW5kcyBhbGwgcHJvcGVydGllcyB0byB0aGUgY29udHJvbGxlciBkaXJlY3RseSBpbnN0ZWFkLlxyXG4gKlxyXG4gKiAgSWYgeW91J3JlIHVzaW5nIGNsYXNzIHByb3BlcnRpZXMgeW91IGNhbiB1c2UgdGhlIEBCaW5kKFt0eXBlXSkgZGVjb3JhdG9yIHRvIGRpcmVjdGx5IGluZGljYXRlIHRoZVxyXG4gKiAgYXR0cmlidXRlcyB0aGF0IHNob3VsZCBiZSBib3VuZCB0byB0aGUgb3V0ZXIgc2NvcGVcclxuICpcclxuICogVGhlIEBDb21wb25lbnQgZGVjb3JhdG9yIGNhbiBiZSB1c2VkIHRvZ2V0aGVyIHdpdGggQFZpZXcgYW5kIEBBbGlhcyBhbmQgQEJpbmQhXHJcbiAqXHJcbiAqIEBkZWNvcmF0b3JcclxuICogQHBhcmFtIG5hbWVcclxuICogQHBhcmFtIGNvbmZcclxuICogQGV4cG9ydHNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBDb21wb25lbnQobmFtZSwgY29uZiA9IHt9KVxyXG57XHJcbiAgICBpZiAobmFtZS5jb25zdHJ1Y3RvciAhPSBTdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZSA9IG5hbWUuc2VsZWN0b3IgfHwgbmFtZS5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmYuY29udHJvbGxlckFzID0gY29uZi5hcyB8fCBjb25mLmNvbnRyb2xsZXJBcztcclxuICAgIGNvbmYucmVzdHJpY3QgPSBjb25mLnJlc3RyaWN0IHx8IFwiRVwiO1xyXG5cclxuICAgIGlmIChjb25mLmJpbmRpbmdzID09IGZhbHNlKSBjb25mLmJpbmRpbmdzID0gZmFsc2U7XHJcbiAgICBlbHNlIGNvbmYuYmluZGluZ3MgPSBjb25mLmJpbmRpbmdzIHx8IGNvbmYuYmluZCB8fCB7fTtcclxuXHJcbiAgICBpZiAoY29uZi5iaW5kaW5ncyA9PSBmYWxzZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ29tcG9uZW50cyBtdXN0IGhhdmUgYW4gaXNvbGF0ZWQgYmluZGluZyEgaW4gJHtuYW1lfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmYudGVtcGxhdGUgPSBjb25mLnZpZXcgfHwgY29uZi50ZW1wbGF0ZTtcclxuXHJcbiAgICByZXR1cm4gdGFyZ2V0ID0+IHtcclxuICAgICAgICBjb25mLmNvbnRyb2xsZXIgPSB0YXJnZXQ7XHJcblxyXG4gICAgICAgIG1vZHVsZS50aGVuKG0gPT4ge1xyXG5cclxuICAgICAgICAgICAgbS5kaXJlY3RpdmUobmFtZSwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vTWVyZ2UgQEJpbmQgcHJvcGVydGllc1xyXG4gICAgICAgICAgICAgICAgY29uZi5iaW5kaW5ncyA9IE9iamVjdC5hc3NpZ24oY29uZi5iaW5kaW5ncyB8fCB7fSwgdGFyZ2V0W3N5bWJvbHMuYmluZF0gfHwge30pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbmYuY29udHJvbGxlckFzID0gdGFyZ2V0W3N5bWJvbHMuYWxpYXNdIHx8IGNvbmYuY29udHJvbGxlckFzIHx8IFwiJGN0cmxcIjtcclxuICAgICAgICAgICAgICAgIGNvbmYuYmluZFRvQ29udHJvbGxlciA9IGNvbmYuYmluZGluZ3M7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVjb3JhdGVWaWV3KHRhcmdldCwgY29uZik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbmY7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIGEgY2xhc3MgcHJvcGVydHkgYXMgYm91bmQgYXR0cmlidXRlXHJcbiAqIEBkZWNvcmF0b3JcclxuICogQHBhcmFtIGJpbmRUeXBlID0gb3IgJiBvciBAXHJcbiAqIEBwYXJhbSBbYXR0cmlidXRlTmFtZV0gdGhlIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZSwgZGVmYXVsdHMgdG8gdGhlIHByb3BlcnR5IG5hbWVcclxuICogQHJldHVybiB7ZnVuY3Rpb24oKiwgKiwgKil9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gQmluZChiaW5kVHlwZSwgYXR0cmlidXRlTmFtZSlcclxue1xyXG4gICAgcmV0dXJuICh0YXJnZXQsIG5hbWUsIGRlc2MpID0+IHtcclxuXHJcbiAgICAgICAgLy9TZXQgZGVmYXVsdCBhdHRyaWJ1dGUgbmFtZVxyXG4gICAgICAgIGlmICghYXR0cmlidXRlTmFtZSkgYXR0cmlidXRlTmFtZSA9IG5hbWU7XHJcblxyXG4gICAgICAgIC8vQWRkIHRoZSBiaW5kIHByb3BlcnR5IHRvIHRoZSB0eXBlXHJcbiAgICAgICAgbGV0IHR5cGUgPSB0YXJnZXQuY29uc3RydWN0b3I7XHJcbiAgICAgICAgdHlwZVtzeW1ib2xzLmJpbmRdID0gdHlwZVtzeW1ib2xzLmJpbmRdIHx8IHt9O1xyXG4gICAgICAgIHR5cGVbc3ltYm9scy5iaW5kXVtuYW1lXSA9IGJpbmRUeXBlK2F0dHJpYnV0ZU5hbWU7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHdyaXRhYmxlIDogdHJ1ZSxcclxuICAgICAgICAgICAgdmFsdWUgOiBkZXNjLnZhbHVlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge21vZHVsZX0gZnJvbSBcIi4uL3V0aWwvQW5ndWxhck1vZHVsZVJlc29sdmVyXCJcclxuaW1wb3J0IHtmZXRjaH0gZnJvbSBcIi4uL3V0aWwvQW5ndWxhclV0aWxzXCJcclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIGEgbWV0aG9kIGFzIGNvbmZpZyBibG9ja1xyXG4gKiBAZGVjb3JhdG9yXHJcbiAqIEBleHBvcnRzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gQ29uZmlnKHRhcmdldCwgbmFtZSkge1xyXG4gICAgdGFyZ2V0ID0gZmV0Y2godGFyZ2V0KTtcclxuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBGdW5jdGlvbikgbW9kdWxlLnRoZW4obSA9PiBtLmNvbmZpZyh0YXJnZXQpKTtcclxuICAgIGVsc2UgbW9kdWxlLnRoZW4obSA9PiBtLmNvbmZpZyh0YXJnZXRbbmFtZV0pKTtcclxufSIsImltcG9ydCB7bW9kdWxlfSBmcm9tIFwiLi4vdXRpbC9Bbmd1bGFyTW9kdWxlUmVzb2x2ZXJcIlxyXG5pbXBvcnQge2ZldGNofSBmcm9tIFwiLi4vdXRpbC9Bbmd1bGFyVXRpbHNcIlxyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgYSBjbGFzcyBhcyBDb250cm9sbGVyLCBpZiBubyBuYW1lIGlzIHByb3ZpZGVkIGFrYSB0aGUgZGVjb3JhdG9yIGlzXHJcbiAqIHVzZWQgYXMgQENvbnRyb2xsZXIgdGhlbiB0aGUgY2xhc3MgbmFtZSBpcyB1c2VkIGFzIGNvbnRyb2xsZXIgbmFtZSwgeW91IGNhblxyXG4gKiBzcGVjaWZ5IHRoZSBuYW1lIGJ5IHVzaW5nIHRoZSBkZWNvcmF0b3IgbGlrZSBAQ29udHJvbGxlcihcIkNvbnRyb2xsZXJOYW1lXCIpIHRvXHJcbiAqIG1ha2UgdGhlIGRlY29yYXRvciBtaW5pZnkgc2FmZVxyXG4gKlxyXG4gKiBAZGVjb3JhdG9yXHJcbiAqIEBwYXJhbSB7c3RyaW5nIHwgZnVuY3Rpb259IFtjbGF6el1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBDb250cm9sbGVyKGNsYXp6KSB7XHJcbiAgICBjbGF6eiA9IGZldGNoKGNsYXp6KTtcclxuXHJcbiAgICAvL0Z1bmN0aW9uIHRvIGFkZCB0aGUgY29udHJvbGxlclxyXG4gICAgbGV0IGFkZENvbnRyb2xsZXIgPSAobmFtZSwgY2xhenopID0+IG1vZHVsZS50aGVuKG0gPT4gbS5jb250cm9sbGVyKG5hbWUsIGNsYXp6KSk7XHJcblxyXG4gICAgaWYgKGNsYXp6IGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcclxuICAgICAgICBhZGRDb250cm9sbGVyKGNsYXp6Lm5hbWUsIGNsYXp6KTtcclxuICAgIH1cclxuICAgIGVsc2UgcmV0dXJuICh0YXJnZXQpID0+IHtcclxuICAgICAgICBhZGRDb250cm9sbGVyKGNsYXp6LCB0YXJnZXQpO1xyXG4gICAgfTtcclxufSIsImltcG9ydCB7bW9kdWxlfSBmcm9tIFwiLi4vdXRpbC9Bbmd1bGFyTW9kdWxlUmVzb2x2ZXJcIlxyXG5pbXBvcnQge2ZldGNofSBmcm9tIFwiLi4vdXRpbC9Bbmd1bGFyVXRpbHNcIlxyXG5pbXBvcnQgZXM2ZW5hYmxlciBmcm9tIFwiLi4vdXRpbC9FUzZEaXJlY3RpdmVcIlxyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgYSBjbGFzcyBvciBhIGNsYXNzIG1ldGhvZCBhcyBEaXJlY3RpdmUsIGlmIG5vIG5hbWUgaXMgcHJvdmlkZWQgYWthIHRoZSBkZWNvcmF0b3IgaXNcclxuICogdXNlZCBhcyBARGlyZWN0aXZlIHRoZW4gdGhlIGNsYXNzIG5hbWUgb3IgdGhlIG1ldGhvZCBuYW1lIGlzIHVzZWQgYXMgZGlyZWN0aXZlIG5hbWUsIHlvdSBjYW5cclxuICogc3BlY2lmeSB0aGUgbmFtZSBieSB1c2luZyB0aGUgZGVjb3JhdG9yIGxpa2UgQERpcmVjdGl2ZShcIm15RGlyZWN0aXlcIikgdG9cclxuICogbWFrZSB0aGUgZGVjb3JhdG9yIG1pbmlmeSBzYWZlXHJcbiAqXHJcbiAqIEBkZWNvcmF0b3JcclxuICogQHBhcmFtIHtzdHJpbmcgfCBmdW5jdGlvbn0gY2xhenpcclxuICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lXVxyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XHJcbiAqIEBleHBvcnRzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gRGlyZWN0aXZlKGNsYXp6LCBuYW1lKSB7XHJcbiAgICBjbGF6eiA9IGZldGNoKGNsYXp6KTtcclxuXHJcbiAgICBsZXQgcmVnaXN0ZXJEaXJlY3RpdmUgPSAobmFtZSwgZm4pID0+IG1vZHVsZS50aGVuKG0gPT4gbS5kaXJlY3RpdmUobmFtZSwgZXM2ZW5hYmxlcihmbikpKTtcclxuXHJcbiAgICBpZiAoY2xhenouY29uc3RydWN0b3IgIT0gU3RyaW5nKSAvL0RpcmVjdGl2ZSBpcyBjYWxsZWQgd2l0aG91dCBuYW1lID0+IEBEaXJlY3RpdmVcclxuICAgIHtcclxuICAgICAgICBpZiAoY2xhenogaW5zdGFuY2VvZiBGdW5jdGlvbikgcmVnaXN0ZXJEaXJlY3RpdmUoY2xhenoubmFtZSwgY2xhenopOyAvL0NsYXNzXHJcbiAgICAgICAgZWxzZSByZWdpc3RlckRpcmVjdGl2ZShuYW1lLCBjbGF6eltuYW1lXSk7IC8vQ2xhc3MgbWV0aG9kXHJcbiAgICB9XHJcbiAgICBlbHNlIHJldHVybiAodGFyZ2V0LCBuKSA9PiB7IC8vRGlyZWN0aXZlIGlzIGNhbGxlZCB3aXRob3V0IG5hbWUgPT4gQERpcmVjdGl2ZShcIm15RGlyZWN0aXZlXCIpXHJcbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSByZWdpc3RlckRpcmVjdGl2ZShjbGF6eiwgdGFyZ2V0KTsgLy9DbGFzc1xyXG4gICAgICAgIGVsc2UgcmVnaXN0ZXJEaXJlY3RpdmUobiwgdGFyZ2V0W25dKTsgLy9DbGFzcyBtZXRob2RcclxuICAgIH07XHJcbn0iLCJpbXBvcnQge21vZHVsZX0gZnJvbSBcIi4uL3V0aWwvQW5ndWxhck1vZHVsZVJlc29sdmVyXCJcclxuaW1wb3J0IHtmZXRjaH0gZnJvbSBcIi4uL3V0aWwvQW5ndWxhclV0aWxzXCJcclxuXHJcbi8qKlxyXG4gKiBSRWdpc3RlcnMgYSBtZXRob2QgYXMgYW4gYW5ndWxhciBGaWx0ZXJcclxuICogSWYgdXNlZCBsaWtlIEBGaWx0ZXIgdGhlIG1ldGhvZCBuYW1lIHdpbGwgYmUgY2hvc2VuIGFzIGZpbHRlciBuYW1lLFxyXG4gKiBBbHRlcm5hdGl2ZWx5IHlvdSBjYW4gZ2l2ZSB0aGUgZmlsdGVyIG5hbWUgYXMgYXJndW1lbnQsIHlvdXIgbWV0aG9kIHdpbGwgdGhlbiBsb29rXHJcbiAqIGxpa2UgQEZpbHRlcihcIm15RmlsdGVyXCIpLi4uXHJcbiAqIEBkZWNvcmF0b3JcclxuICogQGV4cG9ydHNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBGaWx0ZXIoY2xhenosIG1ldGhvZCkge1xyXG4gICAgY2xhenogPSBmZXRjaChjbGF6eik7XHJcblxyXG4gICAgLy9GdW5jdGlvbiB0byBhZGQgdGhlIGNvbnRyb2xsZXJcclxuICAgIGxldCByZWdpc3RlckZpbHRlciA9IChuYW1lLCBmbikgPT4gbW9kdWxlLnRoZW4obSA9PiBtLmZpbHRlcihuYW1lLCBmbikpO1xyXG5cclxuICAgIGlmIChjbGF6ei5jb25zdHJ1Y3RvciAhPSBTdHJpbmcpIHsgLy9XaXRoIG1ldGhvZCBuYW1lIGFzIGZpbHRlciBuYW1lXHJcbiAgICAgICAgcmVnaXN0ZXJGaWx0ZXIobWV0aG9kLCBjbGF6elttZXRob2RdKTtcclxuICAgIH1cclxuICAgIGVsc2UgcmV0dXJuICh0YXJnZXQsIG1ldGhvZCkgPT4geyAvL1dpdGggc3BlY2lmaWVkIG5hbWVcclxuICAgICAgICByZWdpc3RlckZpbHRlcihjbGF6eiwgdGFyZ2V0W21ldGhvZF0pO1xyXG4gICAgfTtcclxufSIsImltcG9ydCB7YW5ndWxhckluamVjdG9yLCBtb2R1bGV9IGZyb20gXCIuLi91dGlsL0FuZ3VsYXJNb2R1bGVSZXNvbHZlclwiXHJcbmltcG9ydCAqIGFzIHN5bWJvbHMgZnJvbSBcIi4uL3V0aWwvU3ltYm9sc1wiXHJcbmltcG9ydCB7Y2FsbEFubm90YXRpb25zfSBmcm9tIFwiLi4vdXRpbC9Bbmd1bGFyVXRpbHNcIlxyXG5cclxuLyoqXHJcbiAqIEluamVjdCBvbmUgb2YgdGhlIGZvbGxvd2luZyBpbnRvIHRoZSBvYmplY3Q6XHJcbiAqICAgICAgLSBzZXJ2aWNlc1xyXG4gKiAgICAgIC0gJHNjb3BlXHJcbiAqICAgICAgLSBhbnkgJHNjb3BlIHZhcmlhYmxlXHJcbiAqXHJcbiAqIHRoZSB2YXJpYWJsZTogdXNhZ2UgPT5cclxuICogY2xhc3MgZm9vIHtcclxuICogICAgICBASW5qZWN0ICR0aW1lb3V0O1xyXG4gKiAgICAgIEBJbmplY3QoXCIkdGltZW91dFwiKSB0bW91dDtcclxuICogICAgICBASW5qZWN0IGZvb0N0cmxcclxuICogICAgICBASW5qZWN0IHNjb3BlVmFyXHJcbiAqICAgICAgQEluamVjdCAkc2NvcGVcclxuICpcclxuICogICAgICBjb25zdHJ1Y3RvcigpXHJcbiAqICAgICAge1xyXG4gKiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiR0aW1lb3V0LCB0aGlzLnRtb3V0KTtcclxuICogICAgICB9XHJcbiAqIH1cclxuICpcclxuICogQXR0ZW50aW9uISBUaGUgcHJvcGVydHkgd29uJ3QgZ2V0IGluamVjdGVkIGluc3RhbnRseSwgYnV0IGEgZ2V0dGVyXHJcbiAqIHdoaWNoIHdpbGwgcmVwbGFjZSBpdHNlbGYgd2l0aCB0aGUgcmVzb2x2ZWQgb2JqZWN0IG9uIHRoZSBmaXJzdCBjYWxsLFxyXG4gKiB3aXRoIHRoaXMgdGVjaG5pcXVlIHdlJ3JlIGFibGUgdG8gcmVzb2x2ZSBjaXJjdWxhciBkZXBlbmRlbmNpZXMgc29tZXRpbWVzXHJcbiAqXHJcbiAqIEBwYXJhbSB0YXJnZXRcclxuICogQHBhcmFtIG5hbWVcclxuICogQHBhcmFtIGRlc2NyaXB0b3JcclxuICogQGRlY29yYXRvclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEluamVjdCh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpXHJcbntcclxuICAgIGxldCBmaWVsZE5hbWU7XHJcbiAgICBsZXQgaW5qZWN0b3IgPSAodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSA9PlxyXG4gICAge1xyXG4gICAgICAgIGlmIChkZXNjcmlwdG9yLnZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgdXNlIEBJbmplY3Qgb24gYSBtZXRob2RcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzZXQgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGZpZWxkTmFtZSwge3ZhbHVlLCB3cml0YWJsZSA6IHRydWV9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0IDogZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0ICRpbmplY3RvciA9IGFuZ3VsYXJJbmplY3RvcigpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5qZWN0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbG9jYWxzID0gdGhpc1tzeW1ib2xzLmxvY2Fsc10gfHwgY3VycmVudExvY2FscztcclxuXHJcbiAgICAgICAgICAgICAgICAvL0xvY2FsZVxyXG4gICAgICAgICAgICAgICAgaWYgKGxvY2FscyAmJiAobG9jYWxzLmhhc093blByb3BlcnR5KG5hbWUpIHx8IGxvY2Fsc1tuYW1lXSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIG9iaiA9IGxvY2Fsc1tuYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICBpbmplY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9TZXJ2aWNlXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICgkaW5qZWN0b3IuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqID0gJGluamVjdG9yLmdldChuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBpbmplY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8kc2NvcGUgb3IgcGFyZW50IHNjb3BlIHByb3BlcnR5XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChsb2NhbHMgJiYgbG9jYWxzLiRzY29wZSAmJiAoUmVmbGVjdC5oYXNPd25Qcm9wZXJ0eShsb2NhbHMuJHNjb3BlLCBuYW1lKSB8fCBsb2NhbHMuJHNjb3BlW25hbWVdKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqID0gbG9jYWxzLiRzY29wZVtuYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICBpbmplY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFpbmplY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhc24ndCBhYmxlIHRvIEBJbmplY3QgJHtuYW1lfSBhcyAke2ZpZWxkTmFtZX0gaW50byAke3RhcmdldC5jb25zdHJ1Y3Rvci5uYW1lfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgZmllbGROYW1lLCB7dmFsdWUgOiBvYmosIHdyaXRhYmxlIDogdHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChkZXNjcmlwdG9yKSB7XHJcbiAgICAgICAgZmllbGROYW1lID0gbmFtZTtcclxuICAgICAgICByZXR1cm4gaW5qZWN0b3IodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGxldCBuYW1lUmVwbGFjZW1lbnQgPSB0YXJnZXQ7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xyXG4gICAgICAgICAgICBmaWVsZE5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gaW5qZWN0b3IodGFyZ2V0LCBuYW1lUmVwbGFjZW1lbnQsIGRlc2NyaXB0b3IpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5sZXQgY3VycmVudExvY2FscyA9IHVuZGVmaW5lZDtcclxubW9kdWxlLnRoZW4obSA9PiBtLmNvbmZpZyhbXCIkcHJvdmlkZVwiLCBmdW5jdGlvbigkcHJvdmlkZSl7XHJcbiAgICAkcHJvdmlkZS5kZWNvcmF0b3IoXCIkY29udHJvbGxlclwiLCBbXCIkZGVsZWdhdGVcIiwgZnVuY3Rpb24oJGRlbGVnYXRlKXtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZXhwcmVzc2lvbiwgbG9jYWxzLCBsYXRlciwgaWRlbnQpe1xyXG5cclxuICAgICAgICAgICAgLy9Gb3IgdXNhZ2UgaW4gY29uc3RydWN0b3JcclxuICAgICAgICAgICAgY3VycmVudExvY2FscyA9IGxvY2FscztcclxuXHJcbiAgICAgICAgICAgIC8vQ3JlYXRlIHRoZSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgIGxldCBjb250cm9sbGVyID0gJGRlbGVnYXRlKGV4cHJlc3Npb24sIGxvY2FscywgbGF0ZXIsIGlkZW50KTtcclxuXHJcbiAgICAgICAgICAgIC8vUmVzZXQgdGhlIGxvY2Fsc1xyXG4gICAgICAgICAgICBjdXJyZW50TG9jYWxzID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgLy9DaGVjayBpZiBpdHMgYW4gb2JqZWN0XHJcbiAgICAgICAgICAgIGlmICghbGF0ZXIpe1xyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcltzeW1ib2xzLmxvY2Fsc10gPSBsb2NhbHM7XHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyW3N5bWJvbHMuc2NvcGVdID0gbG9jYWxzLiRzY29wZTtcclxuICAgICAgICAgICAgICAgIGNhbGxBbm5vdGF0aW9ucyhjb250cm9sbGVyLCBsb2NhbHMuJHNjb3BlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb250cm9sbGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudExvY2FscyA9IGxvY2FscztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYyA9IGNvbnRyb2xsZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TG9jYWxzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGNbc3ltYm9scy5sb2NhbHNdID0gbG9jYWxzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNbc3ltYm9scy5zY29wZV0gPSBsb2NhbHMuJHNjb3BlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxBbm5vdGF0aW9ucyhjLCBsb2NhbHMuJHNjb3BlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XSlcclxufV0pKTtcclxuIiwiaW1wb3J0IHthbmd1bGFySW5qZWN0b3J9IGZyb20gXCIuLi91dGlsL0FuZ3VsYXJNb2R1bGVSZXNvbHZlclwiXHJcbmltcG9ydCAqIGFzIHN5bWJvbHMgZnJvbSBcIi4uL3V0aWwvU3ltYm9sc1wiXHJcblxyXG4vLyBUaGlzIGZpbGUgY29udGFpbnMgdGhlIGZvbGxvd2luZyBkZWNvcmF0b3JzXHJcbi8vIEBJbml0XHJcbi8vIEBEZXN0cm95XHJcbi8vIEBXYXRjaFxyXG4vLyBAV2F0Y2hDb2xsZWN0aW9uXHJcbi8vIEBPblxyXG4vLyBARGVib3VuY2VcclxuLy8gQEFic3RyYWN0XHJcblxyXG4vKipcclxuICogRXhlY3V0ZXMgYWxsIE1ldGhvZHMgYW5ub3RhdGVkIHdpdGggdGhpcyBhbm5vdGF0aW9uIGFmdGVyXHJcbiAqIHRoZSBvYmplY3QgaGFzIGJlZW4gY3JlYXRlZFxyXG4gKlxyXG4gKiBPbmx5IHdvcmtpbmcgaW4gc2VydmljZXMgYW5kIGNvbnRyb2xsZXJzIVxyXG4gKlxyXG4gKiBAZGVjb3JhdG9yXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gSW5pdCh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3Ipe1xyXG4gICAgaWYgKCFkZXNjcmlwdG9yKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQEluaXQgY2FuIG9ubHkgYmUgdXNlZCBvbiBjbGFzcyBtZXRob2RzXCIpO1xyXG4gICAgfVxyXG4gICAgdGFyZ2V0W3N5bWJvbHMuaW5pdF0gPSB0YXJnZXRbc3ltYm9scy5pbml0XSB8fCBbXTtcclxuICAgIHRhcmdldFtzeW1ib2xzLmluaXRdLnB1c2gobmFtZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFeGVjdXRlcyBhbGwgTWV0aG9kcyBhbm5vdGF0ZWQgd2l0aCB0aGlzIGFubm90YXRpb24gYWZ0ZXJcclxuICogdGhlIG9iamVjdCBnZXRzIGRlc3Ryb3llZC5cclxuICpcclxuICogT25seSB1c2FibGUgaW4gY29udHJvbGxlcnMhXHJcbiAqXHJcbiAqIEBwYXJhbSB0YXJnZXRcclxuICogQHBhcmFtIG5hbWVcclxuICogQGV4cG9ydHNcclxuICogQGRlY29yYXRvclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIERlc3Ryb3kodGFyZ2V0LCBuYW1lKXtcclxuICAgIHRhcmdldFtzeW1ib2xzLmRlc3Ryb3ldID0gdGFyZ2V0W3N5bWJvbHMuZGVzdHJveV0gfHwgW107XHJcbiAgICB0YXJnZXRbc3ltYm9scy5kZXN0cm95XS5wdXNoKG5hbWUpO1xyXG59XHJcblxyXG4vKipcclxuICogU2V0cyBhICR3YXRjaCBvbiB0aGUgZ2l2ZW4gY29udHJvbGxlciBldmFsdWF0aW9uLCB0aGUgbWV0aG9kIHdpbGwgYmUgdXNlZFxyXG4gKiBhcyByZWd1bGFyICR3YXRjaCBjYWxsYmFjay5cclxuICpcclxuICogSWYgeW91ciBjb250cm9sbGVyIGhhcyBhIHByb3BlcnR5IFwiZm9vXCIgdGhlIGZvbGxvd2luZyBtZXRob2Qgd291bGQgd2F0Y2ggZm9yXHJcbiAqIGNoYW5nZXMgb24gXCJmb29cIlxyXG4gKlxyXG4gKiBcXEBXYXRjaChcImZvb1wiKVxyXG4gKiBmb29DaGFuZ2VkKG5ld1ZhbCwgb2xkVmFsKVxyXG4gKiB7XHJcbiAqICAuLi4uLi4uLlxyXG4gKiB9XHJcbiAqXHJcbiAqIEBwYXJhbSBwcm9wZXJ0eVxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtkZWVwXVxyXG4gKiBAZXhwb3J0c1xyXG4gKiBAZGVjb3JhdG9yXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gV2F0Y2gocHJvcGVydHksIGRlZXAgPSBmYWxzZSl7XHJcblxyXG4gICAgcmV0dXJuICh0YXJnZXQsIG5hbWUpID0+IHtcclxuICAgICAgICB0YXJnZXRbc3ltYm9scy53YXRjaF0gPSB0YXJnZXRbc3ltYm9scy53YXRjaF0gfHwgW107XHJcbiAgICAgICAgdGFyZ2V0W3N5bWJvbHMud2F0Y2hdLnB1c2goe3Byb3BlcnR5LCBuYW1lLCBkZWVwLCBjb2xsZWN0aW9uIDogZmFsc2V9KTtcclxuICAgIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTYW1lIGFzIEBXYXRjaCBidXQgZm9yIGNvbGxlY3Rpb25zXHJcbiAqIEBwYXJhbSBbcHJvcGVydHldXHJcbiAqIEBleHBvcnRzXHJcbiAqIEBkZWNvcmF0b3JcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBXYXRjaENvbGxlY3Rpb24ocHJvcGVydHkpe1xyXG5cclxuICAgIHJldHVybiAodGFyZ2V0LCBuYW1lKSA9PiB7XHJcbiAgICAgICAgdGFyZ2V0W3N5bWJvbHMud2F0Y2hdID0gdGFyZ2V0W3N5bWJvbHMud2F0Y2hdIHx8IFtdO1xyXG4gICAgICAgIHRhcmdldFtzeW1ib2xzLndhdGNoXS5wdXNoKHtwcm9wZXJ0eSwgbmFtZSwgZmFsc2UsIGNvbGxlY3Rpb24gOiB0cnVlfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG4vKipcclxuICogU2NoZWR1bGVzIHRoZSBtZXRob2Qgc28gaXQgd2lsbCBnZXQgZXhlY3V0ZWQgZXZlcnkgbiBtaWxsaXNlY29uZHNcclxuICogQHBhcmFtIGludGVydmFsIGluIG1pbGxpc2Vjb25kc1xyXG4gKiBAZGVjb3JhdG9yXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gU2NoZWR1bGUoaW50ZXJ2YWwpXHJcbntcclxuICAgIHJldHVybiAodGFyZ2V0LCBuYW1lLCBkZXNjKSA9PiB7XHJcbiAgICAgICAgdGFyZ2V0W3N5bWJvbHMuc2NoZWR1bGVdID0gdGFyZ2V0W3N5bWJvbHMuc2NoZWR1bGVdIHx8IFtdO1xyXG4gICAgICAgIHRhcmdldFtzeW1ib2xzLnNjaGVkdWxlXS5wdXNoKHtpbnRlcnZhbCwgbmFtZX0pXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZWdpc3RlcnMgdGhlIG1ldGhvZCBhcyBhbiBldmVudGhhbmRsZXIgdmlhICRzY29wZS4kb25cclxuICpcclxuICogXFxAT24oXCIkc3RhdGVDaGFuZ2VTdWNjZXNcIilcclxuICogc3RhdGVDaGFuZ2VkKG5ld1N0YXRlLCBvbGRTdGF0ZSAuLi4pXHJcbiAqIHtcclxuICogIC4uLi4uLi5cclxuICogfVxyXG4gKlxyXG4gKiBAcGFyYW0gZXZlbnRcclxuICogQGRlY29yYXRvclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIE9uKGV2ZW50KVxyXG57XHJcbiAgICByZXR1cm4gKHRhcmdldCwgbmFtZSwgZGVzYykgPT4ge1xyXG4gICAgICAgIHRhcmdldFtzeW1ib2xzLm9uXSA9IHRhcmdldFtzeW1ib2xzLm9uXSB8fCBbXTtcclxuICAgICAgICB0YXJnZXRbc3ltYm9scy5vbl0ucHVzaCh7ZXZlbnQsIG5hbWV9KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIERlYm91bmNlcyB0aGUgbWV0aG9kIHNvIGl0IHdpbGwgb25seSBnZXQgZXhlY3V0ZWQgYWZ0ZXIgaXQgaGFzbid0IGJlZW4gY2FsbGVkXHJcbiAqIGZvciBuIG1pbGxpc1xyXG4gKlxyXG4gKiBAcGFyYW0gbWlsbGlzXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2FuZ3VsYXJUaW1lb3V0PXRydWVdIC0gaWYgZmFsc2UgdGhlIHdpbmRvdyB0aW1lb3V0IHdpbGwgZ2V0IHVzZWRcclxuICogQHJldHVybnMge0Z1bmN0aW9ufVxyXG4gKiBAZGVjb3JhdG9yXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gRGVib3VuY2UobWlsbGlzLCBhbmd1bGFyVGltZW91dCA9IHRydWUpXHJcbntcclxuICAgIHJldHVybiAodGFyZ2V0LCBuYW1lLCBkZXNjKSA9PiB7XHJcbiAgICAgICAgbGV0IHRpbWVvdXQ7XHJcbiAgICAgICAgbGV0IGZuID0gZGVzYy52YWx1ZTtcclxuICAgICAgICBkZXNjLnZhbHVlID0gZnVuY3Rpb24oLi4uYXJncyl7XHJcblxyXG4gICAgICAgICAgICAvL1NldHVwXHJcbiAgICAgICAgICAgIGxldCBjb250ZXh0ID0gdGhpcztcclxuICAgICAgICAgICAgbGV0IHRpbWVvdXRGbiA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBmbi5hcHBseShjb250ZXh0LGFyZ3MpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy9Vc2UgYW5ndWxhciAkdGltZW91dCAoJGFwcGx5IGN5Y2xlKVxyXG4gICAgICAgICAgICBpZiAoYW5ndWxhclRpbWVvdXQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCAkdGltZW91dCA9IGFuZ3VsYXJJbmplY3RvcigpLmdldChcIiR0aW1lb3V0XCIpO1xyXG4gICAgICAgICAgICAgICAgJHRpbWVvdXQuY2FuY2VsKHRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgdGltZW91dCA9ICR0aW1lb3V0KHRpbWVvdXRGbiwgbWlsbGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL1VzZSB3aW5kb3cgdGltZW91dFxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KHRpbWVvdXRGbiwgbWlsbGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIE1hcmtzIGEgbWV0aG9kIGFzIGFic3RyYWN0LCB0aGlzIG1lYW5zIHRoZSBtZXRob2Qgd2lsbCBnZXQgcmVwbGFjZWRcclxuICogd2l0aCBvbmUgdGhhdCB0aHJvd3MgYW4gZXJyb3Igd2hlbiBjYWxsZWQgc2F5aW5nIHRoZSBtZXRob2RcclxuICogaXMgbm90IGltcGxlbWVudGVkXHJcbiAqIEBwYXJhbSB0YXJnZXRcclxuICogQHBhcmFtIG5hbWVcclxuICogQHBhcmFtIGRlc2NcclxuICogQGRlY29yYXRvclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEFic3RyYWN0KHRhcmdldCwgbmFtZSwgZGVzYylcclxue1xyXG4gICAgZGVzYy52YWx1ZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3RhcmdldC5uYW1lfUAke25hbWV9IGlzIG5vdCBpbXBsZW1lbnRlZCAoQWJzdHJhY3QpYCk7XHJcbiAgICB9O1xyXG59IiwiaW1wb3J0IHttb2R1bGV9IGZyb20gXCIuLi91dGlsL0FuZ3VsYXJNb2R1bGVSZXNvbHZlclwiXHJcbmltcG9ydCB7ZmV0Y2h9IGZyb20gXCIuLi91dGlsL0FuZ3VsYXJVdGlsc1wiXHJcblxyXG4vKipcclxuICogRGVmaW5lcyBhIG1ldGhvZCBhcyBydW4gYmxvY2tcclxuICogQGRlY29yYXRvclxyXG4gKiBAZXhwb3J0c1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFJ1bih0YXJnZXQsIG5hbWUpIHtcclxuICAgIHRhcmdldCA9IGZldGNoKHRhcmdldCk7XHJcbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgRnVuY3Rpb24pIG1vZHVsZS50aGVuKG0gPT4gbS5ydW4odGFyZ2V0KSk7XHJcbiAgICBlbHNlIG1vZHVsZS50aGVuKG0gPT4gbS5ydW4odGFyZ2V0W25hbWVdKSk7XHJcbn0iLCIvKipcclxuICogVGhlIGRlY29yYXRvciBtYXkgYmUgdXNlZCBvbiBjbGFzc2VzIG9yIG1ldGhvZHNcclxuICogYGBgXHJcbiAqIEBTZWxmXHJcbiAqIGNsYXNzIEZ1bGxCb3VuZCB7fVxyXG4gKlxyXG4gKiBjbGFzcyBQYXJ0Qm91bmQge1xyXG4gKiAgIEBTZWxmXHJcbiAqICAgbWV0aG9kICgpIHt9XHJcbiAqIH1cclxuICogYGBgXHJcbiAqXHJcbiAqIEBkZWNvcmF0b3JcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBTZWxmKC4uLmFyZ3MpIHtcclxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIHJldHVybiBib3VuZENsYXNzKC4uLmFyZ3MpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gYm91bmRNZXRob2QoLi4uYXJncyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVc2UgYm91bmRNZXRob2QgdG8gYmluZCBhbGwgbWV0aG9kcyBvbiB0aGUgdGFyZ2V0LnByb3RvdHlwZVxyXG4gKi9cclxuZnVuY3Rpb24gYm91bmRDbGFzcyh0YXJnZXQpIHtcclxuICAgIC8vIChVc2luZyByZWZsZWN0IHRvIGdldCBhbGwga2V5cyBpbmNsdWRpbmcgc3ltYm9scylcclxuICAgIGxldCBrZXlzO1xyXG4gICAgLy8gVXNlIFJlZmxlY3QgaWYgZXhpc3RzXHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBSZWZsZWN0Lm93bktleXMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICBrZXlzID0gUmVmbGVjdC5vd25LZXlzKHRhcmdldC5wcm90b3R5cGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0LnByb3RvdHlwZSk7XHJcbiAgICAgICAgLy8gdXNlIHN5bWJvbHMgaWYgc3VwcG9ydCBpcyBwcm92aWRlZFxyXG4gICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBrZXlzID0ga2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQucHJvdG90eXBlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgIC8vIElnbm9yZSBzcGVjaWFsIGNhc2UgdGFyZ2V0IG1ldGhvZFxyXG4gICAgICAgIGlmIChrZXkgPT09ICdjb25zdHJ1Y3RvcicpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldC5wcm90b3R5cGUsIGtleSk7XHJcblxyXG4gICAgICAgIC8vIE9ubHkgbWV0aG9kcyBuZWVkIGJpbmRpbmdcclxuICAgICAgICBpZiAodHlwZW9mIGRlc2NyaXB0b3IudmFsdWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldC5wcm90b3R5cGUsIGtleSwgYm91bmRNZXRob2QodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gYSBkZXNjcmlwdG9yIHJlbW92aW5nIHRoZSB2YWx1ZSBhbmQgcmV0dXJuaW5nIGEgZ2V0dGVyXHJcbiAqIFRoZSBnZXR0ZXIgd2lsbCByZXR1cm4gYSAuYmluZCB2ZXJzaW9uIG9mIHRoZSBmdW5jdGlvblxyXG4gKiBhbmQgbWVtb2l6ZSB0aGUgcmVzdWx0IGFnYWluc3QgYSBzeW1ib2wgb24gdGhlIGluc3RhbmNlXHJcbiAqL1xyXG5mdW5jdGlvbiBib3VuZE1ldGhvZCh0YXJnZXQsIGtleSwgZGVzY3JpcHRvcikge1xyXG4gICAgbGV0IGZuID0gZGVzY3JpcHRvci52YWx1ZTtcclxuXHJcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBAU2VsZiBkZWNvcmF0b3IgY2FuIG9ubHkgYmUgYXBwbGllZCB0byBtZXRob2RzIG5vdDogJHt0eXBlb2YgZm59YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgICAgZ2V0IDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgcmV0dXJuICguLi5wYXJhbXMpID0+IGZuLmNhbGwoc2VsZiwgLi4ucGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59IiwiaW1wb3J0IHttb2R1bGV9IGZyb20gXCIuLi91dGlsL0FuZ3VsYXJNb2R1bGVSZXNvbHZlclwiXHJcbmltcG9ydCB7ZmV0Y2h9IGZyb20gXCIuLi91dGlsL0FuZ3VsYXJVdGlsc1wiXHJcblxyXG4vKipcclxuICogRGVmaW5lcyBhIGNsYXNzIGFzIFNlcnZpY2UsIGlmIG5vIG5hbWUgaXMgcHJvdmlkZWQgYWthIHRoZSBkZWNvcmF0b3IgaXNcclxuICogdXNlZCBhcyBAU2VydmljZSB0aGVuIHRoZSBjbGFzcyBuYW1lIGlzIHVzZWQgYXMgc2VydmljZSBuYW1lLCB5b3UgY2FuXHJcbiAqIHNwZWNpZnkgdGhlIG5hbWUgYnkgdXNpbmcgdGhlIGRlY29yYXRvciBsaWtlIEBTZXJ2aWNlKFwiU2VydmljZU5hbWVcIikgdG9cclxuICogbWFrZSB0aGUgZGVjb3JhdG9yIG1pbmlmeSBzYWZlXHJcbiAqXHJcbiAqIEBkZWNvcmF0b3JcclxuICogQHBhcmFtIHtzdHJpbmcgfCBmdW5jdGlvbn0gW2NsYXp6XVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFNlcnZpY2UoY2xhenopIHtcclxuICAgIGNsYXp6ID0gZmV0Y2goY2xhenopO1xyXG5cclxuICAgIC8vRnVuY3Rpb24gdG8gYWRkIHRoZSBjb250cm9sbGVyXHJcbiAgICBsZXQgYWRkU2VydmljZSA9IChuYW1lLCBjbGF6eikgPT4gbW9kdWxlLnRoZW4obSA9PiBtLnNlcnZpY2UobmFtZSwgY2xhenopKTtcclxuXHJcbiAgICBpZiAoY2xhenogaW5zdGFuY2VvZiBGdW5jdGlvbikge1xyXG4gICAgICAgIGFkZFNlcnZpY2UoY2xhenoubmFtZSwgY2xhenopO1xyXG4gICAgfVxyXG4gICAgZWxzZSByZXR1cm4gKHRhcmdldCkgPT4ge1xyXG4gICAgICAgIGFkZFNlcnZpY2UoY2xhenosIHRhcmdldCk7XHJcbiAgICB9O1xyXG59IiwiaW1wb3J0IHtDb250cm9sbGVyfSBmcm9tIFwiLi9Db250cm9sbGVyXCJcclxuaW1wb3J0IHttb2R1bGV9IGZyb20gXCIuLi91dGlsL0FuZ3VsYXJNb2R1bGVSZXNvbHZlclwiXHJcbmltcG9ydCB7ZGVjb3JhdGVWaWV3fSBmcm9tIFwiLi9WaWV3XCJcclxuaW1wb3J0IHtjb25maWd9IGZyb20gXCIuLi91dGlsL0NvbmZpZ3VyYXRpb25cIlxyXG5pbXBvcnQgKiBhcyBzeW1ib2xzIGZyb20gXCIuLi91dGlsL1N5bWJvbHNcIlxyXG5cclxuLyoqXHJcbiAqIEFuZ3VsYXIgVUkgUm91dGVyIHN1cHBvcnRcclxuICpcclxuICogV2l0aCB0aGlzIERlY29yYXRvciB5b3UgYXJlIGFibGUgdG8gZGVjb3JhdGUgYW55IGNsYXNzIHdpdGggQFN0YXRlLFxyXG4gKiBhcyBwYXJhbWV0ZXIgeW91IHdpbGwgZ2l2ZSB0aGUgdXN1YWwgc3RhdGUgY29uZmlnXHJcbiAqXHJcbiAqIEluIGFkZGl0aW9uIHlvdSBjYW4gc3BlY2lmeSBhIGRlZmF1bHQgc3RhdGUgYnkgYWRkaW5nIGRlZmF1bHQgOiB0cnVlXHJcbiAqIHRvIHRoZSBzdGF0ZSBjb25maWcsIHRoaXMgc3RhdGUgd2lsbCBiZSBjYWxsZWQgd2hlbiBhIDQwNCBha2EgYSBtaXNzaW5nXHJcbiAqIHVybCBpcyByZXF1ZXN0ZWQuIFlvdSdyZSBhbHNvIGFibGUgdG8gc2hvcnRlbiBjb250cm9sbGVyQVMgdG8gYXMuXHJcbiAqXHJcbiAqIFRoZSBjbGFzcyB3aGljaCBpcyBiZWluZyBkZWNvcmF0ZWQgd2l0aCBAU3RhdGUgd2lsbCB3b3JrIGFzIGNvbnRyb2xsZXJcclxuICogZm9yIHRoZSBzcGVjaWZpZWQgc3RhdGVcclxuICpcclxuICogVGhlIFN0YXRlIGRlY29yYXRvciB3b3JrcyBiZXN0IHdpdGggQEFsaWFzIGFuZCBAVmlld1xyXG4gKlxyXG4gKiBAZGVjb3JhdG9yXHJcbiAqIEBwYXJhbSBjb25mXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cclxuICogQGV4cG9ydHNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBTdGF0ZShjb25mKVxyXG57XHJcbiAgICByZXR1cm4gdGFyZ2V0ID0+IHtcclxuICAgICAgICB0YXJnZXRbc3ltYm9scy5zdGF0ZV0gPSBjb25mO1xyXG4gICAgICAgIENvbnRyb2xsZXIodGFyZ2V0KTtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogVHJpZXMgdG8gY29uZmlndXJlIHRoZSBzdGF0ZSBmcm9tIHRoZSAkJHN0YXRlIHZhciBvblxyXG4gKiB0aGUgYWxsIGNvbnRyb2xsZXJzXHJcbiAqIEBwYXJhbSBjbGF6elxyXG4gKi9cclxubW9kdWxlLnRoZW4oIG0gPT4ge1xyXG4gICAgbS5jb25maWcoW1wiJGluamVjdG9yXCIsIGZ1bmN0aW9uICgkaW5qZWN0b3IpIHtcclxuICAgICAgICBcIm5nSW5qZWN0XCI7XHJcblxyXG4gICAgICAgIGxldCByZWdpc3RlcmVkQ29udHJvbGxlcnMgPSBbXTtcclxuICAgICAgICBsZXQgc3RhdGVzID0gW107XHJcblxyXG4gICAgICAgIC8vRmluZCBldmVyeSBzdGF0ZSBjb250cm9sbGVyXHJcbiAgICAgICAgbS5faW52b2tlUXVldWUuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgbGV0IGNvbnN0cnVjdG9yID0gaXRlbVsyXVsxXTtcclxuICAgICAgICAgICAgaWYgKHJlZ2lzdGVyZWRDb250cm9sbGVycy5maW5kKCh0KSA9PiB0LnR5cGUgPT0gY29uc3RydWN0b3IpKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvcltzeW1ib2xzLnN0YXRlXSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3Jbc3ltYm9scy5zdGF0ZV0uY2xhenogPSBjb25zdHJ1Y3RvcjtcclxuICAgICAgICAgICAgICAgIHN0YXRlcy5wdXNoKGNvbnN0cnVjdG9yW3N5bWJvbHMuc3RhdGVdKTtcclxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWRDb250cm9sbGVycy5wdXNoKHt0eXBlOiBjb25zdHJ1Y3Rvcn0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vUmV0dXJuIGlmIHVpLXJvdXRlciBpcyBub3QgaW5zdGFsbGVkXHJcbiAgICAgICAgaWYgKCEkaW5qZWN0b3IuaGFzKFwiJHN0YXRlUHJvdmlkZXJcIikpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGF0ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6IEBTdGF0ZSBpcyB1c2VkIGJ1dCB1aS1yb3V0ZXIgaXMgbm90IGluc3RhbGxlZCFcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL0ZldGNoIHRoZSBzdGF0ZSBwcm92aWRlclxyXG4gICAgICAgIGxldCAkc3RhdGVQcm92aWRlciA9ICRpbmplY3Rvci5nZXQoXCIkc3RhdGVQcm92aWRlclwiKTtcclxuICAgICAgICBsZXQgJHVybFJvdXRlclByb3ZpZGVyID0gJGluamVjdG9yLmdldChcIiR1cmxSb3V0ZXJQcm92aWRlclwiKTtcclxuXHJcbiAgICAgICAgLy9JbmRpY2F0b3IgaWYgYSBkZWZhdWx0IHN0YXRlIGhhcyBiZWVuIHNldFxyXG4gICAgICAgIGxldCBkZWZhdWx0U3RhdGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy9Db25maWd1cmUgYWxsIHN0YXRlc1xyXG4gICAgICAgIGZvciAobGV0IGNvbmYgb2Ygc3RhdGVzKSB7XHJcbiAgICAgICAgICAgIGxldCBjbGF6eiA9IGNvbmYuY2xheno7XHJcblxyXG4gICAgICAgICAgICAvL1NldCB0aGUgZGVmYXVsdCBzdGF0ZSBpZlxyXG4gICAgICAgICAgICBpZiAoY29uZi5kZWZhdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVmYXVsdFN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEZWZhdWx0IHN0YXRlIGhhcyBhbHJlYWR5IGJlZW4gc2V0IHdoaWxlIGNvbmZpZ3VyaW5nICR7Y29uZi5uYW1lfSwgb3RoZXIgZGVmYXVsdDogJHtkZWZhdWx0U3RhdGUubmFtZX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRTdGF0ZSA9IGNvbmY7XHJcbiAgICAgICAgICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKGZ1bmN0aW9uICgkaW5qZWN0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAkaW5qZWN0b3IuaW52b2tlKFsnJHN0YXRlJywgZnVuY3Rpb24gKCRzdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc3RhdGUuZ28oY29uZi5uYW1lLCB7fSwge2xvY2F0aW9uOiBcInJlcGxhY2VcIn0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL1NldCB0aGUgY29udHJvbGxlclxyXG4gICAgICAgICAgICBjb25mLmNvbnRyb2xsZXIgPSBjbGF6ejtcclxuICAgICAgICAgICAgY29uZi5jb250cm9sbGVyQXMgPSBjb25mLmFzIHx8IGNvbmYuY29udHJvbGxlckFzIHx8IGNsYXp6W3N5bWJvbHMuYWxpYXNdO1xyXG5cclxuICAgICAgICAgICAgLy9BdHRlbXB0IHRvIGRlY29yYXRlIEBWaWV3IGRlY29yYXRvclxyXG4gICAgICAgICAgICBkZWNvcmF0ZVZpZXcoY2xhenosIGNvbmYpO1xyXG5cclxuICAgICAgICAgICAgLy9BcHBseSBkZWNvcmF0b3JzXHJcbiAgICAgICAgICAgIGxldCBkZWNvcmF0ZWRDb25mID0gY29uZmlnLlNUQVRFX0RFQ09SQVRPUihjb25mKTtcclxuICAgICAgICAgICAgaWYgKGRlY29yYXRlZENvbmYpIGNvbmYgPSBkZWNvcmF0ZWRDb25mO1xyXG5cclxuICAgICAgICAgICAgLy9GaW5hbGx5IGNvbmZpZ3VyZSB0aGUgc3RhdGUgb250byB0aGUgdWktcm91dGVyXHJcbiAgICAgICAgICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKGNvbmYpO1xyXG4gICAgICAgIH1cclxuICAgIH1dKTtcclxufSk7IiwiaW1wb3J0ICogYXMgc3ltYm9scyBmcm9tIFwiLi4vdXRpbC9TeW1ib2xzXCJcclxuXHJcbi8qKlxyXG4gKiBTZXRzIHRoZSB2aWV3IG9mIGFuIEBDb21wb25lbnQgb3IgYSBAU3RhdGUgY2FuIGVpdGhlciBiZVxyXG4gKiBhIHRlbXBsYXRlIG9yIGEgdGVtcGxhdGVVcmwsIHRoZSB2aWV3IGlzIHJlY29nbml6ZWQgYXMgdGVtcGxhdGVcclxuICogaWYgaXQgY29udGFpbnMgYXQgbGVhc3QgMSB0YWchXHJcbiAqIEBwYXJhbSB2aWV3XHJcbiAqIEBEZWNvcmF0b3JcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBWaWV3KHZpZXcpXHJcbntcclxuICAgIHJldHVybiAodGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgdGFyZ2V0W3N5bWJvbHMudmlld10gPSB2aWV3O1xyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWNvcmF0ZXMgdGhlIHZpZXcgdG8gdGhlIGNvbmZpZ3VyYXRpb25cclxuICogQHBhcmFtIGNsYXp6XHJcbiAqIEBwYXJhbSBjb25mXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVjb3JhdGVWaWV3KGNsYXp6LCBjb25mKVxyXG57XHJcbiAgICBsZXQgdmlldyA9IGNsYXp6W3N5bWJvbHMudmlld107XHJcbiAgICBpZiAoIXZpZXcpIHJldHVybjtcclxuICAgIGxldCB1cmxSZWdleCA9IC9bXjw+XStcXC5bQS1aYS16XXsyLDV9JC87XHJcbiAgICBpZiAodXJsUmVnZXgudGVzdChcclxuICAgICAgICB2aWV3KSkgeyAvL3VybFxyXG4gICAgICAgIGNvbmYudGVtcGxhdGVVcmwgPSB2aWV3O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25mLnRlbXBsYXRlID0gdmlldztcclxuICAgIH1cclxufSIsImltcG9ydCB7bW9kdWxlfSBmcm9tIFwiLi4vdXRpbC9Bbmd1bGFyTW9kdWxlUmVzb2x2ZXJcIlxyXG5cclxuLyoqXHJcbiAqIFRoaXMgbW9kdWxlIHRhcmdldHMgYW5ndWxhcnMgbWlzc2luZyBhYmlsaXR5IHRvIHRyYWNrIG9iamVjdHMgZm9sbG93aW5nIHRoZSBFUzYgaXRlcmF0b3IgcGF0dGVybixcclxuICogd2hlcmUgYW55IG9iamVjdCB3aGljaCBoYXMgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZCBpcyBpdGVyYWJsZS5cclxuICpcclxuICogVGhpcyBtb2R1bGUgbW9ua2V5IHBhdGNoZXMgZXZlcnkgJHNjb3BlIHRvIHByb3h5ICR3YXRjaENvbGxlY3Rpb24gYW5kIHRyYW5zZm9ybSBhIHBvc3NpYmxlIGl0ZXJhYmxlXHJcbiAqIGludG8gYSBzaW1wbGUgYXJyYXkuXHJcbiAqXHJcbiAqIElmIHlvdSB3YW50IHRvIGFjY2VzcyB0aGUgb3JpZ2luYWwgbWV0aG9kcywgeW91IHdpbGwgaGF2ZSB0byBjYWxsICRzY29wZVtTeW1ib2wuZm9yKFwiJHdhdGNoQ29sbGVjdGlvblwiKV1cclxuICovXHJcbm1vZHVsZS50aGVuKG1vZHVsZSA9PiB7XHJcbiAgICAvKipcclxuICAgICAqIEhvb2sgaW50byB0aGUgJHJvb3RTY29wZVByb3ZpZGVyIHRvIG1ha2Ugc3VyZSB3ZSdyZSB0aGUgZmlyc3Qgb25lcyB0byBtb2RpZnkgdGhlICRyb290U2NvcGVcclxuICAgICAqL1xyXG4gICAgbW9kdWxlLmNvbmZpZyhbXCIkcm9vdFNjb3BlUHJvdmlkZXJcIiwgZnVuY3Rpb24oJHJvb3RTY29wZVByb3ZpZGVyKXtcclxuICAgICAgICBjb25zdCAkZ2V0ID0gJHJvb3RTY29wZVByb3ZpZGVyLiRnZXQ7XHJcbiAgICAgICAgJHJvb3RTY29wZVByb3ZpZGVyLiRnZXQgPSBbXCIkaW5qZWN0b3JcIiwgXCIkcGFyc2VcIiwgZnVuY3Rpb24oJGluamVjdG9yLCAkcGFyc2Upe1xyXG4gICAgICAgICAgICBsZXQgJHJvb3RTY29wZSA9ICRpbmplY3Rvci5pbnZva2UoJGdldCk7XHJcblxyXG4gICAgICAgICAgICBtb25rZXlQYXRjaCR3YXRjaENvbGxlY3Rpb24oJHJvb3RTY29wZSwgJHBhcnNlKTtcclxuICAgICAgICAgICAgbW9ua2V5UGF0Y2gkd2F0Y2hDb2xsZWN0aW9uKCRyb290U2NvcGUuX19wcm90b19fLmNvbnN0cnVjdG9yLnByb3RvdHlwZSwgJHBhcnNlKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAkcm9vdFNjb3BlO1xyXG4gICAgICAgIH1dO1xyXG4gICAgfV0pO1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBHbG9iYWwgc3ltYm9scyB0byBhY2Nlc3MgdGhlXHJcbiAqIEB0eXBlIHtTeW1ib2x9XHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5jb25zdCAkd2F0Y2hDb2xsZWN0aW9uID0gU3ltYm9sLmZvcihcIiR3YXRjaENvbGxlY3Rpb25cIik7XHJcblxyXG5cclxuLyoqXHJcbiAqIEhlcmUgd2UncmUgYWN0dWFsbHkgcGF0Y2hpbmcgdGhlICR3YXRjaENvbGxlY3Rpb24gbWV0aG9kXHJcbiAqIEBwYXJhbSAkdGFyZ2V0XHJcbiAqIEBwYXJhbSAkcGFyc2VcclxuICovXHJcbmZ1bmN0aW9uIG1vbmtleVBhdGNoJHdhdGNoQ29sbGVjdGlvbigkdGFyZ2V0LCAkcGFyc2UpXHJcbntcclxuICAgICR0YXJnZXRbJHdhdGNoQ29sbGVjdGlvbl0gPSAkdGFyZ2V0LiR3YXRjaENvbGxlY3Rpb247XHJcblxyXG4gICAgJHRhcmdldC4kd2F0Y2hDb2xsZWN0aW9uID0gZnVuY3Rpb24ocHJvcGVydHksIGFjdGlvbil7XHJcblxyXG4gICAgICAgIGxldCBpc0Z1bmMgPSB0eXBlb2YgcHJvcGVydHkgPT0gJ2Z1bmN0aW9uJztcclxuICAgICAgICBsZXQgZ2V0dGVyID0gaXNGdW5jID8gcHJvcGVydHkgOiAkcGFyc2UocHJvcGVydHkpO1xyXG4gICAgICAgIGxldCBpdGVyYWJsZUFzQXJyYXkgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgbGV0ICRzY29wZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGxldCBtb25rZXlQYXRjaGVkT2JzZXJ2ZXIgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBsZXQgcmVzb2x2ZWQgPSBnZXR0ZXIoaXNGdW5jID8gdW5kZWZpbmVkIDogJHNjb3BlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNvbHZlZCAmJiAhKHJlc29sdmVkIGluc3RhbmNlb2YgQXJyYXkpICYmIHJlc29sdmVkW1N5bWJvbC5pdGVyYXRvcl0pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vUmVmZXJlbmNlIGNoYW5nZWQsIGNoYW5nZSBvdXIgdG9vXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzb2x2ZWQgIT09IGl0ZXJhYmxlQXNBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhYmxlQXNBcnJheSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vUmVmaWxsIGFycmF5XHJcbiAgICAgICAgICAgICAgICBpdGVyYWJsZUFzQXJyYXkubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgcmVzb2x2ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVyYWJsZUFzQXJyYXkucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL0FuZCByZXR1cm4gaXQgYXMgcmVzdWx0IG9mIHRoZSB3YXRjaCBleHByZXNzaW9uXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlcmFibGVBc0FycmF5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZXJhYmxlQXNBcnJheSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgIC8vSWYgaXQncyBub3QgYW4gaXRlcmFibGUgbm9uLWFycmF5IGp1c3QgcmV0dXJuIHRoZSBvcmlnaW5hbCBvYmplY3RcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzb2x2ZWQsIHByb3BlcnR5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVkO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzWyR3YXRjaENvbGxlY3Rpb25dKG1vbmtleVBhdGNoZWRPYnNlcnZlciwgYWN0aW9uKTsgLy9NdXN0IGJlIHRoaXMgd2F5IGJlY2F1c2Ugb2YgbWF4aW11bSBjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWQgZXJyb3JcclxuICAgIH1cclxufSIsImltcG9ydCB7Y29uZmlnfSBmcm9tIFwiLi4vdXRpbC9Db25maWd1cmF0aW9uXCJcclxuXHJcbi8vVGhlIGRlZmF1bHQgem9uZSB3aGVyZSBydW5PdXRzaWRlQW5ndWxhcigpIGNhbGxzIGFyZSBiZWluZyBleGVjdXRlZFxyXG5jb25zdCBvdXRlclpvbmUgPSBab25lLmN1cnJlbnQ7XHJcblxyXG4vL0NyZWF0ZSB0aGUgYW5ndWxhciB6b25lXHJcbmV4cG9ydCBjb25zdCBOZ1pvbmUgPSBvdXRlclpvbmUuZm9yayh7XHJcbiAgICBuYW1lIDogXCJBbmd1bGFyIFpvbmUgPG5nLW5leHQ+XCIsXHJcbiAgICBvbkludm9rZSA6IGZ1bmN0aW9uKGRlbGVnYXRlLCBjdXJyZW50LCB0YXJnZXQsIGNhbGxiYWNrLCBhcHBseVRoaXMsIGFyZ3MpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBOZ1pvbmUuJGRpZ2VzdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZS5pbnZva2UodGFyZ2V0LCBjYWxsYmFjaywgYXBwbHlUaGlzLCBhcmdzKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICAkZGlnZXN0T25jZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkludm9rZVRhc2sgOiBmdW5jdGlvbihkZWxlZ2F0ZSwgY3VycmVudCwgdGFyZ2V0LCB0YXNrLCBhcHBseVRoaXMsIGFyZ3MpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBOZ1pvbmUuJGRpZ2VzdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZS5pbnZva2VUYXNrKHRhcmdldCwgdGFzaywgYXBwbHlUaGlzLCBhcmdzKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICAkZGlnZXN0T25jZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG4vLyBBZGQgJGRpZ2VzdCB0byB0aGUgem9uZVxyXG5OZ1pvbmUuJGRpZ2VzdCA9IGZ1bmN0aW9uKCl7fTtcclxuXHJcbi8vIERpZ2VzdHMgb25seSBpZiBub3QgYWxyZWFkeSBkb25lXHJcbmNvbnN0ICRkaWdlc3RPbmNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCFOZ1pvbmUuJGRpZ2VzdGVkKSBOZ1pvbmUuJGRpZ2VzdCgpO1xyXG4gICAgTmdab25lLiRkaWdlc3RlZCA9IGZhbHNlO1xyXG59O1xyXG5cclxuLy8gQWRkIHJ1bk91dHNpZGVBbmd1bGFyIHRvIHRoZSB6b25lXHJcbk5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhciA9IGZ1bmN0aW9uIChmbikge1xyXG4gICAgb3V0ZXJab25lLnJ1bihmbik7XHJcbn07XHJcblxyXG4vL05nWm9uZSBtb2R1bGVcclxuZXhwb3J0IGNvbnN0IG5nWm9uZU1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKFwibmdab25lXCIsIFtdKTtcclxubmdab25lTW9kdWxlLmZhY3RvcnkoXCJOZ1pvbmVcIiwgKCkgPT4gTmdab25lKTtcclxuXHJcbi8vQWRkIGF1dG8tYm9vdHN0cmFwIGhhbmRsZXJcclxuYW5ndWxhci5lbGVtZW50KGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XHJcblxyXG4gICAgaWYgKCFjb25maWcuWk9ORV9KUylcclxuICAgIHtcclxuICAgICAgICBhbmd1bGFyLnJlc3VtZUJvb3RzdHJhcCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIE5nWm9uZS5ydW4oKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy9FeHBvcnQgdGhlIGFuZ3VsYXIgem9uZSBvbnRvIHRoZSB3aW5kb3cgaWYgbm90IGV4aXN0aW5nXHJcbiAgICAgICAgICAgIHdpbmRvdy5OZ1pvbmUgPSB3aW5kb3cuTmdab25lIHx8IE5nWm9uZTtcclxuXHJcbiAgICAgICAgICAgIC8vUmVzdW1lIGJvb3RzdHJhcCBpbnNpZGUgb2Ygb3VyIGFuZ3VsYXIgem9uZVxyXG4gICAgICAgICAgICBhbmd1bGFyLnJlc3VtZUJvb3RzdHJhcChbXCJuZ1pvbmVcIl0pLmludm9rZShbXCIkcm9vdFNjb3BlXCIsICgkcm9vdFNjb3BlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9QYXRjaCByb290IHNjb3BlcyBkaWdlc3QgdG8gc2V0IGFuIGluZGljYXRvciBvbiB0aGUgem9uZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlnZXN0U3ltYm9sID0gU3ltYm9sLmZvcihcIiRkaWdlc3RcIik7XHJcbiAgICAgICAgICAgICAgICAkcm9vdFNjb3BlW2RpZ2VzdFN5bWJvbF0gPSAkcm9vdFNjb3BlLiRkaWdlc3Q7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9JZiB5b3Ugd2FudCB0byBkaWdlc3Qgb24gem9uZSBsZWF2ZSBnaXZlIFwiZmFsc2VcIiBhcyBwYXJhbWV0ZXIgdG8gJHJvb3RTY29wZS4kZGlnZXN0XHJcbiAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRkaWdlc3QgPSBmdW5jdGlvbiAoZGlzYWJsZVpvbmVKUyA9IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlzYWJsZVpvbmVKUykgTmdab25lLiRkaWdlc3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tkaWdlc3RTeW1ib2xdKCk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vQWRkIGRpZ2VzdCB0byB0aGUgYW5ndWxhciB6b25lXHJcbiAgICAgICAgICAgICAgICBOZ1pvbmUuJGRpZ2VzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISRyb290U2NvcGUuJCRwaGFzZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUuJGRpZ2VzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG4vL0ZvcmNlIGFuZ3VsYXIgdG8gc3RvcCB0aGUgYm9vdHN0cmFwIHByb2Nlc3Ncclxud2luZG93Lm5hbWUgPSBcIk5HX0RFRkVSX0JPT1RTVFJBUCFcIjtcclxuIiwiaW1wb3J0IHtjb25maWd9IGZyb20gXCIuL0NvbmZpZ3VyYXRpb25cIlxyXG5cclxuLyoqXHJcbiAqIFJlZmVyZW5jZSB0byB0aGUgYW5ndWxhciBtb2R1bGUgdXNlZCBieSBBbmd1bGFyMnRvMSwgdGhpcyBtb2R1bGUgaXMgZWl0aGVyXHJcbiAqIHJlc29sdmVkIHZpYSBuZy1hcHAgb3IgYnkgdXNlQW5ndWxhck1vZHVsZSguLi4pXHJcbiAqL1xyXG5sZXQgYW5ndWxhck1vZHVsZSA9IG51bGw7XHJcblxyXG4vKipcclxuICogVGhlIGluamVjdG9yIG9mIG91ciBtYWluIG1vZHVsZVxyXG4gKiBUaGlzICRpbmplY3RvciBzZXJ2aWNlIGlzIHNldCBhcyBzb29uIGFzIHRoZSBtb2R1bGUgd2FzIHJlcXVlc3RlZFxyXG4gKiB0aGUgZmlyc3QgdGltZSBhbmQgYW5ndWxhciBpcyBiZXlvbmQgaXRzIHJ1biBwaGFzZVxyXG4gKi9cclxubGV0ICRpbmplY3RvciA9IG51bGw7XHJcbmxldCAkaW5qZWN0b3JSZXF1ZXN0ZWQgPSBmYWxzZTtcclxuXHJcbmxldCByZXF1ZXN0SW5qZWN0b3IgPSBmdW5jdGlvbigpe1xyXG4gICAgaWYgKGFuZ3VsYXJNb2R1bGUgJiYgISRpbmplY3RvclJlcXVlc3RlZClcclxuICAgIHtcclxuICAgICAgICBhbmd1bGFyTW9kdWxlLnJ1bihbXCIkaW5qZWN0b3JcIiwgaSA9PiAkaW5qZWN0b3IgPSBpXSk7XHJcbiAgICAgICAgJGluamVjdG9yUmVxdWVzdGVkID0gdHJ1ZTtcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBBdHRlbXB0cyB0byBsb29rdXAgdGhlIHJvb3QgYW5ndWxhciBtb2R1bGUgb2YgdGhlIGFwcCBieSByZXNvbHZpbmcgdGhlIGZpcnN0XHJcbiAqIG5nLWFwcCBvbiB0aGUgRE9NXHJcbiAqIEFzIGFuIGFsdGVybmF0aXZlIHlvdSBjYW4gc2V0IHlvdXIgbW9kdWxlIHdpdGggdXNlQW5ndWxhck1vZHVsZSgpLCB3aGljaCB3aWxsXHJcbiAqIHRoZW4gYmUgcmV0dXJuZWQgYnkgdGhpcyBmdW5jdGlvblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxvb2t1cEFuZ3VsYXJNb2R1bGUoKVxyXG57XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vR2V0IG1hbnVhbGx5IHNwZWNpZmllZCBtb2R1bGUgZnJvbSBjb25maWdcclxuICAgICAgICBpZiAoY29uZmlnLk1PRFVMRSAmJiAhYW5ndWxhck1vZHVsZSkge1xyXG4gICAgICAgICAgICBhbmd1bGFyTW9kdWxlID0gY29uZmlnLk1PRFVMRTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vUmV0dXJucyB0aGUgcHJlc2V0IG1vZHVsZSBpZiBhdmFpbGFibGVcclxuICAgICAgICBpZiAoYW5ndWxhck1vZHVsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYW5ndWxhck1vZHVsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBuZ0FwcEhvbGRlciA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW25nLWFwcF1cIikpO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKCFuZ0FwcEhvbGRlci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gZWxlbWVudCB3aXRoIFtuZy1hcHBdIGZvdW5kIGFuZCBubyBtb2R1bGUgc2V0IHdpdGggJ3VzZUFuZ3VsYXJNb2R1bGUoKSdcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbW9kdWxlTmFtZSA9IG5nQXBwSG9sZGVyWzBdLmdldEF0dHJpYnV0ZSgnbmctYXBwJyk7XHJcbiAgICAgICAgYW5ndWxhck1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKG1vZHVsZU5hbWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gYW5ndWxhck1vZHVsZTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgcmVxdWVzdEluamVjdG9yKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogU2V0cyB0aGUgYW5ndWxhciBtb2R1bGUgd2hpY2ggaXMgdXNlZCBieSBBbmd1bGFyMnRvMVxyXG4gKiBAcGFyYW0gbW9kdWxlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQW5ndWxhck1vZHVsZShtb2R1bGUpXHJcbntcclxuICAgIGFuZ3VsYXJNb2R1bGUgPSBtb2R1bGU7XHJcbiAgICByZXF1ZXN0SW5qZWN0b3IoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIG1haW4gJGluamVjdG9yIG9mIHRoZSByb290IGFuZ3VsYXJcclxuICogbW9kdWxlLCBpcyBhdmFpbGFibGUgYXMgc29vbiBhcyB0aGUgbW9kdWxlIGhhcyBiZWVuIHJlcXVlc3RlZCBhdCBsZWFzdFxyXG4gKiBvbmNlIGFuZCBhbmd1bGFyIGlzIGJleW9uZCBpdHMgcnVuIHBoYXNlXHJcbiAqIEBkZWNvcmF0b3JcclxuICogQHJldHVybiB7Kn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhbmd1bGFySW5qZWN0b3IoKVxyXG57XHJcbiAgICByZXR1cm4gJGluamVjdG9yO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb2R1bGVFcnJvcihlKVxyXG57XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxufVxyXG5cclxuY29uc3QgbW9kdWxlUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICB0cnkgIC8vSWYgd2UncmUgbHVja3kgdGhlIG1vZHVsZSBkb2VzIGFscmVhZHkgZXhpc3RcclxuICAgIHtcclxuICAgICAgICBsZXQgbW9kdWxlID0gbG9va3VwQW5ndWxhck1vZHVsZSgpO1xyXG4gICAgICAgIHJlcXVlc3RJbmplY3RvcigpO1xyXG4gICAgICAgIHJlc29sdmUobW9kdWxlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSAvL090aGVyd2lzZSB3ZSBtdXN0IGF0dGVtcHQgdG8gYXdhaXQgaXRzIGNyZWF0aW9uXHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSWYgbmctYXBwIGlzIGRlZmluZWQgd2UncmUgbW9ua2V5IHBhdGNoaW5nIGFuZ3VsYXJzIG1vZHVsZSgpIGZ1bmN0aW9uXHJcbiAgICAgICAgICogaW4gb3JkZXIgdG8gZ2V0IG5vdGlmaWVkIGFzIHNvb24gYXMgdGhlIG1vZHVsZSBpcyBhdmFpbGFibGVcclxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxldCBuZ0FwcEhvbGRlciA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW25nLWFwcF1cIikpO1xyXG4gICAgICAgIGlmIChuZ0FwcEhvbGRlci5sZW5ndGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYXBwTW9kdWxlTmFtZSA9IG5nQXBwSG9sZGVyWzBdLmdldEF0dHJpYnV0ZSgnbmctYXBwJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdNb2R1bGVGdW5jdGlvbiA9IGFuZ3VsYXIubW9kdWxlO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFhbmd1bGFyKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgaW5jbHVkZSBhbmd1bGFyIGJlZm9yZSBuZy1uZXh0IVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9Nb25rZXkgcGF0Y2ggdGhlIG1vZHVsZSBmdW5jdGlvbiB0byBkZXRlY3QgaXRzIGNyZWF0aW9uXHJcbiAgICAgICAgICAgIGFuZ3VsYXIubW9kdWxlID0gZnVuY3Rpb24obmFtZSwgZGVwZW5kZW5jaWVzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbW9kdWxlID0gb3JpZ01vZHVsZUZ1bmN0aW9uKG5hbWUsIGRlcGVuZGVuY2llcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9PdXIgbWFpbiBtb2R1bGUgaXMgYXZhaWxhYmxlXHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PSBhcHBNb2R1bGVOYW1lICYmIGRlcGVuZGVuY2llcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuZ3VsYXIubW9kdWxlID0gb3JpZ01vZHVsZUZ1bmN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuZ3VsYXJNb2R1bGUgPSBtb2R1bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEluamVjdG9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShtb2R1bGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBtb2R1bGU7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9JbiBjYXNlIG5vIG5nLWFwcCBpcyBhdmFpbGFibGUgd2UgbXVzdCBtb25rZXkgcGF0Y2ggdGhlIGNvbmZpZyBvYmplY3QgdG8gZ2V0XHJcbiAgICAgICAgICAgIC8vTm90aWZpZWQgd2hlbiB0aGUgbW9kdWxlIGlzIGdldHRpbmcgY29uZmlndXJlZFxyXG4gICAgICAgICAgICBsZXQgbW9kdWxlU3ltYm9sID0gU3ltYm9sKFwiTU9EVUxFXCIpO1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29uZmlnLCBcIk1PRFVMRVwiLCB7XHJcbiAgICAgICAgICAgICAgICBzZXQgOiBtb2R1bGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY29uZmlnW21vZHVsZVN5bWJvbF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhck1vZHVsZSA9IG1vZHVsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEluamVjdG9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobW9kdWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnW21vZHVsZVN5bWJvbF0gPSBtb2R1bGVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXQgOiAoKSA9PiBjb25maWdbbW9kdWxlU3ltYm9sXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCB7bW9kdWxlUHJvbWlzZSBhcyBtb2R1bGV9XHJcbiIsImltcG9ydCB7YW5ndWxhckluamVjdG9yLCBtb2R1bGV9IGZyb20gXCIuL0FuZ3VsYXJNb2R1bGVSZXNvbHZlclwiXHJcbmltcG9ydCB7Y29uZmlnfSBmcm9tIFwiLi9Db25maWd1cmF0aW9uXCJcclxuaW1wb3J0ICogYXMgc3ltYm9scyBmcm9tIFwiLi4vdXRpbC9TeW1ib2xzXCJcclxuXHJcbi8qKlxyXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gYXJyYXkgKGluamVjdCkgdGhpcyBtZXRob2RcclxuICogd2lsbCByZXR1cm4gb25seSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgJGluamVjdCBwcm9wZXJ0eVxyXG4gKiBzZXRcclxuICogQHBhcmFtIGFyZ1xyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2goYXJnKVxyXG57XHJcbiAgICBpZiAoYXJnLmNvbnN0cnVjdG9yID09IEFycmF5KVxyXG4gICAge1xyXG4gICAgICAgIGxldCBhcnIgPSBhcmc7XHJcbiAgICAgICAgYXJnID0gYXJyLnNwbGljZShhcnIubGVuZ3RoIC0gMSwgMSlbMF07XHJcbiAgICAgICAgYXJnLiRpbmplY3QgPSBhcnI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJnO1xyXG59XHJcblxyXG4vLyBSdW4gYmxvY2sgd2hpY2ggd2lsbCBjb25maWd1cmUgYWxsIGFubm90YXRpb25zIG9uIGFueSBzZXJ2aWNlcyBhdmFpbGFibGVcclxuLy8gQWxsIHNlcnZpY2VzIGFyZSB1c2VkIHRvZ2V0aGVyIHdpdGggdGhlICRyb290U2NvcGVcclxuLyoqXHJcbiAqIEV4cG9zZXMgYWxsIHNlcnZpY2VzIG9mIGEgc2luZ2xlIG1vZHVsZVxyXG4gKiBAcGFyYW0gbW9kdWxlXHJcbiAqL1xyXG5sZXQgZXhwb3NlTW9kdWxlID0gbW9kdWxlID0+IHtcclxuICAgIGxldCAkaW5qZWN0b3IgPSBhbmd1bGFySW5qZWN0b3IoKTtcclxuICAgIGxldCAkcm9vdFNjb3BlID0gJGluamVjdG9yLmdldChcIiRyb290U2NvcGVcIik7XHJcbiAgICBtb2R1bGUuX2ludm9rZVF1ZXVlLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgbGV0IGRlZiA9IGl0ZW1bMl07XHJcbiAgICAgICAgaWYgKCRpbmplY3Rvci5oYXMoZGVmWzBdKSkge1xyXG4gICAgICAgICAgICBsZXQgc2VydmljZSA9ICRpbmplY3Rvci5nZXQoZGVmWzBdKTtcclxuICAgICAgICAgICAgY2FsbEFubm90YXRpb25zKHNlcnZpY2UsICRyb290U2NvcGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuLy9Bd2FpdCB0aGUgYW5ndWxhciBtb2R1bGVcclxubW9kdWxlLnRoZW4obSA9PiB7XHJcbiAgICBtLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5BTExPV19ERUNPUkFUT1JTX0lOX1NFUlZJQ0VTKSB7XHJcbiAgICAgICAgICAgIGV4cG9zZU1vZHVsZShtKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBDYWxscyBhbGwgcmVnaXN0ZXJlZCBhbm5vdGF0aW9ucyBvbiB0aGUgY29udHJvbGxlciwgb3Igb25cclxuICogYSBzZXJ2aWNlXHJcbiAqIEBwYXJhbSBjb250cm9sbGVyXHJcbiAqIEBwYXJhbSAkc2NvcGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxsQW5ub3RhdGlvbnMoY29udHJvbGxlciwgJHNjb3BlKVxyXG57XHJcbiAgICAvL0FzeW5jIHdyYXBwZXJcclxuICAgIGxldCBhc3luY1dyYXBwZXIgPSBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnRoZW4oKCkgPT4gJHNjb3BlLiRkaWdlc3QuY2FsbCgkc2NvcGUpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vQ2FsbCBpbml0IG1ldGhvZHNcclxuICAgIGxldCBpbml0ZWQgPSBbXTtcclxuICAgIGZvciAobGV0IGluaXRpYWxpemVyIG9mIGNvbnRyb2xsZXJbc3ltYm9scy5pbml0XSB8fCBbXSlcclxuICAgIHtcclxuICAgICAgICBpZiAoIWluaXRlZC5pbmNsdWRlcyhpbml0aWFsaXplcikpIHtcclxuICAgICAgICAgICAgYXN5bmNXcmFwcGVyKGNvbnRyb2xsZXJbaW5pdGlhbGl6ZXJdKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbml0ZWQucHVzaChpbml0aWFsaXplcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9CaW5kIHdhdGNoZXNcclxuICAgIGxldCB3YXRjaGVkID0gW107XHJcbiAgICBsZXQgJHBhcnNlID0gYW5ndWxhckluamVjdG9yKCkuZ2V0KFwiJHBhcnNlXCIpO1xyXG4gICAgZm9yIChsZXQgd2F0Y2hlciBvZiBjb250cm9sbGVyW3N5bWJvbHMud2F0Y2hdIHx8IFtdKSB7XHJcbiAgICAgICAgaWYgKCF3YXRjaGVkLmluY2x1ZGVzKHdhdGNoZXIpKSB7XHJcblxyXG4gICAgICAgICAgICAvL1BhcnNlIHRoZSBhbmd1bGFyIGV4cHJlc3Npb25cclxuICAgICAgICAgICAgbGV0IHBhcnNlID0gJHBhcnNlKHdhdGNoZXIucHJvcGVydHkpO1xyXG4gICAgICAgICAgICBsZXQgZ2V0dGVyID0gKCkgPT4gcGFyc2UoY29udHJvbGxlcik7XHJcblxyXG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gZnVuY3Rpb24oLi4ucGFyYW1zKXtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJbd2F0Y2hlci5uYW1lXSguLi5wYXJhbXMpO1xyXG4gICAgICAgICAgICB9LmJpbmQoY29udHJvbGxlcik7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXdhdGNoZXIuY29sbGVjdGlvbikgJHNjb3BlLiR3YXRjaChnZXR0ZXIsIGFjdGlvbiwgISF3YXRjaGVyLmRlZXApO1xyXG4gICAgICAgICAgICBlbHNlICRzY29wZS4kd2F0Y2hDb2xsZWN0aW9uKGdldHRlciwgYWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2F0Y2hlZC5wdXNoKHdhdGNoZXIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL0JpbmQgZXZlbnRzXHJcbiAgICBsZXQgZXZlbnRlZCA9IFtdO1xyXG4gICAgZm9yIChsZXQgb24gb2YgY29udHJvbGxlcltzeW1ib2xzLm9uXSB8fCBbXSkge1xyXG4gICAgICAgIGlmICghIGV2ZW50ZWQuaW5jbHVkZXMob24pKSB7XHJcbiAgICAgICAgICAgICRzY29wZS4kb24ob24uZXZlbnQsIGZ1bmN0aW9uKC4uLnBhcmFtcyl7XHJcbiAgICAgICAgICAgICAgICBhc3luY1dyYXBwZXIoY29udHJvbGxlcltvbi5uYW1lXSguLi5wYXJhbXMpKTtcclxuICAgICAgICAgICAgfSkuYmluZChjb250cm9sbGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXZlbnRlZC5wdXNoKG9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1NjaGVkdWxlZCBtZXRob2RzXHJcbiAgICBsZXQgJGludGVydmFsID0gYW5ndWxhckluamVjdG9yKCkuZ2V0KFwiJGludGVydmFsXCIpO1xyXG4gICAgbGV0IHNjaGVkdWxlZCA9IFtdO1xyXG4gICAgZm9yIChsZXQgc2NoZWR1bGUgb2YgY29udHJvbGxlcltzeW1ib2xzLnNjaGVkdWxlXSB8fCBbXSkge1xyXG4gICAgICAgIGlmICghc2NoZWR1bGVkLmluY2x1ZGVzKHNjaGVkdWxlKSl7XHJcbiAgICAgICAgICAgIGxldCBpZCA9ICRpbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgYXN5bmNXcmFwcGVyKGNvbnRyb2xsZXJbc2NoZWR1bGUubmFtZV0oKSk7XHJcbiAgICAgICAgICAgIH0uYmluZChjb250cm9sbGVyKSwgc2NoZWR1bGUuaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAkc2NvcGUuJG9uKFwiJGRlc3Ryb3lcIiwgKCkgPT4gJGludGVydmFsLmNhbmNlbChpZCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL0NhbGwgZGVzdHJveSBtZXRob2RzXHJcbiAgICAkc2NvcGUuJG9uKFwiJGRlc3Ryb3lcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgICBsZXQgZGVzdHJveWVkID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgZGVzdHJveWVyIG9mIGNvbnRyb2xsZXJbc3ltYm9scy5kZXN0cm95XSB8fCBbXSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICghZGVzdHJveWVkLmluY2x1ZGVzKGRlc3Ryb3llcikpIGNvbnRyb2xsZXJbZGVzdHJveWVyXSgpO1xyXG4gICAgICAgICAgICBkZXN0cm95ZWQucHVzaChkZXN0cm95ZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59IiwiLy8gVGhlIHB1cnBvc2Ugb2YgdGhpcyBmaWxlIGlzIHRvIHByb3ZpZGUgYW4gZWFzeSBjb25maWd1cmF0aW9uIEFQSVxyXG4vLyBhY2Nlc2libGUgZnJvbSB0aGUgb3V0c2lkZVxyXG5cclxuLyoqXHJcbiAqIFRoZSBtb2R1bGUgY29uZmlndXJhdGlvbiwgYXMgYW4gYW5vbnltb3VzIG9iamVjdFxyXG4gKi9cclxuY29uc3QgTmdOZXh0Q29uZmlnID0gIHtcclxuXHJcbiAgICAvL0FuZ3VsYXIgbW9kdWxlXHJcbiAgICBNT0RVTEUgOiB1bmRlZmluZWQsXHJcblxyXG4gICAgLy9ab25lLmpzXHJcbiAgICBaT05FX0pTIDogdHJ1ZSxcclxuXHJcbiAgICAvL0Z1cnRoZXIgY29uZmlndXJhdGlvblxyXG4gICAgQUxMT1dfREVDT1JBVE9SU19JTl9TRVJWSUNFUyA6IHRydWUsXHJcblxyXG4gICAgLy9EZWNvcmF0b3JzXHJcbiAgICBTVEFURV9ERUNPUkFUT1IgOiBzdGF0ZSA9PiBzdGF0ZVxyXG59O1xyXG5cclxuZXhwb3J0IHtOZ05leHRDb25maWcgYXMgY29uZmlnfTsiLCIvKipcclxuICogVGhpcyB3cmFwcGVyIGVuYWJsZXMgYW4gaW50dWl0aXZlIHdheSB0byB1c2Ugb2YgZXM2IGNsYXNzZXNcclxuICogYXMgYW5ndWxhciBkaXJlY3RpdmUuXHJcbiAqIElmIHlvdSB3cmFwIHlvdXIgZGlyZWN0aXZlIGNsYXNzIHdpdGggdGhpcyBmdW5jdGlvbiB5b3UgY2FuXHJcbiAqIHVzZSBsaW5rL2NvbXBpbGUgZnVuY3Rpb25zIHdpdGggXCJ0aGlzXCIgcmVmZXJlbmNlIGFuZCBAbmdJbmplY3RcclxuICogb24gYm90aCB0aGUgY29uc3RydWN0b3IgYW5kIHRoZSBjb250cm9sbGVyIVxyXG4gKlxyXG4gKiBAcGFyYW0gZGlyZWN0aXZlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihkaXJlY3RpdmUpXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogRmV0Y2ggZnVuY3Rpb24gZnJvbSBhcnJheVxyXG4gICAgICovXHJcbiAgICBpZiAoZGlyZWN0aXZlLmNvbnN0cnVjdG9yID09IEFycmF5KVxyXG4gICAge1xyXG4gICAgICAgIGxldCBhcnIgPSBkaXJlY3RpdmU7XHJcbiAgICAgICAgZGlyZWN0aXZlID0gYXJyLnNwbGljZShhcnIubGVuZ3RoIC0gMSwgMSlbMF07XHJcbiAgICAgICAgZGlyZWN0aXZlLiRpbmplY3QgPSBhcnI7XHJcbiAgICB9XHJcblxyXG4gICAgLy9DaGVjayBpZiBkaXJlY3RpdmUgaXMgYW4gYWN0dWFsIGNsYXNzXHJcbiAgICB0cnlcclxuICAgIHtcclxuICAgICAgICBkaXJlY3RpdmUoKTtcclxuICAgICAgICByZXR1cm4gZGlyZWN0aXZlO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpXHJcbiAgICB7XHJcbiAgICAgICAgLy9Db250aW51ZSBhbmQgd3JhcCBjbGFzcyB0byBtYWtlIGl0IHVzYWJsZSBpbiBhbmd1bGFyXHJcbiAgICAgICAgaWYoIShlIGluc3RhbmNlb2YgVHlwZUVycm9yKSkgcmV0dXJuIGRpcmVjdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZm4gPSBmdW5jdGlvbiguLi5pbmplY3QpXHJcbiAgICB7XHJcbiAgICAgICAgLy9DcmVhdGUgRGlyZWN0aXZlXHJcbiAgICAgICAgbGV0IGluc3RhbmNlID0gbmV3IGRpcmVjdGl2ZSguLi5pbmplY3QpO1xyXG5cclxuICAgICAgICAvL1dyYXAgbGluayBjYWxsIHRvIGtlZXAgdGhpcyByZWZlcmVuY2VzXHJcbiAgICAgICAgaWYgKCEhaW5zdGFuY2UubGluaylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBsaW5rID0gaW5zdGFuY2UubGluaztcclxuXHJcbiAgICAgICAgICAgIGluc3RhbmNlLmxpbmsgPSBmdW5jdGlvbiguLi5hcmdzKXtcclxuICAgICAgICAgICAgICAgIGxpbmsuYXBwbHkoaW5zdGFuY2UsIGFyZ3MpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9XcmFwIGNvbXBpbGUgY2FsbCB0byBrZWVwIFwidGhpc1wiIHJlZmVyZW5jZVxyXG4gICAgICAgIGlmICghIWluc3RhbmNlLmNvbXBpbGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY29tcGlsZSA9IGluc3RhbmNlLmNvbXBpbGU7XHJcblxyXG4gICAgICAgICAgICBpbnN0YW5jZS5jb21waWxlID0gZnVuY3Rpb24oLi4uYXJncylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBpbGUuYXBwbHkoaW5zdGFuY2UsIGFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1JldHVybiB0aGUgZGlyZWN0aXZlIHRvIGFuZ3VsYXJcclxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vS2VlcCBuZ0Fubm90YXRlIGluamVjdHNcclxuICAgIGZuLiRpbmplY3QgPSBkaXJlY3RpdmUuJGluamVjdDtcclxuXHJcbiAgICByZXR1cm4gZm47XHJcbn07IiwiZXhwb3J0IGNvbnN0IHN0YXRlID0gU3ltYm9sKFwiQFN0YXRlXCIpO1xyXG5leHBvcnQgY29uc3QgdmlldyA9IFN5bWJvbChcIkBWaWV3XCIpO1xyXG5leHBvcnQgY29uc3QgYWxpYXMgPSBTeW1ib2woXCJAQWxpYXNcIik7XHJcbmV4cG9ydCBjb25zdCBpbml0ID0gU3ltYm9sKFwiQEluaXRcIik7XHJcbmV4cG9ydCBjb25zdCBkZXN0cm95ID0gU3ltYm9sKFwiQERlc3Ryb3lcIik7XHJcbmV4cG9ydCBjb25zdCB3YXRjaCA9IFN5bWJvbChcIkBXYXRjaFwiKTtcclxuZXhwb3J0IGNvbnN0IG9uID0gU3ltYm9sKFwiQE9uXCIpO1xyXG5leHBvcnQgY29uc3Qgc2NoZWR1bGUgPSBTeW1ib2woXCJAU2NoZWR1bGVcIik7XHJcbmV4cG9ydCBjb25zdCBiaW5kID0gU3ltYm9sKFwiQEJpbmRcIik7XHJcbmV4cG9ydCBjb25zdCBzY29wZSA9IFN5bWJvbChcIlNjb3BlXCIpO1xyXG5leHBvcnQgY29uc3QgbG9jYWxzID0gU3ltYm9sKFwiTG9jYWxzXCIpO1xyXG4iXX0=