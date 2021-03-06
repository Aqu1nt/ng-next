(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Abstract = exports.Schedule = exports.Debounce = exports.On = exports.WatchCollection = exports.Watch = exports.Destroy = exports.Init = exports.Inject = exports.State = exports.Self = exports.Alias = exports.View = exports.Run = exports.Config = exports.Filter = exports.Bind = exports.Component = exports.Directive = exports.Service = exports.Controller = exports.config = exports.NgZone = undefined;

var _ZoneJSIntegration = require("./integration/ZoneJSIntegration");

Object.defineProperty(exports, "NgZone", {
  enumerable: true,
  get: function get() {
    return _ZoneJSIntegration.NgZone;
  }
});

var _Configuration = require("./util/Configuration");

Object.defineProperty(exports, "config", {
  enumerable: true,
  get: function get() {
    return _Configuration.config;
  }
});

var _Controller = require("./decorators/Controller");

Object.defineProperty(exports, "Controller", {
  enumerable: true,
  get: function get() {
    return _Controller.Controller;
  }
});

var _Service = require("./decorators/Service");

Object.defineProperty(exports, "Service", {
  enumerable: true,
  get: function get() {
    return _Service.Service;
  }
});

var _Directive = require("./decorators/Directive");

Object.defineProperty(exports, "Directive", {
  enumerable: true,
  get: function get() {
    return _Directive.Directive;
  }
});

var _Component = require("./decorators/Component");

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

var _Filter = require("./decorators/Filter");

Object.defineProperty(exports, "Filter", {
  enumerable: true,
  get: function get() {
    return _Filter.Filter;
  }
});

var _Config = require("./decorators/Config");

Object.defineProperty(exports, "Config", {
  enumerable: true,
  get: function get() {
    return _Config.Config;
  }
});

var _Run = require("./decorators/Run");

Object.defineProperty(exports, "Run", {
  enumerable: true,
  get: function get() {
    return _Run.Run;
  }
});

var _View = require("./decorators/View");

Object.defineProperty(exports, "View", {
  enumerable: true,
  get: function get() {
    return _View.View;
  }
});

var _Alias = require("./decorators/Alias");

Object.defineProperty(exports, "Alias", {
  enumerable: true,
  get: function get() {
    return _Alias.Alias;
  }
});

var _Self = require("./decorators/Self");

Object.defineProperty(exports, "Self", {
  enumerable: true,
  get: function get() {
    return _Self.Self;
  }
});

var _State = require("./decorators/State");

Object.defineProperty(exports, "State", {
  enumerable: true,
  get: function get() {
    return _State.State;
  }
});

var _Inject = require("./decorators/Inject");

Object.defineProperty(exports, "Inject", {
  enumerable: true,
  get: function get() {
    return _Inject.Inject;
  }
});

var _MethodDecorators = require("./decorators/MethodDecorators");

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

require("babel-polyfill");

require("./util/AngularModuleResolver");

require("./integration/WatchIterableFix");

},{"./decorators/Alias":2,"./decorators/Component":3,"./decorators/Config":4,"./decorators/Controller":5,"./decorators/Directive":6,"./decorators/Filter":7,"./decorators/Inject":8,"./decorators/MethodDecorators":9,"./decorators/Run":10,"./decorators/Self":11,"./decorators/Service":12,"./decorators/State":13,"./decorators/View":14,"./integration/WatchIterableFix":15,"./integration/ZoneJSIntegration":16,"./util/AngularModuleResolver":17,"./util/Configuration":19,"babel-polyfill":"5+APlZ"}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Alias = Alias;

var _Symbols = require("../util/Symbols");

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

},{"../util/Symbols":21}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Component = Component;
exports.Bind = Bind;

var _AngularModuleResolver = require("../util/AngularModuleResolver");

var _View = require("./View");

var _Symbols = require("../util/Symbols");

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

},{"../util/AngularModuleResolver":17,"../util/Symbols":21,"./View":14}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Config = Config;

var _AngularModuleResolver = require("../util/AngularModuleResolver");

var _AngularUtils = require("../util/AngularUtils");

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

},{"../util/AngularModuleResolver":17,"../util/AngularUtils":18}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Controller = Controller;

var _AngularModuleResolver = require("../util/AngularModuleResolver");

var _AngularUtils = require("../util/AngularUtils");

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

},{"../util/AngularModuleResolver":17,"../util/AngularUtils":18}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Directive = Directive;

var _AngularModuleResolver = require("../util/AngularModuleResolver");

var _AngularUtils = require("../util/AngularUtils");

var _ES6Directive = require("../util/ES6Directive");

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

},{"../util/AngularModuleResolver":17,"../util/AngularUtils":18,"../util/ES6Directive":20}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Filter = Filter;

var _AngularModuleResolver = require("../util/AngularModuleResolver");

var _AngularUtils = require("../util/AngularUtils");

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

},{"../util/AngularModuleResolver":17,"../util/AngularUtils":18}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.Inject = Inject;

var _AngularModuleResolver = require("../util/AngularModuleResolver");

var _Symbols = require("../util/Symbols");

var symbols = _interopRequireWildcard(_Symbols);

var _AngularUtils = require("../util/AngularUtils");

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

},{"../util/AngularModuleResolver":17,"../util/AngularUtils":18,"../util/Symbols":21}],9:[function(require,module,exports){
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

var _AngularModuleResolver = require("../util/AngularModuleResolver");

var _Symbols = require("../util/Symbols");

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

},{"../util/AngularModuleResolver":17,"../util/Symbols":21}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Run = Run;

var _AngularModuleResolver = require("../util/AngularModuleResolver");

var _AngularUtils = require("../util/AngularUtils");

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

},{"../util/AngularModuleResolver":17,"../util/AngularUtils":18}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Service = Service;

var _AngularModuleResolver = require("../util/AngularModuleResolver");

var _AngularUtils = require("../util/AngularUtils");

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

},{"../util/AngularModuleResolver":17,"../util/AngularUtils":18}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.State = State;

var _Controller = require("./Controller");

var _AngularModuleResolver = require("../util/AngularModuleResolver");

var _View = require("./View");

var _Configuration = require("../util/Configuration");

var _Symbols = require("../util/Symbols");

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

},{"../util/AngularModuleResolver":17,"../util/Configuration":19,"../util/Symbols":21,"./Controller":5,"./View":14}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.View = View;
exports.decorateView = decorateView;

var _Symbols = require("../util/Symbols");

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

},{"../util/Symbols":21}],15:[function(require,module,exports){
"use strict";

var _AngularModuleResolver = require("../util/AngularModuleResolver");

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
            return resolved;
        };

        return this[$watchCollection](monkeyPatchedObserver, action); //Must be this way because of maximum call stack size exceeded error
    };
}

},{"../util/AngularModuleResolver":17}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ngZoneModule = exports.NgZone = undefined;

require("zone.js");

var _Configuration = require("../util/Configuration");

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

},{"../util/Configuration":19,"zone.js":"OiynOD"}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.module = undefined;
exports.lookupAngularModule = lookupAngularModule;
exports.useAngularModule = useAngularModule;
exports.angularInjector = angularInjector;

var _Configuration = require("./Configuration");

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

},{"./Configuration":19}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetch = fetch;
exports.callAnnotations = callAnnotations;

var _AngularModuleResolver = require("./AngularModuleResolver");

var _Configuration = require("./Configuration");

var _Symbols = require("../util/Symbols");

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

},{"../util/Symbols":21,"./AngularModuleResolver":17,"./Configuration":19}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
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

},{}]},{},[1])