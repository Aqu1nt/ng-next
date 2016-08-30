(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.NgNext = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

(function () {
    try {
        cachedSetTimeout = setTimeout;
    } catch (e) {
        cachedSetTimeout = function () {
            throw new Error('setTimeout is not defined');
        }
    }
    try {
        cachedClearTimeout = clearTimeout;
    } catch (e) {
        cachedClearTimeout = function () {
            throw new Error('clearTimeout is not defined');
        }
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        return setTimeout(fun, 0);
    } else {
        return cachedSetTimeout.call(null, fun, 0);
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        clearTimeout(marker);
    } else {
        cachedClearTimeout.call(null, marker);
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],2:[function(_dereq_,module,exports){
(function (process){
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	__webpack_require__(1);
	var event_target_1 = __webpack_require__(2);
	var define_property_1 = __webpack_require__(4);
	var register_element_1 = __webpack_require__(5);
	var property_descriptor_1 = __webpack_require__(6);
	var timers_1 = __webpack_require__(8);
	var utils_1 = __webpack_require__(3);
	var set = 'set';
	var clear = 'clear';
	var blockingMethods = ['alert', 'prompt', 'confirm'];
	var _global = typeof window == 'undefined' ? global : window;
	timers_1.patchTimer(_global, set, clear, 'Timeout');
	timers_1.patchTimer(_global, set, clear, 'Interval');
	timers_1.patchTimer(_global, set, clear, 'Immediate');
	timers_1.patchTimer(_global, 'request', 'cancel', 'AnimationFrame');
	timers_1.patchTimer(_global, 'mozRequest', 'mozCancel', 'AnimationFrame');
	timers_1.patchTimer(_global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
	for (var i = 0; i < blockingMethods.length; i++) {
	    var name = blockingMethods[i];
	    utils_1.patchMethod(_global, name, function (delegate, symbol, name) {
	        return function (s, args) {
	            return Zone.current.run(delegate, _global, args, name);
	        };
	    });
	}
	event_target_1.eventTargetPatch(_global);
	property_descriptor_1.propertyDescriptorPatch(_global);
	utils_1.patchClass('MutationObserver');
	utils_1.patchClass('WebKitMutationObserver');
	utils_1.patchClass('FileReader');
	define_property_1.propertyPatch();
	register_element_1.registerElementPatch(_global);
	// Treat XMLHTTPRequest as a macrotask.
	patchXHR(_global);
	var XHR_TASK = utils_1.zoneSymbol('xhrTask');
	function patchXHR(window) {
	    function findPendingTask(target) {
	        var pendingTask = target[XHR_TASK];
	        return pendingTask;
	    }
	    function scheduleTask(task) {
	        var data = task.data;
	        data.target.addEventListener('readystatechange', function () {
	            if (data.target.readyState === XMLHttpRequest.DONE) {
	                if (!data.aborted) {
	                    task.invoke();
	                }
	            }
	        });
	        var storedTask = data.target[XHR_TASK];
	        if (!storedTask) {
	            data.target[XHR_TASK] = task;
	        }
	        setNative.apply(data.target, data.args);
	        return task;
	    }
	    function placeholderCallback() {
	    }
	    function clearTask(task) {
	        var data = task.data;
	        // Note - ideally, we would call data.target.removeEventListener here, but it's too late
	        // to prevent it from firing. So instead, we store info for the event listener.
	        data.aborted = true;
	        return clearNative.apply(data.target, data.args);
	    }
	    var setNative = utils_1.patchMethod(window.XMLHttpRequest.prototype, 'send', function () { return function (self, args) {
	        var zone = Zone.current;
	        var options = {
	            target: self,
	            isPeriodic: false,
	            delay: null,
	            args: args,
	            aborted: false
	        };
	        return zone.scheduleMacroTask('XMLHttpRequest.send', placeholderCallback, options, scheduleTask, clearTask);
	    }; });
	    var clearNative = utils_1.patchMethod(window.XMLHttpRequest.prototype, 'abort', function (delegate) { return function (self, args) {
	        var task = findPendingTask(self);
	        if (task && typeof task.type == 'string') {
	            // If the XHR has already completed, do nothing.
	            if (task.cancelFn == null) {
	                return;
	            }
	            task.zone.cancelTask(task);
	        }
	        // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no task to cancel. Do nothing.
	    }; });
	}
	/// GEO_LOCATION
	if (_global['navigator'] && _global['navigator'].geolocation) {
	    utils_1.patchPrototype(_global['navigator'].geolocation, [
	        'getCurrentPosition',
	        'watchPosition'
	    ]);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {;
	;
	var Zone = (function (global) {
	    if (global.Zone) {
	        throw new Error('Zone already loaded.');
	    }
	    var Zone = (function () {
	        function Zone(parent, zoneSpec) {
	            this._properties = null;
	            this._parent = parent;
	            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
	            this._properties = zoneSpec && zoneSpec.properties || {};
	            this._zoneDelegate = new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
	        }
	        Object.defineProperty(Zone, "current", {
	            get: function () { return _currentZone; },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        Object.defineProperty(Zone, "currentTask", {
	            get: function () { return _currentTask; },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        Object.defineProperty(Zone.prototype, "parent", {
	            get: function () { return this._parent; },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        Object.defineProperty(Zone.prototype, "name", {
	            get: function () { return this._name; },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        Zone.prototype.get = function (key) {
	            var zone = this.getZoneWith(key);
	            if (zone)
	                return zone._properties[key];
	        };
	        Zone.prototype.getZoneWith = function (key) {
	            var current = this;
	            while (current) {
	                if (current._properties.hasOwnProperty(key)) {
	                    return current;
	                }
	                current = current._parent;
	            }
	            return null;
	        };
	        Zone.prototype.fork = function (zoneSpec) {
	            if (!zoneSpec)
	                throw new Error('ZoneSpec required!');
	            return this._zoneDelegate.fork(this, zoneSpec);
	        };
	        Zone.prototype.wrap = function (callback, source) {
	            if (typeof callback !== 'function') {
	                throw new Error('Expecting function got: ' + callback);
	            }
	            var _callback = this._zoneDelegate.intercept(this, callback, source);
	            var zone = this;
	            return function () {
	                return zone.runGuarded(_callback, this, arguments, source);
	            };
	        };
	        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
	            if (applyThis === void 0) { applyThis = null; }
	            if (applyArgs === void 0) { applyArgs = null; }
	            if (source === void 0) { source = null; }
	            var oldZone = _currentZone;
	            _currentZone = this;
	            try {
	                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
	            }
	            finally {
	                _currentZone = oldZone;
	            }
	        };
	        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
	            if (applyThis === void 0) { applyThis = null; }
	            if (applyArgs === void 0) { applyArgs = null; }
	            if (source === void 0) { source = null; }
	            var oldZone = _currentZone;
	            _currentZone = this;
	            try {
	                try {
	                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
	                }
	                catch (error) {
	                    if (this._zoneDelegate.handleError(this, error)) {
	                        throw error;
	                    }
	                }
	            }
	            finally {
	                _currentZone = oldZone;
	            }
	        };
	        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
	            task.runCount++;
	            if (task.zone != this)
	                throw new Error('A task can only be run in the zone which created it! (Creation: ' +
	                    task.zone.name + '; Execution: ' + this.name + ')');
	            var previousTask = _currentTask;
	            _currentTask = task;
	            var oldZone = _currentZone;
	            _currentZone = this;
	            try {
	                if (task.type == 'macroTask' && task.data && !task.data.isPeriodic) {
	                    task.cancelFn = null;
	                }
	                try {
	                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
	                }
	                catch (error) {
	                    if (this._zoneDelegate.handleError(this, error)) {
	                        throw error;
	                    }
	                }
	            }
	            finally {
	                _currentZone = oldZone;
	                _currentTask = previousTask;
	            }
	        };
	        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
	            return this._zoneDelegate.scheduleTask(this, new ZoneTask('microTask', this, source, callback, data, customSchedule, null));
	        };
	        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
	            return this._zoneDelegate.scheduleTask(this, new ZoneTask('macroTask', this, source, callback, data, customSchedule, customCancel));
	        };
	        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
	            return this._zoneDelegate.scheduleTask(this, new ZoneTask('eventTask', this, source, callback, data, customSchedule, customCancel));
	        };
	        Zone.prototype.cancelTask = function (task) {
	            var value = this._zoneDelegate.cancelTask(this, task);
	            task.runCount = -1;
	            task.cancelFn = null;
	            return value;
	        };
	        Zone.__symbol__ = __symbol__;
	        return Zone;
	    }());
	    ;
	    var ZoneDelegate = (function () {
	        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
	            this._taskCounts = { microTask: 0, macroTask: 0, eventTask: 0 };
	            this.zone = zone;
	            this._parentDelegate = parentDelegate;
	            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
	            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
	            this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
	            this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
	            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
	            this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
	            this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
	            this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
	            this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
	            this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
	            this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
	            this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
	            this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
	            this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
	            this._hasTaskZS = zoneSpec && (zoneSpec.onHasTask ? zoneSpec : parentDelegate._hasTaskZS);
	            this._hasTaskDlgt = zoneSpec && (zoneSpec.onHasTask ? parentDelegate : parentDelegate._hasTaskDlgt);
	        }
	        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
	            return this._forkZS
	                ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec)
	                : new Zone(targetZone, zoneSpec);
	        };
	        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
	            return this._interceptZS
	                ? this._interceptZS.onIntercept(this._interceptDlgt, this.zone, targetZone, callback, source)
	                : callback;
	        };
	        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
	            return this._invokeZS
	                ? this._invokeZS.onInvoke(this._invokeDlgt, this.zone, targetZone, callback, applyThis, applyArgs, source)
	                : callback.apply(applyThis, applyArgs);
	        };
	        ZoneDelegate.prototype.handleError = function (targetZone, error) {
	            return this._handleErrorZS
	                ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this.zone, targetZone, error)
	                : true;
	        };
	        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
	            try {
	                if (this._scheduleTaskZS) {
	                    return this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this.zone, targetZone, task);
	                }
	                else if (task.scheduleFn) {
	                    task.scheduleFn(task);
	                }
	                else if (task.type == 'microTask') {
	                    scheduleMicroTask(task);
	                }
	                else {
	                    throw new Error('Task is missing scheduleFn.');
	                }
	                return task;
	            }
	            finally {
	                if (targetZone == this.zone) {
	                    this._updateTaskCount(task.type, 1);
	                }
	            }
	        };
	        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
	            try {
	                return this._invokeTaskZS
	                    ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this.zone, targetZone, task, applyThis, applyArgs)
	                    : task.callback.apply(applyThis, applyArgs);
	            }
	            finally {
	                if (targetZone == this.zone && (task.type != 'eventTask') && !(task.data && task.data.isPeriodic)) {
	                    this._updateTaskCount(task.type, -1);
	                }
	            }
	        };
	        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
	            var value;
	            if (this._cancelTaskZS) {
	                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this.zone, targetZone, task);
	            }
	            else if (!task.cancelFn) {
	                throw new Error('Task does not support cancellation, or is already canceled.');
	            }
	            else {
	                value = task.cancelFn(task);
	            }
	            if (targetZone == this.zone) {
	                // this should not be in the finally block, because exceptions assume not canceled.
	                this._updateTaskCount(task.type, -1);
	            }
	            return value;
	        };
	        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
	            return this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this.zone, targetZone, isEmpty);
	        };
	        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
	            var counts = this._taskCounts;
	            var prev = counts[type];
	            var next = counts[type] = prev + count;
	            if (next < 0) {
	                throw new Error('More tasks executed then were scheduled.');
	            }
	            if (prev == 0 || next == 0) {
	                var isEmpty = {
	                    microTask: counts.microTask > 0,
	                    macroTask: counts.macroTask > 0,
	                    eventTask: counts.eventTask > 0,
	                    change: type
	                };
	                try {
	                    this.hasTask(this.zone, isEmpty);
	                }
	                finally {
	                    if (this._parentDelegate) {
	                        this._parentDelegate._updateTaskCount(type, count);
	                    }
	                }
	            }
	        };
	        return ZoneDelegate;
	    }());
	    var ZoneTask = (function () {
	        function ZoneTask(type, zone, source, callback, options, scheduleFn, cancelFn) {
	            this.runCount = 0;
	            this.type = type;
	            this.zone = zone;
	            this.source = source;
	            this.data = options;
	            this.scheduleFn = scheduleFn;
	            this.cancelFn = cancelFn;
	            this.callback = callback;
	            var self = this;
	            this.invoke = function () {
	                _numberOfNestedTaskFrames++;
	                try {
	                    return zone.runTask(self, this, arguments);
	                }
	                finally {
	                    if (_numberOfNestedTaskFrames == 1) {
	                        drainMicroTaskQueue();
	                    }
	                    _numberOfNestedTaskFrames--;
	                }
	            };
	        }
	        ZoneTask.prototype.toString = function () {
	            if (this.data && typeof this.data.handleId !== 'undefined') {
	                return this.data.handleId;
	            }
	            else {
	                return this.toString();
	            }
	        };
	        return ZoneTask;
	    }());
	    function __symbol__(name) { return '__zone_symbol__' + name; }
	    ;
	    var symbolSetTimeout = __symbol__('setTimeout');
	    var symbolPromise = __symbol__('Promise');
	    var symbolThen = __symbol__('then');
	    var _currentZone = new Zone(null, null);
	    var _currentTask = null;
	    var _microTaskQueue = [];
	    var _isDrainingMicrotaskQueue = false;
	    var _uncaughtPromiseErrors = [];
	    var _numberOfNestedTaskFrames = 0;
	    function scheduleQueueDrain() {
	        // if we are not running in any task, and there has not been anything scheduled
	        // we must bootstrap the initial task creation by manually scheduling the drain
	        if (_numberOfNestedTaskFrames == 0 && _microTaskQueue.length == 0) {
	            // We are not running in Task, so we need to kickstart the microtask queue.
	            if (global[symbolPromise]) {
	                global[symbolPromise].resolve(0)[symbolThen](drainMicroTaskQueue);
	            }
	            else {
	                global[symbolSetTimeout](drainMicroTaskQueue, 0);
	            }
	        }
	    }
	    function scheduleMicroTask(task) {
	        scheduleQueueDrain();
	        _microTaskQueue.push(task);
	    }
	    function consoleError(e) {
	        var rejection = e && e.rejection;
	        if (rejection) {
	            console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
	        }
	        console.error(e);
	    }
	    function drainMicroTaskQueue() {
	        if (!_isDrainingMicrotaskQueue) {
	            _isDrainingMicrotaskQueue = true;
	            while (_microTaskQueue.length) {
	                var queue = _microTaskQueue;
	                _microTaskQueue = [];
	                for (var i = 0; i < queue.length; i++) {
	                    var task = queue[i];
	                    try {
	                        task.zone.runTask(task, null, null);
	                    }
	                    catch (e) {
	                        consoleError(e);
	                    }
	                }
	            }
	            while (_uncaughtPromiseErrors.length) {
	                var _loop_1 = function() {
	                    var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
	                    try {
	                        uncaughtPromiseError.zone.runGuarded(function () { throw uncaughtPromiseError; });
	                    }
	                    catch (e) {
	                        consoleError(e);
	                    }
	                };
	                while (_uncaughtPromiseErrors.length) {
	                    _loop_1();
	                }
	            }
	            _isDrainingMicrotaskQueue = false;
	        }
	    }
	    function isThenable(value) {
	        return value && value.then;
	    }
	    function forwardResolution(value) { return value; }
	    function forwardRejection(rejection) { return ZoneAwarePromise.reject(rejection); }
	    var symbolState = __symbol__('state');
	    var symbolValue = __symbol__('value');
	    var source = 'Promise.then';
	    var UNRESOLVED = null;
	    var RESOLVED = true;
	    var REJECTED = false;
	    var REJECTED_NO_CATCH = 0;
	    function makeResolver(promise, state) {
	        return function (v) {
	            resolvePromise(promise, state, v);
	            // Do not return value or you will break the Promise spec.
	        };
	    }
	    function resolvePromise(promise, state, value) {
	        if (promise[symbolState] === UNRESOLVED) {
	            if (value instanceof ZoneAwarePromise && value[symbolState] !== UNRESOLVED) {
	                clearRejectedNoCatch(value);
	                resolvePromise(promise, value[symbolState], value[symbolValue]);
	            }
	            else if (isThenable(value)) {
	                value.then(makeResolver(promise, state), makeResolver(promise, false));
	            }
	            else {
	                promise[symbolState] = state;
	                var queue = promise[symbolValue];
	                promise[symbolValue] = value;
	                for (var i = 0; i < queue.length;) {
	                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
	                }
	                if (queue.length == 0 && state == REJECTED) {
	                    promise[symbolState] = REJECTED_NO_CATCH;
	                    try {
	                        throw new Error("Uncaught (in promise): " + value);
	                    }
	                    catch (e) {
	                        var error = e;
	                        error.rejection = value;
	                        error.promise = promise;
	                        error.zone = Zone.current;
	                        error.task = Zone.currentTask;
	                        _uncaughtPromiseErrors.push(error);
	                        scheduleQueueDrain();
	                    }
	                }
	            }
	        }
	        // Resolving an already resolved promise is a noop.
	        return promise;
	    }
	    function clearRejectedNoCatch(promise) {
	        if (promise[symbolState] === REJECTED_NO_CATCH) {
	            promise[symbolState] = REJECTED;
	            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
	                if (promise === _uncaughtPromiseErrors[i].promise) {
	                    _uncaughtPromiseErrors.splice(i, 1);
	                    break;
	                }
	            }
	        }
	    }
	    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
	        clearRejectedNoCatch(promise);
	        var delegate = promise[symbolState] ? onFulfilled || forwardResolution : onRejected || forwardRejection;
	        zone.scheduleMicroTask(source, function () {
	            try {
	                resolvePromise(chainPromise, true, zone.run(delegate, null, [promise[symbolValue]]));
	            }
	            catch (error) {
	                resolvePromise(chainPromise, false, error);
	            }
	        });
	    }
	    var ZoneAwarePromise = (function () {
	        function ZoneAwarePromise(executor) {
	            var promise = this;
	            if (!(promise instanceof ZoneAwarePromise)) {
	                throw new Error('Must be an instanceof Promise.');
	            }
	            promise[symbolState] = UNRESOLVED;
	            promise[symbolValue] = []; // queue;
	            try {
	                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
	            }
	            catch (e) {
	                resolvePromise(promise, false, e);
	            }
	        }
	        ZoneAwarePromise.resolve = function (value) {
	            return resolvePromise(new this(null), RESOLVED, value);
	        };
	        ZoneAwarePromise.reject = function (error) {
	            return resolvePromise(new this(null), REJECTED, error);
	        };
	        ZoneAwarePromise.race = function (values) {
	            var resolve;
	            var reject;
	            var promise = new this(function (res, rej) { resolve = res; reject = rej; });
	            function onResolve(value) { promise && (promise = null || resolve(value)); }
	            function onReject(error) { promise && (promise = null || reject(error)); }
	            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
	                var value = values_1[_i];
	                if (!isThenable(value)) {
	                    value = this.resolve(value);
	                }
	                value.then(onResolve, onReject);
	            }
	            return promise;
	        };
	        ZoneAwarePromise.all = function (values) {
	            var resolve;
	            var reject;
	            var promise = new this(function (res, rej) { resolve = res; reject = rej; });
	            var count = 0;
	            var resolvedValues = [];
	            function onReject(error) { promise && reject(error); promise = null; }
	            for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
	                var value = values_2[_i];
	                if (!isThenable(value)) {
	                    value = this.resolve(value);
	                }
	                value.then((function (index) { return function (value) {
	                    resolvedValues[index] = value;
	                    count--;
	                    if (promise && !count) {
	                        resolve(resolvedValues);
	                    }
	                    promise == null;
	                }; })(count), onReject);
	                count++;
	            }
	            if (!count)
	                resolve(resolvedValues);
	            return promise;
	        };
	        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
	            var chainPromise = new this.constructor(null);
	            var zone = Zone.current;
	            if (this[symbolState] == UNRESOLVED) {
	                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
	            }
	            else {
	                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
	            }
	            return chainPromise;
	        };
	        ZoneAwarePromise.prototype.catch = function (onRejected) {
	            return this.then(null, onRejected);
	        };
	        return ZoneAwarePromise;
	    }());
	    var NativePromise = global[__symbol__('Promise')] = global.Promise;
	    global.Promise = ZoneAwarePromise;
	    if (NativePromise) {
	        var NativePromiseProtototype = NativePromise.prototype;
	        var NativePromiseThen_1 = NativePromiseProtototype[__symbol__('then')]
	            = NativePromiseProtototype.then;
	        NativePromiseProtototype.then = function (onResolve, onReject) {
	            var nativePromise = this;
	            return new ZoneAwarePromise(function (resolve, reject) {
	                NativePromiseThen_1.call(nativePromise, resolve, reject);
	            }).then(onResolve, onReject);
	        };
	    }
	    // This is not part of public API, but it is usefull for tests, so we expose it.
	    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
	    return global.Zone = Zone;
	})(typeof window === 'undefined' ? global : window);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var utils_1 = __webpack_require__(3);
	var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
	var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex'.split(',');
	var EVENT_TARGET = 'EventTarget';
	function eventTargetPatch(_global) {
	    var apis = [];
	    var isWtf = _global['wtf'];
	    if (isWtf) {
	        // Workaround for: https://github.com/google/tracing-framework/issues/555
	        apis = WTF_ISSUE_555.split(',').map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
	    }
	    else if (_global[EVENT_TARGET]) {
	        apis.push(EVENT_TARGET);
	    }
	    else {
	        // Note: EventTarget is not available in all browsers,
	        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
	        apis = NO_EVENT_TARGET;
	    }
	    for (var i = 0; i < apis.length; i++) {
	        var type = _global[apis[i]];
	        utils_1.patchEventTargetMethods(type && type.prototype);
	    }
	}
	exports.eventTargetPatch = eventTargetPatch;


