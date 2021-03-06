'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var i = _interopDefault(require('@firebase/app'));
var util = require('@firebase/util');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __spreadArrays$1() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
var levelStringToEnum = {
    'debug': LogLevel.DEBUG,
    'verbose': LogLevel.VERBOSE,
    'info': LogLevel.INFO,
    'warn': LogLevel.WARN,
    'error': LogLevel.ERROR,
    'silent': LogLevel.SILENT
};
/**
 * The default log level
 */
var defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */
var ConsoleMethod = (_a = {},
    _a[LogLevel.DEBUG] = 'log',
    _a[LogLevel.VERBOSE] = 'log',
    _a[LogLevel.INFO] = 'info',
    _a[LogLevel.WARN] = 'warn',
    _a[LogLevel.ERROR] = 'error',
    _a);
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */
var defaultLogHandler = function (instance, logType) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (logType < instance.logLevel) {
        return;
    }
    var now = new Date().toISOString();
    var method = ConsoleMethod[logType];
    if (method) {
        console[method].apply(console, __spreadArrays$1(["[" + now + "]  " + instance.name + ":"], args));
    }
    else {
        throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
    }
};
var Logger = /** @class */ (function () {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */
    function Logger(name) {
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */
        this._logLevel = defaultLogLevel;
        /**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */
        this._logHandler = defaultLogHandler;
        /**
         * The optional, additional, user-defined log handler for the Logger instance.
         */
        this._userLogHandler = null;
    }
    Object.defineProperty(Logger.prototype, "logLevel", {
        get: function () {
            return this._logLevel;
        },
        set: function (val) {
            if (!(val in LogLevel)) {
                throw new TypeError("Invalid value \"" + val + "\" assigned to `logLevel`");
            }
            this._logLevel = val;
        },
        enumerable: false,
        configurable: true
    });
    // Workaround for setter/getter having to be the same type.
    Logger.prototype.setLogLevel = function (val) {
        this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
    };
    Object.defineProperty(Logger.prototype, "logHandler", {
        get: function () {
            return this._logHandler;
        },
        set: function (val) {
            if (typeof val !== 'function') {
                throw new TypeError('Value assigned to `logHandler` must be a function');
            }
            this._logHandler = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "userLogHandler", {
        get: function () {
            return this._userLogHandler;
        },
        set: function (val) {
            this._userLogHandler = val;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * The functions below are all based on the `console` interface
     */
    Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays$1([this, LogLevel.DEBUG], args));
        this._logHandler.apply(this, __spreadArrays$1([this, LogLevel.DEBUG], args));
    };
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays$1([this, LogLevel.VERBOSE], args));
        this._logHandler.apply(this, __spreadArrays$1([this, LogLevel.VERBOSE], args));
    };
    Logger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays$1([this, LogLevel.INFO], args));
        this._logHandler.apply(this, __spreadArrays$1([this, LogLevel.INFO], args));
    };
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays$1([this, LogLevel.WARN], args));
        this._logHandler.apply(this, __spreadArrays$1([this, LogLevel.WARN], args));
    };
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays$1([this, LogLevel.ERROR], args));
        this._logHandler.apply(this, __spreadArrays$1([this, LogLevel.ERROR], args));
    };
    return Logger;
}());

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics$1 = function(d, b) {
    extendStatics$1 = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics$1(d, b);
};

function __extends$1(d, b) {
    extendStatics$1(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var g, goog = goog || {}, k = commonjsGlobal || self;
function aa() { }
function ba(a) { var b = typeof a; return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"; }
function ca(a) { var b = ba(a); return "array" == b || "object" == b && "number" == typeof a.length; }
function n(a) { var b = typeof a; return "object" == b && null != a || "function" == b; }
function da(a) { return Object.prototype.hasOwnProperty.call(a, ea) && a[ea] || (a[ea] = ++fa); }
var ea = "closure_uid_" + (1E9 * Math.random() >>> 0), fa = 0;
function ha(a, b, c) { return a.call.apply(a.bind, arguments); }
function ja(a, b, c) { if (!a)
    throw Error(); if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function () { var e = Array.prototype.slice.call(arguments); Array.prototype.unshift.apply(e, d); return a.apply(b, e); };
} return function () { return a.apply(b, arguments); }; }
function p(a, b, c) { Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? p = ha : p = ja; return p.apply(null, arguments); }
function ka(a, b) { var c = Array.prototype.slice.call(arguments, 1); return function () { var d = c.slice(); d.push.apply(d, arguments); return a.apply(this, d); }; }
var q = Date.now;
function r(a, b) { function c() { } c.prototype = b.prototype; a.S = b.prototype; a.prototype = new c; a.prototype.constructor = a; }
function u() { this.j = this.j; this.i = this.i; }
var la = 0;
u.prototype.j = !1;
u.prototype.ja = function () { if (!this.j && (this.j = !0, this.G(), 0 != la)) {
    var a = da(this);
} };
u.prototype.G = function () { if (this.i)
    for (; this.i.length;)
        this.i.shift()(); };
var na = Array.prototype.indexOf ? function (a, b) { return Array.prototype.indexOf.call(a, b, void 0); } : function (a, b) { if ("string" === typeof a)
    return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0); for (var c = 0; c < a.length; c++)
    if (c in a && a[c] === b)
        return c; return -1; }, oa = Array.prototype.forEach ? function (a, b, c) { Array.prototype.forEach.call(a, b, c); } : function (a, b, c) { for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
    f in e && b.call(c, e[f], f, a); };
function pa(a) { a: {
    var b = qa;
    for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
        if (e in d && b.call(void 0, d[e], e, a)) {
            b = e;
            break a;
        }
    b = -1;
} return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]; }
function ra(a) { return Array.prototype.concat.apply([], arguments); }
function sa(a) { var b = a.length; if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++)
        c[d] = a[d];
    return c;
} return []; }
function ta(a) { return /^[\s\xa0]*$/.test(a); }
var ua = String.prototype.trim ? function (a) { return a.trim(); } : function (a) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]; };
function v(a, b) { return -1 != a.indexOf(b); }
function xa(a, b) { return a < b ? -1 : a > b ? 1 : 0; }
var w;
a: {
    var ya = k.navigator;
    if (ya) {
        var za = ya.userAgent;
        if (za) {
            w = za;
            break a;
        }
    }
    w = "";
}
function Aa(a, b, c) { for (var d in a)
    b.call(c, a[d], d, a); }
function Ba(a) { var b = {}; for (var c in a)
    b[c] = a[c]; return b; }
var Ca = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Da(a, b) { var c, d; for (var e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d)
        a[c] = d[c];
    for (var f = 0; f < Ca.length; f++)
        c = Ca[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
} }
function Ea(a) { Ea[" "](a); return a; }
Ea[" "] = aa;
function Fa(a, b) { var c = Ga; return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a); }
var Ha = v(w, "Opera"), x = v(w, "Trident") || v(w, "MSIE"), Ia = v(w, "Edge"), Ja = Ia || x, Ka = v(w, "Gecko") && !(v(w.toLowerCase(), "webkit") && !v(w, "Edge")) && !(v(w, "Trident") || v(w, "MSIE")) && !v(w, "Edge"), La = v(w.toLowerCase(), "webkit") && !v(w, "Edge");
function Ma() { var a = k.document; return a ? a.documentMode : void 0; }
var Na;
a: {
    var Oa = "", Pa = function () { var a = w; if (Ka)
        return /rv:([^\);]+)(\)|;)/.exec(a); if (Ia)
        return /Edge\/([\d\.]+)/.exec(a); if (x)
        return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a); if (La)
        return /WebKit\/(\S+)/.exec(a); if (Ha)
        return /(?:Version)[ \/]?(\S+)/.exec(a); }();
    Pa && (Oa = Pa ? Pa[1] : "");
    if (x) {
        var Qa = Ma();
        if (null != Qa && Qa > parseFloat(Oa)) {
            Na = String(Qa);
            break a;
        }
    }
    Na = Oa;
}
var Ga = {};
function Ra(a) { return Fa(a, function () { {
    var b = 0;
    var e = ua(String(Na)).split("."), f = ua(String(a)).split("."), h = Math.max(e.length, f.length);
    for (var m = 0; 0 == b && m < h; m++) {
        var c = e[m] || "", d = f[m] || "";
        do {
            c = /(\d*)(\D*)(.*)/.exec(c) || ["", "", "", ""];
            d = /(\d*)(\D*)(.*)/.exec(d) || ["", "", "", ""];
            if (0 == c[0].length && 0 == d[0].length)
                break;
            b = xa(0 == c[1].length ? 0 : parseInt(c[1], 10), 0 == d[1].length ? 0 : parseInt(d[1], 10)) || xa(0 == c[2].length, 0 == d[2].length) || xa(c[2], d[2]);
            c = c[3];
            d = d[3];
        } while (0 == b);
    }
} return 0 <= b; }); }
var Sa;
if (k.document && x) {
    var Ta = Ma();
    Sa = Ta ? Ta : parseInt(Na, 10) || void 0;
}
else
    Sa = void 0;
var Ua = Sa;
var Va = !x || 9 <= Number(Ua), Wa = x && !Ra("9"), Xa = function () { if (!k.addEventListener || !Object.defineProperty)
    return !1; var a = !1, b = Object.defineProperty({}, "passive", { get: function () { a = !0; } }); try {
    k.addEventListener("test", aa, b), k.removeEventListener("test", aa, b);
}
catch (c) { } return a; }();
function y(a, b) { this.type = a; this.a = this.target = b; this.defaultPrevented = !1; }
y.prototype.b = function () { this.defaultPrevented = !0; };
function A(a, b) {
    y.call(this, a ? a.type : "");
    this.relatedTarget = this.a = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.c = null;
    if (a) {
        var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.a = b;
        if (b = a.relatedTarget) {
            if (Ka) {
                a: {
                    try {
                        Ea(b.nodeName);
                        var e = !0;
                        break a;
                    }
                    catch (f) { }
                    e = !1;
                }
                e || (b = null);
            }
        }
        else
            "mouseover" ==
                c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey =
            a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Ya[a.pointerType] || "";
        this.c = a;
        a.defaultPrevented && this.b();
    }
}
r(A, y);
var Ya = { 2: "touch", 3: "pen", 4: "mouse" };
A.prototype.b = function () { A.S.b.call(this); var a = this.c; if (a.preventDefault)
    a.preventDefault();
else if (a.returnValue = !1, Wa)
    try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
            a.keyCode = -1;
    }
    catch (b) { } };
var C = "closure_listenable_" + (1E6 * Math.random() | 0), Za = 0;
function $a(a, b, c, d, e) { this.listener = a; this.proxy = null; this.src = b; this.type = c; this.capture = !!d; this.ca = e; this.key = ++Za; this.Y = this.Z = !1; }
function ab(a) { a.Y = !0; a.listener = null; a.proxy = null; a.src = null; a.ca = null; }
function bb(a) { this.src = a; this.a = {}; this.b = 0; }
bb.prototype.add = function (a, b, c, d, e) { var f = a.toString(); a = this.a[f]; a || (a = this.a[f] = [], this.b++); var h = cb(a, b, d, e); -1 < h ? (b = a[h], c || (b.Z = !1)) : (b = new $a(b, this.src, f, !!d, e), b.Z = c, a.push(b)); return b; };
function db(a, b) { var c = b.type; if (c in a.a) {
    var d = a.a[c], e = na(d, b), f;
    (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
    f && (ab(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
} }
function cb(a, b, c, d) { for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.Y && f.listener == b && f.capture == !!c && f.ca == d)
        return e;
} return -1; }
var eb = "closure_lm_" + (1E6 * Math.random() | 0), fb = {};
function hb(a, b, c, d, e) { if (d && d.once)
    return ib(a, b, c, d, e); if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++)
        hb(a, b[f], c, d, e);
    return null;
} c = jb(c); return a && a[C] ? a.va(b, c, n(d) ? !!d.capture : !!d, e) : kb(a, b, c, !1, d, e); }
function kb(a, b, c, d, e, f) {
    if (!b)
        throw Error("Invalid event type");
    var h = n(e) ? !!e.capture : !!e;
    if (h && !Va)
        return null;
    var m = lb(a);
    m || (a[eb] = m = new bb(a));
    c = m.add(b, c, d, h, f);
    if (c.proxy)
        return c;
    d = mb();
    c.proxy = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener)
        Xa || (e = h), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent)
        a.attachEvent(nb(b.toString()), d);
    else if (a.addListener && a.removeListener)
        a.addListener(d);
    else
        throw Error("addEventListener and attachEvent are unavailable.");
    return c;
}
function mb() { var a = ob, b = Va ? function (c) { return a.call(b.src, b.listener, c); } : function (c) { c = a.call(b.src, b.listener, c); if (!c)
    return c; }; return b; }
function ib(a, b, c, d, e) { if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++)
        ib(a, b[f], c, d, e);
    return null;
} c = jb(c); return a && a[C] ? a.wa(b, c, n(d) ? !!d.capture : !!d, e) : kb(a, b, c, !0, d, e); }
function pb(a, b, c, d, e) { if (Array.isArray(b))
    for (var f = 0; f < b.length; f++)
        pb(a, b[f], c, d, e);
else
    (d = n(d) ? !!d.capture : !!d, c = jb(c), a && a[C]) ? (a = a.c, b = String(b).toString(), b in a.a && (f = a.a[b], c = cb(f, c, d, e), -1 < c && (ab(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.a[b], a.b--)))) : a && (a = lb(a)) && (b = a.a[b.toString()], a = -1, b && (a = cb(b, c, d, e)), (c = -1 < a ? b[a] : null) && rb(c)); }
function rb(a) { if ("number" !== typeof a && a && !a.Y) {
    var b = a.src;
    if (b && b[C])
        db(b.c, a);
    else {
        var c = a.type, d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(nb(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        (c = lb(b)) ? (db(c, a), 0 == c.b && (c.src = null, b[eb] = null)) : ab(a);
    }
} }
function nb(a) { return a in fb ? fb[a] : fb[a] = "on" + a; }
function sb(a, b) { var c = a.listener, d = a.ca || a.src; a.Z && rb(a); return c.call(d, b); }
function ob(a, b) { if (a.Y)
    return !0; if (!Va) {
    if (!b)
        a: {
            b = ["window", "event"];
            for (var c = k, d = 0; d < b.length; d++)
                if (c = c[b[d]], null == c) {
                    b = null;
                    break a;
                }
            b = c;
        }
    b = new A(b, this);
    return sb(a, b);
} return sb(a, new A(b, this)); }
function lb(a) { a = a[eb]; return a instanceof bb ? a : null; }
var tb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function jb(a) { if ("function" == ba(a))
    return a; a[tb] || (a[tb] = function (b) { return a.handleEvent(b); }); return a[tb]; }
function D() { u.call(this); this.c = new bb(this); this.J = this; this.C = null; }
r(D, u);
D.prototype[C] = !0;
g = D.prototype;
g.addEventListener = function (a, b, c, d) { hb(this, a, b, c, d); };
g.removeEventListener = function (a, b, c, d) { pb(this, a, b, c, d); };
g.dispatchEvent = function (a) { var b, c = this.C; if (c)
    for (b = []; c; c = c.C)
        b.push(c); c = this.J; var d = a.type || a; if ("string" === typeof a)
    a = new y(a, c);
else if (a instanceof y)
    a.target = a.target || c;
else {
    var e = a;
    a = new y(d, c);
    Da(a, e);
} e = !0; if (b)
    for (var f = b.length - 1; 0 <= f; f--) {
        var h = a.a = b[f];
        e = ub(h, d, !0, a) && e;
    } h = a.a = c; e = ub(h, d, !0, a) && e; e = ub(h, d, !1, a) && e; if (b)
    for (f = 0; f < b.length; f++)
        h = a.a = b[f], e = ub(h, d, !1, a) && e; return e; };
g.G = function () { D.S.G.call(this); if (this.c) {
    var a = this.c, c;
    for (c in a.a) {
        for (var d = a.a[c], e = 0; e < d.length; e++)
            ab(d[e]);
        delete a.a[c];
        a.b--;
    }
} this.C = null; };
g.va = function (a, b, c, d) { return this.c.add(String(a), b, !1, c, d); };
g.wa = function (a, b, c, d) { return this.c.add(String(a), b, !0, c, d); };
function ub(a, b, c, d) { b = a.c.a[String(b)]; if (!b)
    return !0; b = b.concat(); for (var e = !0, f = 0; f < b.length; ++f) {
    var h = b[f];
    if (h && !h.Y && h.capture == c) {
        var m = h.listener, l = h.ca || h.src;
        h.Z && db(a.c, h);
        e = !1 !== m.call(l, d) && e;
    }
} return e && !d.defaultPrevented; }
var vb = k.JSON.stringify;
function wb() { this.b = this.a = null; }
var yb = new /** @class */ (function () {
    function class_1(a, b, c) {
        this.f = c;
        this.c = a;
        this.g = b;
        this.b = 0;
        this.a = null;
    }
    class_1.prototype.get = function () { var a; 0 < this.b ? (this.b--, a = this.a, this.a = a.next, a.next = null) : a = this.c(); return a; };
    return class_1;
}())(function () { return new xb; }, function (a) { a.reset(); }, 100);
wb.prototype.add = function (a, b) { var c = yb.get(); c.set(a, b); this.b ? this.b.next = c : this.a = c; this.b = c; };
function zb() { var a = Ab, b = null; a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null); return b; }
function xb() { this.next = this.b = this.a = null; }
xb.prototype.set = function (a, b) { this.a = a; this.b = b; this.next = null; };
xb.prototype.reset = function () { this.next = this.b = this.a = null; };
function Bb(a) { k.setTimeout(function () { throw a; }, 0); }
function Cb(a, b) { Db || Eb(); Fb || (Db(), Fb = !0); Ab.add(a, b); }
var Db;
function Eb() { var a = k.Promise.resolve(void 0); Db = function () { a.then(Gb); }; }
var Fb = !1, Ab = new wb;
function Gb() { for (var a; a = zb();) {
    try {
        a.a.call(a.b);
    }
    catch (c) {
        Bb(c);
    }
    var b = yb;
    b.g(a);
    b.b < b.f && (b.b++, a.next = b.a, b.a = a);
} Fb = !1; }
function Hb(a, b) { D.call(this); this.b = a || 1; this.a = b || k; this.f = p(this.Ya, this); this.g = q(); }
r(Hb, D);
g = Hb.prototype;
g.aa = !1;
g.M = null;
g.Ya = function () { if (this.aa) {
    var a = q() - this.g;
    0 < a && a < .8 * this.b ? this.M = this.a.setTimeout(this.f, this.b - a) : (this.M && (this.a.clearTimeout(this.M), this.M = null), this.dispatchEvent("tick"), this.aa && (Ib(this), this.start()));
} };
g.start = function () { this.aa = !0; this.M || (this.M = this.a.setTimeout(this.f, this.b), this.g = q()); };
function Ib(a) { a.aa = !1; a.M && (a.a.clearTimeout(a.M), a.M = null); }
g.G = function () { Hb.S.G.call(this); Ib(this); delete this.a; };
function Jb(a, b, c) { if ("function" == ba(a))
    c && (a = p(a, c));
else if (a && "function" == typeof a.handleEvent)
    a = p(a.handleEvent, a);
else
    throw Error("Invalid listener argument"); return 2147483647 < Number(b) ? -1 : k.setTimeout(a, b || 0); }
function Kb(a) { a.a = Jb(function () { a.a = null; a.c && (a.c = !1, Kb(a)); }, a.h); var b = a.b; a.b = null; a.g.apply(null, b); }
var Lb = /** @class */ (function (_super) {
    __extends$1(Lb, _super);
    function Lb(a, b, c) {
        var _this = _super.call(this) || this;
        _this.g = null != c ? a.bind(c) : a;
        _this.h = b;
        _this.b = null;
        _this.c = !1;
        _this.a = null;
        return _this;
    }
    Lb.prototype.f = function (a) { this.b = arguments; this.a ? this.c = !0 : Kb(this); };
    Lb.prototype.G = function () { _super.prototype.G.call(this); this.a && (k.clearTimeout(this.a), this.a = null, this.c = !1, this.b = null); };
    return Lb;
}(u));
function E(a) { u.call(this); this.b = a; this.a = {}; }
r(E, u);
var Mb = [];
function Nb(a, b, c, d) { Array.isArray(c) || (c && (Mb[0] = c.toString()), c = Mb); for (var e = 0; e < c.length; e++) {
    var f = hb(b, c[e], d || a.handleEvent, !1, a.b || a);
    if (!f)
        break;
    a.a[f.key] = f;
} }
function Ob(a) { Aa(a.a, function (b, c) { this.a.hasOwnProperty(c) && rb(b); }, a); a.a = {}; }
E.prototype.G = function () { E.S.G.call(this); Ob(this); };
E.prototype.handleEvent = function () { throw Error("EventHandler.handleEvent not implemented"); };
function Pb() { this.a = !0; }
function Qb(a, b, c, d, e, f) { a.info(function () { if (a.a)
    if (f) {
        var h = "";
        for (var m = f.split("&"), l = 0; l < m.length; l++) {
            var t = m[l].split("=");
            if (1 < t.length) {
                var B = t[0];
                t = t[1];
                var z = B.split("_");
                h = 2 <= z.length && "type" == z[1] ? h + (B + "=" + t + "&") : h + (B + "=redacted&");
            }
        }
    }
    else
        h = null;
else
    h = f; return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b + "\n" + c + "\n" + h; }); }
function Rb(a, b, c, d, e, f, h) { a.info(function () { return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b + "\n" + c + "\n" + f + " " + h; }); }
function F(a, b, c, d) { a.info(function () { return "XMLHTTP TEXT (" + b + "): " + Sb(a, c) + (d ? " " + d : ""); }); }
function Tb(a, b) { a.info(function () { return "TIMEOUT: " + b; }); }
Pb.prototype.info = function () { };
function Sb(a, b) { if (!a.a)
    return b; if (!b)
    return null; try {
    var c = JSON.parse(b);
    if (c)
        for (a = 0; a < c.length; a++)
            if (Array.isArray(c[a])) {
                var d = c[a];
                if (!(2 > d.length)) {
                    var e = d[1];
                    if (Array.isArray(e) && !(1 > e.length)) {
                        var f = e[0];
                        if ("noop" != f && "stop" != f && "close" != f)
                            for (var h = 1; h < e.length; h++)
                                e[h] = "";
                    }
                }
            }
    return vb(c);
}
catch (m) {
    return b;
} }
var Ub = null;
function Vb() { return Ub = Ub || new D; }
function Wb(a) { y.call(this, "serverreachability", a); }
r(Wb, y);
function G(a) { var b = Vb(); b.dispatchEvent(new Wb(b, a)); }
function Xb(a) { y.call(this, "statevent", a); }
r(Xb, y);
function H(a) { var b = Vb(); b.dispatchEvent(new Xb(b, a)); }
function Yb(a) { y.call(this, "timingevent", a); }
r(Yb, y);
function I(a, b) { if ("function" != ba(a))
    throw Error("Fn must not be null and must be a function"); return k.setTimeout(function () { a(); }, b); }
var Zb = { NO_ERROR: 0, Za: 1, gb: 2, fb: 3, bb: 4, eb: 5, hb: 6, Da: 7, TIMEOUT: 8, kb: 9 };
var $b = { ab: "complete", ob: "success", Ea: "error", Da: "abort", mb: "ready", nb: "readystatechange", TIMEOUT: "timeout", ib: "incrementaldata", lb: "progress", cb: "downloadprogress", pb: "uploadprogress" };
function ac() { }
ac.prototype.a = null;
function bc(a) { var b; (b = a.a) || (b = a.a = {}); return b; }
function cc() { }
var J = { OPEN: "a", $a: "b", Ea: "c", jb: "d" };
function dc() { y.call(this, "d"); }
r(dc, y);
function ec() { y.call(this, "c"); }
r(ec, y);
var fc;
function gc() { }
r(gc, ac);
fc = new gc;
function K(a, b, c, d) { this.g = a; this.c = b; this.f = c; this.T = d || 1; this.J = new E(this); this.P = hc; a = Ja ? 125 : void 0; this.R = new Hb(a); this.B = null; this.b = !1; this.j = this.l = this.i = this.H = this.u = this.U = this.o = null; this.s = []; this.a = null; this.D = 0; this.h = this.m = null; this.N = -1; this.A = !1; this.O = 0; this.F = null; this.W = this.C = this.V = this.I = !1; }
var hc = 45E3, ic = {}, jc = {};
g = K.prototype;
g.setTimeout = function (a) { this.P = a; };
function kc(a, b, c) { a.H = 1; a.i = lc(L(b)); a.j = c; a.I = !0; mc(a, null); }
function mc(a, b) { a.u = q(); M(a); a.l = L(a.i); var c = a.l, d = a.T; Array.isArray(d) || (d = [String(d)]); nc(c.b, "t", d); a.D = 0; a.a = oc(a.g, a.g.C ? b : null); 0 < a.O && (a.F = new Lb(p(a.Ca, a, a.a), a.O)); Nb(a.J, a.a, "readystatechange", a.Wa); b = a.B ? Ba(a.B) : {}; a.j ? (a.m || (a.m = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.a.ba(a.l, a.m, a.j, b)) : (a.m = "GET", a.a.ba(a.l, a.m, null, b)); G(1); Qb(a.c, a.m, a.l, a.f, a.T, a.j); }
g.Wa = function (a) { a = a.target; var b = this.F; b && 3 == N(a) ? b.f() : this.Ca(a); };
g.Ca = function (a) {
    try {
        if (a == this.a)
            a: {
                var b = N(this.a), c = this.a.ua(), d = this.a.X();
                if (!(3 > b || 3 == b && !Ja && !this.a.$())) {
                    this.A || 4 != b || 7 == c || (8 == c || 0 >= d ? G(3) : G(2));
                    pc(this);
                    var e = this.a.X();
                    this.N = e;
                    var f = this.a.$();
                    this.b = 200 == e;
                    Rb(this.c, this.m, this.l, this.f, this.T, b, e);
                    if (this.b) {
                        if (this.V && !this.C) {
                            b: {
                                if (this.a) {
                                    var h, m = this.a;
                                    if ((h = m.a ? m.a.getResponseHeader("X-HTTP-Initial-Response") : null) && !ta(h)) {
                                        var l = h;
                                        break b;
                                    }
                                }
                                l = null;
                            }
                            if (l)
                                F(this.c, this.f, l, "Initial handshake response via X-HTTP-Initial-Response"),
                                    this.C = !0, qc(this, l);
                            else {
                                this.b = !1;
                                this.h = 3;
                                H(12);
                                O(this);
                                rc(this);
                                break a;
                            }
                        }
                        this.I ? (tc(this, b, f), Ja && this.b && 3 == b && (Nb(this.J, this.R, "tick", this.Va), this.R.start())) : (F(this.c, this.f, f, null), qc(this, f));
                        4 == b && O(this);
                        this.b && !this.A && (4 == b ? uc(this.g, this) : (this.b = !1, M(this)));
                    }
                    else
                        400 == e && 0 < f.indexOf("Unknown SID") ? (this.h = 3, H(12)) : (this.h = 0, H(13)), O(this), rc(this);
                }
            }
    }
    catch (t) { }
    finally { }
};
function tc(a, b, c) { for (var d = !0; !a.A && a.D < c.length;) {
    var e = vc(a, c);
    if (e == jc) {
        4 == b && (a.h = 4, H(14), d = !1);
        F(a.c, a.f, null, "[Incomplete Response]");
        break;
    }
    else if (e == ic) {
        a.h = 4;
        H(15);
        F(a.c, a.f, c, "[Invalid Chunk]");
        d = !1;
        break;
    }
    else
        F(a.c, a.f, e, null), qc(a, e);
} 4 == b && 0 == c.length && (a.h = 1, H(16), d = !1); a.b = a.b && d; d ? 0 < c.length && !a.W && (a.W = !0, b = a.g, b.a == a && b.V && !b.F && (b.c.info("Great, no buffering proxy detected. Bytes received: " + c.length), xc(b), b.F = !0)) : (F(a.c, a.f, c, "[Invalid Chunked Response]"), O(a), rc(a)); }
g.Va = function () { if (this.a) {
    var a = N(this.a), b = this.a.$();
    this.D < b.length && (pc(this), tc(this, a, b), this.b && 4 != a && M(this));
} };
function vc(a, b) { var c = a.D, d = b.indexOf("\n", c); if (-1 == d)
    return jc; c = Number(b.substring(c, d)); if (isNaN(c))
    return ic; d += 1; if (d + c > b.length)
    return jc; b = b.substr(d, c); a.D = d + c; return b; }
g.cancel = function () { this.A = !0; O(this); };
function M(a) { a.U = q() + a.P; yc(a, a.P); }
function yc(a, b) { if (null != a.o)
    throw Error("WatchDog timer not null"); a.o = I(p(a.Ua, a), b); }
function pc(a) { a.o && (k.clearTimeout(a.o), a.o = null); }
g.Ua = function () { this.o = null; var a = q(); 0 <= a - this.U ? (Tb(this.c, this.l), 2 != this.H && (G(3), H(17)), O(this), this.h = 2, rc(this)) : yc(this, this.U - a); };
function rc(a) { 0 == a.g.v || a.A || uc(a.g, a); }
function O(a) { pc(a); var b = a.F; b && "function" == typeof b.ja && b.ja(); a.F = null; Ib(a.R); Ob(a.J); a.a && (b = a.a, a.a = null, b.abort(), b.ja()); }
function qc(a, b) {
    try {
        var c = a.g;
        if (0 != c.v && (c.a == a || zc(c.b, a)))
            if (c.I = a.N, !a.C && zc(c.b, a) && 3 == c.v) {
                try {
                    var d = c.ka.a.parse(b);
                }
                catch (sc) {
                    d = null;
                }
                if (Array.isArray(d) && 3 == d.length) {
                    var e = d;
                    if (0 == e[0])
                        a: {
                            if (!c.j) {
                                if (c.a)
                                    if (c.a.u + 3E3 < a.u)
                                        Ac(c), Bc(c);
                                    else
                                        break a;
                                Cc(c);
                                H(18);
                            }
                        }
                    else
                        c.oa = e[1], 0 < c.oa - c.P && 37500 > e[2] && c.H && 0 == c.o && !c.m && (c.m = I(p(c.Ra, c), 6E3));
                    if (1 >= Dc(c.b) && c.ea) {
                        try {
                            c.ea();
                        }
                        catch (sc) { }
                        c.ea = void 0;
                    }
                }
                else
                    P(c, 11);
            }
            else if ((a.C || c.a == a) && Ac(c), !ta(b))
                for (b = d = c.ka.a.parse(b), d = 0; d < b.length; d++)
                    if (e =
                        b[d], c.P = e[0], e = e[1], 2 == c.v)
                        if ("c" == e[0]) {
                            c.J = e[1];
                            c.ga = e[2];
                            var f = e[3];
                            null != f && (c.ha = f, c.c.info("VER=" + c.ha));
                            var h = e[4];
                            null != h && (c.pa = h, c.c.info("SVER=" + c.pa));
                            var m = e[5];
                            if (null != m && "number" === typeof m && 0 < m) {
                                var l = 1.5 * m;
                                c.D = l;
                                c.c.info("backChannelRequestTimeoutMs_=" + l);
                            }
                            l = c;
                            var t = a.a;
                            if (t) {
                                var B = t.a ? t.a.getResponseHeader("X-Client-Wire-Protocol") : null;
                                if (B) {
                                    var z = l.b;
                                    !z.a && (v(B, "spdy") || v(B, "quic") || v(B, "h2")) && (z.f = z.g, z.a = new Set, z.b && (Ec(z, z.b), z.b = null));
                                }
                                if (l.A) {
                                    var qb = t.a ? t.a.getResponseHeader("X-HTTP-Session-Id") :
                                        null;
                                    qb && (l.na = qb, Q(l.B, l.A, qb));
                                }
                            }
                            c.v = 3;
                            c.f && c.f.ta();
                            c.V && (c.N = q() - a.u, c.c.info("Handshake RTT: " + c.N + "ms"));
                            l = c;
                            var va = a;
                            l.la = Fc(l, l.C ? l.ga : null, l.fa);
                            if (va.C) {
                                Gc(l.b, va);
                                var wa = va, wc = l.D;
                                wc && wa.setTimeout(wc);
                                wa.o && (pc(wa), M(wa));
                                l.a = va;
                            }
                            else
                                Hc(l);
                            0 < c.g.length && Ic(c);
                        }
                        else
                            "stop" != e[0] && "close" != e[0] || P(c, 7);
                    else
                        3 == c.v && ("stop" == e[0] || "close" == e[0] ? "stop" == e[0] ? P(c, 7) : Jc(c) : "noop" != e[0] && c.f && c.f.sa(e), c.o = 0);
        G(4);
    }
    catch (sc) { }
}
function Kc(a) { if (a.K && "function" == typeof a.K)
    return a.K(); if ("string" === typeof a)
    return a.split(""); if (ca(a)) {
    for (var b = [], c = a.length, d = 0; d < c; d++)
        b.push(a[d]);
    return b;
} b = []; c = 0; for (d in a)
    b[c++] = a[d]; return a = b; }
function Lc(a, b) { if (a.forEach && "function" == typeof a.forEach)
    a.forEach(b, void 0);
else if (ca(a) || "string" === typeof a)
    oa(a, b, void 0);
else {
    if (a.L && "function" == typeof a.L)
        var c = a.L();
    else if (a.K && "function" == typeof a.K)
        c = void 0;
    else if (ca(a) || "string" === typeof a) {
        c = [];
        for (var d = a.length, e = 0; e < d; e++)
            c.push(e);
    }
    else
        for (e in c = [], d = 0, a)
            c[d++] = e;
    d = Kc(a);
    e = d.length;
    for (var f = 0; f < e; f++)
        b.call(void 0, d[f], c && c[f], a);
} }
function R(a, b) { this.b = {}; this.a = []; this.c = 0; var c = arguments.length; if (1 < c) {
    if (c % 2)
        throw Error("Uneven number of arguments");
    for (var d = 0; d < c; d += 2)
        this.set(arguments[d], arguments[d + 1]);
}
else if (a)
    if (a instanceof R)
        for (c = a.L(), d = 0; d < c.length; d++)
            this.set(c[d], a.get(c[d]));
    else
        for (d in a)
            this.set(d, a[d]); }
g = R.prototype;
g.K = function () { Mc(this); for (var a = [], b = 0; b < this.a.length; b++)
    a.push(this.b[this.a[b]]); return a; };
g.L = function () { Mc(this); return this.a.concat(); };
function Mc(a) { if (a.c != a.a.length) {
    for (var b = 0, c = 0; b < a.a.length;) {
        var d = a.a[b];
        S(a.b, d) && (a.a[c++] = d);
        b++;
    }
    a.a.length = c;
} if (a.c != a.a.length) {
    var e = {};
    for (c = b = 0; b < a.a.length;)
        d = a.a[b], S(e, d) || (a.a[c++] = d, e[d] = 1), b++;
    a.a.length = c;
} }
g.get = function (a, b) { return S(this.b, a) ? this.b[a] : b; };
g.set = function (a, b) { S(this.b, a) || (this.c++, this.a.push(a)); this.b[a] = b; };
g.forEach = function (a, b) { for (var c = this.L(), d = 0; d < c.length; d++) {
    var e = c[d], f = this.get(e);
    a.call(b, f, e, this);
} };
function S(a, b) { return Object.prototype.hasOwnProperty.call(a, b); }
var Nc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
function Oc(a, b) { if (a) {
    a = a.split("&");
    for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="), e = null;
        if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1);
        }
        else
            f = a[c];
        b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
    }
} }
function T(a, b) { this.c = this.j = this.f = ""; this.h = null; this.i = this.g = ""; this.a = !1; if (a instanceof T) {
    this.a = void 0 !== b ? b : a.a;
    Pc(this, a.f);
    this.j = a.j;
    Qc(this, a.c);
    Rc(this, a.h);
    this.g = a.g;
    b = a.b;
    var c = new U;
    c.c = b.c;
    b.a && (c.a = new R(b.a), c.b = b.b);
    Sc(this, c);
    this.i = a.i;
}
else
    a && (c = String(a).match(Nc)) ? (this.a = !!b, Pc(this, c[1] || "", !0), this.j = Tc(c[2] || ""), Qc(this, c[3] || "", !0), Rc(this, c[4]), this.g = Tc(c[5] || "", !0), Sc(this, c[6] || "", !0), this.i = Tc(c[7] || "")) : (this.a = !!b, this.b = new U(null, this.a)); }
T.prototype.toString = function () { var a = [], b = this.f; b && a.push(Uc(b, Vc, !0), ":"); var c = this.c; if (c || "file" == b)
    a.push("//"), (b = this.j) && a.push(Uc(b, Vc, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.h, null != c && a.push(":", String(c)); if (c = this.g)
    this.c && "/" != c.charAt(0) && a.push("/"), a.push(Uc(c, "/" == c.charAt(0) ? Wc : Xc, !0)); (c = this.b.toString()) && a.push("?", c); (c = this.i) && a.push("#", Uc(c, Yc)); return a.join(""); };
function L(a) { return new T(a); }
function Pc(a, b, c) { a.f = c ? Tc(b, !0) : b; a.f && (a.f = a.f.replace(/:$/, "")); }
function Qc(a, b, c) { a.c = c ? Tc(b, !0) : b; }
function Rc(a, b) { if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b)
        throw Error("Bad port number " + b);
    a.h = b;
}
else
    a.h = null; }
function Sc(a, b, c) { b instanceof U ? (a.b = b, Zc(a.b, a.a)) : (c || (b = Uc(b, $c)), a.b = new U(b, a.a)); }
function Q(a, b, c) { a.b.set(b, c); }
function lc(a) { Q(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ q()).toString(36)); return a; }
function ad(a) { return a instanceof T ? L(a) : new T(a, void 0); }
function bd(a, b, c, d) { var e = new T(null, void 0); a && Pc(e, a); b && Qc(e, b); c && Rc(e, c); d && (e.g = d); return e; }
function Tc(a, b) { return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""; }
function Uc(a, b, c) { return "string" === typeof a ? (a = encodeURI(a).replace(b, cd), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null; }
function cd(a) { a = a.charCodeAt(0); return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16); }
var Vc = /[#\/\?@]/g, Xc = /[#\?:]/g, Wc = /[#\?]/g, $c = /[#\?@]/g, Yc = /#/g;
function U(a, b) { this.b = this.a = null; this.c = a || null; this.f = !!b; }
function V(a) { a.a || (a.a = new R, a.b = 0, a.c && Oc(a.c, function (b, c) { a.add(decodeURIComponent(b.replace(/\+/g, " ")), c); })); }
g = U.prototype;
g.add = function (a, b) { V(this); this.c = null; a = W(this, a); var c = this.a.get(a); c || this.a.set(a, c = []); c.push(b); this.b += 1; return this; };
function dd(a, b) { V(a); b = W(a, b); S(a.a.b, b) && (a.c = null, a.b -= a.a.get(b).length, a = a.a, S(a.b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && Mc(a))); }
function ed(a, b) { V(a); b = W(a, b); return S(a.a.b, b); }
g.forEach = function (a, b) { V(this); this.a.forEach(function (c, d) { oa(c, function (e) { a.call(b, e, d, this); }, this); }, this); };
g.L = function () { V(this); for (var a = this.a.K(), b = this.a.L(), c = [], d = 0; d < b.length; d++)
    for (var e = a[d], f = 0; f < e.length; f++)
        c.push(b[d]); return c; };
g.K = function (a) { V(this); var b = []; if ("string" === typeof a)
    ed(this, a) && (b = ra(b, this.a.get(W(this, a))));
else {
    a = this.a.K();
    for (var c = 0; c < a.length; c++)
        b = ra(b, a[c]);
} return b; };
g.set = function (a, b) { V(this); this.c = null; a = W(this, a); ed(this, a) && (this.b -= this.a.get(a).length); this.a.set(a, [b]); this.b += 1; return this; };
g.get = function (a, b) { if (!a)
    return b; a = this.K(a); return 0 < a.length ? String(a[0]) : b; };
function nc(a, b, c) { dd(a, b); 0 < c.length && (a.c = null, a.a.set(W(a, b), sa(c)), a.b += c.length); }
g.toString = function () { if (this.c)
    return this.c; if (!this.a)
    return ""; for (var a = [], b = this.a.L(), c = 0; c < b.length; c++) {
    var d = b[c], e = encodeURIComponent(String(d));
    d = this.K(d);
    for (var f = 0; f < d.length; f++) {
        var h = e;
        "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
        a.push(h);
    }
} return this.c = a.join("&"); };
function W(a, b) { b = String(b); a.f && (b = b.toLowerCase()); return b; }
function Zc(a, b) { b && !a.f && (V(a), a.c = null, a.a.forEach(function (c, d) { var e = d.toLowerCase(); d != e && (dd(this, d), nc(this, e, c)); }, a)); a.f = b; }
function fd(a, b) { this.b = a; this.a = b; }
function gd(a) { this.g = a || hd; k.PerformanceNavigationTiming ? (a = k.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(k.ia && k.ia.ya && k.ia.ya() && k.ia.ya().qb); this.f = a ? this.g : 1; this.a = null; 1 < this.f && (this.a = new Set); this.b = null; this.c = []; }
var hd = 10;
function id(a) { return a.b ? !0 : a.a ? a.a.size >= a.f : !1; }
function Dc(a) { return a.b ? 1 : a.a ? a.a.size : 0; }
function zc(a, b) { return a.b ? a.b == b : a.a ? a.a.has(b) : !1; }
function Ec(a, b) { a.a ? a.a.add(b) : a.b = b; }
function Gc(a, b) { a.b && a.b == b ? a.b = null : a.a && a.a.has(b) && a.a.delete(b); }
gd.prototype.cancel = function () {
    var e_1, _a;
    this.c = jd(this);
    if (this.b)
        this.b.cancel(), this.b = null;
    else if (this.a && 0 !== this.a.size) {
        try {
            for (var _b = __values(this.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var a = _c.value;
                a.cancel();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.a.clear();
    }
};
function jd(a) {
    var e_2, _a;
    if (null != a.b)
        return a.c.concat(a.b.s);
    if (null != a.a && 0 !== a.a.size) {
        var b = a.c;
        try {
            for (var _b = __values(a.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                b = b.concat(c.s);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return b;
    }
    return sa(a.c);
}
function kd() { }
kd.prototype.stringify = function (a) { return k.JSON.stringify(a, void 0); };
kd.prototype.parse = function (a) { return k.JSON.parse(a, void 0); };
function ld() { this.a = new kd; }
function md(a, b, c) { var d = c || ""; try {
    Lc(a, function (e, f) { var h = e; n(e) && (h = vb(e)); b.push(d + f + "=" + encodeURIComponent(h)); });
}
catch (e) {
    throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
} }
function nd(a, b) { var c = new Pb; if (k.Image) {
    var d = new Image;
    d.onload = ka(od, c, d, "TestLoadImage: loaded", !0, b);
    d.onerror = ka(od, c, d, "TestLoadImage: error", !1, b);
    d.onabort = ka(od, c, d, "TestLoadImage: abort", !1, b);
    d.ontimeout = ka(od, c, d, "TestLoadImage: timeout", !1, b);
    k.setTimeout(function () { if (d.ontimeout)
        d.ontimeout(); }, 1E4);
    d.src = a;
}
else
    b(!1); }
function od(a, b, c, d, e) { try {
    b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d);
}
catch (f) { } }
var pd = k.JSON.parse;
function X(a) { D.call(this); this.headers = new R; this.H = a || null; this.b = !1; this.s = this.a = null; this.B = ""; this.h = 0; this.f = ""; this.g = this.A = this.l = this.u = !1; this.o = 0; this.m = null; this.I = qd; this.D = this.F = !1; }
r(X, D);
var qd = "", rd = /^https?$/i, sd = ["POST", "PUT"];
g = X.prototype;
g.ba = function (a, b, c, d) {
    if (this.a)
        throw Error("[goog.net.XhrIo] Object is active with another request=" + this.B + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.B = a;
    this.f = "";
    this.h = 0;
    this.u = !1;
    this.b = !0;
    this.a = new XMLHttpRequest;
    this.s = this.H ? bc(this.H) : bc(fc);
    this.a.onreadystatechange = p(this.za, this);
    try {
        this.A = !0, this.a.open(b, String(a), !0), this.A = !1;
    }
    catch (f) {
        td(this, f);
        return;
    }
    a = c || "";
    var e = new R(this.headers);
    d && Lc(d, function (f, h) { e.set(h, f); });
    d = pa(e.L());
    c = k.FormData && a instanceof k.FormData;
    !(0 <=
        na(sd, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    e.forEach(function (f, h) { this.a.setRequestHeader(h, f); }, this);
    this.I && (this.a.responseType = this.I);
    "withCredentials" in this.a && this.a.withCredentials !== this.F && (this.a.withCredentials = this.F);
    try {
        ud(this), 0 < this.o && ((this.D = vd(this.a)) ? (this.a.timeout = this.o, this.a.ontimeout = p(this.xa, this)) : this.m = Jb(this.xa, this.o, this)), this.l = !0, this.a.send(a), this.l = !1;
    }
    catch (f) {
        td(this, f);
    }
};
function vd(a) { return x && Ra(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout; }
function qa(a) { return "content-type" == a.toLowerCase(); }
g.xa = function () { "undefined" != typeof goog && this.a && (this.f = "Timed out after " + this.o + "ms, aborting", this.h = 8, this.dispatchEvent("timeout"), this.abort(8)); };
function td(a, b) { a.b = !1; a.a && (a.g = !0, a.a.abort(), a.g = !1); a.f = b; a.h = 5; wd(a); xd(a); }
function wd(a) { a.u || (a.u = !0, a.dispatchEvent("complete"), a.dispatchEvent("error")); }
g.abort = function (a) { this.a && this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1, this.h = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), xd(this)); };
g.G = function () { this.a && (this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1), xd(this, !0)); X.S.G.call(this); };
g.za = function () { this.j || (this.A || this.l || this.g ? yd(this) : this.Ta()); };
g.Ta = function () { yd(this); };
function yd(a) {
    if (a.b && "undefined" != typeof goog && (!a.s[1] || 4 != N(a) || 2 != a.X()))
        if (a.l && 4 == N(a))
            Jb(a.za, 0, a);
        else if (a.dispatchEvent("readystatechange"), 4 == N(a)) {
            a.b = !1;
            try {
                var b = a.X();
                a: switch (b) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        var c = !0;
                        break a;
                    default: c = !1;
                }
                var d;
                if (!(d = c)) {
                    var e;
                    if (e = 0 === b) {
                        var f = String(a.B).match(Nc)[1] || null;
                        if (!f && k.self && k.self.location) {
                            var h = k.self.location.protocol;
                            f = h.substr(0, h.length - 1);
                        }
                        e = !rd.test(f ? f.toLowerCase() : "");
                    }
                    d = e;
                }
                if (d)
                    a.dispatchEvent("complete"),
                        a.dispatchEvent("success");
                else {
                    a.h = 6;
                    try {
                        var m = 2 < N(a) ? a.a.statusText : "";
                    }
                    catch (l) {
                        m = "";
                    }
                    a.f = m + " [" + a.X() + "]";
                    wd(a);
                }
            }
            finally {
                xd(a);
            }
        }
}
function xd(a, b) { if (a.a) {
    ud(a);
    var c = a.a, d = a.s[0] ? aa : null;
    a.a = null;
    a.s = null;
    b || a.dispatchEvent("ready");
    try {
        c.onreadystatechange = d;
    }
    catch (e) { }
} }
function ud(a) { a.a && a.D && (a.a.ontimeout = null); a.m && (k.clearTimeout(a.m), a.m = null); }
function N(a) { return a.a ? a.a.readyState : 0; }
g.X = function () { try {
    return 2 < N(this) ? this.a.status : -1;
}
catch (a) {
    return -1;
} };
g.$ = function () { try {
    return this.a ? this.a.responseText : "";
}
catch (a) {
    return "";
} };
g.Na = function (a) { if (this.a) {
    var b = this.a.responseText;
    a && 0 == b.indexOf(a) && (b = b.substring(a.length));
    return pd(b);
} };
g.ua = function () { return this.h; };
g.Qa = function () { return "string" === typeof this.f ? this.f : String(this.f); };
function zd(a) { var b = ""; Aa(a, function (c, d) { b += d; b += ":"; b += c; b += "\r\n"; }); return b; }
function Ad(a, b, c) { a: {
    for (d in c) {
        var d = !1;
        break a;
    }
    d = !0;
} d || (c = zd(c), "string" === typeof a ? (null != c && encodeURIComponent(String(c))) : Q(a, b, c)); }
function Bd(a, b, c) { return c && c.internalChannelParams ? c.internalChannelParams[a] || b : b; }
function Cd(a) {
    this.pa = 0;
    this.g = [];
    this.c = new Pb;
    this.ga = this.la = this.B = this.fa = this.a = this.na = this.A = this.W = this.i = this.O = this.l = null;
    this.La = this.R = 0;
    this.Ia = Bd("failFast", !1, a);
    this.H = this.m = this.j = this.h = this.f = null;
    this.T = !0;
    this.I = this.oa = this.P = -1;
    this.U = this.o = this.u = 0;
    this.Fa = Bd("baseRetryDelayMs", 5E3, a);
    this.Ma = Bd("retryDelaySeedMs", 1E4, a);
    this.Ja = Bd("forwardChannelMaxRetries", 2, a);
    this.ma = Bd("forwardChannelRequestTimeoutMs", 2E4, a);
    this.Ka = a && a.g || void 0;
    this.D = void 0;
    this.C = a && a.supportsCrossDomainXhr ||
        !1;
    this.J = "";
    this.b = new gd(a && a.concurrentRequestLimit);
    this.ka = new ld;
    this.da = a && a.fastHandshake || !1;
    this.Ga = a && a.b || !1;
    a && a.f && (this.c.a = !1);
    a && a.forceLongPolling && (this.T = !1);
    this.V = !this.da && this.T && a && a.c || !1;
    this.ea = void 0;
    this.N = 0;
    this.F = !1;
    this.s = null;
}
g = Cd.prototype;
g.ha = 8;
g.v = 1;
function Jc(a) { Dd(a); if (3 == a.v) {
    var b = a.R++, c = L(a.B);
    Q(c, "SID", a.J);
    Q(c, "RID", b);
    Q(c, "TYPE", "terminate");
    Ed(a, c);
    b = new K(a, a.c, b, void 0);
    b.H = 2;
    b.i = lc(L(c));
    c = !1;
    k.navigator && k.navigator.sendBeacon && (c = k.navigator.sendBeacon(b.i.toString(), ""));
    !c && k.Image && ((new Image).src = b.i, c = !0);
    c || (b.a = oc(b.g, null), b.a.ba(b.i));
    b.u = q();
    M(b);
} Fd(a); }
function Bc(a) { a.a && (xc(a), a.a.cancel(), a.a = null); }
function Dd(a) { Bc(a); a.j && (k.clearTimeout(a.j), a.j = null); Ac(a); a.b.cancel(); a.h && ("number" === typeof a.h && k.clearTimeout(a.h), a.h = null); }
function Gd(a, b) { a.g.push(new fd(a.La++, b)); 3 == a.v && Ic(a); }
function Ic(a) { id(a.b) || a.h || (a.h = !0, Cb(a.Ba, a), a.u = 0); }
function Hd(a, b) { if (Dc(a.b) >= a.b.f - (a.h ? 1 : 0))
    return !1; if (a.h)
    return a.g = b.s.concat(a.g), !0; if (1 == a.v || 2 == a.v || a.u >= (a.Ia ? 0 : a.Ja))
    return !1; a.h = I(p(a.Ba, a, b), Id(a, a.u)); a.u++; return !0; }
g.Ba = function (a) {
    if (this.h)
        if (this.h = null, 1 == this.v) {
            if (!a) {
                this.R = Math.floor(1E5 * Math.random());
                a = this.R++;
                var b = new K(this, this.c, a, void 0), c = this.l;
                this.O && (c ? (c = Ba(c), Da(c, this.O)) : c = this.O);
                null === this.i && (b.B = c);
                var d;
                if (this.da)
                    a: {
                        for (var e = d = 0; e < this.g.length; e++) {
                            b: {
                                var f = this.g[e];
                                if ("__data__" in f.a && (f = f.a.__data__, "string" === typeof f)) {
                                    f = f.length;
                                    break b;
                                }
                                f = void 0;
                            }
                            if (void 0 === f)
                                break;
                            d += f;
                            if (4096 < d) {
                                d = e;
                                break a;
                            }
                            if (4096 === d || e === this.g.length - 1) {
                                d = e + 1;
                                break a;
                            }
                        }
                        d = 1E3;
                    }
                else
                    d = 1E3;
                d = Jd(this, b, d);
                e = L(this.B);
                Q(e, "RID", a);
                Q(e, "CVER", 22);
                this.A && Q(e, "X-HTTP-Session-Id", this.A);
                Ed(this, e);
                this.i && c && Ad(e, this.i, c);
                Ec(this.b, b);
                this.Ga && Q(e, "TYPE", "init");
                this.da ? (Q(e, "$req", d), Q(e, "SID", "null"), b.V = !0, kc(b, e, null)) : kc(b, e, d);
                this.v = 2;
            }
        }
        else
            3 == this.v && (a ? Kd(this, a) : 0 == this.g.length || id(this.b) || Kd(this));
};
function Kd(a, b) { var c; b ? c = b.f : c = a.R++; var d = L(a.B); Q(d, "SID", a.J); Q(d, "RID", c); Q(d, "AID", a.P); Ed(a, d); a.i && a.l && Ad(d, a.i, a.l); c = new K(a, a.c, c, a.u + 1); null === a.i && (c.B = a.l); b && (a.g = b.s.concat(a.g)); b = Jd(a, c, 1E3); c.setTimeout(Math.round(.5 * a.ma) + Math.round(.5 * a.ma * Math.random())); Ec(a.b, c); kc(c, d, b); }
function Ed(a, b) { a.f && Lc({}, function (c, d) { Q(b, d, c); }); }
function Jd(a, b, c) { c = Math.min(a.g.length, c); var d = a.f ? p(a.f.Ha, a.f, a) : null; a: for (var e = a.g, f = -1;;) {
    var h = ["count=" + c];
    -1 == f ? 0 < c ? (f = e[0].b, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
    for (var m = !0, l = 0; l < c; l++) {
        var t = e[l].b, B = e[l].a;
        t -= f;
        if (0 > t)
            f = Math.max(0, e[l].b - 100), m = !1;
        else
            try {
                md(B, h, "req" + t + "_");
            }
            catch (z) {
                d && d(B);
            }
    }
    if (m) {
        d = h.join("&");
        break a;
    }
} a = a.g.splice(0, c); b.s = a; return d; }
function Hc(a) { a.a || a.j || (a.U = 1, Cb(a.Aa, a), a.o = 0); }
function Cc(a) { if (a.a || a.j || 3 <= a.o)
    return !1; a.U++; a.j = I(p(a.Aa, a), Id(a, a.o)); a.o++; return !0; }
g.Aa = function () { this.j = null; Ld(this); if (this.V && !(this.F || null == this.a || 0 >= this.N)) {
    var a = 2 * this.N;
    this.c.info("BP detection timer enabled: " + a);
    this.s = I(p(this.Sa, this), a);
} };
g.Sa = function () { this.s && (this.s = null, this.c.info("BP detection timeout reached."), this.c.info("Buffering proxy detected and switch to long-polling!"), this.H = !1, this.F = !0, Bc(this), Ld(this)); };
function xc(a) { null != a.s && (k.clearTimeout(a.s), a.s = null); }
function Ld(a) { a.a = new K(a, a.c, "rpc", a.U); null === a.i && (a.a.B = a.l); a.a.O = 0; var b = L(a.la); Q(b, "RID", "rpc"); Q(b, "SID", a.J); Q(b, "CI", a.H ? "0" : "1"); Q(b, "AID", a.P); Ed(a, b); Q(b, "TYPE", "xmlhttp"); a.i && a.l && Ad(b, a.i, a.l); a.D && a.a.setTimeout(a.D); var c = a.a; a = a.ga; c.H = 1; c.i = lc(L(b)); c.j = null; c.I = !0; mc(c, a); }
g.Ra = function () { null != this.m && (this.m = null, Bc(this), Cc(this), H(19)); };
function Ac(a) { null != a.m && (k.clearTimeout(a.m), a.m = null); }
function uc(a, b) { var c = null; if (a.a == b) {
    Ac(a);
    xc(a);
    a.a = null;
    var d = 2;
}
else if (zc(a.b, b))
    c = b.s, Gc(a.b, b), d = 1;
else
    return; a.I = b.N; if (0 != a.v)
    if (b.b)
        if (1 == d) {
            c = b.j ? b.j.length : 0;
            b = q() - b.u;
            var e = a.u;
            d = Vb();
            d.dispatchEvent(new Yb(d, c, b, e));
            Ic(a);
        }
        else
            Hc(a);
    else if (e = b.h, 3 == e || 0 == e && 0 < a.I || !(1 == d && Hd(a, b) || 2 == d && Cc(a)))
        switch (c && 0 < c.length && (b = a.b, b.c = b.c.concat(c)), e) {
            case 1:
                P(a, 5);
                break;
            case 4:
                P(a, 10);
                break;
            case 3:
                P(a, 6);
                break;
            default: P(a, 2);
        } }
function Id(a, b) { var c = a.Fa + Math.floor(Math.random() * a.Ma); a.f || (c *= 2); return c * b; }
function P(a, b) { a.c.info("Error code " + b); if (2 == b) {
    var c = null;
    a.f && (c = null);
    var d = p(a.Xa, a);
    c || (c = new T("//www.google.com/images/cleardot.gif"), k.location && "http" == k.location.protocol || Pc(c, "https"), lc(c));
    nd(c.toString(), d);
}
else
    H(2); a.v = 0; a.f && a.f.ra(b); Fd(a); Dd(a); }
g.Xa = function (a) { a ? (this.c.info("Successfully pinged google.com"), H(2)) : (this.c.info("Failed to ping google.com"), H(1)); };
function Fd(a) { a.v = 0; a.I = -1; if (a.f) {
    if (0 != jd(a.b).length || 0 != a.g.length)
        a.b.c.length = 0, sa(a.g), a.g.length = 0;
    a.f.qa();
} }
function Fc(a, b, c) { var d = ad(c); if ("" != d.c)
    b && Qc(d, b + "." + d.c), Rc(d, d.h);
else {
    var e = k.location;
    d = bd(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
} a.W && Aa(a.W, function (f, h) { Q(d, h, f); }); b = a.A; c = a.na; b && c && Q(d, b, c); Q(d, "VER", a.ha); Ed(a, d); return d; }
function oc(a, b) { if (b && !a.C)
    throw Error("Can't create secondary domain capable XhrIo object."); b = new X(a.Ka); b.F = a.C; return b; }
function Md() { }
g = Md.prototype;
g.ta = function () { };
g.sa = function () { };
g.ra = function () { };
g.qa = function () { };
g.Ha = function () { };
function Nd() { if (x && !(10 <= Number(Ua)))
    throw Error("Environmental error: no available transport."); }
Nd.prototype.a = function (a, b) { return new Y(a, b); };
function Y(a, b) {
    D.call(this);
    this.a = new Cd(b);
    this.l = a;
    this.b = b && b.messageUrlParams || null;
    a = b && b.messageHeaders || null;
    b && b.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = { "X-Client-Protocol": "webchannel" });
    this.a.l = a;
    a = b && b.initMessageHeaders || null;
    b && b.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b.messageContentType : a = { "X-WebChannel-Content-Type": b.messageContentType });
    b && b.a && (a ? a["X-WebChannel-Client-Profile"] = b.a : a = { "X-WebChannel-Client-Profile": b.a });
    this.a.O =
        a;
    (a = b && b.httpHeadersOverwriteParam) && !ta(a) && (this.a.i = a);
    this.h = b && b.supportsCrossDomainXhr || !1;
    this.g = b && b.sendRawJson || !1;
    (b = b && b.httpSessionIdParam) && !ta(b) && (this.a.A = b, a = this.b, null !== a && b in a && (a = this.b, b in a && delete a[b]));
    this.f = new Z(this);
}
r(Y, D);
g = Y.prototype;
g.addEventListener = function (a, b, c, d) { Y.S.addEventListener.call(this, a, b, c, d); };
g.removeEventListener = function (a, b, c, d) { Y.S.removeEventListener.call(this, a, b, c, d); };
g.Oa = function () { this.a.f = this.f; this.h && (this.a.C = !0); var a = this.a, b = this.l, c = this.b || void 0; H(0); a.fa = b; a.W = c || {}; a.H = a.T; a.B = Fc(a, null, a.fa); Ic(a); };
g.close = function () { Jc(this.a); };
g.Pa = function (a) { if ("string" === typeof a) {
    var b = {};
    b.__data__ = a;
    Gd(this.a, b);
}
else
    this.g ? (b = {}, b.__data__ = vb(a), Gd(this.a, b)) : Gd(this.a, a); };
g.G = function () { this.a.f = null; delete this.f; Jc(this.a); delete this.a; Y.S.G.call(this); };
function Od(a) { dc.call(this); var b = a.__sm__; if (b) {
    a: {
        for (var c in b) {
            a = c;
            break a;
        }
        a = void 0;
    }
    (this.c = a) ? (a = this.c, this.data = null !== b && a in b ? b[a] : void 0) : this.data = b;
}
else
    this.data = a; }
r(Od, dc);
function Pd() { ec.call(this); this.status = 1; }
r(Pd, ec);
function Z(a) { this.a = a; }
r(Z, Md);
Z.prototype.ta = function () { this.a.dispatchEvent("a"); };
Z.prototype.sa = function (a) { this.a.dispatchEvent(new Od(a)); };
Z.prototype.ra = function (a) { this.a.dispatchEvent(new Pd(a)); };
Z.prototype.qa = function () { this.a.dispatchEvent("b"); }; /*

 Copyright 2017 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
Nd.prototype.createWebChannel = Nd.prototype.a;
Y.prototype.send = Y.prototype.Pa;
Y.prototype.open = Y.prototype.Oa;
Y.prototype.close = Y.prototype.close;
Zb.NO_ERROR = 0;
Zb.TIMEOUT = 8;
Zb.HTTP_ERROR = 6;
$b.COMPLETE = "complete";
cc.EventType = J;
J.OPEN = "a";
J.CLOSE = "b";
J.ERROR = "c";
J.MESSAGE = "d";
D.prototype.listen = D.prototype.va;
X.prototype.listenOnce = X.prototype.wa;
X.prototype.getLastError = X.prototype.Qa;
X.prototype.getLastErrorCode = X.prototype.ua;
X.prototype.getStatus = X.prototype.X;
X.prototype.getResponseJson = X.prototype.Na;
X.prototype.getResponseText = X.prototype.$;
X.prototype.send = X.prototype.ba;
var esm = { createWebChannelTransport: function () { return new Nd; }, ErrorCode: Zb, EventType: $b, WebChannel: cc, XhrIo: X };
var esm_1 = esm.createWebChannelTransport;
var esm_2 = esm.ErrorCode;
var esm_3 = esm.EventType;
var esm_4 = esm.WebChannel;
var esm_5 = esm.XhrIo;

/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */
var Component = /** @class */ (function () {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */
    function Component(name, instanceFactory, type) {
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */
        this.serviceProps = {};
        this.instantiationMode = "LAZY" /* LAZY */;
    }
    Component.prototype.setInstantiationMode = function (mode) {
        this.instantiationMode = mode;
        return this;
    };
    Component.prototype.setMultipleInstances = function (multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    };
    Component.prototype.setServiceProps = function (props) {
        this.serviceProps = props;
        return this;
    };
    return Component;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var w$1 = new Logger("@firebase/firestore");

// Helper methods are needed because variables can't be exported as read/write
function b() {
    return w$1.logLevel;
}

function E$1(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    if (w$1.logLevel <= LogLevel.DEBUG) {
        var i = e.map(A$1);
        w$1.debug.apply(w$1, __spreadArrays([ "Firestore (7.19.0): " + t ], i));
    }
}

function I$1(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    if (w$1.logLevel <= LogLevel.ERROR) {
        var i = e.map(A$1);
        w$1.error.apply(w$1, __spreadArrays([ "Firestore (7.19.0): " + t ], i));
    }
}

function N$1(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    if (w$1.logLevel <= LogLevel.WARN) {
        var i = e.map(A$1);
        w$1.warn.apply(w$1, __spreadArrays([ "Firestore (7.19.0): " + t ], i));
    }
}

/**
 * Converts an additional log parameter to a string representation.
 */ function A$1(t) {
    if ("string" == typeof t) return t;
    try {
        return e = t, JSON.stringify(e);
    } catch (e) {
        // Converting to JSON failed, just log the object directly
        return t;
    }
    /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /** Formats an object as a JSON string, suitable for logging. */    var e;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */ function T$1(t) {
    void 0 === t && (t = "Unexpected state");
    // Log the failure in addition to throw an exception, just in case the
    // exception is swallowed.
        var e = "FIRESTORE (7.19.0) INTERNAL ASSERTION FAILED: " + t;
    // NOTE: We don't use FirestoreError here because these are internal failures
    // that cannot be handled by the user. (Also it would create a circular
    // dependency between the error and assert modules which doesn't work.)
        throw I$1(e), new Error(e)
    /**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 *
 * Messages are stripped in production builds.
 */;
}

function k$1(t, e) {
    t || T$1();
}

/**
 * Casts `obj` to `T`. In non-production builds, verifies that `obj` is an
 * instance of `T` before casting.
 */ function R$1(t, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
e) {
    return t;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Generates `nBytes` of random bytes.
 *
 * If `nBytes < 0` , an error will be thrown.
 */ function D$1(t) {
    // Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
    var e = 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "undefined" != typeof self && (self.crypto || self.msCrypto), n = new Uint8Array(t);
    if (e && "function" == typeof e.getRandomValues) e.getRandomValues(n); else 
    // Falls back to Math.random
    for (var r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
    return n;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _ = /** @class */ function() {
    function t() {}
    return t.t = function() {
        for (
        // Alphanumeric characters
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length, n = ""
        // The largest byte value that is a multiple of `char.length`.
        ; n.length < 20; ) for (var r = D$1(40), i = 0; i < r.length; ++i) 
        // Only accept values that are [0, maxMultiple), this ensures they can
        // be evenly mapped to indices of `chars` via a modulo operation.
        n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
        return n;
    }, t;
}();

function V$1(t, e) {
    return t < e ? -1 : t > e ? 1 : 0;
}

/** Helper to compare arrays using isEqual(). */ function S$1(t, e, n) {
    return t.length === e.length && t.every((function(t, r) {
        return n(t, e[r]);
    }));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var L$1 = 
/**
     * Constructs a DatabaseInfo using the provided host, databaseId and
     * persistenceKey.
     *
     * @param databaseId The database to use.
     * @param persistenceKey A unique identifier for this Firestore's local
     * storage (used in conjunction with the databaseId).
     * @param host The Firestore backend host to connect to.
     * @param ssl Whether to use SSL when connecting.
     * @param forceLongPolling Whether to use the forceLongPolling option
     * when using WebChannel as the network transport.
     */
function(t, e, n, r, i) {
    this.s = t, this.persistenceKey = e, this.host = n, this.ssl = r, this.forceLongPolling = i;
}, P$1 = /** @class */ function() {
    function t(t, e) {
        this.projectId = t, this.database = e || "(default)";
    }
    return Object.defineProperty(t.prototype, "i", {
        get: function() {
            return "(default)" === this.database;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        return e instanceof t && e.projectId === this.projectId && e.database === this.database;
    }, t.prototype.o = function(t) {
        return V$1(this.projectId, t.projectId) || V$1(this.database, t.database);
    }, t;
}();

/** The default database name for a project. */
/** Represents the database ID a Firestore client is associated with. */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function O$1(t) {
    var e = 0;
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
    return e;
}

function U$1(t, e) {
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}

function q$1(t) {
    for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
    return !0;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A map implementation that uses objects as keys. Objects must have an
 * associated equals function and must be immutable. Entries in the map are
 * stored together with the key being produced from the mapKeyFn. This map
 * automatically handles collisions of keys.
 */ var C$1 = /** @class */ function() {
    function t(t, e) {
        this.h = t, this.u = e, 
        /**
             * The inner map for a key -> value pair. Due to the possibility of
             * collisions we keep a list of entries that we do a linear search through
             * to find an actual match. Note that collisions should be rare, so we still
             * expect near constant time lookups in practice.
             */
        this.l = {}
        /** Get a value for this key, or undefined if it does not exist. */;
    }
    return t.prototype.get = function(t) {
        var e = this.h(t), n = this.l[e];
        if (void 0 !== n) for (var r = 0, i = n; r < i.length; r++) {
            var o = i[r], s = o[0], u = o[1];
            if (this.u(s, t)) return u;
        }
    }, t.prototype.has = function(t) {
        return void 0 !== this.get(t);
    }, 
    /** Put this key and value in the map. */ t.prototype.set = function(t, e) {
        var n = this.h(t), r = this.l[n];
        if (void 0 !== r) {
            for (var i = 0; i < r.length; i++) if (this.u(r[i][0], t)) return void (r[i] = [ t, e ]);
            r.push([ t, e ]);
        } else this.l[n] = [ [ t, e ] ];
    }, 
    /**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */
    t.prototype.delete = function(t) {
        var e = this.h(t), n = this.l[e];
        if (void 0 === n) return !1;
        for (var r = 0; r < n.length; r++) if (this.u(n[r][0], t)) return 1 === n.length ? delete this.l[e] : n.splice(r, 1), 
        !0;
        return !1;
    }, t.prototype.forEach = function(t) {
        U$1(this.l, (function(e, n) {
            for (var r = 0, i = n; r < i.length; r++) {
                var o = i[r], s = o[0], u = o[1];
                t(s, u);
            }
        }));
    }, t.prototype._ = function() {
        return q$1(this.l);
    }, t;
}(), M$1 = {
    // Causes are copied from:
    // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
    /** Not an error; returned on success. */
    OK: "ok",
    /** The operation was cancelled (typically by the caller). */
    CANCELLED: "cancelled",
    /** Unknown error or an error from a different error domain. */
    UNKNOWN: "unknown",
    /**
     * Client specified an invalid argument. Note that this differs from
     * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
     * problematic regardless of the state of the system (e.g., a malformed file
     * name).
     */
    INVALID_ARGUMENT: "invalid-argument",
    /**
     * Deadline expired before operation could complete. For operations that
     * change the state of the system, this error may be returned even if the
     * operation has completed successfully. For example, a successful response
     * from a server could have been delayed long enough for the deadline to
     * expire.
     */
    DEADLINE_EXCEEDED: "deadline-exceeded",
    /** Some requested entity (e.g., file or directory) was not found. */
    NOT_FOUND: "not-found",
    /**
     * Some entity that we attempted to create (e.g., file or directory) already
     * exists.
     */
    ALREADY_EXISTS: "already-exists",
    /**
     * The caller does not have permission to execute the specified operation.
     * PERMISSION_DENIED must not be used for rejections caused by exhausting
     * some resource (use RESOURCE_EXHAUSTED instead for those errors).
     * PERMISSION_DENIED must not be used if the caller can not be identified
     * (use UNAUTHENTICATED instead for those errors).
     */
    PERMISSION_DENIED: "permission-denied",
    /**
     * The request does not have valid authentication credentials for the
     * operation.
     */
    UNAUTHENTICATED: "unauthenticated",
    /**
     * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
     * entire file system is out of space.
     */
    RESOURCE_EXHAUSTED: "resource-exhausted",
    /**
     * Operation was rejected because the system is not in a state required for
     * the operation's execution. For example, directory to be deleted may be
     * non-empty, an rmdir operation is applied to a non-directory, etc.
     *
     * A litmus test that may help a service implementor in deciding
     * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
     *  (a) Use UNAVAILABLE if the client can retry just the failing call.
     *  (b) Use ABORTED if the client should retry at a higher-level
     *      (e.g., restarting a read-modify-write sequence).
     *  (c) Use FAILED_PRECONDITION if the client should not retry until
     *      the system state has been explicitly fixed. E.g., if an "rmdir"
     *      fails because the directory is non-empty, FAILED_PRECONDITION
     *      should be returned since the client should not retry unless
     *      they have first fixed up the directory by deleting files from it.
     *  (d) Use FAILED_PRECONDITION if the client performs conditional
     *      REST Get/Update/Delete on a resource and the resource on the
     *      server does not match the condition. E.g., conflicting
     *      read-modify-write on the same resource.
     */
    FAILED_PRECONDITION: "failed-precondition",
    /**
     * The operation was aborted, typically due to a concurrency issue like
     * sequencer check failures, transaction aborts, etc.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    ABORTED: "aborted",
    /**
     * Operation was attempted past the valid range. E.g., seeking or reading
     * past end of file.
     *
     * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
     * if the system state changes. For example, a 32-bit file system will
     * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
     * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
     * an offset past the current file size.
     *
     * There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
     * when it applies so that callers who are iterating through a space can
     * easily look for an OUT_OF_RANGE error to detect when they are done.
     */
    OUT_OF_RANGE: "out-of-range",
    /** Operation is not implemented or not supported/enabled in this service. */
    UNIMPLEMENTED: "unimplemented",
    /**
     * Internal errors. Means some invariants expected by underlying System has
     * been broken. If you see one of these errors, Something is very broken.
     */
    INTERNAL: "internal",
    /**
     * The service is currently unavailable. This is a most likely a transient
     * condition and may be corrected by retrying with a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    UNAVAILABLE: "unavailable",
    /** Unrecoverable data loss or corruption. */
    DATA_LOSS: "data-loss"
}, F$1 = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this, n) || this).code = t, r.message = n, r.name = "FirebaseError", 
        // HACK: We write a toString property directly because Error is not a real
        // class and so inheritance does not work correctly. We could alternatively
        // do the same "back-door inheritance" trick that FirebaseError does.
        r.toString = function() {
            return r.name + ": [code=" + r.code + "]: " + r.message;
        }, r;
    }
    return __extends(n, e), n;
}(Error), x$1 = /** @class */ function() {
    function t(t, e) {
        if (this.seconds = t, this.nanoseconds = e, e < 0) throw new F$1(M$1.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (e >= 1e9) throw new F$1(M$1.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (t < -62135596800) throw new F$1(M$1.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
        // This will break in the year 10,000.
                if (t >= 253402300800) throw new F$1(M$1.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
    }
    return t.now = function() {
        return t.fromMillis(Date.now());
    }, t.fromDate = function(e) {
        return t.fromMillis(e.getTime());
    }, t.fromMillis = function(e) {
        var n = Math.floor(e / 1e3);
        return new t(n, 1e6 * (e - 1e3 * n));
    }, t.prototype.toDate = function() {
        return new Date(this.toMillis());
    }, t.prototype.toMillis = function() {
        return 1e3 * this.seconds + this.nanoseconds / 1e6;
    }, t.prototype.m = function(t) {
        return this.seconds === t.seconds ? V$1(this.nanoseconds, t.nanoseconds) : V$1(this.seconds, t.seconds);
    }, t.prototype.isEqual = function(t) {
        return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
    }, t.prototype.toString = function() {
        return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
    }, t.prototype.toJSON = function() {
        return {
            seconds: this.seconds,
            nanoseconds: this.nanoseconds
        };
    }, t.prototype.valueOf = function() {
        // This method returns a string of the form <seconds>.<nanoseconds> where <seconds> is
        // translated to have a non-negative value and both <seconds> and <nanoseconds> are left-padded
        // with zeroes to be a consistent length. Strings with this format then have a lexiographical
        // ordering that matches the expected ordering. The <seconds> translation is done to avoid
        // having a leading negative sign (i.e. a leading '-' character) in its string representation,
        // which would affect its lexiographical ordering.
        var t = this.seconds - -62135596800;
        // Note: Up to 12 decimal digits are required to represent all valid 'seconds' values.
                return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
    }, t;
}(), j = /** @class */ function() {
    function t(t) {
        this.timestamp = t;
    }
    return t.T = function(e) {
        return new t(e);
    }, t.min = function() {
        return new t(new x$1(0, 0));
    }, t.prototype.o = function(t) {
        return this.timestamp.m(t.timestamp);
    }, t.prototype.isEqual = function(t) {
        return this.timestamp.isEqual(t.timestamp);
    }, 
    /** Returns a number representation of the version for use in spec tests. */ t.prototype.I = function() {
        // Convert to microseconds.
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
    }, t.prototype.toString = function() {
        return "SnapshotVersion(" + this.timestamp.toString() + ")";
    }, t.prototype.R = function() {
        return this.timestamp;
    }, t;
}(), G$1 = /** @class */ function() {
    function t(t, e, n) {
        void 0 === e ? e = 0 : e > t.length && T$1(), void 0 === n ? n = t.length - e : n > t.length - e && T$1(), 
        this.segments = t, this.offset = e, this.A = n;
    }
    return Object.defineProperty(t.prototype, "length", {
        get: function() {
            return this.A;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        return 0 === t.P(this, e);
    }, t.prototype.child = function(e) {
        var n = this.segments.slice(this.offset, this.limit());
        return e instanceof t ? e.forEach((function(t) {
            n.push(t);
        })) : n.push(e), this.V(n);
    }, 
    /** The index of one past the last segment of the path. */ t.prototype.limit = function() {
        return this.offset + this.length;
    }, t.prototype.p = function(t) {
        return t = void 0 === t ? 1 : t, this.V(this.segments, this.offset + t, this.length - t);
    }, t.prototype.g = function() {
        return this.V(this.segments, this.offset, this.length - 1);
    }, t.prototype.v = function() {
        return this.segments[this.offset];
    }, t.prototype.S = function() {
        return this.get(this.length - 1);
    }, t.prototype.get = function(t) {
        return this.segments[this.offset + t];
    }, t.prototype._ = function() {
        return 0 === this.length;
    }, t.prototype.C = function(t) {
        if (t.length < this.length) return !1;
        for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }, t.prototype.D = function(t) {
        if (this.length + 1 !== t.length) return !1;
        for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }, t.prototype.forEach = function(t) {
        for (var e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e]);
    }, t.prototype.F = function() {
        return this.segments.slice(this.offset, this.limit());
    }, t.P = function(t, e) {
        for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
            var i = t.get(r), o = e.get(r);
            if (i < o) return -1;
            if (i > o) return 1;
        }
        return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
    }, t;
}(), B = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return __extends(n, e), n.prototype.V = function(t, e, r) {
        return new n(t, e, r);
    }, n.prototype.N = function() {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        return this.F().join("/");
    }, n.prototype.toString = function() {
        return this.N();
    }, 
    /**
     * Creates a resource path from the given slash-delimited string.
     */
    n.$ = function(t) {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        if (t.indexOf("//") >= 0) throw new F$1(M$1.INVALID_ARGUMENT, "Invalid path (" + t + "). Paths must not contain // in them.");
        // We may still have an empty segment at the beginning or end if they had a
        // leading or trailing slash (which we allow).
                return new n(t.split("/").filter((function(t) {
            return t.length > 0;
        })));
    }, n.k = function() {
        return new n([]);
    }, n;
}(G$1), z = /^[_a-zA-Z][_a-zA-Z0-9]*$/, $ = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return __extends(n, e), n.prototype.V = function(t, e, r) {
        return new n(t, e, r);
    }, 
    /**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */
    n.O = function(t) {
        return z.test(t);
    }, n.prototype.N = function() {
        return this.F().map((function(t) {
            return t = t.replace("\\", "\\\\").replace("`", "\\`"), n.O(t) || (t = "`" + t + "`"), 
            t;
        })).join(".");
    }, n.prototype.toString = function() {
        return this.N();
    }, 
    /**
     * Returns true if this field references the key of a document.
     */
    n.prototype.L = function() {
        return 1 === this.length && "__name__" === this.get(0);
    }, 
    /**
     * The field designating the key of a document.
     */
    n.M = function() {
        return new n([ "__name__" ]);
    }, 
    /**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */
    n.q = function(t) {
        for (var e = [], r = "", i = 0, o = function() {
            if (0 === r.length) throw new F$1(M$1.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
            e.push(r), r = "";
        }, s = !1; i < t.length; ) {
            var u = t[i];
            if ("\\" === u) {
                if (i + 1 === t.length) throw new F$1(M$1.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
                var a = t[i + 1];
                if ("\\" !== a && "." !== a && "`" !== a) throw new F$1(M$1.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                r += a, i += 2;
            } else "`" === u ? (s = !s, i++) : "." !== u || s ? (r += u, i++) : (o(), i++);
        }
        if (o(), s) throw new F$1(M$1.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
        return new n(e);
    }, n.k = function() {
        return new n([]);
    }, n;
}(G$1), Q$1 = /** @class */ function() {
    function t(t) {
        this.path = t;
    }
    return t.U = function(e) {
        return new t(B.$(e));
    }, t.B = function(e) {
        return new t(B.$(e).p(5));
    }, 
    /** Returns true if the document is in the specified collectionId. */ t.prototype.W = function(t) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
    }, t.prototype.isEqual = function(t) {
        return null !== t && 0 === B.P(this.path, t.path);
    }, t.prototype.toString = function() {
        return this.path.toString();
    }, t.P = function(t, e) {
        return B.P(t.path, e.path);
    }, t.j = function(t) {
        return t.length % 2 == 0;
    }, 
    /**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments The segments of the path to the document
     * @return A new instance of DocumentKey
     */
    t.G = function(e) {
        return new t(new B(e.slice()));
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns whether a variable is either undefined or null.
 */
function W$1(t) {
    return null == t;
}

/** Returns whether the value represents -0. */ function Y$1(t) {
    // Detect if the value is -0.0. Based on polyfill from
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    return -0 === t && 1 / t == -1 / 0;
}

/**
 * Returns whether a value is an integer and in the safe integer range
 * @param value The value to test for being an integer and in the safe range
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Visible for testing
var H$1 = function(t, e, n, r, i, o, s) {
    void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
    void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), 
    this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = r, this.limit = i, 
    this.startAt = o, this.endAt = s, this.K = null;
};

/**
 * Initializes a Target with a path and optional additional query constraints.
 * Path must currently be empty if this is a collection group query.
 *
 * NOTE: you should always construct `Target` from `Query.toTarget` instead of
 * using this factory method, because `Query` provides an implicit `orderBy`
 * property.
 */ function J$1(t, e, n, r, i, o, s) {
    return void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
    void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), 
    new H$1(t, e, n, r, i, o, s);
}

function K$1(t) {
    var e = R$1(t);
    if (null === e.K) {
        var n = e.path.N();
        null !== e.collectionGroup && (n += "|cg:" + e.collectionGroup), n += "|f:", n += e.filters.map((function(t) {
            return function(t) {
                // TODO(b/29183165): Technically, this won't be unique if two values have
                // the same description, such as the int 3 and the string "3". So we should
                // add the types in here somehow, too.
                return t.field.N() + t.op.toString() + Gt(t.value);
            }(t);
        })).join(","), n += "|ob:", n += e.orderBy.map((function(t) {
            return (e = t).field.N() + e.dir;
            var e;
        })).join(","), W$1(e.limit) || (n += "|l:", n += e.limit), e.startAt && (n += "|lb:", 
        n += Vn(e.startAt)), e.endAt && (n += "|ub:", n += Vn(e.endAt)), e.K = n;
    }
    return e.K;
}

function Z$1(t, e) {
    if (t.limit !== e.limit) return !1;
    if (t.orderBy.length !== e.orderBy.length) return !1;
    for (var n = 0; n < t.orderBy.length; n++) if (!Un(t.orderBy[n], e.orderBy[n])) return !1;
    if (t.filters.length !== e.filters.length) return !1;
    for (var r = 0; r < t.filters.length; r++) if (i = t.filters[r], o = e.filters[r], 
    i.op !== o.op || !i.field.isEqual(o.field) || !Mt(i.value, o.value)) return !1;
    var i, o;
    return t.collectionGroup === e.collectionGroup && !!t.path.isEqual(e.path) && !!Ln(t.startAt, e.startAt) && Ln(t.endAt, e.endAt);
}

function X$1(t) {
    return Q$1.j(t.path) && null === t.collectionGroup && 0 === t.filters.length;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Converts a Base64 encoded string to a binary string. */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 */ var tt = /** @class */ function() {
    function t(t) {
        this.H = t;
    }
    return t.fromBase64String = function(e) {
        return new t(atob(e));
    }, t.fromUint8Array = function(e) {
        return new t(
        /**
 * Helper function to convert an Uint8array to a binary string.
 */
        function(t) {
            for (var e = "", n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);
            return e;
        }(e));
    }, t.prototype.toBase64 = function() {
        return t = this.H, btoa(t);
        /** Converts a binary string to a Base64 encoded string. */        var t;
        /** True if and only if the Base64 conversion functions are available. */    }, 
    t.prototype.toUint8Array = function() {
        return function(t) {
            for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
            return e;
        }(this.H);
    }, t.prototype.Y = function() {
        return 2 * this.H.length;
    }, t.prototype.o = function(t) {
        return V$1(this.H, t.H);
    }, t.prototype.isEqual = function(t) {
        return this.H === t.H;
    }, t;
}();

tt.J = new tt("");

var et, nt, rt = /** @class */ function() {
    function t(
    /** The target being listened to. */
    t, 
    /**
     * The target ID to which the target corresponds; Assigned by the
     * LocalStore for user listens and by the SyncEngine for limbo watches.
     */
    e, 
    /** The purpose of the target. */
    n, 
    /**
     * The sequence number of the last transaction during which this target data
     * was modified.
     */
    r, 
    /** The latest snapshot version seen for this target. */
    i
    /**
     * The maximum snapshot version at which the associated view
     * contained no limbo documents.
     */ , o
    /**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */ , s) {
        void 0 === i && (i = j.min()), void 0 === o && (o = j.min()), void 0 === s && (s = tt.J), 
        this.target = t, this.targetId = e, this.X = n, this.sequenceNumber = r, this.Z = i, 
        this.lastLimboFreeSnapshotVersion = o, this.resumeToken = s;
    }
    /** Creates a new target data instance with an updated sequence number. */    return t.prototype.tt = function(e) {
        return new t(this.target, this.targetId, this.X, e, this.Z, this.lastLimboFreeSnapshotVersion, this.resumeToken);
    }, 
    /**
     * Creates a new target data instance with an updated resume token and
     * snapshot version.
     */
    t.prototype.et = function(e, n) {
        return new t(this.target, this.targetId, this.X, this.sequenceNumber, n, this.lastLimboFreeSnapshotVersion, e);
    }, 
    /**
     * Creates a new target data instance with an updated last limbo free
     * snapshot version number.
     */
    t.prototype.nt = function(e) {
        return new t(this.target, this.targetId, this.X, this.sequenceNumber, this.Z, e, this.resumeToken);
    }, t;
}(), it = 
// TODO(b/33078163): just use simplest form of existence filter for now
function(t) {
    this.count = t;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */
function ot(t) {
    switch (t) {
      case M$1.OK:
        return T$1();

      case M$1.CANCELLED:
      case M$1.UNKNOWN:
      case M$1.DEADLINE_EXCEEDED:
      case M$1.RESOURCE_EXHAUSTED:
      case M$1.INTERNAL:
      case M$1.UNAVAILABLE:
 // Unauthenticated means something went wrong with our token and we need
        // to retry with new credentials which will happen automatically.
              case M$1.UNAUTHENTICATED:
        return !1;

      case M$1.INVALID_ARGUMENT:
      case M$1.NOT_FOUND:
      case M$1.ALREADY_EXISTS:
      case M$1.PERMISSION_DENIED:
      case M$1.FAILED_PRECONDITION:
 // Aborted might be retried in some scenarios, but that is dependant on
        // the context and should handled individually by the calling code.
        // See https://cloud.google.com/apis/design/errors.
              case M$1.ABORTED:
      case M$1.OUT_OF_RANGE:
      case M$1.UNIMPLEMENTED:
      case M$1.DATA_LOSS:
        return !0;

      default:
        return T$1();
    }
}

/**
 * Determines whether an error code represents a permanent error when received
 * in response to a write operation.
 *
 * Write operations must be handled specially because as of b/119437764, ABORTED
 * errors on the write stream should be retried too (even though ABORTED errors
 * are not generally retryable).
 *
 * Note that during the initial handshake on the write stream an ABORTED error
 * signals that we should discard our stream token (i.e. it is permanent). This
 * means a handshake error should be classified with isPermanentError, above.
 */
/**
 * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
 * are not the same as HTTP status codes.
 *
 * @returns The Code equivalent to the given GRPC status code. Fails if there
 *     is no match.
 */ function st(t) {
    if (void 0 === t) 
    // This shouldn't normally happen, but in certain error cases (like trying
    // to send invalid proto messages) we may get an error with no GRPC code.
    return I$1("GRPC error has no .code"), M$1.UNKNOWN;
    switch (t) {
      case et.OK:
        return M$1.OK;

      case et.CANCELLED:
        return M$1.CANCELLED;

      case et.UNKNOWN:
        return M$1.UNKNOWN;

      case et.DEADLINE_EXCEEDED:
        return M$1.DEADLINE_EXCEEDED;

      case et.RESOURCE_EXHAUSTED:
        return M$1.RESOURCE_EXHAUSTED;

      case et.INTERNAL:
        return M$1.INTERNAL;

      case et.UNAVAILABLE:
        return M$1.UNAVAILABLE;

      case et.UNAUTHENTICATED:
        return M$1.UNAUTHENTICATED;

      case et.INVALID_ARGUMENT:
        return M$1.INVALID_ARGUMENT;

      case et.NOT_FOUND:
        return M$1.NOT_FOUND;

      case et.ALREADY_EXISTS:
        return M$1.ALREADY_EXISTS;

      case et.PERMISSION_DENIED:
        return M$1.PERMISSION_DENIED;

      case et.FAILED_PRECONDITION:
        return M$1.FAILED_PRECONDITION;

      case et.ABORTED:
        return M$1.ABORTED;

      case et.OUT_OF_RANGE:
        return M$1.OUT_OF_RANGE;

      case et.UNIMPLEMENTED:
        return M$1.UNIMPLEMENTED;

      case et.DATA_LOSS:
        return M$1.DATA_LOSS;

      default:
        return T$1();
    }
}

/**
 * Converts an HTTP response's error status to the equivalent error code.
 *
 * @param status An HTTP error response status ("FAILED_PRECONDITION",
 * "UNKNOWN", etc.)
 * @returns The equivalent Code. Non-matching responses are mapped to
 *     Code.UNKNOWN.
 */ (nt = et || (et = {}))[nt.OK = 0] = "OK", nt[nt.CANCELLED = 1] = "CANCELLED", 
nt[nt.UNKNOWN = 2] = "UNKNOWN", nt[nt.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", 
nt[nt.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", nt[nt.NOT_FOUND = 5] = "NOT_FOUND", 
nt[nt.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", nt[nt.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", 
nt[nt.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", nt[nt.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", 
nt[nt.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", nt[nt.ABORTED = 10] = "ABORTED", 
nt[nt.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", nt[nt.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", 
nt[nt.INTERNAL = 13] = "INTERNAL", nt[nt.UNAVAILABLE = 14] = "UNAVAILABLE", nt[nt.DATA_LOSS = 15] = "DATA_LOSS";

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
var ut = /** @class */ function() {
    function t(t, e) {
        this.P = t, this.root = e || ct.EMPTY;
    }
    // Returns a copy of the map, with the specified key/value added or replaced.
        return t.prototype.st = function(e, n) {
        return new t(this.P, this.root.st(e, n, this.P).copy(null, null, ct.it, null, null));
    }, 
    // Returns a copy of the map, with the specified key removed.
    t.prototype.remove = function(e) {
        return new t(this.P, this.root.remove(e, this.P).copy(null, null, ct.it, null, null));
    }, 
    // Returns the value of the node with the given key, or null.
    t.prototype.get = function(t) {
        for (var e = this.root; !e._(); ) {
            var n = this.P(t, e.key);
            if (0 === n) return e.value;
            n < 0 ? e = e.left : n > 0 && (e = e.right);
        }
        return null;
    }, 
    // Returns the index of the element in this sorted map, or -1 if it doesn't
    // exist.
    t.prototype.indexOf = function(t) {
        for (
        // Number of nodes that were pruned when descending right
        var e = 0, n = this.root; !n._(); ) {
            var r = this.P(t, n.key);
            if (0 === r) return e + n.left.size;
            r < 0 ? n = n.left : (
            // Count all nodes left of the node plus the node itself
            e += n.left.size + 1, n = n.right);
        }
        // Node not found
                return -1;
    }, t.prototype._ = function() {
        return this.root._();
    }, Object.defineProperty(t.prototype, "size", {
        // Returns the total number of nodes in the map.
        get: function() {
            return this.root.size;
        },
        enumerable: !1,
        configurable: !0
    }), 
    // Returns the minimum key in the map.
    t.prototype.rt = function() {
        return this.root.rt();
    }, 
    // Returns the maximum key in the map.
    t.prototype.ot = function() {
        return this.root.ot();
    }, 
    // Traverses the map in key order and calls the specified action function
    // for each key/value pair. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ht = function(t) {
        return this.root.ht(t);
    }, t.prototype.forEach = function(t) {
        this.ht((function(e, n) {
            return t(e, n), !1;
        }));
    }, t.prototype.toString = function() {
        var t = [];
        return this.ht((function(e, n) {
            return t.push(e + ":" + n), !1;
        })), "{" + t.join(", ") + "}";
    }, 
    // Traverses the map in reverse key order and calls the specified action
    // function for each key/value pair. If action returns true, traversal is
    // aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.at = function(t) {
        return this.root.at(t);
    }, 
    // Returns an iterator over the SortedMap.
    t.prototype.ut = function() {
        return new at(this.root, null, this.P, !1);
    }, t.prototype.ct = function(t) {
        return new at(this.root, t, this.P, !1);
    }, t.prototype.lt = function() {
        return new at(this.root, null, this.P, !0);
    }, t.prototype._t = function(t) {
        return new at(this.root, t, this.P, !0);
    }, t;
}(), at = /** @class */ function() {
    function t(t, e, n, r) {
        this.ft = r, this.dt = [];
        for (var i = 1; !t._(); ) if (i = e ? n(t.key, e) : 1, 
        // flip the comparison if we're going in reverse
        r && (i *= -1), i < 0) 
        // This node is less than our start key. ignore it
        t = this.ft ? t.left : t.right; else {
            if (0 === i) {
                // This node is exactly equal to our start key. Push it on the stack,
                // but stop iterating;
                this.dt.push(t);
                break;
            }
            // This node is greater than our start key, add it to the stack and move
            // to the next one
                        this.dt.push(t), t = this.ft ? t.right : t.left;
        }
    }
    return t.prototype.wt = function() {
        var t = this.dt.pop(), e = {
            key: t.key,
            value: t.value
        };
        if (this.ft) for (t = t.left; !t._(); ) this.dt.push(t), t = t.right; else for (t = t.right; !t._(); ) this.dt.push(t), 
        t = t.left;
        return e;
    }, t.prototype.Tt = function() {
        return this.dt.length > 0;
    }, t.prototype.Et = function() {
        if (0 === this.dt.length) return null;
        var t = this.dt[this.dt.length - 1];
        return {
            key: t.key,
            value: t.value
        };
    }, t;
}(), ct = /** @class */ function() {
    function t(e, n, r, i, o) {
        this.key = e, this.value = n, this.color = null != r ? r : t.RED, this.left = null != i ? i : t.EMPTY, 
        this.right = null != o ? o : t.EMPTY, this.size = this.left.size + 1 + this.right.size;
    }
    // Returns a copy of the current node, optionally replacing pieces of it.
        return t.prototype.copy = function(e, n, r, i, o) {
        return new t(null != e ? e : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right);
    }, t.prototype._ = function() {
        return !1;
    }, 
    // Traverses the tree in key order and calls the specified action function
    // for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ht = function(t) {
        return this.left.ht(t) || t(this.key, this.value) || this.right.ht(t);
    }, 
    // Traverses the tree in reverse key order and calls the specified action
    // function for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.at = function(t) {
        return this.right.at(t) || t(this.key, this.value) || this.left.at(t);
    }, 
    // Returns the minimum node in the tree.
    t.prototype.min = function() {
        return this.left._() ? this : this.left.min();
    }, 
    // Returns the maximum key in the tree.
    t.prototype.rt = function() {
        return this.min().key;
    }, 
    // Returns the maximum key in the tree.
    t.prototype.ot = function() {
        return this.right._() ? this.key : this.right.ot();
    }, 
    // Returns new tree, with the key/value added.
    t.prototype.st = function(t, e, n) {
        var r = this, i = n(t, r.key);
        return (r = i < 0 ? r.copy(null, null, null, r.left.st(t, e, n), null) : 0 === i ? r.copy(null, e, null, null, null) : r.copy(null, null, null, null, r.right.st(t, e, n))).It();
    }, t.prototype.Rt = function() {
        if (this.left._()) return t.EMPTY;
        var e = this;
        return e.left.At() || e.left.left.At() || (e = e.Pt()), (e = e.copy(null, null, null, e.left.Rt(), null)).It();
    }, 
    // Returns new tree, with the specified item removed.
    t.prototype.remove = function(e, n) {
        var r, i = this;
        if (n(e, i.key) < 0) i.left._() || i.left.At() || i.left.left.At() || (i = i.Pt()), 
        i = i.copy(null, null, null, i.left.remove(e, n), null); else {
            if (i.left.At() && (i = i.Vt()), i.right._() || i.right.At() || i.right.left.At() || (i = i.yt()), 
            0 === n(e, i.key)) {
                if (i.right._()) return t.EMPTY;
                r = i.right.min(), i = i.copy(r.key, r.value, null, null, i.right.Rt());
            }
            i = i.copy(null, null, null, null, i.right.remove(e, n));
        }
        return i.It();
    }, t.prototype.At = function() {
        return this.color;
    }, 
    // Returns new tree after performing any needed rotations.
    t.prototype.It = function() {
        var t = this;
        return t.right.At() && !t.left.At() && (t = t.pt()), t.left.At() && t.left.left.At() && (t = t.Vt()), 
        t.left.At() && t.right.At() && (t = t.gt()), t;
    }, t.prototype.Pt = function() {
        var t = this.gt();
        return t.right.left.At() && (t = (t = (t = t.copy(null, null, null, null, t.right.Vt())).pt()).gt()), 
        t;
    }, t.prototype.yt = function() {
        var t = this.gt();
        return t.left.left.At() && (t = (t = t.Vt()).gt()), t;
    }, t.prototype.pt = function() {
        var e = this.copy(null, null, t.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, e, null);
    }, t.prototype.Vt = function() {
        var e = this.copy(null, null, t.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, e);
    }, t.prototype.gt = function() {
        var t = this.left.copy(null, null, !this.left.color, null, null), e = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, t, e);
    }, 
    // For testing.
    t.prototype.vt = function() {
        var t = this.bt();
        return Math.pow(2, t) <= this.size + 1;
    }, 
    // In a balanced RB tree, the black-depth (number of black nodes) from root to
    // leaves is equal on both sides.  This function verifies that or asserts.
    t.prototype.bt = function() {
        if (this.At() && this.left.At()) throw T$1();
        if (this.right.At()) throw T$1();
        var t = this.left.bt();
        if (t !== this.right.bt()) throw T$1();
        return t + (this.At() ? 0 : 1);
    }, t;
}();

// end SortedMap
// An iterator over an LLRBNode.
// end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
ct.EMPTY = null, ct.RED = !0, ct.it = !1, 
// end LLRBEmptyNode
ct.EMPTY = new (/** @class */ function() {
    function t() {
        this.size = 0;
    }
    return Object.defineProperty(t.prototype, "key", {
        get: function() {
            throw T$1();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "value", {
        get: function() {
            throw T$1();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "color", {
        get: function() {
            throw T$1();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "left", {
        get: function() {
            throw T$1();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "right", {
        get: function() {
            throw T$1();
        },
        enumerable: !1,
        configurable: !0
    }), 
    // Returns a copy of the current node.
    t.prototype.copy = function(t, e, n, r, i) {
        return this;
    }, 
    // Returns a copy of the tree, with the specified key/value added.
    t.prototype.st = function(t, e, n) {
        return new ct(t, e);
    }, 
    // Returns a copy of the tree, with the specified key removed.
    t.prototype.remove = function(t, e) {
        return this;
    }, t.prototype._ = function() {
        return !0;
    }, t.prototype.ht = function(t) {
        return !1;
    }, t.prototype.at = function(t) {
        return !1;
    }, t.prototype.rt = function() {
        return null;
    }, t.prototype.ot = function() {
        return null;
    }, t.prototype.At = function() {
        return !1;
    }, 
    // For testing.
    t.prototype.vt = function() {
        return !0;
    }, t.prototype.bt = function() {
        return 0;
    }, t;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */
var ht = /** @class */ function() {
    function t(t) {
        this.P = t, this.data = new ut(this.P);
    }
    return t.prototype.has = function(t) {
        return null !== this.data.get(t);
    }, t.prototype.first = function() {
        return this.data.rt();
    }, t.prototype.last = function() {
        return this.data.ot();
    }, Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.data.size;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.indexOf = function(t) {
        return this.data.indexOf(t);
    }, 
    /** Iterates elements in order defined by "comparator" */ t.prototype.forEach = function(t) {
        this.data.ht((function(e, n) {
            return t(e), !1;
        }));
    }, 
    /** Iterates over `elem`s such that: range[0] <= elem < range[1]. */ t.prototype.St = function(t, e) {
        for (var n = this.data.ct(t[0]); n.Tt(); ) {
            var r = n.wt();
            if (this.P(r.key, t[1]) >= 0) return;
            e(r.key);
        }
    }, 
    /**
     * Iterates over `elem`s such that: start <= elem until false is returned.
     */
    t.prototype.Ct = function(t, e) {
        var n;
        for (n = void 0 !== e ? this.data.ct(e) : this.data.ut(); n.Tt(); ) if (!t(n.wt().key)) return;
    }, 
    /** Finds the least element greater than or equal to `elem`. */ t.prototype.Dt = function(t) {
        var e = this.data.ct(t);
        return e.Tt() ? e.wt().key : null;
    }, t.prototype.ut = function() {
        return new ft(this.data.ut());
    }, t.prototype.ct = function(t) {
        return new ft(this.data.ct(t));
    }, 
    /** Inserts or updates an element */ t.prototype.add = function(t) {
        return this.copy(this.data.remove(t).st(t, !0));
    }, 
    /** Deletes an element */ t.prototype.delete = function(t) {
        return this.has(t) ? this.copy(this.data.remove(t)) : this;
    }, t.prototype._ = function() {
        return this.data._();
    }, t.prototype.Ft = function(t) {
        var e = this;
        // Make sure `result` always refers to the larger one of the two sets.
                return e.size < t.size && (e = t, t = this), t.forEach((function(t) {
            e = e.add(t);
        })), e;
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;
        for (var n = this.data.ut(), r = e.data.ut(); n.Tt(); ) {
            var i = n.wt().key, o = r.wt().key;
            if (0 !== this.P(i, o)) return !1;
        }
        return !0;
    }, t.prototype.F = function() {
        var t = [];
        return this.forEach((function(e) {
            t.push(e);
        })), t;
    }, t.prototype.toString = function() {
        var t = [];
        return this.forEach((function(e) {
            return t.push(e);
        })), "SortedSet(" + t.toString() + ")";
    }, t.prototype.copy = function(e) {
        var n = new t(this.P);
        return n.data = e, n;
    }, t;
}(), ft = /** @class */ function() {
    function t(t) {
        this.Nt = t;
    }
    return t.prototype.wt = function() {
        return this.Nt.wt().key;
    }, t.prototype.Tt = function() {
        return this.Nt.Tt();
    }, t;
}(), lt = new ut(Q$1.P);

function pt() {
    return lt;
}

function dt() {
    return pt();
}

var yt = new ut(Q$1.P);

function vt() {
    return yt;
}

var gt = new ut(Q$1.P), mt = new ht(Q$1.P);

function wt() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    for (var n = mt, r = 0, i = t; r < i.length; r++) {
        var o = i[r];
        n = n.add(o);
    }
    return n;
}

var bt = new ht(V$1);

function Et() {
    return bt;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */ var It = /** @class */ function() {
    /** The default ordering is by key if the comparator is omitted */
    function t(t) {
        // We are adding document key comparator to the end as it's the only
        // guaranteed unique property of a document.
        this.P = t ? function(e, n) {
            return t(e, n) || Q$1.P(e.key, n.key);
        } : function(t, e) {
            return Q$1.P(t.key, e.key);
        }, this.$t = vt(), this.kt = new ut(this.P)
        /**
     * Returns an empty copy of the existing DocumentSet, using the same
     * comparator.
     */;
    }
    return t.Ot = function(e) {
        return new t(e.P);
    }, t.prototype.has = function(t) {
        return null != this.$t.get(t);
    }, t.prototype.get = function(t) {
        return this.$t.get(t);
    }, t.prototype.first = function() {
        return this.kt.rt();
    }, t.prototype.last = function() {
        return this.kt.ot();
    }, t.prototype._ = function() {
        return this.kt._();
    }, 
    /**
     * Returns the index of the provided key in the document set, or -1 if the
     * document key is not present in the set;
     */
    t.prototype.indexOf = function(t) {
        var e = this.$t.get(t);
        return e ? this.kt.indexOf(e) : -1;
    }, Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.kt.size;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /** Iterates documents in order defined by "comparator" */ t.prototype.forEach = function(t) {
        this.kt.ht((function(e, n) {
            return t(e), !1;
        }));
    }, 
    /** Inserts or updates a document with the same key */ t.prototype.add = function(t) {
        // First remove the element if we have it.
        var e = this.delete(t.key);
        return e.copy(e.$t.st(t.key, t), e.kt.st(t, null));
    }, 
    /** Deletes a document with a given key */ t.prototype.delete = function(t) {
        var e = this.get(t);
        return e ? this.copy(this.$t.remove(t), this.kt.remove(e)) : this;
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;
        for (var n = this.kt.ut(), r = e.kt.ut(); n.Tt(); ) {
            var i = n.wt().key, o = r.wt().key;
            if (!i.isEqual(o)) return !1;
        }
        return !0;
    }, t.prototype.toString = function() {
        var t = [];
        return this.forEach((function(e) {
            t.push(e.toString());
        })), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)";
    }, t.prototype.copy = function(e, n) {
        var r = new t;
        return r.P = this.P, r.$t = e, r.kt = n, r;
    }, t;
}(), Nt = /** @class */ function() {
    function t() {
        this.xt = new ut(Q$1.P);
    }
    return t.prototype.track = function(t) {
        var e = t.doc.key, n = this.xt.get(e);
        n ? 
        // Merge the new change with the existing change.
        0 /* Added */ !== t.type && 3 /* Metadata */ === n.type ? this.xt = this.xt.st(e, t) : 3 /* Metadata */ === t.type && 1 /* Removed */ !== n.type ? this.xt = this.xt.st(e, {
            type: n.type,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 2 /* Modified */ === n.type ? this.xt = this.xt.st(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 0 /* Added */ === n.type ? this.xt = this.xt.st(e, {
            type: 0 /* Added */ ,
            doc: t.doc
        }) : 1 /* Removed */ === t.type && 0 /* Added */ === n.type ? this.xt = this.xt.remove(e) : 1 /* Removed */ === t.type && 2 /* Modified */ === n.type ? this.xt = this.xt.st(e, {
            type: 1 /* Removed */ ,
            doc: n.doc
        }) : 0 /* Added */ === t.type && 1 /* Removed */ === n.type ? this.xt = this.xt.st(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 
        // This includes these cases, which don't make sense:
        // Added->Added
        // Removed->Removed
        // Modified->Added
        // Removed->Modified
        // Metadata->Added
        // Removed->Metadata
        T$1() : this.xt = this.xt.st(e, t);
    }, t.prototype.Lt = function() {
        var t = [];
        return this.xt.ht((function(e, n) {
            t.push(n);
        })), t;
    }, t;
}(), At = /** @class */ function() {
    function t(t, e, n, r, i, o, s, u) {
        this.query = t, this.docs = e, this.Mt = n, this.docChanges = r, this.qt = i, this.fromCache = o, 
        this.Ut = s, this.Bt = u
        /** Returns a view snapshot as if all documents in the snapshot were added. */;
    }
    return t.Wt = function(e, n, r, i) {
        var o = [];
        return n.forEach((function(t) {
            o.push({
                type: 0 /* Added */ ,
                doc: t
            });
        })), new t(e, n, It.Ot(n), o, r, i, 
        /* syncStateChanged= */ !0, 
        /* excludesMetadataChanges= */ !1);
    }, Object.defineProperty(t.prototype, "hasPendingWrites", {
        get: function() {
            return !this.qt._();
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        if (!(this.fromCache === t.fromCache && this.Ut === t.Ut && this.qt.isEqual(t.qt) && yn(this.query, t.query) && this.docs.isEqual(t.docs) && this.Mt.isEqual(t.Mt))) return !1;
        var e = this.docChanges, n = t.docChanges;
        if (e.length !== n.length) return !1;
        for (var r = 0; r < e.length; r++) if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
        return !0;
    }, t;
}(), Tt = /** @class */ function() {
    function t(
    /**
     * The snapshot version this event brings us up to, or MIN if not set.
     */
    t, 
    /**
     * A map from target to changes to the target. See TargetChange.
     */
    e, 
    /**
     * A set of targets that is known to be inconsistent. Listens for these
     * targets should be re-established without resume tokens.
     */
    n, 
    /**
     * A set of which documents have changed or been deleted, along with the
     * doc's new values (if not deleted).
     */
    r, 
    /**
     * A set of which document updates are due only to limbo resolution targets.
     */
    i) {
        this.Z = t, this.Qt = e, this.jt = n, this.Gt = r, this.Kt = i;
    }
    /**
     * HACK: Views require RemoteEvents in order to determine whether the view is
     * CURRENT, but secondary tabs don't receive remote events. So this method is
     * used to create a synthesized RemoteEvent that can be used to apply a
     * CURRENT status change to a View, for queries executed in a different tab.
     */
    // PORTING NOTE: Multi-tab only
        return t.zt = function(e, n) {
        var r = new Map;
        return r.set(e, kt.Ht(e, n)), new t(j.min(), r, Et(), pt(), wt());
    }, t;
}(), kt = /** @class */ function() {
    function t(
    /**
     * An opaque, server-assigned token that allows watching a query to be resumed
     * after disconnecting without retransmitting all the data that matches the
     * query. The resume token essentially identifies a point in time from which
     * the server should resume sending results.
     */
    t, 
    /**
     * The "current" (synced) status of this target. Note that "current"
     * has special meaning in the RPC protocol that implies that a target is
     * both up-to-date and consistent with the rest of the watch stream.
     */
    e, 
    /**
     * The set of documents that were newly assigned to this target as part of
     * this remote event.
     */
    n, 
    /**
     * The set of documents that were already assigned to this target but received
     * an update during this remote event.
     */
    r, 
    /**
     * The set of documents that were removed from this target as part of this
     * remote event.
     */
    i) {
        this.resumeToken = t, this.Yt = e, this.Jt = n, this.Xt = r, this.Zt = i
        /**
     * This method is used to create a synthesized TargetChanges that can be used to
     * apply a CURRENT status change to a View (for queries executed in a different
     * tab) or for new queries (to raise snapshots with correct CURRENT status).
     */;
    }
    return t.Ht = function(e, n) {
        return new t(tt.J, n, wt(), wt(), wt());
    }, t;
}(), Rt = function(
/** The new document applies to all of these targets. */
t, 
/** The new document is removed from all of these targets. */
e, 
/** The key of the document for this change. */
n, 
/**
     * The new document or NoDocument if it was deleted. Is null if the
     * document went out of view without the server sending a new document.
     */
r) {
    this.te = t, this.removedTargetIds = e, this.key = n, this.ee = r;
}, Dt = function(t, e) {
    this.targetId = t, this.ne = e;
}, _t = function(
/** What kind of change occurred to the watch target. */
t, 
/** The target IDs that were added/removed/set. */
e, 
/**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */
n
/** An RPC error indicating why the watch failed. */ , r) {
    void 0 === n && (n = tt.J), void 0 === r && (r = null), this.state = t, this.targetIds = e, 
    this.resumeToken = n, this.cause = r;
}, Vt = /** @class */ function() {
    function t() {
        /**
         * The number of pending responses (adds or removes) that we are waiting on.
         * We only consider targets active that have no pending responses.
         */
        this.se = 0, 
        /**
             * Keeps track of the document changes since the last raised snapshot.
             *
             * These changes are continuously updated as we receive document updates and
             * always reflect the current set of changes against the last issued snapshot.
             */
        this.ie = Pt(), 
        /** See public getters for explanations of these fields. */
        this.re = tt.J, this.oe = !1, 
        /**
             * Whether this target state should be included in the next snapshot. We
             * initialize to true so that newly-added targets are included in the next
             * RemoteEvent.
             */
        this.he = !0;
    }
    return Object.defineProperty(t.prototype, "Yt", {
        /**
         * Whether this target has been marked 'current'.
         *
         * 'Current' has special meaning in the RPC protocol: It implies that the
         * Watch backend has sent us all changes up to the point at which the target
         * was added and that the target is consistent with the rest of the watch
         * stream.
         */
        get: function() {
            return this.oe;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "resumeToken", {
        /** The last resume token sent to us for this target. */ get: function() {
            return this.re;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ae", {
        /** Whether this target has pending target adds or target removes. */ get: function() {
            return 0 !== this.se;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ue", {
        /** Whether we have modified any state that should trigger a snapshot. */ get: function() {
            return this.he;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Applies the resume token to the TargetChange, but only when it has a new
     * value. Empty resumeTokens are discarded.
     */
    t.prototype.ce = function(t) {
        t.Y() > 0 && (this.he = !0, this.re = t);
    }, 
    /**
     * Creates a target change from the current set of changes.
     *
     * To reset the document changes after raising this snapshot, call
     * `clearPendingChanges()`.
     */
    t.prototype.le = function() {
        var t = wt(), e = wt(), n = wt();
        return this.ie.forEach((function(r, i) {
            switch (i) {
              case 0 /* Added */ :
                t = t.add(r);
                break;

              case 2 /* Modified */ :
                e = e.add(r);
                break;

              case 1 /* Removed */ :
                n = n.add(r);
                break;

              default:
                T$1();
            }
        })), new kt(this.re, this.oe, t, e, n);
    }, 
    /**
     * Resets the document changes and sets `hasPendingChanges` to false.
     */
    t.prototype._e = function() {
        this.he = !1, this.ie = Pt();
    }, t.prototype.fe = function(t, e) {
        this.he = !0, this.ie = this.ie.st(t, e);
    }, t.prototype.de = function(t) {
        this.he = !0, this.ie = this.ie.remove(t);
    }, t.prototype.we = function() {
        this.se += 1;
    }, t.prototype.me = function() {
        this.se -= 1;
    }, t.prototype.Te = function() {
        this.he = !0, this.oe = !0;
    }, t;
}(), St = /** @class */ function() {
    function t(t) {
        this.Ee = t, 
        /** The internal state of all tracked targets. */
        this.Ie = new Map, 
        /** Keeps track of the documents to update since the last raised snapshot. */
        this.Re = pt(), 
        /** A mapping of document keys to their set of target IDs. */
        this.Ae = Lt(), 
        /**
             * A list of targets with existence filter mismatches. These targets are
             * known to be inconsistent and their listens needs to be re-established by
             * RemoteStore.
             */
        this.Pe = new ht(V$1)
        /**
     * Processes and adds the DocumentWatchChange to the current set of changes.
     */;
    }
    return t.prototype.Ve = function(t) {
        for (var e = 0, n = t.te; e < n.length; e++) {
            var r = n[e];
            t.ee instanceof nn ? this.ye(r, t.ee) : t.ee instanceof rn && this.pe(r, t.key, t.ee);
        }
        for (var i = 0, o = t.removedTargetIds; i < o.length; i++) {
            var s = o[i];
            this.pe(s, t.key, t.ee);
        }
    }, 
    /** Processes and adds the WatchTargetChange to the current set of changes. */ t.prototype.ge = function(t) {
        var e = this;
        this.ve(t, (function(n) {
            var r = e.be(n);
            switch (t.state) {
              case 0 /* NoChange */ :
                e.Se(n) && r.ce(t.resumeToken);
                break;

              case 1 /* Added */ :
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                r.me(), r.ae || 
                // We have a freshly added target, so we need to reset any state
                // that we had previously. This can happen e.g. when remove and add
                // back a target for existence filter mismatches.
                r._e(), r.ce(t.resumeToken);
                break;

              case 2 /* Removed */ :
                // We need to keep track of removed targets to we can post-filter and
                // remove any target changes.
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                r.me(), r.ae || e.removeTarget(n);
                break;

              case 3 /* Current */ :
                e.Se(n) && (r.Te(), r.ce(t.resumeToken));
                break;

              case 4 /* Reset */ :
                e.Se(n) && (
                // Reset the target and synthesizes removes for all existing
                // documents. The backend will re-add any documents that still
                // match the target before it sends the next global snapshot.
                e.Ce(n), r.ce(t.resumeToken));
                break;

              default:
                T$1();
            }
        }));
    }, 
    /**
     * Iterates over all targetIds that the watch change applies to: either the
     * targetIds explicitly listed in the change or the targetIds of all currently
     * active targets.
     */
    t.prototype.ve = function(t, e) {
        var n = this;
        t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.Ie.forEach((function(t, r) {
            n.Se(r) && e(r);
        }));
    }, 
    /**
     * Handles existence filters and synthesizes deletes for filter mismatches.
     * Targets that are invalidated by filter mismatches are added to
     * `pendingTargetResets`.
     */
    t.prototype.De = function(t) {
        var e = t.targetId, n = t.ne.count, r = this.Fe(e);
        if (r) {
            var i = r.target;
            if (X$1(i)) if (0 === n) {
                // The existence filter told us the document does not exist. We deduce
                // that this document does not exist and apply a deleted document to
                // our updates. Without applying this deleted document there might be
                // another query that will raise this document as part of a snapshot
                // until it is resolved, essentially exposing inconsistency between
                // queries.
                var o = new Q$1(i.path);
                this.pe(e, o, new rn(o, j.min()));
            } else k$1(1 === n); else this.Ne(e) !== n && (
            // Existence filter mismatch: We reset the mapping and raise a new
            // snapshot with `isFromCache:true`.
            this.Ce(e), this.Pe = this.Pe.add(e));
        }
    }, 
    /**
     * Converts the currently accumulated state into a remote event at the
     * provided snapshot version. Resets the accumulated changes before returning.
     */
    t.prototype.$e = function(t) {
        var e = this, n = new Map;
        this.Ie.forEach((function(r, i) {
            var o = e.Fe(i);
            if (o) {
                if (r.Yt && X$1(o.target)) {
                    // Document queries for document that don't exist can produce an empty
                    // result set. To update our local cache, we synthesize a document
                    // delete if we have not previously received the document. This
                    // resolves the limbo state of the document, removing it from
                    // limboDocumentRefs.
                    // TODO(dimond): Ideally we would have an explicit lookup target
                    // instead resulting in an explicit delete message and we could
                    // remove this special logic.
                    var s = new Q$1(o.target.path);
                    null !== e.Re.get(s) || e.ke(i, s) || e.pe(i, s, new rn(s, t));
                }
                r.ue && (n.set(i, r.le()), r._e());
            }
        }));
        var r = wt();
        // We extract the set of limbo-only document updates as the GC logic
        // special-cases documents that do not appear in the target cache.
        // TODO(gsoltis): Expand on this comment once GC is available in the JS
        // client.
                this.Ae.forEach((function(t, n) {
            var i = !0;
            n.Ct((function(t) {
                var n = e.Fe(t);
                return !n || 2 /* LimboResolution */ === n.X || (i = !1, !1);
            })), i && (r = r.add(t));
        }));
        var i = new Tt(t, n, this.Pe, this.Re, r);
        return this.Re = pt(), this.Ae = Lt(), this.Pe = new ht(V$1), i;
    }, 
    /**
     * Adds the provided document to the internal list of document updates and
     * its document key to the given target's mapping.
     */
    // Visible for testing.
    t.prototype.ye = function(t, e) {
        if (this.Se(t)) {
            var n = this.ke(t, e.key) ? 2 /* Modified */ : 0 /* Added */;
            this.be(t).fe(e.key, n), this.Re = this.Re.st(e.key, e), this.Ae = this.Ae.st(e.key, this.Oe(e.key).add(t));
        }
    }, 
    /**
     * Removes the provided document from the target mapping. If the
     * document no longer matches the target, but the document's state is still
     * known (e.g. we know that the document was deleted or we received the change
     * that caused the filter mismatch), the new document can be provided
     * to update the remote document cache.
     */
    // Visible for testing.
    t.prototype.pe = function(t, e, n) {
        if (this.Se(t)) {
            var r = this.be(t);
            this.ke(t, e) ? r.fe(e, 1 /* Removed */) : 
            // The document may have entered and left the target before we raised a
            // snapshot, so we can just ignore the change.
            r.de(e), this.Ae = this.Ae.st(e, this.Oe(e).delete(t)), n && (this.Re = this.Re.st(e, n));
        }
    }, t.prototype.removeTarget = function(t) {
        this.Ie.delete(t);
    }, 
    /**
     * Returns the current count of documents in the target. This includes both
     * the number of documents that the LocalStore considers to be part of the
     * target as well as any accumulated changes.
     */
    t.prototype.Ne = function(t) {
        var e = this.be(t).le();
        return this.Ee.xe(t).size + e.Jt.size - e.Zt.size;
    }, 
    /**
     * Increment the number of acks needed from watch before we can consider the
     * server to be 'in-sync' with the client's active targets.
     */
    t.prototype.we = function(t) {
        this.be(t).we();
    }, t.prototype.be = function(t) {
        var e = this.Ie.get(t);
        return e || (e = new Vt, this.Ie.set(t, e)), e;
    }, t.prototype.Oe = function(t) {
        var e = this.Ae.get(t);
        return e || (e = new ht(V$1), this.Ae = this.Ae.st(t, e)), e;
    }, 
    /**
     * Verifies that the user is still interested in this target (by calling
     * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
     * from watch.
     */
    t.prototype.Se = function(t) {
        var e = null !== this.Fe(t);
        return e || E$1("WatchChangeAggregator", "Detected inactive target", t), e;
    }, 
    /**
     * Returns the TargetData for an active target (i.e. a target that the user
     * is still interested in that has no outstanding target change requests).
     */
    t.prototype.Fe = function(t) {
        var e = this.Ie.get(t);
        return e && e.ae ? null : this.Ee.Le(t);
    }, 
    /**
     * Resets the state of a Watch target to its initial state (e.g. sets
     * 'current' to false, clears the resume token and removes its target mapping
     * from all documents).
     */
    t.prototype.Ce = function(t) {
        var e = this;
        this.Ie.set(t, new Vt), this.Ee.xe(t).forEach((function(n) {
            e.pe(t, n, /*updatedDocument=*/ null);
        }));
    }, 
    /**
     * Returns whether the LocalStore considers the document to be part of the
     * specified target.
     */
    t.prototype.ke = function(t, e) {
        return this.Ee.xe(t).has(e);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */ function Lt() {
    return new ut(Q$1.P);
}

function Pt() {
    return new ut(Q$1.P);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   TransformMutation (see TransformMutation.applyTo()). They can only exist in
 *   the local view of a document. Therefore they do not need to be parsed or
 *   serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */ function Ot(t) {
    var e, n;
    return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
}

/**
 * Creates a new ServerTimestamp proto value (using the internal format).
 */
/**
 * Returns the local time at which this timestamp was first set.
 */ function Ut(t) {
    var e = Bt(t.mapValue.fields.__local_write_time__.timestampValue);
    return new x$1(e.seconds, e.nanos);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// A RegExp matching ISO 8601 UTC timestamps with optional fraction.
var qt = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

/** Extracts the backend's type order for the provided value. */ function Ct(t) {
    return "nullValue" in t ? 0 /* NullValue */ : "booleanValue" in t ? 1 /* BooleanValue */ : "integerValue" in t || "doubleValue" in t ? 2 /* NumberValue */ : "timestampValue" in t ? 3 /* TimestampValue */ : "stringValue" in t ? 5 /* StringValue */ : "bytesValue" in t ? 6 /* BlobValue */ : "referenceValue" in t ? 7 /* RefValue */ : "geoPointValue" in t ? 8 /* GeoPointValue */ : "arrayValue" in t ? 9 /* ArrayValue */ : "mapValue" in t ? Ot(t) ? 4 /* ServerTimestampValue */ : 10 /* ObjectValue */ : T$1();
}

/** Tests `left` and `right` for equality based on the backend semantics. */ function Mt(t, e) {
    var n = Ct(t);
    if (n !== Ct(e)) return !1;
    switch (n) {
      case 0 /* NullValue */ :
        return !0;

      case 1 /* BooleanValue */ :
        return t.booleanValue === e.booleanValue;

      case 4 /* ServerTimestampValue */ :
        return Ut(t).isEqual(Ut(e));

      case 3 /* TimestampValue */ :
        return function(t, e) {
            if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length) 
            // Use string equality for ISO 8601 timestamps
            return t.timestampValue === e.timestampValue;
            var n = Bt(t.timestampValue), r = Bt(e.timestampValue);
            return n.seconds === r.seconds && n.nanos === r.nanos;
        }(t, e);

      case 5 /* StringValue */ :
        return t.stringValue === e.stringValue;

      case 6 /* BlobValue */ :
        return function(t, e) {
            return $t(t.bytesValue).isEqual($t(e.bytesValue));
        }(t, e);

      case 7 /* RefValue */ :
        return t.referenceValue === e.referenceValue;

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            return zt(t.geoPointValue.latitude) === zt(e.geoPointValue.latitude) && zt(t.geoPointValue.longitude) === zt(e.geoPointValue.longitude);
        }(t, e);

      case 2 /* NumberValue */ :
        return function(t, e) {
            if ("integerValue" in t && "integerValue" in e) return zt(t.integerValue) === zt(e.integerValue);
            if ("doubleValue" in t && "doubleValue" in e) {
                var n = zt(t.doubleValue), r = zt(e.doubleValue);
                return n === r ? Y$1(n) === Y$1(r) : isNaN(n) && isNaN(r);
            }
            return !1;
        }(t, e);

      case 9 /* ArrayValue */ :
        return S$1(t.arrayValue.values || [], e.arrayValue.values || [], Mt);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            var n = t.mapValue.fields || {}, r = e.mapValue.fields || {};
            if (O$1(n) !== O$1(r)) return !1;
            for (var i in n) if (n.hasOwnProperty(i) && (void 0 === r[i] || !Mt(n[i], r[i]))) return !1;
            return !0;
        }(t, e);

      default:
        return T$1();
    }
}

function Ft(t, e) {
    return void 0 !== (t.values || []).find((function(t) {
        return Mt(t, e);
    }));
}

function xt(t, e) {
    var n = Ct(t), r = Ct(e);
    if (n !== r) return V$1(n, r);
    switch (n) {
      case 0 /* NullValue */ :
        return 0;

      case 1 /* BooleanValue */ :
        return V$1(t.booleanValue, e.booleanValue);

      case 2 /* NumberValue */ :
        return function(t, e) {
            var n = zt(t.integerValue || t.doubleValue), r = zt(e.integerValue || e.doubleValue);
            return n < r ? -1 : n > r ? 1 : n === r ? 0 : 
            // one or both are NaN.
            isNaN(n) ? isNaN(r) ? 0 : -1 : 1;
        }(t, e);

      case 3 /* TimestampValue */ :
        return jt(t.timestampValue, e.timestampValue);

      case 4 /* ServerTimestampValue */ :
        return jt(Ut(t), Ut(e));

      case 5 /* StringValue */ :
        return V$1(t.stringValue, e.stringValue);

      case 6 /* BlobValue */ :
        return function(t, e) {
            var n = $t(t), r = $t(e);
            return n.o(r);
        }(t.bytesValue, e.bytesValue);

      case 7 /* RefValue */ :
        return function(t, e) {
            for (var n = t.split("/"), r = e.split("/"), i = 0; i < n.length && i < r.length; i++) {
                var o = V$1(n[i], r[i]);
                if (0 !== o) return o;
            }
            return V$1(n.length, r.length);
        }(t.referenceValue, e.referenceValue);

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            var n = V$1(zt(t.latitude), zt(e.latitude));
            return 0 !== n ? n : V$1(zt(t.longitude), zt(e.longitude));
        }(t.geoPointValue, e.geoPointValue);

      case 9 /* ArrayValue */ :
        return function(t, e) {
            for (var n = t.values || [], r = e.values || [], i = 0; i < n.length && i < r.length; ++i) {
                var o = xt(n[i], r[i]);
                if (o) return o;
            }
            return V$1(n.length, r.length);
        }(t.arrayValue, e.arrayValue);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            var n = t.fields || {}, r = Object.keys(n), i = e.fields || {}, o = Object.keys(i);
            // Even though MapValues are likely sorted correctly based on their insertion
            // order (e.g. when received from the backend), local modifications can bring
            // elements out of order. We need to re-sort the elements to ensure that
            // canonical IDs are independent of insertion order.
                        r.sort(), o.sort();
            for (var s = 0; s < r.length && s < o.length; ++s) {
                var u = V$1(r[s], o[s]);
                if (0 !== u) return u;
                var a = xt(n[r[s]], i[o[s]]);
                if (0 !== a) return a;
            }
            return V$1(r.length, o.length);
        }(t.mapValue, e.mapValue);

      default:
        throw T$1();
    }
}

function jt(t, e) {
    if ("string" == typeof t && "string" == typeof e && t.length === e.length) return V$1(t, e);
    var n = Bt(t), r = Bt(e), i = V$1(n.seconds, r.seconds);
    return 0 !== i ? i : V$1(n.nanos, r.nanos);
}

function Gt(t) {
    return function t(e) {
        return "nullValue" in e ? "null" : "booleanValue" in e ? "" + e.booleanValue : "integerValue" in e ? "" + e.integerValue : "doubleValue" in e ? "" + e.doubleValue : "timestampValue" in e ? function(t) {
            var e = Bt(t);
            return "time(" + e.seconds + "," + e.nanos + ")";
        }(e.timestampValue) : "stringValue" in e ? e.stringValue : "bytesValue" in e ? $t(e.bytesValue).toBase64() : "referenceValue" in e ? (r = e.referenceValue, 
        Q$1.B(r).toString()) : "geoPointValue" in e ? "geo(" + (n = e.geoPointValue).latitude + "," + n.longitude + ")" : "arrayValue" in e ? function(e) {
            for (var n = "[", r = !0, i = 0, o = e.values || []; i < o.length; i++) {
                var s = o[i];
                r ? r = !1 : n += ",", n += t(s);
            }
            return n + "]";
        }(e.arrayValue) : "mapValue" in e ? function(e) {
            for (
            // Iteration order in JavaScript is not guaranteed. To ensure that we generate
            // matching canonical IDs for identical maps, we need to sort the keys.
            var n = "{", r = !0, i = 0, o = Object.keys(e.fields || {}).sort(); i < o.length; i++) {
                var s = o[i];
                r ? r = !1 : n += ",", n += s + ":" + t(e.fields[s]);
            }
            return n + "}";
        }(e.mapValue) : T$1();
        var n, r;
    }(t);
}

function Bt(t) {
    // The json interface (for the browser) will return an iso timestamp string,
    // while the proto js library (for node) will return a
    // google.protobuf.Timestamp instance.
    if (k$1(!!t), "string" == typeof t) {
        // The date string can have higher precision (nanos) than the Date class
        // (millis), so we do some custom parsing here.
        // Parse the nanos right out of the string.
        var e = 0, n = qt.exec(t);
        if (k$1(!!n), n[1]) {
            // Pad the fraction out to 9 digits (nanos).
            var r = n[1];
            r = (r + "000000000").substr(0, 9), e = Number(r);
        }
        // Parse the date to get the seconds.
                var i = new Date(t);
        return {
            seconds: Math.floor(i.getTime() / 1e3),
            nanos: e
        };
    }
    return {
        seconds: zt(t.seconds),
        nanos: zt(t.nanos)
    };
}

/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */ function zt(t) {
    // TODO(bjornick): Handle int64 greater than 53 bits.
    return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
}

/** Converts the possible Proto types for Blobs into a ByteString. */ function $t(t) {
    return "string" == typeof t ? tt.fromBase64String(t) : tt.fromUint8Array(t);
}

/** Returns a reference value for the provided database and key. */ function Qt(t, e) {
    return {
        referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.N()
    };
}

/** Returns true if `value` is an IntegerValue . */ function Wt(t) {
    return !!t && "integerValue" in t;
}

/** Returns true if `value` is a DoubleValue. */
/** Returns true if `value` is an ArrayValue. */ function Yt(t) {
    return !!t && "arrayValue" in t;
}

/** Returns true if `value` is a NullValue. */ function Ht(t) {
    return !!t && "nullValue" in t;
}

/** Returns true if `value` is NaN. */ function Jt(t) {
    return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}

/** Returns true if `value` is a MapValue. */ function Kt(t) {
    return !!t && "mapValue" in t;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Zt = {
    asc: "ASCENDING",
    desc: "DESCENDING"
}, Xt = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY"
}, te = function(t, e) {
    this.s = t, this.Me = e;
};

/**
 * This class generates JsonObject values for the Datastore API suitable for
 * sending to either GRPC stub methods or via the JSON/HTTP REST API.
 *
 * The serializer supports both Protobuf.js and Proto3 JSON formats. By
 * setting `useProto3Json` to true, the serializer will use the Proto3 JSON
 * format.
 *
 * For a description of the Proto3 JSON format check
 * https://developers.google.com/protocol-buffers/docs/proto3#json
 *
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */
/**
 * Returns an IntegerValue for `value`.
 */
function ee(t) {
    return {
        integerValue: "" + t
    };
}

/**
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */ function ne(t, e) {
    if (t.Me) {
        if (isNaN(e)) return {
            doubleValue: "NaN"
        };
        if (e === 1 / 0) return {
            doubleValue: "Infinity"
        };
        if (e === -1 / 0) return {
            doubleValue: "-Infinity"
        };
    }
    return {
        doubleValue: Y$1(e) ? "-0" : e
    };
}

/**
 * Returns a value for a number that's appropriate to put into a proto.
 * The return value is an IntegerValue if it can safely represent the value,
 * otherwise a DoubleValue is returned.
 */ function re(t, e) {
    return function(t) {
        return "number" == typeof t && Number.isInteger(t) && !Y$1(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
    }(e) ? ee(e) : ne(t, e);
}

/**
 * Returns a value for a Date that's appropriate to put into a proto.
 */ function ie(t, e) {
    return t.Me ? new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + e.nanoseconds).slice(-9) + "Z" : {
        seconds: "" + e.seconds,
        nanos: e.nanoseconds
    };
}

/**
 * Returns a value for bytes that's appropriate to put in a proto.
 *
 * Visible for testing.
 */ function oe(t, e) {
    return t.Me ? e.toBase64() : e.toUint8Array();
}

/**
 * Returns a ByteString based on the proto string value.
 */ function se(t, e) {
    return ie(t, e.R());
}

function ue(t) {
    return k$1(!!t), j.T(function(t) {
        var e = Bt(t);
        return new x$1(e.seconds, e.nanos);
    }(t));
}

function ae(t, e) {
    return function(t) {
        return new B([ "projects", t.projectId, "databases", t.database ]);
    }(t).child("documents").child(e).N();
}

function ce(t, e) {
    return ae(t.s, e.path);
}

function he(t, e) {
    var n, r = function(t) {
        var e = B.$(t);
        return k$1(be(e)), e;
    }(e);
    return k$1(r.get(1) === t.s.projectId), k$1(!r.get(3) && !t.s.database || r.get(3) === t.s.database), 
    new Q$1((k$1((n = r).length > 4 && "documents" === n.get(4)), n.p(5)));
}

function fe(t, e) {
    return ae(t.s, e);
}

function le(t) {
    return new B([ "projects", t.s.projectId, "databases", t.s.database ]).N();
}

function pe(t, e, n) {
    return {
        name: ce(t, e),
        fields: n.proto.mapValue.fields
    };
}

function de(t, e) {
    var n;
    if (e instanceof ze) n = {
        update: pe(t, e.key, e.value)
    }; else if (e instanceof Je) n = {
        delete: ce(t, e.key)
    }; else if (e instanceof $e) n = {
        update: pe(t, e.key, e.data),
        updateMask: we(e.qe)
    }; else if (e instanceof We) n = {
        transform: {
            document: ce(t, e.key),
            fieldTransforms: e.fieldTransforms.map((function(t) {
                return function(t, e) {
                    var n = e.transform;
                    if (n instanceof Te) return {
                        fieldPath: e.field.N(),
                        setToServerValue: "REQUEST_TIME"
                    };
                    if (n instanceof ke) return {
                        fieldPath: e.field.N(),
                        appendMissingElements: {
                            values: n.elements
                        }
                    };
                    if (n instanceof De) return {
                        fieldPath: e.field.N(),
                        removeAllFromArray: {
                            values: n.elements
                        }
                    };
                    if (n instanceof Ve) return {
                        fieldPath: e.field.N(),
                        increment: n.Ue
                    };
                    throw T$1();
                }(0, t);
            }))
        }
    }; else {
        if (!(e instanceof Ke)) return T$1();
        n = {
            verify: ce(t, e.key)
        };
    }
    return e.We.Be || (n.currentDocument = function(t, e) {
        return void 0 !== e.updateTime ? {
            updateTime: se(t, e.updateTime)
        } : void 0 !== e.exists ? {
            exists: e.exists
        } : T$1();
    }(t, e.We)), n;
}

function ye(t, e) {
    return {
        documents: [ fe(t, e.path) ]
    };
}

function ve(t, e) {
    // Dissect the path into parent, collectionId, and optional key filter.
    var n = {
        structuredQuery: {}
    }, r = e.path;
    null !== e.collectionGroup ? (n.parent = fe(t, r), n.structuredQuery.from = [ {
        collectionId: e.collectionGroup,
        allDescendants: !0
    } ]) : (n.parent = fe(t, r.g()), n.structuredQuery.from = [ {
        collectionId: r.S()
    } ]);
    var i = function(t) {
        if (0 !== t.length) {
            var e = t.map((function(t) {
                // visible for testing
                return function(t) {
                    if ("==" /* EQUAL */ === t.op) {
                        if (Jt(t.value)) return {
                            unaryFilter: {
                                field: me(t.field),
                                op: "IS_NAN"
                            }
                        };
                        if (Ht(t.value)) return {
                            unaryFilter: {
                                field: me(t.field),
                                op: "IS_NULL"
                            }
                        };
                    } else if ("!=" /* NOT_EQUAL */ === t.op) {
                        if (Jt(t.value)) return {
                            unaryFilter: {
                                field: me(t.field),
                                op: "IS_NOT_NAN"
                            }
                        };
                        if (Ht(t.value)) return {
                            unaryFilter: {
                                field: me(t.field),
                                op: "IS_NOT_NULL"
                            }
                        };
                    }
                    return {
                        fieldFilter: {
                            field: me(t.field),
                            op: (e = t.op, Xt[e]),
                            value: t.value
                        }
                    };
                    // visible for testing
                                        var e;
                }(t);
            }));
            return 1 === e.length ? e[0] : {
                compositeFilter: {
                    op: "AND",
                    filters: e
                }
            };
        }
    }(e.filters);
    i && (n.structuredQuery.where = i);
    var o = function(t) {
        if (0 !== t.length) return t.map((function(t) {
            return {
                field: me((e = t).field),
                direction: (n = e.dir, Zt[n])
            };
            // visible for testing
                        var e, n;
        }));
    }(e.orderBy);
    o && (n.structuredQuery.orderBy = o);
    var s = function(t, e) {
        return t.Me || W$1(e) ? e : {
            value: e
        };
    }(t, e.limit);
    return null !== s && (n.structuredQuery.limit = s), e.startAt && (n.structuredQuery.startAt = ge(e.startAt)), 
    e.endAt && (n.structuredQuery.endAt = ge(e.endAt)), n;
}

function ge(t) {
    return {
        before: t.before,
        values: t.position
    };
}

// visible for testing
function me(t) {
    return {
        fieldPath: t.N()
    };
}

function we(t) {
    var e = [];
    return t.fields.forEach((function(t) {
        return e.push(t.N());
    })), {
        fieldPaths: e
    };
}

function be(t) {
    // Resource names have at least 4 components (project ID, database ID)
    return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
}

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Represents a transform within a TransformMutation. */ var Ee = function() {
    // Make sure that the structural type of `TransformOperation` is unique.
    // See https://github.com/microsoft/TypeScript/issues/5451
    this.Qe = void 0;
};

/**
 * Computes the local transform result against the provided `previousValue`,
 * optionally using the provided localWriteTime.
 */ function Ie(t, e, n) {
    return t instanceof Te ? function(t, e) {
        var n = {
            fields: {
                __type__: {
                    stringValue: "server_timestamp"
                },
                __local_write_time__: {
                    timestampValue: {
                        seconds: t.seconds,
                        nanos: t.nanoseconds
                    }
                }
            }
        };
        return e && (n.fields.__previous_value__ = e), {
            mapValue: n
        };
    }(n, e) : t instanceof ke ? Re(t, e) : t instanceof De ? _e(t, e) : function(t, e) {
        // PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
        // precision and resolves overflows by reducing precision, we do not
        // manually cap overflows at 2^63.
        var n = Ae(t, e), r = Se(n) + Se(t.Ue);
        return Wt(n) && Wt(t.Ue) ? ee(r) : ne(t.serializer, r);
    }(t, e);
}

/**
 * Computes a final transform result after the transform has been acknowledged
 * by the server, potentially using the server-provided transformResult.
 */ function Ne(t, e, n) {
    // The server just sends null as the transform result for array operations,
    // so we have to calculate a result the same as we do for local
    // applications.
    return t instanceof ke ? Re(t, e) : t instanceof De ? _e(t, e) : n;
}

/**
 * If this transform operation is not idempotent, returns the base value to
 * persist for this transform. If a base value is returned, the transform
 * operation is always applied to this base value, even if document has
 * already been updated.
 *
 * Base values provide consistent behavior for non-idempotent transforms and
 * allow us to return the same latency-compensated value even if the backend
 * has already applied the transform operation. The base value is null for
 * idempotent transforms, as they can be re-played even if the backend has
 * already applied them.
 *
 * @return a base value to store along with the mutation, or null for
 * idempotent transforms.
 */ function Ae(t, e) {
    return t instanceof Ve ? Wt(n = e) || function(t) {
        return !!t && "doubleValue" in t;
    }(n) ? e : {
        integerValue: 0
    } : null;
    var n;
}

/** Transforms a value into a server-generated timestamp. */ var Te = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return __extends(n, e), n;
}(Ee), ke = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).elements = t, n;
    }
    return __extends(n, e), n;
}(Ee);

/** Transforms an array value via a union operation. */ function Re(t, e) {
    for (var n = Le(e), r = function(t) {
        n.some((function(e) {
            return Mt(e, t);
        })) || n.push(t);
    }, i = 0, o = t.elements; i < o.length; i++) {
        r(o[i]);
    }
    return {
        arrayValue: {
            values: n
        }
    };
}

/** Transforms an array value via a remove operation. */ var De = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).elements = t, n;
    }
    return __extends(n, e), n;
}(Ee);

function _e(t, e) {
    for (var n = Le(e), r = function(t) {
        n = n.filter((function(e) {
            return !Mt(e, t);
        }));
    }, i = 0, o = t.elements; i < o.length; i++) {
        r(o[i]);
    }
    return {
        arrayValue: {
            values: n
        }
    };
}

/**
 * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
 * transforms. Converts all field values to integers or doubles, but unlike the
 * backend does not cap integer values at 2^63. Instead, JavaScript number
 * arithmetic is used and precision loss can occur for values greater than 2^53.
 */ var Ve = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).serializer = t, r.Ue = n, r;
    }
    return __extends(n, e), n;
}(Ee);

function Se(t) {
    return zt(t.integerValue || t.doubleValue);
}

function Le(t) {
    return Yt(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */ var Pe = /** @class */ function() {
    function t(t) {
        this.fields = t, 
        // TODO(dimond): validation of FieldMask
        // Sort the field mask to support `FieldMask.isEqual()` and assert below.
        t.sort($.P)
        /**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */;
    }
    return t.prototype.je = function(t) {
        for (var e = 0, n = this.fields; e < n.length; e++) {
            if (n[e].C(t)) return !0;
        }
        return !1;
    }, t.prototype.isEqual = function(t) {
        return S$1(this.fields, t.fields, (function(t, e) {
            return t.isEqual(e);
        }));
    }, t;
}(), Oe = function(t, e) {
    this.field = t, this.transform = e;
};

/** A field path and the TransformOperation to perform upon it. */
/** The result of successfully applying a mutation to the backend. */ var Ue = function(
/**
     * The version at which the mutation was committed:
     *
     * - For most operations, this is the updateTime in the WriteResult.
     * - For deletes, the commitTime of the WriteResponse (because deletes are
     *   not stored and have no updateTime).
     *
     * Note that these versions can be different: No-op writes will not change
     * the updateTime even though the commitTime advances.
     */
t, 
/**
     * The resulting fields returned from the backend after a
     * TransformMutation has been committed. Contains one FieldValue for each
     * FieldTransform that was in the mutation.
     *
     * Will be null if the mutation was not a TransformMutation.
     */
e) {
    this.version = t, this.transformResults = e;
}, qe = /** @class */ function() {
    function t(t, e) {
        this.updateTime = t, this.exists = e
        /** Creates a new empty Precondition. */;
    }
    return t.Ge = function() {
        return new t;
    }, 
    /** Creates a new Precondition with an exists flag. */ t.exists = function(e) {
        return new t(void 0, e);
    }, 
    /** Creates a new Precondition based on a version a document exists at. */ t.updateTime = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "Be", {
        /** Returns whether this Precondition is empty. */ get: function() {
            return void 0 === this.updateTime && void 0 === this.exists;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
    }, t;
}();

/**
 * Encodes a precondition for a mutation. This follows the model that the
 * backend accepts with the special case of an explicit "empty" precondition
 * (meaning no precondition).
 */
/**
 * Returns true if the preconditions is valid for the given document
 * (or null if no document is available).
 */
function Ce(t, e) {
    return void 0 !== t.updateTime ? e instanceof nn && e.version.isEqual(t.updateTime) : void 0 === t.exists || t.exists === e instanceof nn;
}

/**
 * A mutation describes a self-contained change to a document. Mutations can
 * create, replace, delete, and update subsets of documents.
 *
 * Mutations not only act on the value of the document but also its version.
 *
 * For local mutations (mutations that haven't been committed yet), we preserve
 * the existing version for Set, Patch, and Transform mutations. For Delete
 * mutations, we reset the version to 0.
 *
 * Here's the expected transition table.
 *
 * MUTATION           APPLIED TO            RESULTS IN
 *
 * SetMutation        Document(v3)          Document(v3)
 * SetMutation        NoDocument(v3)        Document(v0)
 * SetMutation        null                  Document(v0)
 * PatchMutation      Document(v3)          Document(v3)
 * PatchMutation      NoDocument(v3)        NoDocument(v3)
 * PatchMutation      null                  null
 * TransformMutation  Document(v3)          Document(v3)
 * TransformMutation  NoDocument(v3)        NoDocument(v3)
 * TransformMutation  null                  null
 * DeleteMutation     Document(v3)          NoDocument(v0)
 * DeleteMutation     NoDocument(v3)        NoDocument(v0)
 * DeleteMutation     null                  NoDocument(v0)
 *
 * For acknowledged mutations, we use the updateTime of the WriteResponse as
 * the resulting version for Set, Patch, and Transform mutations. As deletes
 * have no explicit update time, we use the commitTime of the WriteResponse for
 * Delete mutations.
 *
 * If a mutation is acknowledged by the backend but fails the precondition check
 * locally, we return an `UnknownDocument` and rely on Watch to send us the
 * updated version.
 *
 * Note that TransformMutations don't create Documents (in the case of being
 * applied to a NoDocument), even though they would on the backend. This is
 * because the client always combines the TransformMutation with a SetMutation
 * or PatchMutation and we only want to apply the transform if the prior
 * mutation resulted in a Document (always true for a SetMutation, but not
 * necessarily for a PatchMutation).
 *
 * ## Subclassing Notes
 *
 * Subclasses of Mutation need to implement applyToRemoteDocument() and
 * applyToLocalView() to implement the actual behavior of applying the mutation
 * to some source document.
 */ var Me = function() {};

/**
 * Applies this mutation to the given MaybeDocument or null for the purposes
 * of computing a new remote document. If the input document doesn't match the
 * expected state (e.g. it is null or outdated), an `UnknownDocument` can be
 * returned.
 *
 * @param mutation The mutation to apply.
 * @param maybeDoc The document to mutate. The input document can be null if
 *     the client has no knowledge of the pre-mutation state of the document.
 * @param mutationResult The result of applying the mutation from the backend.
 * @return The mutated document. The returned document may be an
 *     UnknownDocument if the mutation could not be applied to the locally
 *     cached base document.
 */ function Fe(t, e, n) {
    return t instanceof ze ? function(t, e, n) {
        // Unlike applySetMutationToLocalView, if we're applying a mutation to a
        // remote document the server has accepted the mutation so the precondition
        // must have held.
        return new nn(t.key, n.version, t.value, {
            hasCommittedMutations: !0
        });
    }(t, 0, n) : t instanceof $e ? function(t, e, n) {
        if (!Ce(t.We, e)) 
        // Since the mutation was not rejected, we know that the  precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new on(t.key, n.version);
        var r = Qe(t, e);
        return new nn(t.key, n.version, r, {
            hasCommittedMutations: !0
        });
    }(t, e, n) : t instanceof We ? function(t, e, n) {
        if (k$1(null != n.transformResults), !Ce(t.We, e)) 
        // Since the mutation was not rejected, we know that the  precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new on(t.key, n.version);
        var r = Ye(t, e), i = 
        /**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use after a
 * TransformMutation has been acknowledged by the server.
 *
 * @param fieldTransforms The field transforms to apply the result to.
 * @param baseDoc The document prior to applying this mutation batch.
 * @param serverTransformResults The transform results received by the server.
 * @return The transform results list.
 */
        function(t, e, n) {
            var r = [];
            k$1(t.length === n.length);
            for (var i = 0; i < n.length; i++) {
                var o = t[i], s = o.transform, u = null;
                e instanceof nn && (u = e.field(o.field)), r.push(Ne(s, u, n[i]));
            }
            return r;
        }(t.fieldTransforms, e, n.transformResults), o = n.version, s = He(t, r.data(), i);
        return new nn(t.key, o, s, {
            hasCommittedMutations: !0
        });
    }(t, e, n) : function(t, e, n) {
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        return new rn(t.key, n.version, {
            hasCommittedMutations: !0
        });
    }(t, 0, n);
}

/**
 * Applies this mutation to the given MaybeDocument or null for the purposes
 * of computing the new local view of a document. Both the input and returned
 * documents can be null.
 *
 * @param mutation The mutation to apply.
 * @param maybeDoc The document to mutate. The input document can be null if
 *     the client has no knowledge of the pre-mutation state of the document.
 * @param baseDoc The state of the document prior to this mutation batch. The
 *     input document can be null if the client has no knowledge of the
 *     pre-mutation state of the document.
 * @param localWriteTime A timestamp indicating the local write time of the
 *     batch this mutation is a part of.
 * @return The mutated document. The returned document may be null, but only
 *     if maybeDoc was null and the mutation would not create a new document.
 */ function xe(t, e, n, r) {
    return t instanceof ze ? function(t, e) {
        if (!Ce(t.We, e)) return e;
        var n = Be(e);
        return new nn(t.key, n, t.value, {
            Ke: !0
        });
    }(t, e) : t instanceof $e ? function(t, e) {
        if (!Ce(t.We, e)) return e;
        var n = Be(e), r = Qe(t, e);
        return new nn(t.key, n, r, {
            Ke: !0
        });
    }(t, e) : t instanceof We ? function(t, e, n, r) {
        if (!Ce(t.We, e)) return e;
        var i = Ye(t, e), o = function(t, e, n, r) {
            for (var i = [], o = 0, s = t; o < s.length; o++) {
                var u = s[o], a = u.transform, c = null;
                n instanceof nn && (c = n.field(u.field)), null === c && r instanceof nn && (
                // If the current document does not contain a value for the mutated
                // field, use the value that existed before applying this mutation
                // batch. This solves an edge case where a PatchMutation clears the
                // values in a nested map before the TransformMutation is applied.
                c = r.field(u.field)), i.push(Ie(a, c, e));
            }
            return i;
        }(t.fieldTransforms, n, e, r), s = He(t, i.data(), o);
        return new nn(t.key, i.version, s, {
            Ke: !0
        });
    }(t, e, r, n) : function(t, e) {
        return Ce(t.We, e) ? new rn(t.key, j.min()) : e;
    }(t, e);
}

/**
 * If this mutation is not idempotent, returns the base value to persist with
 * this mutation. If a base value is returned, the mutation is always applied
 * to this base value, even if document has already been updated.
 *
 * The base value is a sparse object that consists of only the document
 * fields for which this mutation contains a non-idempotent transformation
 * (e.g. a numeric increment). The provided value guarantees consistent
 * behavior for non-idempotent transforms and allow us to return the same
 * latency-compensated value even if the backend has already applied the
 * mutation. The base value is null for idempotent mutations, as they can be
 * re-played even if the backend has already applied them.
 *
 * @return a base value to store along with the mutation, or null for
 * idempotent mutations.
 */ function je(t, e) {
    return t instanceof We ? function(t, e) {
        for (var n = null, r = 0, i = t.fieldTransforms; r < i.length; r++) {
            var o = i[r], s = e instanceof nn ? e.field(o.field) : void 0, u = Ae(o.transform, s || null);
            null != u && (n = null == n ? (new Xe).set(o.field, u) : n.set(o.field, u));
        }
        return n ? n.ze() : null;
    }(t, e) : null;
}

function Ge(t, e) {
    return t.type === e.type && !!t.key.isEqual(e.key) && !!t.We.isEqual(e.We) && (0 /* Set */ === t.type ? t.value.isEqual(e.value) : 1 /* Patch */ === t.type ? t.data.isEqual(e.data) && t.qe.isEqual(e.qe) : 2 /* Transform */ !== t.type || S$1(t.fieldTransforms, t.fieldTransforms, (function(t, e) {
        return function(t, e) {
            return t.field.isEqual(e.field) && function(t, e) {
                return t instanceof ke && e instanceof ke || t instanceof De && e instanceof De ? S$1(t.elements, e.elements, Mt) : t instanceof Ve && e instanceof Ve ? Mt(t.Ue, e.Ue) : t instanceof Te && e instanceof Te;
            }(t.transform, e.transform);
        }(t, e);
    })));
}

/**
 * Returns the version from the given document for use as the result of a
 * mutation. Mutations are defined to return the version of the base document
 * only if it is an existing document. Deleted and unknown documents have a
 * post-mutation version of SnapshotVersion.min().
 */ function Be(t) {
    return t instanceof nn ? t.version : j.min();
}

/**
 * A mutation that creates or replaces the document at the given key with the
 * object value contents.
 */ var ze = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).key = t, i.value = n, i.We = r, i.type = 0 /* Set */ , 
        i;
    }
    return __extends(n, e), n;
}(Me), $e = /** @class */ function(e) {
    function n(t, n, r, i) {
        var o = this;
        return (o = e.call(this) || this).key = t, o.data = n, o.qe = r, o.We = i, o.type = 1 /* Patch */ , 
        o;
    }
    return __extends(n, e), n;
}(Me);

function Qe(t, e) {
    return function(t, e) {
        var n = new Xe(e);
        return t.qe.fields.forEach((function(e) {
            if (!e._()) {
                var r = t.data.field(e);
                null !== r ? n.set(e, r) : n.delete(e);
            }
        })), n.ze();
    }(t, e instanceof nn ? e.data() : Ze.empty());
}

var We = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).key = t, r.fieldTransforms = n, r.type = 2 /* Transform */ , 
        // NOTE: We set a precondition of exists: true as a safety-check, since we
        // always combine TransformMutations with a SetMutation or PatchMutation which
        // (if successful) should end up with an existing document.
        r.We = qe.exists(!0), r;
    }
    return __extends(n, e), n;
}(Me);

function Ye(t, e) {
    return e;
}

function He(t, e, n) {
    for (var r = new Xe(e), i = 0; i < t.fieldTransforms.length; i++) {
        var o = t.fieldTransforms[i];
        r.set(o.field, n[i]);
    }
    return r.ze();
}

/** A mutation that deletes the document at the given key. */ var Je = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).key = t, r.We = n, r.type = 3 /* Delete */ , r;
    }
    return __extends(n, e), n;
}(Me), Ke = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).key = t, r.We = n, r.type = 4 /* Verify */ , r;
    }
    return __extends(n, e), n;
}(Me), Ze = /** @class */ function() {
    function t(t) {
        this.proto = t;
    }
    return t.empty = function() {
        return new t({
            mapValue: {}
        });
    }, 
    /**
     * Returns the value at the given path or null.
     *
     * @param path the path to search
     * @return The value at the path or if there it doesn't exist.
     */
    t.prototype.field = function(t) {
        if (t._()) return this.proto;
        for (var e = this.proto, n = 0; n < t.length - 1; ++n) {
            if (!e.mapValue.fields) return null;
            if (!Kt(e = e.mapValue.fields[t.get(n)])) return null;
        }
        return (e = (e.mapValue.fields || {})[t.S()]) || null;
    }, t.prototype.isEqual = function(t) {
        return Mt(this.proto, t.proto);
    }, t;
}(), Xe = /** @class */ function() {
    /**
     * @param baseObject The object to mutate.
     */
    function t(t) {
        void 0 === t && (t = Ze.empty()), this.He = t, 
        /** A map that contains the accumulated changes in this builder. */
        this.Ye = new Map;
    }
    /**
     * Sets the field to the provided value.
     *
     * @param path The field path to set.
     * @param value The value to set.
     * @return The current Builder instance.
     */    return t.prototype.set = function(t, e) {
        return this.Je(t, e), this;
    }, 
    /**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path The field path to remove.
     * @return The current Builder instance.
     */
    t.prototype.delete = function(t) {
        return this.Je(t, null), this;
    }, 
    /**
     * Adds `value` to the overlay map at `path`. Creates nested map entries if
     * needed.
     */
    t.prototype.Je = function(t, e) {
        for (var n = this.Ye, r = 0; r < t.length - 1; ++r) {
            var i = t.get(r), o = n.get(i);
            o instanceof Map ? 
            // Re-use a previously created map
            n = o : o && 10 /* ObjectValue */ === Ct(o) ? (
            // Convert the existing Protobuf MapValue into a map
            o = new Map(Object.entries(o.mapValue.fields || {})), n.set(i, o), n = o) : (
            // Create an empty map to represent the current nesting level
            o = new Map, n.set(i, o), n = o);
        }
        n.set(t.S(), e);
    }, 
    /** Returns an ObjectValue with all mutations applied. */ t.prototype.ze = function() {
        var t = this.Xe($.k(), this.Ye);
        return null != t ? new Ze(t) : this.He;
    }, 
    /**
     * Applies any overlays from `currentOverlays` that exist at `currentPath`
     * and returns the merged data at `currentPath` (or null if there were no
     * changes).
     *
     * @param currentPath The path at the current nesting level. Can be set to
     * FieldValue.emptyPath() to represent the root.
     * @param currentOverlays The overlays at the current nesting level in the
     * same format as `overlayMap`.
     * @return The merged data at `currentPath` or null if no modifications
     * were applied.
     */
    t.prototype.Xe = function(t, e) {
        var n = this, r = !1, i = this.He.field(t), o = Kt(i) ? // If there is already data at the current path, base our
        Object.assign({}, i.mapValue.fields) : {};
        return e.forEach((function(e, i) {
            if (e instanceof Map) {
                var s = n.Xe(t.child(i), e);
                null != s && (o[i] = s, r = !0);
            } else null !== e ? (o[i] = e, r = !0) : o.hasOwnProperty(i) && (delete o[i], r = !0);
        })), r ? {
            mapValue: {
                fields: o
            }
        } : null;
    }, t;
}();

/**
 * Returns a FieldMask built from all fields in a MapValue.
 */
function tn(t) {
    var e = [];
    return U$1(t.fields || {}, (function(t, n) {
        var r = new $([ t ]);
        if (Kt(n)) {
            var i = tn(n.mapValue).fields;
            if (0 === i.length) 
            // Preserve the empty map by adding it to the FieldMask.
            e.push(r); else 
            // For nested and non-empty ObjectValues, add the FieldPath of the
            // leaf nodes.
            for (var o = 0, s = i; o < s.length; o++) {
                var u = s[o];
                e.push(r.child(u));
            }
        } else 
        // For nested and non-empty ObjectValues, add the FieldPath of the leaf
        // nodes.
        e.push(r);
    })), new Pe(e)
    /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /**
 * The result of a lookup for a given path may be an existing document or a
 * marker that this document does not exist at a given version.
 */;
}

var en = function(t, e) {
    this.key = t, this.version = e;
}, nn = /** @class */ function(e) {
    function n(t, n, r, i) {
        var o = this;
        return (o = e.call(this, t, n) || this).Ze = r, o.Ke = !!i.Ke, o.hasCommittedMutations = !!i.hasCommittedMutations, 
        o;
    }
    return __extends(n, e), n.prototype.field = function(t) {
        return this.Ze.field(t);
    }, n.prototype.data = function() {
        return this.Ze;
    }, n.prototype.tn = function() {
        return this.Ze.proto;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.Ke === t.Ke && this.hasCommittedMutations === t.hasCommittedMutations && this.Ze.isEqual(t.Ze);
    }, n.prototype.toString = function() {
        return "Document(" + this.key + ", " + this.version + ", " + this.Ze.toString() + ", {hasLocalMutations: " + this.Ke + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return this.Ke || this.hasCommittedMutations;
        },
        enumerable: !1,
        configurable: !0
    }), n;
}(en), rn = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this, t, n) || this).hasCommittedMutations = !(!r || !r.hasCommittedMutations), 
        i;
    }
    return __extends(n, e), n.prototype.toString = function() {
        return "NoDocument(" + this.key + ", " + this.version + ")";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return this.hasCommittedMutations;
        },
        enumerable: !1,
        configurable: !0
    }), n.prototype.isEqual = function(t) {
        return t instanceof n && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }, n;
}(en), on = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return __extends(n, e), n.prototype.toString = function() {
        return "UnknownDocument(" + this.key + ", " + this.version + ")";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return !0;
        },
        enumerable: !1,
        configurable: !0
    }), n.prototype.isEqual = function(t) {
        return t instanceof n && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }, n;
}(en);

/**
 * Represents a document in Firestore with a key, version, data and whether the
 * data has local mutations applied to it.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Casts `obj` to `T`. Throws if  `obj` is not an instance of `T`.
 *
 * This cast is used in the Lite and Full SDK to verify instance types for
 * arguments passed to the public API.
 */
function sn(t, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
e) {
    if (!(t instanceof e)) throw e.name === t.constructor.name ? new F$1(M$1.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass '" + e.name + "' from a different Firestore SDK?") : new F$1(M$1.INVALID_ARGUMENT, "Expected type '" + e.name + "', but was '" + t.constructor.name + "'");
    return t;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Query encapsulates all the query attributes we support in the SDK. It can
 * be run against the LocalStore, as well as be converted to a `Target` to
 * query the RemoteStore results.
 *
 * Visible for testing.
 */ var un = /** @class */ function() {
    /**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */
    function t(t, e, n, r, i, o /* First */ , s, u) {
        void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
        void 0 === i && (i = null), void 0 === o && (o = "F"), void 0 === s && (s = null), 
        void 0 === u && (u = null), this.path = t, this.collectionGroup = e, this.en = n, 
        this.filters = r, this.limit = i, this.nn = o, this.startAt = s, this.endAt = u, 
        this.sn = null, 
        // The corresponding `Target` of this `Query` instance.
        this.rn = null, this.startAt, this.endAt;
    }
    /**
     * Helper to convert a collection group query into a collection query at a
     * specific path. This is used when executing collection group queries, since
     * we have to split the query into a set of collection queries at multiple
     * paths.
     */    return t.prototype.on = function(e) {
        return new t(e, 
        /*collectionGroup=*/ null, this.en.slice(), this.filters.slice(), this.limit, this.nn, this.startAt, this.endAt);
    }, t.prototype.hn = function() {
        return 0 === this.filters.length && null === this.limit && null == this.startAt && null == this.endAt && (0 === this.en.length || 1 === this.en.length && this.en[0].field.L());
    }, t.prototype.an = function() {
        return !W$1(this.limit) && "F" /* First */ === this.nn;
    }, t.prototype.un = function() {
        return !W$1(this.limit) && "L" /* Last */ === this.nn;
    }, t.prototype.cn = function() {
        return this.en.length > 0 ? this.en[0].field : null;
    }, t.prototype.ln = function() {
        for (var t = 0, e = this.filters; t < e.length; t++) {
            var n = e[t];
            if (n._n()) return n.field;
        }
        return null;
    }, t.prototype.fn = function(t) {
        for (var e = 0, n = this.filters; e < n.length; e++) {
            var r = n[e];
            if (t.indexOf(r.op) >= 0) return r.op;
        }
        return null;
    }, t;
}();

/** Creates a new Query for a query that matches all documents at `path` */ function an(t) {
    return new un(t);
}

/**
 * Creates a new Query for a collection group query that matches all documents
 * within the provided collection group.
 */
/**
 * Returns whether the query matches a collection group rather than a specific
 * collection.
 */ function cn(t) {
    return null !== t.collectionGroup;
}

/**
 * Returns the implicit order by constraint that is used to execute the Query,
 * which can be different from the order by constraints the user provided (e.g.
 * the SDK and backend always orders by `__name__`).
 */ function hn(t) {
    var e = sn(t, un);
    if (null === e.sn) {
        e.sn = [];
        var n = e.ln(), r = e.cn();
        if (null !== n && null === r) 
        // In order to implicitly add key ordering, we must also add the
        // inequality filter field for it to be a valid query.
        // Note that the default inequality field and key ordering is ascending.
        n.L() || e.sn.push(new Pn(n)), e.sn.push(new Pn($.M(), "asc" /* ASCENDING */)); else {
            for (var i = !1, o = 0, s = e.en; o < s.length; o++) {
                var u = s[o];
                e.sn.push(u), u.field.L() && (i = !0);
            }
            if (!i) {
                // The order of the implicit key ordering always matches the last
                // explicit order by
                var a = e.en.length > 0 ? e.en[e.en.length - 1].dir : "asc" /* ASCENDING */;
                e.sn.push(new Pn($.M(), a));
            }
        }
    }
    return e.sn;
}

/**
 * Converts this `Query` instance to it's corresponding `Target` representation.
 */ function fn(t) {
    var e = sn(t, un);
    if (!e.rn) if ("F" /* First */ === e.nn) e.rn = J$1(e.path, e.collectionGroup, hn(e), e.filters, e.limit, e.startAt, e.endAt); else {
        for (
        // Flip the orderBy directions since we want the last results
        var n = [], r = 0, i = hn(e); r < i.length; r++) {
            var o = i[r], s = "desc" /* DESCENDING */ === o.dir ? "asc" /* ASCENDING */ : "desc" /* DESCENDING */;
            n.push(new Pn(o.field, s));
        }
        // We need to swap the cursors to match the now-flipped query ordering.
                var u = e.endAt ? new _n(e.endAt.position, !e.endAt.before) : null, a = e.startAt ? new _n(e.startAt.position, !e.startAt.before) : null;
        // Now return as a LimitType.First query.
                e.rn = J$1(e.path, e.collectionGroup, n, e.filters, e.limit, u, a);
    }
    return e.rn;
}

function ln(t, e, n) {
    return new un(t.path, t.collectionGroup, t.en.slice(), t.filters.slice(), e, n, t.startAt, t.endAt);
}

function pn(t, e) {
    return new un(t.path, t.collectionGroup, t.en.slice(), t.filters.slice(), t.limit, t.nn, e, t.endAt);
}

function dn(t, e) {
    return new un(t.path, t.collectionGroup, t.en.slice(), t.filters.slice(), t.limit, t.nn, t.startAt, e);
}

function yn(t, e) {
    return Z$1(fn(t), fn(e)) && t.nn === e.nn;
}

// TODO(b/29183165): This is used to get a unique string from a query to, for
// example, use as a dictionary key, but the implementation is subject to
// collisions. Make it collision-free.
function vn(t) {
    return K$1(fn(t)) + "|lt:" + t.nn;
}

function gn(t) {
    return "Query(target=" + function(t) {
        var e = t.path.N();
        return null !== t.collectionGroup && (e += " collectionGroup=" + t.collectionGroup), 
        t.filters.length > 0 && (e += ", filters: [" + t.filters.map((function(t) {
            return (e = t).field.N() + " " + e.op + " " + Gt(e.value);
            /** Returns a debug description for `filter`. */            var e;
            /** Filter that matches on key fields (i.e. '__name__'). */        })).join(", ") + "]"), 
        W$1(t.limit) || (e += ", limit: " + t.limit), t.orderBy.length > 0 && (e += ", orderBy: [" + t.orderBy.map((function(t) {
            return (e = t).field.N() + " (" + e.dir + ")";
            var e;
        })).join(", ") + "]"), t.startAt && (e += ", startAt: " + Vn(t.startAt)), t.endAt && (e += ", endAt: " + Vn(t.endAt)), 
        "Target(" + e + ")";
    }(fn(t)) + "; limitType=" + t.nn + ")";
}

/** Returns whether `doc` matches the constraints of `query`. */ function mn(t, e) {
    return function(t, e) {
        var n = e.key.path;
        return null !== t.collectionGroup ? e.key.W(t.collectionGroup) && t.path.C(n) : Q$1.j(t.path) ? t.path.isEqual(n) : t.path.D(n);
    }(t, e) && function(t, e) {
        for (var n = 0, r = t.en; n < r.length; n++) {
            var i = r[n];
            // order by key always matches
                        if (!i.field.L() && null === e.field(i.field)) return !1;
        }
        return !0;
    }(t, e) && function(t, e) {
        for (var n = 0, r = t.filters; n < r.length; n++) {
            if (!r[n].matches(e)) return !1;
        }
        return !0;
    }(t, e) && function(t, e) {
        return !(t.startAt && !Sn(t.startAt, hn(t), e)) && (!t.endAt || !Sn(t.endAt, hn(t), e));
    }(t, e);
}

function wn(t) {
    return function(e, n) {
        for (var r = !1, i = 0, o = hn(t); i < o.length; i++) {
            var s = o[i], u = On(s, e, n);
            if (0 !== u) return u;
            r = r || s.field.L();
        }
        return 0;
    };
}

var bn = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).field = t, i.op = n, i.value = r, i;
    }
    /**
     * Creates a filter based on the provided arguments.
     */    return __extends(n, e), n.create = function(t, e, r) {
        if (t.L()) return "in" /* IN */ === e || "not-in" /* NOT_IN */ === e ? this.dn(t, e, r) : new En(t, e, r);
        if (Ht(r)) {
            if ("==" /* EQUAL */ !== e && "!=" /* NOT_EQUAL */ !== e) 
            // TODO(ne-queries): Update error message to include != comparison.
            throw new F$1(M$1.INVALID_ARGUMENT, "Invalid query. Null supports only equality comparisons.");
            return new n(t, e, r);
        }
        if (Jt(r)) {
            if ("==" /* EQUAL */ !== e && "!=" /* NOT_EQUAL */ !== e) 
            // TODO(ne-queries): Update error message to include != comparison.
            throw new F$1(M$1.INVALID_ARGUMENT, "Invalid query. NaN supports only equality comparisons.");
            return new n(t, e, r);
        }
        return "array-contains" /* ARRAY_CONTAINS */ === e ? new Tn(t, r) : "in" /* IN */ === e ? new kn(t, r) : "not-in" /* NOT_IN */ === e ? new Rn(t, r) : "array-contains-any" /* ARRAY_CONTAINS_ANY */ === e ? new Dn(t, r) : new n(t, e, r);
    }, n.dn = function(t, e, n) {
        return "in" /* IN */ === e ? new In(t, n) : new Nn(t, n);
    }, n.prototype.matches = function(t) {
        var e = t.field(this.field);
        // Types do not have to match in NOT_EQUAL filters.
                return "!=" /* NOT_EQUAL */ === this.op ? null !== e && this.wn(xt(e, this.value)) : null !== e && Ct(this.value) === Ct(e) && this.wn(xt(e, this.value));
        // Only compare types with matching backend order (such as double and int).
        }, n.prototype.wn = function(t) {
        switch (this.op) {
          case "<" /* LESS_THAN */ :
            return t < 0;

          case "<=" /* LESS_THAN_OR_EQUAL */ :
            return t <= 0;

          case "==" /* EQUAL */ :
            return 0 === t;

          case "!=" /* NOT_EQUAL */ :
            return 0 !== t;

          case ">" /* GREATER_THAN */ :
            return t > 0;

          case ">=" /* GREATER_THAN_OR_EQUAL */ :
            return t >= 0;

          default:
            return T$1();
        }
    }, n.prototype._n = function() {
        return [ "<" /* LESS_THAN */ , "<=" /* LESS_THAN_OR_EQUAL */ , ">" /* GREATER_THAN */ , ">=" /* GREATER_THAN_OR_EQUAL */ , "!=" /* NOT_EQUAL */ ].indexOf(this.op) >= 0;
    }, n;
}((function() {}));

var En = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this, t, n, r) || this).key = Q$1.B(r.referenceValue), i;
    }
    return __extends(n, e), n.prototype.matches = function(t) {
        var e = Q$1.P(t.key, this.key);
        return this.wn(e);
    }, n;
}(bn), In = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this, t, "in" /* IN */ , n) || this).keys = An("in" /* IN */ , n), 
        r;
    }
    return __extends(n, e), n.prototype.matches = function(t) {
        return this.keys.some((function(e) {
            return e.isEqual(t.key);
        }));
    }, n;
}(bn), Nn = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this, t, "not-in" /* NOT_IN */ , n) || this).keys = An("not-in" /* NOT_IN */ , n), 
        r;
    }
    return __extends(n, e), n.prototype.matches = function(t) {
        return !this.keys.some((function(e) {
            return e.isEqual(t.key);
        }));
    }, n;
}(bn);

/** Filter that matches on key fields within an array. */ function An(t, e) {
    var n;
    return ((null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []).map((function(t) {
        return Q$1.B(t.referenceValue);
    }));
}

/** A Filter that implements the array-contains operator. */ var Tn = /** @class */ function(e) {
    function n(t, n) {
        return e.call(this, t, "array-contains" /* ARRAY_CONTAINS */ , n) || this;
    }
    return __extends(n, e), n.prototype.matches = function(t) {
        var e = t.field(this.field);
        return Yt(e) && Ft(e.arrayValue, this.value);
    }, n;
}(bn), kn = /** @class */ function(e) {
    function n(t, n) {
        return e.call(this, t, "in" /* IN */ , n) || this;
    }
    return __extends(n, e), n.prototype.matches = function(t) {
        var e = t.field(this.field);
        return null !== e && Ft(this.value.arrayValue, e);
    }, n;
}(bn), Rn = /** @class */ function(e) {
    function n(t, n) {
        return e.call(this, t, "not-in" /* NOT_IN */ , n) || this;
    }
    return __extends(n, e), n.prototype.matches = function(t) {
        var e = t.field(this.field);
        return null !== e && !Ft(this.value.arrayValue, e);
    }, n;
}(bn), Dn = /** @class */ function(e) {
    function n(t, n) {
        return e.call(this, t, "array-contains-any" /* ARRAY_CONTAINS_ANY */ , n) || this;
    }
    return __extends(n, e), n.prototype.matches = function(t) {
        var e = this, n = t.field(this.field);
        return !(!Yt(n) || !n.arrayValue.values) && n.arrayValue.values.some((function(t) {
            return Ft(e.value.arrayValue, t);
        }));
    }, n;
}(bn), _n = function(t, e) {
    this.position = t, this.before = e;
};

/** A Filter that implements the IN operator. */ function Vn(t) {
    // TODO(b/29183165): Make this collision robust.
    return (t.before ? "b" : "a") + ":" + t.position.map((function(t) {
        return Gt(t);
    })).join(",");
}

/**
 * Returns true if a document sorts before a bound using the provided sort
 * order.
 */ function Sn(t, e, n) {
    for (var r = 0, i = 0; i < t.position.length; i++) {
        var o = e[i], s = t.position[i];
        if (r = o.field.L() ? Q$1.P(Q$1.B(s.referenceValue), n.key) : xt(s, n.field(o.field)), 
        "desc" /* DESCENDING */ === o.dir && (r *= -1), 0 !== r) break;
    }
    return t.before ? r <= 0 : r < 0;
}

function Ln(t, e) {
    if (null === t) return null === e;
    if (null === e) return !1;
    if (t.before !== e.before || t.position.length !== e.position.length) return !1;
    for (var n = 0; n < t.position.length; n++) if (!Mt(t.position[n], e.position[n])) return !1;
    return !0;
}

/**
 * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
 */ var Pn = function(t, e /* ASCENDING */) {
    void 0 === e && (e = "asc"), this.field = t, this.dir = e;
};

function On(t, e, n) {
    var r = t.field.L() ? Q$1.P(e.key, n.key) : function(t, e, n) {
        var r = e.field(t), i = n.field(t);
        return null !== r && null !== i ? xt(r, i) : T$1();
    }(t.field, e, n);
    switch (t.dir) {
      case "asc" /* ASCENDING */ :
        return r;

      case "desc" /* DESCENDING */ :
        return -1 * r;

      default:
        return T$1();
    }
}

function Un(t, e) {
    return t.dir === e.dir && t.field.isEqual(e.field);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A batch of mutations that will be sent as one unit to the backend.
 */ var qn = /** @class */ function() {
    /**
     * @param batchId The unique ID of this mutation batch.
     * @param localWriteTime The original write time of this mutation.
     * @param baseMutations Mutations that are used to populate the base
     * values when this mutation is applied locally. This can be used to locally
     * overwrite values that are persisted in the remote document cache. Base
     * mutations are never sent to the backend.
     * @param mutations The user-provided mutations in this mutation batch.
     * User-provided mutations are applied both locally and remotely on the
     * backend.
     */
    function t(t, e, n, r) {
        this.batchId = t, this.mn = e, this.baseMutations = n, this.mutations = r
        /**
     * Applies all the mutations in this MutationBatch to the specified document
     * to create a new remote document
     *
     * @param docKey The key of the document to apply mutations to.
     * @param maybeDoc The document to apply mutations to.
     * @param batchResult The result of applying the MutationBatch to the
     * backend.
     */;
    }
    return t.prototype.Tn = function(t, e, n) {
        for (var r = n.En, i = 0; i < this.mutations.length; i++) {
            var o = this.mutations[i];
            o.key.isEqual(t) && (e = Fe(o, e, r[i]));
        }
        return e;
    }, 
    /**
     * Computes the local view of a document given all the mutations in this
     * batch.
     *
     * @param docKey The key of the document to apply mutations to.
     * @param maybeDoc The document to apply mutations to.
     */
    t.prototype.In = function(t, e) {
        // First, apply the base state. This allows us to apply non-idempotent
        // transform against a consistent set of values.
        for (var n = 0, r = this.baseMutations; n < r.length; n++) {
            var i = r[n];
            i.key.isEqual(t) && (e = xe(i, e, e, this.mn));
        }
        // Second, apply all user-provided mutations.
        for (var o = e, s = 0, u = this.mutations; s < u.length; s++) {
            var a = u[s];
            a.key.isEqual(t) && (e = xe(a, e, o, this.mn));
        }
        return e;
    }, 
    /**
     * Computes the local view for all provided documents given the mutations in
     * this batch.
     */
    t.prototype.Rn = function(t) {
        var e = this, n = t;
        // TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
        // directly (as done in `applyToLocalView()`), we can reduce the complexity
        // to O(n).
                return this.mutations.forEach((function(r) {
            var i = e.In(r.key, t.get(r.key));
            i && (n = n.st(r.key, i));
        })), n;
    }, t.prototype.keys = function() {
        return this.mutations.reduce((function(t, e) {
            return t.add(e.key);
        }), wt());
    }, t.prototype.isEqual = function(t) {
        return this.batchId === t.batchId && S$1(this.mutations, t.mutations, (function(t, e) {
            return Ge(t, e);
        })) && S$1(this.baseMutations, t.baseMutations, (function(t, e) {
            return Ge(t, e);
        }));
    }, t;
}(), Cn = /** @class */ function() {
    function t(t, e, n, 
    /**
     * A pre-computed mapping from each mutated document to the resulting
     * version.
     */
    r) {
        this.batch = t, this.An = e, this.En = n, this.Pn = r
        /**
     * Creates a new MutationBatchResult for the given batch and results. There
     * must be one result for each mutation in the batch. This static factory
     * caches a document=>version mapping (docVersions).
     */;
    }
    return t.from = function(e, n, r) {
        k$1(e.mutations.length === r.length);
        for (var i = gt, o = e.mutations, s = 0; s < o.length; s++) i = i.st(o[s].key, r[s].version);
        return new t(e, n, r, i);
    }, t;
}(), Mn = /** @class */ function() {
    function t(t) {
        var e = this;
        // NOTE: next/catchCallback will always point to our own wrapper functions,
        // not the user's raw next() or catch() callbacks.
                this.Vn = null, this.yn = null, 
        // When the operation resolves, we'll set result or error and mark isDone.
        this.result = void 0, this.error = void 0, this.pn = !1, 
        // Set to true when .then() or .catch() are called and prevents additional
        // chaining.
        this.gn = !1, t((function(t) {
            e.pn = !0, e.result = t, e.Vn && 
            // value should be defined unless T is Void, but we can't express
            // that in the type system.
            e.Vn(t);
        }), (function(t) {
            e.pn = !0, e.error = t, e.yn && e.yn(t);
        }));
    }
    return t.prototype.catch = function(t) {
        return this.next(void 0, t);
    }, t.prototype.next = function(e, n) {
        var r = this;
        return this.gn && T$1(), this.gn = !0, this.pn ? this.error ? this.vn(n, this.error) : this.bn(e, this.result) : new t((function(t, i) {
            r.Vn = function(n) {
                r.bn(e, n).next(t, i);
            }, r.yn = function(e) {
                r.vn(n, e).next(t, i);
            };
        }));
    }, t.prototype.Sn = function() {
        var t = this;
        return new Promise((function(e, n) {
            t.next(e, n);
        }));
    }, t.prototype.Cn = function(e) {
        try {
            var n = e();
            return n instanceof t ? n : t.resolve(n);
        } catch (e) {
            return t.reject(e);
        }
    }, t.prototype.bn = function(e, n) {
        return e ? this.Cn((function() {
            return e(n);
        })) : t.resolve(n);
    }, t.prototype.vn = function(e, n) {
        return e ? this.Cn((function() {
            return e(n);
        })) : t.reject(n);
    }, t.resolve = function(e) {
        return new t((function(t, n) {
            t(e);
        }));
    }, t.reject = function(e) {
        return new t((function(t, n) {
            n(e);
        }));
    }, t.Dn = function(
    // Accept all Promise types in waitFor().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e) {
        return new t((function(t, n) {
            var r = 0, i = 0, o = !1;
            e.forEach((function(e) {
                ++r, e.next((function() {
                    ++i, o && i === r && t();
                }), (function(t) {
                    return n(t);
                }));
            })), o = !0, i === r && t();
        }));
    }, 
    /**
     * Given an array of predicate functions that asynchronously evaluate to a
     * boolean, implements a short-circuiting `or` between the results. Predicates
     * will be evaluated until one of them returns `true`, then stop. The final
     * result will be whether any of them returned `true`.
     */
    t.Fn = function(e) {
        for (var n = t.resolve(!1), r = function(e) {
            n = n.next((function(n) {
                return n ? t.resolve(n) : e();
            }));
        }, i = 0, o = e; i < o.length; i++) {
            r(o[i]);
        }
        return n;
    }, t.forEach = function(t, e) {
        var n = this, r = [];
        return t.forEach((function(t, i) {
            r.push(e.call(n, t, i));
        })), this.Dn(r);
    }, t;
}(), Fn = /** @class */ function() {
    function t(t, e, n) {
        this.Nn = t, this.$n = e, this.kn = n
        /**
     * Get the local view of the document identified by `key`.
     *
     * @return Local view of the document or null if we don't have any cached
     * state for it.
     */;
    }
    return t.prototype.On = function(t, e) {
        var n = this;
        return this.$n.xn(t, e).next((function(r) {
            return n.Ln(t, e, r);
        }));
    }, 
    /** Internal version of `getDocument` that allows reusing batches. */ t.prototype.Ln = function(t, e, n) {
        return this.Nn.Mn(t, e).next((function(t) {
            for (var r = 0, i = n; r < i.length; r++) {
                t = i[r].In(e, t);
            }
            return t;
        }));
    }, 
    // Returns the view of the given `docs` as they would appear after applying
    // all mutations in the given `batches`.
    t.prototype.qn = function(t, e, n) {
        var r = dt();
        return e.forEach((function(t, e) {
            for (var i = 0, o = n; i < o.length; i++) {
                e = o[i].In(t, e);
            }
            r = r.st(t, e);
        })), r;
    }, 
    /**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */
    t.prototype.Un = function(t, e) {
        var n = this;
        return this.Nn.getEntries(t, e).next((function(e) {
            return n.Bn(t, e);
        }));
    }, 
    /**
     * Similar to `getDocuments`, but creates the local view from the given
     * `baseDocs` without retrieving documents from the local store.
     */
    t.prototype.Bn = function(t, e) {
        var n = this;
        return this.$n.Wn(t, e).next((function(r) {
            var i = n.qn(t, e, r), o = pt();
            return i.forEach((function(t, e) {
                // TODO(http://b/32275378): Don't conflate missing / deleted.
                e || (e = new rn(t, j.min())), o = o.st(t, e);
            })), o;
        }));
    }, 
    /**
     * Performs a query against the local view of all documents.
     *
     * @param transaction The persistence transaction.
     * @param query The query to match documents against.
     * @param sinceReadTime If not set to SnapshotVersion.min(), return only
     *     documents that have been read since this snapshot version (exclusive).
     */
    t.prototype.Qn = function(t, e, n) {
        /**
 * Returns whether the query matches a single document by path (rather than a
 * collection).
 */
        return function(t) {
            return Q$1.j(t.path) && null === t.collectionGroup && 0 === t.filters.length;
        }(e) ? this.jn(t, e.path) : cn(e) ? this.Gn(t, e, n) : this.Kn(t, e, n);
    }, t.prototype.jn = function(t, e) {
        // Just do a simple document lookup.
        return this.On(t, new Q$1(e)).next((function(t) {
            var e = vt();
            return t instanceof nn && (e = e.st(t.key, t)), e;
        }));
    }, t.prototype.Gn = function(t, e, n) {
        var r = this, i = e.collectionGroup, o = vt();
        return this.kn.zn(t, i).next((function(s) {
            return Mn.forEach(s, (function(s) {
                var u = e.on(s.child(i));
                return r.Kn(t, u, n).next((function(t) {
                    t.forEach((function(t, e) {
                        o = o.st(t, e);
                    }));
                }));
            })).next((function() {
                return o;
            }));
        }));
    }, t.prototype.Kn = function(t, e, n) {
        var r, i, o = this;
        // Query the remote documents and overlay mutations.
                return this.Nn.Qn(t, e, n).next((function(n) {
            return r = n, o.$n.Hn(t, e);
        })).next((function(e) {
            return i = e, o.Yn(t, i, r).next((function(t) {
                r = t;
                for (var e = 0, n = i; e < n.length; e++) for (var o = n[e], s = 0, u = o.mutations; s < u.length; s++) {
                    var a = u[s], c = a.key, h = r.get(c), f = xe(a, h, h, o.mn);
                    r = f instanceof nn ? r.st(c, f) : r.remove(c);
                }
            }));
        })).next((function() {
            // Finally, filter out any documents that don't actually match
            // the query.
            return r.forEach((function(t, n) {
                mn(e, n) || (r = r.remove(t));
            })), r;
        }));
    }, t.prototype.Yn = function(t, e, n) {
        for (var r = wt(), i = 0, o = e; i < o.length; i++) for (var s = 0, u = o[i].mutations; s < u.length; s++) {
            var a = u[s];
            a instanceof $e && null === n.get(a.key) && (r = r.add(a.key));
        }
        var c = n;
        return this.Nn.getEntries(t, r).next((function(t) {
            return t.forEach((function(t, e) {
                null !== e && e instanceof nn && (c = c.st(t, e));
            })), c;
        }));
    }, t;
}(), xn = /** @class */ function() {
    function t(t, e, n, r) {
        this.targetId = t, this.fromCache = e, this.Jn = n, this.Xn = r;
    }
    return t.Zn = function(e, n) {
        for (var r = wt(), i = wt(), o = 0, s = n.docChanges; o < s.length; o++) {
            var u = s[o];
            switch (u.type) {
              case 0 /* Added */ :
                r = r.add(u.doc.key);
                break;

              case 1 /* Removed */ :
                i = i.add(u.doc.key);
                // do nothing
                        }
        }
        return new t(e, n.fromCache, r, i);
    }, t;
}(), jn = /** @class */ function() {
    function t(t, e) {
        var n = this;
        this.previousValue = t, e && (e.ts = function(t) {
            return n.es(t);
        }, this.ns = function(t) {
            return e.ss(t);
        });
    }
    return t.prototype.es = function(t) {
        return this.previousValue = Math.max(t, this.previousValue), this.previousValue;
    }, t.prototype.next = function() {
        var t = ++this.previousValue;
        return this.ns && this.ns(t), t;
    }, t;
}();

/** The result of applying a mutation batch to the backend. */ jn.rs = -1;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Gn = function() {
    var t = this;
    this.promise = new Promise((function(e, n) {
        t.resolve = e, t.reject = n;
    }));
}, Bn = /** @class */ function() {
    function t(
    /**
     * The AsyncQueue to run backoff operations on.
     */
    t, 
    /**
     * The ID to use when scheduling backoff operations on the AsyncQueue.
     */
    e, 
    /**
     * The initial delay (used as the base delay on the first retry attempt).
     * Note that jitter will still be applied, so the actual delay could be as
     * little as 0.5*initialDelayMs.
     */
    n
    /**
     * The multiplier to use to determine the extended base delay after each
     * attempt.
     */ , r
    /**
     * The maximum base delay after which no further backoff is performed.
     * Note that jitter will still be applied, so the actual delay could be as
     * much as 1.5*maxDelayMs.
     */ , i) {
        void 0 === n && (n = 1e3), void 0 === r && (r = 1.5), void 0 === i && (i = 6e4), 
        this.os = t, this.hs = e, this.as = n, this.us = r, this.cs = i, this.ls = 0, this._s = null, 
        /** The last backoff attempt, as epoch milliseconds. */
        this.fs = Date.now(), this.reset();
    }
    /**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */    return t.prototype.reset = function() {
        this.ls = 0;
    }, 
    /**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */
    t.prototype.ds = function() {
        this.ls = this.cs;
    }, 
    /**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */
    t.prototype.ws = function(t) {
        var e = this;
        // Cancel any pending backoff operation.
                this.cancel();
        // First schedule using the current base (which may be 0 and should be
        // honored as such).
        var n = Math.floor(this.ls + this.ms()), r = Math.max(0, Date.now() - this.fs), i = Math.max(0, n - r);
        // Guard against lastAttemptTime being in the future due to a clock change.
                i > 0 && E$1("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.ls + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), 
        this._s = this.os.Ts(this.hs, i, (function() {
            return e.fs = Date.now(), t();
        })), 
        // Apply backoff factor to determine next delay and ensure it is within
        // bounds.
        this.ls *= this.us, this.ls < this.as && (this.ls = this.as), this.ls > this.cs && (this.ls = this.cs);
    }, t.prototype.Es = function() {
        null !== this._s && (this._s.Is(), this._s = null);
    }, t.prototype.cancel = function() {
        null !== this._s && (this._s.cancel(), this._s = null);
    }, 
    /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */ t.prototype.ms = function() {
        return (Math.random() - .5) * this.ls;
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Verifies whether `e` is an IndexedDbTransactionError. */ function zn(t) {
    // Use name equality, as instanceof checks on errors don't work with errors
    // that wrap other errors.
    return "IndexedDbTransactionError" === t.name;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** The Platform's 'document' implementation or null if not available. */ function $n() {
    // `document` is not always available, e.g. in ReactNative and WebWorkers.
    // eslint-disable-next-line no-restricted-globals
    return "undefined" != typeof document ? document : null;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */ var Qn = /** @class */ function() {
    function t(t, e, n, r, i) {
        this.Rs = t, this.hs = e, this.As = n, this.op = r, this.Ps = i, this.Vs = new Gn, 
        this.then = this.Vs.promise.then.bind(this.Vs.promise), 
        // It's normal for the deferred promise to be canceled (due to cancellation)
        // and so we attach a dummy catch callback to avoid
        // 'UnhandledPromiseRejectionWarning' log spam.
        this.Vs.promise.catch((function(t) {}))
        /**
     * Creates and returns a DelayedOperation that has been scheduled to be
     * executed on the provided asyncQueue after the provided delayMs.
     *
     * @param asyncQueue The queue to schedule the operation on.
     * @param id A Timer ID identifying the type of operation this is.
     * @param delayMs The delay (ms) before the operation should be scheduled.
     * @param op The operation to run.
     * @param removalCallback A callback to be called synchronously once the
     *   operation is executed or canceled, notifying the AsyncQueue to remove it
     *   from its delayedOperations list.
     *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
     *   the DelayedOperation class public.
     */;
    }
    return t.ys = function(e, n, r, i, o) {
        var s = new t(e, n, Date.now() + r, i, o);
        return s.start(r), s;
    }, 
    /**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */
    t.prototype.start = function(t) {
        var e = this;
        this.ps = setTimeout((function() {
            return e.gs();
        }), t);
    }, 
    /**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */
    t.prototype.Is = function() {
        return this.gs();
    }, 
    /**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */
    t.prototype.cancel = function(t) {
        null !== this.ps && (this.clearTimeout(), this.Vs.reject(new F$1(M$1.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
    }, t.prototype.gs = function() {
        var t = this;
        this.Rs.vs((function() {
            return null !== t.ps ? (t.clearTimeout(), t.op().then((function(e) {
                return t.Vs.resolve(e);
            }))) : Promise.resolve();
        }));
    }, t.prototype.clearTimeout = function() {
        null !== this.ps && (this.Ps(this), clearTimeout(this.ps), this.ps = null);
    }, t;
}(), Wn = /** @class */ function() {
    function t() {
        var t = this;
        // The last promise in the queue.
                this.bs = Promise.resolve(), 
        // A list of retryable operations. Retryable operations are run in order and
        // retried with backoff.
        this.Ss = [], 
        // Is this AsyncQueue being shut down? Once it is set to true, it will not
        // be changed again.
        this.Cs = !1, 
        // Operations scheduled to be queued in the future. Operations are
        // automatically removed after they are run or canceled.
        this.Ds = [], 
        // visible for testing
        this.Fs = null, 
        // Flag set while there's an outstanding AsyncQueue operation, used for
        // assertion sanity-checks.
        this.Ns = !1, 
        // List of TimerIds to fast-forward delays for.
        this.$s = [], 
        // Backoff timer used to schedule retries for retryable operations
        this.ks = new Bn(this, "async_queue_retry" /* AsyncQueueRetry */), 
        // Visibility handler that triggers an immediate retry of all retryable
        // operations. Meant to speed up recovery when we regain file system access
        // after page comes into foreground.
        this.Os = function() {
            var e = $n();
            e && E$1("AsyncQueue", "Visibility state changed to  ", e.visibilityState), t.ks.Es();
        };
        var e = $n();
        e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.Os);
    }
    return Object.defineProperty(t.prototype, "xs", {
        // Is this AsyncQueue being shut down? If true, this instance will not enqueue
        // any new operations, Promises from enqueue requests will not resolve.
        get: function() {
            return this.Cs;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */
    t.prototype.vs = function(t) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.enqueue(t);
    }, 
    /**
     * Regardless if the queue has initialized shutdown, adds a new operation to the
     * queue without waiting for it to complete (i.e. we ignore the Promise result).
     */
    t.prototype.Ls = function(t) {
        this.Ms(), 
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.qs(t);
    }, 
    /**
     * Initialize the shutdown of this queue. Once this method is called, the
     * only possible way to request running an operation is through
     * `enqueueEvenWhileRestricted()`.
     */
    t.prototype.Us = function() {
        if (!this.Cs) {
            this.Cs = !0;
            var t = $n();
            t && "function" == typeof t.removeEventListener && t.removeEventListener("visibilitychange", this.Os);
        }
    }, 
    /**
     * Adds a new operation to the queue. Returns a promise that will be resolved
     * when the promise returned by the new operation is (with its value).
     */
    t.prototype.enqueue = function(t) {
        return this.Ms(), this.Cs ? new Promise((function(t) {})) : this.qs(t);
    }, 
    /**
     * Enqueue a retryable operation.
     *
     * A retryable operation is rescheduled with backoff if it fails with a
     * IndexedDbTransactionError (the error type used by SimpleDb). All
     * retryable operations are executed in order and only run if all prior
     * operations were retried successfully.
     */
    t.prototype.Bs = function(t) {
        var e = this;
        this.Ss.push(t), this.vs((function() {
            return e.Ws();
        }));
    }, 
    /**
     * Runs the next operation from the retryable queue. If the operation fails,
     * reschedules with backoff.
     */
    t.prototype.Ws = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t, e = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    if (0 === this.Ss.length) return [ 3 /*break*/ , 5 ];
                    n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 3, , 4 ]), [ 4 /*yield*/ , this.Ss[0]() ];

                  case 2:
                    return n.sent(), this.Ss.shift(), this.ks.reset(), [ 3 /*break*/ , 4 ];

                  case 3:
                    if (!zn(t = n.sent())) throw t;
                    // Failure will be handled by AsyncQueue
                                        return E$1("AsyncQueue", "Operation failed with retryable error: " + t), 
                    [ 3 /*break*/ , 4 ];

                  case 4:
                    this.Ss.length > 0 && 
                    // If there are additional operations, we re-schedule `retryNextOp()`.
                    // This is necessary to run retryable operations that failed during
                    // their initial attempt since we don't know whether they are already
                    // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
                    // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
                    // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
                    // call scheduled here.
                    // Since `backoffAndRun()` cancels an existing backoff and schedules a
                    // new backoff on every call, there is only ever a single additional
                    // operation in the queue.
                    this.ks.ws((function() {
                        return e.Ws();
                    })), n.label = 5;

                  case 5:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.qs = function(t) {
        var e = this, n = this.bs.then((function() {
            return e.Ns = !0, t().catch((function(t) {
                // Re-throw the error so that this.tail becomes a rejected Promise and
                // all further attempts to chain (via .then) will just short-circuit
                // and return the rejected Promise.
                throw e.Fs = t, e.Ns = !1, I$1("INTERNAL UNHANDLED ERROR: ", 
                /**
 * Chrome includes Error.message in Error.stack. Other browsers do not.
 * This returns expected output of message + stack when available.
 * @param error Error or FirestoreError
 */
                function(t) {
                    var e = t.message || "";
                    return t.stack && (e = t.stack.includes(t.message) ? t.stack : t.message + "\n" + t.stack), 
                    e;
                }(t)), t;
            })).then((function(t) {
                return e.Ns = !1, t;
            }));
        }));
        return this.bs = n, n;
    }, 
    /**
     * Schedules an operation to be queued on the AsyncQueue once the specified
     * `delayMs` has elapsed. The returned DelayedOperation can be used to cancel
     * or fast-forward the operation prior to its running.
     */
    t.prototype.Ts = function(t, e, n) {
        var r = this;
        this.Ms(), 
        // Fast-forward delays for timerIds that have been overriden.
        this.$s.indexOf(t) > -1 && (e = 0);
        var i = Qn.ys(this, t, e, n, (function(t) {
            return r.Qs(t);
        }));
        return this.Ds.push(i), i;
    }, t.prototype.Ms = function() {
        this.Fs && T$1();
    }, 
    /**
     * Verifies there's an operation currently in-progress on the AsyncQueue.
     * Unfortunately we can't verify that the running code is in the promise chain
     * of that operation, so this isn't a foolproof check, but it should be enough
     * to catch some bugs.
     */
    t.prototype.js = function() {}, 
    /**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */
    t.prototype.Gs = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t;
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4 /*yield*/ , t = this.bs ];

                  case 1:
                    e.sent(), e.label = 2;

                  case 2:
                    if (t !== this.bs) return [ 3 /*break*/ , 0 ];
                    e.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */
    t.prototype.Ks = function(t) {
        for (var e = 0, n = this.Ds; e < n.length; e++) {
            if (n[e].hs === t) return !0;
        }
        return !1;
    }, 
    /**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId Delayed operations up to and including this TimerId will
     *  be drained. Pass TimerId.All to run all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */
    t.prototype.zs = function(t) {
        var e = this;
        // Note that draining may generate more delayed ops, so we do that first.
                return this.Gs().then((function() {
            // Run ops in the same order they'd run if they ran naturally.
            e.Ds.sort((function(t, e) {
                return t.As - e.As;
            }));
            for (var n = 0, r = e.Ds; n < r.length; n++) {
                var i = r[n];
                if (i.Is(), "all" /* All */ !== t && i.hs === t) break;
            }
            return e.Gs();
        }));
    }, 
    /**
     * For Tests: Skip all subsequent delays for a timer id.
     */
    t.prototype.Hs = function(t) {
        this.$s.push(t);
    }, 
    /** Called once a DelayedOperation is run or canceled. */ t.prototype.Qs = function(t) {
        // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
        var e = this.Ds.indexOf(t);
        this.Ds.splice(e, 1);
    }, t;
}();

/**
 * Returns a FirestoreError that can be surfaced to the user if the provided
 * error is an IndexedDbTransactionError. Re-throws the error otherwise.
 */
function Yn(t, e) {
    if (I$1("AsyncQueue", e + ": " + t), zn(t)) return new F$1(M$1.UNAVAILABLE, e + ": " + t);
    throw t;
}

var Hn = /** @class */ function() {
    function t(
    // When we attempt to collect, we will only do so if the cache size is greater than this
    // threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
    t, 
    // The percentage of sequence numbers that we will attempt to collect
    e, 
    // A cap on the total number of sequence numbers that will be collected. This prevents
    // us from collecting a huge number of sequence numbers if the cache has grown very large.
    n) {
        this.Ys = t, this.Js = e, this.Xs = n;
    }
    return t.Zs = function(e) {
        return new t(e, t.ti, t.ei);
    }, t;
}();

Hn.ni = -1, Hn.si = 1048576, Hn.ii = 41943040, Hn.ti = 10, Hn.ei = 1e3, Hn.ri = new Hn(Hn.ii, Hn.ti, Hn.ei), 
Hn.oi = new Hn(Hn.ni, 0, 0);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An in-memory implementation of IndexManager.
 */
var Jn = /** @class */ function() {
    function t() {
        this.hi = new Kn;
    }
    return t.prototype.ai = function(t, e) {
        return this.hi.add(e), Mn.resolve();
    }, t.prototype.zn = function(t, e) {
        return Mn.resolve(this.hi.getEntries(e));
    }, t;
}(), Kn = /** @class */ function() {
    function t() {
        this.index = {};
    }
    // Returns false if the entry already existed.
        return t.prototype.add = function(t) {
        var e = t.S(), n = t.g(), r = this.index[e] || new ht(B.P), i = !r.has(n);
        return this.index[e] = r.add(n), i;
    }, t.prototype.has = function(t) {
        var e = t.S(), n = t.g(), r = this.index[e];
        return r && r.has(n);
    }, t.prototype.getEntries = function(t) {
        return (this.index[t] || new ht(B.P)).F();
    }, t;
}(), Zn = /** @class */ function() {
    function t(t) {
        this.ui = t;
    }
    return t.prototype.next = function() {
        return this.ui += 2, this.ui;
    }, t.ci = function() {
        // The target cache generator must return '2' in its first call to `next()`
        // as there is no differentiation in the protocol layer between an unset
        // number and the number '0'. If we were to sent a target with target ID
        // '0', the backend would consider it unset and replace it with its own ID.
        return new t(0);
    }, t.li = function() {
        // Sync engine assigns target IDs for limbo document detection.
        return new t(-1);
    }, t;
}(), Xn = /** @class */ function() {
    function t(
    /** Manages our in-memory or durable persistence. */
    t, e, n) {
        this.persistence = t, this._i = e, 
        /**
             * Maps a targetID to data about its target.
             *
             * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
             * of `applyRemoteEvent()` idempotent.
             */
        this.fi = new ut(V$1), 
        /** Maps a target to its targetID. */
        // TODO(wuandy): Evaluate if TargetId can be part of Target.
        this.di = new C$1((function(t) {
            return K$1(t);
        }), Z$1), 
        /**
             * The read time of the last entry processed by `getNewDocumentChanges()`.
             *
             * PORTING NOTE: This is only used for multi-tab synchronization.
             */
        this.wi = j.min(), this.$n = t.mi(n), this.Ti = t.Ei(), this.Ii = t.Ri(), this.Ai = new Fn(this.Ti, this.$n, this.persistence.Pi()), 
        this._i.Vi(this.Ai);
    }
    return t.prototype.yi = function(t) {
        var e = this;
        return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (function(n) {
            return t.pi(n, e.fi);
        }));
    }, t;
}();

/**
 * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
 * Also used for in-memory caching by IndexedDbIndexManager and initial index population
 * in indexeddb_schema.ts
 */
/**
 * Acknowledges the given batch.
 *
 * On the happy path when a batch is acknowledged, the local store will
 *
 *  + remove the batch from the mutation queue;
 *  + apply the changes to the remote document cache;
 *  + recalculate the latency compensated view implied by those changes (there
 *    may be mutations in the queue that affect the documents but haven't been
 *    acknowledged yet); and
 *  + give the changed documents back the sync engine
 *
 * @returns The resulting (modified) documents.
 */
function tr(t, e) {
    var n = R$1(t);
    return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (function(t) {
        var r = e.batch.keys(), i = n.Ti.gi({
            vi: !0
        });
        return function(t, e, n, r) {
            var i = n.batch, o = i.keys(), s = Mn.resolve();
            return o.forEach((function(t) {
                s = s.next((function() {
                    return r.Mn(e, t);
                })).next((function(e) {
                    var o = e, s = n.Pn.get(t);
                    k$1(null !== s), (!o || o.version.o(s) < 0) && ((o = i.Tn(t, o, n)) && 
                    // We use the commitVersion as the readTime rather than the
                    // document's updateTime since the updateTime is not advanced
                    // for updates that do not modify the underlying document.
                    r.bi(o, n.An));
                }));
            })), s.next((function() {
                return t.$n.Si(e, i);
            }));
        }(n, t, e, i).next((function() {
            return i.apply(t);
        })).next((function() {
            return n.$n.Ci(t);
        })).next((function() {
            return n.Ai.Un(t, r);
        }));
    }));
}

/**
 * Removes mutations from the MutationQueue for the specified batch;
 * LocalDocuments will be recalculated.
 *
 * @returns The resulting modified documents.
 */
/**
 * Returns the last consistent snapshot processed (used by the RemoteStore to
 * determine whether to buffer incoming snapshots from the backend).
 */ function er(t) {
    var e = R$1(t);
    return e.persistence.runTransaction("Get last remote snapshot version", "readonly", (function(t) {
        return e.Ii.Di(t);
    }));
}

/**
 * Updates the "ground-state" (remote) documents. We assume that the remote
 * event reflects any write batches that have been acknowledged or rejected
 * (i.e. we do not re-apply local mutations to updates from this event).
 *
 * LocalDocuments are re-calculated if there are remaining mutations in the
 * queue.
 */ function nr(t, e) {
    var n = R$1(t), r = e.Z, i = n.fi;
    return n.persistence.runTransaction("Apply remote event", "readwrite-primary", (function(t) {
        var o = n.Ti.gi({
            vi: !0
        });
        // Reset newTargetDataByTargetMap in case this transaction gets re-run.
                i = n.fi;
        var s = [];
        e.Qt.forEach((function(e, o) {
            var u = i.get(o);
            if (u) {
                // Only update the remote keys if the target is still active. This
                // ensures that we can persist the updated target data along with
                // the updated assignment.
                s.push(n.Ii.Fi(t, e.Zt, o).next((function() {
                    return n.Ii.Ni(t, e.Jt, o);
                })));
                var a = e.resumeToken;
                // Update the resume token if the change includes one.
                                if (a.Y() > 0) {
                    var c = u.et(a, r).tt(t.$i);
                    i = i.st(o, c), 
                    // Update the target data if there are target changes (or if
                    // sufficient time has passed since the last update).
                    /**
     * Returns true if the newTargetData should be persisted during an update of
     * an active target. TargetData should always be persisted when a target is
     * being released and should not call this function.
     *
     * While the target is active, TargetData updates can be omitted when nothing
     * about the target has changed except metadata like the resume token or
     * snapshot version. Occasionally it's worth the extra write to prevent these
     * values from getting too stale after a crash, but this doesn't have to be
     * too frequent.
     */
                    function(t, e, n) {
                        // Always persist target data if we don't already have a resume token.
                        return k$1(e.resumeToken.Y() > 0), 0 === t.resumeToken.Y() || (
                        // Don't allow resume token changes to be buffered indefinitely. This
                        // allows us to be reasonably up-to-date after a crash and avoids needing
                        // to loop over all active queries on shutdown. Especially in the browser
                        // we may not get time to do anything interesting while the current tab is
                        // closing.
                        e.Z.I() - t.Z.I() >= 3e8 || n.Jt.size + n.Xt.size + n.Zt.size > 0);
                    }(u, c, e) && s.push(n.Ii.ki(t, c));
                }
            }
        }));
        var u = pt(), a = wt();
        // HACK: The only reason we allow a null snapshot version is so that we
        // can synthesize remote events when we get permission denied errors while
        // trying to resolve the state of a locally cached document that is in
        // limbo.
                if (e.Gt.forEach((function(t, e) {
            a = a.add(t);
        })), 
        // Each loop iteration only affects its "own" doc, so it's safe to get all the remote
        // documents in advance in a single call.
        s.push(o.getEntries(t, a).next((function(i) {
            e.Gt.forEach((function(a, c) {
                var h = i.get(a);
                // Note: The order of the steps below is important, since we want
                // to ensure that rejected limbo resolutions (which fabricate
                // NoDocuments with SnapshotVersion.min()) never add documents to
                // cache.
                                c instanceof rn && c.version.isEqual(j.min()) ? (
                // NoDocuments with SnapshotVersion.min() are used in manufactured
                // events. We remove these documents from cache since we lost
                // access.
                o.Oi(a, r), u = u.st(a, c)) : null == h || c.version.o(h.version) > 0 || 0 === c.version.o(h.version) && h.hasPendingWrites ? (o.bi(c, r), 
                u = u.st(a, c)) : E$1("LocalStore", "Ignoring outdated watch update for ", a, ". Current version:", h.version, " Watch version:", c.version), 
                e.Kt.has(a) && s.push(n.persistence.Li.xi(t, a));
            }));
        }))), !r.isEqual(j.min())) {
            var c = n.Ii.Di(t).next((function(e) {
                return n.Ii.Mi(t, t.$i, r);
            }));
            s.push(c);
        }
        return Mn.Dn(s).next((function() {
            return o.apply(t);
        })).next((function() {
            return n.Ai.Bn(t, u);
        }));
    })).then((function(t) {
        return n.fi = i, t;
    }));
}

/**
 * Gets the mutation batch after the passed in batchId in the mutation queue
 * or null if empty.
 * @param afterBatchId If provided, the batch to search after.
 * @returns The next mutation or null if there wasn't one.
 */ function rr(t, e) {
    var n = R$1(t);
    return n.persistence.runTransaction("Get next mutation batch", "readonly", (function(t) {
        return void 0 === e && (e = -1), n.$n.qi(t, e);
    }));
}

/**
 * Reads the current value of a Document with a given key or null if not
 * found - used for testing.
 */
/**
 * Unpins all the documents associated with the given target. If
 * `keepPersistedTargetData` is set to false and Eager GC enabled, the method
 * directly removes the associated target data from the target cache.
 *
 * Releasing a non-existing `Target` is a no-op.
 */
// PORTING NOTE: `keepPersistedTargetData` is multi-tab only.
function ir(t, r, i) {
    return __awaiter(this, void 0, void 0, (function() {
        var e, o, s, u;
        return __generator(this, (function(n) {
            switch (n.label) {
              case 0:
                e = R$1(t), o = e.fi.get(r), s = i ? "readwrite" : "readwrite-primary", n.label = 1;

              case 1:
                return n.trys.push([ 1, 4, , 5 ]), i ? [ 3 /*break*/ , 3 ] : [ 4 /*yield*/ , e.persistence.runTransaction("Release target", s, (function(t) {
                    return e.persistence.Li.removeTarget(t, o);
                })) ];

              case 2:
                n.sent(), n.label = 3;

              case 3:
                return [ 3 /*break*/ , 5 ];

              case 4:
                if (!zn(u = n.sent())) throw u;
                // All `releaseTarget` does is record the final metadata state for the
                // target, but we've been recording this periodically during target
                // activity. If we lose this write this could cause a very slight
                // difference in the order of target deletion during GC, but we
                // don't define exact LRU semantics so this is acceptable.
                                return E$1("LocalStore", "Failed to update sequence numbers for target " + r + ": " + u), 
                [ 3 /*break*/ , 5 ];

              case 5:
                return e.fi = e.fi.remove(r), e.di.delete(o.target), [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Runs the specified query against the local store and returns the results,
 * potentially taking advantage of query data from previous executions (such
 * as the set of remote keys).
 *
 * @param usePreviousResults Whether results from previous executions can
 * be used to optimize this query execution.
 */ function or(t, e, n) {
    var r = R$1(t), i = j.min(), o = wt();
    return r.persistence.runTransaction("Execute query", "readonly", (function(t) {
        /**
     * Returns the TargetData as seen by the LocalStore, including updates that may
     * have not yet been persisted to the TargetCache.
     */
        // Visible for testing.
        return function(t, e, n) {
            var r = R$1(t), i = r.di.get(n);
            return void 0 !== i ? Mn.resolve(r.fi.get(i)) : r.Ii.Ui(e, n);
        }(r, t, fn(e)).next((function(e) {
            if (e) return i = e.lastLimboFreeSnapshotVersion, r.Ii.Bi(t, e.targetId).next((function(t) {
                o = t;
            }));
        })).next((function() {
            return r._i.Qn(t, e, n ? i : j.min(), n ? o : wt());
        })).next((function(t) {
            return {
                documents: t,
                Wi: o
            };
        }));
    }));
}

function sr(t) {
    return __awaiter(this, void 0, void 0, (function() {
        return __generator(this, (function(e) {
            if (t.code !== M$1.FAILED_PRECONDITION || "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab." !== t.message) throw t;
            return E$1("LocalStore", "Unexpectedly lost primary lease"), [ 2 /*return*/ ];
        }));
    }));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */ var ur = /** @class */ function() {
    function t() {
        // A set of outstanding references to a document sorted by key.
        this.Qi = new ht(ar.ji), 
        // A set of outstanding references to a document sorted by target id.
        this.Gi = new ht(ar.Ki)
        /** Returns true if the reference set contains no references. */;
    }
    return t.prototype._ = function() {
        return this.Qi._();
    }, 
    /** Adds a reference to the given document key for the given ID. */ t.prototype.zi = function(t, e) {
        var n = new ar(t, e);
        this.Qi = this.Qi.add(n), this.Gi = this.Gi.add(n);
    }, 
    /** Add references to the given document keys for the given ID. */ t.prototype.Hi = function(t, e) {
        var n = this;
        t.forEach((function(t) {
            return n.zi(t, e);
        }));
    }, 
    /**
     * Removes a reference to the given document key for the given
     * ID.
     */
    t.prototype.Yi = function(t, e) {
        this.Ji(new ar(t, e));
    }, t.prototype.Xi = function(t, e) {
        var n = this;
        t.forEach((function(t) {
            return n.Yi(t, e);
        }));
    }, 
    /**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */
    t.prototype.Zi = function(t) {
        var e = this, n = new Q$1(new B([])), r = new ar(n, t), i = new ar(n, t + 1), o = [];
        return this.Gi.St([ r, i ], (function(t) {
            e.Ji(t), o.push(t.key);
        })), o;
    }, t.prototype.tr = function() {
        var t = this;
        this.Qi.forEach((function(e) {
            return t.Ji(e);
        }));
    }, t.prototype.Ji = function(t) {
        this.Qi = this.Qi.delete(t), this.Gi = this.Gi.delete(t);
    }, t.prototype.er = function(t) {
        var e = new Q$1(new B([])), n = new ar(e, t), r = new ar(e, t + 1), i = wt();
        return this.Gi.St([ n, r ], (function(t) {
            i = i.add(t.key);
        })), i;
    }, t.prototype.nr = function(t) {
        var e = new ar(t, 0), n = this.Qi.Dt(e);
        return null !== n && t.isEqual(n.key);
    }, t;
}(), ar = /** @class */ function() {
    function t(t, e) {
        this.key = t, this.sr = e
        /** Compare by key then by ID */;
    }
    return t.ji = function(t, e) {
        return Q$1.P(t.key, e.key) || V$1(t.sr, e.sr);
    }, 
    /** Compare by ID then by key */ t.Ki = function(t, e) {
        return V$1(t.sr, e.sr) || Q$1.P(t.key, e.key);
    }, t;
}(), cr = /** @class */ function() {
    function t(t) {
        this.uid = t;
    }
    return t.prototype.ir = function() {
        return null != this.uid;
    }, 
    /**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */
    t.prototype.rr = function() {
        return this.ir() ? "uid:" + this.uid : "anonymous-user";
    }, t.prototype.isEqual = function(t) {
        return t.uid === this.uid;
    }, t;
}();

/** A user with a null UID. */ cr.UNAUTHENTICATED = new cr(null), 
// TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
cr.or = new cr("google-credentials-uid"), cr.hr = new cr("first-party-uid");

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var hr = function(t, e) {
    this.user = e, this.type = "OAuth", this.ar = {}, 
    // Set the headers using Object Literal notation to avoid minification
    this.ar.Authorization = "Bearer " + t;
}, fr = /** @class */ function() {
    function t() {
        /**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */
        this.ur = null;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(null);
    }, t.prototype.cr = function() {}, t.prototype.lr = function(t) {
        this.ur = t, 
        // Fire with initial user.
        t(cr.UNAUTHENTICATED);
    }, t.prototype._r = function() {
        this.ur = null;
    }, t;
}(), lr = /** @class */ function() {
    function t(t) {
        var e = this;
        /**
         * The auth token listener registered with FirebaseApp, retained here so we
         * can unregister it.
         */        this.dr = null, 
        /** Tracks the current User. */
        this.currentUser = cr.UNAUTHENTICATED, this.wr = !1, 
        /**
             * Counter used to detect if the token changed while a getToken request was
             * outstanding.
             */
        this.mr = 0, 
        /** The listener registered with setChangeListener(). */
        this.ur = null, this.forceRefresh = !1, this.dr = function() {
            e.mr++, e.currentUser = e.Tr(), e.wr = !0, e.ur && e.ur(e.currentUser);
        }, this.mr = 0, this.auth = t.getImmediate({
            optional: !0
        }), this.auth ? this.auth.addAuthTokenListener(this.dr) : (
        // if auth is not available, invoke tokenListener once with null token
        this.dr(null), t.get().then((function(t) {
            e.auth = t, e.dr && 
            // tokenListener can be removed by removeChangeListener()
            e.auth.addAuthTokenListener(e.dr);
        }), (function() {})));
    }
    return t.prototype.getToken = function() {
        var t = this, e = this.mr, n = this.forceRefresh;
        // Take note of the current value of the tokenCounter so that this method
        // can fail (with an ABORTED error) if there is a token change while the
        // request is outstanding.
                return this.forceRefresh = !1, this.auth ? this.auth.getToken(n).then((function(n) {
            // Cancel the request since the token changed while the request was
            // outstanding so the response is potentially for a previous user (which
            // user, we can't be sure).
            return t.mr !== e ? (E$1("FirebaseCredentialsProvider", "getToken aborted due to token change."), 
            t.getToken()) : n ? (k$1("string" == typeof n.accessToken), new hr(n.accessToken, t.currentUser)) : null;
        })) : Promise.resolve(null);
    }, t.prototype.cr = function() {
        this.forceRefresh = !0;
    }, t.prototype.lr = function(t) {
        this.ur = t, 
        // Fire the initial event
        this.wr && t(this.currentUser);
    }, t.prototype._r = function() {
        this.auth && this.auth.removeAuthTokenListener(this.dr), this.dr = null, this.ur = null;
    }, 
    // Auth.getUid() can return null even with a user logged in. It is because
    // getUid() is synchronous, but the auth code populating Uid is asynchronous.
    // This method should only be called in the AuthTokenListener callback
    // to guarantee to get the actual user.
    t.prototype.Tr = function() {
        var t = this.auth && this.auth.getUid();
        return k$1(null === t || "string" == typeof t), new cr(t);
    }, t;
}(), pr = /** @class */ function() {
    function t(t, e) {
        this.Er = t, this.Ir = e, this.type = "FirstParty", this.user = cr.hr;
    }
    return Object.defineProperty(t.prototype, "ar", {
        get: function() {
            var t = {
                "X-Goog-AuthUser": this.Ir
            }, e = this.Er.auth.Rr([]);
            return e && (t.Authorization = e), t;
        },
        enumerable: !1,
        configurable: !0
    }), t;
}(), dr = /** @class */ function() {
    function t(t, e) {
        this.Er = t, this.Ir = e;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(new pr(this.Er, this.Ir));
    }, t.prototype.lr = function(t) {
        // Fire with initial uid.
        t(cr.hr);
    }, t.prototype._r = function() {}, t.prototype.cr = function() {}, t;
}(), yr = /** @class */ function() {
    function t(t, e, n, r, i, o) {
        this.os = t, this.Ar = n, this.Pr = r, this.Vr = i, this.listener = o, this.state = 0 /* Initial */ , 
        /**
             * A close count that's incremented every time the stream is closed; used by
             * getCloseGuardedDispatcher() to invalidate callbacks that happen after
             * close.
             */
        this.yr = 0, this.pr = null, this.stream = null, this.ks = new Bn(t, e)
        /**
     * Returns true if start() has been called and no error has occurred. True
     * indicates the stream is open or in the process of opening (which
     * encompasses respecting backoff, getting auth tokens, and starting the
     * actual RPC). Use isOpen() to determine if the stream is open and ready for
     * outbound requests.
     */;
    }
    return t.prototype.gr = function() {
        return 1 /* Starting */ === this.state || 2 /* Open */ === this.state || 4 /* Backoff */ === this.state;
    }, 
    /**
     * Returns true if the underlying RPC is open (the onOpen() listener has been
     * called) and the stream is ready for outbound requests.
     */
    t.prototype.vr = function() {
        return 2 /* Open */ === this.state;
    }, 
    /**
     * Starts the RPC. Only allowed if isStarted() returns false. The stream is
     * not immediately ready for use: onOpen() will be invoked when the RPC is
     * ready for outbound requests, at which point isOpen() will return true.
     *
     * When start returns, isStarted() will return true.
     */
    t.prototype.start = function() {
        3 /* Error */ !== this.state ? this.auth() : this.br();
    }, 
    /**
     * Stops the RPC. This call is idempotent and allowed regardless of the
     * current isStarted() state.
     *
     * When stop returns, isStarted() and isOpen() will both return false.
     */
    t.prototype.stop = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.gr() ? [ 4 /*yield*/ , this.close(0 /* Initial */) ] : [ 3 /*break*/ , 2 ];

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * After an error the stream will usually back off on the next attempt to
     * start it. If the error warrants an immediate restart of the stream, the
     * sender can use this to indicate that the receiver should not back off.
     *
     * Each error will call the onClose() listener. That function can decide to
     * inhibit backoff if required.
     */
    t.prototype.Sr = function() {
        this.state = 0 /* Initial */ , this.ks.reset();
    }, 
    /**
     * Marks this stream as idle. If no further actions are performed on the
     * stream for one minute, the stream will automatically close itself and
     * notify the stream's onClose() handler with Status.OK. The stream will then
     * be in a !isStarted() state, requiring the caller to start the stream again
     * before further use.
     *
     * Only streams that are in state 'Open' can be marked idle, as all other
     * states imply pending network operations.
     */
    t.prototype.Cr = function() {
        var t = this;
        // Starts the idle time if we are in state 'Open' and are not yet already
        // running a timer (in which case the previous idle timeout still applies).
                this.vr() && null === this.pr && (this.pr = this.os.Ts(this.Ar, 6e4, (function() {
            return t.Dr();
        })));
    }, 
    /** Sends a message to the underlying stream. */ t.prototype.Fr = function(t) {
        this.Nr(), this.stream.send(t);
    }, 
    /** Called by the idle timer when the stream should close due to inactivity. */ t.prototype.Dr = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                return this.vr() ? [ 2 /*return*/ , this.close(0 /* Initial */) ] : [ 2 /*return*/ ];
            }));
        }));
    }, 
    /** Marks the stream as active again. */ t.prototype.Nr = function() {
        this.pr && (this.pr.cancel(), this.pr = null);
    }, 
    /**
     * Closes the stream and cleans up as necessary:
     *
     * * closes the underlying GRPC stream;
     * * calls the onClose handler with the given 'error';
     * * sets internal stream state to 'finalState';
     * * adjusts the backoff timer based on the error
     *
     * A new stream can be opened by calling start().
     *
     * @param finalState the intended state of the stream after closing.
     * @param error the error the connection was closed with.
     */
    t.prototype.close = function(t, r) {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    // Notify the listener that the stream closed.
                    // Cancel any outstanding timers (they're guaranteed not to execute).
                    return this.Nr(), this.ks.cancel(), 
                    // Invalidates any stream-related callbacks (e.g. from auth or the
                    // underlying stream), guaranteeing they won't execute.
                    this.yr++, 3 /* Error */ !== t ? 
                    // If this is an intentional close ensure we don't delay our next connection attempt.
                    this.ks.reset() : r && r.code === M$1.RESOURCE_EXHAUSTED ? (
                    // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
                    I$1(r.toString()), I$1("Using maximum backoff delay to prevent overloading the backend."), 
                    this.ks.ds()) : r && r.code === M$1.UNAUTHENTICATED && 
                    // "unauthenticated" error means the token was rejected. Try force refreshing it in case it
                    // just expired.
                    this.Vr.cr(), 
                    // Clean up the underlying stream because we are no longer interested in events.
                    null !== this.stream && (this.$r(), this.stream.close(), this.stream = null), 
                    // This state must be assigned before calling onClose() to allow the callback to
                    // inhibit backoff or otherwise manipulate the state in its non-started state.
                    this.state = t, [ 4 /*yield*/ , this.listener.kr(r) ];

                  case 1:
                    // Cancel any outstanding timers (they're guaranteed not to execute).
                    // Notify the listener that the stream closed.
                    return e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Can be overridden to perform additional cleanup before the stream is closed.
     * Calling super.tearDown() is not required.
     */
    t.prototype.$r = function() {}, t.prototype.auth = function() {
        var t = this;
        this.state = 1 /* Starting */;
        var e = this.Or(this.yr), n = this.yr;
        // TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.
                this.Vr.getToken().then((function(e) {
            // Stream can be stopped while waiting for authentication.
            // TODO(mikelehen): We really should just use dispatchIfNotClosed
            // and let this dispatch onto the queue, but that opened a spec test can
            // of worms that I don't want to deal with in this PR.
            t.yr === n && 
            // Normally we'd have to schedule the callback on the AsyncQueue.
            // However, the following calls are safe to be called outside the
            // AsyncQueue since they don't chain asynchronous calls
            t.xr(e);
        }), (function(n) {
            e((function() {
                var e = new F$1(M$1.UNKNOWN, "Fetching auth token failed: " + n.message);
                return t.Lr(e);
            }));
        }));
    }, t.prototype.xr = function(t) {
        var e = this, n = this.Or(this.yr);
        this.stream = this.Mr(t), this.stream.qr((function() {
            n((function() {
                return e.state = 2 /* Open */ , e.listener.qr();
            }));
        })), this.stream.kr((function(t) {
            n((function() {
                return e.Lr(t);
            }));
        })), this.stream.onMessage((function(t) {
            n((function() {
                return e.onMessage(t);
            }));
        }));
    }, t.prototype.br = function() {
        var t = this;
        this.state = 4 /* Backoff */ , this.ks.ws((function() {
            return __awaiter(t, void 0, void 0, (function() {
                return __generator(this, (function(t) {
                    return this.state = 0 /* Initial */ , this.start(), [ 2 /*return*/ ];
                }));
            }));
        }));
    }, 
    // Visible for tests
    t.prototype.Lr = function(t) {
        // In theory the stream could close cleanly, however, in our current model
        // we never expect this to happen because if we stop a stream ourselves,
        // this callback will never be called. To prevent cases where we retry
        // without a backoff accidentally, we set the stream to error in all cases.
        return E$1("PersistentStream", "close with error: " + t), this.stream = null, this.close(3 /* Error */ , t);
    }, 
    /**
     * Returns a "dispatcher" function that dispatches operations onto the
     * AsyncQueue but only runs them if closeCount remains unchanged. This allows
     * us to turn auth / stream callbacks into no-ops if the stream is closed /
     * re-opened, etc.
     */
    t.prototype.Or = function(t) {
        var e = this;
        return function(n) {
            e.os.vs((function() {
                return e.yr === t ? n() : (E$1("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), 
                Promise.resolve());
            }));
        };
    }, t;
}(), vr = /** @class */ function(e) {
    function n(t, n, r, i, o) {
        var s = this;
        return (s = e.call(this, t, "listen_stream_connection_backoff" /* ListenStreamConnectionBackoff */ , "listen_stream_idle" /* ListenStreamIdle */ , n, r, o) || this).serializer = i, 
        s;
    }
    return __extends(n, e), n.prototype.Mr = function(t) {
        return this.Pr.Ur("Listen", t);
    }, n.prototype.onMessage = function(t) {
        // A successful response means the stream is healthy
        this.ks.reset();
        var e = function(t, e) {
            var n;
            if ("targetChange" in e) {
                e.targetChange;
                // proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
                // if unset
                var r = function(t) {
                    return "NO_CHANGE" === t ? 0 /* NoChange */ : "ADD" === t ? 1 /* Added */ : "REMOVE" === t ? 2 /* Removed */ : "CURRENT" === t ? 3 /* Current */ : "RESET" === t ? 4 /* Reset */ : T$1();
                }(e.targetChange.targetChangeType || "NO_CHANGE"), i = e.targetChange.targetIds || [], o = function(t, e) {
                    return t.Me ? (k$1(void 0 === e || "string" == typeof e), tt.fromBase64String(e || "")) : (k$1(void 0 === e || e instanceof Uint8Array), 
                    tt.fromUint8Array(e || new Uint8Array));
                }(t, e.targetChange.resumeToken), s = e.targetChange.cause, u = s && function(t) {
                    var e = void 0 === t.code ? M$1.UNKNOWN : st(t.code);
                    return new F$1(e, t.message || "");
                }(s);
                n = new _t(r, i, o, u || null);
            } else if ("documentChange" in e) {
                e.documentChange;
                var a = e.documentChange;
                a.document, a.document.name, a.document.updateTime;
                var c = he(t, a.document.name), h = ue(a.document.updateTime), f = new Ze({
                    mapValue: {
                        fields: a.document.fields
                    }
                }), l = new nn(c, h, f, {}), p = a.targetIds || [], d = a.removedTargetIds || [];
                n = new Rt(p, d, l.key, l);
            } else if ("documentDelete" in e) {
                e.documentDelete;
                var y = e.documentDelete;
                y.document;
                var v = he(t, y.document), g = y.readTime ? ue(y.readTime) : j.min(), m = new rn(v, g), w = y.removedTargetIds || [];
                n = new Rt([], w, m.key, m);
            } else if ("documentRemove" in e) {
                e.documentRemove;
                var b = e.documentRemove;
                b.document;
                var E = he(t, b.document), I = b.removedTargetIds || [];
                n = new Rt([], I, E, null);
            } else {
                if (!("filter" in e)) return T$1();
                e.filter;
                var N = e.filter;
                N.targetId;
                var A = N.count || 0, R = new it(A), D = N.targetId;
                n = new Dt(D, R);
            }
            return n;
        }(this.serializer, t), n = function(t) {
            // We have only reached a consistent snapshot for the entire stream if there
            // is a read_time set and it applies to all targets (i.e. the list of
            // targets is empty). The backend is guaranteed to send such responses.
            if (!("targetChange" in t)) return j.min();
            var e = t.targetChange;
            return e.targetIds && e.targetIds.length ? j.min() : e.readTime ? ue(e.readTime) : j.min();
        }(t);
        return this.listener.Br(e, n);
    }, 
    /**
     * Registers interest in the results of the given target. If the target
     * includes a resumeToken it will be included in the request. Results that
     * affect the target will be streamed back as WatchChange messages that
     * reference the targetId.
     */
    n.prototype.Wr = function(t) {
        var e = {};
        e.database = le(this.serializer), e.addTarget = function(t, e) {
            var n, r = e.target;
            return (n = X$1(r) ? {
                documents: ye(t, r)
            } : {
                query: ve(t, r)
            }).targetId = e.targetId, e.resumeToken.Y() > 0 && (n.resumeToken = oe(t, e.resumeToken)), 
            n;
        }(this.serializer, t);
        var n = function(t, e) {
            var n = function(t, e) {
                switch (e) {
                  case 0 /* Listen */ :
                    return null;

                  case 1 /* ExistenceFilterMismatch */ :
                    return "existence-filter-mismatch";

                  case 2 /* LimboResolution */ :
                    return "limbo-document";

                  default:
                    return T$1();
                }
            }(0, e.X);
            return null == n ? null : {
                "goog-listen-tags": n
            };
        }(this.serializer, t);
        n && (e.labels = n), this.Fr(e);
    }, 
    /**
     * Unregisters interest in the results of the target associated with the
     * given targetId.
     */
    n.prototype.Qr = function(t) {
        var e = {};
        e.database = le(this.serializer), e.removeTarget = t, this.Fr(e);
    }, n;
}(yr), gr = /** @class */ function(e) {
    function n(t, n, r, i, o) {
        var s = this;
        return (s = e.call(this, t, "write_stream_connection_backoff" /* WriteStreamConnectionBackoff */ , "write_stream_idle" /* WriteStreamIdle */ , n, r, o) || this).serializer = i, 
        s.jr = !1, s;
    }
    return __extends(n, e), Object.defineProperty(n.prototype, "Gr", {
        /**
         * Tracks whether or not a handshake has been successfully exchanged and
         * the stream is ready to accept mutations.
         */
        get: function() {
            return this.jr;
        },
        enumerable: !1,
        configurable: !0
    }), 
    // Override of PersistentStream.start
    n.prototype.start = function() {
        this.jr = !1, this.lastStreamToken = void 0, e.prototype.start.call(this);
    }, n.prototype.$r = function() {
        this.jr && this.Kr([]);
    }, n.prototype.Mr = function(t) {
        return this.Pr.Ur("Write", t);
    }, n.prototype.onMessage = function(t) {
        if (
        // Always capture the last stream token.
        k$1(!!t.streamToken), this.lastStreamToken = t.streamToken, this.jr) {
            // A successful first write response means the stream is healthy,
            // Note, that we could consider a successful handshake healthy, however,
            // the write itself might be causing an error we want to back off from.
            this.ks.reset();
            var e = function(t, e) {
                return t && t.length > 0 ? (k$1(void 0 !== e), t.map((function(t) {
                    return function(t, e) {
                        // NOTE: Deletes don't have an updateTime.
                        var n = t.updateTime ? ue(t.updateTime) : ue(e);
                        n.isEqual(j.min()) && (
                        // The Firestore Emulator currently returns an update time of 0 for
                        // deletes of non-existing documents (rather than null). This breaks the
                        // test "get deleted doc while offline with source=cache" as NoDocuments
                        // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
                        // TODO(#2149): Remove this when Emulator is fixed
                        n = ue(e));
                        var r = null;
                        return t.transformResults && t.transformResults.length > 0 && (r = t.transformResults), 
                        new Ue(n, r);
                    }(t, e);
                }))) : [];
            }(t.writeResults, t.commitTime), n = ue(t.commitTime);
            return this.listener.zr(n, e);
        }
        // The first response is always the handshake response
                return k$1(!t.writeResults || 0 === t.writeResults.length), this.jr = !0, 
        this.listener.Hr();
    }, 
    /**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */
    n.prototype.Yr = function() {
        // TODO(dimond): Support stream resumption. We intentionally do not set the
        // stream token on the handshake, ignoring any stream token we might have.
        var t = {};
        t.database = le(this.serializer), this.Fr(t);
    }, 
    /** Sends a group of mutations to the Firestore backend to apply. */ n.prototype.Kr = function(t) {
        var e = this, n = {
            streamToken: this.lastStreamToken,
            writes: t.map((function(t) {
                return de(e.serializer, t);
            }))
        };
        this.Fr(n);
    }, n;
}(yr), mr = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).credentials = t, i.Pr = n, i.serializer = r, i.Jr = !1, 
        i;
    }
    return __extends(n, e), n.prototype.Xr = function() {
        if (this.Jr) throw new F$1(M$1.FAILED_PRECONDITION, "The client has already been terminated.");
    }, 
    /** Gets an auth token and invokes the provided RPC. */ n.prototype.Zr = function(t, e, n) {
        var r = this;
        return this.Xr(), this.credentials.getToken().then((function(i) {
            return r.Pr.Zr(t, e, n, i);
        })).catch((function(t) {
            throw t.code === M$1.UNAUTHENTICATED && r.credentials.cr(), t;
        }));
    }, 
    /** Gets an auth token and invokes the provided RPC with streamed results. */ n.prototype.to = function(t, e, n) {
        var r = this;
        return this.Xr(), this.credentials.getToken().then((function(i) {
            return r.Pr.to(t, e, n, i);
        })).catch((function(t) {
            throw t.code === M$1.UNAUTHENTICATED && r.credentials.cr(), t;
        }));
    }, n.prototype.terminate = function() {
        this.Jr = !1;
    }, n;
}((function() {})), wr = /** @class */ function() {
    function t(t, e) {
        this.Rs = t, this.eo = e, 
        /** The current OnlineState. */
        this.state = "Unknown" /* Unknown */ , 
        /**
             * A count of consecutive failures to open the stream. If it reaches the
             * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
             * Offline.
             */
        this.no = 0, 
        /**
             * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
             * transition from OnlineState.Unknown to OnlineState.Offline without waiting
             * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
             */
        this.so = null, 
        /**
             * Whether the client should log a warning message if it fails to connect to
             * the backend (initially true, cleared after a successful stream, or if we've
             * logged the message already).
             */
        this.io = !0
        /**
     * Called by RemoteStore when a watch stream is started (including on each
     * backoff attempt).
     *
     * If this is the first attempt, it sets the OnlineState to Unknown and starts
     * the onlineStateTimer.
     */;
    }
    return t.prototype.ro = function() {
        var t = this;
        0 === this.no && (this.oo("Unknown" /* Unknown */), this.so = this.Rs.Ts("online_state_timeout" /* OnlineStateTimeout */ , 1e4, (function() {
            return t.so = null, t.ho("Backend didn't respond within 10 seconds."), t.oo("Offline" /* Offline */), 
            Promise.resolve();
        })));
    }, 
    /**
     * Updates our OnlineState as appropriate after the watch stream reports a
     * failure. The first failure moves us to the 'Unknown' state. We then may
     * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
     * actually transition to the 'Offline' state.
     */
    t.prototype.ao = function(t) {
        "Online" /* Online */ === this.state ? this.oo("Unknown" /* Unknown */) : (this.no++, 
        this.no >= 1 && (this.uo(), this.ho("Connection failed 1 times. Most recent error: " + t.toString()), 
        this.oo("Offline" /* Offline */)));
    }, 
    /**
     * Explicitly sets the OnlineState to the specified state.
     *
     * Note that this resets our timers / failure counters, etc. used by our
     * Offline heuristics, so must not be used in place of
     * handleWatchStreamStart() and handleWatchStreamFailure().
     */
    t.prototype.set = function(t) {
        this.uo(), this.no = 0, "Online" /* Online */ === t && (
        // We've connected to watch at least once. Don't warn the developer
        // about being offline going forward.
        this.io = !1), this.oo(t);
    }, t.prototype.oo = function(t) {
        t !== this.state && (this.state = t, this.eo(t));
    }, t.prototype.ho = function(t) {
        var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
        this.io ? (I$1(e), this.io = !1) : E$1("OnlineStateTracker", e);
    }, t.prototype.uo = function() {
        null !== this.so && (this.so.cancel(), this.so = null);
    }, t;
}(), br = /** @class */ function() {
    function t(
    /**
     * The local store, used to fill the write pipeline with outbound mutations.
     */
    t, 
    /** The client-side proxy for interacting with the backend. */
    r, i, o, s) {
        var u = this;
        this.co = t, this.lo = r, this.Rs = i, 
        /**
             * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
             * LocalStore via fillWritePipeline() and have or will send to the write
             * stream.
             *
             * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
             * restart the write stream. When the stream is established the writes in the
             * pipeline will be sent in order.
             *
             * Writes remain in writePipeline until they are acknowledged by the backend
             * and thus will automatically be re-sent if the stream is interrupted /
             * restarted before they're acknowledged.
             *
             * Write responses from the backend are linked to their originating request
             * purely based on order, and so we can just shift() writes from the front of
             * the writePipeline as we receive responses.
             */
        this._o = [], 
        /**
             * A mapping of watched targets that the client cares about tracking and the
             * user has explicitly called a 'listen' for this target.
             *
             * These targets may or may not have been sent to or acknowledged by the
             * server. On re-establishing the listen stream, these targets should be sent
             * to the server. The targets removed with unlistens are removed eagerly
             * without waiting for confirmation from the listen stream.
             */
        this.fo = new Map, this.do = null, 
        /**
             * A set of reasons for why the RemoteStore may be offline. If empty, the
             * RemoteStore may start its network connections.
             */
        this.wo = new Set, this.mo = s, this.mo.To((function(t) {
            i.vs((function() {
                return __awaiter(u, void 0, void 0, (function() {
                    return __generator(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            return this.Eo() ? (E$1("RemoteStore", "Restarting streams for network reachability change."), 
                            [ 4 /*yield*/ , this.Io() ]) : [ 3 /*break*/ , 2 ];

                          case 1:
                            t.sent(), t.label = 2;

                          case 2:
                            return [ 2 /*return*/ ];
                        }
                    }));
                }));
            }));
        })), this.Ro = new wr(i, o), 
        // Create streams (but note they're not started yet).
        this.Ao = function(t, e, n) {
            var r = R$1(t);
            return r.Xr(), new vr(e, r.Pr, r.credentials, r.serializer, n);
        }(this.lo, i, {
            qr: this.Po.bind(this),
            kr: this.Vo.bind(this),
            Br: this.yo.bind(this)
        }), this.po = function(t, e, n) {
            var r = R$1(t);
            return r.Xr(), new gr(e, r.Pr, r.credentials, r.serializer, n);
        }(this.lo, i, {
            qr: this.vo.bind(this),
            kr: this.bo.bind(this),
            Hr: this.So.bind(this),
            zr: this.zr.bind(this)
        });
    }
    /**
     * Starts up the remote store, creating streams, restoring state from
     * LocalStore, etc.
     */    return t.prototype.start = function() {
        return this.enableNetwork();
    }, 
    /** Re-enables the network. Idempotent. */ t.prototype.enableNetwork = function() {
        return this.wo.delete(0 /* UserDisabled */), this.Co();
    }, t.prototype.Co = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.Eo() ? (this.Do() ? this.Fo() : this.Ro.set("Unknown" /* Unknown */), 
                    [ 4 /*yield*/ , this.No() ]) : [ 3 /*break*/ , 2 ];

                  case 1:
                    // This will start the write stream if necessary.
                    t.sent(), t.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Temporarily disables the network. The network can be re-enabled using
     * enableNetwork().
     */
    t.prototype.disableNetwork = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.wo.add(0 /* UserDisabled */), [ 4 /*yield*/ , this.$o() ];

                  case 1:
                    return t.sent(), 
                    // Set the OnlineState to Offline so get()s return from cache, etc.
                    this.Ro.set("Offline" /* Offline */), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.$o = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.po.stop() ];

                  case 1:
                    return t.sent(), [ 4 /*yield*/ , this.Ao.stop() ];

                  case 2:
                    return t.sent(), this._o.length > 0 && (E$1("RemoteStore", "Stopping write stream with " + this._o.length + " pending writes"), 
                    this._o = []), this.ko(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Oo = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return E$1("RemoteStore", "RemoteStore shutting down."), this.wo.add(5 /* Shutdown */), 
                    [ 4 /*yield*/ , this.$o() ];

                  case 1:
                    return t.sent(), this.mo.Oo(), 
                    // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
                    // triggering spurious listener events with cached data, etc.
                    this.Ro.set("Unknown" /* Unknown */), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Starts new listen for the given target. Uses resume token if provided. It
     * is a no-op if the target of given `TargetData` is already being listened to.
     */
    t.prototype.listen = function(t) {
        this.fo.has(t.targetId) || (
        // Mark this as something the client is currently listening for.
        this.fo.set(t.targetId, t), this.Do() ? 
        // The listen will be sent in onWatchStreamOpen
        this.Fo() : this.Ao.vr() && this.xo(t));
    }, 
    /**
     * Removes the listen from server. It is a no-op if the given target id is
     * not being listened to.
     */
    t.prototype.Lo = function(t) {
        this.fo.delete(t), this.Ao.vr() && this.Mo(t), 0 === this.fo.size && (this.Ao.vr() ? this.Ao.Cr() : this.Eo() && 
        // Revert to OnlineState.Unknown if the watch stream is not open and we
        // have no listeners, since without any listens to send we cannot
        // confirm if the stream is healthy and upgrade to OnlineState.Online.
        this.Ro.set("Unknown" /* Unknown */));
    }, 
    /** {@link TargetMetadataProvider.getTargetDataForTarget} */ t.prototype.Le = function(t) {
        return this.fo.get(t) || null;
    }, 
    /** {@link TargetMetadataProvider.getRemoteKeysForTarget} */ t.prototype.xe = function(t) {
        return this.qo.xe(t);
    }, 
    /**
     * We need to increment the the expected number of pending responses we're due
     * from watch so we wait for the ack to process any messages from this target.
     */
    t.prototype.xo = function(t) {
        this.do.we(t.targetId), this.Ao.Wr(t);
    }, 
    /**
     * We need to increment the expected number of pending responses we're due
     * from watch so we wait for the removal on the server before we process any
     * messages from this target.
     */
    t.prototype.Mo = function(t) {
        this.do.we(t), this.Ao.Qr(t);
    }, t.prototype.Fo = function() {
        this.do = new St(this), this.Ao.start(), this.Ro.ro();
    }, 
    /**
     * Returns whether the watch stream should be started because it's necessary
     * and has not yet been started.
     */
    t.prototype.Do = function() {
        return this.Eo() && !this.Ao.gr() && this.fo.size > 0;
    }, t.prototype.Eo = function() {
        return 0 === this.wo.size;
    }, t.prototype.ko = function() {
        this.do = null;
    }, t.prototype.Po = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t = this;
            return __generator(this, (function(e) {
                return this.fo.forEach((function(e, n) {
                    t.xo(e);
                })), [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.Vo = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(e) {
                return this.ko(), 
                // If we still need the watch stream, retry the connection.
                this.Do() ? (this.Ro.ao(t), this.Fo()) : 
                // No need to restart watch stream because there are no active targets.
                // The online state is set to unknown because there is no active attempt
                // at establishing a connection
                this.Ro.set("Unknown" /* Unknown */), [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.yo = function(t, r) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, i, o;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    if (this.Ro.set("Online" /* Online */), !(t instanceof _t && 2 /* Removed */ === t.state && t.cause)) 
                    // Mark the client as online since we got a message from the server
                    return [ 3 /*break*/ , 6 ];
                    n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 3, , 5 ]), [ 4 /*yield*/ , this.Uo(t) ];

                  case 2:
                    return n.sent(), [ 3 /*break*/ , 5 ];

                  case 3:
                    return e = n.sent(), E$1("RemoteStore", "Failed to remove targets %s: %s ", t.targetIds.join(","), e), 
                    [ 4 /*yield*/ , this.Bo(e) ];

                  case 4:
                    return n.sent(), [ 3 /*break*/ , 5 ];

                  case 5:
                    return [ 3 /*break*/ , 13 ];

                  case 6:
                    if (t instanceof Rt ? this.do.Ve(t) : t instanceof Dt ? this.do.De(t) : this.do.ge(t), 
                    r.isEqual(j.min())) return [ 3 /*break*/ , 13 ];
                    n.label = 7;

                  case 7:
                    return n.trys.push([ 7, 11, , 13 ]), [ 4 /*yield*/ , er(this.co) ];

                  case 8:
                    return i = n.sent(), r.o(i) >= 0 ? [ 4 /*yield*/ , this.Wo(r) ] : [ 3 /*break*/ , 10 ];

                    // We have received a target change with a global snapshot if the snapshot
                    // version is not equal to SnapshotVersion.min().
                                      case 9:
                    // We have received a target change with a global snapshot if the snapshot
                    // version is not equal to SnapshotVersion.min().
                    n.sent(), n.label = 10;

                  case 10:
                    return [ 3 /*break*/ , 13 ];

                  case 11:
                    return E$1("RemoteStore", "Failed to raise snapshot:", o = n.sent()), [ 4 /*yield*/ , this.Bo(o) ];

                  case 12:
                    return n.sent(), [ 3 /*break*/ , 13 ];

                  case 13:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Recovery logic for IndexedDB errors that takes the network offline until
     * `op` succeeds. Retries are scheduled with backoff using
     * `enqueueRetryable()`. If `op()` is not provided, IndexedDB access is
     * validated via a generic operation.
     *
     * The returned Promise is resolved once the network is disabled and before
     * any retry attempt.
     */
    t.prototype.Bo = function(t, r) {
        return __awaiter(this, void 0, void 0, (function() {
            var i = this;
            return __generator(this, (function(o) {
                switch (o.label) {
                  case 0:
                    if (!zn(t)) throw t;
                    // Disable network and raise offline snapshots
                    return this.wo.add(1 /* IndexedDbFailed */), [ 4 /*yield*/ , this.$o() ];

                  case 1:
                    // Disable network and raise offline snapshots
                    return o.sent(), this.Ro.set("Offline" /* Offline */), r || (
                    // Use a simple read operation to determine if IndexedDB recovered.
                    // Ideally, we would expose a health check directly on SimpleDb, but
                    // RemoteStore only has access to persistence through LocalStore.
                    r = function() {
                        return er(i.co);
                    }), 
                    // Probe IndexedDB periodically and re-enable network
                    this.Rs.Bs((function() {
                        return __awaiter(i, void 0, void 0, (function() {
                            return __generator(this, (function(t) {
                                switch (t.label) {
                                  case 0:
                                    return E$1("RemoteStore", "Retrying IndexedDB access"), [ 4 /*yield*/ , r() ];

                                  case 1:
                                    return t.sent(), this.wo.delete(1 /* IndexedDbFailed */), [ 4 /*yield*/ , this.Co() ];

                                  case 2:
                                    return t.sent(), [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Executes `op`. If `op` fails, takes the network offline until `op`
     * succeeds. Returns after the first attempt.
     */
    t.prototype.Qo = function(t) {
        var e = this;
        return t().catch((function(n) {
            return e.Bo(n, t);
        }));
    }, 
    /**
     * Takes a batch of changes from the Datastore, repackages them as a
     * RemoteEvent, and passes that on to the listener, which is typically the
     * SyncEngine.
     */
    t.prototype.Wo = function(t) {
        var e = this, n = this.do.$e(t);
        // Update in-memory resume tokens. LocalStore will update the
        // persistent view of these when applying the completed RemoteEvent.
        // Finally raise remote event
        return n.Qt.forEach((function(n, r) {
            if (n.resumeToken.Y() > 0) {
                var i = e.fo.get(r);
                // A watched target might have been removed already.
                                i && e.fo.set(r, i.et(n.resumeToken, t));
            }
        })), 
        // Re-establish listens for the targets that have been invalidated by
        // existence filter mismatches.
        n.jt.forEach((function(t) {
            var n = e.fo.get(t);
            if (n) {
                // Clear the resume token for the target, since we're in a known mismatch
                // state.
                e.fo.set(t, n.et(tt.J, n.Z)), 
                // Cause a hard reset by unwatching and rewatching immediately, but
                // deliberately don't send a resume token so that we get a full update.
                e.Mo(t);
                // Mark the target we send as being on behalf of an existence filter
                // mismatch, but don't actually retain that in listenTargets. This ensures
                // that we flag the first re-listen this way without impacting future
                // listens of this target (that might happen e.g. on reconnect).
                var r = new rt(n.target, t, 1 /* ExistenceFilterMismatch */ , n.sequenceNumber);
                e.xo(r);
            }
        })), this.qo.jo(n);
    }, 
    /** Handles an error on a target */ t.prototype.Uo = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, i, o;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    e = t.cause, r = 0, i = t.targetIds, n.label = 1;

                  case 1:
                    return r < i.length ? (o = i[r], this.fo.has(o) ? [ 4 /*yield*/ , this.qo.Go(o, e) ] : [ 3 /*break*/ , 3 ]) : [ 3 /*break*/ , 5 ];

                  case 2:
                    n.sent(), this.fo.delete(o), this.do.removeTarget(o), n.label = 3;

                  case 3:
                    n.label = 4;

                  case 4:
                    return r++, [ 3 /*break*/ , 1 ];

                  case 5:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Attempts to fill our write pipeline with writes from the LocalStore.
     *
     * Called internally to bootstrap or refill the write pipeline and by
     * SyncEngine whenever there are new mutations to process.
     *
     * Starts the write stream if necessary.
     */
    t.prototype.No = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t, e, r;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    t = this._o.length > 0 ? this._o[this._o.length - 1].batchId : -1, n.label = 1;

                  case 1:
                    if (!this.Ko()) return [ 3 /*break*/ , 7 ];
                    n.label = 2;

                  case 2:
                    return n.trys.push([ 2, 4, , 6 ]), [ 4 /*yield*/ , rr(this.co, t) ];

                  case 3:
                    return null === (e = n.sent()) ? (0 === this._o.length && this.po.Cr(), [ 3 /*break*/ , 7 ]) : (t = e.batchId, 
                    this.zo(e), [ 3 /*break*/ , 6 ]);

                  case 4:
                    return r = n.sent(), [ 4 /*yield*/ , this.Bo(r) ];

                  case 5:
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 3 /*break*/ , 1 ];

                  case 7:
                    return this.Ho() && this.Yo(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Returns true if we can add to the write pipeline (i.e. the network is
     * enabled and the write pipeline is not full).
     */
    t.prototype.Ko = function() {
        return this.Eo() && this._o.length < 10;
    }, 
    // For testing
    t.prototype.Jo = function() {
        return this._o.length;
    }, 
    /**
     * Queues additional writes to be sent to the write stream, sending them
     * immediately if the write stream is established.
     */
    t.prototype.zo = function(t) {
        this._o.push(t), this.po.vr() && this.po.Gr && this.po.Kr(t.mutations);
    }, t.prototype.Ho = function() {
        return this.Eo() && !this.po.gr() && this._o.length > 0;
    }, t.prototype.Yo = function() {
        this.po.start();
    }, t.prototype.vo = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                return this.po.Yr(), [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.So = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t, e, r;
            return __generator(this, (function(n) {
                // Send the write pipeline now that the stream is established.
                for (t = 0, e = this._o; t < e.length; t++) r = e[t], this.po.Kr(r.mutations);
                return [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.zr = function(t, r) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, i, o = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return e = this._o.shift(), i = Cn.from(e, t, r), [ 4 /*yield*/ , this.Qo((function() {
                        return o.qo.Xo(i);
                    })) ];

                  case 1:
                    // It's possible that with the completion of this mutation another
                    // slot has freed up.
                    return n.sent(), [ 4 /*yield*/ , this.No() ];

                  case 2:
                    // It's possible that with the completion of this mutation another
                    // slot has freed up.
                    return n.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.bo = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return t && this.po.Gr ? [ 4 /*yield*/ , this.Zo(t) ] : [ 3 /*break*/ , 2 ];

                    // This error affects the actual write.
                                      case 1:
                    // This error affects the actual write.
                    e.sent(), e.label = 2;

                  case 2:
                    // If the write stream closed after the write handshake completes, a write
                    // operation failed and we fail the pending operation.
                    // The write stream might have been started by refilling the write
                    // pipeline for failed writes
                    return this.Ho() && this.Yo(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Zo = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, i = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return ot(r = t.code) && r !== M$1.ABORTED ? (e = this._o.shift(), 
                    // In this case it's also unlikely that the server itself is melting
                    // down -- this was just a bad request so inhibit backoff on the next
                    // restart.
                    this.po.Sr(), [ 4 /*yield*/ , this.Qo((function() {
                        return i.qo.th(e.batchId, t);
                    })) ]) : [ 3 /*break*/ , 3 ];

                  case 1:
                    // It's possible that with the completion of this mutation
                    // another slot has freed up.
                    return n.sent(), [ 4 /*yield*/ , this.No() ];

                  case 2:
                    // In this case it's also unlikely that the server itself is melting
                    // down -- this was just a bad request so inhibit backoff on the next
                    // restart.
                    // It's possible that with the completion of this mutation
                    // another slot has freed up.
                    n.sent(), n.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Io = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.wo.add(4 /* ConnectivityChange */), [ 4 /*yield*/ , this.$o() ];

                  case 1:
                    return t.sent(), this.Ro.set("Unknown" /* Unknown */), this.po.Sr(), this.Ao.Sr(), 
                    this.wo.delete(4 /* ConnectivityChange */), [ 4 /*yield*/ , this.Co() ];

                  case 2:
                    return t.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.eh = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.Rs.js(), 
                    // Tear down and re-create our network streams. This will ensure we get a
                    // fresh auth token for the new user and re-fill the write pipeline with
                    // new mutations from the LocalStore (since mutations are per-user).
                    E$1("RemoteStore", "RemoteStore received new credentials"), this.wo.add(3 /* CredentialChange */), 
                    [ 4 /*yield*/ , this.$o() ];

                  case 1:
                    return e.sent(), this.Ro.set("Unknown" /* Unknown */), [ 4 /*yield*/ , this.qo.eh(t) ];

                  case 2:
                    return e.sent(), this.wo.delete(3 /* CredentialChange */), [ 4 /*yield*/ , this.Co() ];

                  case 3:
                    return e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Toggles the network state when the client gains or loses its primary lease.
     */
    t.prototype.nh = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return t ? (this.wo.delete(2 /* IsSecondary */), [ 4 /*yield*/ , this.Co() ]) : [ 3 /*break*/ , 2 ];

                  case 1:
                    return n.sent(), [ 3 /*break*/ , 5 ];

                  case 2:
                    return (e = t) ? [ 3 /*break*/ , 4 ] : (this.wo.add(2 /* IsSecondary */), [ 4 /*yield*/ , this.$o() ]);

                  case 3:
                    n.sent(), e = this.Ro.set("Unknown" /* Unknown */), n.label = 4;

                  case 4:
                    n.label = 5;

                  case 5:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t;
}(), Er = /** @class */ function() {
    function t() {
        this.activeTargetIds = Et();
    }
    return t.prototype.sh = function(t) {
        this.activeTargetIds = this.activeTargetIds.add(t);
    }, t.prototype.ih = function(t) {
        this.activeTargetIds = this.activeTargetIds.delete(t);
    }, 
    /**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */
    t.prototype.rh = function() {
        var t = {
            activeTargetIds: this.activeTargetIds.F(),
            updateTimeMs: Date.now()
        };
        return JSON.stringify(t);
    }, t;
}(), Ir = /** @class */ function() {
    function t() {
        this.oh = new Er, this.hh = {}, this.eo = null, this.ts = null;
    }
    return t.prototype.ah = function(t) {
        // No op.
    }, t.prototype.uh = function(t, e, n) {
        // No op.
    }, t.prototype.lh = function(t) {
        return this.oh.sh(t), this.hh[t] || "not-current";
    }, t.prototype._h = function(t, e, n) {
        this.hh[t] = e;
    }, t.prototype.fh = function(t) {
        this.oh.ih(t);
    }, t.prototype.dh = function(t) {
        return this.oh.activeTargetIds.has(t);
    }, t.prototype.wh = function(t) {
        delete this.hh[t];
    }, t.prototype.mh = function() {
        return this.oh.activeTargetIds;
    }, t.prototype.Th = function(t) {
        return this.oh.activeTargetIds.has(t);
    }, t.prototype.start = function() {
        return this.oh = new Er, Promise.resolve();
    }, t.prototype.Eh = function(t, e, n) {
        // No op.
    }, t.prototype.Ih = function(t) {
        // No op.
    }, t.prototype.Oo = function() {}, t.prototype.ss = function(t) {}, t;
}(), Nr = function(t) {
    this.key = t;
}, Ar = function(t) {
    this.key = t;
}, Tr = /** @class */ function() {
    function t(t, 
    /** Documents included in the remote target */
    e) {
        this.query = t, this.Rh = e, this.Ah = null, 
        /**
             * A flag whether the view is current with the backend. A view is considered
             * current after it has seen the current flag from the backend and did not
             * lose consistency within the watch stream (e.g. because of an existence
             * filter mismatch).
             */
        this.Yt = !1, 
        /** Documents in the view but not in the remote target */
        this.Ph = wt(), 
        /** Document Keys that have local changes */
        this.qt = wt(), this.Vh = wn(t), this.yh = new It(this.Vh);
    }
    return Object.defineProperty(t.prototype, "ph", {
        /**
         * The set of remote documents that the server has told us belongs to the target associated with
         * this view.
         */
        get: function() {
            return this.Rh;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Iterates over a set of doc changes, applies the query limit, and computes
     * what the new results should be, what the changes were, and whether we may
     * need to go back to the local cache for more results. Does not make any
     * changes to the view.
     * @param docChanges The doc changes to apply to this view.
     * @param previousChanges If this is being called with a refill, then start
     *        with this set of docs and changes instead of the current view.
     * @return a new set of docs, changes, and refill flag.
     */
    t.prototype.gh = function(t, e) {
        var n = this, r = e ? e.vh : new Nt, i = e ? e.yh : this.yh, o = e ? e.qt : this.qt, s = i, u = !1, a = this.query.an() && i.size === this.query.limit ? i.last() : null, c = this.query.un() && i.size === this.query.limit ? i.first() : null;
        // Drop documents out to meet limit/limitToLast requirement.
        if (t.ht((function(t, e) {
            var h = i.get(t), f = e instanceof nn ? e : null;
            f && (f = mn(n.query, f) ? f : null);
            var l = !!h && n.qt.has(h.key), p = !!f && (f.Ke || 
            // We only consider committed mutations for documents that were
            // mutated during the lifetime of the view.
            n.qt.has(f.key) && f.hasCommittedMutations), d = !1;
            // Calculate change
            h && f ? h.data().isEqual(f.data()) ? l !== p && (r.track({
                type: 3 /* Metadata */ ,
                doc: f
            }), d = !0) : n.bh(h, f) || (r.track({
                type: 2 /* Modified */ ,
                doc: f
            }), d = !0, (a && n.Vh(f, a) > 0 || c && n.Vh(f, c) < 0) && (
            // This doc moved from inside the limit to outside the limit.
            // That means there may be some other doc in the local cache
            // that should be included instead.
            u = !0)) : !h && f ? (r.track({
                type: 0 /* Added */ ,
                doc: f
            }), d = !0) : h && !f && (r.track({
                type: 1 /* Removed */ ,
                doc: h
            }), d = !0, (a || c) && (
            // A doc was removed from a full limit query. We'll need to
            // requery from the local cache to see if we know about some other
            // doc that should be in the results.
            u = !0)), d && (f ? (s = s.add(f), o = p ? o.add(t) : o.delete(t)) : (s = s.delete(t), 
            o = o.delete(t)));
        })), this.query.an() || this.query.un()) for (;s.size > this.query.limit; ) {
            var h = this.query.an() ? s.last() : s.first();
            s = s.delete(h.key), o = o.delete(h.key), r.track({
                type: 1 /* Removed */ ,
                doc: h
            });
        }
        return {
            yh: s,
            vh: r,
            Sh: u,
            qt: o
        };
    }, t.prototype.bh = function(t, e) {
        // We suppress the initial change event for documents that were modified as
        // part of a write acknowledgment (e.g. when the value of a server transform
        // is applied) as Watch will send us the same document again.
        // By suppressing the event, we only raise two user visible events (one with
        // `hasPendingWrites` and the final state of the document) instead of three
        // (one with `hasPendingWrites`, the modified document with
        // `hasPendingWrites` and the final state of the document).
        return t.Ke && e.hasCommittedMutations && !e.Ke;
    }, 
    /**
     * Updates the view with the given ViewDocumentChanges and optionally updates
     * limbo docs and sync state from the provided target change.
     * @param docChanges The set of changes to make to the view's docs.
     * @param updateLimboDocuments Whether to update limbo documents based on this
     *        change.
     * @param targetChange A target change to apply for computing limbo docs and
     *        sync state.
     * @return A new ViewChange with the given docs, changes, and sync state.
     */
    // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
    t.prototype.Ch = function(t, e, n) {
        var r = this, i = this.yh;
        this.yh = t.yh, this.qt = t.qt;
        // Sort changes based on type and query comparator
        var o = t.vh.Lt();
        o.sort((function(t, e) {
            return function(t, e) {
                var n = function(t) {
                    switch (t) {
                      case 0 /* Added */ :
                        return 1;

                      case 2 /* Modified */ :
                      case 3 /* Metadata */ :
                        // A metadata change is converted to a modified change at the public
                        // api layer.  Since we sort by document key and then change type,
                        // metadata and modified changes must be sorted equivalently.
                        return 2;

                      case 1 /* Removed */ :
                        return 0;

                      default:
                        return T$1();
                    }
                };
                return n(t) - n(e);
            }(t.type, e.type) || r.Vh(t.doc, e.doc);
        })), this.Dh(n);
        var s = e ? this.Fh() : [], u = 0 === this.Ph.size && this.Yt ? 1 /* Synced */ : 0 /* Local */ , a = u !== this.Ah;
        return this.Ah = u, 0 !== o.length || a ? {
            snapshot: new At(this.query, t.yh, i, o, t.qt, 0 /* Local */ === u, a, 
            /* excludesMetadataChanges= */ !1),
            Nh: s
        } : {
            Nh: s
        };
        // no changes
        }, 
    /**
     * Applies an OnlineState change to the view, potentially generating a
     * ViewChange if the view's syncState changes as a result.
     */
    t.prototype.$h = function(t) {
        return this.Yt && "Offline" /* Offline */ === t ? (
        // If we're offline, set `current` to false and then call applyChanges()
        // to refresh our syncState and generate a ViewChange as appropriate. We
        // are guaranteed to get a new TargetChange that sets `current` back to
        // true once the client is back online.
        this.Yt = !1, this.Ch({
            yh: this.yh,
            vh: new Nt,
            qt: this.qt,
            Sh: !1
        }, 
        /* updateLimboDocuments= */ !1)) : {
            Nh: []
        };
    }, 
    /**
     * Returns whether the doc for the given key should be in limbo.
     */
    t.prototype.kh = function(t) {
        // If the remote end says it's part of this query, it's not in limbo.
        return !this.Rh.has(t) && 
        // The local store doesn't think it's a result, so it shouldn't be in limbo.
        !!this.yh.has(t) && !this.yh.get(t).Ke;
    }, 
    /**
     * Updates syncedDocuments, current, and limbo docs based on the given change.
     * Returns the list of changes to which docs are in limbo.
     */
    t.prototype.Dh = function(t) {
        var e = this;
        t && (t.Jt.forEach((function(t) {
            return e.Rh = e.Rh.add(t);
        })), t.Xt.forEach((function(t) {})), t.Zt.forEach((function(t) {
            return e.Rh = e.Rh.delete(t);
        })), this.Yt = t.Yt);
    }, t.prototype.Fh = function() {
        var t = this;
        // We can only determine limbo documents when we're in-sync with the server.
                if (!this.Yt) return [];
        // TODO(klimt): Do this incrementally so that it's not quadratic when
        // updating many documents.
                var e = this.Ph;
        this.Ph = wt(), this.yh.forEach((function(e) {
            t.kh(e.key) && (t.Ph = t.Ph.add(e.key));
        }));
        // Diff the new limbo docs with the old limbo docs.
        var n = [];
        return e.forEach((function(e) {
            t.Ph.has(e) || n.push(new Ar(e));
        })), this.Ph.forEach((function(t) {
            e.has(t) || n.push(new Nr(t));
        })), n;
    }, 
    /**
     * Update the in-memory state of the current view with the state read from
     * persistence.
     *
     * We update the query view whenever a client's primary status changes:
     * - When a client transitions from primary to secondary, it can miss
     *   LocalStorage updates and its query views may temporarily not be
     *   synchronized with the state on disk.
     * - For secondary to primary transitions, the client needs to update the list
     *   of `syncedDocuments` since secondary clients update their query views
     *   based purely on synthesized RemoteEvents.
     *
     * @param queryResult.documents - The documents that match the query according
     * to the LocalStore.
     * @param queryResult.remoteKeys - The keys of the documents that match the
     * query according to the backend.
     *
     * @return The ViewChange that resulted from this synchronization.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Oh = function(t) {
        this.Rh = t.Wi, this.Ph = wt();
        var e = this.gh(t.documents);
        return this.Ch(e, /*updateLimboDocuments=*/ !0);
    }, 
    /**
     * Returns a view snapshot as if this query was just listened to. Contains
     * a document add for every existing document and the `fromCache` and
     * `hasPendingWrites` status of the already established view.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.xh = function() {
        return At.Wt(this.query, this.yh, this.qt, 0 /* Local */ === this.Ah);
    }, t;
}(), kr = function(
/**
     * The query itself.
     */
t, 
/**
     * The target number created by the client that is used in the watch
     * stream to identify this query.
     */
e, 
/**
     * The view is responsible for computing the final merged truth of what
     * docs are in the query. It gets notified of local and remote changes,
     * and applies the query filters and limits to determine the most correct
     * possible results.
     */
n) {
    this.query = t, this.targetId = e, this.view = n;
}, Rr = function(t) {
    this.key = t, 
    /**
             * Set to true once we've received a document. This is used in
             * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
             * decide whether it needs to manufacture a delete event for the target once
             * the target is CURRENT.
             */
    this.Lh = !1;
}, Dr = /** @class */ function() {
    function t(t, e, n, 
    // PORTING NOTE: Manages state synchronization in multi-tab environments.
    r, i, o) {
        this.co = t, this.Mh = e, this.lo = n, this.qh = r, this.currentUser = i, this.Uh = o, 
        this.Bh = null, this.Wh = new C$1((function(t) {
            return vn(t);
        }), yn), this.Qh = new Map, 
        /**
             * The keys of documents that are in limbo for which we haven't yet started a
             * limbo resolution query.
             */
        this.jh = [], 
        /**
             * Keeps track of the target ID for each document that is in limbo with an
             * active target.
             */
        this.Gh = new ut(Q$1.P), 
        /**
             * Keeps track of the information about an active limbo resolution for each
             * active target ID that was started for the purpose of limbo resolution.
             */
        this.Kh = new Map, this.zh = new ur, 
        /** Stores user completion handlers, indexed by User and BatchId. */
        this.Hh = {}, 
        /** Stores user callbacks waiting for all pending writes to be acknowledged. */
        this.Yh = new Map, this.Jh = Zn.li(), this.onlineState = "Unknown" /* Unknown */ , 
        // The primary state is set to `true` or `false` immediately after Firestore
        // startup. In the interim, a client should only be considered primary if
        // `isPrimary` is true.
        this.Xh = void 0;
    }
    return Object.defineProperty(t.prototype, "Zh", {
        get: function() {
            return !0 === this.Xh;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.subscribe = function(t) {
        this.Bh = t;
    }, t.prototype.listen = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, i, o, s;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.ta("listen()"), (i = this.Wh.get(t)) ? (
                    // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
                    // already exists when EventManager calls us for the first time. This
                    // happens when the primary tab is already listening to this query on
                    // behalf of another tab and the user of the primary also starts listening
                    // to the query. EventManager will not have an assigned target ID in this
                    // case and calls `listen` to obtain this ID.
                    e = i.targetId, this.qh.lh(e), r = i.view.xh(), [ 3 /*break*/ , 4 ]) : [ 3 /*break*/ , 1 ];

                  case 1:
                    return [ 4 /*yield*/ , 
                    /**
             * Assigns the given target an internal ID so that its results can be pinned so
             * they don't get GC'd. A target must be allocated in the local store before
             * the store can be used to manage its view.
             *
             * Allocating an already allocated `Target` will return the existing `TargetData`
             * for that `Target`.
             */
                    function(t, e) {
                        var n = R$1(t);
                        return n.persistence.runTransaction("Allocate target", "readwrite", (function(t) {
                            var r;
                            return n.Ii.Ui(t, e).next((function(i) {
                                return i ? (
                                // This target has been listened to previously, so reuse the
                                // previous targetID.
                                // TODO(mcg): freshen last accessed date?
                                r = i, Mn.resolve(r)) : n.Ii.ea(t).next((function(i) {
                                    return r = new rt(e, i, 0 /* Listen */ , t.$i), n.Ii.na(t, r).next((function() {
                                        return r;
                                    }));
                                }));
                            }));
                        })).then((function(t) {
                            // If Multi-Tab is enabled, the existing target data may be newer than
                            // the in-memory data
                            var r = n.fi.get(t.targetId);
                            return (null === r || t.Z.o(r.Z) > 0) && (n.fi = n.fi.st(t.targetId, t), n.di.set(e, t.targetId)), 
                            t;
                        }));
                    }(this.co, fn(t)) ];

                  case 2:
                    return o = n.sent(), s = this.qh.lh(o.targetId), e = o.targetId, [ 4 /*yield*/ , this.sa(t, e, "current" === s) ];

                  case 3:
                    r = n.sent(), this.Zh && this.Mh.listen(o), n.label = 4;

                  case 4:
                    return [ 2 /*return*/ , r ];
                }
            }));
        }));
    }, 
    /**
     * Registers a view for a previously unknown query and computes its initial
     * snapshot.
     */
    t.prototype.sa = function(t, r, i) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, o, s, u, a, c;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return [ 4 /*yield*/ , or(this.co, t, 
                    /* usePreviousResults= */ !0) ];

                  case 1:
                    return e = n.sent(), o = new Tr(t, e.Wi), s = o.gh(e.documents), u = kt.Ht(r, i && "Offline" /* Offline */ !== this.onlineState), 
                    a = o.Ch(s, 
                    /* updateLimboDocuments= */ this.Zh, u), this.ia(r, a.Nh), c = new kr(t, r, o), 
                    [ 2 /*return*/ , (this.Wh.set(t, c), this.Qh.has(r) ? this.Qh.get(r).push(t) : this.Qh.set(r, [ t ]), 
                    a.snapshot) ];
                }
            }));
        }));
    }, t.prototype.Lo = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, i = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    // Only clean up the query view and target if this is the only query mapped
                    // to the target.
                    return this.ta("unlisten()"), e = this.Wh.get(t), (r = this.Qh.get(e.targetId)).length > 1 ? [ 2 /*return*/ , (this.Qh.set(e.targetId, r.filter((function(e) {
                        return !yn(e, t);
                    }))), void this.Wh.delete(t)) ] : this.Zh ? (
                    // We need to remove the local query target first to allow us to verify
                    // whether any other client is still interested in this target.
                    this.qh.fh(e.targetId), this.qh.Th(e.targetId) ? [ 3 /*break*/ , 2 ] : [ 4 /*yield*/ , ir(this.co, e.targetId, 
                    /*keepPersistedTargetData=*/ !1).then((function() {
                        i.qh.wh(e.targetId), i.Mh.Lo(e.targetId), i.ra(e.targetId);
                    })).catch(sr) ]) : [ 3 /*break*/ , 3 ];

                  case 1:
                    n.sent(), n.label = 2;

                  case 2:
                    return [ 3 /*break*/ , 5 ];

                  case 3:
                    return this.ra(e.targetId), [ 4 /*yield*/ , ir(this.co, e.targetId, 
                    /*keepPersistedTargetData=*/ !0) ];

                  case 4:
                    n.sent(), n.label = 5;

                  case 5:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.write = function(t, r) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, i, o;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    this.ta("write()"), n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 5, , 6 ]), [ 4 /*yield*/ , 
                    /* Accepts locally generated Mutations and commit them to storage. */
                    function(t, e) {
                        var n, r = R$1(t), i = x$1.now(), o = e.reduce((function(t, e) {
                            return t.add(e.key);
                        }), wt());
                        return r.persistence.runTransaction("Locally write mutations", "readwrite", (function(t) {
                            return r.Ai.Un(t, o).next((function(o) {
                                n = o;
                                for (
                                // For non-idempotent mutations (such as `FieldValue.increment()`),
                                // we record the base state in a separate patch mutation. This is
                                // later used to guarantee consistent values and prevents flicker
                                // even if the backend sends us an update that already includes our
                                // transform.
                                var s = [], u = 0, a = e; u < a.length; u++) {
                                    var c = a[u], h = je(c, n.get(c.key));
                                    null != h && 
                                    // NOTE: The base state should only be applied if there's some
                                    // existing document to override, so use a Precondition of
                                    // exists=true
                                    s.push(new $e(c.key, h, tn(h.proto.mapValue), qe.exists(!0)));
                                }
                                return r.$n.oa(t, i, s, e);
                            }));
                        })).then((function(t) {
                            var e = t.Rn(n);
                            return {
                                batchId: t.batchId,
                                ha: e
                            };
                        }));
                    }(this.co, t) ];

                  case 2:
                    return e = n.sent(), this.qh.ah(e.batchId), this.aa(e.batchId, r), [ 4 /*yield*/ , this.ua(e.ha) ];

                  case 3:
                    return n.sent(), [ 4 /*yield*/ , this.Mh.No() ];

                  case 4:
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 5:
                    return i = n.sent(), o = Yn(i, "Failed to persist write"), r.reject(o), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.jo = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    this.ta("applyRemoteEvent()"), n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , nr(this.co, t) ];

                  case 2:
                    return e = n.sent(), 
                    // Update `receivedDocument` as appropriate for any limbo targets.
                    t.Qt.forEach((function(t, e) {
                        var n = r.Kh.get(e);
                        n && (
                        // Since this is a limbo resolution lookup, it's for a single document
                        // and it could be added, modified, or removed, but not a combination.
                        k$1(t.Jt.size + t.Xt.size + t.Zt.size <= 1), t.Jt.size > 0 ? n.Lh = !0 : t.Xt.size > 0 ? k$1(n.Lh) : t.Zt.size > 0 && (k$1(n.Lh), 
                        n.Lh = !1));
                    })), [ 4 /*yield*/ , this.ua(e, t) ];

                  case 3:
                    // Update `receivedDocument` as appropriate for any limbo targets.
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 4:
                    return [ 4 /*yield*/ , sr(n.sent()) ];

                  case 5:
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.$h = function(t, e) {
        // If we are the secondary client, we explicitly ignore the remote store's
        // online state (the local client may go offline, even though the primary
        // tab remains online) and only apply the primary tab's online state from
        // SharedClientState.
        if (this.Zh && 0 /* RemoteStore */ === e || !this.Zh && 1 /* SharedClientState */ === e) {
            this.ta("applyOnlineStateChange()");
            var n = [];
            this.Wh.forEach((function(e, r) {
                var i = r.view.$h(t);
                i.snapshot && n.push(i.snapshot);
            })), this.Bh.ca(t), this.Bh.Br(n), this.onlineState = t, this.Zh && this.qh.Ih(t);
        }
    }, t.prototype.Go = function(t, r) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, i, o, s, u, a = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.ta("rejectListens()"), 
                    // PORTING NOTE: Multi-tab only.
                    this.qh._h(t, "rejected", r), e = this.Kh.get(t), (i = e && e.key) ? (o = (o = new ut(Q$1.P)).st(i, new rn(i, j.min())), 
                    s = wt().add(i), u = new Tt(j.min(), 
                    /* targetChanges= */ new Map, 
                    /* targetMismatches= */ new ht(V$1), o, s), [ 4 /*yield*/ , this.jo(u) ]) : [ 3 /*break*/ , 2 ];

                  case 1:
                    return n.sent(), 
                    // Since this query failed, we won't want to manually unlisten to it.
                    // We only remove it from bookkeeping after we successfully applied the
                    // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
                    // this query when the RemoteStore restarts the Watch stream, which should
                    // re-trigger the target failure.
                    this.Gh = this.Gh.remove(i), this.Kh.delete(t), this.la(), [ 3 /*break*/ , 4 ];

                  case 2:
                    return [ 4 /*yield*/ , ir(this.co, t, 
                    /* keepPersistedTargetData */ !1).then((function() {
                        return a.ra(t, r);
                    })).catch(sr) ];

                  case 3:
                    n.sent(), n.label = 4;

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Xo = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    this.ta("applySuccessfulWrite()"), e = t.batch.batchId, n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , tr(this.co, t) ];

                  case 2:
                    return r = n.sent(), 
                    // The local store may or may not be able to apply the write result and
                    // raise events immediately (depending on whether the watcher is caught
                    // up), so we raise user callbacks first so that they consistently happen
                    // before listen events.
                    this._a(e, /*error=*/ null), this.fa(e), this.qh.uh(e, "acknowledged"), [ 4 /*yield*/ , this.ua(r) ];

                  case 3:
                    // The local store may or may not be able to apply the write result and
                    // raise events immediately (depending on whether the watcher is caught
                    // up), so we raise user callbacks first so that they consistently happen
                    // before listen events.
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 4:
                    return [ 4 /*yield*/ , sr(n.sent()) ];

                  case 5:
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.th = function(t, r) {
        return __awaiter(this, void 0, void 0, (function() {
            var e;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    this.ta("rejectFailedWrite()"), n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , function(t, e) {
                        var n = R$1(t);
                        return n.persistence.runTransaction("Reject batch", "readwrite-primary", (function(t) {
                            var r;
                            return n.$n.da(t, e).next((function(e) {
                                return k$1(null !== e), r = e.keys(), n.$n.Si(t, e);
                            })).next((function() {
                                return n.$n.Ci(t);
                            })).next((function() {
                                return n.Ai.Un(t, r);
                            }));
                        }));
                    }(this.co, t) ];

                  case 2:
                    return e = n.sent(), 
                    // The local store may or may not be able to apply the write result and
                    // raise events immediately (depending on whether the watcher is caught up),
                    // so we raise user callbacks first so that they consistently happen before
                    // listen events.
                    this._a(t, r), this.fa(t), this.qh.uh(t, "rejected", r), [ 4 /*yield*/ , this.ua(e) ];

                  case 3:
                    // The local store may or may not be able to apply the write result and
                    // raise events immediately (depending on whether the watcher is caught up),
                    // so we raise user callbacks first so that they consistently happen before
                    // listen events.
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 4:
                    return [ 4 /*yield*/ , sr(n.sent()) ];

                  case 5:
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.wa = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, i, o;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    this.Mh.Eo() || E$1("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), 
                    n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 3, , 4 ]), [ 4 /*yield*/ , function(t) {
                        var e = R$1(t);
                        return e.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", (function(t) {
                            return e.$n.ma(t);
                        }));
                    }(this.co) ];

                  case 2:
                    return -1 === (e = n.sent()) ? [ 2 /*return*/ , void t.resolve() ] : ((r = this.Yh.get(e) || []).push(t), 
                    this.Yh.set(e, r), [ 3 /*break*/ , 4 ]);

                  case 3:
                    return i = n.sent(), o = Yn(i, "Initialization of waitForPendingWrites() operation failed"), 
                    t.reject(o), [ 3 /*break*/ , 4 ];

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
     * if there are any.
     */
    t.prototype.fa = function(t) {
        (this.Yh.get(t) || []).forEach((function(t) {
            t.resolve();
        })), this.Yh.delete(t);
    }, 
    /** Reject all outstanding callbacks waiting for pending writes to complete. */ t.prototype.Ta = function(t) {
        this.Yh.forEach((function(e) {
            e.forEach((function(e) {
                e.reject(new F$1(M$1.CANCELLED, t));
            }));
        })), this.Yh.clear();
    }, t.prototype.aa = function(t, e) {
        var n = this.Hh[this.currentUser.rr()];
        n || (n = new ut(V$1)), n = n.st(t, e), this.Hh[this.currentUser.rr()] = n;
    }, 
    /**
     * Resolves or rejects the user callback for the given batch and then discards
     * it.
     */
    t.prototype._a = function(t, e) {
        var n = this.Hh[this.currentUser.rr()];
        // NOTE: Mutations restored from persistence won't have callbacks, so it's
        // okay for there to be no callback for this ID.
                if (n) {
            var r = n.get(t);
            r && (e ? r.reject(e) : r.resolve(), n = n.remove(t)), this.Hh[this.currentUser.rr()] = n;
        }
    }, t.prototype.ra = function(t, e) {
        var n = this;
        void 0 === e && (e = null), this.qh.fh(t);
        for (var r = 0, i = this.Qh.get(t); r < i.length; r++) {
            var o = i[r];
            this.Wh.delete(o), e && this.Bh.Ea(o, e);
        }
        this.Qh.delete(t), this.Zh && this.zh.Zi(t).forEach((function(t) {
            n.zh.nr(t) || 
            // We removed the last reference for this key
            n.Ia(t);
        }));
    }, t.prototype.Ia = function(t) {
        // It's possible that the target already got removed because the query failed. In that case,
        // the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
        var e = this.Gh.get(t);
        null !== e && (this.Mh.Lo(e), this.Gh = this.Gh.remove(t), this.Kh.delete(e), this.la());
    }, t.prototype.ia = function(t, e) {
        for (var n = 0, r = e; n < r.length; n++) {
            var i = r[n];
            i instanceof Nr ? (this.zh.zi(i.key, t), this.Ra(i)) : i instanceof Ar ? (E$1("SyncEngine", "Document no longer in limbo: " + i.key), 
            this.zh.Yi(i.key, t), this.zh.nr(i.key) || 
            // We removed the last reference for this key
            this.Ia(i.key)) : T$1();
        }
    }, t.prototype.Ra = function(t) {
        var e = t.key;
        this.Gh.get(e) || (E$1("SyncEngine", "New document in limbo: " + e), this.jh.push(e), 
        this.la());
    }, 
    /**
     * Starts listens for documents in limbo that are enqueued for resolution,
     * subject to a maximum number of concurrent resolutions.
     *
     * Without bounding the number of concurrent resolutions, the server can fail
     * with "resource exhausted" errors which can lead to pathological client
     * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
     */
    t.prototype.la = function() {
        for (;this.jh.length > 0 && this.Gh.size < this.Uh; ) {
            var t = this.jh.shift(), e = this.Jh.next();
            this.Kh.set(e, new Rr(t)), this.Gh = this.Gh.st(t, e), this.Mh.listen(new rt(fn(an(t.path)), e, 2 /* LimboResolution */ , jn.rs));
        }
    }, 
    // Visible for testing
    t.prototype.Aa = function() {
        return this.Gh;
    }, 
    // Visible for testing
    t.prototype.Pa = function() {
        return this.jh;
    }, t.prototype.ua = function(t, r) {
        return __awaiter(this, void 0, void 0, (function() {
            var i, o, s, u = this;
            return __generator(this, (function(a) {
                switch (a.label) {
                  case 0:
                    return i = [], o = [], s = [], this.Wh.forEach((function(e, n) {
                        s.push(Promise.resolve().then((function() {
                            var e = n.view.gh(t);
                            return e.Sh ? or(u.co, n.query, 
                            /* usePreviousResults= */ !1).then((function(t) {
                                var r = t.documents;
                                return n.view.gh(r, e);
                            })) : e;
                            // The query has a limit and some docs were removed, so we need
                            // to re-run the query against the local store to make sure we
                            // didn't lose any good docs that had been past the limit.
                                                })).then((function(t) {
                            var e = r && r.Qt.get(n.targetId), s = n.view.Ch(t, 
                            /* updateLimboDocuments= */ u.Zh, e);
                            if (u.ia(n.targetId, s.Nh), s.snapshot) {
                                u.Zh && u.qh._h(n.targetId, s.snapshot.fromCache ? "not-current" : "current"), i.push(s.snapshot);
                                var a = xn.Zn(n.targetId, s.snapshot);
                                o.push(a);
                            }
                        })));
                    })), [ 4 /*yield*/ , Promise.all(s) ];

                  case 1:
                    return a.sent(), this.Bh.Br(i), [ 4 /*yield*/ , function(t, r) {
                        return __awaiter(this, void 0, void 0, (function() {
                            var e, i, o, s, u, a, c, h, f;
                            return __generator(this, (function(n) {
                                switch (n.label) {
                                  case 0:
                                    e = R$1(t), n.label = 1;

                                  case 1:
                                    return n.trys.push([ 1, 3, , 4 ]), [ 4 /*yield*/ , e.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (function(t) {
                                        return Mn.forEach(r, (function(n) {
                                            return Mn.forEach(n.Jn, (function(r) {
                                                return e.persistence.Li.zi(t, n.targetId, r);
                                            })).next((function() {
                                                return Mn.forEach(n.Xn, (function(r) {
                                                    return e.persistence.Li.Yi(t, n.targetId, r);
                                                }));
                                            }));
                                        }));
                                    })) ];

                                  case 2:
                                    return n.sent(), [ 3 /*break*/ , 4 ];

                                  case 3:
                                    if (!zn(i = n.sent())) throw i;
                                    // If `notifyLocalViewChanges` fails, we did not advance the sequence
                                    // number for the documents that were included in this transaction.
                                    // This might trigger them to be deleted earlier than they otherwise
                                    // would have, but it should not invalidate the integrity of the data.
                                                                        return E$1("LocalStore", "Failed to update sequence numbers: " + i), 
                                    [ 3 /*break*/ , 4 ];

                                  case 4:
                                    for (o = 0, s = r; o < s.length; o++) u = s[o], a = u.targetId, u.fromCache || (c = e.fi.get(a), 
                                    h = c.Z, f = c.nt(h), 
                                    // Advance the last limbo free snapshot version
                                    e.fi = e.fi.st(a, f));
                                    return [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    }(this.co, o) ];

                  case 2:
                    return a.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.ta = function(t) {}, t.prototype.eh = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var r;
            return __generator(this, (function(i) {
                switch (i.label) {
                  case 0:
                    return this.currentUser.isEqual(t) ? [ 3 /*break*/ , 3 ] : (E$1("SyncEngine", "User change. New user:", t.rr()), 
                    [ 4 /*yield*/ , 
                    /**
                 * Tells the LocalStore that the currently authenticated user has changed.
                 *
                 * In response the local store switches the mutation queue to the new user and
                 * returns any resulting document changes.
                 */
                    // PORTING NOTE: Android and iOS only return the documents affected by the
                    // change.
                    function(t, r) {
                        return __awaiter(this, void 0, void 0, (function() {
                            var e, i, o, s;
                            return __generator(this, (function(n) {
                                switch (n.label) {
                                  case 0:
                                    return e = R$1(t), i = e.$n, o = e.Ai, [ 4 /*yield*/ , e.persistence.runTransaction("Handle user change", "readonly", (function(t) {
                                        // Swap out the mutation queue, grabbing the pending mutation batches
                                        // before and after.
                                        var n;
                                        return e.$n.Va(t).next((function(s) {
                                            return n = s, i = e.persistence.mi(r), 
                                            // Recreate our LocalDocumentsView using the new
                                            // MutationQueue.
                                            o = new Fn(e.Ti, i, e.persistence.Pi()), i.Va(t);
                                        })).next((function(e) {
                                            for (var r = [], i = [], s = wt(), u = 0, a = n
                                            // Union the old/new changed keys.
                                            ; u < a.length; u++) {
                                                var c = a[u];
                                                r.push(c.batchId);
                                                for (var h = 0, f = c.mutations; h < f.length; h++) {
                                                    var l = f[h];
                                                    s = s.add(l.key);
                                                }
                                            }
                                            for (var p = 0, d = e; p < d.length; p++) {
                                                var y = d[p];
                                                i.push(y.batchId);
                                                for (var v = 0, g = y.mutations; v < g.length; v++) {
                                                    var m = g[v];
                                                    s = s.add(m.key);
                                                }
                                            }
                                            // Return the set of all (potentially) changed documents and the list
                                            // of mutation batch IDs that were affected by change.
                                                                                        return o.Un(t, s).next((function(t) {
                                                return {
                                                    ya: t,
                                                    pa: r,
                                                    ga: i
                                                };
                                            }));
                                        }));
                                    })) ];

                                  case 1:
                                    return s = n.sent(), [ 2 /*return*/ , (e.$n = i, e.Ai = o, e._i.Vi(e.Ai), s) ];
                                }
                            }));
                        }));
                    }(this.co, t) ]);

                  case 1:
                    return r = i.sent(), this.currentUser = t, 
                    // Fails tasks waiting for pending writes requested by previous user.
                    this.Ta("'waitForPendingWrites' promise is rejected due to a user change."), 
                    // TODO(b/114226417): Consider calling this only in the primary tab.
                    this.qh.Eh(t, r.pa, r.ga), [ 4 /*yield*/ , this.ua(r.ya) ];

                  case 2:
                    i.sent(), i.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.xe = function(t) {
        var e = this.Kh.get(t);
        if (e && e.Lh) return wt().add(e.key);
        var n = wt(), r = this.Qh.get(t);
        if (!r) return n;
        for (var i = 0, o = r; i < o.length; i++) {
            var s = o[i], u = this.Wh.get(s);
            n = n.Ft(u.view.ph);
        }
        return n;
    }, t;
}(), _r = function() {
    this.va = void 0, this.listeners = [];
}, Vr = /** @class */ function() {
    function t(t) {
        this.qo = t, this.ba = new C$1((function(t) {
            return vn(t);
        }), yn), this.onlineState = "Unknown" /* Unknown */ , this.Sa = new Set, this.qo.subscribe(this);
    }
    return t.prototype.listen = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, i, o, s, u;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    if (e = t.query, r = !1, (i = this.ba.get(e)) || (r = !0, i = new _r), !r) return [ 3 /*break*/ , 4 ];
                    n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 3, , 4 ]), o = i, [ 4 /*yield*/ , this.qo.listen(e) ];

                  case 2:
                    return o.va = n.sent(), [ 3 /*break*/ , 4 ];

                  case 3:
                    return s = n.sent(), u = Yn(s, "Initialization of query '" + gn(t.query) + "' failed"), 
                    [ 2 /*return*/ , void t.onError(u) ];

                  case 4:
                    return this.ba.set(e, i), i.listeners.push(t), 
                    // Run global snapshot listeners if a consistent snapshot has been emitted.
                    t.$h(this.onlineState), i.va && t.Ca(i.va) && this.Da(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Lo = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, i, o;
            return __generator(this, (function(n) {
                return e = t.query, r = !1, (i = this.ba.get(e)) && (o = i.listeners.indexOf(t)) >= 0 && (i.listeners.splice(o, 1), 
                r = 0 === i.listeners.length), r ? [ 2 /*return*/ , (this.ba.delete(e), this.qo.Lo(e)) ] : [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.Br = function(t) {
        for (var e = !1, n = 0, r = t; n < r.length; n++) {
            var i = r[n], o = i.query, s = this.ba.get(o);
            if (s) {
                for (var u = 0, a = s.listeners; u < a.length; u++) {
                    a[u].Ca(i) && (e = !0);
                }
                s.va = i;
            }
        }
        e && this.Da();
    }, t.prototype.Ea = function(t, e) {
        var n = this.ba.get(t);
        if (n) for (var r = 0, i = n.listeners; r < i.length; r++) {
            i[r].onError(e);
        }
        // Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
        // after an error.
                this.ba.delete(t);
    }, t.prototype.ca = function(t) {
        this.onlineState = t;
        var e = !1;
        this.ba.forEach((function(n, r) {
            for (var i = 0, o = r.listeners; i < o.length; i++) {
                // Run global snapshot listeners if a consistent snapshot has been emitted.
                o[i].$h(t) && (e = !0);
            }
        })), e && this.Da();
    }, t.prototype.Fa = function(t) {
        this.Sa.add(t), 
        // Immediately fire an initial event, indicating all existing listeners
        // are in-sync.
        t.next();
    }, t.prototype.Na = function(t) {
        this.Sa.delete(t);
    }, 
    // Call all global snapshot listeners that have been set.
    t.prototype.Da = function() {
        this.Sa.forEach((function(t) {
            t.next();
        }));
    }, t;
}(), Sr = /** @class */ function() {
    function t(t, e, n) {
        this.query = t, this.$a = e, 
        /**
             * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
             * observer. This flag is set to true once we've actually raised an event.
             */
        this.ka = !1, this.Oa = null, this.onlineState = "Unknown" /* Unknown */ , this.options = n || {}
        /**
     * Applies the new ViewSnapshot to this listener, raising a user-facing event
     * if applicable (depending on what changed, whether the user has opted into
     * metadata-only changes, etc.). Returns true if a user-facing event was
     * indeed raised.
     */;
    }
    return t.prototype.Ca = function(t) {
        if (!this.options.includeMetadataChanges) {
            for (
            // Remove the metadata only changes.
            var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
                var i = r[n];
                3 /* Metadata */ !== i.type && e.push(i);
            }
            t = new At(t.query, t.docs, t.Mt, e, t.qt, t.fromCache, t.Ut, 
            /* excludesMetadataChanges= */ !0);
        }
        var o = !1;
        return this.ka ? this.xa(t) && (this.$a.next(t), o = !0) : this.La(t, this.onlineState) && (this.Ma(t), 
        o = !0), this.Oa = t, o;
    }, t.prototype.onError = function(t) {
        this.$a.error(t);
    }, 
    /** Returns whether a snapshot was raised. */ t.prototype.$h = function(t) {
        this.onlineState = t;
        var e = !1;
        return this.Oa && !this.ka && this.La(this.Oa, t) && (this.Ma(this.Oa), e = !0), 
        e;
    }, t.prototype.La = function(t, e) {
        // Always raise the first event when we're synced
        if (!t.fromCache) return !0;
        // NOTE: We consider OnlineState.Unknown as online (it should become Offline
        // or Online if we wait long enough).
                var n = "Offline" /* Offline */ !== e;
        // Don't raise the event if we're online, aren't synced yet (checked
        // above) and are waiting for a sync.
                return !(this.options.qa && n || t.docs._() && "Offline" /* Offline */ !== e);
        // Raise data from cache if we have any documents or we are offline
        }, t.prototype.xa = function(t) {
        // We don't need to handle includeDocumentMetadataChanges here because
        // the Metadata only changes have already been stripped out if needed.
        // At this point the only changes we will see are the ones we should
        // propagate.
        if (t.docChanges.length > 0) return !0;
        var e = this.Oa && this.Oa.hasPendingWrites !== t.hasPendingWrites;
        return !(!t.Ut && !e) && !0 === this.options.includeMetadataChanges;
        // Generally we should have hit one of the cases above, but it's possible
        // to get here if there were only metadata docChanges and they got
        // stripped out.
        }, t.prototype.Ma = function(t) {
        t = At.Wt(t.query, t.docs, t.qt, t.fromCache), this.ka = !0, this.$a.next(t);
    }, t;
}(), Lr = /** @class */ function() {
    function t() {}
    return t.prototype.Vi = function(t) {
        this.Ua = t;
    }, t.prototype.Qn = function(t, e, n, r) {
        var i = this;
        // Queries that match all documents don't benefit from using
        // IndexFreeQueries. It is more efficient to scan all documents in a
        // collection, rather than to perform individual lookups.
                return e.hn() || n.isEqual(j.min()) ? this.Ba(t, e) : this.Ua.Un(t, r).next((function(o) {
            var u = i.Wa(e, o);
            return (e.an() || e.un()) && i.Sh(e.nn, u, r, n) ? i.Ba(t, e) : (b() <= LogLevel.DEBUG && E$1("IndexFreeQueryEngine", "Re-using previous result from %s to execute query: %s", n.toString(), gn(e)), 
            i.Ua.Qn(t, e, n).next((function(t) {
                // We merge `previousResults` into `updateResults`, since
                // `updateResults` is already a DocumentMap. If a document is
                // contained in both lists, then its contents are the same.
                return u.forEach((function(e) {
                    t = t.st(e.key, e);
                })), t;
            })));
        }));
        // Queries that have never seen a snapshot without limbo free documents
        // should also be run as a full collection scan.
        }, 
    /** Applies the query filter and sorting to the provided documents.  */ t.prototype.Wa = function(t, e) {
        // Sort the documents and re-apply the query filter since previously
        // matching documents do not necessarily still match the query.
        var n = new ht(wn(t));
        return e.forEach((function(e, r) {
            r instanceof nn && mn(t, r) && (n = n.add(r));
        })), n;
    }, 
    /**
     * Determines if a limit query needs to be refilled from cache, making it
     * ineligible for index-free execution.
     *
     * @param sortedPreviousResults The documents that matched the query when it
     * was last synchronized, sorted by the query's comparator.
     * @param remoteKeys The document keys that matched the query at the last
     * snapshot.
     * @param limboFreeSnapshotVersion The version of the snapshot when the query
     * was last synchronized.
     */
    t.prototype.Sh = function(t, e, n, r) {
        // The query needs to be refilled if a previously matching document no
        // longer matches.
        if (n.size !== e.size) return !0;
        // Limit queries are not eligible for index-free query execution if there is
        // a potential that an older document from cache now sorts before a document
        // that was previously part of the limit. This, however, can only happen if
        // the document at the edge of the limit goes out of limit.
        // If a document that is not the limit boundary sorts differently,
        // the boundary of the limit itself did not change and documents from cache
        // will continue to be "rejected" by this boundary. Therefore, we can ignore
        // any modifications that don't affect the last document.
                var i = "F" /* First */ === t ? e.last() : e.first();
        return !!i && (i.hasPendingWrites || i.version.o(r) > 0);
    }, t.prototype.Ba = function(t, e) {
        return b() <= LogLevel.DEBUG && E$1("IndexFreeQueryEngine", "Using full collection scan to execute query:", gn(e)), 
        this.Ua.Qn(t, e, j.min());
    }, t;
}(), Pr = /** @class */ function() {
    function t(t, e) {
        this.kn = t, this.Li = e, 
        /**
             * The set of all mutations that have been sent but not yet been applied to
             * the backend.
             */
        this.$n = [], 
        /** Next value to use when assigning sequential IDs to each mutation batch. */
        this.Qa = 1, 
        /** An ordered mapping between documents and the mutations batch IDs. */
        this.ja = new ht(ar.ji);
    }
    return t.prototype.Ga = function(t) {
        return Mn.resolve(0 === this.$n.length);
    }, t.prototype.oa = function(t, e, n, r) {
        var i = this.Qa;
        this.Qa++, this.$n.length > 0 && this.$n[this.$n.length - 1];
        var o = new qn(i, e, n, r);
        this.$n.push(o);
        // Track references by document key and index collection parents.
        for (var s = 0, u = r; s < u.length; s++) {
            var a = u[s];
            this.ja = this.ja.add(new ar(a.key, i)), this.kn.ai(t, a.key.path.g());
        }
        return Mn.resolve(o);
    }, t.prototype.da = function(t, e) {
        return Mn.resolve(this.Ka(e));
    }, t.prototype.qi = function(t, e) {
        var n = e + 1, r = this.za(n), i = r < 0 ? 0 : r;
        // The requested batchId may still be out of range so normalize it to the
        // start of the queue.
                return Mn.resolve(this.$n.length > i ? this.$n[i] : null);
    }, t.prototype.ma = function() {
        return Mn.resolve(0 === this.$n.length ? -1 : this.Qa - 1);
    }, t.prototype.Va = function(t) {
        return Mn.resolve(this.$n.slice());
    }, t.prototype.xn = function(t, e) {
        var n = this, r = new ar(e, 0), i = new ar(e, Number.POSITIVE_INFINITY), o = [];
        return this.ja.St([ r, i ], (function(t) {
            var e = n.Ka(t.sr);
            o.push(e);
        })), Mn.resolve(o);
    }, t.prototype.Wn = function(t, e) {
        var n = this, r = new ht(V$1);
        return e.forEach((function(t) {
            var e = new ar(t, 0), i = new ar(t, Number.POSITIVE_INFINITY);
            n.ja.St([ e, i ], (function(t) {
                r = r.add(t.sr);
            }));
        })), Mn.resolve(this.Ha(r));
    }, t.prototype.Hn = function(t, e) {
        // Use the query path as a prefix for testing if a document matches the
        // query.
        var n = e.path, r = n.length + 1, i = n;
        // Construct a document reference for actually scanning the index. Unlike
        // the prefix the document key in this reference must have an even number of
        // segments. The empty segment can be used a suffix of the query path
        // because it precedes all other segments in an ordered traversal.
                Q$1.j(i) || (i = i.child(""));
        var o = new ar(new Q$1(i), 0), s = new ht(V$1);
        // Find unique batchIDs referenced by all documents potentially matching the
        // query.
                return this.ja.Ct((function(t) {
            var e = t.key.path;
            return !!n.C(e) && (
            // Rows with document keys more than one segment longer than the query
            // path can't be matches. For example, a query on 'rooms' can't match
            // the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            e.length === r && (s = s.add(t.sr)), !0);
        }), o), Mn.resolve(this.Ha(s));
    }, t.prototype.Ha = function(t) {
        var e = this, n = [];
        // Construct an array of matching batches, sorted by batchID to ensure that
        // multiple mutations affecting the same document key are applied in order.
                return t.forEach((function(t) {
            var r = e.Ka(t);
            null !== r && n.push(r);
        })), n;
    }, t.prototype.Si = function(t, e) {
        var n = this;
        k$1(0 === this.Ya(e.batchId, "removed")), this.$n.shift();
        var r = this.ja;
        return Mn.forEach(e.mutations, (function(i) {
            var o = new ar(i.key, e.batchId);
            return r = r.delete(o), n.Li.Ja(t, i.key);
        })).next((function() {
            n.ja = r;
        }));
    }, t.prototype.Xa = function(t) {
        // No-op since the memory mutation queue does not maintain a separate cache.
    }, t.prototype.nr = function(t, e) {
        var n = new ar(e, 0), r = this.ja.Dt(n);
        return Mn.resolve(e.isEqual(r && r.key));
    }, t.prototype.Ci = function(t) {
        return this.$n.length, Mn.resolve();
    }, 
    /**
     * Finds the index of the given batchId in the mutation queue and asserts that
     * the resulting index is within the bounds of the queue.
     *
     * @param batchId The batchId to search for
     * @param action A description of what the caller is doing, phrased in passive
     * form (e.g. "acknowledged" in a routine that acknowledges batches).
     */
    t.prototype.Ya = function(t, e) {
        return this.za(t);
    }, 
    /**
     * Finds the index of the given batchId in the mutation queue. This operation
     * is O(1).
     *
     * @return The computed index of the batch with the given batchId, based on
     * the state of the queue. Note this index can be negative if the requested
     * batchId has already been remvoed from the queue or past the end of the
     * queue if the batchId is larger than the last added batch.
     */
    t.prototype.za = function(t) {
        return 0 === this.$n.length ? 0 : t - this.$n[0].batchId;
        // Examine the front of the queue to figure out the difference between the
        // batchId and indexes in the array. Note that since the queue is ordered
        // by batchId, if the first batch has a larger batchId then the requested
        // batchId doesn't exist in the queue.
        }, 
    /**
     * A version of lookupMutationBatch that doesn't return a promise, this makes
     * other functions that uses this code easier to read and more efficent.
     */
    t.prototype.Ka = function(t) {
        var e = this.za(t);
        return e < 0 || e >= this.$n.length ? null : this.$n[e];
    }, t;
}(), Or = /** @class */ function() {
    /**
     * @param sizer Used to assess the size of a document. For eager GC, this is expected to just
     * return 0 to avoid unnecessarily doing the work of calculating the size.
     */
    function t(t, e) {
        this.kn = t, this.Za = e, 
        /** Underlying cache of documents and their read times. */
        this.docs = new ut(Q$1.P), 
        /** Size of all cached documents. */
        this.size = 0
        /**
     * Adds the supplied entry to the cache and updates the cache size as appropriate.
     *
     * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */;
    }
    return t.prototype.bi = function(t, e, n) {
        var r = e.key, i = this.docs.get(r), o = i ? i.size : 0, s = this.Za(e);
        return this.docs = this.docs.st(r, {
            tu: e,
            size: s,
            readTime: n
        }), this.size += s - o, this.kn.ai(t, r.path.g());
    }, 
    /**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */
    t.prototype.Oi = function(t) {
        var e = this.docs.get(t);
        e && (this.docs = this.docs.remove(t), this.size -= e.size);
    }, t.prototype.Mn = function(t, e) {
        var n = this.docs.get(e);
        return Mn.resolve(n ? n.tu : null);
    }, t.prototype.getEntries = function(t, e) {
        var n = this, r = dt();
        return e.forEach((function(t) {
            var e = n.docs.get(t);
            r = r.st(t, e ? e.tu : null);
        })), Mn.resolve(r);
    }, t.prototype.Qn = function(t, e, n) {
        for (var r = vt(), i = new Q$1(e.path.child("")), o = this.docs.ct(i)
        // Documents are ordered by key, so we can use a prefix scan to narrow down
        // the documents we need to match the query against.
        ; o.Tt(); ) {
            var s = o.wt(), u = s.key, a = s.value, c = a.tu, h = a.readTime;
            if (!e.path.C(u.path)) break;
            h.o(n) <= 0 || c instanceof nn && mn(e, c) && (r = r.st(c.key, c));
        }
        return Mn.resolve(r);
    }, t.prototype.eu = function(t, e) {
        return Mn.forEach(this.docs, (function(t) {
            return e(t);
        }));
    }, t.prototype.gi = function(e) {
        // `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
        // a separate changelog and does not need special handling for removals.
        return new t.nu(this);
    }, t.prototype.su = function(t) {
        return Mn.resolve(this.size);
    }, t;
}();

/** A CredentialsProvider that always yields an empty token. */
/**
 * Handles the details of adding and updating documents in the MemoryRemoteDocumentCache.
 */
Or.nu = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).uu = t, n;
    }
    return __extends(n, e), n.prototype.Ch = function(t) {
        var e = this, n = [];
        return this.ha.forEach((function(r, i) {
            i ? n.push(e.uu.bi(t, i, e.readTime)) : e.uu.Oi(r);
        })), Mn.Dn(n);
    }, n.prototype.hu = function(t, e) {
        return this.uu.Mn(t, e);
    }, n.prototype.au = function(t, e) {
        return this.uu.getEntries(t, e);
    }, n;
}(/** @class */ function() {
    function t() {
        // A mapping of document key to the new cache entry that should be written (or null if any
        // existing cache entry should be removed).
        this.ha = new C$1((function(t) {
            return t.toString();
        }), (function(t, e) {
            return t.isEqual(e);
        })), this.iu = !1;
    }
    return Object.defineProperty(t.prototype, "readTime", {
        get: function() {
            return this.ru;
        },
        set: function(t) {
            this.ru = t;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Buffers a `RemoteDocumentCache.addEntry()` call.
     *
     * You can only modify documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.bi = function(t, e) {
        this.ou(), this.readTime = e, this.ha.set(t.key, t);
    }, 
    /**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.Oi = function(t, e) {
        this.ou(), e && (this.readTime = e), this.ha.set(t, null);
    }, 
    /**
     * Looks up an entry in the cache. The buffered changes will first be checked,
     * and if no buffered change applies, this will forward to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction The transaction in which to perform any persistence
     *     operations.
     * @param documentKey The key of the entry to look up.
     * @return The cached Document or NoDocument entry, or null if we have nothing
     * cached.
     */
    t.prototype.Mn = function(t, e) {
        this.ou();
        var n = this.ha.get(e);
        return void 0 !== n ? Mn.resolve(n) : this.hu(t, e);
    }, 
    /**
     * Looks up several entries in the cache, forwarding to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction The transaction in which to perform any persistence
     *     operations.
     * @param documentKeys The keys of the entries to look up.
     * @return A map of cached `Document`s or `NoDocument`s, indexed by key. If an
     *     entry cannot be found, the corresponding key will be mapped to a null
     *     value.
     */
    t.prototype.getEntries = function(t, e) {
        return this.au(t, e);
    }, 
    /**
     * Applies buffered changes to the underlying RemoteDocumentCache, using
     * the provided transaction.
     */
    t.prototype.apply = function(t) {
        return this.ou(), this.iu = !0, this.Ch(t);
    }, 
    /** Helper to assert this.changes is not null  */ t.prototype.ou = function() {}, 
    t;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ur = /** @class */ function() {
    function t(t) {
        this.persistence = t, 
        /**
             * Maps a target to the data about that target
             */
        this.cu = new C$1((function(t) {
            return K$1(t);
        }), Z$1), 
        /** The last received snapshot version. */
        this.lastRemoteSnapshotVersion = j.min(), 
        /** The highest numbered target ID encountered. */
        this.highestTargetId = 0, 
        /** The highest sequence number encountered. */
        this.lu = 0, 
        /**
             * A ordered bidirectional mapping between documents and the remote target
             * IDs.
             */
        this._u = new ur, this.targetCount = 0, this.fu = Zn.ci();
    }
    return t.prototype.ve = function(t, e) {
        return this.cu.forEach((function(t, n) {
            return e(n);
        })), Mn.resolve();
    }, t.prototype.Di = function(t) {
        return Mn.resolve(this.lastRemoteSnapshotVersion);
    }, t.prototype.du = function(t) {
        return Mn.resolve(this.lu);
    }, t.prototype.ea = function(t) {
        return this.highestTargetId = this.fu.next(), Mn.resolve(this.highestTargetId);
    }, t.prototype.Mi = function(t, e, n) {
        return n && (this.lastRemoteSnapshotVersion = n), e > this.lu && (this.lu = e), 
        Mn.resolve();
    }, t.prototype.wu = function(t) {
        this.cu.set(t.target, t);
        var e = t.targetId;
        e > this.highestTargetId && (this.fu = new Zn(e), this.highestTargetId = e), t.sequenceNumber > this.lu && (this.lu = t.sequenceNumber);
    }, t.prototype.na = function(t, e) {
        return this.wu(e), this.targetCount += 1, Mn.resolve();
    }, t.prototype.ki = function(t, e) {
        return this.wu(e), Mn.resolve();
    }, t.prototype.mu = function(t, e) {
        return this.cu.delete(e.target), this._u.Zi(e.targetId), this.targetCount -= 1, 
        Mn.resolve();
    }, t.prototype.Tu = function(t, e, n) {
        var r = this, i = 0, o = [];
        return this.cu.forEach((function(s, u) {
            u.sequenceNumber <= e && null === n.get(u.targetId) && (r.cu.delete(s), o.push(r.Eu(t, u.targetId)), 
            i++);
        })), Mn.Dn(o).next((function() {
            return i;
        }));
    }, t.prototype.Iu = function(t) {
        return Mn.resolve(this.targetCount);
    }, t.prototype.Ui = function(t, e) {
        var n = this.cu.get(e) || null;
        return Mn.resolve(n);
    }, t.prototype.Ni = function(t, e, n) {
        return this._u.Hi(e, n), Mn.resolve();
    }, t.prototype.Fi = function(t, e, n) {
        this._u.Xi(e, n);
        var r = this.persistence.Li, i = [];
        return r && e.forEach((function(e) {
            i.push(r.Ja(t, e));
        })), Mn.Dn(i);
    }, t.prototype.Eu = function(t, e) {
        return this._u.Zi(e), Mn.resolve();
    }, t.prototype.Bi = function(t, e) {
        var n = this._u.er(e);
        return Mn.resolve(n);
    }, t.prototype.nr = function(t, e) {
        return Mn.resolve(this._u.nr(e));
    }, t;
}(), qr = /** @class */ function() {
    /**
     * The constructor accepts a factory for creating a reference delegate. This
     * allows both the delegate and this instance to have strong references to
     * each other without having nullable fields that would then need to be
     * checked or asserted on every access.
     */
    function t(t) {
        var e = this;
        this.Ru = {}, this.Au = new jn(0), this.Pu = !1, this.Pu = !0, this.Li = t(this), 
        this.Ii = new Ur(this), this.kn = new Jn, this.Nn = new Or(this.kn, (function(t) {
            return e.Li.Vu(t);
        }));
    }
    return t.prototype.start = function() {
        return Promise.resolve();
    }, t.prototype.Oo = function() {
        // No durable state to ensure is closed on shutdown.
        return this.Pu = !1, Promise.resolve();
    }, Object.defineProperty(t.prototype, "yu", {
        get: function() {
            return this.Pu;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.pu = function() {
        // No op.
    }, t.prototype.gu = function() {
        // No op.
    }, t.prototype.Pi = function() {
        return this.kn;
    }, t.prototype.mi = function(t) {
        var e = this.Ru[t.rr()];
        return e || (e = new Pr(this.kn, this.Li), this.Ru[t.rr()] = e), e;
    }, t.prototype.Ri = function() {
        return this.Ii;
    }, t.prototype.Ei = function() {
        return this.Nn;
    }, t.prototype.runTransaction = function(t, e, n) {
        var r = this;
        E$1("MemoryPersistence", "Starting transaction:", t);
        var i = new Cr(this.Au.next());
        return this.Li.vu(), n(i).next((function(t) {
            return r.Li.bu(i).next((function() {
                return t;
            }));
        })).Sn().then((function(t) {
            return i.Su(), t;
        }));
    }, t.prototype.Cu = function(t, e) {
        return Mn.Fn(Object.values(this.Ru).map((function(n) {
            return function() {
                return n.nr(t, e);
            };
        })));
    }, t;
}(), Cr = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).$i = t, n;
    }
    /**
     * A base class representing a persistence transaction, encapsulating both the
     * transaction's sequence numbers as well as a list of onCommitted listeners.
     *
     * When you call Persistence.runTransaction(), it will create a transaction and
     * pass it to your callback. You then pass it to any method that operates
     * on persistence.
     */
    return __extends(n, e), n;
}(/** @class */ function() {
    function t() {
        this.Du = [];
    }
    return t.prototype.Fu = function(t) {
        this.Du.push(t);
    }, t.prototype.Su = function() {
        this.Du.forEach((function(t) {
            return t();
        }));
    }, t;
}()), Mr = /** @class */ function() {
    function t(t) {
        this.persistence = t, 
        /** Tracks all documents that are active in Query views. */
        this.Nu = new ur, 
        /** The list of documents that are potentially GCed after each transaction. */
        this.$u = null;
    }
    return t.ku = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "Ou", {
        get: function() {
            if (this.$u) return this.$u;
            throw T$1();
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.zi = function(t, e, n) {
        return this.Nu.zi(n, e), this.Ou.delete(n.toString()), Mn.resolve();
    }, t.prototype.Yi = function(t, e, n) {
        return this.Nu.Yi(n, e), this.Ou.add(n.toString()), Mn.resolve();
    }, t.prototype.Ja = function(t, e) {
        return this.Ou.add(e.toString()), Mn.resolve();
    }, t.prototype.removeTarget = function(t, e) {
        var n = this;
        this.Nu.Zi(e.targetId).forEach((function(t) {
            return n.Ou.add(t.toString());
        }));
        var r = this.persistence.Ri();
        return r.Bi(t, e.targetId).next((function(t) {
            t.forEach((function(t) {
                return n.Ou.add(t.toString());
            }));
        })).next((function() {
            return r.mu(t, e);
        }));
    }, t.prototype.vu = function() {
        this.$u = new Set;
    }, t.prototype.bu = function(t) {
        var e = this, n = this.persistence.Ei().gi();
        // Remove newly orphaned documents.
                return Mn.forEach(this.Ou, (function(r) {
            var i = Q$1.U(r);
            return e.xu(t, i).next((function(t) {
                t || n.Oi(i);
            }));
        })).next((function() {
            return e.$u = null, n.apply(t);
        }));
    }, t.prototype.xi = function(t, e) {
        var n = this;
        return this.xu(t, e).next((function(t) {
            t ? n.Ou.delete(e.toString()) : n.Ou.add(e.toString());
        }));
    }, t.prototype.Vu = function(t) {
        // For eager GC, we don't care about the document size, there are no size thresholds.
        return 0;
    }, t.prototype.xu = function(t, e) {
        var n = this;
        return Mn.Fn([ function() {
            return Mn.resolve(n.Nu.nr(e));
        }, function() {
            return n.persistence.Ri().nr(t, e);
        }, function() {
            return n.persistence.Cu(t, e);
        } ]);
    }, t;
}(), Fr = /** @class */ function() {
    function t(t) {
        this.Lu = t.Lu, this.Mu = t.Mu;
    }
    return t.prototype.qr = function(t) {
        this.qu = t;
    }, t.prototype.kr = function(t) {
        this.Uu = t;
    }, t.prototype.onMessage = function(t) {
        this.Bu = t;
    }, t.prototype.close = function() {
        this.Mu();
    }, t.prototype.send = function(t) {
        this.Lu(t);
    }, t.prototype.Wu = function() {
        this.qu();
    }, t.prototype.Qu = function(t) {
        this.Uu(t);
    }, t.prototype.ju = function(t) {
        this.Bu(t);
    }, t;
}(), xr = {
    BatchGetDocuments: "batchGet",
    Commit: "commit",
    RunQuery: "runQuery"
}, jr = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this, t) || this).forceLongPolling = t.forceLongPolling, n;
    }
    /**
     * Base class for all Rest-based connections to the backend (WebChannel and
     * HTTP).
     */
    return __extends(n, e), n.prototype.Ju = function(t, e, n, r) {
        return new Promise((function(i, o) {
            var s = new esm_5;
            s.listenOnce(esm_3.COMPLETE, (function() {
                try {
                    switch (s.getLastErrorCode()) {
                      case esm_2.NO_ERROR:
                        var e = s.getResponseJson();
                        E$1("Connection", "XHR received:", JSON.stringify(e)), i(e);
                        break;

                      case esm_2.TIMEOUT:
                        E$1("Connection", 'RPC "' + t + '" timed out'), o(new F$1(M$1.DEADLINE_EXCEEDED, "Request time out"));
                        break;

                      case esm_2.HTTP_ERROR:
                        var n = s.getStatus();
                        if (E$1("Connection", 'RPC "' + t + '" failed with status:', n, "response text:", s.getResponseText()), 
                        n > 0) {
                            var r = s.getResponseJson().error;
                            if (r && r.status && r.message) {
                                var u = function(t) {
                                    var e = t.toLowerCase().replace("_", "-");
                                    return Object.values(M$1).indexOf(e) >= 0 ? e : M$1.UNKNOWN;
                                }(r.status);
                                o(new F$1(u, r.message));
                            } else o(new F$1(M$1.UNKNOWN, "Server responded with status " + s.getStatus()));
                        } else 
                        // If we received an HTTP_ERROR but there's no status code,
                        // it's most probably a connection issue
                        o(new F$1(M$1.UNAVAILABLE, "Connection failed."));
                        break;

                      default:
                        T$1();
                    }
                } finally {
                    E$1("Connection", 'RPC "' + t + '" completed.');
                }
            }));
            var u = JSON.stringify(r);
            s.send(e, "POST", u, n, 15);
        }));
    }, n.prototype.Ur = function(t, e) {
        var n = [ this.Ku, "/", "google.firestore.v1.Firestore", "/", t, "/channel" ], r = esm_1(), i = {
            // Required for backend stickiness, routing behavior is based on this
            // parameter.
            httpSessionIdParam: "gsessionid",
            initMessageHeaders: {},
            messageUrlParams: {
                // This param is used to improve routing and project isolation by the
                // backend and must be included in every request.
                database: "projects/" + this.s.projectId + "/databases/" + this.s.database
            },
            sendRawJson: !0,
            supportsCrossDomainXhr: !0,
            internalChannelParams: {
                // Override the default timeout (randomized between 10-20 seconds) since
                // a large write batch on a slow internet connection may take a long
                // time to send to the backend. Rather than have WebChannel impose a
                // tight timeout which could lead to infinite timeouts and retries, we
                // set it very large (5-10 minutes) and rely on the browser's builtin
                // timeouts to kick in if the request isn't working.
                forwardChannelRequestTimeoutMs: 6e5
            },
            forceLongPolling: this.forceLongPolling
        };
        this.Yu(i.initMessageHeaders, e), 
        // Sending the custom headers we just added to request.initMessageHeaders
        // (Authorization, etc.) will trigger the browser to make a CORS preflight
        // request because the XHR will no longer meet the criteria for a "simple"
        // CORS request:
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
        // Therefore to avoid the CORS preflight request (an extra network
        // roundtrip), we use the httpHeadersOverwriteParam option to specify that
        // the headers should instead be encoded into a special "$httpHeaders" query
        // parameter, which is recognized by the webchannel backend. This is
        // formally defined here:
        // https://github.com/google/closure-library/blob/b0e1815b13fb92a46d7c9b3c30de5d6a396a3245/closure/goog/net/rpc/httpcors.js#L32
        // TODO(b/145624756): There is a backend bug where $httpHeaders isn't respected if the request
        // doesn't have an Origin header. So we have to exclude a few browser environments that are
        // known to (sometimes) not include an Origin. See
        // https://github.com/firebase/firebase-js-sdk/issues/1491.
        util.isMobileCordova() || util.isReactNative() || util.isElectron() || util.isIE() || util.isUWP() || util.isBrowserExtension() || (i.httpHeadersOverwriteParam = "$httpHeaders");
        var o = n.join("");
        E$1("Connection", "Creating WebChannel: " + o, i);
        var s = r.createWebChannel(o, i), p = !1, d = !1, y = new Fr({
            Lu: function(t) {
                d ? E$1("Connection", "Not sending because WebChannel is closed:", t) : (p || (E$1("Connection", "Opening WebChannel transport."), 
                s.open(), p = !0), E$1("Connection", "WebChannel sending:", t), s.send(t));
            },
            Mu: function() {
                return s.close();
            }
        }), m = function(t, e) {
            // TODO(dimond): closure typing seems broken because WebChannel does
            // not implement goog.events.Listenable
            s.listen(t, (function(t) {
                try {
                    e(t);
                } catch (t) {
                    setTimeout((function() {
                        throw t;
                    }), 0);
                }
            }));
        };
        // WebChannel supports sending the first message with the handshake - saving
        // a network round trip. However, it will have to call send in the same
        // JS event loop as open. In order to enforce this, we delay actually
        // opening the WebChannel until send is called. Whether we have called
        // open is tracked with this variable.
                // Closure events are guarded and exceptions are swallowed, so catch any
        // exception and rethrow using a setTimeout so they become visible again.
        // Note that eventually this function could go away if we are confident
        // enough the code is exception free.
        return m(esm_4.EventType.OPEN, (function() {
            d || E$1("Connection", "WebChannel transport opened.");
        })), m(esm_4.EventType.CLOSE, (function() {
            d || (d = !0, E$1("Connection", "WebChannel transport closed"), y.Qu());
        })), m(esm_4.EventType.ERROR, (function(t) {
            d || (d = !0, N$1("Connection", "WebChannel transport errored:", t), y.Qu(new F$1(M$1.UNAVAILABLE, "The operation could not be completed")));
        })), m(esm_4.EventType.MESSAGE, (function(t) {
            var e;
            if (!d) {
                var n = t.data[0];
                k$1(!!n);
                // TODO(b/35143891): There is a bug in One Platform that caused errors
                // (and only errors) to be wrapped in an extra array. To be forward
                // compatible with the bug we need to check either condition. The latter
                // can be removed once the fix has been rolled out.
                // Use any because msgData.error is not typed.
                var r = n, i = r.error || (null === (e = r[0]) || void 0 === e ? void 0 : e.error);
                if (i) {
                    E$1("Connection", "WebChannel received error:", i);
                    // error.status will be a string like 'OK' or 'NOT_FOUND'.
                    var o = i.status, u = function(t) {
                        // lookup by string
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        var e = et[t];
                        if (void 0 !== e) return st(e);
                    }(o), a = i.message;
                    void 0 === u && (u = M$1.INTERNAL, a = "Unknown error status: " + o + " with message " + i.message), 
                    // Mark closed so no further events are propagated
                    d = !0, y.Qu(new F$1(u, a)), s.close();
                } else E$1("Connection", "WebChannel received:", n), y.ju(n);
            }
        })), setTimeout((function() {
            // Technically we could/should wait for the WebChannel opened event,
            // but because we want to send the first message with the WebChannel
            // handshake we pretend the channel opened here (asynchronously), and
            // then delay the actual open until the first message is sent.
            y.Wu();
        }), 0), y;
    }, n;
}(/** @class */ function() {
    function t(t) {
        this.Gu = t, this.s = t.s;
        var e = t.ssl ? "https" : "http";
        this.Ku = e + "://" + t.host, this.zu = "projects/" + this.s.projectId + "/databases/" + this.s.database + "/documents";
    }
    return t.prototype.Zr = function(t, e, n, r) {
        var i = this.Hu(t, e);
        E$1("RestConnection", "Sending: ", i, n);
        var o = {};
        return this.Yu(o, r), this.Ju(t, i, o, n).then((function(t) {
            return E$1("RestConnection", "Received: ", t), t;
        }), (function(e) {
            throw N$1("RestConnection", t + " failed with error: ", e, "url: ", i, "request:", n), 
            e;
        }));
    }, t.prototype.to = function(t, e, n, r) {
        // The REST API automatically aggregates all of the streamed results, so we
        // can just use the normal invoke() method.
        return this.Zr(t, e, n, r);
    }, 
    /**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */
    t.prototype.Yu = function(t, e) {
        if (t["X-Goog-Api-Client"] = "gl-js/ fire/7.19.0", 
        // Content-Type: text/plain will avoid preflight requests which might
        // mess with CORS and redirects by proxies. If we add custom headers
        // we will need to change this code to potentially use the $httpOverwrite
        // parameter supported by ESF to avoid	triggering preflight requests.
        t["Content-Type"] = "text/plain", e) for (var n in e.ar) e.ar.hasOwnProperty(n) && (t[n] = e.ar[n]);
    }, t.prototype.Hu = function(t, e) {
        var n = xr[t];
        return this.Ku + "/v1/" + e + ":" + n;
    }, t;
}()), Gr = /** @class */ function() {
    function t() {
        var t = this;
        this.Xu = function() {
            return t.Zu();
        }, this.tc = function() {
            return t.ec();
        }, this.nc = [], this.sc();
    }
    return t.prototype.To = function(t) {
        this.nc.push(t);
    }, t.prototype.Oo = function() {
        window.removeEventListener("online", this.Xu), window.removeEventListener("offline", this.tc);
    }, t.prototype.sc = function() {
        window.addEventListener("online", this.Xu), window.addEventListener("offline", this.tc);
    }, t.prototype.Zu = function() {
        E$1("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
        for (var t = 0, e = this.nc; t < e.length; t++) {
            (0, e[t])(0 /* AVAILABLE */);
        }
    }, t.prototype.ec = function() {
        E$1("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
        for (var t = 0, e = this.nc; t < e.length; t++) {
            (0, e[t])(1 /* UNAVAILABLE */);
        }
    }, 
    // TODO(chenbrian): Consider passing in window either into this component or
    // here for testing via FakeWindow.
    /** Checks that all used attributes of window are available. */
    t.ic = function() {
        return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
    }, t;
}(), Br = /** @class */ function() {
    function t() {}
    return t.prototype.To = function(t) {
        // No-op.
    }, t.prototype.Oo = function() {
        // No-op.
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A memory-backed instance of Persistence. Data is stored only in RAM and
 * not persisted across sessions.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Initializes the WebChannelConnection for the browser. */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zr(t) {
    return new te(t, /* useProto3Json= */ !0);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var $r = "You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.", Qr = /** @class */ function() {
    function t() {}
    return t.prototype.initialize = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.qh = this.rc(t), this.persistence = this.oc(t), [ 4 /*yield*/ , this.persistence.start() ];

                  case 1:
                    return e.sent(), this.hc = this.ac(t), this.co = this.uc(t), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.ac = function(t) {
        return null;
    }, t.prototype.uc = function(t) {
        /** Manages our in-memory or durable persistence. */
        return e = this.persistence, n = new Lr, r = t.cc, new Xn(e, n, r);
        var e, n, r;
    }, t.prototype.oc = function(t) {
        if (t._c.lc) throw new F$1(M$1.FAILED_PRECONDITION, $r);
        return new qr(Mr.ku);
    }, t.prototype.rc = function(t) {
        return new Ir;
    }, t.prototype.terminate = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.hc && this.hc.stop(), [ 4 /*yield*/ , this.qh.Oo() ];

                  case 1:
                    return t.sent(), [ 4 /*yield*/ , this.persistence.Oo() ];

                  case 2:
                    return t.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.clearPersistence = function(t, e) {
        throw new F$1(M$1.FAILED_PRECONDITION, $r);
    }, t;
}(), Wr = /** @class */ function() {
    function t() {}
    return t.prototype.initialize = function(t, r) {
        return __awaiter(this, void 0, void 0, (function() {
            var e = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.co ? [ 3 /*break*/ , 3 ] : (this.co = t.co, this.qh = t.qh, this.lo = this.fc(r), 
                    this.Mh = this.dc(r), this.qo = this.wc(r), this.mc = this.Tc(r), this.qh.eo = function(t) {
                        return e.qo.$h(t, 1 /* SharedClientState */);
                    }, this.Mh.qo = this.qo, [ 4 /*yield*/ , this.Mh.start() ]);

                  case 1:
                    return n.sent(), [ 4 /*yield*/ , this.Mh.nh(this.qo.Zh) ];

                  case 2:
                    n.sent(), n.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Tc = function(t) {
        return new Vr(this.qo);
    }, t.prototype.fc = function(t) {
        var e, n = zr(t.Gu.s), r = (e = t.Gu, new jr(e));
        /** Return the Platform-specific connectivity monitor. */ return function(t, e, n) {
            return new mr(t, e, n);
        }(t.credentials, r, n);
    }, t.prototype.dc = function(t) {
        var e = this;
        return new br(this.co, this.lo, t.Rs, (function(t) {
            return e.qo.$h(t, 0 /* RemoteStore */);
        }), Gr.ic() ? new Gr : new Br);
    }, t.prototype.wc = function(t) {
        return function(t, e, n, 
        // PORTING NOTE: Manages state synchronization in multi-tab environments.
        r, i, o, s) {
            var u = new Dr(t, e, n, r, i, o);
            return s && (u.Xh = !0), u;
        }(this.co, this.Mh, this.lo, this.qh, t.cc, t.Uh, !t._c.lc || !t._c.synchronizeTabs);
    }, t.prototype.terminate = function() {
        return this.Mh.Oo();
    }, t;
}();

/**
 * Provides all components needed for Firestore with in-memory persistence.
 * Uses EagerGC garbage collection.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yr(t) {
    /**
 * Returns true if obj is an object and contains at least one of the specified
 * methods.
 */
    return function(t, e) {
        if ("object" != typeof t || null === t) return !1;
        for (var n = t, r = 0, i = [ "next", "error", "complete" ]; r < i.length; r++) {
            var o = i[r];
            if (o in n && "function" == typeof n[o]) return !0;
        }
        return !1;
    }(t);
}

var Hr = /** @class */ function() {
    function t(t) {
        this.observer = t, 
        /**
             * When set to true, will not raise future events. Necessary to deal with
             * async detachment of listener.
             */
        this.muted = !1;
    }
    return t.prototype.next = function(t) {
        this.observer.next && this.Ec(this.observer.next, t);
    }, t.prototype.error = function(t) {
        this.observer.error ? this.Ec(this.observer.error, t) : console.error("Uncaught Error in snapshot listener:", t);
    }, t.prototype.Ic = function() {
        this.muted = !0;
    }, t.prototype.Ec = function(t, e) {
        var n = this;
        this.muted || setTimeout((function() {
            n.muted || t(e);
        }), 0);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Validates that no arguments were passed in the invocation of functionName.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateNoArgs('myFunction', arguments);
 */ function Jr(t, e) {
    if (0 !== e.length) throw new F$1(M$1.INVALID_ARGUMENT, "Function " + t + "() does not support arguments, but was called with " + di(e.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has the exact number of arguments.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateExactNumberOfArgs('myFunction', arguments, 2);
 */ function Kr(t, e, n) {
    if (e.length !== n) throw new F$1(M$1.INVALID_ARGUMENT, "Function " + t + "() requires " + di(n, "argument") + ", but was called with " + di(e.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has at least the provided number of
 * arguments (but can have many more).
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateAtLeastNumberOfArgs('myFunction', arguments, 2);
 */ function Zr(t, e, n) {
    if (e.length < n) throw new F$1(M$1.INVALID_ARGUMENT, "Function " + t + "() requires at least " + di(n, "argument") + ", but was called with " + di(e.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has number of arguments between
 * the values provided.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateBetweenNumberOfArgs('myFunction', arguments, 2, 3);
 */ function Xr(t, e, n, r) {
    if (e.length < n || e.length > r) throw new F$1(M$1.INVALID_ARGUMENT, "Function " + t + "() requires between " + n + " and " + r + " arguments, but was called with " + di(e.length, "argument") + ".");
}

/**
 * Validates the provided argument is an array and has as least the expected
 * number of elements.
 */
/**
 * Validates the provided positional argument has the native JavaScript type
 * using typeof checks.
 */ function ti(t, e, n, r) {
    si(t, e, pi(n) + " argument", r);
}

/**
 * Validates the provided argument has the native JavaScript type using
 * typeof checks or is undefined.
 */ function ei(t, e, n, r) {
    void 0 !== r && ti(t, e, n, r);
}

/**
 * Validates the provided named option has the native JavaScript type using
 * typeof checks.
 */ function ni(t, e, n, r) {
    si(t, e, n + " option", r);
}

/**
 * Validates the provided named option has the native JavaScript type using
 * typeof checks or is undefined.
 */ function ri(t, e, n, r) {
    void 0 !== r && ni(t, e, n, r);
}

/**
 * Validates that the provided named option equals one of the expected values.
 */
/**
 * Validates that the provided named option equals one of the expected values or
 * is undefined.
 */
function ii(t, e, n, r, i) {
    void 0 !== r && function(t, e, n, r, i) {
        for (var o = [], s = 0, u = i; s < u.length; s++) {
            var a = u[s];
            if (a === r) return;
            o.push(ai(a));
        }
        var c = ai(r);
        throw new F$1(M$1.INVALID_ARGUMENT, "Invalid value " + c + " provided to function " + t + '() for option "' + n + '". Acceptable values: ' + o.join(", "));
    }(t, 0, n, r, i);
}

/**
 * Validates that the provided argument is a valid enum.
 *
 * @param functionName Function making the validation call.
 * @param enums Array containing all possible values for the enum.
 * @param position Position of the argument in `functionName`.
 * @param argument Argument to validate.
 * @return The value as T if the argument can be converted.
 */ function oi(t, e, n, r) {
    if (!e.some((function(t) {
        return t === r;
    }))) throw new F$1(M$1.INVALID_ARGUMENT, "Invalid value " + ai(r) + " provided to function " + t + "() for its " + pi(n) + " argument. Acceptable values: " + e.join(", "));
    return r;
}

/** Helper to validate the type of a provided input. */ function si(t, e, n, r) {
    if (!("object" === e ? ui(r) : "non-empty string" === e ? "string" == typeof r && "" !== r : typeof r === e)) {
        var i = ai(r);
        throw new F$1(M$1.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " to be of type " + e + ", but it was: " + i);
    }
}

/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 */ function ui(t) {
    return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
}

/** Returns a string describing the type / value of the provided input. */ function ai(t) {
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("string" == typeof t) return t.length > 20 && (t = t.substring(0, 20) + "..."), 
    JSON.stringify(t);
    if ("number" == typeof t || "boolean" == typeof t) return "" + t;
    if ("object" == typeof t) {
        if (t instanceof Array) return "an array";
        var e = 
        /** Hacky method to try to get the constructor name for an object. */
        function(t) {
            if (t.constructor) {
                var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
                if (e && e.length > 1) return e[1];
            }
            return null;
        }(t);
        return e ? "a custom " + e + " object" : "an object";
    }
    return "function" == typeof t ? "a function" : T$1();
}

function ci(t, e, n) {
    if (void 0 === n) throw new F$1(M$1.INVALID_ARGUMENT, "Function " + t + "() requires a valid " + pi(e) + " argument, but it was undefined.");
}

/**
 * Validates the provided positional argument is an object, and its keys and
 * values match the expected keys and types provided in optionTypes.
 */ function hi(t, e, n) {
    U$1(e, (function(e, r) {
        if (n.indexOf(e) < 0) throw new F$1(M$1.INVALID_ARGUMENT, "Unknown option '" + e + "' passed to function " + t + "(). Available options: " + n.join(", "));
    }));
}

/**
 * Helper method to throw an error that the provided argument did not pass
 * an instanceof check.
 */ function fi(t, e, n, r) {
    var i = ai(r);
    return new F$1(M$1.INVALID_ARGUMENT, "Function " + t + "() requires its " + pi(n) + " argument to be a " + e + ", but it was: " + i);
}

function li(t, e, n) {
    if (n <= 0) throw new F$1(M$1.INVALID_ARGUMENT, "Function " + t + "() requires its " + pi(e) + " argument to be a positive number, but it was: " + n + ".");
}

/** Converts a number to its english word representation */ function pi(t) {
    switch (t) {
      case 1:
        return "first";

      case 2:
        return "second";

      case 3:
        return "third";

      default:
        return t + "th";
    }
}

/**
 * Formats the given word as plural conditionally given the preceding number.
 */ function di(t, e) {
    return t + " " + e + (1 === t ? "" : "s");
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Helper function to assert Uint8Array is available at runtime. */ function yi() {
    if ("undefined" == typeof Uint8Array) throw new F$1(M$1.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
}

/** Helper function to assert Base64 functions are available at runtime. */ function vi() {
    if ("undefined" == typeof atob) throw new F$1(M$1.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.");
}

/**
 * Immutable class holding a blob (binary data).
 * This class is directly exposed in the public API.
 *
 * Note that while you can't hide the constructor in JavaScript code, we are
 * using the hack above to make sure no-one outside this module can call it.
 */ var gi = /** @class */ function() {
    function t(t) {
        vi(), this.Rc = t;
    }
    return t.fromBase64String = function(e) {
        Kr("Blob.fromBase64String", arguments, 1), ti("Blob.fromBase64String", "string", 1, e), 
        vi();
        try {
            return new t(tt.fromBase64String(e));
        } catch (e) {
            throw new F$1(M$1.INVALID_ARGUMENT, "Failed to construct Blob from Base64 string: " + e);
        }
    }, t.fromUint8Array = function(e) {
        if (Kr("Blob.fromUint8Array", arguments, 1), yi(), !(e instanceof Uint8Array)) throw fi("Blob.fromUint8Array", "Uint8Array", 1, e);
        return new t(tt.fromUint8Array(e));
    }, t.prototype.toBase64 = function() {
        return Kr("Blob.toBase64", arguments, 0), vi(), this.Rc.toBase64();
    }, t.prototype.toUint8Array = function() {
        return Kr("Blob.toUint8Array", arguments, 0), yi(), this.Rc.toUint8Array();
    }, t.prototype.toString = function() {
        return "Blob(base64: " + this.toBase64() + ")";
    }, t.prototype.isEqual = function(t) {
        return this.Rc.isEqual(t.Rc);
    }, t;
}(), mi = function(t) {
    !function(t, e, n, r) {
        if (!(e instanceof Array) || e.length < 1) throw new F$1(M$1.INVALID_ARGUMENT, "Function FieldPath() requires its fieldNames argument to be an array with at least " + di(1, "element") + ".");
    }(0, t);
    for (var e = 0; e < t.length; ++e) if (ti("FieldPath", "string", e, t[e]), 0 === t[e].length) throw new F$1(M$1.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
    this.Ac = new $(t);
}, wi = /** @class */ function(e) {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames A list of field names.
     */
    function n() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return e.call(this, t) || this;
    }
    return __extends(n, e), n.documentId = function() {
        /**
         * Internal Note: The backend doesn't technically support querying by
         * document ID. Instead it queries by the entire document name (full path
         * included), but in the cases we currently support documentId(), the net
         * effect is the same.
         */
        return new n($.M().N());
    }, n.prototype.isEqual = function(t) {
        if (!(t instanceof n)) throw fi("isEqual", "FieldPath", 1, t);
        return this.Ac.isEqual(t.Ac);
    }, n;
}(mi), bi = new RegExp("[~\\*/\\[\\]]"), Ei = function() {
    /** A pointer to the implementing class. */
    this.Pc = this;
}, Ii = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).Vc = t, n;
    }
    return __extends(n, e), n.prototype.yc = function(t) {
        if (2 /* MergeSet */ !== t.pc) throw 1 /* Update */ === t.pc ? t.gc(this.Vc + "() can only appear at the top level of your update data") : t.gc(this.Vc + "() cannot be used with set() unless you pass {merge:true}");
        // No transform to add for a delete, but we need to add it to our
        // fieldMask so it gets deleted.
                return t.qe.push(t.path), null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n;
    }, n;
}(Ei);

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// The objects that are a part of this API are exposed to third-parties as
// compiled javascript so we want to flag our private members with a leading
// underscore to discourage their use.
/**
 * A field class base class that is shared by the lite, full and legacy SDK,
 * which supports shared code that deals with FieldPaths.
 */
/**
 * Creates a child context for parsing SerializableFieldValues.
 *
 * This is different than calling `ParseContext.contextWith` because it keeps
 * the fieldTransforms and fieldMask separate.
 *
 * The created context has its `dataSource` set to `UserDataSource.Argument`.
 * Although these values are used with writes, any elements in these FieldValues
 * are not considered writes since they cannot contain any FieldValue sentinels,
 * etc.
 *
 * @param fieldValue The sentinel FieldValue for which to create a child
 *     context.
 * @param context The parent context.
 * @param arrayElement Whether or not the FieldValue has an array.
 */
function Ni(t, e, n) {
    return new qi({
        pc: 3 /* Argument */ ,
        vc: e.settings.vc,
        methodName: t.Vc,
        bc: n
    }, e.s, e.serializer, e.ignoreUndefinedProperties);
}

var Ai = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).Vc = t, n;
    }
    return __extends(n, e), n.prototype.yc = function(t) {
        return new Oe(t.path, new Te);
    }, n.prototype.isEqual = function(t) {
        return t instanceof n;
    }, n;
}(Ei), Ti = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).Vc = t, r.Sc = n, r;
    }
    return __extends(n, e), n.prototype.yc = function(t) {
        var e = Ni(this, t, 
        /*array=*/ !0), n = this.Sc.map((function(t) {
            return Gi(t, e);
        })), r = new ke(n);
        return new Oe(t.path, r);
    }, n.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, n;
}(Ei), ki = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).Vc = t, r.Sc = n, r;
    }
    return __extends(n, e), n.prototype.yc = function(t) {
        var e = Ni(this, t, 
        /*array=*/ !0), n = this.Sc.map((function(t) {
            return Gi(t, e);
        })), r = new De(n);
        return new Oe(t.path, r);
    }, n.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, n;
}(Ei), Ri = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).Vc = t, r.Cc = n, r;
    }
    return __extends(n, e), n.prototype.yc = function(t) {
        var e = new Ve(t.serializer, re(t.serializer, this.Cc));
        return new Oe(t.path, e);
    }, n.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, n;
}(Ei), Di = /** @class */ function(e) {
    function n() {
        return e.call(this) || this;
    }
    return __extends(n, e), n.delete = function() {
        return Jr("FieldValue.delete", arguments), new _i(new Ii("FieldValue.delete"));
    }, n.serverTimestamp = function() {
        return Jr("FieldValue.serverTimestamp", arguments), new _i(new Ai("FieldValue.serverTimestamp"));
    }, n.arrayUnion = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        // NOTE: We don't actually parse the data until it's used in set() or
        // update() since we'd need the Firestore instance to do this.
                return Zr("FieldValue.arrayUnion", arguments, 1), new _i(new Ti("FieldValue.arrayUnion", t));
    }, n.arrayRemove = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        // NOTE: We don't actually parse the data until it's used in set() or
        // update() since we'd need the Firestore instance to do this.
                return Zr("FieldValue.arrayRemove", arguments, 1), new _i(new ki("FieldValue.arrayRemove", t));
    }, n.increment = function(t) {
        return ti("FieldValue.increment", "number", 1, t), Kr("FieldValue.increment", arguments, 1), 
        new _i(new Ri("FieldValue.increment", t));
    }, n;
}(Ei), _i = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).Pc = t, n.Vc = t.Vc, n;
    }
    return __extends(n, e), n.prototype.yc = function(t) {
        return this.Pc.yc(t);
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.Pc.isEqual(t.Pc);
    }, n;
}(Di), Vi = /** @class */ function() {
    function t(t, e) {
        if (Kr("GeoPoint", arguments, 2), ti("GeoPoint", "number", 1, t), ti("GeoPoint", "number", 2, e), 
        !isFinite(t) || t < -90 || t > 90) throw new F$1(M$1.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
        if (!isFinite(e) || e < -180 || e > 180) throw new F$1(M$1.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
        this.Dc = t, this.Fc = e;
    }
    return Object.defineProperty(t.prototype, "latitude", {
        /**
         * Returns the latitude of this geo point, a number between -90 and 90.
         */
        get: function() {
            return this.Dc;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "longitude", {
        /**
         * Returns the longitude of this geo point, a number between -180 and 180.
         */
        get: function() {
            return this.Fc;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        return this.Dc === t.Dc && this.Fc === t.Fc;
    }, t.prototype.toJSON = function() {
        return {
            latitude: this.Dc,
            longitude: this.Fc
        };
    }, 
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */
    t.prototype.m = function(t) {
        return V$1(this.Dc, t.Dc) || V$1(this.Fc, t.Fc);
    }, t;
}(), Si = /^__.*__$/, Li = function(t, e, n) {
    this.Nc = t, this.$c = e, this.kc = n;
}, Pi = /** @class */ function() {
    function t(t, e, n) {
        this.data = t, this.qe = e, this.fieldTransforms = n;
    }
    return t.prototype.Oc = function(t, e) {
        var n = [];
        return null !== this.qe ? n.push(new $e(t, this.data, this.qe, e)) : n.push(new ze(t, this.data, e)), 
        this.fieldTransforms.length > 0 && n.push(new We(t, this.fieldTransforms)), n;
    }, t;
}(), Oi = /** @class */ function() {
    function t(t, e, n) {
        this.data = t, this.qe = e, this.fieldTransforms = n;
    }
    return t.prototype.Oc = function(t, e) {
        var n = [ new $e(t, this.data, this.qe, e) ];
        return this.fieldTransforms.length > 0 && n.push(new We(t, this.fieldTransforms)), 
        n;
    }, t;
}();

function Ui(t) {
    switch (t) {
      case 0 /* Set */ :
 // fall through
              case 2 /* MergeSet */ :
 // fall through
              case 1 /* Update */ :
        return !0;

      case 3 /* Argument */ :
      case 4 /* ArrayArgument */ :
        return !1;

      default:
        throw T$1();
    }
}

/** A "context" object passed around while parsing user data. */ var qi = /** @class */ function() {
    /**
     * Initializes a ParseContext with the given source and path.
     *
     * @param settings The settings for the parser.
     * @param databaseId The database ID of the Firestore instance.
     * @param serializer The serializer to use to generate the Value proto.
     * @param ignoreUndefinedProperties Whether to ignore undefined properties
     * rather than throw.
     * @param fieldTransforms A mutable list of field transforms encountered while
     *     parsing the data.
     * @param fieldMask A mutable list of field paths encountered while parsing
     *     the data.
     *
     * TODO(b/34871131): We don't support array paths right now, so path can be
     * null to indicate the context represents any location within an array (in
     * which case certain features will not work and errors will be somewhat
     * compromised).
     */
    function t(t, e, n, r, i, o) {
        this.settings = t, this.s = e, this.serializer = n, this.ignoreUndefinedProperties = r, 
        // Minor hack: If fieldTransforms is undefined, we assume this is an
        // external call and we need to validate the entire path.
        void 0 === i && this.xc(), this.fieldTransforms = i || [], this.qe = o || [];
    }
    return Object.defineProperty(t.prototype, "path", {
        get: function() {
            return this.settings.path;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "pc", {
        get: function() {
            return this.settings.pc;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /** Returns a new context with the specified settings overwritten. */ t.prototype.Lc = function(e) {
        return new t(Object.assign(Object.assign({}, this.settings), e), this.s, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.qe);
    }, t.prototype.Mc = function(t) {
        var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.Lc({
            path: n,
            bc: !1
        });
        return r.qc(t), r;
    }, t.prototype.Uc = function(t) {
        var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.Lc({
            path: n,
            bc: !1
        });
        return r.xc(), r;
    }, t.prototype.Bc = function(t) {
        // TODO(b/34871131): We don't support array paths right now; so make path
        // undefined.
        return this.Lc({
            path: void 0,
            bc: !0
        });
    }, t.prototype.gc = function(t) {
        return Yi(t, this.settings.methodName, this.settings.Wc || !1, this.path, this.settings.vc);
    }, 
    /** Returns 'true' if 'fieldPath' was traversed when creating this context. */ t.prototype.contains = function(t) {
        return void 0 !== this.qe.find((function(e) {
            return t.C(e);
        })) || void 0 !== this.fieldTransforms.find((function(e) {
            return t.C(e.field);
        }));
    }, t.prototype.xc = function() {
        // TODO(b/34871131): Remove null check once we have proper paths for fields
        // within arrays.
        if (this.path) for (var t = 0; t < this.path.length; t++) this.qc(this.path.get(t));
    }, t.prototype.qc = function(t) {
        if (0 === t.length) throw this.gc("Document fields must not be empty");
        if (Ui(this.pc) && Si.test(t)) throw this.gc('Document fields cannot begin and end with "__"');
    }, t;
}(), Ci = /** @class */ function() {
    function t(t, e, n) {
        this.s = t, this.ignoreUndefinedProperties = e, this.serializer = n || zr(t)
        /** Creates a new top-level parse context. */;
    }
    return t.prototype.Qc = function(t, e, n, r) {
        return void 0 === r && (r = !1), new qi({
            pc: t,
            methodName: e,
            vc: n,
            path: $.k(),
            bc: !1,
            Wc: r
        }, this.s, this.serializer, this.ignoreUndefinedProperties);
    }, t;
}();

/**
 * Helper for parsing raw user input (provided via the API) into internal model
 * classes.
 */
/** Parse document data from a set() call. */ function Mi(t, e, n, r, i, o) {
    void 0 === o && (o = {});
    var s = t.Qc(o.merge || o.mergeFields ? 2 /* MergeSet */ : 0 /* Set */ , e, n, i);
    $i("Data must be an object, but it was:", s, r);
    var u, a, c = Bi(r, s);
    if (o.merge) u = new Pe(s.qe), a = s.fieldTransforms; else if (o.mergeFields) {
        for (var h = [], f = 0, l = o.mergeFields; f < l.length; f++) {
            var p = l[f], d = void 0;
            if (p instanceof mi) d = p.Ac; else {
                if ("string" != typeof p) throw T$1();
                d = Wi(e, p, n);
            }
            if (!s.contains(d)) throw new F$1(M$1.INVALID_ARGUMENT, "Field '" + d + "' is specified in your field mask but missing from your input data.");
            Hi(h, d) || h.push(d);
        }
        u = new Pe(h), a = s.fieldTransforms.filter((function(t) {
            return u.je(t.field);
        }));
    } else u = null, a = s.fieldTransforms;
    return new Pi(new Ze(c), u, a);
}

/** Parse update data from an update() call. */ function Fi(t, e, n, r) {
    var i = t.Qc(1 /* Update */ , e, n);
    $i("Data must be an object, but it was:", i, r);
    var o = [], s = new Xe;
    U$1(r, (function(t, r) {
        var u = Wi(e, t, n), a = i.Uc(u);
        if (r instanceof Ei && r.Pc instanceof Ii) 
        // Add it to the field mask, but don't add anything to updateData.
        o.push(u); else {
            var c = Gi(r, a);
            null != c && (o.push(u), s.set(u, c));
        }
    }));
    var u = new Pe(o);
    return new Oi(s.ze(), u, i.fieldTransforms);
}

/** Parse update data from a list of field/value arguments. */ function xi(t, e, n, r, i, o) {
    var s = t.Qc(1 /* Update */ , e, n), u = [ Qi(e, r, n) ], a = [ i ];
    if (o.length % 2 != 0) throw new F$1(M$1.INVALID_ARGUMENT, "Function " + e + "() needs to be called with an even number of arguments that alternate between field names and values.");
    for (var c = 0; c < o.length; c += 2) u.push(Qi(e, o[c])), a.push(o[c + 1]);
    // We iterate in reverse order to pick the last value for a field if the
    // user specified the field multiple times.
    for (var h = [], f = new Xe, l = u.length - 1; l >= 0; --l) if (!Hi(h, u[l])) {
        var p = u[l], d = a[l], y = s.Uc(p);
        if (d instanceof Ei && d.Pc instanceof Ii) 
        // Add it to the field mask, but don't add anything to updateData.
        h.push(p); else {
            var v = Gi(d, y);
            null != v && (h.push(p), f.set(p, v));
        }
    }
    var g = new Pe(h);
    return new Oi(f.ze(), g, s.fieldTransforms);
}

/**
 * Parse a "query value" (e.g. value in a where filter or a value in a cursor
 * bound).
 *
 * @param allowArrays Whether the query value is an array that may directly
 * contain additional arrays (e.g. the operand of an `in` query).
 */ function ji(t, e, n, r) {
    return void 0 === r && (r = !1), Gi(n, t.Qc(r ? 4 /* ArrayArgument */ : 3 /* Argument */ , e));
}

/**
 * Parses user data to Protobuf Values.
 *
 * @param input Data to be parsed.
 * @param context A context object representing the current path being parsed,
 * the source of the data being parsed, etc.
 * @return The parsed value, or null if the value was a FieldValue sentinel
 * that should not be included in the resulting parsed data.
 */ function Gi(t, e) {
    if (zi(t)) return $i("Unsupported field value:", e, t), Bi(t, e);
    if (t instanceof Ei) 
    // FieldValues usually parse into transforms (except FieldValue.delete())
    // in which case we do not want to include this field in our parsed data
    // (as doing so will overwrite the field directly prior to the transform
    // trying to transform it). So we don't add this location to
    // context.fieldMask and we return null as our parsing result.
    /**
     * "Parses" the provided FieldValueImpl, adding any necessary transforms to
     * context.fieldTransforms.
     */
    return function(t, e) {
        // Sentinels are only supported with writes, and not within arrays.
        if (!Ui(e.pc)) throw e.gc(t.Vc + "() can only be used with update() and set()");
        if (!e.path) throw e.gc(t.Vc + "() is not currently supported inside arrays");
        var n = t.yc(e);
        n && e.fieldTransforms.push(n);
    }(t, e), null;
    if (
    // If context.path is null we are inside an array and we don't support
    // field mask paths more granular than the top-level array.
    e.path && e.qe.push(e.path), t instanceof Array) {
        // TODO(b/34871131): Include the path containing the array in the error
        // message.
        // In the case of IN queries, the parsed data is an array (representing
        // the set of values to be included for the IN query) that may directly
        // contain additional arrays (each representing an individual field
        // value), so we disable this validation.
        if (e.settings.bc && 4 /* ArrayArgument */ !== e.pc) throw e.gc("Nested arrays are not supported");
        return function(t, e) {
            for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
                var s = Gi(o[i], e.Bc(r));
                null == s && (
                // Just include nulls in the array for fields being replaced with a
                // sentinel.
                s = {
                    nullValue: "NULL_VALUE"
                }), n.push(s), r++;
            }
            return {
                arrayValue: {
                    values: n
                }
            };
        }(t, e);
    }
    return function(t, e) {
        if (null === t) return {
            nullValue: "NULL_VALUE"
        };
        if ("number" == typeof t) return re(e.serializer, t);
        if ("boolean" == typeof t) return {
            booleanValue: t
        };
        if ("string" == typeof t) return {
            stringValue: t
        };
        if (t instanceof Date) {
            var n = x$1.fromDate(t);
            return {
                timestampValue: ie(e.serializer, n)
            };
        }
        if (t instanceof x$1) {
            // Firestore backend truncates precision down to microseconds. To ensure
            // offline mode works the same with regards to truncation, perform the
            // truncation immediately without waiting for the backend to do that.
            var r = new x$1(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
            return {
                timestampValue: ie(e.serializer, r)
            };
        }
        if (t instanceof Vi) return {
            geoPointValue: {
                latitude: t.latitude,
                longitude: t.longitude
            }
        };
        if (t instanceof gi) return {
            bytesValue: oe(e.serializer, t)
        };
        if (t instanceof Li) {
            var i = e.s, o = t.Nc;
            if (!o.isEqual(i)) throw e.gc("Document reference is for database " + o.projectId + "/" + o.database + " but should be for database " + i.projectId + "/" + i.database);
            return {
                referenceValue: ae(t.Nc || e.s, t.$c.path)
            };
        }
        if (void 0 === t && e.ignoreUndefinedProperties) return null;
        throw e.gc("Unsupported field value: " + ai(t));
    }(t, e);
}

function Bi(t, e) {
    var n = {};
    return q$1(t) ? 
    // If we encounter an empty object, we explicitly add it to the update
    // mask to ensure that the server creates a map entry.
    e.path && e.path.length > 0 && e.qe.push(e.path) : U$1(t, (function(t, r) {
        var i = Gi(r, e.Mc(t));
        null != i && (n[t] = i);
    })), {
        mapValue: {
            fields: n
        }
    };
}

function zi(t) {
    return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof x$1 || t instanceof Vi || t instanceof gi || t instanceof Li || t instanceof Ei);
}

function $i(t, e, n) {
    if (!zi(n) || !ui(n)) {
        var r = ai(n);
        throw "an object" === r ? e.gc(t + " a custom object") : e.gc(t + " " + r);
    }
}

/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */ function Qi(t, e, n) {
    if (e instanceof mi) return e.Ac;
    if ("string" == typeof e) return Wi(t, e);
    throw Yi("Field path arguments must be of type string or FieldPath.", t, 
    /* hasConverter= */ !1, 
    /* path= */ void 0, n);
}

/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName The publicly visible method name
 * @param path The dot-separated string form of a field path which will be split
 * on dots.
 * @param targetDoc The document against which the field path will be evaluated.
 */ function Wi(t, e, n) {
    try {
        return function(t) {
            if (t.search(bi) >= 0) throw new F$1(M$1.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not contain '~', '*', '/', '[', or ']'");
            try {
                return new (wi.bind.apply(wi, __spreadArrays([ void 0 ], t.split("."))));
            } catch (e) {
                throw new F$1(M$1.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
            }
        }(e).Ac;
    } catch (e) {
        throw Yi((i = e) instanceof Error ? i.message : i.toString(), t, 
        /* hasConverter= */ !1, 
        /* path= */ void 0, n);
    }
    /**
 * Extracts the message from a caught exception, which should be an Error object
 * though JS doesn't guarantee that.
 */    var i;
    /** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */}

function Yi(t, e, n, r, i) {
    var o = r && !r._(), s = void 0 !== i, u = "Function " + e + "() called with invalid data";
    n && (u += " (via `toFirestore()`)");
    var a = "";
    return (o || s) && (a += " (found", o && (a += " in field " + r), s && (a += " in document " + i), 
    a += ")"), new F$1(M$1.INVALID_ARGUMENT, (u += ". ") + t + a);
}

function Hi(t, e) {
    return t.some((function(t) {
        return t.isEqual(e);
    }));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Internal transaction object responsible for accumulating the mutations to
 * perform and the base versions for any documents read.
 */ var Ji = /** @class */ function() {
    function t(t) {
        this.lo = t, 
        // The version of each document that was read during this transaction.
        this.jc = new Map, this.mutations = [], this.Gc = !1, 
        /**
             * A deferred usage error that occurred previously in this transaction that
             * will cause the transaction to fail once it actually commits.
             */
        this.Kc = null, 
        /**
             * Set of documents that have been written in the transaction.
             *
             * When there's more than one write to the same key in a transaction, any
             * writes after the first are handled differently.
             */
        this.zc = new Set;
    }
    return t.prototype.Hc = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var r, i = this;
            return __generator(this, (function(o) {
                switch (o.label) {
                  case 0:
                    if (this.Yc(), this.mutations.length > 0) throw new F$1(M$1.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
                    return [ 4 /*yield*/ , function(t, r) {
                        return __awaiter(this, void 0, void 0, (function() {
                            var e, i, o, s, u, a;
                            return __generator(this, (function(n) {
                                switch (n.label) {
                                  case 0:
                                    return e = R$1(t), i = le(e.serializer) + "/documents", o = {
                                        documents: r.map((function(t) {
                                            return ce(e.serializer, t);
                                        }))
                                    }, [ 4 /*yield*/ , e.to("BatchGetDocuments", i, o) ];

                                  case 1:
                                    return s = n.sent(), u = new Map, s.forEach((function(t) {
                                        var n = function(t, e) {
                                            return "found" in e ? function(t, e) {
                                                k$1(!!e.found), e.found.name, e.found.updateTime;
                                                var n = he(t, e.found.name), r = ue(e.found.updateTime), i = new Ze({
                                                    mapValue: {
                                                        fields: e.found.fields
                                                    }
                                                });
                                                return new nn(n, r, i, {});
                                            }(t, e) : "missing" in e ? function(t, e) {
                                                k$1(!!e.missing), k$1(!!e.readTime);
                                                var n = he(t, e.missing), r = ue(e.readTime);
                                                return new rn(n, r);
                                            }(t, e) : T$1();
                                        }(e.serializer, t);
                                        u.set(n.key.toString(), n);
                                    })), a = [], [ 2 /*return*/ , (r.forEach((function(t) {
                                        var e = u.get(t.toString());
                                        k$1(!!e), a.push(e);
                                    })), a) ];
                                }
                            }));
                        }));
                    }(this.lo, t) ];

                  case 1:
                    return [ 2 /*return*/ , ((r = o.sent()).forEach((function(t) {
                        t instanceof rn || t instanceof nn ? i.Jc(t) : T$1();
                    })), r) ];
                }
            }));
        }));
    }, t.prototype.set = function(t, e) {
        this.write(e.Oc(t, this.We(t))), this.zc.add(t.toString());
    }, t.prototype.update = function(t, e) {
        try {
            this.write(e.Oc(t, this.Xc(t)));
        } catch (t) {
            this.Kc = t;
        }
        this.zc.add(t.toString());
    }, t.prototype.delete = function(t) {
        this.write([ new Je(t, this.We(t)) ]), this.zc.add(t.toString());
    }, t.prototype.commit = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t, r = this;
            return __generator(this, (function(i) {
                switch (i.label) {
                  case 0:
                    if (this.Yc(), this.Kc) throw this.Kc;
                    return t = this.jc, 
                    // For each mutation, note that the doc was written.
                    this.mutations.forEach((function(e) {
                        t.delete(e.key.toString());
                    })), 
                    // For each document that was read but not written to, we want to perform
                    // a `verify` operation.
                    t.forEach((function(t, e) {
                        var n = Q$1.U(e);
                        r.mutations.push(new Ke(n, r.We(n)));
                    })), [ 4 /*yield*/ , function(t, r) {
                        return __awaiter(this, void 0, void 0, (function() {
                            var e, i, o;
                            return __generator(this, (function(n) {
                                switch (n.label) {
                                  case 0:
                                    return e = R$1(t), i = le(e.serializer) + "/documents", o = {
                                        writes: r.map((function(t) {
                                            return de(e.serializer, t);
                                        }))
                                    }, [ 4 /*yield*/ , e.Zr("Commit", i, o) ];

                                  case 1:
                                    return n.sent(), [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    }(this.lo, this.mutations) ];

                  case 1:
                    // For each mutation, note that the doc was written.
                    return i.sent(), this.Gc = !0, [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Jc = function(t) {
        var e;
        if (t instanceof nn) e = t.version; else {
            if (!(t instanceof rn)) throw T$1();
            // For deleted docs, we must use baseVersion 0 when we overwrite them.
                        e = j.min();
        }
        var n = this.jc.get(t.key.toString());
        if (n) {
            if (!e.isEqual(n)) 
            // This transaction will fail no matter what.
            throw new F$1(M$1.ABORTED, "Document version changed between two reads.");
        } else this.jc.set(t.key.toString(), e);
    }, 
    /**
     * Returns the version of this document when it was read in this transaction,
     * as a precondition, or no precondition if it was not read.
     */
    t.prototype.We = function(t) {
        var e = this.jc.get(t.toString());
        return !this.zc.has(t.toString()) && e ? qe.updateTime(e) : qe.Ge();
    }, 
    /**
     * Returns the precondition for a document if the operation is an update.
     */
    t.prototype.Xc = function(t) {
        var e = this.jc.get(t.toString());
        // The first time a document is written, we want to take into account the
        // read time and existence
                if (!this.zc.has(t.toString()) && e) {
            if (e.isEqual(j.min())) 
            // The document doesn't exist, so fail the transaction.
            // This has to be validated locally because you can't send a
            // precondition that a document does not exist without changing the
            // semantics of the backend write to be an insert. This is the reverse
            // of what we want, since we want to assert that the document doesn't
            // exist but then send the update and have it fail. Since we can't
            // express that to the backend, we have to validate locally.
            // Note: this can change once we can send separate verify writes in the
            // transaction.
            throw new F$1(M$1.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
            // Document exists, base precondition on document update time.
                        return qe.updateTime(e);
        }
        // Document was not read, so we just use the preconditions for a blind
        // update.
                return qe.exists(!0);
    }, t.prototype.write = function(t) {
        this.Yc(), this.mutations = this.mutations.concat(t);
    }, t.prototype.Yc = function() {}, t;
}(), Ki = /** @class */ function() {
    function t(t, e, n, r) {
        this.Rs = t, this.lo = e, this.updateFunction = n, this.Vs = r, this.Zc = 5, this.ks = new Bn(this.Rs, "transaction_retry" /* TransactionRetry */)
        /** Runs the transaction and sets the result on deferred. */;
    }
    return t.prototype.run = function() {
        this.tl();
    }, t.prototype.tl = function() {
        var t = this;
        this.ks.ws((function() {
            return __awaiter(t, void 0, void 0, (function() {
                var t, e, r = this;
                return __generator(this, (function(n) {
                    return t = new Ji(this.lo), (e = this.el(t)) && e.then((function(e) {
                        r.Rs.vs((function() {
                            return t.commit().then((function() {
                                r.Vs.resolve(e);
                            })).catch((function(t) {
                                r.nl(t);
                            }));
                        }));
                    })).catch((function(t) {
                        r.nl(t);
                    })), [ 2 /*return*/ ];
                }));
            }));
        }));
    }, t.prototype.el = function(t) {
        try {
            var e = this.updateFunction(t);
            return !W$1(e) && e.catch && e.then ? e : (this.Vs.reject(Error("Transaction callback must return a Promise")), 
            null);
        } catch (t) {
            // Do not retry errors thrown by user provided updateFunction.
            return this.Vs.reject(t), null;
        }
    }, t.prototype.nl = function(t) {
        var e = this;
        this.Zc > 0 && this.sl(t) ? (this.Zc -= 1, this.Rs.vs((function() {
            return e.tl(), Promise.resolve();
        }))) : this.Vs.reject(t);
    }, t.prototype.sl = function(t) {
        if ("FirebaseError" === t.name) {
            // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
            // non-matching document versions with ABORTED. These errors should be retried.
            var e = t.code;
            return "aborted" === e || "failed-precondition" === e || !ot(e);
        }
        return !1;
    }, t;
}(), Zi = /** @class */ function() {
    function t(t, 
    /**
     * Asynchronous queue responsible for all of our internal processing. When
     * we get incoming work from the user (via public API) or the network
     * (incoming GRPC messages), we should always schedule onto this queue.
     * This ensures all of our work is properly serialized (e.g. we don't
     * start processing a new operation while the previous one is waiting for
     * an async I/O to complete).
     */
    e) {
        this.credentials = t, this.Rs = e, this.clientId = _.t(), 
        // We defer our initialization until we get the current user from
        // setChangeListener(). We block the async queue until we got the initial
        // user and the initialization is completed. This will prevent any scheduled
        // work from happening before initialization is completed.
        // If initializationDone resolved then the FirestoreClient is in a usable
        // state.
        this.il = new Gn
        /**
     * Starts up the FirestoreClient, returning only whether or not enabling
     * persistence succeeded.
     *
     * The intent here is to "do the right thing" as far as users are concerned.
     * Namely, in cases where offline persistence is requested and possible,
     * enable it, but otherwise fall back to persistence disabled. For the most
     * part we expect this to succeed one way or the other so we don't expect our
     * users to actually wait on the firestore.enablePersistence Promise since
     * they generally won't care.
     *
     * Of course some users actually do care about whether or not persistence
     * was successfully enabled, so the Promise returned from this method
     * indicates this outcome.
     *
     * This presents a problem though: even before enablePersistence resolves or
     * rejects, users may have made calls to e.g. firestore.collection() which
     * means that the FirestoreClient in there will be available and will be
     * enqueuing actions on the async queue.
     *
     * Meanwhile any failure of an operation on the async queue causes it to
     * panic and reject any further work, on the premise that unhandled errors
     * are fatal.
     *
     * Consequently the fallback is handled internally here in start, and if the
     * fallback succeeds we signal success to the async queue even though the
     * start() itself signals failure.
     *
     * @param databaseInfo The connection information for the current instance.
     * @param offlineComponentProvider Provider that returns all components
     * required for memory-only or IndexedDB persistence.
     * @param onlineComponentProvider Provider that returns all components
     * required for online support.
     * @param persistenceSettings Settings object to configure offline
     *     persistence.
     * @returns A deferred result indicating the user-visible result of enabling
     *     offline persistence. This method will reject this if IndexedDB fails to
     *     start for any reason. If usePersistence is false this is
     *     unconditionally resolved.
     */;
    }
    return t.prototype.start = function(t, e, n, r) {
        var i = this;
        this.rl(), this.Gu = t;
        // If usePersistence is true, certain classes of errors while starting are
        // recoverable but only by falling back to persistence disabled.
        // If there's an error in the first case but not in recovery we cannot
        // reject the promise blocking the async queue because this will cause the
        // async queue to panic.
        var o = new Gn, s = !1;
        // Return only the result of enabling persistence. Note that this does not
        // need to await the completion of initializationDone because the result of
        // this method should not reflect any other kind of failure to start.
        return this.credentials.lr((function(t) {
            if (!s) return s = !0, E$1("FirestoreClient", "Initializing. user=", t.uid), i.ol(e, n, r, t, o).then(i.il.resolve, i.il.reject);
            i.Rs.Bs((function() {
                return i.Mh.eh(t);
            }));
        })), 
        // Block the async queue until initialization is done
        this.Rs.vs((function() {
            return i.il.promise;
        })), o.promise;
    }, 
    /** Enables the network connection and requeues all pending operations. */ t.prototype.enableNetwork = function() {
        var t = this;
        return this.rl(), this.Rs.enqueue((function() {
            return t.persistence.gu(!0), t.Mh.enableNetwork();
        }));
    }, 
    /**
     * Initializes persistent storage, attempting to use IndexedDB if
     * usePersistence is true or memory-only if false.
     *
     * If IndexedDB fails because it's already open in another tab or because the
     * platform can't possibly support our implementation then this method rejects
     * the persistenceResult and falls back on memory-only persistence.
     *
     * @param offlineComponentProvider Provider that returns all components
     * required for memory-only or IndexedDB persistence.
     * @param onlineComponentProvider Provider that returns all components
     * required for online support.
     * @param persistenceSettings Settings object to configure offline persistence
     * @param user The initial user
     * @param persistenceResult A deferred result indicating the user-visible
     *     result of enabling offline persistence. This method will reject this if
     *     IndexedDB fails to start for any reason. If usePersistence is false
     *     this is unconditionally resolved.
     * @returns a Promise indicating whether or not initialization should
     *     continue, i.e. that one of the persistence implementations actually
     *     succeeded.
     */
    t.prototype.ol = function(t, r, i, o, s) {
        return __awaiter(this, void 0, void 0, (function() {
            var u, a, c = this;
            return __generator(this, (function(h) {
                switch (h.label) {
                  case 0:
                    return h.trys.push([ 0, 3, , 4 ]), u = {
                        Rs: this.Rs,
                        Gu: this.Gu,
                        clientId: this.clientId,
                        credentials: this.credentials,
                        cc: o,
                        Uh: 100,
                        _c: i
                    }, [ 4 /*yield*/ , t.initialize(u) ];

                  case 1:
                    return h.sent(), [ 4 /*yield*/ , r.initialize(t, u) ];

                  case 2:
                    return h.sent(), this.persistence = t.persistence, this.qh = t.qh, this.co = t.co, 
                    this.hc = t.hc, this.lo = r.lo, this.Mh = r.Mh, this.qo = r.qo, this.hl = r.mc, 
                    // When a user calls clearPersistence() in one client, all other clients
                    // need to be terminated to allow the delete to succeed.
                    this.persistence.pu((function() {
                        return __awaiter(c, void 0, void 0, (function() {
                            return __generator(this, (function(t) {
                                switch (t.label) {
                                  case 0:
                                    return [ 4 /*yield*/ , this.terminate() ];

                                  case 1:
                                    return t.sent(), [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })), s.resolve(), [ 3 /*break*/ , 4 ];

                  case 3:
                    // An unknown failure on the first stage shuts everything down.
                    if (a = h.sent(), 
                    // Regardless of whether or not the retry succeeds, from an user
                    // perspective, offline persistence has failed.
                    s.reject(a), !this.al(a)) throw a;
                    return [ 2 /*return*/ , (console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + a), 
                    this.ol(new Qr, new Wr, {
                        lc: !1
                    }, o, s)) ];

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Decides whether the provided error allows us to gracefully disable
     * persistence (as opposed to crashing the client).
     */
    t.prototype.al = function(t) {
        return "FirebaseError" === t.name ? t.code === M$1.FAILED_PRECONDITION || t.code === M$1.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || 
        // When the browser is out of quota we could get either quota exceeded
        // or an aborted error depending on whether the error happened during
        // schema migration.
        22 === t.code || 20 === t.code || 
        // Firefox Private Browsing mode disables IndexedDb and returns
        // INVALID_STATE for any usage.
        11 === t.code;
    }, 
    /**
     * Checks that the client has not been terminated. Ensures that other methods on
     * this class cannot be called after the client is terminated.
     */
    t.prototype.rl = function() {
        if (this.Rs.xs) throw new F$1(M$1.FAILED_PRECONDITION, "The client has already been terminated.");
    }, 
    /** Disables the network connection. Pending operations will not complete. */ t.prototype.disableNetwork = function() {
        var t = this;
        return this.rl(), this.Rs.enqueue((function() {
            return t.persistence.gu(!1), t.Mh.disableNetwork();
        }));
    }, t.prototype.terminate = function() {
        var t = this;
        this.Rs.Us();
        var r = new Gn;
        return this.Rs.Ls((function() {
            return __awaiter(t, void 0, void 0, (function() {
                var t, e;
                return __generator(this, (function(n) {
                    switch (n.label) {
                      case 0:
                        return n.trys.push([ 0, 4, , 5 ]), 
                        // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
                        this.hc && this.hc.stop(), [ 4 /*yield*/ , this.Mh.Oo() ];

                      case 1:
                        return n.sent(), [ 4 /*yield*/ , this.qh.Oo() ];

                      case 2:
                        return n.sent(), [ 4 /*yield*/ , this.persistence.Oo() ];

                      case 3:
                        // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
                        return n.sent(), 
                        // `removeChangeListener` must be called after shutting down the
                        // RemoteStore as it will prevent the RemoteStore from retrieving
                        // auth tokens.
                        this.credentials._r(), r.resolve(), [ 3 /*break*/ , 5 ];

                      case 4:
                        return t = n.sent(), e = Yn(t, "Failed to shutdown persistence"), r.reject(e), [ 3 /*break*/ , 5 ];

                      case 5:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        })), r.promise;
    }, 
    /**
     * Returns a Promise that resolves when all writes that were pending at the time this
     * method was called received server acknowledgement. An acknowledgement can be either acceptance
     * or rejection.
     */
    t.prototype.waitForPendingWrites = function() {
        var t = this;
        this.rl();
        var e = new Gn;
        return this.Rs.vs((function() {
            return t.qo.wa(e);
        })), e.promise;
    }, t.prototype.listen = function(t, e, n) {
        var r = this;
        this.rl();
        var i = new Hr(n), o = new Sr(t, i, e);
        return this.Rs.vs((function() {
            return r.hl.listen(o);
        })), function() {
            i.Ic(), r.Rs.vs((function() {
                return r.hl.Lo(o);
            }));
        };
    }, t.prototype.ul = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(r) {
                switch (r.label) {
                  case 0:
                    return this.rl(), [ 4 /*yield*/ , this.il.promise ];

                  case 1:
                    return [ 2 /*return*/ , (r.sent(), function(t, r, i) {
                        return __awaiter(this, void 0, void 0, (function() {
                            var o, s = this;
                            return __generator(this, (function(u) {
                                switch (u.label) {
                                  case 0:
                                    return o = new Gn, [ 4 /*yield*/ , t.enqueue((function() {
                                        return __awaiter(s, void 0, void 0, (function() {
                                            var t, e, s;
                                            return __generator(this, (function(n) {
                                                switch (n.label) {
                                                  case 0:
                                                    return n.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , function(t, e) {
                                                        var n = R$1(t);
                                                        return n.persistence.runTransaction("read document", "readonly", (function(t) {
                                                            return n.Ai.On(t, e);
                                                        }));
                                                    }(r, i) ];

                                                  case 1:
                                                    return (t = n.sent()) instanceof nn ? o.resolve(t) : t instanceof rn ? o.resolve(null) : o.reject(new F$1(M$1.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")), 
                                                    [ 3 /*break*/ , 3 ];

                                                  case 2:
                                                    return e = n.sent(), s = Yn(e, "Failed to get document '" + i + " from cache"), 
                                                    o.reject(s), [ 3 /*break*/ , 3 ];

                                                  case 3:
                                                    return [ 2 /*return*/ ];
                                                }
                                            }));
                                        }));
                                    })) ];

                                  case 1:
                                    return [ 2 /*return*/ , (u.sent(), o.promise) ];
                                }
                            }));
                        }));
                    }(this.Rs, this.co, t)) ];
                }
            }));
        }));
    }, t.prototype.cl = function(t, r) {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.rl(), [ 4 /*yield*/ , this.il.promise ];

                  case 1:
                    return [ 2 /*return*/ , (e.sent(), function(t, e, n, r) {
                        var i = new Gn, o = Xi(t, e, an(n.path), {
                            includeMetadataChanges: !0,
                            qa: !0
                        }, {
                            next: function(t) {
                                // Remove query first before passing event to user to avoid
                                // user actions affecting the now stale query.
                                o();
                                var e = t.docs.has(n);
                                !e && t.fromCache ? 
                                // TODO(dimond): If we're online and the document doesn't
                                // exist then we resolve with a doc.exists set to false. If
                                // we're offline however, we reject the Promise in this
                                // case. Two options: 1) Cache the negative response from
                                // the server so we can deliver that even when you're
                                // offline 2) Actually reject the Promise in the online case
                                // if the document doesn't exist.
                                i.reject(new F$1(M$1.UNAVAILABLE, "Failed to get document because the client is offline.")) : e && t.fromCache && r && "server" === r.source ? i.reject(new F$1(M$1.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i.resolve(t);
                            },
                            error: function(t) {
                                return i.reject(t);
                            }
                        });
                        return i.promise;
                    }(this.Rs, this.hl, t, r)) ];
                }
            }));
        }));
    }, t.prototype.ll = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(r) {
                switch (r.label) {
                  case 0:
                    return this.rl(), [ 4 /*yield*/ , this.il.promise ];

                  case 1:
                    return [ 2 /*return*/ , (r.sent(), function(t, r, i) {
                        return __awaiter(this, void 0, void 0, (function() {
                            var o, s = this;
                            return __generator(this, (function(u) {
                                switch (u.label) {
                                  case 0:
                                    return o = new Gn, [ 4 /*yield*/ , t.enqueue((function() {
                                        return __awaiter(s, void 0, void 0, (function() {
                                            var t, e, s, u, a, c;
                                            return __generator(this, (function(n) {
                                                switch (n.label) {
                                                  case 0:
                                                    return n.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , or(r, i, 
                                                    /* usePreviousResults= */ !0) ];

                                                  case 1:
                                                    return t = n.sent(), e = new Tr(i, t.Wi), s = e.gh(t.documents), u = e.Ch(s, 
                                                    /* updateLimboDocuments= */ !1), o.resolve(u.snapshot), [ 3 /*break*/ , 3 ];

                                                  case 2:
                                                    return a = n.sent(), c = Yn(a, "Failed to execute query '" + i + " against cache"), 
                                                    o.reject(c), [ 3 /*break*/ , 3 ];

                                                  case 3:
                                                    return [ 2 /*return*/ ];
                                                }
                                            }));
                                        }));
                                    })) ];

                                  case 1:
                                    return [ 2 /*return*/ , (u.sent(), o.promise) ];
                                }
                            }));
                        }));
                    }(this.Rs, this.co, t)) ];
                }
            }));
        }));
    }, t.prototype._l = function(t, r) {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.rl(), [ 4 /*yield*/ , this.il.promise ];

                  case 1:
                    return [ 2 /*return*/ , (e.sent(), function(t, e, n, r) {
                        var i = new Gn, o = Xi(t, e, n, {
                            includeMetadataChanges: !0,
                            qa: !0
                        }, {
                            next: function(t) {
                                // Remove query first before passing event to user to avoid
                                // user actions affecting the now stale query.
                                o(), t.fromCache && r && "server" === r.source ? i.reject(new F$1(M$1.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(t);
                            },
                            error: function(t) {
                                return i.reject(t);
                            }
                        });
                        return i.promise;
                    }(this.Rs, this.hl, t, r)) ];
                }
            }));
        }));
    }, t.prototype.write = function(t) {
        var e = this;
        this.rl();
        var n = new Gn;
        return this.Rs.vs((function() {
            return e.qo.write(t, n);
        })), n.promise;
    }, t.prototype.s = function() {
        return this.Gu.s;
    }, t.prototype.Fa = function(t) {
        var r = this;
        this.rl();
        var i = new Hr(t);
        return this.Rs.vs((function() {
            return __awaiter(r, void 0, void 0, (function() {
                return __generator(this, (function(t) {
                    return [ 2 /*return*/ , this.hl.Fa(i) ];
                }));
            }));
        })), function() {
            i.Ic(), r.Rs.vs((function() {
                return __awaiter(r, void 0, void 0, (function() {
                    return __generator(this, (function(t) {
                        return [ 2 /*return*/ , this.hl.Na(i) ];
                    }));
                }));
            }));
        };
    }, Object.defineProperty(t.prototype, "fl", {
        get: function() {
            // Technically, the asyncQueue is still running, but only accepting operations
            // related to termination or supposed to be run after termination. It is effectively
            // terminated to the eyes of users.
            return this.Rs.xs;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Takes an updateFunction in which a set of reads and writes can be performed
     * atomically. In the updateFunction, the client can read and write values
     * using the supplied transaction object. After the updateFunction, all
     * changes will be committed. If a retryable error occurs (ex: some other
     * client has changed any of the data referenced), then the updateFunction
     * will be called again after a backoff. If the updateFunction still fails
     * after all retries, then the transaction will be rejected.
     *
     * The transaction object passed to the updateFunction contains methods for
     * accessing documents and collections. Unlike other datastore access, data
     * accessed with the transaction will not reflect local changes that have not
     * been committed. For this reason, it is required that all reads are
     * performed before any writes. Transactions must be performed while online.
     */
    t.prototype.transaction = function(t) {
        var e = this;
        this.rl();
        var n = new Gn;
        return this.Rs.vs((function() {
            return new Ki(e.Rs, e.lo, t, n).run(), Promise.resolve();
        })), n.promise;
    }, t;
}();

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * TransactionRunner encapsulates the logic needed to run and retry transactions
 * with backoff.
 */ function Xi(t, e, n, r, i) {
    var o = new Hr(i), s = new Sr(n, o, r);
    return t.vs((function() {
        return e.listen(s);
    })), function() {
        o.Ic(), t.vs((function() {
            return e.Lo(s);
        }));
    };
}

var to = /** @class */ function() {
    function t(t, e, n, r) {
        this.s = t, this.timestampsInSnapshots = e, this.dl = n, this.wl = r;
    }
    return t.prototype.ml = function(t) {
        switch (Ct(t)) {
          case 0 /* NullValue */ :
            return null;

          case 1 /* BooleanValue */ :
            return t.booleanValue;

          case 2 /* NumberValue */ :
            return zt(t.integerValue || t.doubleValue);

          case 3 /* TimestampValue */ :
            return this.Tl(t.timestampValue);

          case 4 /* ServerTimestampValue */ :
            return this.El(t);

          case 5 /* StringValue */ :
            return t.stringValue;

          case 6 /* BlobValue */ :
            return new gi($t(t.bytesValue));

          case 7 /* RefValue */ :
            return this.Il(t.referenceValue);

          case 8 /* GeoPointValue */ :
            return this.Rl(t.geoPointValue);

          case 9 /* ArrayValue */ :
            return this.Al(t.arrayValue);

          case 10 /* ObjectValue */ :
            return this.Pl(t.mapValue);

          default:
            throw T$1();
        }
    }, t.prototype.Pl = function(t) {
        var e = this, n = {};
        return U$1(t.fields || {}, (function(t, r) {
            n[t] = e.ml(r);
        })), n;
    }, t.prototype.Rl = function(t) {
        return new Vi(zt(t.latitude), zt(t.longitude));
    }, t.prototype.Al = function(t) {
        var e = this;
        return (t.values || []).map((function(t) {
            return e.ml(t);
        }));
    }, t.prototype.El = function(t) {
        switch (this.dl) {
          case "previous":
            var e = function t(e) {
                var n = e.mapValue.fields.__previous_value__;
                return Ot(n) ? t(n) : n;
            }(t);
            return null == e ? null : this.ml(e);

          case "estimate":
            return this.Tl(Ut(t));

          default:
            return null;
        }
    }, t.prototype.Tl = function(t) {
        var e = Bt(t), n = new x$1(e.seconds, e.nanos);
        return this.timestampsInSnapshots ? n : n.toDate();
    }, t.prototype.Il = function(t) {
        var e = B.$(t);
        k$1(be(e));
        var n = new P$1(e.get(1), e.get(3)), r = new Q$1(e.p(5));
        return n.isEqual(this.s) || 
        // TODO(b/64130202): Somehow support foreign references.
        I$1("Document " + r + " contains a document reference within a different database (" + n.projectId + "/" + n.database + ") which is not supported. It will be treated as a reference in the current database (" + this.s.projectId + "/" + this.s.database + ") instead."), 
        this.wl(r);
    }, t;
}(), eo = Hn.ni, no = /** @class */ function() {
    function t(t) {
        var e, n, r, i;
        if (void 0 === t.host) {
            if (void 0 !== t.ssl) throw new F$1(M$1.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
            this.host = "firestore.googleapis.com", this.ssl = !0;
        } else ni("settings", "non-empty string", "host", t.host), this.host = t.host, ri("settings", "boolean", "ssl", t.ssl), 
        this.ssl = null === (e = t.ssl) || void 0 === e || e;
        if (hi("settings", t, [ "host", "ssl", "credentials", "timestampsInSnapshots", "cacheSizeBytes", "experimentalForceLongPolling", "ignoreUndefinedProperties" ]), 
        ri("settings", "object", "credentials", t.credentials), this.credentials = t.credentials, 
        ri("settings", "boolean", "timestampsInSnapshots", t.timestampsInSnapshots), ri("settings", "boolean", "ignoreUndefinedProperties", t.ignoreUndefinedProperties), 
        // Nobody should set timestampsInSnapshots anymore, but the error depends on
        // whether they set it to true or false...
        !0 === t.timestampsInSnapshots ? I$1("The setting 'timestampsInSnapshots: true' is no longer required and should be removed.") : !1 === t.timestampsInSnapshots && I$1("Support for 'timestampsInSnapshots: false' will be removed soon. You must update your code to handle Timestamp objects."), 
        this.timestampsInSnapshots = null === (n = t.timestampsInSnapshots) || void 0 === n || n, 
        this.ignoreUndefinedProperties = null !== (r = t.ignoreUndefinedProperties) && void 0 !== r && r, 
        ri("settings", "number", "cacheSizeBytes", t.cacheSizeBytes), void 0 === t.cacheSizeBytes) this.cacheSizeBytes = Hn.ii; else {
            if (t.cacheSizeBytes !== eo && t.cacheSizeBytes < Hn.si) throw new F$1(M$1.INVALID_ARGUMENT, "cacheSizeBytes must be at least " + Hn.si);
            this.cacheSizeBytes = t.cacheSizeBytes;
        }
        ri("settings", "boolean", "experimentalForceLongPolling", t.experimentalForceLongPolling), 
        this.forceLongPolling = null !== (i = t.experimentalForceLongPolling) && void 0 !== i && i;
    }
    return t.prototype.isEqual = function(t) {
        return this.host === t.host && this.ssl === t.ssl && this.timestampsInSnapshots === t.timestampsInSnapshots && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.forceLongPolling === t.forceLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties;
    }, t;
}(), ro = /** @class */ function() {
    // Note: We are using `MemoryComponentProvider` as a default
    // ComponentProvider to ensure backwards compatibility with the format
    // expected by the console build.
    function t(r, i, o, s) {
        var u = this;
        if (void 0 === o && (o = new Qr), void 0 === s && (s = new Wr), this.Vl = o, this.yl = s, 
        this.pl = null, 
        // Public for use in tests.
        // TODO(mikelehen): Use modularized initialization instead.
        this.gl = new Wn, this.INTERNAL = {
            delete: function() {
                return __awaiter(u, void 0, void 0, (function() {
                    return __generator(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            // The client must be initalized to ensure that all subsequent API usage
                            // throws an exception.
                            return this.vl(), [ 4 /*yield*/ , this.bl.terminate() ];

                          case 1:
                            // The client must be initalized to ensure that all subsequent API usage
                            // throws an exception.
                            return t.sent(), [ 2 /*return*/ ];
                        }
                    }));
                }));
            }
        }, "object" == typeof r.options) {
            // This is very likely a Firebase app object
            // TODO(b/34177605): Can we somehow use instanceof?
            var a = r;
            this.pl = a, this.Nc = t.Sl(a), this.Cl = a.name, this.Dl = new lr(i);
        } else {
            var c = r;
            if (!c.projectId) throw new F$1(M$1.INVALID_ARGUMENT, "Must provide projectId");
            this.Nc = new P$1(c.projectId, c.database), 
            // Use a default persistenceKey that lines up with FirebaseApp.
            this.Cl = "[DEFAULT]", this.Dl = new fr;
        }
        this.Fl = new no({});
    }
    return Object.defineProperty(t.prototype, "Nl", {
        get: function() {
            return this.$l || (
            // Lazy initialize UserDataReader once the settings are frozen
            this.$l = new Ci(this.Nc, this.Fl.ignoreUndefinedProperties)), this.$l;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.settings = function(t) {
        Kr("Firestore.settings", arguments, 1), ti("Firestore.settings", "object", 1, t);
        var e = new no(t);
        if (this.bl && !this.Fl.isEqual(e)) throw new F$1(M$1.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.");
        this.Fl = e, void 0 !== e.credentials && (this.Dl = function(t) {
            if (!t) return new fr;
            switch (t.type) {
              case "gapi":
                var e = t.kl;
                // Make sure this really is a Gapi client.
                                return k$1(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), 
                new dr(e, t.Ir || "0");

              case "provider":
                return t.kl;

              default:
                throw new F$1(M$1.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
            }
        }(e.credentials));
    }, t.prototype.enableNetwork = function() {
        return this.vl(), this.bl.enableNetwork();
    }, t.prototype.disableNetwork = function() {
        return this.vl(), this.bl.disableNetwork();
    }, t.prototype.enablePersistence = function(t) {
        var e, n;
        if (this.bl) throw new F$1(M$1.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.");
        var r = !1, i = !1;
        if (t && (void 0 !== t.experimentalTabSynchronization && I$1("The 'experimentalTabSynchronization' setting will be removed. Use 'synchronizeTabs' instead."), 
        r = null !== (n = null !== (e = t.synchronizeTabs) && void 0 !== e ? e : t.experimentalTabSynchronization) && void 0 !== n && n, 
        i = !!t.experimentalForceOwningTab && t.experimentalForceOwningTab, r && i)) throw new F$1(M$1.INVALID_ARGUMENT, "The 'experimentalForceOwningTab' setting cannot be used with 'synchronizeTabs'.");
        return this.Ol(this.Vl, this.yl, {
            lc: !0,
            cacheSizeBytes: this.Fl.cacheSizeBytes,
            synchronizeTabs: r,
            xl: i
        });
    }, t.prototype.clearPersistence = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t, r = this;
            return __generator(this, (function(i) {
                if (void 0 !== this.bl && !this.bl.fl) throw new F$1(M$1.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
                return t = new Gn, [ 2 /*return*/ , (this.gl.Ls((function() {
                    return __awaiter(r, void 0, void 0, (function() {
                        var e;
                        return __generator(this, (function(n) {
                            switch (n.label) {
                              case 0:
                                return n.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , this.Vl.clearPersistence(this.Nc, this.Cl) ];

                              case 1:
                                return n.sent(), t.resolve(), [ 3 /*break*/ , 3 ];

                              case 2:
                                return e = n.sent(), t.reject(e), [ 3 /*break*/ , 3 ];

                              case 3:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }));
                })), t.promise) ];
            }));
        }));
    }, t.prototype.terminate = function() {
        return this.app._removeServiceInstance("firestore"), this.INTERNAL.delete();
    }, Object.defineProperty(t.prototype, "Ll", {
        get: function() {
            return this.vl(), this.bl.fl;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.waitForPendingWrites = function() {
        return this.vl(), this.bl.waitForPendingWrites();
    }, t.prototype.onSnapshotsInSync = function(t) {
        if (this.vl(), Yr(t)) return this.bl.Fa(t);
        ti("Firestore.onSnapshotsInSync", "function", 1, t);
        var e = {
            next: t
        };
        return this.bl.Fa(e);
    }, t.prototype.vl = function() {
        return this.bl || 
        // Kick off starting the client but don't actually wait for it.
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.Ol(new Qr, new Wr, {
            lc: !1
        }), this.bl;
    }, t.prototype.Ml = function() {
        return new L$1(this.Nc, this.Cl, this.Fl.host, this.Fl.ssl, this.Fl.forceLongPolling);
    }, t.prototype.Ol = function(t, e, n) {
        var r = this.Ml();
        return this.bl = new Zi(this.Dl, this.gl), this.bl.start(r, t, e, n);
    }, t.Sl = function(t) {
        if (e = t.options, !Object.prototype.hasOwnProperty.call(e, "projectId")) throw new F$1(M$1.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
        var e, n = t.options.projectId;
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */        if (!n || "string" != typeof n) throw new F$1(M$1.INVALID_ARGUMENT, "projectId must be a string in FirebaseApp.options");
        return new P$1(n);
    }, Object.defineProperty(t.prototype, "app", {
        get: function() {
            if (!this.pl) throw new F$1(M$1.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
            return this.pl;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.collection = function(t) {
        return Kr("Firestore.collection", arguments, 1), ti("Firestore.collection", "non-empty string", 1, t), 
        this.vl(), new wo(B.$(t), this, 
        /* converter= */ null);
    }, t.prototype.doc = function(t) {
        return Kr("Firestore.doc", arguments, 1), ti("Firestore.doc", "non-empty string", 1, t), 
        this.vl(), so.ql(B.$(t), this, 
        /* converter= */ null);
    }, t.prototype.collectionGroup = function(t) {
        if (Kr("Firestore.collectionGroup", arguments, 1), ti("Firestore.collectionGroup", "non-empty string", 1, t), 
        t.indexOf("/") >= 0) throw new F$1(M$1.INVALID_ARGUMENT, "Invalid collection ID '" + t + "' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.");
        return this.vl(), new go(function(t) {
            return new un(B.k(), t);
        }(t), this, 
        /* converter= */ null);
    }, t.prototype.runTransaction = function(t) {
        var e = this;
        return Kr("Firestore.runTransaction", arguments, 1), ti("Firestore.runTransaction", "function", 1, t), 
        this.vl().transaction((function(n) {
            return t(new io(e, n));
        }));
    }, t.prototype.batch = function() {
        return this.vl(), new oo(this);
    }, Object.defineProperty(t, "logLevel", {
        get: function() {
            switch (b()) {
              case LogLevel.DEBUG:
                return "debug";

              case LogLevel.ERROR:
                return "error";

              case LogLevel.SILENT:
                return "silent";

              case LogLevel.WARN:
                return "warn";

              case LogLevel.INFO:
                return "info";

              case LogLevel.VERBOSE:
                return "verbose";

              default:
                // The default log level is error
                return "error";
            }
        },
        enumerable: !1,
        configurable: !0
    }), t.setLogLevel = function(t) {
        var e;
        Kr("Firestore.setLogLevel", arguments, 1), oi("setLogLevel", [ "debug", "error", "silent", "warn", "info", "verbose" ], 1, t), 
        e = t, w$1.setLogLevel(e);
    }, 
    // Note: this is not a property because the minifier can't work correctly with
    // the way TypeScript compiler outputs properties.
    t.prototype.Ul = function() {
        return this.Fl.timestampsInSnapshots;
    }, t;
}(), io = /** @class */ function() {
    function t(t, e) {
        this.Bl = t, this.Wl = e;
    }
    return t.prototype.get = function(t) {
        var e = this;
        Kr("Transaction.get", arguments, 1);
        var n = No("Transaction.get", t, this.Bl);
        return this.Wl.Hc([ n.$c ]).then((function(t) {
            if (!t || 1 !== t.length) return T$1();
            var r = t[0];
            if (r instanceof rn) return new ao(e.Bl, n.$c, null, 
            /* fromCache= */ !1, 
            /* hasPendingWrites= */ !1, n.kc);
            if (r instanceof nn) return new ao(e.Bl, n.$c, r, 
            /* fromCache= */ !1, 
            /* hasPendingWrites= */ !1, n.kc);
            throw T$1();
        }));
    }, t.prototype.set = function(t, e, n) {
        Xr("Transaction.set", arguments, 2, 3);
        var r = No("Transaction.set", t, this.Bl);
        n = bo("Transaction.set", n);
        var i = To(r.kc, e, n), o = Mi(this.Bl.Nl, "Transaction.set", r.$c, i, null !== r.kc, n);
        return this.Wl.set(r.$c, o), this;
    }, t.prototype.update = function(t, e, n) {
        for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
        return "string" == typeof e || e instanceof wi ? (Zr("Transaction.update", arguments, 3), 
        r = No("Transaction.update", t, this.Bl), i = xi(this.Bl.Nl, "Transaction.update", r.$c, e, n, o)) : (Kr("Transaction.update", arguments, 2), 
        r = No("Transaction.update", t, this.Bl), i = Fi(this.Bl.Nl, "Transaction.update", r.$c, e)), 
        this.Wl.update(r.$c, i), this;
    }, t.prototype.delete = function(t) {
        Kr("Transaction.delete", arguments, 1);
        var e = No("Transaction.delete", t, this.Bl);
        return this.Wl.delete(e.$c), this;
    }, t;
}(), oo = /** @class */ function() {
    function t(t) {
        this.Bl = t, this.Ql = [], this.jl = !1;
    }
    return t.prototype.set = function(t, e, n) {
        Xr("WriteBatch.set", arguments, 2, 3), this.Gl();
        var r = No("WriteBatch.set", t, this.Bl);
        n = bo("WriteBatch.set", n);
        var i = To(r.kc, e, n), o = Mi(this.Bl.Nl, "WriteBatch.set", r.$c, i, null !== r.kc, n);
        return this.Ql = this.Ql.concat(o.Oc(r.$c, qe.Ge())), this;
    }, t.prototype.update = function(t, e, n) {
        for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
        return this.Gl(), "string" == typeof e || e instanceof wi ? (Zr("WriteBatch.update", arguments, 3), 
        r = No("WriteBatch.update", t, this.Bl), i = xi(this.Bl.Nl, "WriteBatch.update", r.$c, e, n, o)) : (Kr("WriteBatch.update", arguments, 2), 
        r = No("WriteBatch.update", t, this.Bl), i = Fi(this.Bl.Nl, "WriteBatch.update", r.$c, e)), 
        this.Ql = this.Ql.concat(i.Oc(r.$c, qe.exists(!0))), this;
    }, t.prototype.delete = function(t) {
        Kr("WriteBatch.delete", arguments, 1), this.Gl();
        var e = No("WriteBatch.delete", t, this.Bl);
        return this.Ql = this.Ql.concat(new Je(e.$c, qe.Ge())), this;
    }, t.prototype.commit = function() {
        return this.Gl(), this.jl = !0, this.Ql.length > 0 ? this.Bl.vl().write(this.Ql) : Promise.resolve();
    }, t.prototype.Gl = function() {
        if (this.jl) throw new F$1(M$1.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
    }, t;
}(), so = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this, n.Nc, t, r) || this).$c = t, i.firestore = n, i.kc = r, 
        i.bl = i.firestore.vl(), i;
    }
    return __extends(n, e), n.ql = function(t, e, r) {
        if (t.length % 2 != 0) throw new F$1(M$1.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t.N() + " has " + t.length);
        return new n(new Q$1(t), e, r);
    }, Object.defineProperty(n.prototype, "id", {
        get: function() {
            return this.$c.path.S();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "parent", {
        get: function() {
            return new wo(this.$c.path.g(), this.firestore, this.kc);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "path", {
        get: function() {
            return this.$c.path.N();
        },
        enumerable: !1,
        configurable: !0
    }), n.prototype.collection = function(t) {
        if (Kr("DocumentReference.collection", arguments, 1), ti("DocumentReference.collection", "non-empty string", 1, t), 
        !t) throw new F$1(M$1.INVALID_ARGUMENT, "Must provide a non-empty collection name to collection()");
        var e = B.$(t);
        return new wo(this.$c.path.child(e), this.firestore, 
        /* converter= */ null);
    }, n.prototype.isEqual = function(t) {
        if (!(t instanceof n)) throw fi("isEqual", "DocumentReference", 1, t);
        return this.firestore === t.firestore && this.$c.isEqual(t.$c) && this.kc === t.kc;
    }, n.prototype.set = function(t, e) {
        Xr("DocumentReference.set", arguments, 1, 2), e = bo("DocumentReference.set", e);
        var n = To(this.kc, t, e), r = Mi(this.firestore.Nl, "DocumentReference.set", this.$c, n, null !== this.kc, e);
        return this.bl.write(r.Oc(this.$c, qe.Ge()));
    }, n.prototype.update = function(t, e) {
        for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
        return "string" == typeof t || t instanceof wi ? (Zr("DocumentReference.update", arguments, 2), 
        n = xi(this.firestore.Nl, "DocumentReference.update", this.$c, t, e, r)) : (Kr("DocumentReference.update", arguments, 1), 
        n = Fi(this.firestore.Nl, "DocumentReference.update", this.$c, t)), this.bl.write(n.Oc(this.$c, qe.exists(!0)));
    }, n.prototype.delete = function() {
        return Kr("DocumentReference.delete", arguments, 0), this.bl.write([ new Je(this.$c, qe.Ge()) ]);
    }, n.prototype.onSnapshot = function() {
        for (var t, e, n, r = this, i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
        Xr("DocumentReference.onSnapshot", arguments, 1, 4);
        var s = {
            includeMetadataChanges: !1
        }, u = 0;
        "object" != typeof i[u] || Yr(i[u]) || (hi("DocumentReference.onSnapshot", s = i[u], [ "includeMetadataChanges" ]), 
        ri("DocumentReference.onSnapshot", "boolean", "includeMetadataChanges", s.includeMetadataChanges), 
        u++);
        var a = {
            includeMetadataChanges: s.includeMetadataChanges
        };
        if (Yr(i[u])) {
            var c = i[u];
            i[u] = null === (t = c.next) || void 0 === t ? void 0 : t.bind(c), i[u + 1] = null === (e = c.error) || void 0 === e ? void 0 : e.bind(c), 
            i[u + 2] = null === (n = c.complete) || void 0 === n ? void 0 : n.bind(c);
        } else ti("DocumentReference.onSnapshot", "function", u, i[u]), ei("DocumentReference.onSnapshot", "function", u + 1, i[u + 1]), 
        ei("DocumentReference.onSnapshot", "function", u + 2, i[u + 2]);
        var h = {
            next: function(t) {
                i[u] && i[u](r.Kl(t));
            },
            error: i[u + 1],
            complete: i[u + 2]
        };
        return this.bl.listen(an(this.$c.path), a, h);
    }, n.prototype.get = function(t) {
        var e = this;
        Xr("DocumentReference.get", arguments, 0, 1), Io("DocumentReference.get", t);
        var n = this.firestore.vl();
        return t && "cache" === t.source ? n.ul(this.$c).then((function(t) {
            return new ao(e.firestore, e.$c, t, 
            /*fromCache=*/ !0, t instanceof nn && t.Ke, e.kc);
        })) : n.cl(this.$c, t).then((function(t) {
            return e.Kl(t);
        }));
    }, n.prototype.withConverter = function(t) {
        return new n(this.$c, this.firestore, t);
    }, 
    /**
     * Converts a ViewSnapshot that contains the current document to a
     * DocumentSnapshot.
     */
    n.prototype.Kl = function(t) {
        var e = t.docs.get(this.$c);
        return new ao(this.firestore, this.$c, e, t.fromCache, t.hasPendingWrites, this.kc);
    }, n;
}(Li), uo = /** @class */ function() {
    function t(t, e) {
        this.hasPendingWrites = t, this.fromCache = e;
    }
    return t.prototype.isEqual = function(t) {
        return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
    }, t;
}(), ao = /** @class */ function() {
    function t(t, e, n, r, i, o) {
        this.Bl = t, this.$c = e, this.zl = n, this.Hl = r, this.Yl = i, this.kc = o;
    }
    return t.prototype.data = function(t) {
        var e = this;
        if (Xr("DocumentSnapshot.data", arguments, 0, 1), t = Eo("DocumentSnapshot.data", t), 
        this.zl) {
            // We only want to use the converter and create a new DocumentSnapshot
            // if a converter has been provided.
            if (this.kc) {
                var n = new co(this.Bl, this.$c, this.zl, this.Hl, this.Yl, 
                /* converter= */ null);
                return this.kc.fromFirestore(n, t);
            }
            return new to(this.Bl.Nc, this.Bl.Ul(), t.serverTimestamps || "none", (function(t) {
                return new so(t, e.Bl, /* converter= */ null);
            })).ml(this.zl.tn());
        }
    }, t.prototype.get = function(t, e) {
        var n = this;
        if (Xr("DocumentSnapshot.get", arguments, 1, 2), e = Eo("DocumentSnapshot.get", e), 
        this.zl) {
            var r = this.zl.data().field(Qi("DocumentSnapshot.get", t, this.$c));
            if (null !== r) return new to(this.Bl.Nc, this.Bl.Ul(), e.serverTimestamps || "none", (function(t) {
                return new so(t, n.Bl, n.kc);
            })).ml(r);
        }
    }, Object.defineProperty(t.prototype, "id", {
        get: function() {
            return this.$c.path.S();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ref", {
        get: function() {
            return new so(this.$c, this.Bl, this.kc);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "exists", {
        get: function() {
            return null !== this.zl;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "metadata", {
        get: function() {
            return new uo(this.Yl, this.Hl);
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw fi("isEqual", "DocumentSnapshot", 1, e);
        return this.Bl === e.Bl && this.Hl === e.Hl && this.$c.isEqual(e.$c) && (null === this.zl ? null === e.zl : this.zl.isEqual(e.zl)) && this.kc === e.kc;
    }, t;
}(), co = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return __extends(n, e), n.prototype.data = function(t) {
        return e.prototype.data.call(this, t);
    }, n;
}(ao);

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// settings() defaults:
function ho(t, e, n, r, i, o, s) {
    var u;
    if (i.L()) {
        if ("array-contains" /* ARRAY_CONTAINS */ === o || "array-contains-any" /* ARRAY_CONTAINS_ANY */ === o) throw new F$1(M$1.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + o + "' queries on FieldPath.documentId().");
        if ("in" /* IN */ === o || "not-in" /* NOT_IN */ === o) {
            po(s, o);
            for (var a = [], c = 0, h = s; c < h.length; c++) {
                var f = h[c];
                a.push(lo(r, t, f));
            }
            u = {
                arrayValue: {
                    values: a
                }
            };
        } else u = lo(r, t, s);
    } else "in" /* IN */ !== o && "not-in" /* NOT_IN */ !== o && "array-contains-any" /* ARRAY_CONTAINS_ANY */ !== o || po(s, o), 
    u = ji(n, e, s, 
    /* allowArrays= */ "in" /* IN */ === o || "not-in" /* NOT_IN */ === o);
    var l = bn.create(i, o, u);
    return function(t, e) {
        if (e._n()) {
            var n = t.ln();
            if (null !== n && !n.isEqual(e.field)) throw new F$1(M$1.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + n.toString() + "' and '" + e.field.toString() + "'");
            var r = t.cn();
            null !== r && yo(t, e.field, r);
        }
        var i = t.fn(
        /**
 * Given an operator, returns the set of operators that cannot be used with it.
 *
 * Operators in a query must adhere to the following set of rules:
 * 1. Only one array operator is allowed.
 * 2. Only one disjunctive operator is allowed.
 * 3. NOT_EQUAL cannot be used with another NOT_EQUAL operator.
 * 4. NOT_IN cannot be used with array, disjunctive, or NOT_EQUAL operators.
 *
 * Array operators: ARRAY_CONTAINS, ARRAY_CONTAINS_ANY
 * Disjunctive operators: IN, ARRAY_CONTAINS_ANY, NOT_IN
 */
        function(t) {
            switch (t) {
              case "!=" /* NOT_EQUAL */ :
                return [ "!=" /* NOT_EQUAL */ , "not-in" /* NOT_IN */ ];

              case "array-contains" /* ARRAY_CONTAINS */ :
                return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "not-in" /* NOT_IN */ ];

              case "in" /* IN */ :
                return [ "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ ];

              case "array-contains-any" /* ARRAY_CONTAINS_ANY */ :
                return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ ];

              case "not-in" /* NOT_IN */ :
                return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ , "!=" /* NOT_EQUAL */ ];

              default:
                return [];
            }
        }(e.op));
        if (null !== i) 
        // Special case when it's a duplicate op to give a slightly clearer error message.
        throw i === e.op ? new F$1(M$1.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + e.op.toString() + "' filter.") : new F$1(M$1.INVALID_ARGUMENT, "Invalid query. You cannot use '" + e.op.toString() + "' filters with '" + i.toString() + "' filters.");
    }(t, l), l;
}

function fo(t, e, n) {
    if (null !== t.startAt) throw new F$1(M$1.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
    if (null !== t.endAt) throw new F$1(M$1.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
    var r = new Pn(e, n);
    return function(t, e) {
        if (null === t.cn()) {
            // This is the first order by. It must match any inequality.
            var n = t.ln();
            null !== n && yo(t, n, e.field);
        }
    }(t, r), r
    /**
 * Create a Bound from a query and a document.
 *
 * Note that the Bound will always include the key of the document
 * and so only the provided document will compare equal to the returned
 * position.
 *
 * Will throw if the document does not contain all fields of the order by
 * of the query or if any of the fields in the order by are an uncommitted
 * server timestamp.
 */
    /**
 * Parses the given documentIdValue into a ReferenceValue, throwing
 * appropriate errors if the value is anything other than a DocumentReference
 * or String, or if the string is malformed.
 */;
}

function lo(t, e, n) {
    if ("string" == typeof n) {
        if ("" === n) throw new F$1(M$1.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
        if (!cn(e) && -1 !== n.indexOf("/")) throw new F$1(M$1.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + n + "' contains a '/' character.");
        var r = e.path.child(B.$(n));
        if (!Q$1.j(r)) throw new F$1(M$1.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + r + "' is not because it has an odd number of segments (" + r.length + ").");
        return Qt(t, new Q$1(r));
    }
    if (n instanceof Li) return Qt(t, n.$c);
    throw new F$1(M$1.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + ai(n) + ".");
}

/**
 * Validates that the value passed into a disjunctive filter satisfies all
 * array requirements.
 */ function po(t, e) {
    if (!Array.isArray(t) || 0 === t.length) throw new F$1(M$1.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
    if (t.length > 10) throw new F$1(M$1.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.");
    if ("in" /* IN */ === e || "array-contains-any" /* ARRAY_CONTAINS_ANY */ === e) {
        if (t.indexOf(null) >= 0) throw new F$1(M$1.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'null' in the value array.");
        if (t.filter((function(t) {
            return Number.isNaN(t);
        })).length > 0) throw new F$1(M$1.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'NaN' in the value array.");
    }
}

function yo(t, e, n) {
    if (!n.isEqual(e)) throw new F$1(M$1.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + e.toString() + "' and so you must also use '" + e.toString() + "' as your first orderBy(), but your first orderBy() is on field '" + n.toString() + "' instead.");
}

function vo(t) {
    if (t.un() && 0 === t.en.length) throw new F$1(M$1.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}

var go = /** @class */ function() {
    function t(t, e, n) {
        this.Jl = t, this.firestore = e, this.kc = n;
    }
    return t.prototype.where = function(e, n, r) {
        // TODO(ne-queries): Add 'not-in' and '!=' to validation.
        var i;
        Kr("Query.where", arguments, 3), ci("Query.where", 3, r), i = "not-in" === n || "!=" === n ? n : oi("Query.where", [ "<" /* LESS_THAN */ , "<=" /* LESS_THAN_OR_EQUAL */ , "==" /* EQUAL */ , ">=" /* GREATER_THAN_OR_EQUAL */ , ">" /* GREATER_THAN */ , "array-contains" /* ARRAY_CONTAINS */ , "in" /* IN */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ ], 2, n);
        var o = Qi("Query.where", e), s = ho(this.Jl, "Query.where", this.firestore.Nl, this.firestore.Nc, o, i, r);
        return new t(function(t, e) {
            var n = t.filters.concat([ e ]);
            return new un(t.path, t.collectionGroup, t.en.slice(), n, t.limit, t.nn, t.startAt, t.endAt);
        }(this.Jl, s), this.firestore, this.kc);
    }, t.prototype.orderBy = function(e, n) {
        var r;
        if (Xr("Query.orderBy", arguments, 1, 2), ei("Query.orderBy", "non-empty string", 2, n), 
        void 0 === n || "asc" === n) r = "asc" /* ASCENDING */; else {
            if ("desc" !== n) throw new F$1(M$1.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + n + "', expected 'asc' or 'desc'.");
            r = "desc" /* DESCENDING */;
        }
        var i = Qi("Query.orderBy", e), o = fo(this.Jl, i, r);
        return new t(function(t, e) {
            // TODO(dimond): validate that orderBy does not list the same key twice.
            var n = t.en.concat([ e ]);
            return new un(t.path, t.collectionGroup, n, t.filters.slice(), t.limit, t.nn, t.startAt, t.endAt);
        }(this.Jl, o), this.firestore, this.kc);
    }, t.prototype.limit = function(e) {
        return Kr("Query.limit", arguments, 1), ti("Query.limit", "number", 1, e), li("Query.limit", 1, e), 
        new t(ln(this.Jl, e, "F" /* First */), this.firestore, this.kc);
    }, t.prototype.limitToLast = function(e) {
        return Kr("Query.limitToLast", arguments, 1), ti("Query.limitToLast", "number", 1, e), 
        li("Query.limitToLast", 1, e), new t(ln(this.Jl, e, "L" /* Last */), this.firestore, this.kc);
    }, t.prototype.startAt = function(e) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        Zr("Query.startAt", arguments, 1);
        var i = this.Xl("Query.startAt", e, n, 
        /*before=*/ !0);
        return new t(pn(this.Jl, i), this.firestore, this.kc);
    }, t.prototype.startAfter = function(e) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        Zr("Query.startAfter", arguments, 1);
        var i = this.Xl("Query.startAfter", e, n, 
        /*before=*/ !1);
        return new t(pn(this.Jl, i), this.firestore, this.kc);
    }, t.prototype.endBefore = function(e) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        Zr("Query.endBefore", arguments, 1);
        var i = this.Xl("Query.endBefore", e, n, 
        /*before=*/ !0);
        return new t(dn(this.Jl, i), this.firestore, this.kc);
    }, t.prototype.endAt = function(e) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        Zr("Query.endAt", arguments, 1);
        var i = this.Xl("Query.endAt", e, n, 
        /*before=*/ !1);
        return new t(dn(this.Jl, i), this.firestore, this.kc);
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw fi("isEqual", "Query", 1, e);
        return this.firestore === e.firestore && yn(this.Jl, e.Jl) && this.kc === e.kc;
    }, t.prototype.withConverter = function(e) {
        return new t(this.Jl, this.firestore, e);
    }, 
    /** Helper function to create a bound from a document or fields */ t.prototype.Xl = function(t, e, n, i) {
        if (ci(t, 1, e), e instanceof ao) return Kr(t, __spreadArrays([ e ], n), 1), function(t, e, n, r, i) {
            if (!r) throw new F$1(M$1.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + n + "().");
            // Because people expect to continue/end a query at the exact document
            // provided, we need to use the implicit sort order rather than the explicit
            // sort order, because it's guaranteed to contain the document key. That way
            // the position becomes unambiguous and the query continues/ends exactly at
            // the provided document. Without the key (by using the explicit sort
            // orders), multiple documents could match the position, yielding duplicate
            // results.
            for (var o = [], s = 0, u = hn(t); s < u.length; s++) {
                var a = u[s];
                if (a.field.L()) o.push(Qt(e, r.key)); else {
                    var c = r.field(a.field);
                    if (Ot(c)) throw new F$1(M$1.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + a.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
                    if (null === c) {
                        var h = a.field.N();
                        throw new F$1(M$1.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + h + "' (used as the orderBy) does not exist.");
                    }
                    o.push(c);
                }
            }
            return new _n(o, i);
        }(this.Jl, this.firestore.Nc, t, e.zl, i);
        var o = [ e ].concat(n);
        return function(t, e, n, r, i, o) {
            // Use explicit order by's because it has to match the query the user made
            var s = t.en;
            if (i.length > s.length) throw new F$1(M$1.INVALID_ARGUMENT, "Too many arguments provided to " + r + "(). The number of arguments must be less than or equal to the number of orderBy() clauses");
            for (var u = [], a = 0; a < i.length; a++) {
                var c = i[a];
                if (s[a].field.L()) {
                    if ("string" != typeof c) throw new F$1(M$1.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + r + "(), but got a " + typeof c);
                    if (!cn(t) && -1 !== c.indexOf("/")) throw new F$1(M$1.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + r + "() must be a plain document ID, but '" + c + "' contains a slash.");
                    var h = t.path.child(B.$(c));
                    if (!Q$1.j(h)) throw new F$1(M$1.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + r + "() must result in a valid document path, but '" + h + "' is not because it contains an odd number of segments.");
                    var f = new Q$1(h);
                    u.push(Qt(e, f));
                } else {
                    var l = ji(n, r, c);
                    u.push(l);
                }
            }
            return new _n(u, o);
        }(this.Jl, this.firestore.Nc, this.firestore.Nl, t, o, i);
    }, t.prototype.onSnapshot = function() {
        for (var t, e, n, r = this, i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
        Xr("Query.onSnapshot", arguments, 1, 4);
        var s = {}, u = 0;
        if ("object" != typeof i[u] || Yr(i[u]) || (hi("Query.onSnapshot", s = i[u], [ "includeMetadataChanges" ]), 
        ri("Query.onSnapshot", "boolean", "includeMetadataChanges", s.includeMetadataChanges), 
        u++), Yr(i[u])) {
            var a = i[u];
            i[u] = null === (t = a.next) || void 0 === t ? void 0 : t.bind(a), i[u + 1] = null === (e = a.error) || void 0 === e ? void 0 : e.bind(a), 
            i[u + 2] = null === (n = a.complete) || void 0 === n ? void 0 : n.bind(a);
        } else ti("Query.onSnapshot", "function", u, i[u]), ei("Query.onSnapshot", "function", u + 1, i[u + 1]), 
        ei("Query.onSnapshot", "function", u + 2, i[u + 2]);
        var c = {
            next: function(t) {
                i[u] && i[u](new mo(r.firestore, r.Jl, t, r.kc));
            },
            error: i[u + 1],
            complete: i[u + 2]
        };
        return vo(this.Jl), this.firestore.vl().listen(this.Jl, s, c);
    }, t.prototype.get = function(t) {
        var e = this;
        Xr("Query.get", arguments, 0, 1), Io("Query.get", t), vo(this.Jl);
        var n = this.firestore.vl();
        return (t && "cache" === t.source ? n.ll(this.Jl) : n._l(this.Jl, t)).then((function(t) {
            return new mo(e.firestore, e.Jl, t, e.kc);
        }));
    }, t;
}(), mo = /** @class */ function() {
    function t(t, e, n, r) {
        this.Bl = t, this.Zl = e, this.t_ = n, this.kc = r, this.e_ = null, this.n_ = null, 
        this.metadata = new uo(n.hasPendingWrites, n.fromCache);
    }
    return Object.defineProperty(t.prototype, "docs", {
        get: function() {
            var t = [];
            return this.forEach((function(e) {
                return t.push(e);
            })), t;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "empty", {
        get: function() {
            return this.t_.docs._();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.t_.docs.size;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.forEach = function(t, e) {
        var n = this;
        Xr("QuerySnapshot.forEach", arguments, 1, 2), ti("QuerySnapshot.forEach", "function", 1, t), 
        this.t_.docs.forEach((function(r) {
            t.call(e, n.s_(r, n.metadata.fromCache, n.t_.qt.has(r.key)));
        }));
    }, Object.defineProperty(t.prototype, "query", {
        get: function() {
            return new go(this.Zl, this.Bl, this.kc);
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.docChanges = function(t) {
        t && (hi("QuerySnapshot.docChanges", t, [ "includeMetadataChanges" ]), ri("QuerySnapshot.docChanges", "boolean", "includeMetadataChanges", t.includeMetadataChanges));
        var e = !(!t || !t.includeMetadataChanges);
        if (e && this.t_.Bt) throw new F$1(M$1.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
        return this.e_ && this.n_ === e || (this.e_ = 
        /**
     * Calculates the array of firestore.DocumentChange's for a given ViewSnapshot.
     *
     * Exported for testing.
     *
     * @param snapshot The ViewSnapshot that represents the expected state.
     * @param includeMetadataChanges Whether to include metadata changes.
     * @param converter A factory function that returns a QueryDocumentSnapshot.
     * @return An objecyt that matches the firestore.DocumentChange API.
     */
        function(t, e, n) {
            if (t.Mt._()) {
                // Special case the first snapshot because index calculation is easy and
                // fast
                var r = 0;
                return t.docChanges.map((function(e) {
                    var i = n(e.doc, t.fromCache, t.qt.has(e.doc.key));
                    return e.doc, {
                        type: "added",
                        doc: i,
                        oldIndex: -1,
                        newIndex: r++
                    };
                }));
            }
            // A DocumentSet that is updated incrementally as changes are applied to use
            // to lookup the index of a document.
            var i = t.Mt;
            return t.docChanges.filter((function(t) {
                return e || 3 /* Metadata */ !== t.type;
            })).map((function(e) {
                var r = n(e.doc, t.fromCache, t.qt.has(e.doc.key)), o = -1, s = -1;
                return 0 /* Added */ !== e.type && (o = i.indexOf(e.doc.key), i = i.delete(e.doc.key)), 
                1 /* Removed */ !== e.type && (s = (i = i.add(e.doc)).indexOf(e.doc.key)), {
                    type: Ao(e.type),
                    doc: r,
                    oldIndex: o,
                    newIndex: s
                };
            }));
        }(this.t_, e, this.s_.bind(this)), this.n_ = e), this.e_;
    }, 
    /** Check the equality. The call can be very expensive. */ t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw fi("isEqual", "QuerySnapshot", 1, e);
        return this.Bl === e.Bl && yn(this.Zl, e.Zl) && this.t_.isEqual(e.t_) && this.kc === e.kc;
    }, t.prototype.s_ = function(t, e, n) {
        return new co(this.Bl, t.key, t, e, n, this.kc);
    }, t;
}(), wo = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        if ((i = e.call(this, an(t), n, r) || this).i_ = t, t.length % 2 != 1) throw new F$1(M$1.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + t.N() + " has " + t.length);
        return i;
    }
    return __extends(n, e), Object.defineProperty(n.prototype, "id", {
        get: function() {
            return this.Jl.path.S();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "parent", {
        get: function() {
            var t = this.Jl.path.g();
            return t._() ? null : new so(new Q$1(t), this.firestore, 
            /* converter= */ null);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "path", {
        get: function() {
            return this.Jl.path.N();
        },
        enumerable: !1,
        configurable: !0
    }), n.prototype.doc = function(t) {
        Xr("CollectionReference.doc", arguments, 0, 1), 
        // We allow omission of 'pathString' but explicitly prohibit passing in both
        // 'undefined' and 'null'.
        0 === arguments.length && (t = _.t()), ti("CollectionReference.doc", "non-empty string", 1, t);
        var e = B.$(t);
        return so.ql(this.Jl.path.child(e), this.firestore, this.kc);
    }, n.prototype.add = function(t) {
        Kr("CollectionReference.add", arguments, 1), ti("CollectionReference.add", "object", 1, this.kc ? this.kc.toFirestore(t) : t);
        var e = this.doc();
        return e.set(t).then((function() {
            return e;
        }));
    }, n.prototype.withConverter = function(t) {
        return new n(this.i_, this.firestore, t);
    }, n;
}(go);

function bo(t, e) {
    if (void 0 === e) return {
        merge: !1
    };
    if (hi(t, e, [ "merge", "mergeFields" ]), ri(t, "boolean", "merge", e.merge), function(t, e, n, r, i) {
        void 0 !== r && function(t, e, n, r, i) {
            if (!(r instanceof Array)) throw new F$1(M$1.INVALID_ARGUMENT, "Function " + t + "() requires its " + e + " option to be an array, but it was: " + ai(r));
            for (var o = 0; o < r.length; ++o) if (!i(r[o])) throw new F$1(M$1.INVALID_ARGUMENT, "Function " + t + "() requires all " + e + " elements to be " + n + ", but the value at index " + o + " was: " + ai(r[o]));
        }(t, e, n, r, i);
    }(t, "mergeFields", "a string or a FieldPath", e.mergeFields, (function(t) {
        return "string" == typeof t || t instanceof wi;
    })), void 0 !== e.mergeFields && void 0 !== e.merge) throw new F$1(M$1.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
    return e;
}

function Eo(t, e) {
    return void 0 === e ? {} : (hi(t, e, [ "serverTimestamps" ]), ii(t, 0, "serverTimestamps", e.serverTimestamps, [ "estimate", "previous", "none" ]), 
    e);
}

function Io(t, e) {
    ei(t, "object", 1, e), e && (hi(t, e, [ "source" ]), ii(t, 0, "source", e.source, [ "default", "server", "cache" ]));
}

function No(t, e, n) {
    if (e instanceof Li) {
        if (e.firestore !== n) throw new F$1(M$1.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
        return e;
    }
    throw fi(t, "DocumentReference", 1, e);
}

function Ao(t) {
    switch (t) {
      case 0 /* Added */ :
        return "added";

      case 2 /* Modified */ :
      case 3 /* Metadata */ :
        return "modified";

      case 1 /* Removed */ :
        return "removed";

      default:
        return T$1();
    }
}

/**
 * Converts custom model object of type T into DocumentData by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to DocumentData
 * because we want to provide the user with a more specific error message if
 * their set() or fails due to invalid data originating from a toFirestore()
 * call.
 */ function To(t, e, n) {
    // Cast to `any` in order to satisfy the union type constraint on
    // toFirestore().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e;
}

var ko = {
    Firestore: ro,
    GeoPoint: Vi,
    Timestamp: x$1,
    Blob: gi,
    Transaction: io,
    WriteBatch: oo,
    DocumentReference: so,
    DocumentSnapshot: ao,
    Query: go,
    QueryDocumentSnapshot: co,
    QuerySnapshot: mo,
    CollectionReference: wo,
    FieldPath: wi,
    FieldValue: Di,
    setLogLevel: ro.setLogLevel,
    CACHE_SIZE_UNLIMITED: eo
};

/**
 * Configures Firestore as part of the Firebase SDK by calling registerService.
 *
 * @param firebase The FirebaseNamespace to register Firestore with
 * @param firestoreFactory A factory function that returns a new Firestore
 *    instance.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Registers the memory-only Firestore build with the components framework.
 */ function Ro(t) {
    !function(t, e) {
        t.INTERNAL.registerComponent(new Component("firestore", (function(t) {
            return function(t, e) {
                return new ro(t, e, new Qr, new Wr);
            }(t.getProvider("app").getImmediate(), t.getProvider("auth-internal"));
        }), "PUBLIC" /* PUBLIC */).setServiceProps(Object.assign({}, ko)));
    }(t), t.registerVersion("@firebase/firestore", "1.16.5");
}

Ro(i);
//# sourceMappingURL=index.node.cjs.js.map
