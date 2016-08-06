(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Abstract = exports.Schedule = exports.Debounce = exports.On = exports.WatchCollection = exports.Watch = exports.Destroy = exports.Init = exports.Inject = exports.State = exports.Self = exports.Alias = exports.View = exports.Run = exports.Config = exports.Filter = exports.Bind = exports.Component = exports.Directive = exports.Service = exports.Controller = exports.config = undefined;

var _Configuration = require("./util/Configuration");

var _Controller = require("./decorators/Controller");

var _Service = require("./decorators/Service");

var _Directive = require("./decorators/Directive");

var _Component = require("./decorators/Component");

var _Filter = require("./decorators/Filter");

var _Config = require("./decorators/Config");

var _Run = require("./decorators/Run");

var _View = require("./decorators/View");

var _Alias = require("./decorators/Alias");

var _Self = require("./decorators/Self");

var _State = require("./decorators/State");

var _Inject = require("./decorators/Inject");

var _MethodDecorators = require("./decorators/MethodDecorators");

exports.config = _Configuration.config;

//Export decorators
//Export config

exports.Controller = _Controller.Controller;
exports.Service = _Service.Service;
exports.Directive = _Directive.Directive;
exports.Component = _Component.Component;
exports.Bind = _Component.Bind;
exports.Filter = _Filter.Filter;
exports.Config = _Config.Config;
exports.Run = _Run.Run;
exports.View = _View.View;
exports.Alias = _Alias.Alias;
exports.Self = _Self.Self;
exports.State = _State.State;
exports.Inject = _Inject.Inject;
exports.Init = _MethodDecorators.Init;
exports.Destroy = _MethodDecorators.Destroy;
exports.Watch = _MethodDecorators.Watch;
exports.WatchCollection = _MethodDecorators.WatchCollection;
exports.On = _MethodDecorators.On;
exports.Debounce = _MethodDecorators.Debounce;
exports.Schedule = _MethodDecorators.Schedule;
exports.Abstract = _MethodDecorators.Abstract;

},{"./decorators/Alias":2,"./decorators/Component":3,"./decorators/Config":4,"./decorators/Controller":5,"./decorators/Directive":6,"./decorators/Filter":7,"./decorators/Inject":8,"./decorators/MethodDecorators":9,"./decorators/Run":10,"./decorators/Self":11,"./decorators/Service":12,"./decorators/State":13,"./decorators/View":14,"./util/Configuration":17}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Alias = Alias;
/**
 * Sets the alias for a controller, can only be used together with @State
 * and @Component
 * @decorator
 */
function Alias(alias) {
    return function (target, name) {
        (target[name] || target).$$alias = alias;
        return target;
    };
}

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Component = Component;
exports.Bind = Bind;

var _AngularModuleResolver = require("../util/AngularModuleResolver");

var _AngularUtils = require("../util/AngularUtils");

var App = (0, _AngularModuleResolver.lookupAngularModule)();

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
 * @param conf
 * @exports
 */
function Component() {
    var conf = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    if (conf.constructor == String) {
        conf = { selector: conf };
    }
    conf.controllerAs = conf.as || conf.controllerAs;
    conf.restrict = conf.restrict || "E";
    if (conf.bind == false) conf.bind = false;else conf.bind = conf.bind || {};

    conf.template = conf.view || conf.template;
    conf.selector = conf.name || conf.selector;

    return function (target) {
        conf.controller = target;
        App.directive(conf.selector, function () {

            //Merge @Bind properties
            if (conf.bind !== false) {
                conf.bind = Object.assign(conf.bind || {}, target.$$bind || {});
            }

            conf.controllerAs = target.$$alias || conf.controllerAs || "$ctrl";
            conf.bindToController = conf.bind;

            (0, _AngularUtils.decorateView)(target, conf);

            return conf;
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
        type.$$bind = type.$$bind || {};
        type.$$bind[name] = bindType + attributeName;

        return {
            writable: true,
            value: desc.value
        };
    };
}

},{"../util/AngularModuleResolver":15,"../util/AngularUtils":16}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Config = Config;

var _AngularModuleResolver = require("../util/AngularModuleResolver");

var _AngularUtils = require("../util/AngularUtils");

var App = (0, _AngularModuleResolver.lookupAngularModule)();

/**
 * Defines a method as config block
 * @decorator
 * @exports
 */
function Config(target, name) {
  target = (0, _AngularUtils.fetch)(target);
  if (target instanceof Function) App.config(target);else App.config(target[name]);
}

},{"../util/AngularModuleResolver":15,"../util/AngularUtils":16}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Controller = Controller;

var _AngularModuleResolver = require("../util/AngularModuleResolver");

var _AngularUtils = require("../util/AngularUtils");