/***/ },
/* 3 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Suppress closure compiler errors about unknown 'process' variable
	 * @fileoverview
	 * @suppress {undefinedVars}
	 */
	"use strict";
	exports.zoneSymbol = Zone['__symbol__'];
	var _global = typeof window == 'undefined' ? global : window;
	function bindArguments(args, source) {
	    for (var i = args.length - 1; i >= 0; i--) {
	        if (typeof args[i] === 'function') {
	            args[i] = Zone.current.wrap(args[i], source + '_' + i);
	        }
	    }
	    return args;
	}
	exports.bindArguments = bindArguments;
	;
	function patchPrototype(prototype, fnNames) {
	    var source = prototype.constructor['name'];
	    var _loop_1 = function(i) {
	        var name_1 = fnNames[i];
	        var delegate = prototype[name_1];
	        if (delegate) {
	            prototype[name_1] = (function (delegate) {
	                return function () {
	                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
	                };
	            })(delegate);
	        }
	    };
	    for (var i = 0; i < fnNames.length; i++) {
	        _loop_1(i);
	    }
	}
	exports.patchPrototype = patchPrototype;
	;
	exports.isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
	exports.isNode = (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]');
	exports.isBrowser = !exports.isNode && !exports.isWebWorker && !!(typeof window !== 'undefined' && window['HTMLElement']);
	function patchProperty(obj, prop) {
	    var desc = Object.getOwnPropertyDescriptor(obj, prop) || {
	        enumerable: true,
	        configurable: true
	    };
	    // A property descriptor cannot have getter/setter and be writable
	    // deleting the writable and value properties avoids this error:
	    //
	    // TypeError: property descriptors must not specify a value or be writable when a
	    // getter or setter has been specified
	    delete desc.writable;
	    delete desc.value;
	    // substr(2) cuz 'onclick' -> 'click', etc
	    var eventName = prop.substr(2);
	    var _prop = '_' + prop;
	    desc.set = function (fn) {
	        if (this[_prop]) {
	            this.removeEventListener(eventName, this[_prop]);
	        }
	        if (typeof fn === 'function') {
	            var wrapFn = function (event) {
	                var result;
	                result = fn.apply(this, arguments);
	                if (result != undefined && !result)
	                    event.preventDefault();
	            };
	            this[_prop] = wrapFn;
	            this.addEventListener(eventName, wrapFn, false);
	        }
	        else {
	            this[_prop] = null;
	        }
	    };
	    desc.get = function () {
	        return this[_prop];
	    };
	    Object.defineProperty(obj, prop, desc);
	}
	exports.patchProperty = patchProperty;
	;
	function patchOnProperties(obj, properties) {
	    var onProperties = [];
	    for (var prop in obj) {
	        if (prop.substr(0, 2) == 'on') {
	            onProperties.push(prop);
	        }
	    }
	    for (var j = 0; j < onProperties.length; j++) {
	        patchProperty(obj, onProperties[j]);
	    }
	    if (properties) {
	        for (var i = 0; i < properties.length; i++) {
	            patchProperty(obj, 'on' + properties[i]);
	        }
	    }
	}
	exports.patchOnProperties = patchOnProperties;
	;
	var EVENT_TASKS = exports.zoneSymbol('eventTasks');
	var ADD_EVENT_LISTENER = 'addEventListener';
	var REMOVE_EVENT_LISTENER = 'removeEventListener';
	var SYMBOL_ADD_EVENT_LISTENER = exports.zoneSymbol(ADD_EVENT_LISTENER);
	var SYMBOL_REMOVE_EVENT_LISTENER = exports.zoneSymbol(REMOVE_EVENT_LISTENER);
	function findExistingRegisteredTask(target, handler, name, capture, remove) {
	    var eventTasks = target[EVENT_TASKS];
	    if (eventTasks) {
	        for (var i = 0; i < eventTasks.length; i++) {
	            var eventTask = eventTasks[i];
	            var data = eventTask.data;
	            if (data.handler === handler
	                && data.useCapturing === capture
	                && data.eventName === name) {
	                if (remove) {
	                    eventTasks.splice(i, 1);
	                }
	                return eventTask;
	            }
	        }
	    }
	    return null;
	}
	function attachRegisteredEvent(target, eventTask) {
	    var eventTasks = target[EVENT_TASKS];
	    if (!eventTasks) {
	        eventTasks = target[EVENT_TASKS] = [];
	    }
	    eventTasks.push(eventTask);
	}
	function scheduleEventListener(eventTask) {
	    var meta = eventTask.data;
	    attachRegisteredEvent(meta.target, eventTask);
	    return meta.target[SYMBOL_ADD_EVENT_LISTENER](meta.eventName, eventTask.invoke, meta.useCapturing);
	}
	function cancelEventListener(eventTask) {
	    var meta = eventTask.data;
	    findExistingRegisteredTask(meta.target, eventTask.invoke, meta.eventName, meta.useCapturing, true);
	    meta.target[SYMBOL_REMOVE_EVENT_LISTENER](meta.eventName, eventTask.invoke, meta.useCapturing);
	}
	function zoneAwareAddEventListener(self, args) {
	    var eventName = args[0];
	    var handler = args[1];
	    var useCapturing = args[2] || false;
	    // - Inside a Web Worker, `this` is undefined, the context is `global`
	    // - When `addEventListener` is called on the global context in strict mode, `this` is undefined
	    // see https://github.com/angular/zone.js/issues/190
	    var target = self || _global;
	    var delegate = null;
	    if (typeof handler == 'function') {
	        delegate = handler;
	    }
	    else if (handler && handler.handleEvent) {
	        delegate = function (event) { return handler.handleEvent(event); };
	    }
	    var validZoneHandler = false;
	    try {
	        // In cross site contexts (such as WebDriver frameworks like Selenium),
	        // accessing the handler object here will cause an exception to be thrown which
	        // will fail tests prematurely.
	        validZoneHandler = handler && handler.toString() === "[object FunctionWrapper]";
	    }
	    catch (e) {
	        // Returning nothing here is fine, because objects in a cross-site context are unusable
	        return;
	    }
	    // Ignore special listeners of IE11 & Edge dev tools, see https://github.com/angular/zone.js/issues/150
	    if (!delegate || validZoneHandler) {
	        return target[SYMBOL_ADD_EVENT_LISTENER](eventName, handler, useCapturing);
	    }
	    var eventTask = findExistingRegisteredTask(target, handler, eventName, useCapturing, false);
	    if (eventTask) {
	        // we already registered, so this will have noop.
	        return target[SYMBOL_ADD_EVENT_LISTENER](eventName, eventTask.invoke, useCapturing);
	    }
	    var zone = Zone.current;
	    var source = target.constructor['name'] + '.addEventListener:' + eventName;
	    var data = {
	        target: target,
	        eventName: eventName,
	        name: eventName,
	        useCapturing: useCapturing,
	        handler: handler
	    };
	    zone.scheduleEventTask(source, delegate, data, scheduleEventListener, cancelEventListener);
	}
	function zoneAwareRemoveEventListener(self, args) {
	    var eventName = args[0];
	    var handler = args[1];
	    var useCapturing = args[2] || false;
	    // - Inside a Web Worker, `this` is undefined, the context is `global`
	    // - When `addEventListener` is called on the global context in strict mode, `this` is undefined
	    // see https://github.com/angular/zone.js/issues/190
	    var target = self || _global;
	    var eventTask = findExistingRegisteredTask(target, handler, eventName, useCapturing, true);
	    if (eventTask) {
	        eventTask.zone.cancelTask(eventTask);
	    }
	    else {
	        target[SYMBOL_REMOVE_EVENT_LISTENER](eventName, handler, useCapturing);
	    }
	}
	function patchEventTargetMethods(obj) {
	    if (obj && obj.addEventListener) {
	        patchMethod(obj, ADD_EVENT_LISTENER, function () { return zoneAwareAddEventListener; });
	        patchMethod(obj, REMOVE_EVENT_LISTENER, function () { return zoneAwareRemoveEventListener; });
	        return true;
	    }
	    else {
	        return false;
	    }
	}
	exports.patchEventTargetMethods = patchEventTargetMethods;
	;
	var originalInstanceKey = exports.zoneSymbol('originalInstance');
	// wrap some native API on `window`
	function patchClass(className) {
	    var OriginalClass = _global[className];
	    if (!OriginalClass)
	        return;
	    _global[className] = function () {
	        var a = bindArguments(arguments, className);
	        switch (a.length) {
	            case 0:
	                this[originalInstanceKey] = new OriginalClass();
	                break;
	            case 1:
	                this[originalInstanceKey] = new OriginalClass(a[0]);
	                break;
	            case 2:
	                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
	                break;
	            case 3:
	                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
	                break;
	            case 4:
	                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
	                break;
	            default: throw new Error('Arg list too long.');
	        }
	    };
	    var instance = new OriginalClass(function () { });
	    var prop;
	    for (prop in instance) {
	        // https://bugs.webkit.org/show_bug.cgi?id=44721
	        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
	            continue;
	        (function (prop) {
	            if (typeof instance[prop] === 'function') {
	                _global[className].prototype[prop] = function () {
	                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
	                };
	            }
	            else {
	                Object.defineProperty(_global[className].prototype, prop, {
	                    set: function (fn) {
	                        if (typeof fn === 'function') {
	                            this[originalInstanceKey][prop] = Zone.current.wrap(fn, className + '.' + prop);
	                        }
	                        else {
	                            this[originalInstanceKey][prop] = fn;
	                        }
	                    },
	                    get: function () {
	                        return this[originalInstanceKey][prop];
	                    }
	                });
	            }
	        }(prop));
	    }
	    for (prop in OriginalClass) {
	        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
	            _global[className][prop] = OriginalClass[prop];
	        }
	    }
	}
	exports.patchClass = patchClass;
	;
	function createNamedFn(name, delegate) {
	    try {
	        return (Function('f', "return function " + name + "(){return f(this, arguments)}"))(delegate);
	    }
	    catch (e) {
	        // if we fail, we must be CSP, just return delegate.
	        return function () {
	            return delegate(this, arguments);
	        };
	    }
	}
	exports.createNamedFn = createNamedFn;
	function patchMethod(target, name, patchFn) {
	    var proto = target;
	    while (proto && !proto.hasOwnProperty(name)) {
	        proto = Object.getPrototypeOf(proto);
	    }
	    if (!proto && target[name]) {
	        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
	        proto = target;
	    }
	    var delegateName = exports.zoneSymbol(name);
	    var delegate;
	    if (proto && !(delegate = proto[delegateName])) {
	        delegate = proto[delegateName] = proto[name];
	        proto[name] = createNamedFn(name, patchFn(delegate, delegateName, name));
	    }
	    return delegate;
	}
	exports.patchMethod = patchMethod;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var utils_1 = __webpack_require__(3);
	/*
	 * This is necessary for Chrome and Chrome mobile, to enable
	 * things like redefining `createdCallback` on an element.
	 */
	var _defineProperty = Object.defineProperty;
	var _getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var _create = Object.create;
	var unconfigurablesKey = utils_1.zoneSymbol('unconfigurables');
	function propertyPatch() {
	    Object.defineProperty = function (obj, prop, desc) {
	        if (isUnconfigurable(obj, prop)) {
	            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
	        }
	        var originalConfigurableFlag = desc.configurable;
	        if (prop !== 'prototype') {
	            desc = rewriteDescriptor(obj, prop, desc);
	        }
	        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
	    };
	    Object.defineProperties = function (obj, props) {
	        Object.keys(props).forEach(function (prop) {
	            Object.defineProperty(obj, prop, props[prop]);
	        });
	        return obj;
	    };
	    Object.create = function (obj, proto) {
	        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
	            Object.keys(proto).forEach(function (prop) {
	                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
	            });
	        }
	        return _create(obj, proto);
	    };
	    Object.getOwnPropertyDescriptor = function (obj, prop) {
	        var desc = _getOwnPropertyDescriptor(obj, prop);
	        if (isUnconfigurable(obj, prop)) {
	            desc.configurable = false;
	        }
	        return desc;
	    };
	}
	exports.propertyPatch = propertyPatch;
	;
	function _redefineProperty(obj, prop, desc) {
	    var originalConfigurableFlag = desc.configurable;
	    desc = rewriteDescriptor(obj, prop, desc);
	    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
	}
	exports._redefineProperty = _redefineProperty;
	;
	function isUnconfigurable(obj, prop) {
	    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
	}
	function rewriteDescriptor(obj, prop, desc) {
	    desc.configurable = true;
	    if (!desc.configurable) {
	        if (!obj[unconfigurablesKey]) {
	            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
	        }
	        obj[unconfigurablesKey][prop] = true;
	    }
	    return desc;
	}
	function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
	    try {
	        return _defineProperty(obj, prop, desc);
	    }
	    catch (e) {
	        if (desc.configurable) {
	            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's retry with the original flag value
	            if (typeof originalConfigurableFlag == 'undefined') {
	                delete desc.configurable;
	            }
	            else {
	                desc.configurable = originalConfigurableFlag;
	            }
	            return _defineProperty(obj, prop, desc);
	        }
	        else {
	            throw e;
	        }
	    }
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var define_property_1 = __webpack_require__(4);
	var utils_1 = __webpack_require__(3);
	function registerElementPatch(_global) {
	    if (!utils_1.isBrowser || !('registerElement' in _global.document)) {
	        return;
	    }
	    var _registerElement = document.registerElement;
	    var callbacks = [
	        'createdCallback',
	        'attachedCallback',
	        'detachedCallback',
	        'attributeChangedCallback'
	    ];
	    document.registerElement = function (name, opts) {
	        if (opts && opts.prototype) {
	            callbacks.forEach(function (callback) {
	                var source = 'Document.registerElement::' + callback;
	                if (opts.prototype.hasOwnProperty(callback)) {
	                    var descriptor = Object.getOwnPropertyDescriptor(opts.prototype, callback);
	                    if (descriptor && descriptor.value) {
	                        descriptor.value = Zone.current.wrap(descriptor.value, source);
	                        define_property_1._redefineProperty(opts.prototype, callback, descriptor);
	                    }
	                    else {
	                        opts.prototype[callback] = Zone.current.wrap(opts.prototype[callback], source);
	                    }
	                }
	                else if (opts.prototype[callback]) {
	                    opts.prototype[callback] = Zone.current.wrap(opts.prototype[callback], source);
	                }
	            });
	        }
	        return _registerElement.apply(document, [name, opts]);
	    };
	}
	exports.registerElementPatch = registerElementPatch;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var webSocketPatch = __webpack_require__(7);
	var utils_1 = __webpack_require__(3);
	var eventNames = 'copy cut paste abort blur focus canplay canplaythrough change click contextmenu dblclick drag dragend dragenter dragleave dragover dragstart drop durationchange emptied ended input invalid keydown keypress keyup load loadeddata loadedmetadata loadstart message mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup pause play playing progress ratechange reset scroll seeked seeking select show stalled submit suspend timeupdate volumechange waiting mozfullscreenchange mozfullscreenerror mozpointerlockchange mozpointerlockerror error webglcontextrestored webglcontextlost webglcontextcreationerror'.split(' ');
	function propertyDescriptorPatch(_global) {
	    if (utils_1.isNode) {
	        return;
	    }
	    var supportsWebSocket = typeof WebSocket !== 'undefined';
	    if (canPatchViaPropertyDescriptor()) {
	        // for browsers that we can patch the descriptor:  Chrome & Firefox
	        if (utils_1.isBrowser) {
	            utils_1.patchOnProperties(HTMLElement.prototype, eventNames);
	        }
	        utils_1.patchOnProperties(XMLHttpRequest.prototype, null);
	        if (typeof IDBIndex !== 'undefined') {
	            utils_1.patchOnProperties(IDBIndex.prototype, null);
	            utils_1.patchOnProperties(IDBRequest.prototype, null);
	            utils_1.patchOnProperties(IDBOpenDBRequest.prototype, null);
	            utils_1.patchOnProperties(IDBDatabase.prototype, null);
	            utils_1.patchOnProperties(IDBTransaction.prototype, null);
	            utils_1.patchOnProperties(IDBCursor.prototype, null);
	        }
	        if (supportsWebSocket) {
	            utils_1.patchOnProperties(WebSocket.prototype, null);
	        }
	    }
	    else {
	        // Safari, Android browsers (Jelly Bean)
	        patchViaCapturingAllTheEvents();
	        utils_1.patchClass('XMLHttpRequest');
	        if (supportsWebSocket) {
	            webSocketPatch.apply(_global);
	        }
	    }
	}
	exports.propertyDescriptorPatch = propertyDescriptorPatch;
	function canPatchViaPropertyDescriptor() {
	    if (utils_1.isBrowser && !Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'onclick')
	        && typeof Element !== 'undefined') {
	        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
	        // IDL interface attributes are not configurable
	        var desc = Object.getOwnPropertyDescriptor(Element.prototype, 'onclick');
	        if (desc && !desc.configurable)
	            return false;
	    }
	    Object.defineProperty(XMLHttpRequest.prototype, 'onreadystatechange', {
	        get: function () {
	            return true;
	        }
	    });
	    var req = new XMLHttpRequest();
	    var result = !!req.onreadystatechange;
	    Object.defineProperty(XMLHttpRequest.prototype, 'onreadystatechange', {});
	    return result;
	}
	;
	var unboundKey = utils_1.zoneSymbol('unbound');
	// Whenever any eventListener fires, we check the eventListener target and all parents
	// for `onwhatever` properties and replace them with zone-bound functions
	// - Chrome (for now)
	function patchViaCapturingAllTheEvents() {
	    var _loop_1 = function(i) {
	        var property = eventNames[i];
	        var onproperty = 'on' + property;
	        document.addEventListener(property, function (event) {
	            var elt = event.target, bound, source;
	            if (elt) {
	                source = elt.constructor['name'] + '.' + onproperty;
	            }
	            else {
	                source = 'unknown.' + onproperty;
	            }
	            while (elt) {
	                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
	                    bound = Zone.current.wrap(elt[onproperty], source);
	                    bound[unboundKey] = elt[onproperty];
	                    elt[onproperty] = bound;
	                }
	                elt = elt.parentElement;
	            }
	        }, true);
	    };
	    for (var i = 0; i < eventNames.length; i++) {
	        _loop_1(i);
	    }
	    ;
	}
	;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var utils_1 = __webpack_require__(3);
	// we have to patch the instance since the proto is non-configurable
	function apply(_global) {
	    var WS = _global.WebSocket;
	    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
	    // On older Chrome, no need since EventTarget was already patched
	    if (!_global.EventTarget) {
	        utils_1.patchEventTargetMethods(WS.prototype);
	    }
	    _global.WebSocket = function (a, b) {
	        var socket = arguments.length > 1 ? new WS(a, b) : new WS(a);
	        var proxySocket;
	        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
	        var onmessageDesc = Object.getOwnPropertyDescriptor(socket, 'onmessage');
	        if (onmessageDesc && onmessageDesc.configurable === false) {
	            proxySocket = Object.create(socket);
	            ['addEventListener', 'removeEventListener', 'send', 'close'].forEach(function (propName) {
	                proxySocket[propName] = function () {
	                    return socket[propName].apply(socket, arguments);
	                };
	            });
	        }
	        else {
	            // we can patch the real socket
	            proxySocket = socket;
	        }
	        utils_1.patchOnProperties(proxySocket, ['close', 'error', 'message', 'open']);
	        return proxySocket;
	    };
	    for (var prop in WS) {
	        _global.WebSocket[prop] = WS[prop];
	    }
	}
	exports.apply = apply;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var utils_1 = __webpack_require__(3);
	function patchTimer(window, setName, cancelName, nameSuffix) {
	    var setNative = null;
	    var clearNative = null;
	    setName += nameSuffix;
	    cancelName += nameSuffix;
	    function scheduleTask(task) {
	        var data = task.data;
	        data.args[0] = task.invoke;
	        data.handleId = setNative.apply(window, data.args);
	        return task;
	    }
	    function clearTask(task) {
	        return clearNative(task.data.handleId);
	    }
	    setNative = utils_1.patchMethod(window, setName, function (delegate) { return function (self, args) {
	        if (typeof args[0] === 'function') {
	            var zone = Zone.current;
	            var options = {
	                handleId: null,
	                isPeriodic: nameSuffix === 'Interval',
	                delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 : null,
	                args: args
	            };
	            var task = zone.scheduleMacroTask(setName, args[0], options, scheduleTask, clearTask);
	            if (!task) {
	                return task;
	            }
	            // Node.js must additionally support the ref and unref functions.
	            var handle = task.data.handleId;
	            if (handle.ref && handle.unref) {
	                task.ref = handle.ref.bind(handle);
	                task.unref = handle.unref.bind(handle);
	            }
	            return task;
	        }
	        else {
	            // cause an error by calling it directly.
	            return delegate.apply(window, args);
	        }
	    }; });
	    clearNative = utils_1.patchMethod(window, cancelName, function (delegate) { return function (self, args) {
	        var task = args[0];
	        if (task && typeof task.type === 'string') {
	            if (task.cancelFn && task.data.isPeriodic || task.runCount === 0) {
	                // Do not cancel already canceled functions
	                task.zone.cancelTask(task);
	            }
	        }
	        else {
	            // cause an error by calling it directly.
	            delegate.apply(window, args);
	        }
	    }; });
	}
	exports.patchTimer = patchTimer;


/***/ }
/******/ ]);
}).call(this,_dereq_('_process'))

},{"_process":1}],3:[function(_dereq_,module,exports){
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

},{"./decorators/Alias":4,"./decorators/Component":5,"./decorators/Config":6,"./decorators/Controller":7,"./decorators/Directive":8,"./decorators/Filter":9,"./decorators/Inject":10,"./decorators/MethodDecorators":11,"./decorators/Run":12,"./decorators/Self":13,"./decorators/Service":14,"./decorators/State":15,"./decorators/View":16,"./integration/WatchIterableFix":17,"./integration/ZoneJSIntegration":18,"./util/AngularModuleResolver":19,"./util/Configuration":21}],4:[function(_dereq_,module,exports){
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

},{"../util/Symbols":23}],5:[function(_dereq_,module,exports){
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
        (0, _AngularModuleResolver.lookupAngularModule)().directive(conf.selector, function () {

            //Merge @Bind properties
            if (conf.bind !== false) {
                conf.bind = Object.assign(conf.bind || {}, target[symbols.bind] || {});
            }

            conf.controllerAs = target[symbols.alias] || conf.controllerAs || "$ctrl";
            conf.bindToController = conf.bind;

            (0, _View.decorateView)(target, conf);

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
        type[symbols.bind] = type[symbols.bind] || {};
        type[symbols.bind][name] = bindType + attributeName;

        return {
            writable: true,
            value: desc.value
        };
    };
}

},{"../util/AngularModuleResolver":19,"../util/Symbols":23,"./View":16}],6:[function(_dereq_,module,exports){
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
  if (target instanceof Function) (0, _AngularModuleResolver.lookupAngularModule)().config(target);else (0, _AngularModuleResolver.lookupAngularModule)().config(target[name]);
}

},{"../util/AngularModuleResolver":19,"../util/AngularUtils":20}],7:[function(_dereq_,module,exports){
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
        return (0, _AngularModuleResolver.lookupAngularModule)().controller(name, clazz);
    };

    if (clazz instanceof Function) {
        addController(clazz.name, clazz);
    } else return function (target) {
        addController(clazz, target);
    };
}

},{"../util/AngularModuleResolver":19,"../util/AngularUtils":20}],8:[function(_dereq_,module,exports){
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
        return (0, _AngularModuleResolver.lookupAngularModule)().directive(name, (0, _ES6Directive2.default)(fn));
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

},{"../util/AngularModuleResolver":19,"../util/AngularUtils":20,"../util/ES6Directive":22}],9:[function(_dereq_,module,exports){
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
        return (0, _AngularModuleResolver.lookupAngularModule)().filter(name, fn);
    };

    if (clazz.constructor != String) {
        //With method name as filter name
        registerFilter(method, clazz[method]);
    } else return function (target, method) {
        //With specified name
        registerFilter(clazz, target[method]);
    };
}

},{"../util/AngularModuleResolver":19,"../util/AngularUtils":20}],10:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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

},{"../util/AngularModuleResolver":19,"../util/AngularUtils":20,"../util/Symbols":23}],11:[function(_dereq_,module,exports){
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
    var deep = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];


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

},{"../util/AngularModuleResolver":19,"../util/Symbols":23}],12:[function(_dereq_,module,exports){
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
  if (target instanceof Function) (0, _AngularModuleResolver.lookupAngularModule)().run(target);else (0, _AngularModuleResolver.lookupAngularModule)().run(target[name]);
}

},{"../util/AngularModuleResolver":19,"../util/AngularUtils":20}],13:[function(_dereq_,module,exports){
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

},{}],14:[function(_dereq_,module,exports){
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
        return (0, _AngularModuleResolver.lookupAngularModule)().service(name, clazz);
    };

    if (clazz instanceof Function) {
        addService(clazz.name, clazz);
    } else return function (target) {
        addService(clazz, target);
    };
}

},{"../util/AngularModuleResolver":19,"../util/AngularUtils":20}],15:[function(_dereq_,module,exports){
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

},{"../util/AngularModuleResolver":19,"../util/Configuration":21,"../util/Symbols":23,"./Controller":7,"./View":16}],16:[function(_dereq_,module,exports){
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

},{"../util/Symbols":23}],17:[function(_dereq_,module,exports){
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
            return resolved;
        };

        return this[$watchCollection](monkeyPatchedObserver, action); //Must be this way because of maximum call stack size exceeded error
    };
}

},{"../util/AngularModuleResolver":19}],18:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ngZoneModule = exports.NgZone = undefined;

_dereq_("zone.js");

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
                    var disableZoneJS = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

                    if (disableZoneJS) NgZone.$digested = true;
                    this[digestSymbol]();
                };

                //Add digest to the angular zone
                NgZone.$digest = function () {
                    $rootScope.$digest();
                };
            }]);
        });
    }
});

//Force angular to stop the bootstrap process
window.name = "NG_DEFER_BOOTSTRAP!";

},{"../util/Configuration":21,"zone.js":2}],19:[function(_dereq_,module,exports){
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

},{"./Configuration":21}],20:[function(_dereq_,module,exports){
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

},{"../util/Symbols":23,"./AngularModuleResolver":19,"./Configuration":21}],21:[function(_dereq_,module,exports){
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

},{}],22:[function(_dereq_,module,exports){
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

},{}],23:[function(_dereq_,module,exports){
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

},{}]},{},[3])(3)
});


//# sourceMappingURL=ng-next.js.map