var App = (0, _AngularModuleResolver.lookupAngularModule)();

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
        return App.controller(name, clazz);
    };

    if (clazz instanceof Function) {
        addController(clazz.name, clazz);
    } else return function (target) {
        addController(clazz, target);
    };
}

},{"../util/AngularModuleResolver":15,"../util/AngularUtils":16}],6:[function(require,module,exports){
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

var App = (0, _AngularModuleResolver.lookupAngularModule)();

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
        return App.directive(name, (0, _ES6Directive2.default)(fn));
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

},{"../util/AngularModuleResolver":15,"../util/AngularUtils":16,"../util/ES6Directive":18}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Filter = Filter;

var _AngularModuleResolver = require("../util/AngularModuleResolver");

var _AngularUtils = require("../util/AngularUtils");

var App = (0, _AngularModuleResolver.lookupAngularModule)();

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
        return App.filter(name, fn);
    };

    if (clazz.constructor != String) {
        //With method name as filter name
        registerFilter(method, clazz[method]);
    } else return function (target, method) {
        //With specified name
        registerFilter(clazz, target[method]);
    };
}

},{"../util/AngularModuleResolver":15,"../util/AngularUtils":16}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.Inject = Inject;

var _AngularModuleResolver = require("../util/AngularModuleResolver");

var _AngularUtils = require("../util/AngularUtils");

var App = (0, _AngularModuleResolver.lookupAngularModule)();

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

                var locals = this.$$locals || currentLocals;

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
App.config(function ($provide) {
    $provide.decorator("$controller", function ($delegate) {
        return function (expression, locals, later, ident) {

            //For usage in constructor
            currentLocals = locals;

            //Create the controller
            var controller = $delegate(expression, locals, later, ident);

            //Reset the locals
            currentLocals = undefined;

            //Check if its an object
            if (!later) {
                controller.$$locals = locals;
                controller.$$scope = locals.$scope;
                (0, _AngularUtils.callAnnotations)(controller, locals.$scope);
                return controller;
            } else {
                return function () {
                    currentLocals = locals;
                    var c = controller();
                    currentLocals = undefined;
                    c.$$locals = locals;
                    c.$$scope = locals.$scope;
                    (0, _AngularUtils.callAnnotations)(c, locals.$scope);
                    return c;
                };
            }
        };
    });
});

},{"../util/AngularModuleResolver":15,"../util/AngularUtils":16}],9:[function(require,module,exports){
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
    target.$$init = target.$$init || new Set();
    target.$$init.add(name);
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
    target.$$destroy = target.$$destroy || new Set();
    target.$$destroy.add(name);
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
    var deep = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];


    return function (target, name) {
        target.$$watch = target.$$watch || new Set();
        target.$$watch.add({ property: property, name: name, deep: deep, collection: false });
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
        target.$$watch = target.$$watch || new Set();
        target.$$watch.add({ property: property, name: name, false: false, collection: true });
    };
}

/**
 * Schedules the method so it will get executed every n milliseconds
 * @param interval in milliseconds
 * @decorator
 */
function Schedule(interval) {
    return function (target, name, desc) {
        target.$$schedule = target.$$schedule || new Set();
        target.$$schedule.add({ interval: interval, name: name });
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
        target.$$on = target.$$on || new Set();
        target.$$on.add({ event: event, name: name });
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
    var angularTimeout = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

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

},{"../util/AngularModuleResolver":15}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Run = Run;

var _AngularModuleResolver = require("../util/AngularModuleResolver");

var _AngularUtils = require("../util/AngularUtils");

var App = (0, _AngularModuleResolver.lookupAngularModule)();

/**
 * Defines a method as run block
 * @decorator
 * @exports
 */
function Run(target, name) {
  target = (0, _AngularUtils.fetch)(target);
  if (target instanceof Function) App.run(target);else App.run(target[name]);
}

},{"../util/AngularModuleResolver":15,"../util/AngularUtils":16}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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

var App = (0, _AngularModuleResolver.lookupAngularModule)();

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
        return App.service(name, clazz);
    };

    if (clazz instanceof Function) {
        addService(clazz.name, clazz);
    } else return function (target) {
        addService(clazz, target);
    };
}

},{"../util/AngularModuleResolver":15,"../util/AngularUtils":16}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.State = State;

var _Controller = require("./Controller");

var _AngularModuleResolver = require("../util/AngularModuleResolver");

var _AngularUtils = require("../util/AngularUtils");

var App = (0, _AngularModuleResolver.lookupAngularModule)();

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
        target.$$state = conf;
        (0, _Controller.Controller)(target);
        return target;
    };
}

/**
 * Tries to configure the state from the $$state var on
 * the all controllers
 * @param clazz
 */
App.config(function ($urlRouterProvider, $injector) {
    "ngInject";

    var registeredControllers = [];
    var states = [];

    //Find every state controller
    App._invokeQueue.forEach(function (item) {
        var constructor = item[2][1];
        if (registeredControllers.find(function (t) {
            return t.type == constructor;
        })) return;
        if (constructor.$$state) {
            constructor.$$state.clazz = constructor;
            states.push(constructor.$$state);
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

    //Configure all states
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        var _loop = function _loop() {
            var conf = _step.value;

            var clazz = conf.clazz;

            /*
             * Default state
             */
            if (conf.default) {
                $urlRouterProvider.otherwise(function ($injector) {
                    $injector.invoke(['$state', function ($state) {
                        $state.go(conf.name, {}, { location: "replace" });
                    }]);
                });
            }

            /*
             * Set Controller
             */
            conf.controller = clazz;
            conf.controllerAs = conf.as || conf.controllerAs || clazz.$$alias;

            /**
             * Set view
             */
            (0, _AngularUtils.decorateView)(clazz, conf);

            /*
             * Set the state
             */
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
});

},{"../util/AngularModuleResolver":15,"../util/AngularUtils":16,"./Controller":5}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.View = View;
/**
 * Sets the view of an @Component or a @State can either be
 * a template or a templateUrl, the view is recognized as template
 * if it contains at least 1 tag!
 * @param view
 * @Decorator
 */
function View(view) {
    return function (target) {
        target.$$view = view;
        return target;
    };
}

},{}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lookupAngularModule = lookupAngularModule;
exports.useAngularModule = useAngularModule;
exports.angularInjector = angularInjector;
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

/**
 * Attempts to lookup the root angular module of the app by resolving the first
 * ng-app on the DOM
 * As an alternative you can set your module with useAngularModule(), which will
 * then be returned by this function
 */
function lookupAngularModule() {
    //Returns the preset module if available
    if (angularModule) {
        return angularModule;
    }

    var ngAppHolder = angular.element("[ng-app]");

    if (!ngAppHolder.length) {
        throw new Error("No element with [ng-app] found and no module set with 'useAngularModule()'");
    }

    var moduleName = ngAppHolder[0].getAttribute('ng-app');
    angularModule = angular.module(moduleName);
    angularModule.run(["$injector", function (i) {
        return $injector = i;
    }]);

    return angularModule;
}

/**
 * Sets the angular module which is used by Angular2to1
 * @param module
 */
function useAngularModule(module) {
    angularModule = module;
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

//Attempt to export the module directly
try {
    lookupAngularModule();
} catch (e) {}

/**
 * Export the module, warning, MAY BE UNDEFINED if the module gets
 * initiated later, to make sure you get the module use lookupAngularModule
 */
exports.default = angularModule;

},{}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetch = fetch;
exports.decorateView = decorateView;
exports.callAnnotations = callAnnotations;

var _AngularModuleResolver = require("./AngularModuleResolver");

var _Configuration = require("./Configuration");

var App = (0, _AngularModuleResolver.lookupAngularModule)();

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

/**
 * Decorates the view to the configuration
 * @param clazz
 * @param conf
 */
function decorateView(clazz, conf) {
    var view = clazz.$$view;
    if (!view) return;
    var urlRegex = /[^<>]+\.[A-Za-z]{2,5}$/;
    if (urlRegex.test(view)) {
        //url
        conf.templateUrl = view;
    } else {
        conf.template = view;
    }
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
App.run(function () {
    if (_Configuration.config.ALLOW_DECORATORS_IN_SERVICES) {
        exposeModule(App);
    }
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
        for (var _iterator = (controller.$$init || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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

        for (var _iterator2 = (controller.$$watch || [])[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
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

        for (var _iterator3 = (controller.$$on || [])[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
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

        for (var _iterator4 = (controller.$$schedule || [])[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
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
            for (var _iterator5 = (controller.$$destroy || [])[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
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

},{"./AngularModuleResolver":15,"./Configuration":17}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// The purpose of this file is to provide an easy configuration API
// accesible from the outside

/**
 * The module configuration, as an anonymous object
 */
var Angular2to1Config = {

    //PromiseHook configuration
    DEBOUNCE_DIGEST: false,
    DEBOUNCE_DIGEST_MILLIS: 25,
    ASYNC_AWAIT_ENABLED: true,

    //Further configuration
    ALLOW_DECORATORS_IN_SERVICES: true
};

exports.config = Angular2to1Config;

},{}],18:[function(require,module,exports){
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

                    compile.apply(instance, args);
                };
            })();
        }

        //Return the directive to angular
        return instance;
    };

    //Kepp ngAnnotate injects
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
   * @returns {fn}
   */

},{}]},{},[1]);

//# sourceMappingURL=angular-es7-integration.js.map
