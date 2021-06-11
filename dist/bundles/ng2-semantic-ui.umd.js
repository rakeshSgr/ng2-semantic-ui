(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('extend'), require('@angular/common'), require('@angular/forms'), require('popper.js'), require('date-fns'), require('date-fns/locale/en-US'), require('bowser'), require('is-ua-webview'), require('element-closest')) :
    typeof define === 'function' && define.amd ? define('ng2-semantic-ui', ['exports', '@angular/core', 'extend', '@angular/common', '@angular/forms', 'popper.js', 'date-fns', 'date-fns/locale/en-US', 'bowser', 'is-ua-webview', 'element-closest'], factory) :
    (global = global || self, factory(global['ng2-semantic-ui'] = {}, global.ng.core, global.$extend__default, global.ng.common, global.ng.forms, global.Popper, global.dateFns, global.defaultLocale, global.bowser, global.isUAWebView__default));
}(this, (function (exports, core, $extend__default, common, forms, Popper, dateFns, defaultLocale, bowser, isUAWebView__default) { 'use strict';

    var $extend__default__default = 'default' in $extend__default ? $extend__default['default'] : $extend__default;
    Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;
    var isUAWebView__default__default = 'default' in isUAWebView__default ? isUAWebView__default['default'] : isUAWebView__default;

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

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
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

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
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

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ enGB = {
        datepicker: {
            months: [
                "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
            ],
            monthsShort: [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            ],
            weekdays: [
                "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
            ],
            weekdaysShort: [
                "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
            ],
            weekdaysNarrow: [
                "S", "M", "T", "W", "T", "F", "S"
            ],
            timesOfDay: [
                "a.m.", "p.m."
            ],
            timesOfDayUppercase: [
                "AM", "PM"
            ],
            timesOfDayLowercase: [
                "am", "pm"
            ],
            formats: {
                time: "h:mm A",
                datetime: "D MMMM YYYY h:mm A",
                date: "D MMMM YYYY",
                month: "MMMM YYYY",
                year: "YYYY"
            },
            firstDayOfWeek: 1
        },
        search: {
            placeholder: "Search...",
            noResults: {
                header: "No Results",
                message: "Your search returned no results."
            }
        },
        select: {
            noResultsMessage: "No results",
            single: {
                placeholder: "Select one"
            },
            multi: {
                placeholder: "Select...",
                maxSelectedMessage: "Max #{max} selections",
                selectedMessage: "#{count} selections"
            }
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T
     * @param {?} obj
     * @return {?}
     */
    function deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    /**
     * @template T, U
     * @param {?} target
     * @param {?} source
     * @return {?}
     */
    function deepExtend(target, source) {
        // Rollup...
        var /** @type {?} */ extend = $extend__default__default || $extend__default;
        return extend(true, target, source);
    }
    /**
     * @param {?} language
     * @return {?}
     */
    function lang(language) {
        return language.toLowerCase().replace("-", "");
    }
    /**
     * @record
     */
    function ILocalizationValuesContainer() { }
    function ILocalizationValuesContainer_tsickle_Closure_declarations() {
        /* TODO: handle strange member:
        [name:string]:IPartialLocaleValues;
        */
    }
    var SuiLocalizationService = /** @class */ (function () {
        function SuiLocalizationService() {
            this.onLanguageUpdate = new core.EventEmitter();
            this._fallbackValues = enGB;
            this._values = {};
            this._language = "en-GB";
            this.load("en-GB", enGB);
        }
        Object.defineProperty(SuiLocalizationService.prototype, "language", {
            get: /**
             * @return {?}
             */
            function () {
                return this._language;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} language
         * @return {?}
         */
        SuiLocalizationService.prototype.setLanguage = /**
         * @param {?} language
         * @return {?}
         */
        function (language) {
            if (lang(this._language) !== lang(language)) {
                this._language = language;
                this.onLanguageUpdate.emit();
            }
        };
        /**
         * @param {?=} language
         * @return {?}
         */
        SuiLocalizationService.prototype.get = /**
         * @param {?=} language
         * @return {?}
         */
        function (language) {
            if (language === void 0) { language = this.language; }
            var /** @type {?} */ values = deepClone(this._fallbackValues);
            if (!this._values[lang(language)]) {
                throw new Error("Locale " + language + " is not loaded");
            }
            deepExtend(values, this._values[lang(language)]);
            return deepClone(values);
        };
        /**
         * @template T
         * @param {?} values
         * @param {?} overrides
         * @return {?}
         */
        SuiLocalizationService.prototype.override = /**
         * @template T
         * @param {?} values
         * @param {?} overrides
         * @return {?}
         */
        function (values, overrides) {
            return deepExtend(deepClone(values), overrides);
        };
        /**
         * @param {?} language
         * @param {?} values
         * @return {?}
         */
        SuiLocalizationService.prototype.load = /**
         * @param {?} language
         * @param {?} values
         * @return {?}
         */
        function (language, values) {
            this._values[lang(language)] = deepClone(values);
            this.onLanguageUpdate.emit();
        };
        /**
         * @param {?} language
         * @param {?} values
         * @return {?}
         */
        SuiLocalizationService.prototype.patch = /**
         * @param {?} language
         * @param {?} values
         * @return {?}
         */
        function (language, values) {
            deepExtend(this._values[lang(language)], values);
        };
        /**
         * @param {?} value
         * @param {?} variables
         * @return {?}
         */
        SuiLocalizationService.prototype.interpolate = /**
         * @param {?} value
         * @param {?} variables
         * @return {?}
         */
        function (value, variables) {
            return variables.reduce(function (s, _a) {
                var _b = __read(_a, 2), k = _b[0], v = _b[1];
                return s.replace(new RegExp("#{" + k + "}", "g"), v);
            }, value);
        };
        SuiLocalizationService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        SuiLocalizationService.ctorParameters = function () { return []; };
        return SuiLocalizationService;
    }());
    function SuiLocalizationService_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiLocalizationService.prototype._language;
        /** @type {?} */
        SuiLocalizationService.prototype._fallbackValues;
        /** @type {?} */
        SuiLocalizationService.prototype._values;
        /** @type {?} */
        SuiLocalizationService.prototype.onLanguageUpdate;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiLocalizationModule = /** @class */ (function () {
        function SuiLocalizationModule() {
        }
        SuiLocalizationModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        providers: [SuiLocalizationService]
                    },] }
        ];
        return SuiLocalizationModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @enum {number} */
    var TransitionDirection = {
        In: 0,
        Out: 1,
        Either: 2,
        Static: 3,
    };
    TransitionDirection[TransitionDirection.In] = "In";
    TransitionDirection[TransitionDirection.Out] = "Out";
    TransitionDirection[TransitionDirection.Either] = "Either";
    TransitionDirection[TransitionDirection.Static] = "Static";
    var Transition = /** @class */ (function () {
        function Transition(name, duration, direction, onComplete) {
            if (duration === void 0) { duration = 250; }
            if (direction === void 0) { direction = TransitionDirection.Either; }
            if (onComplete === void 0) { onComplete = function () { }; }
            this.type = name;
            // We set a minimum duration of 1ms, to give the appearance of an immediate transition
            // whilst allowing positioning calculations to happen without a visible flicker.
            this.duration = Math.max(duration, 1);
            this.direction = direction;
            this.classes = this.type.split(" ");
            this.onComplete = onComplete;
        }
        Object.defineProperty(Transition.prototype, "directionClass", {
            get: /**
             * @return {?}
             */
            function () {
                switch (this.direction) {
                    case TransitionDirection.In: return "in";
                    case TransitionDirection.Out: return "out";
                }
                return "";
            },
            enumerable: true,
            configurable: true
        });
        return Transition;
    }());
    function Transition_tsickle_Closure_declarations() {
        /** @type {?} */
        Transition.prototype.type;
        /** @type {?} */
        Transition.prototype.duration;
        /** @type {?} */
        Transition.prototype.direction;
        /** @type {?} */
        Transition.prototype.classes;
        /** @type {?} */
        Transition.prototype.onComplete;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TransitionController = /** @class */ (function () {
        function TransitionController(isInitiallyVisible, display) {
            if (isInitiallyVisible === void 0) { isInitiallyVisible = true; }
            if (display === void 0) { display = "block"; }
            // isInitiallyVisible sets whether the element starts out visible.
            this._isVisible = isInitiallyVisible;
            this._isHidden = !this._isVisible;
            this._display = display;
            this._queue = [];
            this._isAnimating = false;
        }
        Object.defineProperty(TransitionController.prototype, "_isReady", {
            get: /**
             * @return {?}
             */
            function () {
                return this._renderer != undefined && this._element != undefined && this._changeDetector != undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TransitionController.prototype, "isAnimating", {
            get: /**
             * @return {?}
             */
            function () {
                return this._isAnimating;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TransitionController.prototype, "isVisible", {
            get: /**
             * @return {?}
             */
            function () {
                return this._isVisible;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TransitionController.prototype, "isHidden", {
            get: /**
             * @return {?}
             */
            function () {
                return this._isHidden;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TransitionController.prototype, "_queueFirst", {
            get: /**
             * @return {?}
             */
            function () {
                return this._queue[0];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TransitionController.prototype, "_queueLast", {
            get: /**
             * @return {?}
             */
            function () {
                return this._queue[this._queue.length - 1];
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} renderer
         * @return {?}
         */
        TransitionController.prototype.registerRenderer = /**
         * @param {?} renderer
         * @return {?}
         */
        function (renderer) {
            this._renderer = renderer;
            this.performTransition();
        };
        /**
         * @param {?} element
         * @return {?}
         */
        TransitionController.prototype.registerElement = /**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            this._element = element;
            this.performTransition();
        };
        /**
         * @param {?} changeDetector
         * @return {?}
         */
        TransitionController.prototype.registerChangeDetector = /**
         * @param {?} changeDetector
         * @return {?}
         */
        function (changeDetector) {
            this._changeDetector = changeDetector;
            this.performTransition();
        };
        /**
         * @param {?} transition
         * @return {?}
         */
        TransitionController.prototype.animate = /**
         * @param {?} transition
         * @return {?}
         */
        function (transition) {
            // Test if transition is one of the list that doesn't change the visible state.
            // Should these eventually become classes?
            var /** @type {?} */ isDirectionless = ["jiggle", "flash", "shake", "pulse", "tada", "bounce"].indexOf(transition.type) !== -1;
            if (isDirectionless) {
                transition.direction = TransitionDirection.Static;
            }
            else if (transition.direction == undefined || transition.direction === TransitionDirection.Either) {
                // Set the direction to the opposite of the current visible state automatically if not set, or set to either direction.
                transition.direction = this._isVisible ? TransitionDirection.Out : TransitionDirection.In;
                if (this._queueLast) {
                    // If there is an transition in the queue already, set the direction to the opposite of the direction of that transition.
                    if (this._queueLast.direction === TransitionDirection.In) {
                        transition.direction = TransitionDirection.Out;
                    }
                    else if (this._queueLast.direction === TransitionDirection.Out) {
                        transition.direction = TransitionDirection.In;
                    }
                }
            }
            // Store the transition in the queue before attempting to perform it.
            this._queue.push(transition);
            this.performTransition();
        };
        /**
         * @return {?}
         */
        TransitionController.prototype.performTransition = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this._isReady || this._isAnimating || !this._queueFirst) {
                // Don't transition until we are ready, or if we are animating, or if there aren't any transitions in the queue.
                return;
            }
            this._isAnimating = true;
            var /** @type {?} */ transition = this._queueFirst;
            // Set the Semantic UI classes for transitioning.
            transition.classes.forEach(function (c) { return _this._renderer.addClass(_this._element, c); });
            this._renderer.addClass(this._element, "animating");
            this._renderer.addClass(this._element, transition.directionClass);
            // Set the Semantic UI styles for transitioning.
            this._renderer.setStyle(this._element, "animationDuration", transition.duration + "ms");
            this._renderer.setStyle(this._element, "display", this._display);
            if (transition.direction === TransitionDirection.In) {
                // Unset hidden if we are transitioning in.
                this._isHidden = false;
            }
            // Wait the length of the animation before calling the complete callback.
            this._animationTimeout = window.setTimeout(function () { return _this.finishTransition(transition); }, transition.duration);
        };
        /**
         * @param {?} transition
         * @return {?}
         */
        TransitionController.prototype.finishTransition = /**
         * @param {?} transition
         * @return {?}
         */
        function (transition) {
            var _this = this;
            // Unset the Semantic UI classes & styles for transitioning.
            transition.classes.forEach(function (c) { return _this._renderer.removeClass(_this._element, c); });
            this._renderer.removeClass(this._element, "animating");
            this._renderer.removeClass(this._element, transition.directionClass);
            this._renderer.removeStyle(this._element, "animationDuration");
            this._renderer.removeStyle(this._element, "display");
            if (transition.direction === TransitionDirection.In) {
                // If we have just animated in, we are now visible.
                this._isVisible = true;
            }
            else if (transition.direction === TransitionDirection.Out) {
                // If we have transitioned out, we should be invisible and hidden.
                this._isVisible = false;
                this._isHidden = true;
            }
            if (transition.onComplete) {
                // Call the user-defined transition callback.
                transition.onComplete();
            }
            // Delete the transition from the queue.
            this._queue.shift();
            this._isAnimating = false;
            this._changeDetector.markForCheck();
            // Immediately attempt to perform another transition.
            this.performTransition();
        };
        /**
         * @param {?=} transition
         * @return {?}
         */
        TransitionController.prototype.stop = /**
         * @param {?=} transition
         * @return {?}
         */
        function (transition) {
            if (transition === void 0) { transition = this._queueFirst; }
            if (!transition || !this._isAnimating) {
                return;
            }
            clearTimeout(this._animationTimeout);
            this.finishTransition(transition);
        };
        /**
         * @return {?}
         */
        TransitionController.prototype.stopAll = /**
         * @return {?}
         */
        function () {
            this.clearQueue();
            this.stop();
        };
        /**
         * @return {?}
         */
        TransitionController.prototype.clearQueue = /**
         * @return {?}
         */
        function () {
            if (this.isAnimating) {
                this._queue = [this._queueFirst];
                return;
            }
            this._queue = [];
        };
        return TransitionController;
    }());
    function TransitionController_tsickle_Closure_declarations() {
        /** @type {?} */
        TransitionController.prototype._renderer;
        /** @type {?} */
        TransitionController.prototype._element;
        /** @type {?} */
        TransitionController.prototype._changeDetector;
        /** @type {?} */
        TransitionController.prototype._display;
        /** @type {?} */
        TransitionController.prototype._queue;
        /** @type {?} */
        TransitionController.prototype._isAnimating;
        /** @type {?} */
        TransitionController.prototype._isVisible;
        /** @type {?} */
        TransitionController.prototype._isHidden;
        /** @type {?} */
        TransitionController.prototype._animationTimeout;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiTransition = /** @class */ (function () {
        function SuiTransition(_renderer, _element, _changeDetector) {
            this._renderer = _renderer;
            this._element = _element;
            this._changeDetector = _changeDetector;
            this.transitionClass = true;
        }
        Object.defineProperty(SuiTransition.prototype, "suiTransition", {
            set: /**
             * @param {?} tC
             * @return {?}
             */
            function (tC) {
                // Set the transition controller (e.g. '<div [suiTransition]="transitionController"></div>').
                this.setTransitionController(tC);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiTransition.prototype, "isVisible", {
            get: /**
             * @return {?}
             */
            function () {
                if (this._controller) {
                    return this._controller.isVisible;
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiTransition.prototype, "isHidden", {
            get: /**
             * @return {?}
             */
            function () {
                if (this._controller) {
                    return this._controller.isHidden;
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} transitionController
         * @return {?}
         */
        SuiTransition.prototype.setTransitionController = /**
         * @param {?} transitionController
         * @return {?}
         */
        function (transitionController) {
            this._controller = transitionController;
            this._controller.registerRenderer(this._renderer);
            this._controller.registerElement(this._element.nativeElement);
            this._controller.registerChangeDetector(this._changeDetector);
        };
        SuiTransition.decorators = [
            { type: core.Directive, args: [{
                        selector: "[suiTransition]",
                        exportAs: "transition"
                    },] }
        ];
        /** @nocollapse */
        SuiTransition.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef }
        ]; };
        SuiTransition.propDecorators = {
            suiTransition: [{ type: core.Input }],
            transitionClass: [{ type: core.HostBinding, args: ["class.transition",] }],
            isVisible: [{ type: core.HostBinding, args: ["class.visible",] }],
            isHidden: [{ type: core.HostBinding, args: ["class.hidden",] }]
        };
        return SuiTransition;
    }());
    function SuiTransition_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiTransition.prototype._controller;
        /** @type {?} */
        SuiTransition.prototype.transitionClass;
        /** @type {?} */
        SuiTransition.prototype._renderer;
        /** @type {?} */
        SuiTransition.prototype._element;
        /** @type {?} */
        SuiTransition.prototype._changeDetector;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiTransitionModule = /** @class */ (function () {
        function SuiTransitionModule() {
        }
        SuiTransitionModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [
                            SuiTransition
                        ],
                        exports: [
                            SuiTransition
                        ],
                        providers: []
                    },] }
        ];
        return SuiTransitionModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @record
     */
    function IMessage() { }
    function IMessage_tsickle_Closure_declarations() {
        /** @type {?} */
        IMessage.prototype.dismiss;
    }
    var SuiMessage = /** @class */ (function () {
        function SuiMessage() {
            this.isDismissable = true;
            this.onDismiss = new core.EventEmitter();
            this.isDismissed = false;
            this.transitionController = new TransitionController();
            this.transition = "fade";
            this.transitionDuration = 300;
            this.class = "";
        }
        /**
         * @return {?}
         */
        SuiMessage.prototype.dismiss = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.transitionController.animate(new Transition(this.transition, this.transitionDuration, TransitionDirection.Out, function () {
                _this.isDismissed = true;
                _this.onDismiss.emit(_this);
            }));
        };
        SuiMessage.decorators = [
            { type: core.Component, args: [{
                        selector: "sui-message",
                        template: "\n<div class=\"ui message {{ class }}\" *ngIf=\"!isDismissed\" [suiTransition]=\"transitionController\">\n    <i class=\"close icon\" *ngIf=\"isDismissable\" (click)=\"dismiss()\"></i>\n    <ng-content></ng-content>\n</div>\n",
                        styles: ["\n/* Fix for CSS Bug */\n.ui.icon.visible.message {\n    display: flex !important;\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        SuiMessage.ctorParameters = function () { return []; };
        SuiMessage.propDecorators = {
            isDismissable: [{ type: core.Input }],
            onDismiss: [{ type: core.Output, args: ["dismiss",] }],
            transition: [{ type: core.Input }],
            transitionDuration: [{ type: core.Input }],
            class: [{ type: core.Input, args: ["class",] }]
        };
        return SuiMessage;
    }());
    function SuiMessage_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiMessage.prototype.isDismissable;
        /** @type {?} */
        SuiMessage.prototype.onDismiss;
        /** @type {?} */
        SuiMessage.prototype.isDismissed;
        /** @type {?} */
        SuiMessage.prototype.transitionController;
        /** @type {?} */
        SuiMessage.prototype.transition;
        /** @type {?} */
        SuiMessage.prototype.transitionDuration;
        /** @type {?} */
        SuiMessage.prototype.class;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiMessageModule = /** @class */ (function () {
        function SuiMessageModule() {
        }
        SuiMessageModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            SuiTransitionModule
                        ],
                        declarations: [
                            SuiMessage
                        ],
                        exports: [
                            SuiMessage
                        ]
                    },] }
        ];
        return SuiMessageModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiPagination = /** @class */ (function () {
        function SuiPagination() {
            this.hasClasses = true;
            this.pageChange = new core.EventEmitter();
            this.pageSize = 10;
            this._page = 1;
            this._pages = [];
            this.pageCount = 1;
            this.hasNavigationLinks = true;
            this.hasBoundaryLinks = false;
            this.canRotate = false;
            this.hasEllipses = true;
        }
        Object.defineProperty(SuiPagination.prototype, "maxSize", {
            get: /**
             * @return {?}
             */
            function () {
                return this._maxSize;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._maxSize = (value != undefined) ? Math.max(value, 1) : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiPagination.prototype, "collectionSize", {
            get: /**
             * @return {?}
             */
            function () {
                return this._collectionSize;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._collectionSize = Math.max(value, 0);
                this.pageCount = Math.max(1, Math.ceil(this._collectionSize / this.pageSize));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiPagination.prototype, "hasNavigationLinks", {
            get: /**
             * @return {?}
             */
            function () {
                var /** @type {?} */ maxSize = this._maxSize || this.pageCount;
                return this._hasNavigationLinks || maxSize < this.pageCount;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._hasNavigationLinks = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiPagination.prototype, "page", {
            get: /**
             * @return {?}
             */
            function () {
                return this._page;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.setPage(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiPagination.prototype, "pages", {
            get: /**
             * @return {?}
             */
            function () {
                return this._pages;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SuiPagination.prototype.hasPrevious = /**
         * @return {?}
         */
        function () {
            return this.page > 1;
        };
        /**
         * @return {?}
         */
        SuiPagination.prototype.hasNext = /**
         * @return {?}
         */
        function () {
            return this.page < this.pageCount;
        };
        /**
         * @param {?} newPage
         * @return {?}
         */
        SuiPagination.prototype.setPage = /**
         * @param {?} newPage
         * @return {?}
         */
        function (newPage) {
            var /** @type {?} */ value = (Number.isInteger(newPage)) ? Math.min(Math.max(newPage, 1), this.pageCount) : 1;
            if (value !== this._page) {
                this._page = value;
                this.pageChange.emit(this._page);
            }
        };
        /**
         * @return {?}
         */
        SuiPagination.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            this.updatePages();
        };
        /**
         * @return {?}
         */
        SuiPagination.prototype.updatePages = /**
         * @return {?}
         */
        function () {
            this.pageCount = Math.max(1, Math.ceil(this._collectionSize / this.pageSize));
            var _a = __read(this.applyPagination(), 2), start = _a[0], end = _a[1];
            this._pages = Array(end - start)
                .fill(start + 1)
                .map(function (s, i) { return s + i; });
        };
        /**
         * @return {?}
         */
        SuiPagination.prototype.applyPagination = /**
         * @return {?}
         */
        function () {
            var /** @type {?} */ maxSize = (this.maxSize != undefined) ? Math.min(this.maxSize, this.pageCount) : this.pageCount;
            var /** @type {?} */ page = Math.ceil(this.page / maxSize) - 1;
            var /** @type {?} */ start = 0;
            var /** @type {?} */ end = this.pageCount;
            if (this.canRotate) {
                var /** @type {?} */ leftOffset = Math.floor(maxSize / 2);
                var /** @type {?} */ rightOffset = maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
                if (this.page <= leftOffset) {
                    end = maxSize;
                }
                else if (this.pageCount - this.page < leftOffset) {
                    start = this.pageCount - maxSize;
                }
                else {
                    start = this.page - leftOffset - 1;
                    end = this.page + rightOffset;
                }
            }
            else {
                start = page * maxSize;
                end = start + maxSize;
            }
            return [start, Math.min(end, this.pageCount)];
        };
        SuiPagination.decorators = [
            { type: core.Component, args: [{
                        selector: "sui-pagination",
                        template: "\n<a *ngIf=\"hasBoundaryLinks\" class=\"item\"  (click)=\"setPage(1)\" [class.disabled]=\"page===1\">\n    <span><i class=\"angle double left icon\"></i></span>\n</a>\n<a *ngIf=\"hasNavigationLinks\" class=\"item\" (click)=\"setPage(page-1)\" [class.disabled]=\"!hasPrevious()\">\n    <span><i class=\"angle left icon\"></i></span>\n</a>\n<ng-container *ngIf=\"hasEllipses\">\n    <a class=\"item\" (click)=\"setPage(1)\" *ngIf=\"pages[0] !== 1\">\n        <span>1</span>\n    </a>\n    <a class=\"disabled item\" *ngIf=\"pages[0] > 2\">...</a>\n</ng-container>\n<a *ngFor=\"let p of pages\" class=\"item\" [class.active]=\"p===page\" (click)=\"setPage(p)\">\n    {{ p }}\n</a>\n<ng-container *ngIf=\"hasEllipses\">\n    <a class=\"disabled item\" *ngIf=\"pages[pages.length - 1] < pageCount - 1\">...</a>\n    <a class=\"item\" (click)=\"setPage(pageCount)\" *ngIf=\"pages[pages.length - 1] !== pageCount\">\n        <span>{{ pageCount }}</span>\n    </a>\n</ng-container>\n<a *ngIf=\"hasNavigationLinks\" class=\"item\" (click)=\"setPage(page+1)\" [class.disabled]=\"!hasNext()\">\n    <span><i class=\"angle right icon\"></i></span>\n</a>\n<a *ngIf=\"hasBoundaryLinks\" class=\"item\"  (click)=\"setPage(pageCount)\" [class.disabled]=\"page===pageCount\">\n    <span><i class=\"angle double right icon\"></i></span>\n</a>\n",
                        styles: ["\n:host .item {\n    transition: none;\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        SuiPagination.ctorParameters = function () { return []; };
        SuiPagination.propDecorators = {
            hasClasses: [{ type: core.HostBinding, args: ["class.ui",] }, { type: core.HostBinding, args: ["class.pagination",] }, { type: core.HostBinding, args: ["class.menu",] }],
            pageChange: [{ type: core.Output }],
            maxSize: [{ type: core.Input }],
            pageSize: [{ type: core.Input }],
            collectionSize: [{ type: core.Input }],
            hasNavigationLinks: [{ type: core.Input }],
            hasBoundaryLinks: [{ type: core.Input }],
            canRotate: [{ type: core.Input }],
            hasEllipses: [{ type: core.Input }],
            page: [{ type: core.Input }]
        };
        return SuiPagination;
    }());
    function SuiPagination_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiPagination.prototype.hasClasses;
        /** @type {?} */
        SuiPagination.prototype.pageCount;
        /** @type {?} */
        SuiPagination.prototype.pageChange;
        /** @type {?} */
        SuiPagination.prototype._maxSize;
        /** @type {?} */
        SuiPagination.prototype._collectionSize;
        /** @type {?} */
        SuiPagination.prototype._page;
        /** @type {?} */
        SuiPagination.prototype._pages;
        /** @type {?} */
        SuiPagination.prototype._hasNavigationLinks;
        /** @type {?} */
        SuiPagination.prototype.pageSize;
        /** @type {?} */
        SuiPagination.prototype.hasBoundaryLinks;
        /** @type {?} */
        SuiPagination.prototype.canRotate;
        /** @type {?} */
        SuiPagination.prototype.hasEllipses;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiPaginationModule = /** @class */ (function () {
        function SuiPaginationModule() {
        }
        SuiPaginationModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        exports: [SuiPagination],
                        declarations: [SuiPagination],
                        providers: []
                    },] }
        ];
        return SuiPaginationModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiAccordionPanel = /** @class */ (function () {
        function SuiAccordionPanel(_changeDetector) {
            this._changeDetector = _changeDetector;
            this.transitionController = new TransitionController(false);
            this._isOpen = false;
            this.isOpenChange = new core.EventEmitter(false);
        }
        Object.defineProperty(SuiAccordionPanel.prototype, "service", {
            set: /**
             * @param {?} service
             * @return {?}
             */
            function (service) {
                this._service = service;
                this._changeDetector.detectChanges();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiAccordionPanel.prototype, "isOpen", {
            get: /**
             * @return {?}
             */
            function () {
                return this._isOpen;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                // Convert to boolean (fixes false != undefined)
                var /** @type {?} */ isOpen = !!value;
                if (isOpen !== this.isOpen) {
                    // Only update if the value has changed.
                    this._isOpen = isOpen;
                    if (isOpen && this._service) {
                        // If we are opening this panel, we must close the other ones.
                        this._service.closeOtherPanels(this);
                    }
                    this.isOpenChange.emit(this.isOpen);
                    // Cancel all current animations, and fade the contents. The direction is automatic.
                    this.transitionController.stopAll();
                    this.transitionController.animate(new Transition(this.transition, this.transitionDuration));
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiAccordionPanel.prototype, "transition", {
            get: /**
             * @return {?}
             */
            function () {
                if (this._service) {
                    return this._service.transition;
                }
                return "fade";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiAccordionPanel.prototype, "transitionDuration", {
            get: /**
             * @return {?}
             */
            function () {
                if (this._service) {
                    // Return the service defined transition duration.
                    return this._service.transitionDuration;
                }
                // Revert to instantaneous if the service is not yet loaded.
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SuiAccordionPanel.prototype.toggle = /**
         * @return {?}
         */
        function () {
            if (!this.isDisabled) {
                this.isOpen = !this.isOpen;
            }
        };
        SuiAccordionPanel.decorators = [
            { type: core.Component, args: [{
                        selector: "sui-accordion-panel",
                        exportAs: "suiAccordionPanel",
                        template: "\n<!-- Title -->\n<div class=\"title\" [class.active]=\"isOpen\" (click)=\"toggle()\" >\n    <ng-content select=\"[title]\"></ng-content>\n</div>\n<!-- Content -->\n<div [suiCollapse]=\"!isOpen\" [collapseDuration]=\"transitionDuration\">\n    <div class=\"content\" [class.active]=\"isOpen\" [suiTransition]=\"transitionController\">\n        <ng-content select=\"[content]\"></ng-content>\n    </div>\n</div>\n",
                        styles: ["\n/* Manual style as Semantic UI relies on > selector */\n.content {\n    padding: .5em 0 1em;\n}\n\n/* Another > selector fix */\n:host:first-child .title {\n    border-top: none;\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        SuiAccordionPanel.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef }
        ]; };
        SuiAccordionPanel.propDecorators = {
            isDisabled: [{ type: core.Input }],
            isOpen: [{ type: core.Input }],
            isOpenChange: [{ type: core.Output }]
        };
        return SuiAccordionPanel;
    }());
    function SuiAccordionPanel_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiAccordionPanel.prototype._service;
        /** @type {?} */
        SuiAccordionPanel.prototype.transitionController;
        /** @type {?} */
        SuiAccordionPanel.prototype.isDisabled;
        /** @type {?} */
        SuiAccordionPanel.prototype._isOpen;
        /** @type {?} */
        SuiAccordionPanel.prototype.isOpenChange;
        /** @type {?} */
        SuiAccordionPanel.prototype._changeDetector;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiAccordionService = /** @class */ (function () {
        function SuiAccordionService() {
            this.closeOthers = true;
            this.transition = "fade";
            this.transitionDuration = 350;
            this.panels = [];
        }
        /**
         * @param {?} panel
         * @return {?}
         */
        SuiAccordionService.prototype.addPanel = /**
         * @param {?} panel
         * @return {?}
         */
        function (panel) {
            panel.service = this;
            this.panels.push(panel);
        };
        /**
         * @param {?} panel
         * @return {?}
         */
        SuiAccordionService.prototype.closeOtherPanels = /**
         * @param {?} panel
         * @return {?}
         */
        function (panel) {
            if (!this.closeOthers) {
                return;
            }
            this.panels.forEach(function (p) {
                if (p !== panel) {
                    p.isOpen = false;
                }
            });
        };
        return SuiAccordionService;
    }());
    function SuiAccordionService_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiAccordionService.prototype.closeOthers;
        /** @type {?} */
        SuiAccordionService.prototype.transition;
        /** @type {?} */
        SuiAccordionService.prototype.transitionDuration;
        /** @type {?} */
        SuiAccordionService.prototype.panels;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiAccordion = /** @class */ (function () {
        function SuiAccordion() {
            // Accordion service is unique to each set of panels.
            this._service = new SuiAccordionService();
            this.hasClasses = true;
        }
        Object.defineProperty(SuiAccordion.prototype, "closeOthers", {
            get: /**
             * @return {?}
             */
            function () {
                return this._service.closeOthers;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._service.closeOthers = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiAccordion.prototype, "transition", {
            set: /**
             * @param {?} transition
             * @return {?}
             */
            function (transition) {
                this._service.transition = transition;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiAccordion.prototype, "transitionDuration", {
            set: /**
             * @param {?} duration
             * @return {?}
             */
            function (duration) {
                this._service.transitionDuration = duration;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SuiAccordion.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.updatePanels();
            // Reconnect panels after they have updated.
            this._panels.changes.subscribe(function () { return _this.updatePanels(); });
        };
        /**
         * @return {?}
         */
        SuiAccordion.prototype.updatePanels = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this._panels.forEach(function (p) { return _this._service.addPanel(p); });
        };
        SuiAccordion.decorators = [
            { type: core.Component, args: [{
                        selector: "sui-accordion",
                        template: "\n<ng-content></ng-content>\n",
                        styles: ["\n/* Fix for general styling issues */\n:host {\n    display: block;\n}\n\n/* Fix for styled border issue */\n:host.styled sui-accordion-panel:first-child .title {\n    border-top: none\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        SuiAccordion.ctorParameters = function () { return []; };
        SuiAccordion.propDecorators = {
            hasClasses: [{ type: core.HostBinding, args: ["class.ui",] }, { type: core.HostBinding, args: ["class.accordion",] }],
            closeOthers: [{ type: core.Input }],
            transition: [{ type: core.Input }],
            transitionDuration: [{ type: core.Input }],
            _panels: [{ type: core.ContentChildren, args: [SuiAccordionPanel,] }]
        };
        return SuiAccordion;
    }());
    function SuiAccordion_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiAccordion.prototype.hasClasses;
        /** @type {?} */
        SuiAccordion.prototype._service;
        /** @type {?} */
        SuiAccordion.prototype._panels;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiCollapse = /** @class */ (function () {
        function SuiCollapse(_element, _renderer) {
            this._element = _element;
            this._renderer = _renderer;
            this._pristine = true;
            // Collapse animation duration is 350ms by default.
            this.collapseDuration = 350;
            this._isExpanded = false;
            this._isCollapsing = false;
        }
        Object.defineProperty(SuiCollapse.prototype, "isExpanded", {
            // Set when the collapse is open, and not animating.
            get: /**
             * @return {?}
             */
            function () {
                return this._isExpanded;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiCollapse.prototype, "isCollapsed", {
            // Set when the collapse is closed, and not animating.
            get: /**
             * @return {?}
             */
            function () {
                return !this.isExpanded && !this.isCollapsing;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiCollapse.prototype, "isCollapsing", {
            // Set when the collapse is animating.
            get: /**
             * @return {?}
             */
            function () {
                return this._isCollapsing;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiCollapse.prototype, "suiCollapse", {
            get: /**
             * @return {?}
             */
            function () {
                return this._isExpanded;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (value) {
                    this.hide();
                }
                else {
                    this.show();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiCollapse.prototype, "_animationDuration", {
            get: /**
             * @return {?}
             */
            function () {
                return this._pristine ? 0 : this.collapseDuration;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SuiCollapse.prototype.hide = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this._isCollapsing = true;
            this._isExpanded = false;
            // Forcibly hide the overflow so that content is not visible past the boundaries of its container.
            this._renderer.setStyle(this._element.nativeElement, "overflow", "hidden");
            // Animate the host element from its scroll height to 0.
            this.animate(this._element.nativeElement.scrollHeight, 0, false, function () {
                _this._isCollapsing = false;
            });
        };
        /**
         * @return {?}
         */
        SuiCollapse.prototype.show = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this._isCollapsing = true;
            // Animate the host element from its offset height to its scroll height.
            this.animate(this._element.nativeElement.offsetHeight, this._element.nativeElement.scrollHeight, true, function () {
                // Remove the overflow override to enable user styling once again.
                _this._renderer.removeStyle(_this._element.nativeElement, "overflow");
                _this._isCollapsing = false;
                _this._isExpanded = true;
            });
        };
        /**
         * @param {?} startHeight
         * @param {?} endHeight
         * @param {?=} removeOnComplete
         * @param {?=} callback
         * @return {?}
         */
        SuiCollapse.prototype.animate = /**
         * @param {?} startHeight
         * @param {?} endHeight
         * @param {?=} removeOnComplete
         * @param {?=} callback
         * @return {?}
         */
        function (startHeight, endHeight, removeOnComplete, callback) {
            if (removeOnComplete === void 0) { removeOnComplete = false; }
            if (callback === void 0) { callback = function () { }; }
            var /** @type {?} */ heightFrames = [
                {
                    offset: 0,
                    height: startHeight + "px"
                },
                {
                    offset: 1,
                    height: endHeight + "px"
                }
            ];
            if (removeOnComplete) {
                heightFrames.push({
                    offset: 1,
                    height: "auto"
                });
            }
            // Animate the collapse using the web animations API.
            // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
            this._element.nativeElement.animate(heightFrames, {
                delay: 0,
                // Disable animation on 1st collapse / expansion.
                duration: this._animationDuration,
                iterations: 1,
                easing: "ease",
                fill: "both"
            });
            if (this._pristine) {
                // Remove pristine flag when first hit.
                this._pristine = false;
            }
            setTimeout(function () { return callback(); }, this.collapseDuration);
        };
        SuiCollapse.decorators = [
            { type: core.Directive, args: [{
                        selector: "[suiCollapse]"
                    },] }
        ];
        /** @nocollapse */
        SuiCollapse.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        SuiCollapse.propDecorators = {
            isExpanded: [{ type: core.HostBinding, args: ["class.expanded",] }],
            isCollapsed: [{ type: core.HostBinding, args: ["class.collapsed",] }],
            isCollapsing: [{ type: core.HostBinding, args: ["class.collapsing",] }],
            suiCollapse: [{ type: core.Input }],
            collapseDuration: [{ type: core.Input }]
        };
        return SuiCollapse;
    }());
    function SuiCollapse_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiCollapse.prototype._isExpanded;
        /** @type {?} */
        SuiCollapse.prototype._isCollapsing;
        /** @type {?} */
        SuiCollapse.prototype._pristine;
        /** @type {?} */
        SuiCollapse.prototype.collapseDuration;
        /** @type {?} */
        SuiCollapse.prototype._element;
        /** @type {?} */
        SuiCollapse.prototype._renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiCollapseModule = /** @class */ (function () {
        function SuiCollapseModule() {
        }
        SuiCollapseModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            SuiCollapse
                        ],
                        exports: [
                            SuiCollapse
                        ]
                    },] }
        ];
        return SuiCollapseModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiAccordionModule = /** @class */ (function () {
        function SuiAccordionModule() {
        }
        SuiAccordionModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            SuiCollapseModule,
                            SuiTransitionModule
                        ],
                        declarations: [
                            SuiAccordion,
                            SuiAccordionPanel
                        ],
                        exports: [
                            SuiAccordion,
                            SuiAccordionPanel
                        ],
                        providers: []
                    },] }
        ];
        return SuiAccordionModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @record
     */
    function ICustomValidatorHost() { }
    function ICustomValidatorHost_tsickle_Closure_declarations() {
        /** @type {?} */
        ICustomValidatorHost.prototype.validate;
    }
    // unsupported: template constraints.
    /**
     * @template T
     */
    var   
    // unsupported: template constraints.
    /**
     * @template T
     */
    CustomValidator = /** @class */ (function () {
        function CustomValidator(_host) {
            this._host = _host;
            this.onValidatorChange = function () { };
        }
        /**
         * @param {?} c
         * @return {?}
         */
        CustomValidator.prototype.validate = /**
         * @param {?} c
         * @return {?}
         */
        function (c) {
            return this._host.validate(c);
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        CustomValidator.prototype.registerOnValidatorChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onValidatorChange = fn;
        };
        return CustomValidator;
    }());
    function CustomValidator_tsickle_Closure_declarations() {
        /** @type {?} */
        CustomValidator.prototype.onValidatorChange;
        /** @type {?} */
        CustomValidator.prototype._host;
    }
    /**
     * @record
     */
    function IValidationProvider() { }
    function IValidationProvider_tsickle_Closure_declarations() {
        /** @type {?} */
        IValidationProvider.prototype.provide;
        /** @type {?} */
        IValidationProvider.prototype.useExisting;
        /** @type {?} */
        IValidationProvider.prototype.multi;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    function customValidatorFactory(type) {
        return {
            provide: forms.NG_VALIDATORS,
            useExisting: core.forwardRef(function () { return type; }),
            multi: true
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @record
     * @template T
     */
    function ICustomValueAccessorHost() { }
    function ICustomValueAccessorHost_tsickle_Closure_declarations() {
        /** @type {?} */
        ICustomValueAccessorHost.prototype.writeValue;
    }
    // unsupported: template constraints.
    /**
     * @template U, T
     */
    var   
    // unsupported: template constraints.
    /**
     * @template U, T
     */
    CustomValueAccessor = /** @class */ (function () {
        function CustomValueAccessor(_host) {
            this._host = _host;
            this.onChange = function (e) { };
            this.onTouched = function () { };
        }
        /**
         * @param {?} value
         * @return {?}
         */
        CustomValueAccessor.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._host.writeValue(value);
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        CustomValueAccessor.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onChange = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        CustomValueAccessor.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouched = fn;
        };
        return CustomValueAccessor;
    }());
    function CustomValueAccessor_tsickle_Closure_declarations() {
        /** @type {?} */
        CustomValueAccessor.prototype.onChange;
        /** @type {?} */
        CustomValueAccessor.prototype.onTouched;
        /** @type {?} */
        CustomValueAccessor.prototype._host;
    }
    /**
     * @record
     */
    function IValueAccessorProvider() { }
    function IValueAccessorProvider_tsickle_Closure_declarations() {
        /** @type {?} */
        IValueAccessorProvider.prototype.provide;
        /** @type {?} */
        IValueAccessorProvider.prototype.useExisting;
        /** @type {?} */
        IValueAccessorProvider.prototype.multi;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    function customValueAccessorFactory(type) {
        return {
            provide: forms.NG_VALUE_ACCESSOR,
            useExisting: core.forwardRef(function () { return type; }),
            multi: true
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @enum {number} */
    var KeyCode = {
        Left: 37,
        Up: 38,
        Right: 39,
        Down: 40,
        Escape: 27,
        Enter: 13,
        Space: 32,
        Backspace: 8,
    };
    KeyCode[KeyCode.Left] = "Left";
    KeyCode[KeyCode.Up] = "Up";
    KeyCode[KeyCode.Right] = "Right";
    KeyCode[KeyCode.Down] = "Down";
    KeyCode[KeyCode.Escape] = "Escape";
    KeyCode[KeyCode.Enter] = "Enter";
    KeyCode[KeyCode.Space] = "Space";
    KeyCode[KeyCode.Backspace] = "Backspace";
    /**
     * @record
     */
    function IRecursiveObject() { }
    function IRecursiveObject_tsickle_Closure_declarations() {
        /* TODO: handle strange member:
        [name:string]:IRecursiveObject;
        */
    }
    /**
     * @record
     * @template T
     */
    function ITemplateRefContext() { }
    function ITemplateRefContext_tsickle_Closure_declarations() {
        /** @type {?} */
        ITemplateRefContext.prototype.$implicit;
    }
    /**
     * @record
     */
    function IAugmentedElement() { }
    function IAugmentedElement_tsickle_Closure_declarations() {
        /** @type {?} */
        IAugmentedElement.prototype.closest;
    }
    var HandledEvent = /** @class */ (function () {
        function HandledEvent() {
        }
        return HandledEvent;
    }());
    function HandledEvent_tsickle_Closure_declarations() {
        /** @type {?} */
        HandledEvent.prototype.eventHandled;
    }
    /**
     * @record
     */
    function IDynamicClasses() { }
    function IDynamicClasses_tsickle_Closure_declarations() {
        /* TODO: handle strange member:
        [name:string]:true;
        */
    }
    var /** @type {?} */ Util = {
        Array: {
            range: /**
             * @param {?} n
             * @param {?=} offset
             * @return {?}
             */
            function (n, offset) {
                if (offset === void 0) { offset = 0; }
                return Array(n).fill(0).map(function (z, i) { return i + offset; });
            },
            group: /**
             * @template T
             * @param {?} items
             * @param {?} groupLength
             * @return {?}
             */
            function (items, groupLength) {
                var /** @type {?} */ mutable = items.slice(0);
                var /** @type {?} */ groups = [];
                while (mutable.length > 0) {
                    groups.push(mutable.splice(0, groupLength));
                }
                return groups;
            },
            groupBy: /**
             * @template T
             * @param {?} items
             * @param {?} field
             * @return {?}
             */
            function (items, field) {
                return items.reduce(function (groups, i) {
                    var /** @type {?} */ fieldValue = i[field].toString();
                    groups[fieldValue] = groups[fieldValue] || [];
                    groups[fieldValue].push(i);
                    return groups;
                }, Object());
            },
            flatten: /**
             * @template T
             * @param {?} items
             * @return {?}
             */
            function (items) {
                return items.reduce(function (is, i) { return is.concat(i); }, []);
            }
        },
        String: {
            padLeft: /**
             * @param {?} str
             * @param {?} length
             * @param {?} padding
             * @return {?}
             */
            function (str, length, padding) {
                var /** @type {?} */ s = str;
                while (s.length < length) {
                    s = padding + s;
                }
                return s;
            }
        },
        DOM: {
            parseBooleanAttribute: /**
             * @param {?} attributeValue
             * @return {?}
             */
            function (attributeValue) {
                var /** @type {?} */ value = attributeValue;
                if (typeof attributeValue === "string") {
                    value = true;
                }
                return value;
            }
        },
        Object: {
            readValue: /**
             * @template T, U
             * @param {?} object
             * @param {?=} path
             * @return {?}
             */
            function (object, path) {
                if (!path) {
                    return object;
                }
                var /** @type {?} */ recursed = object;
                for (var /** @type {?} */ i = 0, /** @type {?} */ p = path.split("."), /** @type {?} */ len = p.length; i < len; i++) {
                    recursed = recursed[p[i]];
                }
                return recursed;
            }
        },
        Math: {
            round: /**
             * @param {?} r
             * @param {?} n
             * @return {?}
             */
            function (r, n) {
                return Math.round(r / n) * n;
            },
            roundUp: /**
             * @param {?} r
             * @param {?} n
             * @return {?}
             */
            function (r, n) {
                return Math.ceil(r / n) * n;
            },
            roundDown: /**
             * @param {?} r
             * @param {?} n
             * @return {?}
             */
            function (r, n) {
                return Math.floor(r / n) * n;
            },
            mod: /**
             * @param {?} r
             * @param {?} n
             * @return {?}
             */
            function (r, n) {
                var /** @type {?} */ rem = r % n;
                if (rem < 0) {
                    return rem + n;
                }
                return rem;
            }
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @enum {number} */
    var DatePrecision = {
        Decade: 0,
        Year: 1,
        Month: 2,
        Date: 3,
        Hour: 4,
        Minute: 5,
    };
    DatePrecision[DatePrecision.Decade] = "Decade";
    DatePrecision[DatePrecision.Year] = "Year";
    DatePrecision[DatePrecision.Month] = "Month";
    DatePrecision[DatePrecision.Date] = "Date";
    DatePrecision[DatePrecision.Hour] = "Hour";
    DatePrecision[DatePrecision.Minute] = "Minute";
    var /** @type {?} */ DateUtil = {
        startOf: /**
         * @param {?} precision
         * @param {?} date
         * @param {?=} resetAll
         * @return {?}
         */
        function (precision, date, resetAll) {
            if (resetAll === void 0) { resetAll = false; }
            switch (precision) {
                case DatePrecision.Decade:
                    var /** @type {?} */ start = Math.floor(date.getFullYear() / 10) * 10 + 1;
                    date.setFullYear(start);
                    if (!resetAll) {
                        break;
                    }
                // falls through
                case DatePrecision.Year:
                    date.setMonth(0);
                    if (!resetAll) {
                        break;
                    }
                // falls through
                case DatePrecision.Month:
                    date.setDate(1);
                    if (!resetAll) {
                        break;
                    }
                // falls through
                case DatePrecision.Date:
                    date.setHours(0);
                    if (!resetAll) {
                        break;
                    }
                // falls through
                case DatePrecision.Hour:
                    date.setMinutes(0);
                    if (!resetAll) {
                        break;
                    }
                // falls through
                case DatePrecision.Minute:
                    date.setSeconds(0, 0);
            }
            return date;
        },
        endOf: /**
         * @param {?} precision
         * @param {?} date
         * @return {?}
         */
        function (precision, date) {
            switch (precision) {
                case DatePrecision.Year:
                    date.setMonth(12, 0);
                // falls through
                case DatePrecision.Month:
                    date.setMonth(date.getMonth() + 1, 0);
                // falls through
                case DatePrecision.Date:
                    date.setHours(23, 59, 59, 999);
                    break;
                case DatePrecision.Hour:
                    date.setMinutes(59, 59, 999);
                    break;
                case DatePrecision.Minute:
                    date.setSeconds(59, 999);
                    break;
            }
            return date;
        },
        equal: /**
         * @param {?} precision
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (precision, a, b) {
            var /** @type {?} */ equal = true;
            switch (precision) {
                case DatePrecision.Minute:
                    equal = equal && a.getMinutes() === b.getMinutes();
                // falls through
                case DatePrecision.Hour:
                    equal = equal && a.getHours() === b.getHours();
                // falls through
                case DatePrecision.Date:
                    equal = equal && a.getDate() === b.getDate();
                // falls through
                case DatePrecision.Month:
                    equal = equal && a.getMonth() === b.getMonth();
                // falls through
                case DatePrecision.Year:
                    equal = equal && a.getFullYear() === b.getFullYear();
            }
            return equal;
        },
        next: /**
         * @param {?} precision
         * @param {?} date
         * @return {?}
         */
        function (precision, date) {
            return DateUtil.add(precision, date, 1);
        },
        add: /**
         * @param {?} precision
         * @param {?} date
         * @param {?} i
         * @return {?}
         */
        function (precision, date, i) {
            var /** @type {?} */ year = date.getFullYear();
            var /** @type {?} */ month = date.getMonth();
            var /** @type {?} */ day = date.getDate();
            switch (precision) {
                case DatePrecision.Decade:
                    date.setFullYear(year + i * 10);
                    if (date.getMonth() !== month) {
                        date.setDate(0);
                    }
                    break;
                case DatePrecision.Year:
                    date.setFullYear(year + i);
                    if (date.getMonth() !== month) {
                        date.setDate(0);
                    }
                    break;
                case DatePrecision.Month:
                    date.setMonth(month + i);
                    if (date.getMonth() !== Util.Math.mod(month + i, 12)) {
                        date.setDate(0);
                    }
                    break;
                case DatePrecision.Date:
                    date.setDate(day + i);
                    break;
                case DatePrecision.Hour:
                    date.setHours(date.getHours() + i);
                    break;
                case DatePrecision.Minute:
                    date.setMinutes(date.getMinutes() + i);
                    break;
            }
            return date;
        },
        previous: /**
         * @param {?} precision
         * @param {?} date
         * @return {?}
         */
        function (precision, date) {
            var /** @type {?} */ year = date.getFullYear();
            var /** @type {?} */ month = date.getMonth();
            var /** @type {?} */ day = date.getDate();
            switch (precision) {
                case DatePrecision.Decade:
                    date.setFullYear(year - 10);
                    if (date.getMonth() !== month) {
                        date.setDate(0);
                    }
                    break;
                case DatePrecision.Year:
                    date.setFullYear(year - 1);
                    if (date.getMonth() !== month) {
                        date.setDate(0);
                    }
                    break;
                case DatePrecision.Month:
                    date.setMonth(month - 1);
                    if (date.getMonth() !== Util.Math.mod(month - 1, 12)) {
                        date.setDate(0);
                    }
                    break;
                case DatePrecision.Date:
                    date.setDate(day - 1);
                    break;
                case DatePrecision.Hour:
                    var /** @type {?} */ hours = date.getHours();
                    date.setHours(hours - 1);
                    if (date.getHours() !== Util.Math.mod(hours - 1, 24)) {
                        date.setHours(hours - 2);
                    }
                    break;
                case DatePrecision.Minute:
                    var /** @type {?} */ minutes = date.getMinutes();
                    date.setMinutes(minutes - 1);
            }
            return date;
        },
        clone: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return new Date(date.getTime());
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @record
     * @template T
     */
    function IImplicitContext() { }
    function IImplicitContext_tsickle_Closure_declarations() {
        /** @type {?|undefined} */
        IImplicitContext.prototype.$implicit;
    }
    var SuiComponentFactory = /** @class */ (function () {
        function SuiComponentFactory(_applicationRef, _componentFactoryResolver, _injector) {
            this._applicationRef = _applicationRef;
            this._componentFactoryResolver = _componentFactoryResolver;
            this._injector = _injector;
        }
        /**
         * @template T
         * @param {?} type
         * @param {?=} providers
         * @return {?}
         */
        SuiComponentFactory.prototype.createComponent = /**
         * @template T
         * @param {?} type
         * @param {?=} providers
         * @return {?}
         */
        function (type, providers) {
            if (providers === void 0) { providers = []; }
            // Resolve a factory for creating components of type `type`.
            var /** @type {?} */ factory = this._componentFactoryResolver.resolveComponentFactory(type);
            // Resolve and create an injector with the specified providers.
            var /** @type {?} */ injector = core.ReflectiveInjector.resolveAndCreate(providers, this._injector);
            // Create a component using the previously resolved factory & injector.
            var /** @type {?} */ componentRef = factory.create(injector);
            return componentRef;
        };
        /**
         * @template T, U
         * @param {?} viewContainer
         * @param {?} template
         * @param {?} context
         * @return {?}
         */
        SuiComponentFactory.prototype.createView = /**
         * @template T, U
         * @param {?} viewContainer
         * @param {?} template
         * @param {?} context
         * @return {?}
         */
        function (viewContainer, template, context) {
            viewContainer.createEmbeddedView(template, context);
        };
        /**
         * @template T
         * @param {?} componentRef
         * @param {?} viewContainer
         * @return {?}
         */
        SuiComponentFactory.prototype.attachToView = /**
         * @template T
         * @param {?} componentRef
         * @param {?} viewContainer
         * @return {?}
         */
        function (componentRef, viewContainer) {
            viewContainer.insert(componentRef.hostView, 0);
        };
        /**
         * @template T
         * @param {?} componentRef
         * @return {?}
         */
        SuiComponentFactory.prototype.attachToApplication = /**
         * @template T
         * @param {?} componentRef
         * @return {?}
         */
        function (componentRef) {
            this._applicationRef.attachView(componentRef.hostView);
        };
        /**
         * @template T
         * @param {?} componentRef
         * @return {?}
         */
        SuiComponentFactory.prototype.detachFromApplication = /**
         * @template T
         * @param {?} componentRef
         * @return {?}
         */
        function (componentRef) {
            this._applicationRef.detachView(componentRef.hostView);
        };
        /**
         * @template T
         * @param {?} componentRef
         * @param {?} element
         * @return {?}
         */
        SuiComponentFactory.prototype.moveToElement = /**
         * @template T
         * @param {?} componentRef
         * @param {?} element
         * @return {?}
         */
        function (componentRef, element) {
            element.appendChild(componentRef.location.nativeElement);
        };
        /**
         * @template T
         * @param {?} componentRef
         * @return {?}
         */
        SuiComponentFactory.prototype.moveToDocumentBody = /**
         * @template T
         * @param {?} componentRef
         * @return {?}
         */
        function (componentRef) {
            this.moveToElement(componentRef, /** @type {?} */ ((document.querySelector("body"))));
        };
        /**
         * @template T
         * @param {?} componentRef
         * @return {?}
         */
        SuiComponentFactory.prototype.detachFromDocument = /**
         * @template T
         * @param {?} componentRef
         * @return {?}
         */
        function (componentRef) {
            var /** @type {?} */ element = componentRef.location.nativeElement;
            // We can't use `element.remove()` due to lack of IE11 support.
            if (element.parentNode) {
                element.parentNode.removeChild(element);
            }
        };
        SuiComponentFactory.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        SuiComponentFactory.ctorParameters = function () { return [
            { type: core.ApplicationRef },
            { type: core.ComponentFactoryResolver },
            { type: core.Injector }
        ]; };
        return SuiComponentFactory;
    }());
    function SuiComponentFactory_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiComponentFactory.prototype._applicationRef;
        /** @type {?} */
        SuiComponentFactory.prototype._componentFactoryResolver;
        /** @type {?} */
        SuiComponentFactory.prototype._injector;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ PositioningPlacement = {
        Auto: "auto",
        TopLeft: "top left",
        Top: "top",
        TopRight: "top right",
        LeftTop: "left top",
        Left: "left",
        LeftBottom: "left bottom",
        BottomLeft: "bottom left",
        Bottom: "bottom",
        BottomRight: "bottom right",
        RightTop: "right top",
        Right: "right",
        RightBottom: "right bottom"
    };
    /**
     * @record
     */
    function IPositionBoundingBox() { }
    function IPositionBoundingBox_tsickle_Closure_declarations() {
        /** @type {?} */
        IPositionBoundingBox.prototype.width;
        /** @type {?} */
        IPositionBoundingBox.prototype.height;
        /** @type {?} */
        IPositionBoundingBox.prototype.top;
        /** @type {?} */
        IPositionBoundingBox.prototype.left;
        /** @type {?} */
        IPositionBoundingBox.prototype.bottom;
        /** @type {?} */
        IPositionBoundingBox.prototype.right;
    }
    /**
     * @param {?} placement
     * @return {?}
     */
    function placementToPopper(placement) {
        if (!placement || placement === PositioningPlacement.Auto) {
            return "auto";
        }
        // All placements of the format: `direction alignment`, e.g. `top left`.
        var _a = __read(placement.split(" "), 2), direction = _a[0], alignment = _a[1];
        // Direction alone covers case of just `top`, `left`, `bottom`, `right`.
        var /** @type {?} */ chosenPlacement = [direction];
        // Add `start` / `end` to placement, depending on alignment direction.
        switch (alignment) {
            case "top":
            case "left":
                chosenPlacement.push("start");
                break;
            case "bottom":
            case "right":
                chosenPlacement.push("end");
                break;
        }
        // Join with hyphen to create Popper compatible placement.
        return chosenPlacement.join("-");
    }
    /**
     * @param {?} popper
     * @return {?}
     */
    function popperToPlacement(popper) {
        if (!popper || popper === "auto") {
            return "auto";
        }
        var _a = __read(popper.split("-"), 2), direction = _a[0], alignment = _a[1];
        var /** @type {?} */ chosenPlacement = [direction];
        switch (direction) {
            case "top":
            case "bottom":
                switch (alignment) {
                    case "start":
                        chosenPlacement.push("left");
                        break;
                    case "end":
                        chosenPlacement.push("right");
                        break;
                }
                break;
            case "left":
            case "right":
                switch (alignment) {
                    case "start":
                        chosenPlacement.push("top");
                        break;
                    case "end":
                        chosenPlacement.push("bottom");
                        break;
                }
                break;
        }
        return chosenPlacement.join(" ");
    }
    var PositioningService = /** @class */ (function () {
        function PositioningService(anchor, subject, placement, arrowSelector) {
            this.anchor = anchor;
            this.subject = subject;
            this._placement = placement;
            this._arrowSelector = arrowSelector;
            this.init();
        }
        Object.defineProperty(PositioningService.prototype, "placement", {
            get: /**
             * @return {?}
             */
            function () {
                return this._placement;
            },
            set: /**
             * @param {?} placement
             * @return {?}
             */
            function (placement) {
                this._placement = placement;
                if (this._popper) {
                    this._popper.options.placement = placementToPopper(placement);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PositioningService.prototype, "hasArrow", {
            set: /**
             * @param {?} hasArrow
             * @return {?}
             */
            function (hasArrow) {
                this._hasArrow = hasArrow;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PositioningService.prototype, "actualPlacement", {
            get: /**
             * @return {?}
             */
            function () {
                if (!this._popperState) {
                    return PositioningPlacement.Auto;
                }
                return popperToPlacement(this._popperState.placement);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PositioningService.prototype, "state", {
            get: /**
             * @return {?}
             */
            function () {
                return this._popperState;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        PositioningService.prototype.init = /**
         * @return {?}
         */
        function () {
            var _this = this;
            var /** @type {?} */ modifiers = {
                computeStyle: {
                    gpuAcceleration: false
                },
                preventOverflow: {
                    escapeWithReference: true,
                    boundariesElement: document.body
                },
                arrow: {
                    element: this._arrowSelector
                },
                offset: {
                    fn: function (data) {
                        if (_this._hasArrow) {
                            var /** @type {?} */ offsets = _this.calculateOffsets();
                            data.offsets.popper.left += offsets.left;
                            data.offsets.popper.top += offsets.top;
                        }
                        return data;
                    }
                }
            };
            if (!this._arrowSelector) {
                delete modifiers.arrow;
            }
            this._popper = new Popper(this.anchor.nativeElement, this.subject.nativeElement, {
                placement: placementToPopper(this._placement),
                modifiers: modifiers,
                onCreate: function (initial) { return _this._popperState = initial; },
                onUpdate: function (update) { return _this._popperState = update; }
            });
        };
        /**
         * @return {?}
         */
        PositioningService.prototype.update = /**
         * @return {?}
         */
        function () {
            this._popper.update();
        };
        /**
         * @return {?}
         */
        PositioningService.prototype.destroy = /**
         * @return {?}
         */
        function () {
            this._popper.destroy();
        };
        /**
         * @return {?}
         */
        PositioningService.prototype.calculateOffsets = /**
         * @return {?}
         */
        function () {
            var /** @type {?} */ left = 0;
            var /** @type {?} */ top = 0;
            // To support correct positioning for all popup sizes we should calculate offset using em
            var /** @type {?} */ fontSize = parseFloat(window.getComputedStyle(this.subject.nativeElement).getPropertyValue("font-size"));
            // The Semantic UI popup arrow width and height are 0.71428571em and the margin from the popup edge is 1em
            var /** @type {?} */ arrowCenter = (0.71428571 / 2 + 1) * fontSize;
            if (this.anchor.nativeElement.offsetWidth <= arrowCenter * 2) {
                var /** @type {?} */ anchorCenterWidth = this.anchor.nativeElement.offsetWidth / 2;
                if (this._placement === PositioningPlacement.TopLeft || this._placement === PositioningPlacement.BottomLeft) {
                    left = anchorCenterWidth - arrowCenter;
                }
                if (this._placement === PositioningPlacement.TopRight || this._placement === PositioningPlacement.BottomRight) {
                    left = arrowCenter - anchorCenterWidth;
                }
            }
            if (this.anchor.nativeElement.offsetHeight <= arrowCenter * 2) {
                var /** @type {?} */ anchorCenterHeight = this.anchor.nativeElement.offsetHeight / 2;
                if (this._placement === PositioningPlacement.LeftTop || this._placement === PositioningPlacement.RightTop) {
                    top = anchorCenterHeight - arrowCenter;
                }
                if (this._placement === PositioningPlacement.LeftBottom || this._placement === PositioningPlacement.RightBottom) {
                    top = arrowCenter - anchorCenterHeight;
                }
            }
            return { top: top, left: left, width: 0, height: 0 };
        };
        return PositioningService;
    }());
    function PositioningService_tsickle_Closure_declarations() {
        /** @type {?} */
        PositioningService.prototype.anchor;
        /** @type {?} */
        PositioningService.prototype.subject;
        /** @type {?} */
        PositioningService.prototype._popper;
        /** @type {?} */
        PositioningService.prototype._popperState;
        /** @type {?} */
        PositioningService.prototype._placement;
        /** @type {?} */
        PositioningService.prototype._hasArrow;
        /** @type {?} */
        PositioningService.prototype._arrowSelector;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiUtilityModule = /** @class */ (function () {
        function SuiUtilityModule() {
        }
        SuiUtilityModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        providers: [
                            SuiComponentFactory
                        ]
                    },] }
        ];
        return SuiUtilityModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiCheckbox = /** @class */ (function () {
        function SuiCheckbox() {
            this.isChecked = false;
            this.onCheckChange = new core.EventEmitter();
            this.onTouched = new core.EventEmitter();
            this.isDisabled = false;
            this.isReadonly = false;
            this.hasClasses = true;
        }
        Object.defineProperty(SuiCheckbox.prototype, "checkedAttribute", {
            get: /**
             * @return {?}
             */
            function () {
                return this.isChecked ? "" : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiCheckbox.prototype, "isDisabledAttribute", {
            get: /**
             * @return {?}
             */
            function () {
                return this.isDisabled ? "disabled" : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} event
         * @return {?}
         */
        SuiCheckbox.prototype.onMouseDown = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.preventDefault();
        };
        /**
         * @param {?} e
         * @return {?}
         */
        SuiCheckbox.prototype.onClick = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (!this.isDisabled && !this.isReadonly) {
                this.toggle();
                this.focusCheckbox();
            }
        };
        /**
         * @param {?} e
         * @return {?}
         */
        SuiCheckbox.prototype.onFocusOut = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            this.onTouched.emit();
        };
        /**
         * @return {?}
         */
        SuiCheckbox.prototype.toggle = /**
         * @return {?}
         */
        function () {
            this.isChecked = !this.isChecked;
            this.onCheckChange.emit(this.isChecked);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        SuiCheckbox.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isChecked = value;
        };
        /**
         * @return {?}
         */
        SuiCheckbox.prototype.focusCheckbox = /**
         * @return {?}
         */
        function () {
            this._checkboxElement.nativeElement.focus();
        };
        SuiCheckbox.decorators = [
            { type: core.Component, args: [{
                        selector: "sui-checkbox",
                        exportAs: "suiCheckbox",
                        template: "\n<input class=\"hidden\"\n       type=\"checkbox\"\n       [attr.name]=\"name\"\n       [attr.checked]=\"checkedAttribute\"\n       [attr.disabled]=\"isDisabledAttribute\"\n       [(ngModel)]=\"isChecked\"\n       #checkbox>\n<label>\n    <ng-content></ng-content>\n</label>\n"
                    }] }
        ];
        /** @nocollapse */
        SuiCheckbox.ctorParameters = function () { return []; };
        SuiCheckbox.propDecorators = {
            hasClasses: [{ type: core.HostBinding, args: ["class.ui",] }, { type: core.HostBinding, args: ["class.checkbox",] }],
            name: [{ type: core.Input }],
            isChecked: [{ type: core.HostBinding, args: ["class.checked",] }],
            onCheckChange: [{ type: core.Output, args: ["checkChange",] }],
            onTouched: [{ type: core.Output, args: ["touched",] }],
            isDisabled: [{ type: core.Input }],
            isReadonly: [{ type: core.HostBinding, args: ["class.read-only",] }, { type: core.Input }],
            _checkboxElement: [{ type: core.ViewChild, args: ["checkbox", { static: true },] }],
            onMouseDown: [{ type: core.HostListener, args: ["mousedown", ["$event"],] }],
            onClick: [{ type: core.HostListener, args: ["click", ["$event"],] }],
            onFocusOut: [{ type: core.HostListener, args: ["focusout", ["$event"],] }]
        };
        return SuiCheckbox;
    }());
    function SuiCheckbox_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiCheckbox.prototype.hasClasses;
        /** @type {?} */
        SuiCheckbox.prototype.name;
        /** @type {?} */
        SuiCheckbox.prototype.isChecked;
        /** @type {?} */
        SuiCheckbox.prototype.onCheckChange;
        /** @type {?} */
        SuiCheckbox.prototype.onTouched;
        /** @type {?} */
        SuiCheckbox.prototype.isDisabled;
        /** @type {?} */
        SuiCheckbox.prototype.isReadonly;
        /** @type {?} */
        SuiCheckbox.prototype._checkboxElement;
    }
    var SuiCheckboxValueAccessor = /** @class */ (function (_super) {
        __extends(SuiCheckboxValueAccessor, _super);
        function SuiCheckboxValueAccessor(host) {
            return _super.call(this, host) || this;
        }
        SuiCheckboxValueAccessor.decorators = [
            { type: core.Directive, args: [{
                        selector: "sui-checkbox",
                        host: {
                            "(checkChange)": "onChange($event)",
                            "(touched)": "onTouched()"
                        },
                        providers: [customValueAccessorFactory(SuiCheckboxValueAccessor)]
                    },] }
        ];
        /** @nocollapse */
        SuiCheckboxValueAccessor.ctorParameters = function () { return [
            { type: SuiCheckbox }
        ]; };
        return SuiCheckboxValueAccessor;
    }(CustomValueAccessor));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T
     */
    var SuiRadio = /** @class */ (function () {
        function SuiRadio() {
            this.isChecked = false;
            this.onCurrentValueChange = new core.EventEmitter();
            this.onTouched = new core.EventEmitter();
            this.isDisabled = false;
            this.isReadonly = false;
            this.hasClasses = true;
        }
        Object.defineProperty(SuiRadio.prototype, "checkedAttribute", {
            get: /**
             * @return {?}
             */
            function () {
                return this.isChecked ? "" : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiRadio.prototype, "isDisabledAttribute", {
            get: /**
             * @return {?}
             */
            function () {
                return this.isDisabled ? "disabled" : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} e
         * @return {?}
         */
        SuiRadio.prototype.onMouseDown = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            e.preventDefault();
        };
        /**
         * @return {?}
         */
        SuiRadio.prototype.onClick = /**
         * @return {?}
         */
        function () {
            if (!this.isDisabled && !this.isReadonly) {
                this.currentValue = this.value;
                this.onCurrentValueChange.emit(this.currentValue);
                this.update();
                this.focusRadio();
            }
        };
        /**
         * @return {?}
         */
        SuiRadio.prototype.onFocusOut = /**
         * @return {?}
         */
        function () {
            this.onTouched.emit();
        };
        /**
         * @return {?}
         */
        SuiRadio.prototype.update = /**
         * @return {?}
         */
        function () {
            this.isChecked = this.currentValue === this.value;
        };
        /**
         * @param {?} value
         * @return {?}
         */
        SuiRadio.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.currentValue = value;
            this.update();
        };
        /**
         * @return {?}
         */
        SuiRadio.prototype.focusRadio = /**
         * @return {?}
         */
        function () {
            this._radioElement.nativeElement.focus();
        };
        SuiRadio.decorators = [
            { type: core.Component, args: [{
                        selector: "sui-radio-button",
                        template: "\n<input class=\"hidden\"\n       type=\"checkbox\"\n       [attr.name]=\"name\"\n       [attr.checked]=\"checkedAttribute\"\n       [attr.disabled]=\"isDisabledAttribute\"\n       [ngModel]=\"isChecked\"\n       (ngModel)=\"currentValue = value\"\n       #radio>\n<label>\n    <ng-content></ng-content>\n</label>\n"
                    }] }
        ];
        /** @nocollapse */
        SuiRadio.ctorParameters = function () { return []; };
        SuiRadio.propDecorators = {
            hasClasses: [{ type: core.HostBinding, args: ["class.ui",] }, { type: core.HostBinding, args: ["class.radio",] }, { type: core.HostBinding, args: ["class.checkbox",] }],
            name: [{ type: core.Input }],
            value: [{ type: core.Input }],
            isChecked: [{ type: core.HostBinding, args: ["class.checked",] }],
            onCurrentValueChange: [{ type: core.Output, args: ["currentValueChange",] }],
            onTouched: [{ type: core.Output, args: ["touched",] }],
            isDisabled: [{ type: core.Input }],
            isReadonly: [{ type: core.HostBinding, args: ["class.read-only",] }, { type: core.Input }],
            _radioElement: [{ type: core.ViewChild, args: ["radio", { static: true },] }],
            onMouseDown: [{ type: core.HostListener, args: ["mousedown", ["$event"],] }],
            onClick: [{ type: core.HostListener, args: ["click",] }],
            onFocusOut: [{ type: core.HostListener, args: ["focusout",] }]
        };
        return SuiRadio;
    }());
    function SuiRadio_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiRadio.prototype.hasClasses;
        /** @type {?} */
        SuiRadio.prototype.name;
        /** @type {?} */
        SuiRadio.prototype.value;
        /** @type {?} */
        SuiRadio.prototype.isChecked;
        /** @type {?} */
        SuiRadio.prototype.currentValue;
        /** @type {?} */
        SuiRadio.prototype.onCurrentValueChange;
        /** @type {?} */
        SuiRadio.prototype.onTouched;
        /** @type {?} */
        SuiRadio.prototype.isDisabled;
        /** @type {?} */
        SuiRadio.prototype.isReadonly;
        /** @type {?} */
        SuiRadio.prototype._radioElement;
    }
    /**
     * @template T
     */
    var SuiRadioValueAccessor = /** @class */ (function (_super) {
        __extends(SuiRadioValueAccessor, _super);
        function SuiRadioValueAccessor(host) {
            return _super.call(this, host) || this;
        }
        SuiRadioValueAccessor.decorators = [
            { type: core.Directive, args: [{
                        selector: "sui-radio-button",
                        host: {
                            "(currentValueChange)": "onChange($event)",
                            "(touched)": "onTouched()"
                        },
                        providers: [customValueAccessorFactory(SuiRadioValueAccessor)]
                    },] }
        ];
        /** @nocollapse */
        SuiRadioValueAccessor.ctorParameters = function () { return [
            { type: SuiRadio }
        ]; };
        return SuiRadioValueAccessor;
    }(CustomValueAccessor));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T
     */
    var SuiRadioManager = /** @class */ (function () {
        function SuiRadioManager(element) {
            this.element = element;
            this.isNested = false;
            this._radioSubs = [];
        }
        /**
         * @return {?}
         */
        SuiRadioManager.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.updateNesting();
            this._subManagers.changes.subscribe(function () { return _this.updateNesting(); });
            this.updateRadios();
            this._renderedRadios.changes.subscribe(function () { return _this.updateRadios(); });
        };
        /**
         * @return {?}
         */
        SuiRadioManager.prototype.updateNesting = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this._subManagers
                .filter(function (m) { return m !== _this; })
                .forEach(function (m) { return m.isNested = true; });
        };
        /**
         * @return {?}
         */
        SuiRadioManager.prototype.updateRadios = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this._radioSubs.forEach(function (s) { return s.unsubscribe(); });
            this._radioSubs = [];
            var /** @type {?} */ groups = Util.Array.groupBy(this._renderedRadios.toArray(), "name");
            Object
                .keys(groups)
                .map(function (k) { return groups[k]; })
                .forEach(function (g) { return g
                .forEach(function (r) { return _this._radioSubs
                .push(r.onCurrentValueChange
                .subscribe(function (v) {
                if (!_this.isNested) {
                    g.forEach(function (radio) { return radio.writeValue(v); });
                }
            })); }); });
        };
        SuiRadioManager.decorators = [
            { type: core.Directive, args: [{
                        selector: "form:not([ngForm]):not([[ngForm]]),ngForm,[ngForm]"
                    },] }
        ];
        /** @nocollapse */
        SuiRadioManager.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        SuiRadioManager.propDecorators = {
            _subManagers: [{ type: core.ContentChildren, args: [SuiRadioManager, { descendants: true },] }],
            _renderedRadios: [{ type: core.ContentChildren, args: [SuiRadio, { descendants: true },] }]
        };
        return SuiRadioManager;
    }());
    function SuiRadioManager_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiRadioManager.prototype.isNested;
        /** @type {?} */
        SuiRadioManager.prototype._subManagers;
        /** @type {?} */
        SuiRadioManager.prototype._renderedRadios;
        /** @type {?} */
        SuiRadioManager.prototype._radioSubs;
        /** @type {?} */
        SuiRadioManager.prototype.element;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiCheckboxModule = /** @class */ (function () {
        function SuiCheckboxModule() {
        }
        SuiCheckboxModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule
                        ],
                        declarations: [
                            SuiCheckbox,
                            SuiCheckboxValueAccessor,
                            SuiRadio,
                            SuiRadioValueAccessor,
                            SuiRadioManager
                        ],
                        exports: [
                            SuiCheckbox,
                            SuiCheckboxValueAccessor,
                            SuiRadio,
                            SuiRadioValueAccessor,
                            SuiRadioManager
                        ]
                    },] }
        ];
        return SuiCheckboxModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @enum {number} */
    var CalendarMode = {
        DateOnly: 0,
        TimeOnly: 1,
        Both: 2,
    };
    CalendarMode[CalendarMode.DateOnly] = "DateOnly";
    CalendarMode[CalendarMode.TimeOnly] = "TimeOnly";
    CalendarMode[CalendarMode.Both] = "Both";
    var CalendarService = /** @class */ (function () {
        function CalendarService(config, localeValues) {
            this.localeValues = localeValues;
            this.onManualUpdate = function () { };
            this.config = config;
            this.currentDate = new Date();
            this.firstDayOfWeek = this.localeValues.firstDayOfWeek;
            this.onDateChange = new core.EventEmitter();
            this.reset();
        }
        Object.defineProperty(CalendarService.prototype, "config", {
            get: /**
             * @return {?}
             */
            function () {
                return this._config;
            },
            set: /**
             * @param {?} config
             * @return {?}
             */
            function (config) {
                this._config = config;
                config.updateBounds(this._selectedDate || this.currentDate);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarService.prototype, "inFinalView", {
            get: /**
             * @return {?}
             */
            function () {
                return this.currentView === this.config.mappings.finalView;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarService.prototype, "selectedDate", {
            get: /**
             * @return {?}
             */
            function () {
                return this._selectedDate;
            },
            set: /**
             * @param {?} date
             * @return {?}
             */
            function (date) {
                if (date) {
                    this._selectedDate = DateUtil.clone(date);
                    this.currentDate = DateUtil.clone(date);
                }
                else {
                    this._selectedDate = undefined;
                }
                this.config.updateBounds(this._selectedDate || this.currentDate);
                this.onManualUpdate();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarService.prototype, "minDate", {
            get: /**
             * @return {?}
             */
            function () {
                if (this._minDate && this.config.dateMinBound) {
                    return this._minDate > this.config.dateMinBound ? this._minDate : this.config.dateMinBound;
                }
                return this._minDate || this.config.dateMinBound;
            },
            set: /**
             * @param {?} min
             * @return {?}
             */
            function (min) {
                this._minDate = min;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarService.prototype, "maxDate", {
            get: /**
             * @return {?}
             */
            function () {
                if (this._maxDate && this.config.dateMaxBound) {
                    return this._maxDate < this.config.dateMaxBound ? this._maxDate : this.config.dateMaxBound;
                }
                return this._maxDate || this.config.dateMaxBound;
            },
            set: /**
             * @param {?} max
             * @return {?}
             */
            function (max) {
                this._maxDate = max;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarService.prototype, "firstDayOfWeek", {
            get: /**
             * @return {?}
             */
            function () {
                return this._firstDayOfWeek;
            },
            set: /**
             * @param {?} firstDayOfWeek
             * @return {?}
             */
            function (firstDayOfWeek) {
                if (firstDayOfWeek != undefined) {
                    this._firstDayOfWeek = Math.max(0, Math.min(6, firstDayOfWeek));
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        CalendarService.prototype.reset = /**
         * @return {?}
         */
        function () {
            this.currentView = this.config.mappings.finalView;
            if (!this._selectedDate) {
                var /** @type {?} */ current = this.currentDate.getTime();
                if (this._minDate) {
                    current = Math.max(current, this._minDate.getTime());
                }
                if (this._maxDate) {
                    current = Math.min(current, this._maxDate.getTime());
                }
                this.currentDate = new Date(current);
                this.config.updateBounds(this.currentDate);
                this.currentView = this.config.mappings.initialView;
            }
        };
        /**
         * @param {?} date
         * @param {?} fromView
         * @return {?}
         */
        CalendarService.prototype.changeDate = /**
         * @param {?} date
         * @param {?} fromView
         * @return {?}
         */
        function (date, fromView) {
            this.currentDate = date;
            if (fromView === this.config.mappings.finalView) {
                this.selectedDate = date;
                return this.onDateChange.emit(date);
            }
            this.updateView(this.config.mappings.changed, fromView);
        };
        /**
         * @param {?} fromView
         * @return {?}
         */
        CalendarService.prototype.zoomOut = /**
         * @param {?} fromView
         * @return {?}
         */
        function (fromView) {
            this.updateView(this.config.mappings.zoom, fromView);
        };
        /**
         * @param {?} mappings
         * @param {?} fromView
         * @return {?}
         */
        CalendarService.prototype.updateView = /**
         * @param {?} mappings
         * @param {?} fromView
         * @return {?}
         */
        function (mappings, fromView) {
            var /** @type {?} */ mapping = mappings.get(fromView);
            if (mapping == undefined) {
                throw new Error("Unknown view type.");
            }
            this.currentView = mapping;
        };
        return CalendarService;
    }());
    function CalendarService_tsickle_Closure_declarations() {
        /** @type {?} */
        CalendarService.prototype._config;
        /** @type {?} */
        CalendarService.prototype.currentView;
        /** @type {?} */
        CalendarService.prototype.currentDate;
        /** @type {?} */
        CalendarService.prototype._selectedDate;
        /** @type {?} */
        CalendarService.prototype._minDate;
        /** @type {?} */
        CalendarService.prototype._maxDate;
        /** @type {?} */
        CalendarService.prototype._firstDayOfWeek;
        /** @type {?} */
        CalendarService.prototype.onDateChange;
        /** @type {?} */
        CalendarService.prototype.onManualUpdate;
        /** @type {?} */
        CalendarService.prototype.localeValues;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CalendarItem = /** @class */ (function () {
        function CalendarItem(date) {
            this.date = date;
        }
        return CalendarItem;
    }());
    function CalendarItem_tsickle_Closure_declarations() {
        /** @type {?} */
        CalendarItem.prototype.date;
        /** @type {?} */
        CalendarItem.prototype.humanReadable;
        /** @type {?} */
        CalendarItem.prototype.isDisabled;
        /** @type {?} */
        CalendarItem.prototype.isActive;
        /** @type {?} */
        CalendarItem.prototype.isOutsideRange;
        /** @type {?} */
        CalendarItem.prototype.isToday;
        /** @type {?} */
        CalendarItem.prototype.isSelectable;
    }
    var SuiCalendarItem = /** @class */ (function () {
        function SuiCalendarItem(changeDetector) {
            this.changeDetector = changeDetector;
            this.hasFocus = false;
            this.onFocussed = new core.EventEmitter();
        }
        Object.defineProperty(SuiCalendarItem.prototype, "isSelectable", {
            get: /**
             * @return {?}
             */
            function () {
                return this.item.isSelectable;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiCalendarItem.prototype, "isActive", {
            get: /**
             * @return {?}
             */
            function () {
                return this.item.isActive;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiCalendarItem.prototype, "isToday", {
            get: /**
             * @return {?}
             */
            function () {
                return this.item.isToday;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SuiCalendarItem.prototype.onMouseMove = /**
         * @return {?}
         */
        function () {
            if (!this.hasFocus) {
                this.hasFocus = true;
                this.onFocussed.emit(this.hasFocus);
            }
        };
        /**
         * @return {?}
         */
        SuiCalendarItem.prototype.onMouseLeave = /**
         * @return {?}
         */
        function () {
            this.hasFocus = false;
            this.onFocussed.emit(this.hasFocus);
        };
        SuiCalendarItem.decorators = [
            { type: core.Directive, args: [{
                        selector: "[calendarItem]"
                    },] }
        ];
        /** @nocollapse */
        SuiCalendarItem.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef }
        ]; };
        SuiCalendarItem.propDecorators = {
            item: [{ type: core.Input, args: ["calendarItem",] }],
            isSelectable: [{ type: core.HostBinding, args: ["class.disabled",] }],
            isActive: [{ type: core.HostBinding, args: ["class.active",] }],
            isToday: [{ type: core.HostBinding, args: ["class.today",] }],
            hasFocus: [{ type: core.HostBinding, args: ["class.focus",] }],
            onMouseMove: [{ type: core.HostListener, args: ["mousemove",] }],
            onMouseLeave: [{ type: core.HostListener, args: ["mouseleave",] }]
        };
        return SuiCalendarItem;
    }());
    function SuiCalendarItem_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiCalendarItem.prototype.item;
        /** @type {?} */
        SuiCalendarItem.prototype.hasFocus;
        /** @type {?} */
        SuiCalendarItem.prototype.onFocussed;
        /** @type {?} */
        SuiCalendarItem.prototype.changeDetector;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @enum {number} */
    var CalendarViewType = {
        Year: 0,
        Month: 1,
        Date: 2,
        Hour: 3,
        Minute: 4,
    };
    CalendarViewType[CalendarViewType.Year] = "Year";
    CalendarViewType[CalendarViewType.Month] = "Month";
    CalendarViewType[CalendarViewType.Date] = "Date";
    CalendarViewType[CalendarViewType.Hour] = "Hour";
    CalendarViewType[CalendarViewType.Minute] = "Minute";
    /**
     * @abstract
     */
    var CalendarView = /** @class */ (function () {
        function CalendarView(renderer, viewType, ranges) {
            var _this = this;
            this._type = viewType;
            this.ranges = ranges;
            this._documentKeyDownListener = renderer.listen("document", "keydown", function (e) { return _this.onDocumentKeyDown(e); });
        }
        Object.defineProperty(CalendarView.prototype, "service", {
            get: /**
             * @return {?}
             */
            function () {
                return this._service;
            },
            set: /**
             * @param {?} service
             * @return {?}
             */
            function (service) {
                var _this = this;
                this._service = service;
                this.ranges.loadService(service);
                this.service.onManualUpdate = function () {
                    _this.ranges.refresh();
                    delete _this._highlightedItem;
                    _this.autoHighlight();
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarView.prototype, "currentDate", {
            get: /**
             * @return {?}
             */
            function () {
                return this.service.currentDate;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarView.prototype, "selectedDate", {
            get: /**
             * @return {?}
             */
            function () {
                return this.service.selectedDate;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} item
         * @return {?}
         */
        CalendarView.prototype.setDate = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            this.service.changeDate(item.date, this._type);
        };
        /**
         * @return {?}
         */
        CalendarView.prototype.zoomOut = /**
         * @return {?}
         */
        function () {
            this.service.zoomOut(this._type);
        };
        /**
         * @return {?}
         */
        CalendarView.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this._renderedItems.changes.subscribe(function () { return _this.onRenderedItemsChanged(); });
            this.onRenderedItemsChanged();
        };
        /**
         * @return {?}
         */
        CalendarView.prototype.onRenderedItemsChanged = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this._renderedItems.forEach(function (i) {
                return i.onFocussed.subscribe(function (hasFocus) {
                    if (hasFocus) {
                        _this.highlightItem(i.item);
                    }
                });
            });
            this.autoHighlight();
            this.highlightItem(this._highlightedItem);
        };
        /**
         * @return {?}
         */
        CalendarView.prototype.autoHighlight = /**
         * @return {?}
         */
        function () {
            var _this = this;
            var /** @type {?} */ date = this.selectedDate && this.ranges.current.containsDate(this.selectedDate) ? this.selectedDate : this.currentDate;
            if (this._highlightedItem && this.ranges.current.containsDate(this._highlightedItem.date)) {
                date = this._highlightedItem.date;
            }
            var /** @type {?} */ initiallyHighlighted = this.ranges.current.items.find(function (i) { return _this.ranges.dateComparer.equal(i.date, date); });
            if (initiallyHighlighted && !initiallyHighlighted.isDisabled) {
                this._highlightedItem = initiallyHighlighted;
            }
        };
        /**
         * @param {?} item
         * @return {?}
         */
        CalendarView.prototype.highlightItem = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item) {
                this._renderedItems.forEach(function (i) { return i.hasFocus = false; });
                var /** @type {?} */ rendered = this._renderedItems.find(function (ri) { return ri.item === item; });
                if (rendered && !rendered.hasFocus) {
                    rendered.hasFocus = true;
                    rendered.changeDetector.detectChanges();
                }
                this._highlightedItem = item;
            }
        };
        /**
         * @param {?} e
         * @return {?}
         */
        CalendarView.prototype.onDocumentKeyDown = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (this._highlightedItem && e.keyCode === KeyCode.Enter) {
                this.setDate(this._highlightedItem);
                return;
            }
            if (!this._highlightedItem) {
                this.autoHighlight();
            }
            var /** @type {?} */ index = this.ranges.current.findIndex(this._highlightedItem);
            var /** @type {?} */ isMovingForward = true;
            var /** @type {?} */ delta = 0;
            switch (e.keyCode) {
                case KeyCode.Right:
                    delta += 1;
                    break;
                case KeyCode.Left:
                    delta -= 1;
                    isMovingForward = false;
                    break;
                case KeyCode.Down:
                    delta += this.ranges.columns;
                    break;
                case KeyCode.Up:
                    delta -= this.ranges.columns;
                    isMovingForward = false;
                    break;
                default:
                    return;
            }
            // Stop these keypresses being captured elsewhere.
            e.preventDefault();
            var /** @type {?} */ nextItem = this.ranges.current.items[index + delta];
            if (nextItem && nextItem.isDisabled) {
                return;
            }
            if (nextItem && !nextItem.isOutsideRange) {
                return this.highlightItem(nextItem);
            }
            if (nextItem && nextItem.isOutsideRange) {
                if (index + delta >= this.ranges.current.inRange.length) {
                    isMovingForward = true;
                }
            }
            if (!nextItem) {
                var /** @type {?} */ adjustedIndex = this.ranges.current.findIndex(this._highlightedItem);
                var /** @type {?} */ nextItems = this.ranges.calc(isMovingForward).inRange;
                if (isMovingForward) {
                    adjustedIndex -= this.ranges.current.inRange.length;
                }
                else {
                    adjustedIndex += nextItems.length;
                }
                nextItem = nextItems[adjustedIndex + delta];
                if (nextItem.isDisabled) {
                    return;
                }
            }
            this.ranges.move(isMovingForward);
            this._highlightedItem = this.ranges.current.find(nextItem);
        };
        /**
         * @return {?}
         */
        CalendarView.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._documentKeyDownListener();
        };
        CalendarView.propDecorators = {
            _renderedItems: [{ type: core.ViewChildren, args: [SuiCalendarItem,] }],
            service: [{ type: core.Input }]
        };
        return CalendarView;
    }());
    function CalendarView_tsickle_Closure_declarations() {
        /** @type {?} */
        CalendarView.prototype._type;
        /** @type {?} */
        CalendarView.prototype._service;
        /** @type {?} */
        CalendarView.prototype._renderedItems;
        /** @type {?} */
        CalendarView.prototype._highlightedItem;
        /** @type {?} */
        CalendarView.prototype.ranges;
        /** @type {?} */
        CalendarView.prototype._documentKeyDownListener;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */
    CalendarMappings = /** @class */ (function () {
        function CalendarMappings() {
        }
        return CalendarMappings;
    }());
    function CalendarMappings_tsickle_Closure_declarations() {
        /** @type {?} */
        CalendarMappings.prototype.initialView;
        /** @type {?} */
        CalendarMappings.prototype.finalView;
        /** @type {?} */
        CalendarMappings.prototype.changed;
        /** @type {?} */
        CalendarMappings.prototype.zoom;
    }
    var DateMappings = /** @class */ (function (_super) {
        __extends(DateMappings, _super);
        function DateMappings() {
            var _this = _super.call(this) || this;
            _this.initialView = CalendarViewType.Date;
            _this.finalView = CalendarViewType.Date;
            _this.changed = new Map([
                [CalendarViewType.Year, CalendarViewType.Month],
                [CalendarViewType.Month, CalendarViewType.Date],
                [CalendarViewType.Date, CalendarViewType.Date]
            ]);
            _this.zoom = new Map([
                [CalendarViewType.Year, CalendarViewType.Date],
                [CalendarViewType.Month, CalendarViewType.Year],
                [CalendarViewType.Date, CalendarViewType.Month]
            ]);
            return _this;
        }
        return DateMappings;
    }(CalendarMappings));
    var TimeMappings = /** @class */ (function (_super) {
        __extends(TimeMappings, _super);
        function TimeMappings() {
            var _this = _super.call(this) || this;
            _this.initialView = CalendarViewType.Hour;
            _this.finalView = CalendarViewType.Minute;
            _this.changed = new Map([
                [CalendarViewType.Hour, CalendarViewType.Minute],
                [CalendarViewType.Minute, CalendarViewType.Minute]
            ]);
            _this.zoom = new Map([
                [CalendarViewType.Hour, CalendarViewType.Minute],
                [CalendarViewType.Minute, CalendarViewType.Hour]
            ]);
            return _this;
        }
        return TimeMappings;
    }(CalendarMappings));
    var DatetimeMappings = /** @class */ (function (_super) {
        __extends(DatetimeMappings, _super);
        function DatetimeMappings() {
            var _this = _super.call(this) || this;
            _this.initialView = CalendarViewType.Date;
            _this.finalView = CalendarViewType.Minute;
            _this.changed = new Map([
                [CalendarViewType.Year, CalendarViewType.Month],
                [CalendarViewType.Month, CalendarViewType.Date],
                [CalendarViewType.Date, CalendarViewType.Hour],
                [CalendarViewType.Hour, CalendarViewType.Minute],
                [CalendarViewType.Minute, CalendarViewType.Minute]
            ]);
            _this.zoom = new Map([
                [CalendarViewType.Year, CalendarViewType.Date],
                [CalendarViewType.Month, CalendarViewType.Year],
                [CalendarViewType.Date, CalendarViewType.Month],
                [CalendarViewType.Hour, CalendarViewType.Date],
                [CalendarViewType.Minute, CalendarViewType.Hour]
            ]);
            return _this;
        }
        return DatetimeMappings;
    }(CalendarMappings));
    var MonthMappings = /** @class */ (function (_super) {
        __extends(MonthMappings, _super);
        function MonthMappings() {
            var _this = _super.call(this) || this;
            _this.initialView = CalendarViewType.Month;
            _this.finalView = CalendarViewType.Month;
            _this.changed = new Map([
                [CalendarViewType.Year, CalendarViewType.Month],
                [CalendarViewType.Month, CalendarViewType.Month]
            ]);
            _this.zoom = new Map([
                [CalendarViewType.Year, CalendarViewType.Month],
                [CalendarViewType.Month, CalendarViewType.Year]
            ]);
            return _this;
        }
        return MonthMappings;
    }(CalendarMappings));
    var YearMappings = /** @class */ (function (_super) {
        __extends(YearMappings, _super);
        function YearMappings() {
            var _this = _super.call(this) || this;
            _this.initialView = CalendarViewType.Year;
            _this.finalView = CalendarViewType.Year;
            _this.changed = new Map([
                [CalendarViewType.Year, CalendarViewType.Year]
            ]);
            _this.zoom = new Map([
                [CalendarViewType.Year, CalendarViewType.Year]
            ]);
            return _this;
        }
        return YearMappings;
    }(CalendarMappings));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */
    CalendarConfig = /** @class */ (function () {
        function CalendarConfig(mode, precision, mappings, fallback) {
            this.mode = mode;
            this.precision = precision;
            this.mappings = mappings;
            this.fallback = fallback;
        }
        /**
         * @param {?} providedDate
         * @return {?}
         */
        CalendarConfig.prototype.updateBounds = /**
         * @param {?} providedDate
         * @return {?}
         */
        function (providedDate) {
            this.dateMinBound = DateUtil.startOf(DatePrecision.Year, new Date(), true);
            this.dateMinBound.setFullYear(0);
        };
        return CalendarConfig;
    }());
    function CalendarConfig_tsickle_Closure_declarations() {
        /** @type {?} */
        CalendarConfig.prototype.mode;
        /** @type {?} */
        CalendarConfig.prototype.precision;
        /** @type {?} */
        CalendarConfig.prototype.mappings;
        /** @type {?} */
        CalendarConfig.prototype.fallback;
        /** @type {?} */
        CalendarConfig.prototype.dateMinBound;
        /** @type {?} */
        CalendarConfig.prototype.dateMaxBound;
    }
    var DateConfigBase = /** @class */ (function (_super) {
        __extends(DateConfigBase, _super);
        function DateConfigBase(precision, mappings, fallback) {
            return _super.call(this, CalendarMode.DateOnly, precision, mappings, fallback) || this;
        }
        return DateConfigBase;
    }(CalendarConfig));
    var YearConfig = /** @class */ (function (_super) {
        __extends(YearConfig, _super);
        function YearConfig() {
            return _super.call(this, DatePrecision.Year, new YearMappings(), "number") || this;
        }
        return YearConfig;
    }(DateConfigBase));
    var MonthConfig = /** @class */ (function (_super) {
        __extends(MonthConfig, _super);
        function MonthConfig() {
            return _super.call(this, DatePrecision.Month, new MonthMappings(), "month") || this;
        }
        return MonthConfig;
    }(DateConfigBase));
    var DateConfig = /** @class */ (function (_super) {
        __extends(DateConfig, _super);
        function DateConfig() {
            return _super.call(this, DatePrecision.Date, new DateMappings(), "date") || this;
        }
        return DateConfig;
    }(DateConfigBase));
    var DatetimeConfig = /** @class */ (function (_super) {
        __extends(DatetimeConfig, _super);
        function DatetimeConfig() {
            return _super.call(this, CalendarMode.Both, DatePrecision.Minute, new DatetimeMappings(), "datetime-local") || this;
        }
        return DatetimeConfig;
    }(CalendarConfig));
    var TimeConfig = /** @class */ (function (_super) {
        __extends(TimeConfig, _super);
        function TimeConfig() {
            return _super.call(this, CalendarMode.TimeOnly, DatePrecision.Minute, new TimeMappings(), "time") || this;
        }
        /**
         * @param {?} providedDate
         * @return {?}
         */
        TimeConfig.prototype.updateBounds = /**
         * @param {?} providedDate
         * @return {?}
         */
        function (providedDate) {
            this.dateMaxBound = DateUtil.endOf(DatePrecision.Date, DateUtil.clone(providedDate));
            this.dateMinBound = DateUtil.previous(DatePrecision.Date, DateUtil.clone(this.dateMaxBound));
        };
        return TimeConfig;
    }(CalendarConfig));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DateComparer = /** @class */ (function () {
        function DateComparer(precision, isSmallest) {
            this._precision = precision;
            this._isSmallest = isSmallest;
        }
        /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        DateComparer.prototype.equal = /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            if (this._precision === DatePrecision.Minute) {
                return !!b &&
                    DateUtil.equal(DatePrecision.Hour, b, a) &&
                    Util.Math.roundDown(b.getMinutes(), 5) === Util.Math.roundDown(a.getMinutes(), 5);
            }
            return !!b && DateUtil.equal(this._precision, a, b);
        };
        /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        DateComparer.prototype.lessThan = /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            if (this._isSmallest) {
                return !b || (b >= a);
            }
            return !b || (DateUtil.endOf(this._precision, DateUtil.clone(b)) >= a);
        };
        /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        DateComparer.prototype.greaterThan = /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            if (this._isSmallest) {
                return !b || (b <= a);
            }
            return !b || (DateUtil.startOf(this._precision, DateUtil.clone(b)) <= a);
        };
        /**
         * @param {?} date
         * @param {?} left
         * @param {?} right
         * @return {?}
         */
        DateComparer.prototype.between = /**
         * @param {?} date
         * @param {?} left
         * @param {?} right
         * @return {?}
         */
        function (date, left, right) {
            return this.greaterThan(date, left) && this.lessThan(date, right);
        };
        return DateComparer;
    }());
    function DateComparer_tsickle_Closure_declarations() {
        /** @type {?} */
        DateComparer.prototype._precision;
        /** @type {?} */
        DateComparer.prototype._isSmallest;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @record
     */
    function IDateFnsLocaleValues() { }
    function IDateFnsLocaleValues_tsickle_Closure_declarations() {
        /* TODO: handle strange member:
        [name:string]:string[];
        */
    }
    /**
     * @record
     */
    function IDateFnsHelperOptions() { }
    function IDateFnsHelperOptions_tsickle_Closure_declarations() {
        /** @type {?|undefined} */
        IDateFnsHelperOptions.prototype.type;
    }
    /**
     * @record
     */
    function IDateFnsCustomLocale() { }
    function IDateFnsCustomLocale_tsickle_Closure_declarations() {
        /** @type {?} */
        IDateFnsCustomLocale.prototype.localize;
        /** @type {?} */
        IDateFnsCustomLocale.prototype.match;
        /** @type {?|undefined} */
        IDateFnsCustomLocale.prototype.options;
    }
    /**
     * @param {?} values
     * @param {?} defaultType
     * @param {?=} indexCallback
     * @return {?}
     */
    function buildLocalizeFn(values, defaultType, indexCallback) {
        return function (dirtyIndex, _a) {
            var type = (_a === void 0 ? { type: defaultType } : _a).type;
            var /** @type {?} */ index = indexCallback ? indexCallback(dirtyIndex) : dirtyIndex;
            return values[type][index];
        };
    }
    /**
     * @param {?} values
     * @param {?} defaultType
     * @return {?}
     */
    function buildLocalizeArrayFn(values, defaultType) {
        return function (_a) {
            var type = (_a === void 0 ? { type: defaultType } : _a).type;
            return values[type];
        };
    }
    /**
     * @param {?} patterns
     * @param {?} defaultType
     * @return {?}
     */
    function buildMatchFn(patterns, defaultType) {
        return function (dirtyString, _a) {
            var type = (_a === void 0 ? { type: defaultType } : _a).type;
            return dirtyString.match("^(" + patterns[type].join("|") + ")");
        };
    }
    /**
     * @param {?} patterns
     * @param {?} defaultType
     * @return {?}
     */
    function buildParseFn(patterns, defaultType) {
        return function (_a, _b) {
            var _c = __read(_a, 2), result = _c[1];
            var type = (_b === void 0 ? { type: defaultType } : _b).type;
            return (patterns[type] || patterns[defaultType])
                .map(function (p) { return new RegExp("^" + p); })
                .findIndex(function (pattern) { return pattern.test(result); });
        };
    }
    var DateFnsParser = /** @class */ (function () {
        function DateFnsParser(locale) {
            this._weekStartsOn = locale.firstDayOfWeek;
            var /** @type {?} */ weekdayValues = {
                long: locale.weekdays,
                short: locale.weekdaysShort,
                narrow: locale.weekdaysNarrow
            };
            var /** @type {?} */ monthValues = {
                long: locale.months,
                short: locale.monthsShort
            };
            var /** @type {?} */ timeOfDayValues = {
                long: locale.timesOfDay,
                uppercase: locale.timesOfDayUppercase,
                lowercase: locale.timesOfDayLowercase
            };
            var /** @type {?} */ timeOfDayMatchValues = {
                long: locale.timesOfDay,
                short: locale.timesOfDayUppercase.concat(locale.timesOfDayLowercase)
            };
            this._locale = defaultLocale;
            this._locale.localize = __assign({}, this._locale.localize, {
                weekday: buildLocalizeFn(weekdayValues, "long"),
                weekdays: buildLocalizeArrayFn(weekdayValues, "long"),
                month: buildLocalizeFn(monthValues, "long"),
                months: buildLocalizeArrayFn(monthValues, "long"),
                timeOfDay: buildLocalizeFn(timeOfDayValues, "long", function (hours) {
                    return hours / 12 >= 1 ? 1 : 0;
                }),
                timesOfDay: buildLocalizeArrayFn(timeOfDayValues, "long")
            });
            this._locale.match = __assign({}, this._locale.match, {
                weekdays: buildMatchFn(weekdayValues, "long"),
                weekday: buildParseFn(weekdayValues, "long"),
                months: buildMatchFn(monthValues, "long"),
                month: buildParseFn(monthValues, "long"),
                timesOfDay: buildMatchFn(timeOfDayMatchValues, "long"),
                timeOfDay: buildParseFn(timeOfDayMatchValues, "long")
            });
        }
        Object.defineProperty(DateFnsParser.prototype, "_config", {
            get: /**
             * @return {?}
             */
            function () {
                return {
                    weekStartsOn: this._weekStartsOn,
                    locale: this._locale
                };
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} d
         * @param {?} f
         * @return {?}
         */
        DateFnsParser.prototype.format = /**
         * @param {?} d
         * @param {?} f
         * @return {?}
         */
        function (d, f) {
            return dateFns.format(d, f, this._config);
        };
        /**
         * @param {?} dS
         * @param {?} f
         * @param {?} bD
         * @return {?}
         */
        DateFnsParser.prototype.parse = /**
         * @param {?} dS
         * @param {?} f
         * @param {?} bD
         * @return {?}
         */
        function (dS, f, bD) {
            return dateFns.parse(dS, f, bD, this._config);
        };
        return DateFnsParser;
    }());
    function DateFnsParser_tsickle_Closure_declarations() {
        /** @type {?} */
        DateFnsParser.prototype._weekStartsOn;
        /** @type {?} */
        DateFnsParser.prototype._locale;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DateParser = /** @class */ (function () {
        function DateParser(format, locale) {
            this._format = format;
            this._parser = new DateFnsParser(locale);
        }
        /**
         * @param {?} date
         * @return {?}
         */
        DateParser.prototype.format = /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return this._parser.format(date, this._format);
        };
        /**
         * @param {?} dateString
         * @param {?=} baseDate
         * @return {?}
         */
        DateParser.prototype.parse = /**
         * @param {?} dateString
         * @param {?=} baseDate
         * @return {?}
         */
        function (dateString, baseDate) {
            if (baseDate === void 0) { baseDate = new Date(); }
            return this._parser.parse(dateString, this._format, baseDate);
        };
        return DateParser;
    }());
    function DateParser_tsickle_Closure_declarations() {
        /** @type {?} */
        DateParser.prototype._format;
        /** @type {?} */
        DateParser.prototype._parser;
    }
    var InternalDateParser = /** @class */ (function (_super) {
        __extends(InternalDateParser, _super);
        function InternalDateParser(mode, locale) {
            var _this = this;
            var /** @type {?} */ internalFormats = {
                time: "HH:mm",
                datetime: "YYYY-MM-DDTHH:mm",
                date: "YYYY-MM-DD",
                month: "YYYY-MM",
                year: "YYYY"
            };
            _this = _super.call(this, internalFormats[mode], locale) || this;
            return _this;
        }
        return InternalDateParser;
    }(DateParser));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CalendarRange = /** @class */ (function () {
        function CalendarRange(start, dates, items, grouped, comparer) {
            this.start = start;
            this.dates = dates;
            this.items = items;
            this.groupedItems = grouped;
            this._comparer = comparer;
        }
        Object.defineProperty(CalendarRange.prototype, "inRange", {
            get: /**
             * @return {?}
             */
            function () {
                return this.items.filter(function (i) { return !i.isOutsideRange; });
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} item
         * @return {?}
         */
        CalendarRange.prototype.find = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            var _this = this;
            return this.items.find(function (i) { return _this._comparer.equal(i.date, item.date); });
        };
        /**
         * @param {?} item
         * @return {?}
         */
        CalendarRange.prototype.findIndex = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            var _this = this;
            if (!item) {
                return -1;
            }
            return this.items.findIndex(function (i) { return _this._comparer.equal(i.date, item.date); });
        };
        /**
         * @param {?} date
         * @return {?}
         */
        CalendarRange.prototype.containsDate = /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            var _this = this;
            return !!this.inRange.find(function (i) { return _this._comparer.equal(i.date, date); });
        };
        return CalendarRange;
    }());
    function CalendarRange_tsickle_Closure_declarations() {
        /** @type {?} */
        CalendarRange.prototype.start;
        /** @type {?} */
        CalendarRange.prototype.dates;
        /** @type {?} */
        CalendarRange.prototype.items;
        /** @type {?} */
        CalendarRange.prototype.groupedItems;
        /** @type {?} */
        CalendarRange.prototype._comparer;
    }
    /**
     * @abstract
     */
    var   /**
     * @abstract
     */
    CalendarRangeService = /** @class */ (function () {
        function CalendarRangeService(interval, rows, columns) {
            this.interval = interval;
            this.marginal = /** @type {?} */ interval + 1;
            this.rows = rows;
            this.columns = columns;
        }
        Object.defineProperty(CalendarRangeService.prototype, "dateComparer", {
            get: /**
             * @return {?}
             */
            function () {
                return new DateComparer(this.marginal, this.service.inFinalView);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarRangeService.prototype, "length", {
            get: /**
             * @return {?}
             */
            function () {
                return this.rows * this.columns;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarRangeService.prototype, "canMoveNext", {
            get: /**
             * @return {?}
             */
            function () {
                var /** @type {?} */ firstItem = this.next.inRange[0];
                if (firstItem && this.service.maxDate) {
                    return firstItem.date <= this.service.maxDate;
                }
                return true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarRangeService.prototype, "canMovePrevious", {
            get: /**
             * @return {?}
             */
            function () {
                var /** @type {?} */ lastItem = this.previous.inRange.slice(-1).pop();
                if (lastItem && this.service.minDate) {
                    return lastItem.date >= this.service.minDate;
                }
                return true;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} service
         * @return {?}
         */
        CalendarRangeService.prototype.loadService = /**
         * @param {?} service
         * @return {?}
         */
        function (service) {
            this.service = service;
            this.refresh();
        };
        /**
         * @return {?}
         */
        CalendarRangeService.prototype.refresh = /**
         * @return {?}
         */
        function () {
            this.current = this.calcRange(this.service.currentDate);
            this.next = this.calcRange(DateUtil.next(this.interval, DateUtil.clone(this.service.currentDate)));
            this.previous = this.calcRange(DateUtil.previous(this.interval, DateUtil.clone(this.service.currentDate)));
        };
        /**
         * @param {?} forwards
         * @return {?}
         */
        CalendarRangeService.prototype.move = /**
         * @param {?} forwards
         * @return {?}
         */
        function (forwards) {
            if (forwards) {
                return this.moveNext();
            }
            return this.movePrevious();
        };
        /**
         * @return {?}
         */
        CalendarRangeService.prototype.moveNext = /**
         * @return {?}
         */
        function () {
            DateUtil.next(this.interval, this.service.currentDate);
            this.previous = this.current;
            this.current = this.next;
            this.next = this.calcRange(DateUtil.next(this.interval, DateUtil.clone(this.service.currentDate)));
        };
        /**
         * @return {?}
         */
        CalendarRangeService.prototype.movePrevious = /**
         * @return {?}
         */
        function () {
            DateUtil.previous(this.interval, this.service.currentDate);
            this.next = this.current;
            this.current = this.previous;
            this.previous = this.calcRange(DateUtil.previous(this.interval, DateUtil.clone(this.service.currentDate)));
        };
        /**
         * @param {?} forwards
         * @return {?}
         */
        CalendarRangeService.prototype.calc = /**
         * @param {?} forwards
         * @return {?}
         */
        function (forwards) {
            if (forwards) {
                return this.next;
            }
            return this.previous;
        };
        /**
         * @param {?} startDate
         * @return {?}
         */
        CalendarRangeService.prototype.calcRange = /**
         * @param {?} startDate
         * @return {?}
         */
        function (startDate) {
            var /** @type {?} */ start = this.calcStart(startDate);
            if (this.service.inFinalView) {
                DateUtil.startOf(this.marginal, start, true);
            }
            var /** @type {?} */ dates = this.calcDates(start);
            var /** @type {?} */ items = this.calcItems(dates, startDate);
            return new CalendarRange(start, dates, items, Util.Array.group(items, this.columns), this.dateComparer);
        };
        /**
         * @param {?} date
         * @return {?}
         */
        CalendarRangeService.prototype.calcStart = /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return DateUtil.startOf(this.interval, DateUtil.clone(date));
        };
        /**
         * @param {?} rangeStart
         * @return {?}
         */
        CalendarRangeService.prototype.calcDates = /**
         * @param {?} rangeStart
         * @return {?}
         */
        function (rangeStart) {
            var _this = this;
            return Util.Array
                .range(this.length)
                .map(function (i) { return DateUtil.add(_this.marginal, DateUtil.clone(rangeStart), i); });
        };
        /**
         * @param {?} dateRange
         * @param {?} baseDate
         * @return {?}
         */
        CalendarRangeService.prototype.calcItems = /**
         * @param {?} dateRange
         * @param {?} baseDate
         * @return {?}
         */
        function (dateRange, baseDate) {
            var _this = this;
            return dateRange.map(function (date) {
                var /** @type {?} */ item = new CalendarItem(date);
                item.isDisabled = !_this.dateComparer.between(item.date, _this.service.minDate, _this.service.maxDate);
                item.isActive = _this.dateComparer.equal(item.date, _this.service.selectedDate);
                item.isToday = _this.dateComparer.equal(item.date, new Date());
                item.isSelectable = item.isDisabled;
                _this.configureItem(item, baseDate);
                return item;
            });
        };
        return CalendarRangeService;
    }());
    function CalendarRangeService_tsickle_Closure_declarations() {
        /** @type {?} */
        CalendarRangeService.prototype.previous;
        /** @type {?} */
        CalendarRangeService.prototype.current;
        /** @type {?} */
        CalendarRangeService.prototype.next;
        /** @type {?} */
        CalendarRangeService.prototype.service;
        /** @type {?} */
        CalendarRangeService.prototype.interval;
        /** @type {?} */
        CalendarRangeService.prototype.marginal;
        /** @type {?} */
        CalendarRangeService.prototype.rows;
        /** @type {?} */
        CalendarRangeService.prototype.columns;
        /**
         * @abstract
         * @param {?} item
         * @param {?} baseDate
         * @return {?}
         */
        CalendarRangeService.prototype.configureItem = function (item, baseDate) { };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiCalendarViewTitle = /** @class */ (function () {
        function SuiCalendarViewTitle() {
            this.onZoomOut = new core.EventEmitter();
        }
        SuiCalendarViewTitle.decorators = [
            { type: core.Component, args: [{
                        selector: "sui-calendar-view-title",
                        template: "\n<span class=\"title link\" (click)=\"onZoomOut.emit()\">\n    <ng-content></ng-content>\n</span>\n<span class=\"prev link\" [class.disabled]=\"!ranges?.canMovePrevious\" (click)=\"ranges?.movePrevious()\">\n    <i class=\"chevron left icon\"></i>\n</span>\n<span class=\"next link\" [class.disabled]=\"!ranges?.canMoveNext\" (click)=\"ranges?.moveNext()\">\n    <i class=\"chevron right icon\"></i>\n</span>\n",
                        styles: ["\n.title.link {\n    display: inline-block;\n    margin-left: 2rem;\n    margin-right: 2rem;\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        SuiCalendarViewTitle.ctorParameters = function () { return []; };
        SuiCalendarViewTitle.propDecorators = {
            ranges: [{ type: core.Input }],
            onZoomOut: [{ type: core.Output, args: ["zoomOut",] }]
        };
        return SuiCalendarViewTitle;
    }());
    function SuiCalendarViewTitle_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiCalendarViewTitle.prototype.ranges;
        /** @type {?} */
        SuiCalendarViewTitle.prototype.onZoomOut;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ DatepickerMode = {
        Year: "year",
        Month: "month",
        Date: "date",
        Datetime: "datetime",
        Time: "time"
    };
    var SuiDatepicker = /** @class */ (function () {
        function SuiDatepicker(localizationService) {
            this.service = new CalendarService(new DatetimeConfig(), localizationService.get().datepicker);
            this.hasClasses = true;
        }
        /**
         * @param {?} e
         * @return {?}
         */
        SuiDatepicker.prototype.onMouseDown = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            e.preventDefault();
        };
        SuiDatepicker.decorators = [
            { type: core.Component, args: [{
                        selector: "sui-datepicker",
                        template: "\n<ng-container [ngSwitch]=\"service.currentView\">\n    <sui-calendar-year-view [service]=\"service\" *ngSwitchCase=\"0\"></sui-calendar-year-view>\n    <sui-calendar-month-view [service]=\"service\" *ngSwitchCase=\"1\"></sui-calendar-month-view>    \n    <sui-calendar-date-view [service]=\"service\" *ngSwitchCase=\"2\"></sui-calendar-date-view>    \n    <sui-calendar-hour-view [service]=\"service\" *ngSwitchCase=\"3\"></sui-calendar-hour-view>    \n    <sui-calendar-minute-view [service]=\"service\" *ngSwitchCase=\"4\"></sui-calendar-minute-view>    \n</ng-container>\n",
                        styles: ["\n:host {\n    user-select: none;\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        SuiDatepicker.ctorParameters = function () { return [
            { type: SuiLocalizationService }
        ]; };
        SuiDatepicker.propDecorators = {
            hasClasses: [{ type: core.HostBinding, args: ["class.ui",] }, { type: core.HostBinding, args: ["class.active",] }, { type: core.HostBinding, args: ["class.calendar",] }],
            onMouseDown: [{ type: core.HostListener, args: ["mousedown", ["$event"],] }]
        };
        return SuiDatepicker;
    }());
    function SuiDatepicker_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiDatepicker.prototype.hasClasses;
        /** @type {?} */
        SuiDatepicker.prototype.service;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ PopupTrigger = {
        Hover: "hover",
        Click: "click",
        OutsideClick: "outsideClick",
        Focus: "focus",
        Manual: "manual"
    };
    /**
     * @record
     */
    function IPopupConfig() { }
    function IPopupConfig_tsickle_Closure_declarations() {
        /** @type {?|undefined} */
        IPopupConfig.prototype.header;
        /** @type {?|undefined} */
        IPopupConfig.prototype.text;
        /** @type {?|undefined} */
        IPopupConfig.prototype.placement;
        /** @type {?|undefined} */
        IPopupConfig.prototype.trigger;
        /** @type {?|undefined} */
        IPopupConfig.prototype.isInverted;
        /** @type {?|undefined} */
        IPopupConfig.prototype.delay;
        /** @type {?|undefined} */
        IPopupConfig.prototype.isBasic;
        /** @type {?|undefined} */
        IPopupConfig.prototype.transition;
        /** @type {?|undefined} */
        IPopupConfig.prototype.transitionDuration;
        /** @type {?|undefined} */
        IPopupConfig.prototype.isFlowing;
        /** @type {?|undefined} */
        IPopupConfig.prototype.isInline;
    }
    var PopupConfig = /** @class */ (function () {
        function PopupConfig(defaults) {
            if (defaults === void 0) { defaults = {}; }
            this.placement = PositioningPlacement.TopLeft;
            this.trigger = PopupTrigger.Hover;
            this.isInverted = false;
            this.delay = 0;
            this.isBasic = false;
            this.transition = "scale";
            this.transitionDuration = 200;
            this.isFlowing = false;
            this.isInline = false;
            Object.assign(this, defaults);
        }
        return PopupConfig;
    }());
    function PopupConfig_tsickle_Closure_declarations() {
        /** @type {?} */
        PopupConfig.prototype.header;
        /** @type {?} */
        PopupConfig.prototype.text;
        /** @type {?} */
        PopupConfig.prototype.placement;
        /** @type {?} */
        PopupConfig.prototype.trigger;
        /** @type {?} */
        PopupConfig.prototype.isInverted;
        /** @type {?} */
        PopupConfig.prototype.delay;
        /** @type {?} */
        PopupConfig.prototype.isBasic;
        /** @type {?} */
        PopupConfig.prototype.transition;
        /** @type {?} */
        PopupConfig.prototype.size;
        /** @type {?} */
        PopupConfig.prototype.width;
        /** @type {?} */
        PopupConfig.prototype.transitionDuration;
        /** @type {?} */
        PopupConfig.prototype.isFlowing;
        /** @type {?} */
        PopupConfig.prototype.isInline;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiPopup = /** @class */ (function () {
        function SuiPopup(elementRef) {
            this.elementRef = elementRef;
            this.transitionController = new TransitionController(false);
            this._isOpen = false;
            this.onOpen = new core.EventEmitter();
            this.onClose = new core.EventEmitter();
            this.tabindex = 0;
        }
        Object.defineProperty(SuiPopup.prototype, "isOpen", {
            get: /**
             * @return {?}
             */
            function () {
                return this._isOpen;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiPopup.prototype, "anchor", {
            set: /**
             * @param {?} anchor
             * @return {?}
             */
            function (anchor) {
                this._anchor = anchor;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiPopup.prototype, "direction", {
            get: /**
             * @return {?}
             */
            function () {
                // We need to set direction attribute before popper init to allow correct positioning
                return this.config.placement.split(" ").shift();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiPopup.prototype, "alignment", {
            get: /**
             * @return {?}
             */
            function () {
                return this.config.placement.split(" ").pop();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiPopup.prototype, "dynamicClasses", {
            get: /**
             * @return {?}
             */
            function () {
                var /** @type {?} */ classes = {};
                if (this.direction) {
                    classes[this.direction] = true;
                }
                if (this.alignment) {
                    classes[this.alignment] = true;
                }
                if (this.config.isInverted) {
                    classes["inverted"] = true;
                }
                if (this.config.isBasic) {
                    classes["basic"] = true;
                }
                if (this.config.isFlowing) {
                    classes["flowing"] = true;
                }
                if (this.config.size) {
                    classes[this.config.size] = true;
                }
                if (this.config.width) {
                    classes[this.config.width] = true;
                }
                return classes;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SuiPopup.prototype.open = /**
         * @return {?}
         */
        function () {
            var _this = this;
            // Only attempt to open if currently closed.
            if (!this.isOpen) {
                // Cancel the closing timer.
                clearTimeout(this.closingTimeout);
                // Create positioning service after a brief delay.
                setTimeout(function () {
                    _this.positioningService = new PositioningService(_this._anchor, _this._container.element, _this.config.placement, ".dynamic.arrow");
                    _this.positioningService.hasArrow = !_this.config.isBasic;
                });
                // Cancel all other transitions, and initiate the opening transition.
                this.transitionController.stopAll();
                this.transitionController.animate(new Transition(this.config.transition, this.config.transitionDuration, TransitionDirection.In, function () {
                    // Focus any element with [autofocus] attribute.
                    var /** @type {?} */ autoFocus = _this.elementRef.nativeElement.querySelector("[autofocus]");
                    if (autoFocus) {
                        // Autofocus after the browser has had time to process other event handlers.
                        setTimeout(function () { return autoFocus.focus(); }, 10);
                        // Try to focus again when the modal has opened so that autofocus works in IE11.
                        setTimeout(function () { return autoFocus.focus(); }, _this.config.transitionDuration);
                    }
                }));
                // Finally, set the popup to be open.
                this._isOpen = true;
                this.onOpen.emit();
            }
        };
        /**
         * @return {?}
         */
        SuiPopup.prototype.toggle = /**
         * @return {?}
         */
        function () {
            if (!this.isOpen) {
                return this.open();
            }
            return this.close();
        };
        /**
         * @return {?}
         */
        SuiPopup.prototype.close = /**
         * @return {?}
         */
        function () {
            var _this = this;
            // Only attempt to close if currently open.
            if (this.isOpen) {
                // Cancel all other transitions, and initiate the closing transition.
                this.transitionController.stopAll();
                this.transitionController.animate(new Transition(this.config.transition, this.config.transitionDuration, TransitionDirection.Out));
                // Cancel the closing timer.
                clearTimeout(this.closingTimeout);
                // Start the closing timer, that fires the `onClose` event after the transition duration number of milliseconds.
                this.closingTimeout = window.setTimeout(function () { return _this.onClose.emit(); }, this.config.transitionDuration);
                // Finally, set the popup to be closed.
                this._isOpen = false;
            }
        };
        /**
         * @param {?} event
         * @return {?}
         */
        SuiPopup.prototype.onClick = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            // Makes sense here, as the popup shouldn't be attached to any DOM element.
            event.stopPropagation();
        };
        SuiPopup.decorators = [
            { type: core.Component, args: [{
                        selector: "sui-popup",
                        template: "\n<div class=\"ui popup\"\n     [ngClass]=\"dynamicClasses\"\n     [suiTransition]=\"transitionController\"\n     [attr.direction]=\"direction\"\n     #container>\n\n    <ng-container *ngIf=\"!config.template && (!!config.header || !!config.text)\">\n        <div class=\"header\" *ngIf=\"config.header\">{{ config.header }}</div>\n        <div class=\"content\">{{ config.text }}</div>\n    </ng-container>\n    <div #templateSibling></div>\n\n    <sui-popup-arrow *ngIf=\"!config.isBasic\"\n                     [placement]=\"config.placement\"\n                     [inverted]=\"config.isInverted\"></sui-popup-arrow>\n</div>\n",
                        styles: ["\n.ui.popup {\n    /* Autofit popup to the contents. */\n    right: auto;\n    margin: 0;\n}\n\n.ui.animating.popup {\n    /* When the popup is animating, it may not initially be in the correct position.\n       This fires a mouse event, causing the anchor's mouseleave to fire - making the popup flicker.\n       Setting pointer-events to none while animating fixes this bug. */\n    pointer-events: none;\n}\n\n.ui.popup::before {\n    /* Hide the Semantic UI CSS arrow. */\n    display: none;\n}\n\n/* Offset popup by 0.75em above and below when placed 'vertically'. */\n.ui.popup[direction=\"top\"],\n.ui.popup[direction=\"bottom\"] {\n    margin-top: 0.75em;\n    margin-bottom: 0.75em;\n}\n\n/* Offset popup by 0.75em either side when placed 'horizontally'. */\n.ui.popup[direction=\"left\"],\n.ui.popup[direction=\"right\"] {\n    margin-left: 0.75em;\n    margin-right: 0.75em;\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        SuiPopup.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        SuiPopup.propDecorators = {
            _container: [{ type: core.ViewChild, args: ["container", { read: core.ViewContainerRef, static: true },] }],
            templateSibling: [{ type: core.ViewChild, args: ["templateSibling", { read: core.ViewContainerRef, static: true },] }],
            tabindex: [{ type: core.HostBinding, args: ["attr.tabindex",] }],
            onClick: [{ type: core.HostListener, args: ["click", ["$event"],] }]
        };
        return SuiPopup;
    }());
    function SuiPopup_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiPopup.prototype.config;
        /** @type {?} */
        SuiPopup.prototype.transitionController;
        /** @type {?} */
        SuiPopup.prototype.positioningService;
        /** @type {?} */
        SuiPopup.prototype._anchor;
        /** @type {?} */
        SuiPopup.prototype._isOpen;
        /** @type {?} */
        SuiPopup.prototype.closingTimeout;
        /** @type {?} */
        SuiPopup.prototype.onOpen;
        /** @type {?} */
        SuiPopup.prototype.onClose;
        /** @type {?} */
        SuiPopup.prototype._container;
        /** @type {?} */
        SuiPopup.prototype.templateSibling;
        /** @type {?} */
        SuiPopup.prototype.tabindex;
        /** @type {?} */
        SuiPopup.prototype.elementRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @record
     */
    function IPopup() { }
    function IPopup_tsickle_Closure_declarations() {
        /** @type {?} */
        IPopup.prototype.open;
        /** @type {?} */
        IPopup.prototype.close;
        /** @type {?} */
        IPopup.prototype.toggle;
    }
    /**
     * @abstract
     */
    var SuiPopupController = /** @class */ (function () {
        function SuiPopupController(_renderer, _element, _componentFactory, config) {
            var _this = this;
            this._renderer = _renderer;
            this._element = _element;
            this._componentFactory = _componentFactory;
            // Generate a new SuiPopup component and attach it to the application view.
            this._componentRef = this._componentFactory.createComponent(SuiPopup);
            // Configure popup with provided config.
            this.popup.config = config;
            // When the popup is closed (onClose fires on animation complete),
            this.popup.onClose.subscribe(function () { return _this.cleanup(); });
        }
        Object.defineProperty(SuiPopupController.prototype, "popup", {
            get: /**
             * @return {?}
             */
            function () {
                // Use non-null assertion as we only access this when a popup exists.
                return this._componentRef.instance;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?=} config
         * @return {?}
         */
        SuiPopupController.prototype.configure = /**
         * @param {?=} config
         * @return {?}
         */
        function (config) {
            if (config) {
                Object.assign(this.popup.config, config);
            }
        };
        /**
         * @return {?}
         */
        SuiPopupController.prototype.openDelayed = /**
         * @return {?}
         */
        function () {
            var _this = this;
            // Cancel the opening timer.
            clearTimeout(this._openingTimeout);
            // Start the popup opening after the specified delay interval.
            this._openingTimeout = window.setTimeout(function () { return _this.open(); }, this.popup.config.delay);
        };
        /**
         * @return {?}
         */
        SuiPopupController.prototype.open = /**
         * @return {?}
         */
        function () {
            var _this = this;
            // Attach the generated component to the current application.
            this._componentFactory.attachToApplication(this._componentRef);
            if (this.popup.config.isInline) {
                this._componentFactory.moveToElement(this._componentRef, this._element.nativeElement.parentElement);
            }
            else {
                // Move the generated element to the body to avoid any positioning issues.
                this._componentFactory.moveToDocumentBody(this._componentRef);
            }
            // Attach a reference to the anchor element. We do it here because IE11 loves to complain.
            this.popup.anchor = this._element;
            // Add a listener to the document body to handle closing.
            this._documentListener = this._renderer
                .listen("document", "click", function (e) {
                return _this.onDocumentClick(e);
            });
            // Start popup open transition.
            this.popup.open();
            // Call lifecyle hook
            var /** @type {?} */ lifecycle = this.popupOnOpen;
            if (lifecycle) {
                lifecycle.call(this);
            }
        };
        /**
         * @return {?}
         */
        SuiPopupController.prototype.close = /**
         * @return {?}
         */
        function () {
            // Cancel the opening timer to stop the popup opening after close has been called.
            clearTimeout(this._openingTimeout);
            if (this._componentRef) {
                // Start popup close transition.
                this.popup.close();
            }
            // Call lifecyle hook
            var /** @type {?} */ lifecycle = this.popupOnClose;
            if (lifecycle) {
                lifecycle.call(this);
            }
        };
        /**
         * @return {?}
         */
        SuiPopupController.prototype.toggleDelayed = /**
         * @return {?}
         */
        function () {
            // If the popup hasn't been created, or it has but it isn't currently open, open the popup.
            if (!this._componentRef || (this._componentRef && !this.popup.isOpen)) {
                return this.openDelayed();
            }
            // O'wise, close it.
            return this.close();
        };
        /**
         * @return {?}
         */
        SuiPopupController.prototype.toggle = /**
         * @return {?}
         */
        function () {
            // If the popup hasn't been created, or it has but it isn't currently open, open the popup.
            if (!this._componentRef || (this._componentRef && !this.popup.isOpen)) {
                return this.open();
            }
            // O'wise, close it.
            return this.close();
        };
        /**
         * @return {?}
         */
        SuiPopupController.prototype.onMouseEnter = /**
         * @return {?}
         */
        function () {
            if (this.popup.config.trigger === PopupTrigger.Hover) {
                this.openDelayed();
            }
        };
        /**
         * @return {?}
         */
        SuiPopupController.prototype.onMouseLeave = /**
         * @return {?}
         */
        function () {
            if (this.popup.config.trigger === PopupTrigger.Hover) {
                this.close();
            }
        };
        /**
         * @return {?}
         */
        SuiPopupController.prototype.onClick = /**
         * @return {?}
         */
        function () {
            if (this.popup.config.trigger === PopupTrigger.Click ||
                this.popup.config.trigger === PopupTrigger.OutsideClick) {
                // Repeated clicks require a toggle, rather than just opening the popup each time.
                this.toggleDelayed();
            }
            else if (this.popup.config.trigger === PopupTrigger.Focus &&
                (!this._componentRef || (this._componentRef && !this.popup.isOpen))) {
                // Repeated clicks with a focus trigger requires an open (as focus isn't ever lost on repeated click).
                this.openDelayed();
            }
        };
        /**
         * @param {?} e
         * @return {?}
         */
        SuiPopupController.prototype.onDocumentClick = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            // If the popup trigger is outside click,
            if (this._componentRef && this.popup.config.trigger === PopupTrigger.OutsideClick) {
                var /** @type {?} */ target = e.target;
                // Close the popup if the click is outside of the popup element.
                if (!this._element.nativeElement.contains(target)) {
                    this.close();
                }
            }
        };
        /**
         * @return {?}
         */
        SuiPopupController.prototype.onFocusIn = /**
         * @return {?}
         */
        function () {
            if (this.popup.config.trigger === PopupTrigger.Focus) {
                this.openDelayed();
            }
        };
        /**
         * @param {?} e
         * @return {?}
         */
        SuiPopupController.prototype.onFocusOut = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (!this._element.nativeElement.contains(e.relatedTarget) &&
                !this.popup.elementRef.nativeElement.contains(e.relatedTarget) &&
                this.popup.config.trigger === PopupTrigger.Focus) {
                this.close();
            }
        };
        /**
         * @return {?}
         */
        SuiPopupController.prototype.cleanup = /**
         * @return {?}
         */
        function () {
            clearTimeout(this._openingTimeout);
            if (this._componentRef.instance && this._componentRef.instance.positioningService) {
                this._componentRef.instance.positioningService.destroy();
            }
            this._componentFactory.detachFromApplication(this._componentRef);
            if (this._documentListener) {
                this._documentListener();
            }
        };
        /**
         * @return {?}
         */
        SuiPopupController.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.cleanup();
        };
        SuiPopupController.propDecorators = {
            onMouseEnter: [{ type: core.HostListener, args: ["mouseenter",] }],
            onMouseLeave: [{ type: core.HostListener, args: ["mouseleave",] }],
            onClick: [{ type: core.HostListener, args: ["click",] }],
            onFocusIn: [{ type: core.HostListener, args: ["focusin",] }],
            onFocusOut: [{ type: core.HostListener, args: ["focusout", ["$event"],] }]
        };
        return SuiPopupController;
    }());
    function SuiPopupController_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiPopupController.prototype._componentRef;
        /** @type {?} */
        SuiPopupController.prototype._openingTimeout;
        /** @type {?} */
        SuiPopupController.prototype._documentListener;
        /** @type {?} */
        SuiPopupController.prototype._renderer;
        /** @type {?} */
        SuiPopupController.prototype._element;
        /** @type {?} */
        SuiPopupController.prototype._componentFactory;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T
     */
    var   /**
     * @template T
     */
    SuiPopupComponentController = /** @class */ (function (_super) {
        __extends(SuiPopupComponentController, _super);
        function SuiPopupComponentController(renderer, element, componentFactory, _component, config) {
            var _this = _super.call(this, renderer, element, componentFactory, config) || this;
            _this._component = _component;
            return _this;
        }
        Object.defineProperty(SuiPopupComponentController.prototype, "componentInstance", {
            get: /**
             * @return {?}
             */
            function () {
                if (this._contentComponentRef) {
                    return this._contentComponentRef.instance;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SuiPopupComponentController.prototype.open = /**
         * @return {?}
         */
        function () {
            if (!this._contentComponentRef) {
                this._contentComponentRef = this._componentFactory.createComponent(this._component);
                this._componentFactory.attachToView(this._contentComponentRef, this.popup.templateSibling);
            }
            _super.prototype.open.call(this);
        };
        /**
         * @return {?}
         */
        SuiPopupComponentController.prototype.cleanup = /**
         * @return {?}
         */
        function () {
            _super.prototype.cleanup.call(this);
            if (this._contentComponentRef) {
                this._contentComponentRef.destroy();
                this._contentComponentRef = undefined;
            }
        };
        return SuiPopupComponentController;
    }(SuiPopupController));
    function SuiPopupComponentController_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiPopupComponentController.prototype._contentComponentRef;
        /** @type {?} */
        SuiPopupComponentController.prototype._component;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ templateRef = core.TemplateRef;
    /**
     * @record
     * @template T
     */
    function ITemplatePopupContext() { }
    function ITemplatePopupContext_tsickle_Closure_declarations() {
        /** @type {?|undefined} */
        ITemplatePopupContext.prototype.context;
    }
    /**
     * @record
     * @template T
     */
    function ITemplatePopupConfig() { }
    function ITemplatePopupConfig_tsickle_Closure_declarations() {
        /** @type {?|undefined} */
        ITemplatePopupConfig.prototype.template;
        /** @type {?|undefined} */
        ITemplatePopupConfig.prototype.context;
    }
    /**
     * @template T
     */
    var /**
     * @template T
     */
    TemplatePopupConfig = /** @class */ (function (_super) {
        __extends(TemplatePopupConfig, _super);
        function TemplatePopupConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return TemplatePopupConfig;
    }(PopupConfig));
    function TemplatePopupConfig_tsickle_Closure_declarations() {
        /** @type {?} */
        TemplatePopupConfig.prototype.template;
        /** @type {?} */
        TemplatePopupConfig.prototype.context;
    }
    /**
     * @template T
     */
    var   /**
     * @template T
     */
    SuiPopupTemplateController = /** @class */ (function (_super) {
        __extends(SuiPopupTemplateController, _super);
        function SuiPopupTemplateController(renderer, element, componentFactory, config) {
            return _super.call(this, renderer, element, componentFactory, config) || this;
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        SuiPopupTemplateController.prototype.configure = /**
         * @param {?=} config
         * @return {?}
         */
        function (config) {
            _super.prototype.configure.call(this, config);
            if (config) {
                this.template = config.template;
                this.context = config.context;
            }
        };
        /**
         * @return {?}
         */
        SuiPopupTemplateController.prototype.open = /**
         * @return {?}
         */
        function () {
            // If there is a template, inject it into the view.
            if (this.template) {
                this.popup.templateSibling.clear();
                this._componentFactory.createView(this.popup.templateSibling, this.template, {
                    $implicit: this.popup,
                    context: this.context
                });
            }
            _super.prototype.open.call(this);
        };
        return SuiPopupTemplateController;
    }(SuiPopupController));
    function SuiPopupTemplateController_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiPopupTemplateController.prototype.template;
        /** @type {?} */
        SuiPopupTemplateController.prototype.context;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiPopupArrow = /** @class */ (function () {
        function SuiPopupArrow() {
        }
        Object.defineProperty(SuiPopupArrow.prototype, "direction", {
            get: /**
             * @return {?}
             */
            function () {
                if (this.placement) {
                    return this.placement.split(" ").shift();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiPopupArrow.prototype, "alignment", {
            get: /**
             * @return {?}
             */
            function () {
                if (this.placement) {
                    var /** @type {?} */ alignment = this.placement.split(" ").pop();
                    if (alignment === this.direction) {
                        return "center";
                    }
                    return alignment;
                }
            },
            enumerable: true,
            configurable: true
        });
        SuiPopupArrow.decorators = [
            { type: core.Component, args: [{
                        selector: "sui-popup-arrow",
                        template: "\n<div class=\"dynamic arrow\" [attr.direction]=\"direction\" *ngIf=\"alignment == 'center'\"></div>\n<div class=\"static arrow\" [attr.direction]=\"direction\" [attr.alignment]=\"alignment\" *ngIf=\"alignment != 'center'\"></div>\n",
                        styles: ["\n.arrow {\n    position: absolute;\n    width: 0.71428571em;\n    height: 0.71428571em;\n    background: #ffffff;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n    z-index: 2;\n}\n\n:host.inverted .arrow {\n    background: #1b1c1d;\n}\n\n.arrow[direction=\"top\"] {\n    bottom: -0.30714286em;\n    box-shadow: 1px 1px 0 0 #bababc;\n}\n\n.arrow[direction=\"left\"] {\n    right: -0.30714286em;\n    box-shadow: 1px -1px 1px 0 #bababc;\n}\n\n.arrow[direction=\"bottom\"] {\n    top: -0.30714286em;\n    box-shadow: -1px -1px 0 0 #bababc;\n}\n\n.arrow[direction=\"right\"] {\n    left: -0.30714286em;\n    box-shadow: -1px 1px 1px 0 #bababc;\n}\n\n.static.arrow[direction=\"bottom\"][alignment=\"left\"],\n.static.arrow[direction=\"top\"][alignment=\"left\"] {\n    left: 1em;\n    right: auto;\n}\n\n.static.arrow[direction=\"left\"][alignment=\"top\"],\n.static.arrow[direction=\"right\"][alignment=\"top\"] {\n    top: 1em;\n    bottom: auto;\n}\n\n.static.arrow[direction=\"bottom\"][alignment=\"right\"],\n.static.arrow[direction=\"top\"][alignment=\"right\"] {\n    left: auto;\n    right: 1em;\n}\n\n.static.arrow[direction=\"left\"][alignment=\"bottom\"],\n.static.arrow[direction=\"right\"][alignment=\"bottom\"] {\n    top: auto;\n    bottom: 1em;\n}\n"]
                    }] }
        ];
        SuiPopupArrow.propDecorators = {
            placement: [{ type: core.Input }],
            inverted: [{ type: core.HostBinding, args: ["class.inverted",] }, { type: core.Input }]
        };
        return SuiPopupArrow;
    }());
    function SuiPopupArrow_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiPopupArrow.prototype.placement;
        /** @type {?} */
        SuiPopupArrow.prototype.inverted;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiPopupConfig = /** @class */ (function (_super) {
        __extends(SuiPopupConfig, _super);
        function SuiPopupConfig() {
            // We use an empty constructor to ensure Angular DI works correctly.
            return _super.call(this) || this;
        }
        SuiPopupConfig.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        SuiPopupConfig.ctorParameters = function () { return []; };
        return SuiPopupConfig;
    }(PopupConfig));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ templateRef$1 = core.TemplateRef;
    /**
     * @template T
     */
    var SuiPopupDirective = /** @class */ (function (_super) {
        __extends(SuiPopupDirective, _super);
        function SuiPopupDirective(renderer, element, componentFactory, popupDefaults) {
            return _super.call(this, renderer, element, componentFactory, new PopupConfig(popupDefaults)) || this;
        }
        Object.defineProperty(SuiPopupDirective.prototype, "popupHeader", {
            set: /**
             * @param {?} header
             * @return {?}
             */
            function (header) {
                this.popup.config.header = header;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiPopupDirective.prototype, "popupText", {
            set: /**
             * @param {?} text
             * @return {?}
             */
            function (text) {
                this.popup.config.text = text;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiPopupDirective.prototype, "popupInverted", {
            set: /**
             * @param {?} inverted
             * @return {?}
             */
            function (inverted) {
                this.popup.config.isInverted = Util.DOM.parseBooleanAttribute(inverted);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiPopupDirective.prototype, "popupBasic", {
            set: /**
             * @param {?} basic
             * @return {?}
             */
            function (basic) {
                this.popup.config.isBasic = Util.DOM.parseBooleanAttribute(basic);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiPopupDirective.prototype, "popupInline", {
            set: /**
             * @param {?} inline
             * @return {?}
             */
            function (inline) {
                this.popup.config.isInline = Util.DOM.parseBooleanAttribute(inline);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiPopupDirective.prototype, "popupFlowing", {
            set: /**
             * @param {?} flowing
             * @return {?}
             */
            function (flowing) {
                this.popup.config.isFlowing = Util.DOM.parseBooleanAttribute(flowing);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiPopupDirective.prototype, "popupTransition", {
            set: /**
             * @param {?} transition
             * @return {?}
             */
            function (transition) {
                this.popup.config.transition = transition;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiPopupDirective.prototype, "popupTransitionDuration", {
            set: /**
             * @param {?} duration
             * @return {?}
             */
            function (duration) {
                this.popup.config.transitionDuration = duration;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiPopupDirective.prototype, "popupPlacement", {
            set: /**
             * @param {?} placement
             * @return {?}
             */
            function (placement) {
                this.popup.config.placement = placement;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiPopupDirective.prototype, "popupWidth", {
            set: /**
             * @param {?} width
             * @return {?}
             */
            function (width) {
                this.popup.config.width = width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiPopupDirective.prototype, "popupSize", {
            set: /**
             * @param {?} size
             * @return {?}
             */
            function (size) {
                this.popup.config.size = size;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiPopupDirective.prototype, "popupDelay", {
            set: /**
             * @param {?} delay
             * @return {?}
             */
            function (delay) {
                this.popup.config.delay = delay;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiPopupDirective.prototype, "popupTrigger", {
            get: /**
             * @return {?}
             */
            function () {
                return this.popup.config.trigger;
            },
            set: /**
             * @param {?} trigger
             * @return {?}
             */
            function (trigger) {
                this.popup.config.trigger = trigger;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiPopupDirective.prototype, "popupTemplate", {
            set: /**
             * @param {?} template
             * @return {?}
             */
            function (template) {
                this.template = template;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiPopupDirective.prototype, "popupTemplateContext", {
            set: /**
             * @param {?} context
             * @return {?}
             */
            function (context) {
                this.context = context;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiPopupDirective.prototype, "popupConfig", {
            set: /**
             * @param {?} config
             * @return {?}
             */
            function (config) {
                this.configure(config);
            },
            enumerable: true,
            configurable: true
        });
        SuiPopupDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "[suiPopup]",
                        exportAs: "suiPopup"
                    },] }
        ];
        /** @nocollapse */
        SuiPopupDirective.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: SuiComponentFactory },
            { type: SuiPopupConfig }
        ]; };
        SuiPopupDirective.propDecorators = {
            popupHeader: [{ type: core.Input }],
            popupText: [{ type: core.Input }],
            popupInverted: [{ type: core.Input }],
            popupBasic: [{ type: core.Input }],
            popupInline: [{ type: core.Input }],
            popupFlowing: [{ type: core.Input }],
            popupTransition: [{ type: core.Input }],
            popupTransitionDuration: [{ type: core.Input }],
            popupPlacement: [{ type: core.Input }],
            popupWidth: [{ type: core.Input }],
            popupSize: [{ type: core.Input }],
            popupDelay: [{ type: core.Input }],
            popupTrigger: [{ type: core.Input }],
            popupTemplate: [{ type: core.Input }],
            popupTemplateContext: [{ type: core.Input }],
            popupConfig: [{ type: core.Input }]
        };
        return SuiPopupDirective;
    }(SuiPopupTemplateController));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiPopupModule = /** @class */ (function () {
        function SuiPopupModule() {
        }
        SuiPopupModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            SuiTransitionModule,
                            SuiUtilityModule
                        ],
                        declarations: [
                            SuiPopupDirective,
                            SuiPopupArrow,
                            SuiPopup
                        ],
                        exports: [
                            SuiPopupDirective,
                            SuiPopup
                        ],
                        providers: [
                            SuiPopupConfig
                        ],
                        entryComponents: [
                            SuiPopup
                        ]
                    },] }
        ];
        return SuiPopupModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiDatepickerDirective = /** @class */ (function (_super) {
        __extends(SuiDatepickerDirective, _super);
        function SuiDatepickerDirective(renderer, element, componentFactory, localizationService) {
            var _this = _super.call(this, renderer, element, componentFactory, SuiDatepicker, new PopupConfig({
                trigger: PopupTrigger.Focus,
                placement: PositioningPlacement.BottomLeft,
                transition: "scale",
                transitionDuration: 200
            })) || this;
            _this.localizationService = localizationService;
            // This ensures the popup is drawn correctly (i.e. no border).
            _this._renderer.addClass(_this.popup.elementRef.nativeElement, "ui");
            _this._renderer.addClass(_this.popup.elementRef.nativeElement, "calendar");
            _this.onLocaleUpdate();
            _this.localizationService.onLanguageUpdate.subscribe(function () { return _this.onLocaleUpdate(); });
            _this.onSelectedDateChange = new core.EventEmitter();
            _this.onValidatorChange = new core.EventEmitter();
            _this.mode = DatepickerMode.Datetime;
            return _this;
        }
        Object.defineProperty(SuiDatepickerDirective.prototype, "selectedDate", {
            get: /**
             * @return {?}
             */
            function () {
                return this._selectedDate;
            },
            set: /**
             * @param {?} date
             * @return {?}
             */
            function (date) {
                this._selectedDate = date;
                this.onSelectedDateChange.emit(date);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDatepickerDirective.prototype, "mode", {
            get: /**
             * @return {?}
             */
            function () {
                return this._mode;
            },
            set: /**
             * @param {?} mode
             * @return {?}
             */
            function (mode) {
                this._mode = mode || DatepickerMode.Datetime;
                switch (this._mode) {
                    case DatepickerMode.Year:
                        this.config = new YearConfig();
                        break;
                    case DatepickerMode.Month:
                        this.config = new MonthConfig();
                        break;
                    case DatepickerMode.Date:
                    default:
                        this.config = new DateConfig();
                        break;
                    case DatepickerMode.Datetime:
                        this.config = new DatetimeConfig();
                        break;
                    case DatepickerMode.Time:
                        this.config = new TimeConfig();
                        break;
                }
                this.writeValue(this.selectedDate);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDatepickerDirective.prototype, "localeValues", {
            get: /**
             * @return {?}
             */
            function () {
                return this.localizationService.override(this._localeValues, this.localeOverrides);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDatepickerDirective.prototype, "placement", {
            set: /**
             * @param {?} placement
             * @return {?}
             */
            function (placement) {
                this.popup.config.placement = placement;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDatepickerDirective.prototype, "transition", {
            set: /**
             * @param {?} transition
             * @return {?}
             */
            function (transition) {
                this.popup.config.transition = transition;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDatepickerDirective.prototype, "transitionDuration", {
            set: /**
             * @param {?} duration
             * @return {?}
             */
            function (duration) {
                this.popup.config.transitionDuration = duration;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SuiDatepickerDirective.prototype.popupOnOpen = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.componentInstance) {
                this.componentInstance.service.config = this.config;
                this.componentInstance.service.localeValues = this.localeValues;
                this.componentInstance.service.currentDate = this.initialDate || new Date();
                this.componentInstance.service.selectedDate = this.selectedDate;
                this.componentInstance.service.maxDate = this.maxDate;
                this.componentInstance.service.minDate = this.minDate;
                if (this.firstDayOfWeek != undefined) {
                    this.componentInstance.service.firstDayOfWeek = this.firstDayOfWeek;
                }
                this.componentInstance.service.reset();
                this.componentInstance.service.onDateChange.subscribe(function (d) {
                    _this.selectedDate = d;
                    _this.close();
                });
            }
        };
        /**
         * @param {?} __0
         * @return {?}
         */
        SuiDatepickerDirective.prototype.ngOnChanges = /**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var maxDate = _a.maxDate, minDate = _a.minDate, mode = _a.mode;
            if (maxDate || minDate || mode) {
                this.onValidatorChange.emit();
            }
        };
        /**
         * @return {?}
         */
        SuiDatepickerDirective.prototype.onLocaleUpdate = /**
         * @return {?}
         */
        function () {
            this._localeValues = this.localizationService.get().datepicker;
        };
        /**
         * @param {?} c
         * @return {?}
         */
        SuiDatepickerDirective.prototype.validate = /**
         * @param {?} c
         * @return {?}
         */
        function (c) {
            var /** @type {?} */ value = c.value;
            if (value != undefined) {
                // We post process the min & max date because sometimes this puts the date outside of the allowed range.
                if (this.minDate && value < this.minDate) {
                    return { suiMinDate: { required: this.minDate, actual: value } };
                }
                if (this.maxDate && value > this.maxDate) {
                    return { suiMaxDate: { required: this.maxDate, actual: value } };
                }
            }
            // Angular expects null
            // tslint:disable-next-line:no-null-keyword
            return null;
        };
        /**
         * @param {?} value
         * @return {?}
         */
        SuiDatepickerDirective.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.selectedDate = value;
            if (this.componentInstance) {
                this.componentInstance.service.selectedDate = value;
            }
        };
        /**
         * @param {?} e
         * @return {?}
         */
        SuiDatepickerDirective.prototype.onKeyDown = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (e.keyCode === KeyCode.Escape) {
                this.close();
            }
        };
        SuiDatepickerDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "[suiDatepicker]",
                        providers: [customValidatorFactory(SuiDatepickerDirective)]
                    },] }
        ];
        /** @nocollapse */
        SuiDatepickerDirective.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: SuiComponentFactory },
            { type: SuiLocalizationService }
        ]; };
        SuiDatepickerDirective.propDecorators = {
            mode: [{ type: core.Input, args: ["pickerMode",] }],
            initialDate: [{ type: core.Input, args: ["pickerInitialDate",] }],
            maxDate: [{ type: core.Input, args: ["pickerMaxDate",] }],
            minDate: [{ type: core.Input, args: ["pickerMinDate",] }],
            firstDayOfWeek: [{ type: core.Input, args: ["pickerFirstDayOfWeek",] }],
            localeOverrides: [{ type: core.Input, args: ["pickerLocaleOverrides",] }],
            placement: [{ type: core.Input, args: ["pickerPlacement",] }],
            transition: [{ type: core.Input, args: ["pickerTransition",] }],
            transitionDuration: [{ type: core.Input, args: ["pickerTransitionDuration",] }],
            onSelectedDateChange: [{ type: core.Output, args: ["pickerSelectedDateChange",] }],
            onValidatorChange: [{ type: core.Output, args: ["pickerValidatorChange",] }],
            onKeyDown: [{ type: core.HostListener, args: ["keydown", ["$event"],] }]
        };
        return SuiDatepickerDirective;
    }(SuiPopupComponentController));
    function SuiDatepickerDirective_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiDatepickerDirective.prototype._selectedDate;
        /** @type {?} */
        SuiDatepickerDirective.prototype._mode;
        /** @type {?} */
        SuiDatepickerDirective.prototype.config;
        /** @type {?} */
        SuiDatepickerDirective.prototype.initialDate;
        /** @type {?} */
        SuiDatepickerDirective.prototype.maxDate;
        /** @type {?} */
        SuiDatepickerDirective.prototype.minDate;
        /** @type {?} */
        SuiDatepickerDirective.prototype.firstDayOfWeek;
        /** @type {?} */
        SuiDatepickerDirective.prototype._localeValues;
        /** @type {?} */
        SuiDatepickerDirective.prototype.localeOverrides;
        /** @type {?} */
        SuiDatepickerDirective.prototype.onSelectedDateChange;
        /** @type {?} */
        SuiDatepickerDirective.prototype.onValidatorChange;
        /** @type {?} */
        SuiDatepickerDirective.prototype.localizationService;
    }
    var SuiDatepickerDirectiveValueAccessor = /** @class */ (function (_super) {
        __extends(SuiDatepickerDirectiveValueAccessor, _super);
        function SuiDatepickerDirectiveValueAccessor(host) {
            var _this = _super.call(this, host) || this;
            _this.host = host;
            return _this;
        }
        SuiDatepickerDirectiveValueAccessor.decorators = [
            { type: core.Directive, args: [{
                        selector: "[suiDatepicker]",
                        host: { "(pickerSelectedDateChange)": "onChange($event)" },
                        providers: [customValueAccessorFactory(SuiDatepickerDirectiveValueAccessor)]
                    },] }
        ];
        /** @nocollapse */
        SuiDatepickerDirectiveValueAccessor.ctorParameters = function () { return [
            { type: SuiDatepickerDirective }
        ]; };
        return SuiDatepickerDirectiveValueAccessor;
    }(CustomValueAccessor));
    function SuiDatepickerDirectiveValueAccessor_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiDatepickerDirectiveValueAccessor.prototype.host;
    }
    var SuiDatepickerDirectiveValidator = /** @class */ (function (_super) {
        __extends(SuiDatepickerDirectiveValidator, _super);
        function SuiDatepickerDirectiveValidator(host) {
            var _this = _super.call(this, host) || this;
            _this.host = host;
            return _this;
        }
        SuiDatepickerDirectiveValidator.decorators = [
            { type: core.Directive, args: [{
                        selector: "[suiDatepicker]",
                        host: { "(pickerValidatorChange)": "onValidatorChange()" },
                        providers: [customValidatorFactory(SuiDatepickerDirectiveValidator)]
                    },] }
        ];
        /** @nocollapse */
        SuiDatepickerDirectiveValidator.ctorParameters = function () { return [
            { type: SuiDatepickerDirective }
        ]; };
        return SuiDatepickerDirectiveValidator;
    }(CustomValidator));
    function SuiDatepickerDirectiveValidator_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiDatepickerDirectiveValidator.prototype.host;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ isWebView = isUAWebView__default__default || isUAWebView__default;
    var SuiDatepickerInputDirective = /** @class */ (function () {
        function SuiDatepickerInputDirective(datepicker, valueAccessor, _renderer, _element, localizationService) {
            var _this = this;
            this.datepicker = datepicker;
            this.valueAccessor = valueAccessor;
            this._renderer = _renderer;
            this._element = _element;
            this.useNativeOnMobile = true;
            this.fallbackActive = false;
            // Whenever the datepicker value updates, update the input text alongside it.
            this.datepicker.onSelectedDateChange.subscribe(function () {
                return _this.updateValue(_this.selectedDateString);
            });
            localizationService.onLanguageUpdate.subscribe(function () {
                return _this.updateValue(_this.selectedDateString);
            });
        }
        Object.defineProperty(SuiDatepickerInputDirective.prototype, "useNativeOnMobile", {
            get: /**
             * @return {?}
             */
            function () {
                return this._useNativeOnMobile;
            },
            set: /**
             * @param {?} fallback
             * @return {?}
             */
            function (fallback) {
                this._useNativeOnMobile = fallback;
                var /** @type {?} */ isOnMobile = bowser.mobile || bowser.tablet || isWebView(navigator.userAgent);
                this.fallbackActive = this.useNativeOnMobile && isOnMobile;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDatepickerInputDirective.prototype, "fallbackActive", {
            get: /**
             * @return {?}
             */
            function () {
                return this._fallbackActive;
            },
            set: /**
             * @param {?} active
             * @return {?}
             */
            function (active) {
                this._fallbackActive = active;
                // If the fallback is active, then the trigger must be manual so the datepicker never opens.
                this.datepicker.popup.config.trigger = this.fallbackActive ? PopupTrigger.Manual : PopupTrigger.Focus;
                // Update the input value (this will insert the `T` as required).
                this.updateValue(this.selectedDateString);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDatepickerInputDirective.prototype, "parser", {
            get: /**
             * @return {?}
             */
            function () {
                if (this.fallbackActive) {
                    return new InternalDateParser(this.datepicker.mode, this.datepicker.localeValues);
                }
                return new DateParser(this.datepicker.localeValues.formats[this.datepicker.mode], this.datepicker.localeValues);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDatepickerInputDirective.prototype, "selectedDateString", {
            get: /**
             * @return {?}
             */
            function () {
                if (this.datepicker.selectedDate) {
                    return this.parser.format(this.datepicker.selectedDate);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDatepickerInputDirective.prototype, "type", {
            get: /**
             * @return {?}
             */
            function () {
                if (this.fallbackActive) {
                    return this.datepicker.config.fallback;
                }
                return "text";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDatepickerInputDirective.prototype, "max", {
            get: /**
             * @return {?}
             */
            function () {
                if (this.fallbackActive && this.datepicker.maxDate) {
                    // Since HTML doesn't use a date object max is somewhat tricky.
                    // Our Datepicker will always choose the 1st date on the provided precision,
                    // meaning anything below the maxDate will work, hence endOf.
                    var /** @type {?} */ max = DateUtil.endOf(this.datepicker.config.precision, DateUtil.clone(this.datepicker.maxDate));
                    return this.parser.format(max);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDatepickerInputDirective.prototype, "min", {
            get: /**
             * @return {?}
             */
            function () {
                if (this.fallbackActive && this.datepicker.minDate) {
                    // Since HTML doesn't use a date object min is somewhat tricky.
                    // We use 1 minute before the next date at the configured precision since
                    // our Datepicker picks the first available date at that precision.
                    var /** @type {?} */ min = DateUtil.clone(this.datepicker.minDate);
                    return this.parser.format(min);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} value
         * @return {?}
         */
        SuiDatepickerInputDirective.prototype.updateValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // Only update the current value if it is different to what it's being updated to.
            // This is so that the editing position isn't changed when manually typing the date.
            if (!this._lastUpdateTyped) {
                this._renderer.setProperty(this._element.nativeElement, "value", value || "");
            }
            this._lastUpdateTyped = false;
        };
        /**
         * @param {?} value
         * @return {?}
         */
        SuiDatepickerInputDirective.prototype.typeValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._lastUpdateTyped = true;
            this._currentInputValue = value;
            if (!value) {
                // Delete the selected date if no date was entered manually.
                return this.datepicker.writeValue(undefined);
            }
            var /** @type {?} */ parsed = this.parser.parse(value, this.datepicker.selectedDate);
            if (!isNaN(parsed.getTime()) && value === this.parser.format(parsed)) {
                return this.datepicker.writeValue(parsed);
            }
            return this.datepicker.writeValue(undefined);
        };
        /**
         * @return {?}
         */
        SuiDatepickerInputDirective.prototype.onFocusOut = /**
         * @return {?}
         */
        function () {
            this.valueAccessor.onTouched();
        };
        SuiDatepickerInputDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "input[suiDatepicker]"
                    },] }
        ];
        /** @nocollapse */
        SuiDatepickerInputDirective.ctorParameters = function () { return [
            { type: SuiDatepickerDirective, decorators: [{ type: core.Host }] },
            { type: SuiDatepickerDirectiveValueAccessor, decorators: [{ type: core.Host }] },
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: SuiLocalizationService }
        ]; };
        SuiDatepickerInputDirective.propDecorators = {
            useNativeOnMobile: [{ type: core.Input, args: ["pickerUseNativeOnMobile",] }],
            type: [{ type: core.HostBinding, args: ["attr.type",] }],
            max: [{ type: core.HostBinding, args: ["attr.max",] }],
            min: [{ type: core.HostBinding, args: ["attr.min",] }],
            typeValue: [{ type: core.HostListener, args: ["input", ["$event.target.value"],] }],
            onFocusOut: [{ type: core.HostListener, args: ["focusout",] }]
        };
        return SuiDatepickerInputDirective;
    }());
    function SuiDatepickerInputDirective_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiDatepickerInputDirective.prototype._useNativeOnMobile;
        /** @type {?} */
        SuiDatepickerInputDirective.prototype._fallbackActive;
        /** @type {?} */
        SuiDatepickerInputDirective.prototype._currentInputValue;
        /** @type {?} */
        SuiDatepickerInputDirective.prototype._lastUpdateTyped;
        /** @type {?} */
        SuiDatepickerInputDirective.prototype.datepicker;
        /** @type {?} */
        SuiDatepickerInputDirective.prototype.valueAccessor;
        /** @type {?} */
        SuiDatepickerInputDirective.prototype._renderer;
        /** @type {?} */
        SuiDatepickerInputDirective.prototype._element;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CalendarRangeDateService = /** @class */ (function (_super) {
        __extends(CalendarRangeDateService, _super);
        function CalendarRangeDateService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} start
         * @return {?}
         */
        CalendarRangeDateService.prototype.calcStart = /**
         * @param {?} start
         * @return {?}
         */
        function (start) {
            var /** @type {?} */ monthStart = DateUtil.startOf(DatePrecision.Month, DateUtil.clone(start));
            monthStart.setDate((1 - monthStart.getDay() + this.service.firstDayOfWeek - 7) % 7);
            return monthStart;
        };
        /**
         * @param {?} item
         * @param {?} baseDate
         * @return {?}
         */
        CalendarRangeDateService.prototype.configureItem = /**
         * @param {?} item
         * @param {?} baseDate
         * @return {?}
         */
        function (item, baseDate) {
            item.humanReadable = item.date.getDate().toString();
            item.isOutsideRange = item.date.getMonth() !== baseDate.getMonth();
            item.isSelectable = item.isDisabled;
        };
        return CalendarRangeDateService;
    }(CalendarRangeService));
    var SuiCalendarDateView = /** @class */ (function (_super) {
        __extends(SuiCalendarDateView, _super);
        function SuiCalendarDateView(renderer) {
            return _super.call(this, renderer, CalendarViewType.Date, new CalendarRangeDateService(DatePrecision.Month, 6, 7)) || this;
        }
        Object.defineProperty(SuiCalendarDateView.prototype, "days", {
            get: /**
             * @return {?}
             */
            function () {
                var _this = this;
                var /** @type {?} */ days = this.service.localeValues.weekdaysNarrow;
                return days.map(function (d, i) { return days[(i + _this.service.firstDayOfWeek) % days.length]; });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiCalendarDateView.prototype, "date", {
            get: /**
             * @return {?}
             */
            function () {
                return new DateParser(this.service.localeValues.formats.month, this.service.localeValues).format(this.currentDate);
            },
            enumerable: true,
            configurable: true
        });
        SuiCalendarDateView.decorators = [
            { type: core.Component, args: [{
                        selector: "sui-calendar-date-view",
                        template: "\n<table class=\"ui celled center aligned unstackable table seven column day\">\n<thead>\n    <tr>\n        <th colspan=\"7\">\n            <sui-calendar-view-title [ranges]=\"ranges\" (zoomOut)=\"zoomOut()\">\n                {{ date }}\n            </sui-calendar-view-title>\n        </th>\n    </tr>\n    <tr>\n        <th *ngFor=\"let day of days\">{{ day }}</th>\n    </tr>\n</thead>\n<tbody>\n    <tr *ngFor=\"let group of ranges.current.groupedItems\">\n        <td class=\"link\"\n            *ngFor=\"let item of group\"\n            [calendarItem]=\"item\"\n            (click)=\"setDate(item)\">{{ item.humanReadable }}\n        </td>\n    </tr>\n</tbody>\n</table>\n"
                    }] }
        ];
        /** @nocollapse */
        SuiCalendarDateView.ctorParameters = function () { return [
            { type: core.Renderer2 }
        ]; };
        return SuiCalendarDateView;
    }(CalendarView));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CalendarRangeHourService = /** @class */ (function (_super) {
        __extends(CalendarRangeHourService, _super);
        function CalendarRangeHourService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} item
         * @param {?} baseDate
         * @return {?}
         */
        CalendarRangeHourService.prototype.configureItem = /**
         * @param {?} item
         * @param {?} baseDate
         * @return {?}
         */
        function (item, baseDate) {
            // Set minutes and seconds to 0
            var /** @type {?} */ customFormat = this.service.localeValues.formats.time.replace(/[ms]/g, "0");
            item.humanReadable = new DateParser(customFormat, this.service.localeValues).format(item.date);
            item.isOutsideRange = false;
        };
        return CalendarRangeHourService;
    }(CalendarRangeService));
    var SuiCalendarHourView = /** @class */ (function (_super) {
        __extends(SuiCalendarHourView, _super);
        function SuiCalendarHourView(renderer) {
            return _super.call(this, renderer, CalendarViewType.Hour, new CalendarRangeHourService(DatePrecision.Date, 6, 4)) || this;
        }
        Object.defineProperty(SuiCalendarHourView.prototype, "date", {
            get: /**
             * @return {?}
             */
            function () {
                return new DateParser(this.service.localeValues.formats.date, this.service.localeValues).format(this.currentDate);
            },
            enumerable: true,
            configurable: true
        });
        SuiCalendarHourView.decorators = [
            { type: core.Component, args: [{
                        selector: "sui-calendar-hour-view",
                        template: "\n<table class=\"ui celled center aligned unstackable table four column hour\">\n<thead *ngIf=\"service.config.mode != 1\">\n    <tr>\n        <th colspan=\"4\">\n            <sui-calendar-view-title [ranges]=\"ranges\" (zoomOut)=\"zoomOut()\">\n                {{ date }}\n            </sui-calendar-view-title>\n        </th>\n    </tr>\n</thead>\n<tbody>\n    <tr *ngFor=\"let group of ranges.current.groupedItems\">\n        <td class=\"link\"\n            *ngFor=\"let item of group\"\n            [calendarItem]=\"item\"\n            (click)=\"setDate(item)\">{{ item.humanReadable }}\n        </td>\n    </tr>\n</tbody>\n</table>\n"
                    }] }
        ];
        /** @nocollapse */
        SuiCalendarHourView.ctorParameters = function () { return [
            { type: core.Renderer2 }
        ]; };
        return SuiCalendarHourView;
    }(CalendarView));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CalendarRangeMinuteService = /** @class */ (function (_super) {
        __extends(CalendarRangeMinuteService, _super);
        function CalendarRangeMinuteService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} start
         * @return {?}
         */
        CalendarRangeMinuteService.prototype.calcStart = /**
         * @param {?} start
         * @return {?}
         */
        function (start) {
            return DateUtil.startOf(DatePrecision.Hour, DateUtil.clone(start), true);
        };
        /**
         * @param {?} start
         * @return {?}
         */
        CalendarRangeMinuteService.prototype.calcDates = /**
         * @param {?} start
         * @return {?}
         */
        function (start) {
            return Util.Array
                .range(this.length)
                .map(function (i) { return DateUtil.add(DatePrecision.Minute, DateUtil.clone(start), i * 5); });
        };
        /**
         * @param {?} item
         * @param {?} baseDate
         * @return {?}
         */
        CalendarRangeMinuteService.prototype.configureItem = /**
         * @param {?} item
         * @param {?} baseDate
         * @return {?}
         */
        function (item, baseDate) {
            item.humanReadable = new DateParser(this.service.localeValues.formats.time, this.service.localeValues).format(item.date);
            item.isOutsideRange = false;
        };
        return CalendarRangeMinuteService;
    }(CalendarRangeService));
    var SuiCalendarMinuteView = /** @class */ (function (_super) {
        __extends(SuiCalendarMinuteView, _super);
        function SuiCalendarMinuteView(renderer) {
            return _super.call(this, renderer, CalendarViewType.Minute, new CalendarRangeMinuteService(DatePrecision.Hour, 4, 3)) || this;
        }
        Object.defineProperty(SuiCalendarMinuteView.prototype, "date", {
            get: /**
             * @return {?}
             */
            function () {
                if (this.service.config.mode !== CalendarMode.TimeOnly) {
                    // Set minutes and seconds to 0
                    var /** @type {?} */ dateTimeFormat = this.service.localeValues.formats.datetime.replace(/[ms]/g, "0");
                    return new DateParser(dateTimeFormat, this.service.localeValues).format(this.currentDate);
                }
                else {
                    // Set minutes and seconds to 0
                    var /** @type {?} */ timeFormat = this.service.localeValues.formats.time.replace(/[ms]/g, "0");
                    return new DateParser(timeFormat, this.service.localeValues).format(this.currentDate);
                }
            },
            enumerable: true,
            configurable: true
        });
        SuiCalendarMinuteView.decorators = [
            { type: core.Component, args: [{
                        selector: "sui-calendar-minute-view",
                        template: "\n<table class=\"ui celled center aligned unstackable table three column minute\">\n<thead>\n    <tr>\n        <th colspan=\"4\">\n            <sui-calendar-view-title [ranges]=\"ranges\" (zoomOut)=\"zoomOut()\">\n                {{ date }}\n            </sui-calendar-view-title>\n        </th>\n    </tr>\n</thead>\n<tbody>\n    <tr *ngFor=\"let group of ranges.current.groupedItems\">\n        <td class=\"link\"\n            *ngFor=\"let item of group\"\n            [calendarItem]=\"item\"\n            (click)=\"setDate(item)\">{{ item.humanReadable }}\n        </td>\n    </tr>\n</tbody>\n</table>\n"
                    }] }
        ];
        /** @nocollapse */
        SuiCalendarMinuteView.ctorParameters = function () { return [
            { type: core.Renderer2 }
        ]; };
        return SuiCalendarMinuteView;
    }(CalendarView));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CalendarRangeMonthService = /** @class */ (function (_super) {
        __extends(CalendarRangeMonthService, _super);
        function CalendarRangeMonthService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} item
         * @param {?} baseDate
         * @return {?}
         */
        CalendarRangeMonthService.prototype.configureItem = /**
         * @param {?} item
         * @param {?} baseDate
         * @return {?}
         */
        function (item, baseDate) {
            item.humanReadable = this.service.localeValues.monthsShort[item.date.getMonth()];
            item.isOutsideRange = false;
        };
        return CalendarRangeMonthService;
    }(CalendarRangeService));
    var SuiCalendarMonthView = /** @class */ (function (_super) {
        __extends(SuiCalendarMonthView, _super);
        function SuiCalendarMonthView(renderer) {
            return _super.call(this, renderer, CalendarViewType.Month, new CalendarRangeMonthService(DatePrecision.Year, 4, 3)) || this;
        }
        Object.defineProperty(SuiCalendarMonthView.prototype, "year", {
            get: /**
             * @return {?}
             */
            function () {
                return new DateParser(this.service.localeValues.formats.year, this.service.localeValues).format(this.currentDate);
            },
            enumerable: true,
            configurable: true
        });
        SuiCalendarMonthView.decorators = [
            { type: core.Component, args: [{
                        selector: "sui-calendar-month-view",
                        template: "\n<table class=\"ui celled center aligned unstackable table three column month\">\n<thead>\n    <tr>\n        <th colspan=\"3\">\n            <sui-calendar-view-title [ranges]=\"ranges\" (zoomOut)=\"zoomOut()\">\n                {{ year }}\n            </sui-calendar-view-title>\n        </th>\n    </tr>\n</thead>\n<tbody>\n    <tr *ngFor=\"let group of ranges.current.groupedItems\">\n        <td class=\"link\"\n            *ngFor=\"let item of group\"\n            [calendarItem]=\"item\"\n            (click)=\"setDate(item)\">{{ item.humanReadable }}\n        </td>\n    </tr>\n</tbody>\n</table>\n"
                    }] }
        ];
        /** @nocollapse */
        SuiCalendarMonthView.ctorParameters = function () { return [
            { type: core.Renderer2 }
        ]; };
        return SuiCalendarMonthView;
    }(CalendarView));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CalendarRangeYearService = /** @class */ (function (_super) {
        __extends(CalendarRangeYearService, _super);
        function CalendarRangeYearService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} item
         * @param {?} baseDate
         * @return {?}
         */
        CalendarRangeYearService.prototype.configureItem = /**
         * @param {?} item
         * @param {?} baseDate
         * @return {?}
         */
        function (item, baseDate) {
            item.humanReadable = Util.String.padLeft(item.date.getFullYear().toString(), 4, "0");
            item.isOutsideRange = item.date.getFullYear() >= this.calcStart(baseDate).getFullYear() + 10;
        };
        return CalendarRangeYearService;
    }(CalendarRangeService));
    var SuiCalendarYearView = /** @class */ (function (_super) {
        __extends(SuiCalendarYearView, _super);
        function SuiCalendarYearView(renderer) {
            return _super.call(this, renderer, CalendarViewType.Year, new CalendarRangeYearService(DatePrecision.Decade, 4, 3)) || this;
        }
        Object.defineProperty(SuiCalendarYearView.prototype, "decadeStart", {
            get: /**
             * @return {?}
             */
            function () {
                return DateUtil
                    .startOf(DatePrecision.Decade, DateUtil.clone(this.service.currentDate))
                    .getFullYear();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} year
         * @return {?}
         */
        SuiCalendarYearView.prototype.pad = /**
         * @param {?} year
         * @return {?}
         */
        function (year) {
            return Util.String.padLeft(year.toString(), 4, "0");
        };
        SuiCalendarYearView.decorators = [
            { type: core.Component, args: [{
                        selector: "sui-calendar-year-view",
                        template: "\n<table class=\"ui celled center aligned unstackable table three column year\">\n<thead>\n    <tr>\n        <th colspan=\"3\">\n            <sui-calendar-view-title [ranges]=\"ranges\" (zoomOut)=\"zoomOut()\">\n                {{ pad(decadeStart) }} - {{ pad(decadeStart + 10) }}\n            </sui-calendar-view-title>\n        </th>\n    </tr>\n</thead>\n<tbody>\n    <tr *ngFor=\"let group of ranges.current.groupedItems\">\n        <td class=\"link\"\n            *ngFor=\"let item of group\"\n            [calendarItem]=\"item\"\n            (click)=\"setDate(item)\">{{ item.humanReadable }}\n        </td>\n    </tr>\n</tbody>\n</table>\n"
                    }] }
        ];
        /** @nocollapse */
        SuiCalendarYearView.ctorParameters = function () { return [
            { type: core.Renderer2 }
        ]; };
        return SuiCalendarYearView;
    }(CalendarView));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiDatepickerModule = /** @class */ (function () {
        function SuiDatepickerModule() {
        }
        SuiDatepickerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            SuiPopupModule,
                            SuiLocalizationModule,
                            SuiUtilityModule
                        ],
                        declarations: [
                            SuiCalendarItem,
                            SuiCalendarViewTitle,
                            SuiCalendarYearView,
                            SuiCalendarMonthView,
                            SuiCalendarDateView,
                            SuiCalendarHourView,
                            SuiCalendarMinuteView,
                            SuiDatepicker,
                            SuiDatepickerDirective,
                            SuiDatepickerDirectiveValueAccessor,
                            SuiDatepickerDirectiveValidator,
                            SuiDatepickerInputDirective
                        ],
                        exports: [
                            SuiDatepickerDirective,
                            SuiDatepickerDirectiveValueAccessor,
                            SuiDatepickerDirectiveValidator,
                            SuiDatepickerInputDirective
                        ],
                        entryComponents: [
                            SuiDatepicker
                        ]
                    },] }
        ];
        return SuiDatepickerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiDimmer = /** @class */ (function (_super) {
        __extends(SuiDimmer, _super);
        function SuiDimmer(renderer, element, changeDetector) {
            var _this = _super.call(this, renderer, element, changeDetector) || this;
            _this._isDimmed = false;
            _this.isDimmedChange = new core.EventEmitter();
            _this.isClickable = true;
            _this.wrapContent = true;
            _this.hasClasses = true;
            return _this;
        }
        Object.defineProperty(SuiDimmer.prototype, "isDimmed", {
            get: /**
             * @return {?}
             */
            function () {
                return this._isDimmed;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                var /** @type {?} */ isDimmed = !!value;
                if (!this._transitionController) {
                    // Initialise transition functionality when first setting dimmed, to ensure initial state doesn't transition.
                    this._transitionController = new TransitionController(isDimmed, "block");
                    this.setTransitionController(this._transitionController);
                    this._isDimmed = isDimmed;
                }
                else if (this._isDimmed !== isDimmed) {
                    this._isDimmed = isDimmed;
                    this._transitionController.stopAll();
                    this._transitionController.animate(new Transition("fade", this.transitionDuration, isDimmed ? TransitionDirection.In : TransitionDirection.Out));
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SuiDimmer.prototype.onClick = /**
         * @return {?}
         */
        function () {
            if (this.isClickable) {
                this.isDimmed = false;
                this.isDimmedChange.emit(this.isDimmed);
            }
        };
        SuiDimmer.decorators = [
            { type: core.Component, args: [{
                        selector: "sui-dimmer",
                        template: "\n<div [class.content]=\"wrapContent\">\n    <ng-content></ng-content>\n</div>\n",
                        styles: ["\n:host.dimmer:not(.hidden) {\n    transition: none;\n    display: flex !important;\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        SuiDimmer.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef }
        ]; };
        SuiDimmer.propDecorators = {
            hasClasses: [{ type: core.HostBinding, args: ["class.ui",] }, { type: core.HostBinding, args: ["class.dimmer",] }],
            isDimmed: [{ type: core.HostBinding, args: ["class.active",] }, { type: core.Input }],
            isDimmedChange: [{ type: core.Output }],
            isClickable: [{ type: core.Input }],
            transition: [{ type: core.Input }],
            transitionDuration: [{ type: core.Input }],
            wrapContent: [{ type: core.Input }],
            onClick: [{ type: core.HostListener, args: ["click",] }]
        };
        return SuiDimmer;
    }(SuiTransition));
    function SuiDimmer_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiDimmer.prototype.hasClasses;
        /** @type {?} */
        SuiDimmer.prototype._transitionController;
        /** @type {?} */
        SuiDimmer.prototype._isDimmed;
        /** @type {?} */
        SuiDimmer.prototype.isDimmedChange;
        /** @type {?} */
        SuiDimmer.prototype.isClickable;
        /** @type {?} */
        SuiDimmer.prototype.transition;
        /** @type {?} */
        SuiDimmer.prototype.transitionDuration;
        /** @type {?} */
        SuiDimmer.prototype.wrapContent;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiDimmerModule = /** @class */ (function () {
        function SuiDimmerModule() {
        }
        SuiDimmerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            SuiTransitionModule
                        ],
                        declarations: [
                            SuiDimmer
                        ],
                        exports: [
                            SuiDimmer
                        ]
                    },] }
        ];
        return SuiDimmerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // Creates essentially a 'string' enum.
    var /** @type {?} */ DropdownAutoCloseType = {
        ItemClick: "itemClick",
        OutsideClick: "outsideClick",
        Disabled: "disabled"
    };
    var DropdownService = /** @class */ (function () {
        function DropdownService(autoCloseMode) {
            if (autoCloseMode === void 0) { autoCloseMode = DropdownAutoCloseType.ItemClick; }
            this.isOpen = false;
            this.isOpenChange = new core.EventEmitter();
            this.isDisabled = false;
            this.autoCloseMode = autoCloseMode;
            this.children = [];
        }
        Object.defineProperty(DropdownService.prototype, "isNested", {
            get: /**
             * @return {?}
             */
            function () {
                return !!this.parent;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} isOpen
         * @param {?=} reflectInParent
         * @return {?}
         */
        DropdownService.prototype.setOpenState = /**
         * @param {?} isOpen
         * @param {?=} reflectInParent
         * @return {?}
         */
        function (isOpen, reflectInParent) {
            var _this = this;
            if (reflectInParent === void 0) { reflectInParent = false; }
            if (this.isOpen !== isOpen && !this.isDisabled) {
                // Only update the state if it has changed, and the dropdown isn't disabled.
                this.isOpen = !!isOpen;
                this.isAnimating = true;
                // We must delay the emitting to avoid the 'changed after checked' Angular errors.
                this.delay(function () { return _this.isOpenChange.emit(_this.isOpen); });
                if (!this.isOpen) {
                    // Close the child dropdowns when this one closes.
                    this.children.forEach(function (c) { return c.setOpenState(_this.isOpen); });
                }
                if (this.parent && reflectInParent) {
                    // Open the parent dropdowns when this one opens.
                    this.parent.setOpenState(this.isOpen, true);
                }
            }
            else if (this.isOpen !== isOpen && this.isDisabled) {
                // If the state has changed, but the dropdown is disabled, re-emit the original isOpen value.
                this.delay(function () { return _this.isOpenChange.emit(_this.isOpen); });
            }
        };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        DropdownService.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) {
            if (this.isDisabled !== isDisabled) {
                if (!!isDisabled) {
                    // Close the dropdown as it is now disabled
                    this.setOpenState(false);
                }
                this.isDisabled = !!isDisabled;
            }
        };
        /**
         * @return {?}
         */
        DropdownService.prototype.toggleOpenState = /**
         * @return {?}
         */
        function () {
            this.setOpenState(!this.isOpen);
        };
        /**
         * @param {?} child
         * @return {?}
         */
        DropdownService.prototype.registerChild = /**
         * @param {?} child
         * @return {?}
         */
        function (child) {
            if (!this.isChildRegistered(child)) {
                this.children.push(child);
                child.parent = this;
            }
        };
        /**
         * @param {?} child
         * @return {?}
         */
        DropdownService.prototype.isChildRegistered = /**
         * @param {?} child
         * @return {?}
         */
        function (child) {
            return this === child || !!this.children
                .find(function (c) { return !!c.children
                .find(function (cChild) { return cChild.isChildRegistered(child); }); });
        };
        /**
         * @return {?}
         */
        DropdownService.prototype.clearChildren = /**
         * @return {?}
         */
        function () {
            this.children.forEach(function (c) {
                c.parent = undefined;
            });
            this.children = [];
        };
        /**
         * @param {?} callback
         * @return {?}
         */
        DropdownService.prototype.delay = /**
         * @param {?} callback
         * @return {?}
         */
        function (callback) {
            setTimeout(function () { return callback(); });
        };
        return DropdownService;
    }());
    function DropdownService_tsickle_Closure_declarations() {
        /** @type {?} */
        DropdownService.prototype.isOpen;
        /** @type {?} */
        DropdownService.prototype.isAnimating;
        /** @type {?} */
        DropdownService.prototype.isOpenChange;
        /** @type {?} */
        DropdownService.prototype.isDisabled;
        /** @type {?} */
        DropdownService.prototype.autoCloseMode;
        /** @type {?} */
        DropdownService.prototype.parent;
        /** @type {?} */
        DropdownService.prototype.children;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiDropdownMenuItem = /** @class */ (function () {
        function SuiDropdownMenuItem(_renderer, element) {
            this._renderer = _renderer;
            this.element = element;
            this.isSelected = false;
            this.selectedClass = "selected";
        }
        Object.defineProperty(SuiDropdownMenuItem.prototype, "isDisabled", {
            get: /**
             * @return {?}
             */
            function () {
                // We must use nativeElement as Angular doesn't have a way of reading class information.
                var /** @type {?} */ element = this.element.nativeElement;
                return element.classList.contains("disabled");
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDropdownMenuItem.prototype, "isSelected", {
            get: /**
             * @return {?}
             */
            function () {
                return this._isSelected;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                // Renderer is used to enable a dynamic class name.
                if (value) {
                    this._renderer.addClass(this.element.nativeElement, this.selectedClass);
                }
                else {
                    this._renderer.removeClass(this.element.nativeElement, this.selectedClass);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDropdownMenuItem.prototype, "hasChildDropdown", {
            get: /**
             * @return {?}
             */
            function () {
                return !!this.childDropdownMenu;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SuiDropdownMenuItem.prototype.performClick = /**
         * @return {?}
         */
        function () {
            // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
            this.element.nativeElement.click();
        };
        SuiDropdownMenuItem.decorators = [
            { type: core.Directive, args: [{
                        // We must attach to every '.item' as Angular doesn't support > selectors.
                        selector: ".item"
                    },] }
        ];
        /** @nocollapse */
        SuiDropdownMenuItem.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        SuiDropdownMenuItem.propDecorators = {
            childDropdownMenu: [{ type: core.ContentChild, args: [core.forwardRef(function () { return SuiDropdownMenu; }), { static: false },] }]
        };
        return SuiDropdownMenuItem;
    }());
    function SuiDropdownMenuItem_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiDropdownMenuItem.prototype._isSelected;
        /** @type {?} */
        SuiDropdownMenuItem.prototype.selectedClass;
        /** @type {?} */
        SuiDropdownMenuItem.prototype.childDropdownMenu;
        /** @type {?} */
        SuiDropdownMenuItem.prototype._renderer;
        /** @type {?} */
        SuiDropdownMenuItem.prototype.element;
    }
    var SuiDropdownMenu = /** @class */ (function (_super) {
        __extends(SuiDropdownMenu, _super);
        function SuiDropdownMenu(renderer, element, changeDetector) {
            var _this = _super.call(this, renderer, element, changeDetector) || this;
            // Initialise transition functionality.
            _this._transitionController = new TransitionController(false);
            _this.setTransitionController(_this._transitionController);
            _this.menuTransition = "slide down";
            _this.menuTransitionDuration = 200;
            _this.menuAutoSelectFirst = false;
            _this.menuSelectedItemClass = "selected";
            // In case the dropdown menu is destroyed before it has a chance to be fully initialised.
            _this._parentKeyDownListener = function () { };
            return _this;
        }
        Object.defineProperty(SuiDropdownMenu.prototype, "service", {
            get: /**
             * @return {?}
             */
            function () {
                return this._service;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                var _this = this;
                this._service = value;
                var /** @type {?} */ previousIsOpen = this._service.isOpen;
                this._service.isOpenChange.subscribe(function (isOpen) {
                    if (isOpen !== previousIsOpen) {
                        // Only run transitions if the open state has changed.
                        _this._transitionController.stopAll();
                        _this._transitionController.animate(new Transition(_this.menuTransition, _this.menuTransitionDuration, TransitionDirection.Either, function () { return _this._service.isAnimating = false; }));
                    }
                    if (!isOpen) {
                        // Reset the item selections when a nested item is selected to avoid incosistent open states.
                        if (_this.selectedItems.length > 1) {
                            _this.resetSelection();
                        }
                    }
                    previousIsOpen = isOpen;
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDropdownMenu.prototype, "parentElement", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                var _this = this;
                this._parentKeyDownListener = this._renderer
                    .listen(value.nativeElement, "keydown", function (e) {
                    return _this.onParentKeyDown(e);
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDropdownMenu.prototype, "items", {
            set: /**
             * @param {?} items
             * @return {?}
             */
            function (items) {
                this._itemsQueryOverride = items;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDropdownMenu.prototype, "_itemsQuery", {
            get: /**
             * @return {?}
             */
            function () {
                return this._itemsQueryOverride || this._itemsQueryInternal;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDropdownMenu.prototype, "_items", {
            get: /**
             * @return {?}
             */
            function () {
                return this._itemsQuery.filter(function (i) { return !i.isDisabled; });
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} e
         * @return {?}
         */
        SuiDropdownMenu.prototype.onClick = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (!e.eventHandled) {
                e.eventHandled = true;
                if (this._service.autoCloseMode === DropdownAutoCloseType.ItemClick) {
                    var /** @type {?} */ target = e.target;
                    if (this._element.nativeElement.contains(target.closest(".item")) && !/input|textarea/i.test(target.tagName)) {
                        // Once an item is selected, we can close the entire dropdown.
                        this._service.setOpenState(false, true);
                    }
                }
            }
        };
        /**
         * @param {?} e
         * @return {?}
         */
        SuiDropdownMenu.prototype.onParentKeyDown = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            // Only the root dropdown (i.e. not nested dropdowns) is responsible for keeping track of the currently selected item.
            if (this._service && this._service.isOpen && !this._service.isNested) {
                // Stop document events like scrolling while open.
                var /** @type {?} */ target = e.target;
                if (!/input/i.test(target.tagName) &&
                    [KeyCode.Escape, KeyCode.Enter, KeyCode.Up, KeyCode.Down, KeyCode.Left, KeyCode.Right].find(function (kC) { return kC === e.keyCode; })) {
                    e.preventDefault();
                }
                // Gets the top selected item from the stack.
                var _a = __read(this.selectedItems.slice(-1), 1), selected = _a[0];
                // Keeping track of the menu containing the currently selected element allows us to easily determine its siblings.
                var /** @type {?} */ selectedContainer = this;
                if (this.selectedItems.length >= 2) {
                    var _b = __read(this.selectedItems.slice(-2), 1), selectedParent = _b[0];
                    selectedContainer = selectedParent.childDropdownMenu;
                }
                switch (e.keyCode) {
                    // Escape : close the entire dropdown.
                    case KeyCode.Escape: {
                        this._service.setOpenState(false);
                        break;
                    }
                    // Down : select the next item below the current one, or the 1st if none selected.
                    case KeyCode.Down:
                    // Up : select the next item above the current one, or the 1st if none selected.
                    case KeyCode.Up: {
                        this.selectedItems.pop();
                        this.selectedItems.push(selectedContainer.updateSelection(selected, e.keyCode));
                        // Prevent default regardless of whether we are in an input, to stop jumping to the start or end of the query string.
                        e.preventDefault();
                        break;
                    }
                    // Enter : if the item doesn't contain a nested dropdown, 'click' it. Otherwise, fall through to 'Right' action.
                    case KeyCode.Enter: {
                        if (selected && !selected.hasChildDropdown) {
                            selected.performClick();
                            break;
                        }
                    }
                    // falls through
                    // Right : if the selected item contains a nested dropdown, open the dropdown & select the 1st item.
                    case KeyCode.Right: {
                        if (selected && selected.hasChildDropdown) {
                            selected.childDropdownMenu.service.setOpenState(true);
                            this.selectedItems.push(selected.childDropdownMenu.updateSelection(selected, e.keyCode));
                        }
                        break;
                    }
                    // Left : if the selected item is in a nested dropdown, close it and select the containing item.
                    case KeyCode.Left: {
                        if (this.selectedItems.length >= 2) {
                            this.selectedItems.pop();
                            var _c = __read(this.selectedItems.slice(-1), 1), selectedParent = _c[0];
                            selectedParent.childDropdownMenu.service.setOpenState(false);
                            selectedParent.isSelected = true;
                        }
                        break;
                    }
                }
            }
        };
        /**
         * @return {?}
         */
        SuiDropdownMenu.prototype.resetSelection = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.selectedItems = [];
            this._items.forEach(function (i) {
                i.selectedClass = _this.menuSelectedItemClass;
                i.isSelected = false;
            });
            if (this.menuAutoSelectFirst && this._items.length > 0) {
                // Autoselect 1st item if required & possible.
                this._items[0].isSelected = true;
                this.scrollToItem(this._items[0]);
                this.selectedItems.push(this._itemsQuery.first);
            }
        };
        /**
         * @param {?} selectedItem
         * @param {?} keyCode
         * @return {?}
         */
        SuiDropdownMenu.prototype.updateSelection = /**
         * @param {?} selectedItem
         * @param {?} keyCode
         * @return {?}
         */
        function (selectedItem, keyCode) {
            if (selectedItem) {
                // Remove the selected status on the previously selected item.
                selectedItem.isSelected = false;
            }
            var /** @type {?} */ selectedIndex = this._items
                .findIndex(function (i) { return i === selectedItem; });
            var /** @type {?} */ newSelection;
            switch (keyCode) {
                case KeyCode.Enter:
                case KeyCode.Right:
                case KeyCode.Down:
                    selectedIndex += 1;
                    break;
                case KeyCode.Up:
                    if (selectedIndex === -1) {
                        // If none are selected, select the 1st item. Should this be `this.items.last - 1`?
                        selectedIndex = 0;
                        break;
                    }
                    selectedIndex -= 1;
                    break;
            }
            // Select the item at the updated index. The || is to stop us selecting past the start or end of the item list.
            newSelection = this._items[selectedIndex] || selectedItem;
            if (newSelection) {
                // Set the selected status on the newly selected item.
                newSelection.isSelected = true;
                // Set the current scroll position to the location of the newly selected item.
                this.scrollToItem(newSelection);
            }
            return newSelection;
        };
        /**
         * @param {?} item
         * @return {?}
         */
        SuiDropdownMenu.prototype.scrollToItem = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            var /** @type {?} */ menu = this._element.nativeElement;
            var /** @type {?} */ selectedRect = item.element.nativeElement.getBoundingClientRect();
            var /** @type {?} */ menuRect = menu.getBoundingClientRect();
            var /** @type {?} */ scrollAmount = 0;
            if (selectedRect.bottom > menuRect.bottom) {
                scrollAmount = selectedRect.bottom - menuRect.bottom;
            }
            if (selectedRect.top < menuRect.top) {
                scrollAmount = selectedRect.top - menuRect.top;
            }
            menu.scrollTop += Math.round(scrollAmount);
        };
        /**
         * @return {?}
         */
        SuiDropdownMenu.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.onItemsChanged();
            this._itemsQuery.changes.subscribe(function () { return _this.onItemsChanged(); });
        };
        /**
         * @return {?}
         */
        SuiDropdownMenu.prototype.onItemsChanged = /**
         * @return {?}
         */
        function () {
            // We use `_items` rather than `items` in case one or more have become disabled.
            this.resetSelection();
        };
        /**
         * @return {?}
         */
        SuiDropdownMenu.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._parentKeyDownListener();
        };
        SuiDropdownMenu.decorators = [
            { type: core.Directive, args: [{
                        selector: "[suiDropdownMenu]"
                    },] }
        ];
        /** @nocollapse */
        SuiDropdownMenu.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef }
        ]; };
        SuiDropdownMenu.propDecorators = {
            menuTransition: [{ type: core.Input }],
            menuTransitionDuration: [{ type: core.Input }],
            _itemsQueryInternal: [{ type: core.ContentChildren, args: [SuiDropdownMenuItem,] }],
            menuAutoSelectFirst: [{ type: core.Input }],
            menuSelectedItemClass: [{ type: core.Input }],
            onClick: [{ type: core.HostListener, args: ["click", ["$event"],] }]
        };
        return SuiDropdownMenu;
    }(SuiTransition));
    function SuiDropdownMenu_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiDropdownMenu.prototype._service;
        /** @type {?} */
        SuiDropdownMenu.prototype._transitionController;
        /** @type {?} */
        SuiDropdownMenu.prototype.menuTransition;
        /** @type {?} */
        SuiDropdownMenu.prototype.menuTransitionDuration;
        /** @type {?} */
        SuiDropdownMenu.prototype._itemsQueryInternal;
        /** @type {?} */
        SuiDropdownMenu.prototype._itemsQueryOverride;
        /** @type {?} */
        SuiDropdownMenu.prototype.selectedItems;
        /** @type {?} */
        SuiDropdownMenu.prototype.menuAutoSelectFirst;
        /** @type {?} */
        SuiDropdownMenu.prototype.menuSelectedItemClass;
        /** @type {?} */
        SuiDropdownMenu.prototype._parentKeyDownListener;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiDropdown = /** @class */ (function () {
        function SuiDropdown(_element) {
            var _this = this;
            this._element = _element;
            this.service = new DropdownService();
            this.service.isOpenChange.subscribe(function () {
                if (_this.service.isOpen) {
                    _this._element.nativeElement.focus();
                }
            });
        }
        Object.defineProperty(SuiDropdown.prototype, "children", {
            get: /**
             * @return {?}
             */
            function () {
                var _this = this;
                // @ContentChildren includes the current element by default.
                return this._children.filter(function (c) { return c !== _this; });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDropdown.prototype, "isOpenChange", {
            get: /**
             * @return {?}
             */
            function () {
                return this.service.isOpenChange;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDropdown.prototype, "isActive", {
            get: /**
             * @return {?}
             */
            function () {
                // This is to ensure nested dropdowns don't get made bold.
                return this.service.isOpen && !this.service.isNested;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDropdown.prototype, "isOpen", {
            get: /**
             * @return {?}
             */
            function () {
                return this.service.isOpen;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                // If we are opening the dropdown, we want to always open its parents.
                this.service.setOpenState(value, !!value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDropdown.prototype, "isDisabled", {
            get: /**
             * @return {?}
             */
            function () {
                return this.service.isDisabled;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.service.setDisabledState(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDropdown.prototype, "tabIndex", {
            get: /**
             * @return {?}
             */
            function () {
                if (this.isDisabled || this.service.isNested) {
                    // If disabled, remove from tabindex.
                    return undefined;
                }
                if (this._tabIndex != undefined) {
                    // If custom tabindex, default to that.
                    return this._tabIndex;
                }
                // Otherwise, return default of 0.
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDropdown.prototype, "autoClose", {
            get: /**
             * @return {?}
             */
            function () {
                return this.service.autoCloseMode;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.service.autoCloseMode = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SuiDropdown.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this._menu) {
                throw new Error("You must set [suiDropdownMenu] on the menu element.");
            }
            this._menu.service = this.service;
            this._menu.parentElement = this._element;
            this.childrenUpdated();
            this._children.changes
                .subscribe(function () { return _this.childrenUpdated(); });
        };
        /**
         * @return {?}
         */
        SuiDropdown.prototype.childrenUpdated = /**
         * @return {?}
         */
        function () {
            var _this = this;
            // Reregister child dropdowns each time the menu content changes.
            this.children
                .map(function (c) { return c.service; })
                .forEach(function (s) { return _this.service.registerChild(s); });
        };
        /**
         * @param {?} e
         * @return {?}
         */
        SuiDropdown.prototype.onClick = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (!e.eventHandled) {
                e.eventHandled = true;
                this.service.toggleOpenState();
            }
        };
        /**
         * @param {?} e
         * @return {?}
         */
        SuiDropdown.prototype.onFocusOut = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (!this._element.nativeElement.contains(e.relatedTarget)) {
                this.externallyClose();
            }
        };
        /**
         * @param {?} e
         * @return {?}
         */
        SuiDropdown.prototype.onKeypress = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            // Block the keyboard event from being fired on parent dropdowns.
            if (!e.eventHandled) {
                if (e.keyCode === KeyCode.Enter) {
                    e.eventHandled = true;
                    this.service.setOpenState(true);
                }
            }
        };
        /**
         * @return {?}
         */
        SuiDropdown.prototype.externallyClose = /**
         * @return {?}
         */
        function () {
            if (this.service.autoCloseMode === DropdownAutoCloseType.ItemClick ||
                this.service.autoCloseMode === DropdownAutoCloseType.OutsideClick) {
                // No need to reflect in parent since they are also bound to document.
                this.service.setOpenState(false);
            }
        };
        SuiDropdown.decorators = [
            { type: core.Directive, args: [{
                        selector: "[suiDropdown]"
                    },] }
        ];
        /** @nocollapse */
        SuiDropdown.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        SuiDropdown.propDecorators = {
            _menu: [{ type: core.ContentChild, args: [SuiDropdownMenu, { static: false },] }],
            _children: [{ type: core.ContentChildren, args: [SuiDropdown, { descendants: true },] }],
            isOpenChange: [{ type: core.Output }],
            isActive: [{ type: core.HostBinding, args: ["class.active",] }],
            isOpen: [{ type: core.Input }],
            isDisabled: [{ type: core.HostBinding, args: ["class.disabled",] }, { type: core.Input }],
            _tabIndex: [{ type: core.Input, args: ["tabindex",] }],
            tabIndex: [{ type: core.HostBinding, args: ["attr.tabindex",] }],
            autoClose: [{ type: core.Input }],
            onClick: [{ type: core.HostListener, args: ["click", ["$event"],] }],
            onFocusOut: [{ type: core.HostListener, args: ["focusout", ["$event"],] }],
            onKeypress: [{ type: core.HostListener, args: ["keypress", ["$event"],] }]
        };
        return SuiDropdown;
    }());
    function SuiDropdown_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiDropdown.prototype.service;
        /** @type {?} */
        SuiDropdown.prototype._menu;
        /** @type {?} */
        SuiDropdown.prototype._children;
        /** @type {?} */
        SuiDropdown.prototype._tabIndex;
        /** @type {?} */
        SuiDropdown.prototype._element;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiDropdownModule = /** @class */ (function () {
        function SuiDropdownModule() {
        }
        SuiDropdownModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            SuiTransitionModule
                        ],
                        declarations: [
                            SuiDropdown,
                            SuiDropdownMenu,
                            SuiDropdownMenuItem
                        ],
                        exports: [
                            SuiDropdown,
                            SuiDropdownMenu,
                            SuiDropdownMenuItem
                        ]
                    },] }
        ];
        return SuiDropdownModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T, U, V
     */
    var   /**
     * @template T, U, V
     */
    ActiveModal = /** @class */ (function () {
        function ActiveModal(instance, componentRef) {
            var _this = this;
            this._config = instance;
            this._componentRef = componentRef;
            // Automatically destroy the modal component when it has been dismissed.
            this.component.onDismiss.subscribe(function () { return _this._componentRef.destroy(); });
        }
        Object.defineProperty(ActiveModal.prototype, "component", {
            get: /**
             * @return {?}
             */
            function () {
                return this._componentRef.instance;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} callback
         * @return {?}
         */
        ActiveModal.prototype.onApprove = /**
         * @param {?} callback
         * @return {?}
         */
        function (callback) {
            this.component.onApprove.subscribe(function (res) { return callback(res); });
            return this;
        };
        /**
         * @param {?} callback
         * @return {?}
         */
        ActiveModal.prototype.onDeny = /**
         * @param {?} callback
         * @return {?}
         */
        function (callback) {
            this.component.onDeny.subscribe(function (res) { return callback(res); });
            return this;
        };
        /**
         * @param {?} result
         * @return {?}
         */
        ActiveModal.prototype.approve = /**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            this.component.approve(result);
        };
        /**
         * @param {?} result
         * @return {?}
         */
        ActiveModal.prototype.deny = /**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            this.component.deny(result);
        };
        /**
         * @return {?}
         */
        ActiveModal.prototype.destroy = /**
         * @return {?}
         */
        function () {
            this._componentRef.destroy();
        };
        return ActiveModal;
    }());
    function ActiveModal_tsickle_Closure_declarations() {
        /** @type {?} */
        ActiveModal.prototype._config;
        /** @type {?} */
        ActiveModal.prototype._componentRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ ModalSize = {
        Mini: "mini",
        Tiny: "tiny",
        Small: "small",
        Normal: "normal",
        Large: "large"
    };
    /**
     * @template T, U, V
     */
    var   /**
     * @template T, U, V
     */
    ModalConfig = /** @class */ (function () {
        function ModalConfig(context, isClosable) {
            if (context === void 0) { context = undefined; }
            if (isClosable === void 0) { isClosable = true; }
            // Initialise with default values.
            this.isClosable = isClosable;
            this.context = context;
            this.size = ModalSize.Normal;
            this.isFullScreen = false;
            this.isBasic = false;
            this.isInverted = false;
            this.isCentered = true;
            this.mustScroll = false;
            this.transition = "scale";
            this.transitionDuration = 500;
        }
        return ModalConfig;
    }());
    function ModalConfig_tsickle_Closure_declarations() {
        /** @type {?} */
        ModalConfig.prototype.isClosable;
        /** @type {?} */
        ModalConfig.prototype.closeResult;
        /** @type {?} */
        ModalConfig.prototype.context;
        /** @type {?} */
        ModalConfig.prototype.size;
        /** @type {?} */
        ModalConfig.prototype.isFullScreen;
        /** @type {?} */
        ModalConfig.prototype.isBasic;
        /** @type {?} */
        ModalConfig.prototype.isInverted;
        /** @type {?} */
        ModalConfig.prototype.isCentered;
        /** @type {?} */
        ModalConfig.prototype.mustScroll;
        /** @type {?} */
        ModalConfig.prototype.transition;
        /** @type {?} */
        ModalConfig.prototype.transitionDuration;
    }
    /**
     * @template T, U, V
     */
    var   /**
     * @template T, U, V
     */
    TemplateModalConfig = /** @class */ (function (_super) {
        __extends(TemplateModalConfig, _super);
        function TemplateModalConfig(template, context, isClosable) {
            if (context === void 0) { context = undefined; }
            if (isClosable === void 0) { isClosable = true; }
            var _this = _super.call(this, context, isClosable) || this;
            _this.template = template;
            return _this;
        }
        return TemplateModalConfig;
    }(ModalConfig));
    function TemplateModalConfig_tsickle_Closure_declarations() {
        /** @type {?} */
        TemplateModalConfig.prototype.template;
    }
    /**
     * @template T, U, V
     */
    var   /**
     * @template T, U, V
     */
    ComponentModalConfig = /** @class */ (function (_super) {
        __extends(ComponentModalConfig, _super);
        function ComponentModalConfig(component, context, isClosable) {
            if (context === void 0) { context = undefined; }
            if (isClosable === void 0) { isClosable = true; }
            var _this = _super.call(this, context, isClosable) || this;
            _this.component = component;
            return _this;
        }
        return ComponentModalConfig;
    }(ModalConfig));
    function ComponentModalConfig_tsickle_Closure_declarations() {
        /** @type {?} */
        ComponentModalConfig.prototype.component;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T, U
     */
    var   /**
     * @template T, U
     */
    ModalControls = /** @class */ (function () {
        function ModalControls(approve, deny) {
            this.approve = approve;
            this.deny = deny;
        }
        /**
         * @param {?} result
         * @return {?}
         */
        ModalControls.prototype.approve = /**
         * @param {?} result
         * @return {?}
         */
        function (result) { };
        /**
         * @param {?} result
         * @return {?}
         */
        ModalControls.prototype.deny = /**
         * @param {?} result
         * @return {?}
         */
        function (result) { };
        return ModalControls;
    }());
    /**
     * @template T, U, V
     */
    var   /**
     * @template T, U, V
     */
    Modal = /** @class */ (function (_super) {
        __extends(Modal, _super);
        function Modal(controls, context) {
            var _this = 
            // Instances of `ModalControls` are only created in the `SuiModal` constructor,
            // so we take an initialised instance rather than remaking one each time.
            _super.call(this, controls.approve, controls.deny) || this;
            _this.context = context;
            return _this;
        }
        return Modal;
    }(ModalControls));
    function Modal_tsickle_Closure_declarations() {
        /** @type {?} */
        Modal.prototype.context;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @abstract
     * @template T, U, V
     */
    var   /**
     * @abstract
     * @template T, U, V
     */
    ModalTemplate = /** @class */ (function (_super) {
        __extends(ModalTemplate, _super);
        function ModalTemplate() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ModalTemplate;
    }(core.TemplateRef));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T, U
     */
    var SuiModal = /** @class */ (function () {
        function SuiModal(_renderer, _element, _componentFactory) {
            var _this = this;
            this._renderer = _renderer;
            this._element = _element;
            this._componentFactory = _componentFactory;
            // Initialise with default configuration from `ModalConfig` (to avoid writing defaults twice).
            var /** @type {?} */ config = new ModalConfig();
            this.loadConfig(config);
            // Event emitters for each of the possible modal outcomes.
            this.onApprove = new core.EventEmitter();
            this.onDeny = new core.EventEmitter();
            this.onDismiss = new core.EventEmitter();
            // Initialise controls with actions for the `approve` and `deny` cases.
            this.controls = new ModalControls(function (res) { return _this.dismiss(function () { return _this.onApprove.emit(res); }); }, function (res) { return _this.dismiss(function () { return _this.onDeny.emit(res); }); });
            // Internal variable initialisation.
            this.dimBackground = false;
            this._isClosing = false;
            this.transitionController = new TransitionController(false);
        }
        Object.defineProperty(SuiModal.prototype, "approve", {
            get: /**
             * @return {?}
             */
            function () {
                return this.controls.approve;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiModal.prototype, "deny", {
            get: /**
             * @return {?}
             */
            function () {
                return this.controls.deny;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiModal.prototype, "isFullScreen", {
            // Value to deny with when closing via `isClosable`.
            get: /**
             * @return {?}
             */
            function () {
                return this._isFullScreen;
            },
            set: /**
             * @param {?} fullScreen
             * @return {?}
             */
            function (fullScreen) {
                this._isFullScreen = Util.DOM.parseBooleanAttribute(fullScreen);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiModal.prototype, "mustScroll", {
            get: /**
             * @return {?}
             */
            function () {
                return this._mustScroll;
            },
            set: /**
             * @param {?} mustScroll
             * @return {?}
             */
            function (mustScroll) {
                this._mustScroll = mustScroll;
                // 'Cache' value in _mustAlwaysScroll so that if `true`, _mustScroll isn't ever auto-updated.
                this._mustAlwaysScroll = mustScroll;
                this.updateScroll();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiModal.prototype, "isInverted", {
            get: /**
             * @return {?}
             */
            function () {
                return this._isInverted;
            },
            set: /**
             * @param {?} inverted
             * @return {?}
             */
            function (inverted) {
                this._isInverted = Util.DOM.parseBooleanAttribute(inverted);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiModal.prototype, "dynamicClasses", {
            get: /**
             * @return {?}
             */
            function () {
                var /** @type {?} */ classes = {};
                if (this.size) {
                    classes[this.size] = true;
                }
                return classes;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SuiModal.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            // Transition the modal to be visible.
            this.transitionController.animate(new Transition(this.transition, this.transitionDuration, TransitionDirection.In));
            setTimeout(function () { return _this.dimBackground = true; });
        };
        /**
         * @return {?}
         */
        SuiModal.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            // Move the modal to the document body to ensure correct scrolling.
            this._originalContainer = this._element.nativeElement.parentNode; /** @type {?} */
            ((document.querySelector("body"))).appendChild(this._element.nativeElement);
            // Remove the #templateSibling element from the DOM to fix bottom border styles.
            var /** @type {?} */ templateElement = this.templateSibling.element.nativeElement;
            if (templateElement.parentNode) {
                templateElement.parentNode.removeChild(templateElement);
            }
            var /** @type {?} */ element = this._modalElement.nativeElement;
            setTimeout(function () { return _this.updateScroll(); });
            // Focus any element with [autofocus] attribute.
            var /** @type {?} */ autoFocus = element.querySelector("[autofocus]");
            if (autoFocus) {
                // Autofocus after the browser has had time to process other event handlers.
                setTimeout(function () { return autoFocus.focus(); }, 10);
                // Try to focus again when the modal has opened so that autofocus works in IE11.
                setTimeout(function () { return autoFocus.focus(); }, this.transitionDuration);
            }
        };
        /**
         * @template V
         * @param {?} config
         * @return {?}
         */
        SuiModal.prototype.loadConfig = /**
         * @template V
         * @param {?} config
         * @return {?}
         */
        function (config) {
            this.isClosable = config.isClosable;
            this.closeResult = config.closeResult;
            this.size = config.size;
            this.isFullScreen = config.isFullScreen;
            this.isBasic = config.isBasic;
            this.isInverted = config.isInverted;
            this.isCentered = config.isCentered;
            this.mustScroll = config.mustScroll;
            this.transition = config.transition;
            this.transitionDuration = config.transitionDuration;
        };
        /**
         * @param {?=} callback
         * @return {?}
         */
        SuiModal.prototype.dismiss = /**
         * @param {?=} callback
         * @return {?}
         */
        function (callback) {
            var _this = this;
            if (callback === void 0) { callback = function () { }; }
            // If we aren't currently closing,
            if (!this._isClosing) {
                this._isClosing = true;
                // Transition the modal to be invisible.
                this.dimBackground = false;
                this.transitionController.stopAll();
                this.transitionController.animate(new Transition(this.transition, this.transitionDuration, TransitionDirection.Out, function () {
                    // When done, move the modal back to its original location, emit a dismiss event, and fire the callback.
                    if (_this._originalContainer) {
                        _this._originalContainer.appendChild(_this._element.nativeElement);
                    }
                    _this.onDismiss.emit();
                    callback();
                }));
            }
        };
        /**
         * @return {?}
         */
        SuiModal.prototype.close = /**
         * @return {?}
         */
        function () {
            if (this.isClosable) {
                // If we are allowed to close, fire the deny result with the default value.
                this.deny(this.closeResult);
            }
        };
        /**
         * @return {?}
         */
        SuiModal.prototype.updateScroll = /**
         * @return {?}
         */
        function () {
            // _mustAlwaysScroll works by stopping _mustScroll from being automatically updated, so it stays `true`.
            if (!this._mustAlwaysScroll && this._modalElement) {
                // Semantic UI modal margin and dimmer padding are 1rem, which is relative to the global font size, so for compatibility:
                var /** @type {?} */ fontSize = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("font-size"));
                var /** @type {?} */ margin = fontSize * 2;
                var /** @type {?} */ element = this._modalElement.nativeElement;
                // The modal must scroll if the window height is smaller than the modal height + both margins.
                this._mustScroll = window.innerHeight < element.clientHeight + margin * 2;
            }
        };
        /**
         * @param {?} e
         * @return {?}
         */
        SuiModal.prototype.onClick = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            // Makes sense here, as the modal shouldn't be attached to any DOM element.
            e.stopPropagation();
        };
        // Document listener is fine here because nobody will have enough modals open.
        /**
         * @param {?} e
         * @return {?}
         */
        SuiModal.prototype.onDocumentKeyUp = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (e.keyCode === KeyCode.Escape) {
                // Close automatically covers case of `!isClosable`, so check not needed.
                this.close();
            }
        };
        /**
         * @return {?}
         */
        SuiModal.prototype.onDocumentResize = /**
         * @return {?}
         */
        function () {
            this.updateScroll();
        };
        SuiModal.decorators = [
            { type: core.Component, args: [{
                        selector: "sui-modal",
                        template: "\n<!-- Page dimmer for modal background. -->\n<sui-modal-dimmer [ngClass]=\"{'top aligned': !isCentered}\" \n                  [class.inverted]=\"isInverted\"\n                  [(isDimmed)]=\"dimBackground\"\n                  [transitionDuration]=\"transitionDuration\"\n                  (click)=\"close()\">\n\n    <!-- Modal component, with transition component attached -->\n    <div class=\"ui modal\"\n         [suiTransition]=\"transitionController\"\n         [class.active]=\"transitionController?.isVisible\"\n         [class.fullscreen]=\"isFullScreen\"\n         [class.basic]=\"isBasic\"\n         [class.scrolling]=\"mustScroll\"\n         [class.inverted]=\"isInverted\"\n         [ngClass]=\"dynamicClasses\"\n         (click)=\"onClick($event)\"\n         #modal>\n\n        <!-- Configurable close icon -->\n        <i class=\"close icon\" *ngIf=\"isClosable\" (click)=\"close()\"></i>\n        <!-- <ng-content> so that <sui-modal> can be used as a normal component. -->\n        <ng-content></ng-content>\n        <!-- @ViewChild reference so we can insert elements beside this div. -->\n        <div #templateSibling></div>\n    </div>\n</sui-modal-dimmer>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        SuiModal.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: SuiComponentFactory }
        ]; };
        SuiModal.propDecorators = {
            isClosable: [{ type: core.Input }],
            closeResult: [{ type: core.Input }],
            onApprove: [{ type: core.Output, args: ["approved",] }],
            onDeny: [{ type: core.Output, args: ["denied",] }],
            onDismiss: [{ type: core.Output, args: ["dismissed",] }],
            _modalElement: [{ type: core.ViewChild, args: ["modal", { static: true },] }],
            size: [{ type: core.Input }],
            isCentered: [{ type: core.Input }],
            isFullScreen: [{ type: core.Input }],
            isBasic: [{ type: core.Input }],
            mustScroll: [{ type: core.Input }],
            isInverted: [{ type: core.Input }],
            transition: [{ type: core.Input }],
            transitionDuration: [{ type: core.Input }],
            templateSibling: [{ type: core.ViewChild, args: ["templateSibling", { read: core.ViewContainerRef, static: true },] }],
            onDocumentKeyUp: [{ type: core.HostListener, args: ["document:keyup", ["$event"],] }],
            onDocumentResize: [{ type: core.HostListener, args: ["window:resize",] }]
        };
        return SuiModal;
    }());
    function SuiModal_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiModal.prototype.isClosable;
        /** @type {?} */
        SuiModal.prototype.closeResult;
        /** @type {?} */
        SuiModal.prototype.controls;
        /** @type {?} */
        SuiModal.prototype.onApprove;
        /** @type {?} */
        SuiModal.prototype.onDeny;
        /** @type {?} */
        SuiModal.prototype.onDismiss;
        /** @type {?} */
        SuiModal.prototype._modalElement;
        /** @type {?} */
        SuiModal.prototype.size;
        /** @type {?} */
        SuiModal.prototype.isCentered;
        /** @type {?} */
        SuiModal.prototype._isFullScreen;
        /** @type {?} */
        SuiModal.prototype.isBasic;
        /** @type {?} */
        SuiModal.prototype._mustScroll;
        /** @type {?} */
        SuiModal.prototype._mustAlwaysScroll;
        /** @type {?} */
        SuiModal.prototype._isInverted;
        /** @type {?} */
        SuiModal.prototype.transitionController;
        /** @type {?} */
        SuiModal.prototype.transition;
        /** @type {?} */
        SuiModal.prototype.transitionDuration;
        /** @type {?} */
        SuiModal.prototype.dimBackground;
        /** @type {?} */
        SuiModal.prototype._isClosing;
        /** @type {?} */
        SuiModal.prototype.templateSibling;
        /** @type {?} */
        SuiModal.prototype._originalContainer;
        /** @type {?} */
        SuiModal.prototype._renderer;
        /** @type {?} */
        SuiModal.prototype._element;
        /** @type {?} */
        SuiModal.prototype._componentFactory;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiModalService = /** @class */ (function () {
        function SuiModalService(_componentFactory) {
            this._componentFactory = _componentFactory;
        }
        /**
         * @template T, U, V
         * @param {?} modal
         * @return {?}
         */
        SuiModalService.prototype.open = /**
         * @template T, U, V
         * @param {?} modal
         * @return {?}
         */
        function (modal) {
            // Generate the modal component to be shown.
            var /** @type {?} */ componentRef = this._componentFactory.createComponent(SuiModal);
            // Shorthand for the created modal component instance.
            var /** @type {?} */ modalComponent = componentRef.instance;
            if (modal instanceof TemplateModalConfig) {
                // Inject the template into the view.
                this._componentFactory.createView(modalComponent.templateSibling, modal.template, {
                    // `let-context`
                    $implicit: modal.context,
                    // `let-modal="modal"`
                    modal: componentRef.instance.controls
                });
            }
            else if (modal instanceof ComponentModalConfig) {
                // Generate the component to be used as the modal content,
                // injecting an instance of `Modal` to be used in the component constructor.
                var /** @type {?} */ contentComponentRef = this._componentFactory.createComponent(modal.component, [
                    {
                        provide: Modal,
                        useValue: new Modal(modalComponent.controls, modal.context)
                    }
                ]);
                // Insert the new component into the content of the modal.
                this._componentFactory.attachToView(contentComponentRef, modalComponent.templateSibling);
                // Shorthand for access to the content component's DOM element.
                var /** @type {?} */ contentElement = contentComponentRef.location.nativeElement;
                // Move all of the DOM elements inside the component to the main modal element.
                // This is done so that CSS classes apply correctly. It does stop any custom styles from working however,
                // so other ways may have to be investigated.
                while (contentElement.hasChildNodes() && contentElement.parentElement && contentElement.firstChild) {
                    contentElement.parentElement.appendChild(contentElement.removeChild(contentElement.firstChild));
                }
                // Remove the generated component's 'empty shell' from the DOM.
                this._componentFactory.detachFromDocument(contentComponentRef);
            }
            // Attach the new modal component to the application.
            // The component will move itself to the document body for correctl styling.
            this._componentFactory.attachToApplication(componentRef);
            // Initialise the generated modal with the provided config.
            modalComponent.loadConfig(modal);
            // Return an instance of an `ActiveModal`, so the user can control the new modal.
            return new ActiveModal(modal, componentRef);
        };
        SuiModalService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        SuiModalService.ctorParameters = function () { return [
            { type: SuiComponentFactory }
        ]; };
        return SuiModalService;
    }());
    function SuiModalService_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiModalService.prototype._componentFactory;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiModalDimmer = /** @class */ (function (_super) {
        __extends(SuiModalDimmer, _super);
        function SuiModalDimmer(renderer, element, changeDetector) {
            var _this = _super.call(this, renderer, element, changeDetector) || this;
            _this.hasClasses = true;
            _this.isClickable = false;
            return _this;
        }
        SuiModalDimmer.decorators = [
            { type: core.Component, args: [{
                        selector: "sui-modal-dimmer",
                        template: "<ng-content></ng-content>",
                        styles: ["\n        :host.ui.dimmer:not(.hidden) {\n            transition: none;\n            overflow-y: auto;\n            display: flex !important; \n        }\n    "]
                    }] }
        ];
        /** @nocollapse */
        SuiModalDimmer.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef }
        ]; };
        SuiModalDimmer.propDecorators = {
            hasClasses: [{ type: core.HostBinding, args: ["class.page",] }, { type: core.HostBinding, args: ["class.modals",] }]
        };
        return SuiModalDimmer;
    }(SuiDimmer));
    function SuiModalDimmer_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiModalDimmer.prototype.hasClasses;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiModalModule = /** @class */ (function () {
        function SuiModalModule() {
        }
        SuiModalModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            SuiDimmerModule,
                            SuiTransitionModule,
                            SuiUtilityModule
                        ],
                        declarations: [
                            SuiModal,
                            SuiModalDimmer
                        ],
                        exports: [
                            SuiModal
                        ],
                        providers: [
                            SuiModalService
                        ],
                        entryComponents: [
                            SuiModal
                        ]
                    },] }
        ];
        return SuiModalModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiProgress = /** @class */ (function () {
        function SuiProgress() {
            this.value = 0;
            this.maximum = 100;
            this.precision = 0;
            this._overrideSuccess = false;
            this.autoSuccess = true;
            this.showProgress = true;
            this.hasClasses = true;
        }
        Object.defineProperty(SuiProgress.prototype, "value", {
            get: /**
             * @return {?}
             */
            function () {
                return this._value;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                // Convert value from string to number where necessary.
                var /** @type {?} */ converted = +value;
                if (Number.isNaN(converted)) {
                    return;
                }
                this._value = converted;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiProgress.prototype, "maximum", {
            get: /**
             * @return {?}
             */
            function () {
                return this._maximum;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                // Convert value from string to number where necessary.
                var /** @type {?} */ converted = +value;
                if (Number.isNaN(converted)) {
                    return;
                }
                this._maximum = converted;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiProgress.prototype, "precision", {
            get: /**
             * @return {?}
             */
            function () {
                return this._precision;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                // Convert value from string to number where necessary.
                var /** @type {?} */ converted = +value;
                if (Number.isNaN(converted)) {
                    return;
                }
                this._precision = Math.min(Math.max(converted, 0), 20);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiProgress.prototype, "reachedMaximum", {
            get: /**
             * @return {?}
             */
            function () {
                return this._overrideSuccess || ((this.value >= this.maximum) && this.autoSuccess);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiProgress.prototype, "percentage", {
            get: /**
             * @return {?}
             */
            function () {
                var /** @type {?} */ boundedValue = Math.min(Math.max(this.value, 0), this.maximum);
                var /** @type {?} */ percentage = (boundedValue / this.maximum) * 100;
                return percentage.toFixed(this.precision);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiProgress.prototype, "classValue", {
            set: /**
             * @param {?} classes
             * @return {?}
             */
            function (classes) {
                if (classes.includes("attached") || classes.includes("tiny")) {
                    this.showProgress = false;
                }
                if (classes.includes("success")) {
                    this._overrideSuccess = true;
                }
            },
            enumerable: true,
            configurable: true
        });
        SuiProgress.decorators = [
            { type: core.Component, args: [{
                        selector: "sui-progress",
                        template: "\n<div class=\"bar\" [style.width.%]=\"percentage\">\n    <div class=\"progress\" *ngIf=\"showProgress\">{{ percentage }}%</div>\n</div>\n<div class=\"label\">\n    <ng-content></ng-content>\n</div>\n",
                        styles: ["\n.bar {\n    transition-duration: 300ms !important;\n    z-index: 1;\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        SuiProgress.ctorParameters = function () { return []; };
        SuiProgress.propDecorators = {
            hasClasses: [{ type: core.HostBinding, args: ["class.ui",] }, { type: core.HostBinding, args: ["class.progress",] }],
            autoSuccess: [{ type: core.Input }],
            showProgress: [{ type: core.Input }],
            value: [{ type: core.Input }],
            maximum: [{ type: core.Input }],
            precision: [{ type: core.Input }],
            reachedMaximum: [{ type: core.HostBinding, args: ["class.success",] }],
            percentage: [{ type: core.HostBinding, args: ["attr.data-percent",] }],
            classValue: [{ type: core.Input, args: ["class",] }]
        };
        return SuiProgress;
    }());
    function SuiProgress_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiProgress.prototype.hasClasses;
        /** @type {?} */
        SuiProgress.prototype._value;
        /** @type {?} */
        SuiProgress.prototype._maximum;
        /** @type {?} */
        SuiProgress.prototype._precision;
        /** @type {?} */
        SuiProgress.prototype._overrideSuccess;
        /** @type {?} */
        SuiProgress.prototype.autoSuccess;
        /** @type {?} */
        SuiProgress.prototype.showProgress;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiProgressModule = /** @class */ (function () {
        function SuiProgressModule() {
        }
        SuiProgressModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            SuiProgress
                        ],
                        exports: [
                            SuiProgress
                        ]
                    },] }
        ];
        return SuiProgressModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiRating = /** @class */ (function () {
        function SuiRating() {
            this.hoveredIndex = -1;
            this.value = 0;
            this.valueChange = new core.EventEmitter();
            this.maximum = 5;
            this.isReadonly = false;
            this.hasClasses = true;
        }
        Object.defineProperty(SuiRating.prototype, "maximum", {
            get: /**
             * @return {?}
             */
            function () {
                return this._maximum;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._maximum = +value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiRating.prototype, "icons", {
            get: /**
             * @return {?}
             */
            function () {
                // tslint:disable-next-line:prefer-literal
                return new Array(this.maximum);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} i
         * @return {?}
         */
        SuiRating.prototype.onClick = /**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            if (!this.isReadonly) {
                this.value = i + 1;
                this.valueChange.emit(this.value);
            }
        };
        /**
         * @param {?} i
         * @return {?}
         */
        SuiRating.prototype.onMouseover = /**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            this.hoveredIndex = i;
        };
        /**
         * @return {?}
         */
        SuiRating.prototype.onMouseout = /**
         * @return {?}
         */
        function () {
            this.hoveredIndex = -1;
        };
        /**
         * @param {?} value
         * @return {?}
         */
        SuiRating.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.value = value;
        };
        SuiRating.decorators = [
            { type: core.Component, args: [{
                        selector: "sui-rating",
                        template: "\n<i class=\"icon\"\n   *ngFor=\"let icon of icons; let i = index\"\n   (mouseover)=\"onMouseover(i)\"\n   (click)=\"onClick(i)\"\n   [class.selected]=\"hoveredIndex >= i && !isReadonly\"\n   [class.active]=\"value > i\">\n</i>\n",
                        styles: ["\n:host.read-only .icon {\n    cursor: auto\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        SuiRating.ctorParameters = function () { return []; };
        SuiRating.propDecorators = {
            hasClasses: [{ type: core.HostBinding, args: ["class.ui",] }, { type: core.HostBinding, args: ["class.rating",] }],
            valueChange: [{ type: core.Output }],
            maximum: [{ type: core.Input }],
            isReadonly: [{ type: core.HostBinding, args: ["class.read-only",] }, { type: core.Input }],
            onMouseout: [{ type: core.HostListener, args: ["mouseout",] }]
        };
        return SuiRating;
    }());
    function SuiRating_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiRating.prototype.hasClasses;
        /** @type {?} */
        SuiRating.prototype.value;
        /** @type {?} */
        SuiRating.prototype.valueChange;
        /** @type {?} */
        SuiRating.prototype._maximum;
        /** @type {?} */
        SuiRating.prototype.isReadonly;
        /** @type {?} */
        SuiRating.prototype.hoveredIndex;
    }
    var SuiRatingValueAccessor = /** @class */ (function (_super) {
        __extends(SuiRatingValueAccessor, _super);
        function SuiRatingValueAccessor(host) {
            return _super.call(this, host) || this;
        }
        SuiRatingValueAccessor.decorators = [
            { type: core.Directive, args: [{
                        selector: "sui-rating",
                        host: { "(valueChange)": "onChange($event)" },
                        providers: [customValueAccessorFactory(SuiRatingValueAccessor)]
                    },] }
        ];
        /** @nocollapse */
        SuiRatingValueAccessor.ctorParameters = function () { return [
            { type: SuiRating }
        ]; };
        return SuiRatingValueAccessor;
    }(CustomValueAccessor));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiRatingModule = /** @class */ (function () {
        function SuiRatingModule() {
        }
        SuiRatingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            forms.FormsModule,
                            common.CommonModule
                        ],
                        declarations: [
                            SuiRating,
                            SuiRatingValueAccessor
                        ],
                        exports: [
                            SuiRating,
                            SuiRatingValueAccessor
                        ]
                    },] }
        ];
        return SuiRatingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // See https://github.com/Microsoft/TypeScript/issues/13449.
    var /** @type {?} */ templateRef$2 = core.TemplateRef;
    /**
     * @template T
     */
    var SuiSearchResult = /** @class */ (function () {
        function SuiSearchResult(componentFactory) {
            this.componentFactory = componentFactory;
            this.hasClasses = true;
            // By default we make this function return an empty string, for the brief moment when it isn't displaying the correct label.
            this.formatter = function (value) { return ""; };
        }
        Object.defineProperty(SuiSearchResult.prototype, "template", {
            get: /**
             * @return {?}
             */
            function () {
                return this._template;
            },
            set: /**
             * @param {?} template
             * @return {?}
             */
            function (template) {
                this._template = template;
                if (this.template) {
                    this.componentFactory.createView(this.templateSibling, this.template, {
                        $implicit: this.value,
                        query: this.query
                    });
                }
            },
            enumerable: true,
            configurable: true
        });
        SuiSearchResult.decorators = [
            { type: core.Component, args: [{
                        selector: "sui-search-result",
                        template: "\n<span #templateSibling></span>\n<span *ngIf=\"!template\" [innerHTML]=\"formatter(value, query)\"></span>\n"
                    }] }
        ];
        /** @nocollapse */
        SuiSearchResult.ctorParameters = function () { return [
            { type: SuiComponentFactory }
        ]; };
        SuiSearchResult.propDecorators = {
            hasClasses: [{ type: core.HostBinding, args: ["class.result",] }],
            value: [{ type: core.Input }],
            query: [{ type: core.Input }],
            formatter: [{ type: core.Input }],
            template: [{ type: core.Input }],
            templateSibling: [{ type: core.ViewChild, args: ["templateSibling", { read: core.ViewContainerRef, static: true },] }]
        };
        return SuiSearchResult;
    }());
    function SuiSearchResult_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiSearchResult.prototype.hasClasses;
        /** @type {?} */
        SuiSearchResult.prototype.value;
        /** @type {?} */
        SuiSearchResult.prototype.query;
        /** @type {?} */
        SuiSearchResult.prototype.formatter;
        /** @type {?} */
        SuiSearchResult.prototype._template;
        /** @type {?} */
        SuiSearchResult.prototype.templateSibling;
        /** @type {?} */
        SuiSearchResult.prototype.componentFactory;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @record
     * @template T
     */
    function ICachedArray() { }
    function ICachedArray_tsickle_Closure_declarations() {
        /* TODO: handle strange member:
        [query:string]:T[];
        */
    }
    /**
     * @template T, U
     */
    var   /**
     * @template T, U
     */
    SearchService = /** @class */ (function () {
        function SearchService(allowEmptyQuery) {
            var _this = this;
            if (allowEmptyQuery === void 0) { allowEmptyQuery = false; }
            this._options = [];
            this.optionsFilter = function (os, q) {
                // Convert the query string to a RegExp.
                var /** @type {?} */ regex = _this.toRegex(_this._query);
                if (regex instanceof RegExp) {
                    // Only update the results if the query was valid regex.
                    // This avoids the results suddenly becoming empty if an invalid regex string is inputted.
                    return os
                        // Filter on the options with a string match on the field we are testing.
                        .filter(function (o) { return Util.Object.readValue(o, _this._optionsField)
                        .toString()
                        .match(regex); });
                }
                // Don't update since it wasn't a valid regex.
                return false;
            };
            // Set default values and reset.
            this.allowEmptyQuery = allowEmptyQuery;
            this.searchDelay = 0;
            this.reset();
        }
        Object.defineProperty(SearchService.prototype, "options", {
            get: /**
             * @return {?}
             */
            function () {
                return this._options;
            },
            set: /**
             * @param {?} options
             * @return {?}
             */
            function (options) {
                this._options = options || [];
                // We cannot use both local & remote options simultaneously.
                this._optionsLookup = undefined;
                // Reset entire service with new options.
                this.reset();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SearchService.prototype, "optionsLookup", {
            get: /**
             * @return {?}
             */
            function () {
                return this._optionsLookup;
            },
            set: /**
             * @param {?} lookupFn
             * @return {?}
             */
            function (lookupFn) {
                this._optionsLookup = lookupFn;
                // As before, cannot use local & remote options simultaneously.
                this._options = [];
                this.reset();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SearchService.prototype, "hasItemLookup", {
            get: /**
             * @return {?}
             */
            function () {
                return !!this.optionsLookup && this.optionsLookup.length === 2;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SearchService.prototype, "optionsField", {
            get: /**
             * @return {?}
             */
            function () {
                return this._optionsField;
            },
            set: /**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                this._optionsField = field;
                // We need to reset otherwise we would now be showing invalid search results.
                this.reset();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SearchService.prototype, "results", {
            get: /**
             * @return {?}
             */
            function () {
                return this._results;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SearchService.prototype, "query", {
            get: /**
             * @return {?}
             */
            function () {
                return this._query;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SearchService.prototype, "isSearching", {
            get: /**
             * @return {?}
             */
            function () {
                return this._isSearching;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} query
         * @param {?=} callback
         * @return {?}
         */
        SearchService.prototype.updateQueryDelayed = /**
         * @param {?} query
         * @param {?=} callback
         * @return {?}
         */
        function (query, callback) {
            var _this = this;
            if (callback === void 0) { callback = function () { }; }
            this._query = query;
            clearTimeout(this._searchDelayTimeout);
            this._searchDelayTimeout = window.setTimeout(function () {
                _this.updateQuery(query, callback);
            }, this.searchDelay);
        };
        /**
         * @param {?} query
         * @param {?=} callback
         * @return {?}
         */
        SearchService.prototype.updateQuery = /**
         * @param {?} query
         * @param {?=} callback
         * @return {?}
         */
        function (query, callback) {
            var _this = this;
            if (callback === void 0) { callback = function () { }; }
            this._query = query;
            if (this._query === "" && !this.allowEmptyQuery) {
                // Don't update if the new query is empty (and we don't allow empty queries).
                // Don't reset so that when animating closed we don't get a judder.
                return callback();
            }
            if (this._resultsCache.hasOwnProperty(this._query)) {
                // If the query is already cached, make use of it.
                this._results = this._resultsCache[this._query];
                return callback();
            }
            if (this._optionsLookup) {
                this._isSearching = true;
                // Call the options lookup without a this context.
                var /** @type {?} */ queryLookup = this._optionsLookup.call(undefined, this._query);
                queryLookup
                    .then(function (results) {
                    _this._isSearching = false;
                    _this.updateResults(results);
                    return callback();
                })
                    .catch(function (error) {
                    // Unset 'loading' state, and throw the returned error without updating the results.
                    _this._isSearching = false;
                    return callback(error);
                });
                return;
            }
            var /** @type {?} */ filtered = this.optionsFilter.call(undefined, this._options, this._query);
            if (filtered) {
                this.updateResults(filtered);
            }
            return callback();
        };
        /**
         * @param {?} results
         * @return {?}
         */
        SearchService.prototype.updateResults = /**
         * @param {?} results
         * @return {?}
         */
        function (results) {
            this._resultsCache[this._query] = results;
            this._results = results;
        };
        /**
         * @param {?} initial
         * @return {?}
         */
        SearchService.prototype.initialLookup = /**
         * @param {?} initial
         * @return {?}
         */
        function (initial) {
            if (initial instanceof Array) {
                return (this._optionsLookup)(undefined, initial);
            }
            return this._optionsLookup(undefined, initial);
        };
        /**
         * @param {?} query
         * @return {?}
         */
        SearchService.prototype.toRegex = /**
         * @param {?} query
         * @return {?}
         */
        function (query) {
            try {
                return new RegExp(query, "i");
            }
            catch (/** @type {?} */ e) {
                return query;
            }
        };
        /**
         * @param {?} text
         * @param {?} query
         * @return {?}
         */
        SearchService.prototype.highlightMatches = /**
         * @param {?} text
         * @param {?} query
         * @return {?}
         */
        function (text, query) {
            var /** @type {?} */ regex = this.toRegex(query);
            if (regex instanceof RegExp) {
                return text.replace(regex, function (match) { return "<b>" + match + "</b>"; });
            }
            return text;
        };
        /**
         * @return {?}
         */
        SearchService.prototype.reset = /**
         * @return {?}
         */
        function () {
            this._results = [];
            this._resultsCache = {};
            this._isSearching = false;
            this.updateQuery("");
        };
        return SearchService;
    }());
    function SearchService_tsickle_Closure_declarations() {
        /** @type {?} */
        SearchService.prototype._options;
        /** @type {?} */
        SearchService.prototype._optionsLookup;
        /** @type {?} */
        SearchService.prototype._optionsField;
        /** @type {?} */
        SearchService.prototype.optionsFilter;
        /** @type {?} */
        SearchService.prototype._results;
        /** @type {?} */
        SearchService.prototype._resultsCache;
        /** @type {?} */
        SearchService.prototype._query;
        /** @type {?} */
        SearchService.prototype.allowEmptyQuery;
        /** @type {?} */
        SearchService.prototype.searchDelay;
        /** @type {?} */
        SearchService.prototype._searchDelayTimeout;
        /** @type {?} */
        SearchService.prototype._isSearching;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @record
     * @template T
     */
    function IResultContext() { }
    function IResultContext_tsickle_Closure_declarations() {
        /** @type {?} */
        IResultContext.prototype.query;
    }
    /**
     * @template T
     */
    var SuiSearch = /** @class */ (function () {
        function SuiSearch(_element, renderer, _localizationService) {
            var _this = this;
            this._element = _element;
            this._localizationService = _localizationService;
            this.dropdownService = new DropdownService();
            this.searchService = new SearchService();
            this.onLocaleUpdate();
            this._localizationService.onLanguageUpdate.subscribe(function () { return _this.onLocaleUpdate(); });
            this.hasClasses = true;
            this.tabindex = 0;
            this.hasIcon = true;
            this.retainSelectedResult = true;
            this.searchDelay = 200;
            this.maxResults = 7;
            this.onResultSelected = new core.EventEmitter();
            this.transition = "scale";
            this.transitionDuration = 200;
        }
        Object.defineProperty(SuiSearch.prototype, "isActive", {
            get: /**
             * @return {?}
             */
            function () {
                return this.dropdownService.isOpen;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSearch.prototype, "placeholder", {
            // Gets & sets the placeholder text displayed inside the text input.
            get: /**
             * @return {?}
             */
            function () {
                return this._placeholder || this.localeValues.placeholder;
            },
            set: /**
             * @param {?} placeholder
             * @return {?}
             */
            function (placeholder) {
                this._placeholder = placeholder;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSearch.prototype, "localeValues", {
            get: /**
             * @return {?}
             */
            function () {
                return this._localizationService.override(this._localeValues, this.localeOverrides);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSearch.prototype, "query", {
            get: /**
             * @return {?}
             */
            function () {
                return this.searchService.query;
            },
            set: /**
             * @param {?} query
             * @return {?}
             */
            function (query) {
                var _this = this;
                this.selectedResult = undefined;
                // Initialise a delayed search.
                this.searchService.updateQueryDelayed(query, function () {
                    // Set the results open state depending on whether a query has been entered.
                    return _this.dropdownService.setOpenState(_this.searchService.query.length > 0);
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSearch.prototype, "options", {
            set: /**
             * @param {?} options
             * @return {?}
             */
            function (options) {
                if (options) {
                    this.searchService.options = options;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSearch.prototype, "optionsFilter", {
            set: /**
             * @param {?} filter
             * @return {?}
             */
            function (filter) {
                if (filter) {
                    this.searchService.optionsFilter = filter;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSearch.prototype, "optionsLookup", {
            set: /**
             * @param {?} lookupFn
             * @return {?}
             */
            function (lookupFn) {
                this.searchService.optionsLookup = lookupFn;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSearch.prototype, "optionsField", {
            set: /**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                this.searchService.optionsField = field;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSearch.prototype, "resultFormatter", {
            get: /**
             * @return {?}
             */
            function () {
                var _this = this;
                if (this._resultFormatter) {
                    return this._resultFormatter;
                }
                else if (this.searchService.optionsLookup) {
                    return function (r) { return _this.readValue(r); };
                }
                else {
                    return function (r, q) { return _this.searchService.highlightMatches(_this.readValue(r), q); };
                }
            },
            set: /**
             * @param {?} formatter
             * @return {?}
             */
            function (formatter) {
                this._resultFormatter = formatter;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSearch.prototype, "searchDelay", {
            set: /**
             * @param {?} delay
             * @return {?}
             */
            function (delay) {
                this.searchService.searchDelay = delay;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSearch.prototype, "isSearching", {
            get: /**
             * @return {?}
             */
            function () {
                return this.searchService.isSearching;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSearch.prototype, "results", {
            get: /**
             * @return {?}
             */
            function () {
                return this.searchService.results.slice(0, this.maxResults);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SuiSearch.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this._menu.service = this.dropdownService;
        };
        /**
         * @return {?}
         */
        SuiSearch.prototype.onLocaleUpdate = /**
         * @return {?}
         */
        function () {
            this._localeValues = this._localizationService.get().search;
        };
        /**
         * @param {?} result
         * @return {?}
         */
        SuiSearch.prototype.select = /**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            this.onResultSelected.emit(result);
            this.dropdownService.setOpenState(false);
            if (this.retainSelectedResult) {
                this.selectedResult = result;
                this.searchService.updateQuery(this.readValue(result));
            }
            else {
                this.searchService.updateQuery("");
            }
        };
        /**
         * @param {?} e
         * @return {?}
         */
        SuiSearch.prototype.onClick = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            this.open();
        };
        /**
         * @return {?}
         */
        SuiSearch.prototype.onFocusIn = /**
         * @return {?}
         */
        function () {
            if (!this.dropdownService.isAnimating) {
                this.open();
            }
        };
        /**
         * @return {?}
         */
        SuiSearch.prototype.open = /**
         * @return {?}
         */
        function () {
            if (this.searchService.query.length > 0) {
                // Only open on click when there is a query entered.
                this.dropdownService.setOpenState(true);
            }
        };
        /**
         * @param {?} e
         * @return {?}
         */
        SuiSearch.prototype.onFocusOut = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            console.log(e);
            if (!this._element.nativeElement.contains(e.relatedTarget)) {
                this.dropdownService.setOpenState(false);
            }
        };
        /**
         * @param {?} object
         * @return {?}
         */
        SuiSearch.prototype.readValue = /**
         * @param {?} object
         * @return {?}
         */
        function (object) {
            return Util.Object.readValue(object, this.searchService.optionsField);
        };
        SuiSearch.decorators = [
            { type: core.Component, args: [{
                        selector: "sui-search",
                        template: "\n<div class=\"ui input\" [class.icon]=\"hasIcon\" (click)=\"onClick($event)\">\n    <input class=\"prompt\" type=\"text\" [attr.placeholder]=\"placeholder\" autocomplete=\"off\" [(ngModel)]=\"query\">\n    <i *ngIf=\"hasIcon\" class=\"search icon\"></i>\n</div>\n<div class=\"results\"\n     suiDropdownMenu\n     [menuTransition]=\"transition\"\n     [menuTransitionDuration]=\"transitionDuration\"\n     menuSelectedItemClass=\"active\">\n\n    <sui-search-result *ngFor=\"let r of results\"\n                       class=\"item\"\n                       [value]=\"r\"\n                       [query]=\"query\"\n                       [formatter]=\"resultFormatter\"\n                       [template]=\"resultTemplate\"\n                       (click)=\"select(r)\"></sui-search-result>\n\n    <div *ngIf=\"results.length == 0\" class=\"message empty\">\n        <div class=\"header\">{{ localeValues.noResults.header }}</div>\n        <div class=\"description\">{{ localeValues.noResults.message }}</div>\n    </div>\n</div>\n",
                        styles: ["\n/* Ensures results div has margin. */\n:host {\n    display: inline-block;\n    outline: 0;\n}\n\n/* Fixes positioning when results are pushed above the search. */\n.results {\n    margin-bottom: .5em;\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        SuiSearch.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: SuiLocalizationService }
        ]; };
        SuiSearch.propDecorators = {
            _menu: [{ type: core.ViewChild, args: [SuiDropdownMenu, { static: true },] }],
            hasClasses: [{ type: core.HostBinding, args: ["class.ui",] }, { type: core.HostBinding, args: ["class.search",] }],
            tabindex: [{ type: core.HostBinding, args: ["attr.tabindex",] }],
            isActive: [{ type: core.HostBinding, args: ["class.active",] }],
            hasIcon: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            options: [{ type: core.Input }],
            optionsFilter: [{ type: core.Input }],
            optionsLookup: [{ type: core.Input }],
            optionsField: [{ type: core.Input }],
            resultFormatter: [{ type: core.Input }],
            resultTemplate: [{ type: core.Input }],
            retainSelectedResult: [{ type: core.Input }],
            searchDelay: [{ type: core.Input }],
            isSearching: [{ type: core.HostBinding, args: ["class.loading",] }],
            maxResults: [{ type: core.Input }],
            onResultSelected: [{ type: core.Output, args: ["resultSelected",] }],
            transition: [{ type: core.Input }],
            transitionDuration: [{ type: core.Input }],
            onFocusIn: [{ type: core.HostListener, args: ["focusin",] }],
            onFocusOut: [{ type: core.HostListener, args: ["focusout", ["$event"],] }]
        };
        return SuiSearch;
    }());
    function SuiSearch_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiSearch.prototype.dropdownService;
        /** @type {?} */
        SuiSearch.prototype.searchService;
        /** @type {?} */
        SuiSearch.prototype._menu;
        /** @type {?} */
        SuiSearch.prototype.hasClasses;
        /** @type {?} */
        SuiSearch.prototype.tabindex;
        /** @type {?} */
        SuiSearch.prototype.hasIcon;
        /** @type {?} */
        SuiSearch.prototype._placeholder;
        /** @type {?} */
        SuiSearch.prototype._localeValues;
        /** @type {?} */
        SuiSearch.prototype.localeOverrides;
        /** @type {?} */
        SuiSearch.prototype._resultFormatter;
        /** @type {?} */
        SuiSearch.prototype.resultTemplate;
        /** @type {?} */
        SuiSearch.prototype.retainSelectedResult;
        /** @type {?} */
        SuiSearch.prototype.maxResults;
        /** @type {?} */
        SuiSearch.prototype.selectedResult;
        /** @type {?} */
        SuiSearch.prototype.onResultSelected;
        /** @type {?} */
        SuiSearch.prototype.transition;
        /** @type {?} */
        SuiSearch.prototype.transitionDuration;
        /** @type {?} */
        SuiSearch.prototype._element;
        /** @type {?} */
        SuiSearch.prototype._localizationService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiSearchModule = /** @class */ (function () {
        function SuiSearchModule() {
        }
        SuiSearchModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            SuiDropdownModule,
                            SuiLocalizationModule,
                            SuiUtilityModule
                        ],
                        declarations: [
                            SuiSearch,
                            SuiSearchResult
                        ],
                        exports: [
                            SuiSearch
                        ]
                    },] }
        ];
        return SuiSearchModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T
     */
    var SuiSelectOption = /** @class */ (function (_super) {
        __extends(SuiSelectOption, _super);
        function SuiSelectOption(renderer, element, changeDetector) {
            var _this = 
            // We inherit SuiDropdownMenuItem to automatically gain all keyboard navigation functionality.
            // This is not done via adding the .item class because it isn't supported by Angular.
            _super.call(this, renderer, element) || this;
            _this.changeDetector = changeDetector;
            _this.hasClasses = true;
            _this.isActive = false;
            _this.onSelected = new core.EventEmitter();
            // By default we make the default text an empty label, for the brief moment when it isn't displaying the correct one.
            _this.renderedText = "";
            _this.usesTemplate = false;
            return _this;
        }
        Object.defineProperty(SuiSelectOption.prototype, "formatter", {
            set: /**
             * @param {?} formatter
             * @return {?}
             */
            function (formatter) {
                if (!this.usesTemplate) {
                    this.renderedText = formatter(this.value);
                }
                else {
                    this.renderedText = "";
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} e
         * @return {?}
         */
        SuiSelectOption.prototype.onClick = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            var _this = this;
            e.eventHandled = true;
            setTimeout(function () { return _this.onSelected.emit(_this.value); });
        };
        SuiSelectOption.decorators = [
            { type: core.Component, args: [{
                        selector: "sui-select-option",
                        template: "\n<span #templateSibling></span>\n<span [innerHTML]=\"renderedText\"></span>\n"
                    }] }
        ];
        /** @nocollapse */
        SuiSelectOption.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef }
        ]; };
        SuiSelectOption.propDecorators = {
            hasClasses: [{ type: core.HostBinding, args: ["class.item",] }],
            value: [{ type: core.Input }],
            onSelected: [{ type: core.Output }],
            isActive: [{ type: core.HostBinding, args: ["class.active",] }],
            templateSibling: [{ type: core.ViewChild, args: ["templateSibling", { read: core.ViewContainerRef, static: true },] }],
            onClick: [{ type: core.HostListener, args: ["click", ["$event"],] }]
        };
        return SuiSelectOption;
    }(SuiDropdownMenuItem));
    function SuiSelectOption_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiSelectOption.prototype.hasClasses;
        /** @type {?} */
        SuiSelectOption.prototype.value;
        /** @type {?} */
        SuiSelectOption.prototype.onSelected;
        /** @type {?} */
        SuiSelectOption.prototype.isActive;
        /** @type {?} */
        SuiSelectOption.prototype.renderedText;
        /** @type {?} */
        SuiSelectOption.prototype.usesTemplate;
        /** @type {?} */
        SuiSelectOption.prototype.templateSibling;
        /** @type {?} */
        SuiSelectOption.prototype.changeDetector;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiSelectSearch = /** @class */ (function () {
        function SuiSelectSearch(_renderer, _element) {
            this._renderer = _renderer;
            this._element = _element;
            this.onQueryUpdated = new core.EventEmitter();
            this.onQueryKeyDown = new core.EventEmitter();
            this.hasClasses = true;
            this.autoComplete = "off";
        }
        Object.defineProperty(SuiSelectSearch.prototype, "query", {
            set: /**
             * @param {?} query
             * @return {?}
             */
            function (query) {
                this._renderer.setProperty(this._element.nativeElement, "value", query);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} query
         * @return {?}
         */
        SuiSelectSearch.prototype.updateQuery = /**
         * @param {?} query
         * @return {?}
         */
        function (query) {
            this.onQueryUpdated.emit(query);
        };
        /**
         * @param {?} e
         * @return {?}
         */
        SuiSelectSearch.prototype.onKeyDown = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            this.onQueryKeyDown.emit(e);
        };
        /**
         * @return {?}
         */
        SuiSelectSearch.prototype.focus = /**
         * @return {?}
         */
        function () {
            var _this = this;
            // Slightly delay to support in menu search.
            this._element.nativeElement.focus();
            setTimeout(function () { return _this._element.nativeElement.focus(); });
        };
        SuiSelectSearch.decorators = [
            { type: core.Directive, args: [{
                        selector: "input[suiSelectSearch]"
                    },] }
        ];
        /** @nocollapse */
        SuiSelectSearch.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        SuiSelectSearch.propDecorators = {
            hasClasses: [{ type: core.HostBinding, args: ["class.search",] }],
            autoComplete: [{ type: core.HostBinding, args: ["attr.autocomplete",] }],
            updateQuery: [{ type: core.HostListener, args: ["input", ["$event.target.value"],] }],
            onKeyDown: [{ type: core.HostListener, args: ["keydown", ["$event"],] }]
        };
        return SuiSelectSearch;
    }());
    function SuiSelectSearch_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiSelectSearch.prototype.hasClasses;
        /** @type {?} */
        SuiSelectSearch.prototype.autoComplete;
        /** @type {?} */
        SuiSelectSearch.prototype.onQueryUpdated;
        /** @type {?} */
        SuiSelectSearch.prototype.onQueryKeyDown;
        /** @type {?} */
        SuiSelectSearch.prototype._renderer;
        /** @type {?} */
        SuiSelectSearch.prototype._element;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @record
     * @template T
     */
    function IOptionContext() { }
    function IOptionContext_tsickle_Closure_declarations() {
        /** @type {?|undefined} */
        IOptionContext.prototype.query;
    }
    /**
     * @abstract
     * @template T, U
     */
    var SuiSelectBase = /** @class */ (function () {
        function SuiSelectBase(_element, _localizationService) {
            var _this = this;
            this._element = _element;
            this._localizationService = _localizationService;
            this.dropdownService = new DropdownService();
            // We do want an empty query to return all results.
            this.searchService = new SearchService(true);
            this.isSearchable = false;
            this.onLocaleUpdate();
            this._localizationService.onLanguageUpdate.subscribe(function () { return _this.onLocaleUpdate(); });
            this._renderedSubscriptions = [];
            this.icon = "dropdown";
            this.transition = "slide down";
            this.transitionDuration = 200;
            this.onTouched = new core.EventEmitter();
            this.hasClasses = true;
        }
        Object.defineProperty(SuiSelectBase.prototype, "isActive", {
            get: /**
             * @return {?}
             */
            function () {
                return this.dropdownService.isOpen;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "isVisible", {
            get: /**
             * @return {?}
             */
            function () {
                return this._menu.isVisible;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "hasSearchClass", {
            get: /**
             * @return {?}
             */
            function () {
                return this.isSearchable && !this.isSearchExternal;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "isSearching", {
            get: /**
             * @return {?}
             */
            function () {
                return this.searchService.isSearching;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "searchInput", {
            get: /**
             * @return {?}
             */
            function () {
                return this._manualSearch || this._internalSearch;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "tabindex", {
            get: /**
             * @return {?}
             */
            function () {
                if (this.isDisabled) {
                    // If disabled, remove from tabindex.
                    return -1;
                }
                if (this.dropdownService.isOpen && this.isSearchExternal) {
                    // If open & in menu search, remove from tabindex (as input always autofocusses).
                    return -1;
                }
                if (this._tabIndex != undefined) {
                    // If custom tabindex, default to that.
                    return this._tabIndex;
                }
                if (this.hasSearchClass) {
                    // If search input enabled, tab goes to input.
                    return -1;
                }
                // Otherwise, return default of 0.
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "isDisabled", {
            get: /**
             * @return {?}
             */
            function () {
                return this.dropdownService.isDisabled;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.dropdownService.isDisabled = !!value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "options", {
            set: /**
             * @param {?} options
             * @return {?}
             */
            function (options) {
                if (options) {
                    this.searchService.options = options;
                    this.optionsUpdateHook();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "optionsFilter", {
            set: /**
             * @param {?} filter
             * @return {?}
             */
            function (filter) {
                if (filter) {
                    this.searchService.optionsFilter = filter;
                    this.optionsUpdateHook();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "optionsLookup", {
            set: /**
             * @param {?} lookup
             * @return {?}
             */
            function (lookup) {
                if (lookup) {
                    this.searchService.optionsLookup = lookup;
                    this.optionsUpdateHook();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "filteredOptions", {
            get: /**
             * @return {?}
             */
            function () {
                return this.searchService.results;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "availableOptions", {
            get: /**
             * @return {?}
             */
            function () {
                return this.filteredOptions;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "query", {
            get: /**
             * @return {?}
             */
            function () {
                return this.isSearchable ? this.searchService.query : undefined;
            },
            set: /**
             * @param {?} query
             * @return {?}
             */
            function (query) {
                var _this = this;
                if (query != undefined) {
                    this.queryUpdateHook();
                    this.updateQuery(query);
                    // Update the rendered text as query has changed.
                    this._renderedOptions.forEach(function (ro) { return _this.initialiseRenderedOption(ro); });
                    if (this.searchInput) {
                        this.searchInput.query = query;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "labelField", {
            get: /**
             * @return {?}
             */
            function () {
                return this.searchService.optionsField;
            },
            set: /**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                this.searchService.optionsField = field;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "labelGetter", {
            get: /**
             * @return {?}
             */
            function () {
                var _this = this;
                // Helper function to retrieve the label from an item.
                return function (obj) {
                    var /** @type {?} */ label = Util.Object.readValue(obj, _this.labelField);
                    if (label != undefined) {
                        return label.toString();
                    }
                    return "";
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "valueGetter", {
            get: /**
             * @return {?}
             */
            function () {
                var _this = this;
                // Helper function to retrieve the value from an item.
                return function (obj) { return Util.Object.readValue(obj, _this.valueField); };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "configuredFormatter", {
            get: /**
             * @return {?}
             */
            function () {
                var _this = this;
                if (this._optionFormatter) {
                    return function (o) { return ((_this._optionFormatter))(o, _this.isSearchable ? _this.query : undefined); };
                }
                else if (this.searchService.optionsLookup) {
                    return function (o) { return _this.labelGetter(o); };
                }
                else {
                    return function (o) { return _this.searchService.highlightMatches(_this.labelGetter(o), _this.query || ""); };
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "optionFormatter", {
            set: /**
             * @param {?} formatter
             * @return {?}
             */
            function (formatter) {
                this._optionFormatter = formatter;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "localeValues", {
            get: /**
             * @return {?}
             */
            function () {
                return this._localizationService.override(this._localeValues, this.localeOverrides);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SuiSelectBase.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this._menu.service = this.dropdownService;
            // We manually specify the menu items to the menu because the @ContentChildren doesn't pick up our dynamically rendered items.
            this._menu.items = this._renderedOptions;
            this._menu.parentElement = this._element;
            if (this._manualSearch) {
                this.isSearchable = true;
                this.isSearchExternal = true;
            }
            if (this.searchInput) {
                this.searchInput.onQueryUpdated.subscribe(function (q) { return _this.query = q; });
                this.searchInput.onQueryKeyDown.subscribe(function (e) { return _this.onQueryInputKeydown(e); });
            }
            // We must call this immediately as changes doesn't fire when you subscribe.
            this.onAvailableOptionsRendered();
            this._renderedOptions.changes.subscribe(function () { return _this.onAvailableOptionsRendered(); });
        };
        /**
         * @return {?}
         */
        SuiSelectBase.prototype.onLocaleUpdate = /**
         * @return {?}
         */
        function () {
            this._localeValues = this._localizationService.get().select;
        };
        // Hook is here since Typescript doesn't yet support overriding getters & setters while still calling the superclass.
        /**
         * @return {?}
         */
        SuiSelectBase.prototype.optionsUpdateHook = /**
         * @return {?}
         */
        function () { };
        // Hook is here since Typescript doesn't yet support overriding getters & setters while still calling the superclass.
        /**
         * @return {?}
         */
        SuiSelectBase.prototype.queryUpdateHook = /**
         * @return {?}
         */
        function () { };
        /**
         * @param {?} query
         * @return {?}
         */
        SuiSelectBase.prototype.updateQuery = /**
         * @param {?} query
         * @return {?}
         */
        function (query) {
            var _this = this;
            // Update the query then open the dropdown, as after keyboard input it should always be open.
            this.searchService.updateQuery(query, function () {
                return _this.dropdownService.setOpenState(true);
            });
        };
        /**
         * @param {?=} delayed
         * @return {?}
         */
        SuiSelectBase.prototype.resetQuery = /**
         * @param {?=} delayed
         * @return {?}
         */
        function (delayed) {
            if (delayed === void 0) { delayed = true; }
            // The search delay is set to the transition duration to ensure results
            // aren't rendered as the select closes as that causes a sudden flash.
            if (delayed) {
                this.searchService.searchDelay = this._menu.menuTransitionDuration;
                this.searchService.updateQueryDelayed("");
            }
            else {
                this.searchService.updateQuery("");
            }
            if (this.searchInput) {
                this.searchInput.query = "";
            }
        };
        /**
         * @return {?}
         */
        SuiSelectBase.prototype.onAvailableOptionsRendered = /**
         * @return {?}
         */
        function () {
            var _this = this;
            // Unsubscribe from all previous subscriptions to avoid memory leaks on large selects.
            this._renderedSubscriptions.forEach(function (rs) { return rs.unsubscribe(); });
            this._renderedSubscriptions = [];
            this._renderedOptions.forEach(function (ro) {
                // Slightly delay initialisation to avoid change after checked errors. TODO - look into avoiding this!
                setTimeout(function () { return _this.initialiseRenderedOption(ro); });
                _this._renderedSubscriptions.push(ro.onSelected.subscribe(function () { return _this.selectOption(ro.value); }));
            });
            // If no options have been provided, autogenerate them from the rendered ones.
            if (this.searchService.options.length === 0 && !this.searchService.optionsLookup) {
                this.options = this._renderedOptions.map(function (ro) { return ro.value; });
            }
        };
        /**
         * @param {?} option
         * @return {?}
         */
        SuiSelectBase.prototype.initialiseRenderedOption = /**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            option.usesTemplate = !!this.optionTemplate;
            option.formatter = this.configuredFormatter;
            if (option.usesTemplate) {
                this.drawTemplate(option.templateSibling, option.value);
            }
            option.changeDetector.markForCheck();
        };
        /**
         * @param {?} options
         * @param {?} value
         * @return {?}
         */
        SuiSelectBase.prototype.findOption = /**
         * @param {?} options
         * @param {?} value
         * @return {?}
         */
        function (options, value) {
            var _this = this;
            // Tries to find an option in options array
            return options.find(function (o) { return value === _this.valueGetter(o); });
        };
        /**
         * @param {?} e
         * @return {?}
         */
        SuiSelectBase.prototype.onCaretClick = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (!e.eventHandled) {
                e.eventHandled = true;
                if (!this.dropdownService.isAnimating) {
                    this.dropdownService.setOpenState(!this.dropdownService.isOpen);
                    this.focus();
                }
            }
        };
        /**
         * @param {?} e
         * @return {?}
         */
        SuiSelectBase.prototype.onClick = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (!e.eventHandled && !this.dropdownService.isAnimating) {
                e.eventHandled = true;
                // If the dropdown is searchable, clicking should keep it open, otherwise we toggle the open state.
                this.dropdownService.setOpenState(this.isSearchable ? true : !this.dropdownService.isOpen);
                // Immediately focus the search input whenever clicking on the select.
                this.focus();
            }
        };
        /**
         * @return {?}
         */
        SuiSelectBase.prototype.onFocusIn = /**
         * @return {?}
         */
        function () {
            if (!this.dropdownService.isOpen && !this.dropdownService.isAnimating) {
                this.dropdownService.setOpenState(true);
                this.focus();
            }
        };
        /**
         * @param {?} e
         * @return {?}
         */
        SuiSelectBase.prototype.onFocusOut = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (!this._element.nativeElement.contains(e.relatedTarget)) {
                this.dropdownService.setOpenState(false);
                this.onTouched.emit();
            }
        };
        /**
         * @param {?} e
         * @return {?}
         */
        SuiSelectBase.prototype.onKeyPress = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (e.keyCode === KeyCode.Enter) {
                // Enables support for focussing and opening with the keyboard alone.
                // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
                this._element.nativeElement.click();
            }
        };
        /**
         * @param {?} e
         * @return {?}
         */
        SuiSelectBase.prototype.onKeyDown = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (!this.dropdownService.isOpen && e.keyCode === KeyCode.Down) {
                // Enables support for focussing and opening with the keyboard alone.
                // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
                this._element.nativeElement.click();
                e.preventDefault();
            }
        };
        /**
         * @param {?} event
         * @return {?}
         */
        SuiSelectBase.prototype.onQueryInputKeydown = /**
         * @param {?} event
         * @return {?}
         */
        function (event) { };
        /**
         * @return {?}
         */
        SuiSelectBase.prototype.focus = /**
         * @return {?}
         */
        function () {
            if (this.isSearchable && this.searchInput) {
                // Focusses the search input only when searchable.
                // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
                this.searchInput.focus();
            }
            else {
                this._element.nativeElement.focus();
            }
        };
        // Helper that draws the provided template beside the provided ViewContainerRef.
        /**
         * @param {?} siblingRef
         * @param {?} value
         * @return {?}
         */
        SuiSelectBase.prototype.drawTemplate = /**
         * @param {?} siblingRef
         * @param {?} value
         * @return {?}
         */
        function (siblingRef, value) {
            siblingRef.clear();
            // Use of `$implicit` means use of <ng-template let-option> syntax is supported.
            siblingRef.createEmbeddedView(this.optionTemplate, {
                $implicit: value,
                query: this.query
            });
        };
        /**
         * @return {?}
         */
        SuiSelectBase.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._renderedSubscriptions.forEach(function (s) { return s.unsubscribe(); });
        };
        SuiSelectBase.propDecorators = {
            _menu: [{ type: core.ViewChild, args: [SuiDropdownMenu, { static: true },] }],
            _renderedOptions: [{ type: core.ContentChildren, args: [SuiSelectOption, { descendants: true },] }],
            hasClasses: [{ type: core.HostBinding, args: ["class.ui",] }, { type: core.HostBinding, args: ["class.dropdown",] }],
            isActive: [{ type: core.HostBinding, args: ["class.active",] }],
            isVisible: [{ type: core.HostBinding, args: ["class.visible",] }],
            isSearchable: [{ type: core.Input }],
            hasSearchClass: [{ type: core.HostBinding, args: ["class.search",] }],
            isSearching: [{ type: core.HostBinding, args: ["class.loading",] }],
            _internalSearch: [{ type: core.ViewChild, args: [SuiSelectSearch, { static: true },] }],
            _manualSearch: [{ type: core.ContentChild, args: [SuiSelectSearch, { static: false },] }],
            _tabIndex: [{ type: core.Input, args: ["tabindex",] }],
            tabindex: [{ type: core.HostBinding, args: ["attr.tabindex",] }],
            isDisabled: [{ type: core.HostBinding, args: ["class.disabled",] }, { type: core.Input }],
            options: [{ type: core.Input }],
            optionsFilter: [{ type: core.Input }],
            optionsLookup: [{ type: core.Input }],
            labelField: [{ type: core.Input }],
            valueField: [{ type: core.Input }],
            optionTemplate: [{ type: core.Input }],
            optionFormatter: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            transition: [{ type: core.Input }],
            transitionDuration: [{ type: core.Input }],
            onTouched: [{ type: core.Output, args: ["touched",] }],
            onClick: [{ type: core.HostListener, args: ["click", ["$event"],] }],
            onFocusIn: [{ type: core.HostListener, args: ["focusin",] }],
            onFocusOut: [{ type: core.HostListener, args: ["focusout", ["$event"],] }],
            onKeyPress: [{ type: core.HostListener, args: ["keypress", ["$event"],] }],
            onKeyDown: [{ type: core.HostListener, args: ["keydown", ["$event"],] }]
        };
        return SuiSelectBase;
    }());
    function SuiSelectBase_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiSelectBase.prototype.dropdownService;
        /** @type {?} */
        SuiSelectBase.prototype.searchService;
        /** @type {?} */
        SuiSelectBase.prototype._menu;
        /** @type {?} */
        SuiSelectBase.prototype._renderedOptions;
        /** @type {?} */
        SuiSelectBase.prototype._renderedSubscriptions;
        /** @type {?} */
        SuiSelectBase.prototype.hasClasses;
        /** @type {?} */
        SuiSelectBase.prototype.isSearchable;
        /** @type {?} */
        SuiSelectBase.prototype.isSearchExternal;
        /** @type {?} */
        SuiSelectBase.prototype._internalSearch;
        /** @type {?} */
        SuiSelectBase.prototype._manualSearch;
        /** @type {?} */
        SuiSelectBase.prototype._tabIndex;
        /** @type {?} */
        SuiSelectBase.prototype.valueField;
        /** @type {?} */
        SuiSelectBase.prototype.optionTemplate;
        /** @type {?} */
        SuiSelectBase.prototype._optionFormatter;
        /** @type {?} */
        SuiSelectBase.prototype._localeValues;
        /** @type {?} */
        SuiSelectBase.prototype.localeOverrides;
        /** @type {?} */
        SuiSelectBase.prototype.icon;
        /** @type {?} */
        SuiSelectBase.prototype.transition;
        /** @type {?} */
        SuiSelectBase.prototype.transitionDuration;
        /** @type {?} */
        SuiSelectBase.prototype.onTouched;
        /** @type {?} */
        SuiSelectBase.prototype._element;
        /** @type {?} */
        SuiSelectBase.prototype._localizationService;
        /**
         * @abstract
         * @param {?} option
         * @return {?}
         */
        SuiSelectBase.prototype.selectOption = function (option) { };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // See https://github.com/Microsoft/TypeScript/issues/13449.
    var /** @type {?} */ templateRef$3 = core.TemplateRef;
    /**
     * @template T
     */
    var SuiMultiSelectLabel = /** @class */ (function (_super) {
        __extends(SuiMultiSelectLabel, _super);
        function SuiMultiSelectLabel(renderer, element, changeDetector, componentFactory) {
            var _this = _super.call(this, renderer, element, changeDetector) || this;
            _this.componentFactory = componentFactory;
            // Initialise transition functionality.
            _this._transitionController = new TransitionController(false, "inline-block");
            _this.setTransitionController(_this._transitionController);
            _this.onDeselected = new core.EventEmitter();
            _this.hasClasses = true;
            _this._transitionController.animate(new Transition("scale", 100, TransitionDirection.In));
            return _this;
        }
        Object.defineProperty(SuiMultiSelectLabel.prototype, "template", {
            get: /**
             * @return {?}
             */
            function () {
                return this._template;
            },
            set: /**
             * @param {?} template
             * @return {?}
             */
            function (template) {
                this._template = template;
                if (this.template) {
                    this.componentFactory.createView(this.templateSibling, this.template, {
                        $implicit: this.value,
                        query: this.query
                    });
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} e
         * @return {?}
         */
        SuiMultiSelectLabel.prototype.deselectOption = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            var _this = this;
            e.eventHandled = true;
            this._transitionController.animate(new Transition("scale", 100, TransitionDirection.Out, function () {
                return _this.onDeselected.emit(_this.value);
            }));
        };
        /**
         * @param {?} e
         * @return {?}
         */
        SuiMultiSelectLabel.prototype.onClick = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            e.eventHandled = true;
        };
        SuiMultiSelectLabel.decorators = [
            { type: core.Component, args: [{
                        selector: "sui-multi-select-label",
                        template: "\n<span #templateSibling></span>\n<span *ngIf=\"!template\" [innerHTML]=\"formatter(value)\"></span>\n<i class=\"delete icon\" (click)=\"deselectOption($event)\"></i>\n"
                    }] }
        ];
        /** @nocollapse */
        SuiMultiSelectLabel.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: SuiComponentFactory }
        ]; };
        SuiMultiSelectLabel.propDecorators = {
            hasClasses: [{ type: core.HostBinding, args: ["class.ui",] }, { type: core.HostBinding, args: ["class.label",] }],
            value: [{ type: core.Input }],
            query: [{ type: core.Input }],
            onDeselected: [{ type: core.Output, args: ["deselected",] }],
            formatter: [{ type: core.Input }],
            template: [{ type: core.Input }],
            templateSibling: [{ type: core.ViewChild, args: ["templateSibling", { read: core.ViewContainerRef, static: true },] }],
            onClick: [{ type: core.HostListener, args: ["click", ["$event"],] }]
        };
        return SuiMultiSelectLabel;
    }(SuiTransition));
    function SuiMultiSelectLabel_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiMultiSelectLabel.prototype.hasClasses;
        /** @type {?} */
        SuiMultiSelectLabel.prototype._transitionController;
        /** @type {?} */
        SuiMultiSelectLabel.prototype.value;
        /** @type {?} */
        SuiMultiSelectLabel.prototype.query;
        /** @type {?} */
        SuiMultiSelectLabel.prototype.onDeselected;
        /** @type {?} */
        SuiMultiSelectLabel.prototype.formatter;
        /** @type {?} */
        SuiMultiSelectLabel.prototype._template;
        /** @type {?} */
        SuiMultiSelectLabel.prototype.templateSibling;
        /** @type {?} */
        SuiMultiSelectLabel.prototype.componentFactory;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T, U
     */
    var SuiMultiSelect = /** @class */ (function (_super) {
        __extends(SuiMultiSelect, _super);
        function SuiMultiSelect(element, localizationService) {
            var _this = _super.call(this, element, localizationService) || this;
            _this.selectedOptions = [];
            _this.selectedOptionsChange = new core.EventEmitter();
            _this.hasLabels = true;
            _this.hasClasses = true;
            return _this;
        }
        Object.defineProperty(SuiMultiSelect.prototype, "filteredOptions", {
            get: /**
             * @return {?}
             */
            function () {
                var _this = this;
                if (this.maxSelectedReached) {
                    // If we have reached the maximum number of selections, then empty the results completely.
                    return [];
                }
                var /** @type {?} */ searchResults = this.searchService.results;
                if (!this.hasLabels) {
                    return searchResults;
                }
                else {
                    // Returns the search results \ selected options.
                    return searchResults
                        .filter(function (r) { return _this.selectedOptions.find(function (o) { return r === o; }) == undefined; });
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiMultiSelect.prototype, "availableOptions", {
            get: /**
             * @return {?}
             */
            function () {
                return this.filteredOptions;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiMultiSelect.prototype, "hasLabels", {
            get: /**
             * @return {?}
             */
            function () {
                return this._hasLabels;
            },
            set: /**
             * @param {?} hasLabels
             * @return {?}
             */
            function (hasLabels) {
                this._hasLabels = hasLabels;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiMultiSelect.prototype, "placeholder", {
            get: /**
             * @return {?}
             */
            function () {
                return this._placeholder || this.localeValues.multi.placeholder;
            },
            set: /**
             * @param {?} placeholder
             * @return {?}
             */
            function (placeholder) {
                this._placeholder = placeholder;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiMultiSelect.prototype, "zeroSelectionText", {
            get: /**
             * @return {?}
             */
            function () {
                return this._zeroSelectionText;
            },
            set: /**
             * @param {?} zeroSelectionText
             * @return {?}
             */
            function (zeroSelectionText) {
                this._zeroSelectionText = zeroSelectionText;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiMultiSelect.prototype, "defaultSelectionText", {
            get: /**
             * @return {?}
             */
            function () {
                return this._defaultSelectionText || this.localeValues.multi.placeholder;
            },
            set: /**
             * @param {?} defaultSelectionText
             * @return {?}
             */
            function (defaultSelectionText) {
                this._defaultSelectionText = "#{count} " + defaultSelectionText;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiMultiSelect.prototype, "maxSelectedReached", {
            get: /**
             * @return {?}
             */
            function () {
                if (this.maxSelected == undefined) {
                    // If there is no maximum then we can immediately return.
                    return false;
                }
                return this.selectedOptions.length === this.maxSelected;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiMultiSelect.prototype, "maxSelectedMessage", {
            get: /**
             * @return {?}
             */
            function () {
                return this._localizationService.interpolate(this.localeValues.multi.maxSelectedMessage, [["max", this.maxSelected.toString()]]);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiMultiSelect.prototype, "selectedMessage", {
            get: /**
             * @return {?}
             */
            function () {
                if (this.selectedOptions.length > 0) {
                    return this._localizationService.interpolate(this._defaultSelectionText ? this._defaultSelectionText : this.localeValues.multi.selectedMessage, [["count", this.selectedOptions.length.toString()]]);
                }
                else {
                    return this._localizationService.interpolate(this._defaultSelectionText ? this._defaultSelectionText : this.localeValues.multi.selectedMessage, [["count", this._zeroSelectionText ? this._zeroSelectionText : this.selectedOptions.length.toString()]]);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SuiMultiSelect.prototype.optionsUpdateHook = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this._writtenOptions && this.selectedOptions.length > 0) {
                // We need to check the options still exist.
                this.writeValue(this.selectedOptions.map(function (o) { return _this.valueGetter(o); }));
            }
            if (this._writtenOptions && this.searchService.options.length > 0) {
                // If there were values written by ngModel before the options had been loaded, this runs to fix it.
                this.selectedOptions = this._writtenOptions
                    // non-null assertion added here because Typescript doesn't recognise the non-null filter.
                    .map(function (v) { return ((_this.findOption(_this.searchService.options, v))); })
                    .filter(function (v) { return v != undefined; });
                if (this.selectedOptions.length === this._writtenOptions.length) {
                    this._writtenOptions = undefined;
                }
            }
        };
        /**
         * @param {?} option
         * @return {?}
         */
        SuiMultiSelect.prototype.initialiseRenderedOption = /**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            _super.prototype.initialiseRenderedOption.call(this, option);
            // Boldens the item so it appears selected in the dropdown.
            option.isActive = !this.hasLabels && this.selectedOptions.indexOf(option.value) !== -1;
        };
        /**
         * @param {?} option
         * @return {?}
         */
        SuiMultiSelect.prototype.selectOption = /**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            var _this = this;
            if (this.selectedOptions.indexOf(option) !== -1) {
                this.deselectOption(option);
                return;
            }
            this.selectedOptions.push(option);
            this.selectedOptionsChange.emit(this.selectedOptions.map(function (o) { return _this.valueGetter(o); }));
            this.resetQuery(false);
            // Automatically refocus the search input for better keyboard accessibility.
            this.focus();
            if (!this.hasLabels) {
                this.onAvailableOptionsRendered();
            }
        };
        /**
         * @param {?} values
         * @return {?}
         */
        SuiMultiSelect.prototype.writeValue = /**
         * @param {?} values
         * @return {?}
         */
        function (values) {
            var _this = this;
            if (values instanceof Array) {
                if (this.searchService.options.length > 0) {
                    // If the options have already been loaded, we can immediately match the ngModel values to options.
                    this.selectedOptions = values
                        // non-null assertion added here because Typescript doesn't recognise the non-null filter.
                        .map(function (v) { return ((_this.findOption(_this.searchService.options, v))); })
                        .filter(function (v) { return v != undefined; });
                }
                if (values.length > 0 && this.selectedOptions.length === 0) {
                    if (this.valueField && this.searchService.hasItemLookup) {
                        // If the search service has a selected lookup function, make use of that to load the initial values.
                        this.searchService
                            .initialLookup(values)
                            .then(function (items) { return _this.selectedOptions = items; });
                    }
                    else {
                        // Otherwise, cache the written value for when options are set.
                        this._writtenOptions = values;
                    }
                }
                if (values.length === 0) {
                    this.selectedOptions = [];
                }
            }
            else {
                this.selectedOptions = [];
            }
        };
        /**
         * @param {?} option
         * @return {?}
         */
        SuiMultiSelect.prototype.deselectOption = /**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            var _this = this;
            // Update selected options to the previously selected options \ {option}.
            this.selectedOptions = this.selectedOptions.filter(function (so) { return so !== option; });
            this.selectedOptionsChange.emit(this.selectedOptions.map(function (o) { return _this.valueGetter(o); }));
            // Automatically refocus the search input for better keyboard accessibility.
            this.focus();
            if (!this.hasLabels) {
                this.onAvailableOptionsRendered();
            }
        };
        /**
         * @param {?} event
         * @return {?}
         */
        SuiMultiSelect.prototype.onQueryInputKeydown = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event.keyCode === KeyCode.Backspace && this.query === "" && this.selectedOptions.length > 0) {
                // Deselect the rightmost option when the user presses backspace in the search input.
                this.deselectOption(this.selectedOptions[this.selectedOptions.length - 1]);
            }
        };
        SuiMultiSelect.decorators = [
            { type: core.Component, args: [{
                        selector: "sui-multi-select",
                        template: "\n<!-- Dropdown icon -->\n<i class=\"{{ icon }} icon\" (click)=\"onCaretClick($event)\"></i>\n\n<ng-container *ngIf=\"hasLabels\">\n<!-- Multi-select labels -->\n    <sui-multi-select-label *ngFor=\"let selected of selectedOptions;\"\n                            [value]=\"selected\"\n                            [query]=\"query\"\n                            [formatter]=\"configuredFormatter\"\n                            [template]=\"optionTemplate\"\n                            (deselected)=\"deselectOption($event)\"></sui-multi-select-label>\n</ng-container>\n\n<!-- Query input -->\n<input suiSelectSearch\n       type=\"text\"\n       [hidden]=\"!isSearchable || isSearchExternal\">\n\n<!-- Helper text -->\n<div class=\"text\"\n     [class.default]=\"hasLabels\"\n     [class.filtered]=\"!!query && !isSearchExternal\">\n    \n    <!-- Placeholder text -->\n    <ng-container *ngIf=\"hasLabels; else selectedBlock\">{{ placeholder }}</ng-container>\n    \n    <!-- Summary shown when labels are hidden -->\n    <ng-template #selectedBlock> {{ selectedMessage }}</ng-template>\n</div>\n\n<!-- Select dropdown menu -->\n<div class=\"menu\"\n     suiDropdownMenu\n     [menuTransition]=\"transition\"\n     [menuTransitionDuration]=\"transitionDuration\"\n     [menuAutoSelectFirst]=\"true\">\n\n    <ng-content></ng-content>\n    <ng-container *ngIf=\"availableOptions.length == 0 \">\n        <div *ngIf=\"!maxSelectedReached\" class=\"message\">{{ localeValues.noResultsMessage }}</div>\n        <div *ngIf=\"maxSelectedReached\" class=\"message\">{{ maxSelectedMessage }}</div>\n    </ng-container>\n</div>\n",
                        styles: ["\n:host input.search {\n    width: 12em !important;\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        SuiMultiSelect.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: SuiLocalizationService }
        ]; };
        SuiMultiSelect.propDecorators = {
            selectedOptionsChange: [{ type: core.Output }],
            hasLabels: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            maxSelected: [{ type: core.Input }],
            zeroSelectionText: [{ type: core.Input }],
            defaultSelectionText: [{ type: core.Input }],
            hasClasses: [{ type: core.HostBinding, args: ["class.multiple",] }]
        };
        return SuiMultiSelect;
    }(SuiSelectBase));
    function SuiMultiSelect_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiMultiSelect.prototype.selectedOptions;
        /** @type {?} */
        SuiMultiSelect.prototype._writtenOptions;
        /** @type {?} */
        SuiMultiSelect.prototype.selectedOptionsChange;
        /** @type {?} */
        SuiMultiSelect.prototype._hasLabels;
        /** @type {?} */
        SuiMultiSelect.prototype._placeholder;
        /** @type {?} */
        SuiMultiSelect.prototype.maxSelected;
        /** @type {?} */
        SuiMultiSelect.prototype._zeroSelectionText;
        /** @type {?} */
        SuiMultiSelect.prototype._defaultSelectionText;
        /** @type {?} */
        SuiMultiSelect.prototype.hasClasses;
    }
    /**
     * @template T, U
     */
    var SuiMultiSelectValueAccessor = /** @class */ (function (_super) {
        __extends(SuiMultiSelectValueAccessor, _super);
        function SuiMultiSelectValueAccessor(host) {
            return _super.call(this, host) || this;
        }
        SuiMultiSelectValueAccessor.decorators = [
            { type: core.Directive, args: [{
                        selector: "sui-multi-select",
                        host: {
                            "(selectedOptionsChange)": "onChange($event)",
                            "(touched)": "onTouched()"
                        },
                        providers: [customValueAccessorFactory(SuiMultiSelectValueAccessor)]
                    },] }
        ];
        /** @nocollapse */
        SuiMultiSelectValueAccessor.ctorParameters = function () { return [
            { type: SuiMultiSelect }
        ]; };
        return SuiMultiSelectValueAccessor;
    }(CustomValueAccessor));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T, U
     */
    var SuiSelect = /** @class */ (function (_super) {
        __extends(SuiSelect, _super);
        function SuiSelect(element, localizationService) {
            var _this = _super.call(this, element, localizationService) || this;
            _this.selectedOptionChange = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(SuiSelect.prototype, "placeholder", {
            get: /**
             * @return {?}
             */
            function () {
                return this._placeholder || this.localeValues.single.placeholder;
            },
            set: /**
             * @param {?} placeholder
             * @return {?}
             */
            function (placeholder) {
                this._placeholder = placeholder;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SuiSelect.prototype.optionsUpdateHook = /**
         * @return {?}
         */
        function () {
            if (!this._writtenOption && this.selectedOption) {
                // We need to check the option still exists.
                this.writeValue(this.valueGetter(this.selectedOption));
            }
            if (this._writtenOption && this.searchService.options.length > 0) {
                // If there was an value written by ngModel before the options had been loaded, this runs to fix it.
                this.selectedOption = this.findOption(this.searchService.options, this._writtenOption);
                if (this.selectedOption) {
                    this._writtenOption = undefined;
                    this.drawSelectedOption();
                }
            }
        };
        /**
         * @return {?}
         */
        SuiSelect.prototype.queryUpdateHook = /**
         * @return {?}
         */
        function () {
            // When the query is updated, we just abandon the current selection.
            this.selectedOption = undefined;
        };
        /**
         * @param {?} option
         * @return {?}
         */
        SuiSelect.prototype.selectOption = /**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            // Choose and emit the selected option.
            this.selectedOption = option;
            this.selectedOptionChange.emit(this.valueGetter(option));
            this.dropdownService.setOpenState(false);
            this.resetQuery();
            this.drawSelectedOption();
            // Automatically refocus the search input for better keyboard accessibility.
            this.focus();
        };
        /**
         * @param {?} value
         * @return {?}
         */
        SuiSelect.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (value != undefined) {
                if (this.searchService.options.length > 0) {
                    // If the options have already been loaded, we can immediately match the ngModel value to an option.
                    this.selectedOption = this.findOption(this.searchService.options, value);
                    this.drawSelectedOption();
                }
                if (this.selectedOption == undefined) {
                    if (this.valueField && this.searchService.hasItemLookup) {
                        // If the search service has a selected lookup function, make use of that to load the initial value.
                        this.searchService
                            .initialLookup(value)
                            .then(function (i) {
                            _this.selectedOption = i;
                            _this.drawSelectedOption();
                        });
                    }
                    else {
                        // Otherwise, cache the written value for when options are set.
                        this._writtenOption = value;
                    }
                }
            }
            else {
                this.selectedOption = undefined;
                this.drawSelectedOption();
            }
        };
        /**
         * @param {?} option
         * @return {?}
         */
        SuiSelect.prototype.initialiseRenderedOption = /**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            _super.prototype.initialiseRenderedOption.call(this, option);
            // Boldens the item so it appears selected in the dropdown.
            option.isActive = option.value === this.selectedOption;
        };
        /**
         * @return {?}
         */
        SuiSelect.prototype.drawSelectedOption = /**
         * @return {?}
         */
        function () {
            // Updates the active class on the newly selected option.
            if (this._renderedOptions) {
                this.onAvailableOptionsRendered();
            }
            if (this.selectedOption != undefined && this.optionTemplate) {
                this.drawTemplate(this._optionTemplateSibling, this.selectedOption);
            }
        };
        SuiSelect.decorators = [
            { type: core.Component, args: [{
                        selector: "sui-select",
                        template: "\n<!-- Query input -->\n<input suiSelectSearch\n       type=\"text\"\n       [hidden]=\"!isSearchable || isSearchExternal\">\n\n<!-- Placeholder text -->\n<div *ngIf=\"selectedOption == undefined\" class=\"default text\" [class.filtered]=\"query\">{{ placeholder }}</div>\n<!-- Selected item -->\n<div class=\"text\" [class.filtered]=\"query || selectedOption == undefined\">\n    <span #optionTemplateSibling></span>\n    <span *ngIf=\"!optionTemplate && selectedOption != undefined\" [innerHTML]=\"configuredFormatter(selectedOption)\"></span>\n</div>\n<!-- Dropdown icon -->\n<i class=\"{{ icon }} icon\" (click)=\"onCaretClick($event)\"></i>\n<!-- Select dropdown menu -->\n<div class=\"menu\"\n     suiDropdownMenu\n     [menuTransition]=\"transition\"\n     [menuTransitionDuration]=\"transitionDuration\"\n     [menuAutoSelectFirst]=\"isSearchable\">\n\n    <ng-content></ng-content>\n    <div *ngIf=\"isSearchable && availableOptions.length === 0\" class=\"message\">\n        {{ localeValues.noResultsMessage }}\n    </div>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        SuiSelect.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: SuiLocalizationService }
        ]; };
        SuiSelect.propDecorators = {
            _optionTemplateSibling: [{ type: core.ViewChild, args: ["optionTemplateSibling", { read: core.ViewContainerRef, static: true },] }],
            selectedOptionChange: [{ type: core.Output }],
            placeholder: [{ type: core.Input }]
        };
        return SuiSelect;
    }(SuiSelectBase));
    function SuiSelect_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiSelect.prototype.selectedOption;
        /** @type {?} */
        SuiSelect.prototype._writtenOption;
        /** @type {?} */
        SuiSelect.prototype._optionTemplateSibling;
        /** @type {?} */
        SuiSelect.prototype.selectedOptionChange;
        /** @type {?} */
        SuiSelect.prototype._placeholder;
    }
    /**
     * @template T, U
     */
    var SuiSelectValueAccessor = /** @class */ (function (_super) {
        __extends(SuiSelectValueAccessor, _super);
        function SuiSelectValueAccessor(host) {
            return _super.call(this, host) || this;
        }
        SuiSelectValueAccessor.decorators = [
            { type: core.Directive, args: [{
                        selector: "sui-select",
                        host: {
                            "(selectedOptionChange)": "onChange($event)",
                            "(touched)": "onTouched()"
                        },
                        providers: [customValueAccessorFactory(SuiSelectValueAccessor)]
                    },] }
        ];
        /** @nocollapse */
        SuiSelectValueAccessor.ctorParameters = function () { return [
            { type: SuiSelect }
        ]; };
        return SuiSelectValueAccessor;
    }(CustomValueAccessor));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiSelectModule = /** @class */ (function () {
        function SuiSelectModule() {
        }
        SuiSelectModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            SuiDropdownModule,
                            SuiUtilityModule,
                            SuiLocalizationModule
                        ],
                        declarations: [
                            SuiSelect,
                            SuiSelectOption,
                            SuiSelectSearch,
                            SuiSelectValueAccessor,
                            SuiMultiSelect,
                            SuiMultiSelectLabel,
                            SuiMultiSelectValueAccessor
                        ],
                        exports: [
                            SuiSelect,
                            SuiSelectOption,
                            SuiSelectSearch,
                            SuiSelectValueAccessor,
                            SuiMultiSelect,
                            SuiMultiSelectValueAccessor
                        ]
                    },] }
        ];
        return SuiSelectModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ SidebarTransition = {
        Overlay: "overlay",
        Push: "push",
        ScaleDown: "scale down",
        Uncover: "uncover",
        SlideAlong: "slide along",
        SlideOut: "slide out"
    };
    var /** @type {?} */ SidebarDirection = {
        Left: "left",
        Right: "right",
        Top: "top",
        Bottom: "bottom"
    };
    var SidebarService = /** @class */ (function () {
        function SidebarService(isVisible) {
            if (isVisible === void 0) { isVisible = false; }
            this.isVisible = isVisible;
            this.isAnimating = false;
            this.wasJustOpened = false;
            this.isVisibleChange = new core.EventEmitter();
            this.widthChange = new core.EventEmitter();
            this.heightChange = new core.EventEmitter();
            this.width = 260;
            this.height = 0;
            this.transition = SidebarTransition.Uncover;
        }
        Object.defineProperty(SidebarService.prototype, "width", {
            get: /**
             * @return {?}
             */
            function () {
                if (this.direction === SidebarDirection.Left) {
                    return this._width;
                }
                if (this.direction === SidebarDirection.Right) {
                    return -this._width;
                }
                return 0;
            },
            set: /**
             * @param {?} width
             * @return {?}
             */
            function (width) {
                this._width = width;
                this.widthChange.emit();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SidebarService.prototype, "height", {
            get: /**
             * @return {?}
             */
            function () {
                if (this.direction === SidebarDirection.Top) {
                    return this._height;
                }
                if (this.direction === SidebarDirection.Bottom) {
                    return -this._height;
                }
                return 0;
            },
            set: /**
             * @param {?} height
             * @return {?}
             */
            function (height) {
                this._height = height;
                this.heightChange.emit();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} isVisible
         * @return {?}
         */
        SidebarService.prototype.setVisibleState = /**
         * @param {?} isVisible
         * @return {?}
         */
        function (isVisible) {
            var _this = this;
            if (this.isVisible !== isVisible) {
                this.isVisible = isVisible;
                this.isAnimating = true;
                this.wasJustOpened = true;
                this.isVisibleChange.emit(isVisible);
                setTimeout(function () { return _this.wasJustOpened = false; });
                clearTimeout(this._isAnimatingTimeout);
                this._isAnimatingTimeout = window.setTimeout(function () { return _this.isAnimating = false; }, 500);
            }
        };
        /**
         * @return {?}
         */
        SidebarService.prototype.toggleVisibleState = /**
         * @return {?}
         */
        function () {
            this.setVisibleState(!this.isVisible);
        };
        return SidebarService;
    }());
    function SidebarService_tsickle_Closure_declarations() {
        /** @type {?} */
        SidebarService.prototype.isVisible;
        /** @type {?} */
        SidebarService.prototype.isAnimating;
        /** @type {?} */
        SidebarService.prototype.wasJustOpened;
        /** @type {?} */
        SidebarService.prototype.direction;
        /** @type {?} */
        SidebarService.prototype._width;
        /** @type {?} */
        SidebarService.prototype._height;
        /** @type {?} */
        SidebarService.prototype.isVisibleChange;
        /** @type {?} */
        SidebarService.prototype.widthChange;
        /** @type {?} */
        SidebarService.prototype.heightChange;
        /** @type {?} */
        SidebarService.prototype._isAnimatingTimeout;
        /** @type {?} */
        SidebarService.prototype.transition;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiSidebar = /** @class */ (function () {
        function SuiSidebar(_renderer, _element) {
            var _this = this;
            this._renderer = _renderer;
            this._element = _element;
            this.service = new SidebarService();
            // We set the default here as well to force the classes to update.
            this.transition = SidebarTransition.Uncover;
            this.direction = SidebarDirection.Left;
            setTimeout(function () { return _this.updateDimensions(); });
            this.service.isVisibleChange.subscribe(function () { return _this.updateDimensions(); });
            this.hasClasses = true;
        }
        Object.defineProperty(SuiSidebar.prototype, "transition", {
            get: /**
             * @return {?}
             */
            function () {
                return this.service.transition;
            },
            set: /**
             * @param {?} transition
             * @return {?}
             */
            function (transition) {
                var _this = this;
                this.service.transition.split(" ").forEach(function (c) { return _this.setClass(c, false); });
                this.service.transition = transition;
                this.service.transition.split(" ").forEach(function (c) { return _this.setClass(c, true); });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSidebar.prototype, "direction", {
            get: /**
             * @return {?}
             */
            function () {
                return this.service.direction;
            },
            set: /**
             * @param {?} direction
             * @return {?}
             */
            function (direction) {
                this.setClass(this.service.direction, false);
                this.service.direction = direction;
                this.setClass(this.service.direction, true);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSidebar.prototype, "isVisible", {
            get: /**
             * @return {?}
             */
            function () {
                return this.service.isVisible;
            },
            set: /**
             * @param {?} isVisible
             * @return {?}
             */
            function (isVisible) {
                this.service.setVisibleState(isVisible);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSidebar.prototype, "isVisibleChange", {
            get: /**
             * @return {?}
             */
            function () {
                return this.service.isVisibleChange;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSidebar.prototype, "isAnimating", {
            get: /**
             * @return {?}
             */
            function () {
                return this.service.isAnimating;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SuiSidebar.prototype.updateDimensions = /**
         * @return {?}
         */
        function () {
            this.service.width = this._element.nativeElement.offsetWidth;
            this.service.height = this._element.nativeElement.offsetHeight;
        };
        /**
         * @param {?} className
         * @param {?=} isAdd
         * @return {?}
         */
        SuiSidebar.prototype.setClass = /**
         * @param {?} className
         * @param {?=} isAdd
         * @return {?}
         */
        function (className, isAdd) {
            if (isAdd === void 0) { isAdd = true; }
            if (isAdd) {
                this._renderer.addClass(this._element.nativeElement, className);
            }
            else {
                this._renderer.removeClass(this._element.nativeElement, className);
            }
        };
        /**
         * @return {?}
         */
        SuiSidebar.prototype.open = /**
         * @return {?}
         */
        function () {
            this.service.setVisibleState(true);
        };
        /**
         * @return {?}
         */
        SuiSidebar.prototype.close = /**
         * @return {?}
         */
        function () {
            this.service.setVisibleState(false);
        };
        /**
         * @return {?}
         */
        SuiSidebar.prototype.toggle = /**
         * @return {?}
         */
        function () {
            this.service.toggleVisibleState();
        };
        SuiSidebar.decorators = [
            { type: core.Component, args: [{
                        selector: "sui-sidebar",
                        template: "<ng-content></ng-content>"
                    }] }
        ];
        /** @nocollapse */
        SuiSidebar.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        SuiSidebar.propDecorators = {
            hasClasses: [{ type: core.HostBinding, args: ["class.ui",] }, { type: core.HostBinding, args: ["class.sidebar",] }, { type: core.HostBinding, args: ["class.menu",] }],
            transition: [{ type: core.Input }],
            direction: [{ type: core.Input }],
            isVisible: [{ type: core.HostBinding, args: ["class.visible",] }, { type: core.Input }],
            isVisibleChange: [{ type: core.Output }],
            isAnimating: [{ type: core.HostBinding, args: ["class.animating",] }]
        };
        return SuiSidebar;
    }());
    function SuiSidebar_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiSidebar.prototype.service;
        /** @type {?} */
        SuiSidebar.prototype.hasClasses;
        /** @type {?} */
        SuiSidebar.prototype._renderer;
        /** @type {?} */
        SuiSidebar.prototype._element;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiSidebarSibling = /** @class */ (function () {
        function SuiSidebarSibling(_renderer, _element) {
            this._renderer = _renderer;
            this._element = _element;
            this.isDimmedWhenVisible = false;
            this.hasClasses = true;
        }
        Object.defineProperty(SuiSidebarSibling.prototype, "service", {
            get: /**
             * @return {?}
             */
            function () {
                return this._service;
            },
            set: /**
             * @param {?} service
             * @return {?}
             */
            function (service) {
                var _this = this;
                this._service = service;
                setTimeout(function () { return _this.updateTransform(); });
                this._service.isVisibleChange.subscribe(function () { return _this.updateTransform(); });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSidebarSibling.prototype, "isVisible", {
            get: /**
             * @return {?}
             */
            function () {
                if (!this.service) {
                    return false;
                }
                return this.service.isVisible;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSidebarSibling.prototype, "isDimmed", {
            get: /**
             * @return {?}
             */
            function () {
                if (!this.service) {
                    return false;
                }
                return this.service.isVisible && this.isDimmedWhenVisible;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SuiSidebarSibling.prototype.updateTransform = /**
         * @return {?}
         */
        function () {
            this._renderer.removeStyle(this._element.nativeElement, "transform");
            this._renderer.removeStyle(this._element.nativeElement, "-webkit-transform");
            if (this.service.isVisible &&
                this.service.transition !== SidebarTransition.Overlay &&
                this.service.transition !== SidebarTransition.ScaleDown) {
                var /** @type {?} */ translate = "translate3d(" + this.service.width + "px, " + this.service.height + "px, 0)";
                this._renderer.setStyle(this._element.nativeElement, "transform", translate);
                this._renderer.setStyle(this._element.nativeElement, "-webkit-transform", translate);
            }
        };
        /**
         * @param {?} event
         * @return {?}
         */
        SuiSidebarSibling.prototype.onClick = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (this.service.isVisible && !this.service.wasJustOpened) {
                this.service.setVisibleState(false);
            }
        };
        SuiSidebarSibling.decorators = [
            { type: core.Component, args: [{
                        selector: "sui-sidebar-sibling",
                        template: "<ng-content></ng-content>",
                        styles: ["\n:host {\n    display: block;\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        SuiSidebarSibling.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        SuiSidebarSibling.propDecorators = {
            isDimmedWhenVisible: [{ type: core.Input }],
            isVisible: [{ type: core.HostBinding, args: ["class.visible",] }],
            isDimmed: [{ type: core.HostBinding, args: ["class.dimmed",] }],
            hasClasses: [{ type: core.HostBinding, args: ["class.pusher",] }],
            onClick: [{ type: core.HostListener, args: ["click", ["$event"],] }]
        };
        return SuiSidebarSibling;
    }());
    function SuiSidebarSibling_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiSidebarSibling.prototype._service;
        /** @type {?} */
        SuiSidebarSibling.prototype.isDimmedWhenVisible;
        /** @type {?} */
        SuiSidebarSibling.prototype.hasClasses;
        /** @type {?} */
        SuiSidebarSibling.prototype._renderer;
        /** @type {?} */
        SuiSidebarSibling.prototype._element;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiSidebarContainer = /** @class */ (function () {
        function SuiSidebarContainer() {
            this.hasClasses = true;
        }
        /**
         * @return {?}
         */
        SuiSidebarContainer.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            if (!this.sidebar) {
                throw new Error("You must include a <sui-sidebar> element within the container.");
            }
            this.service = this.sidebar.service;
            if (!this.sibling) {
                throw new Error("You must include a <sui-sidebar-sibling> element within the container.");
            }
            this.sibling.service = this.service;
        };
        SuiSidebarContainer.decorators = [
            { type: core.Component, args: [{
                        selector: "sui-sidebar-container",
                        template: "<ng-content></ng-content>",
                        styles: ["\n:host {\n    display: block;\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        SuiSidebarContainer.ctorParameters = function () { return []; };
        SuiSidebarContainer.propDecorators = {
            hasClasses: [{ type: core.HostBinding, args: ["class.pushable",] }],
            sidebar: [{ type: core.ContentChild, args: [SuiSidebar, { static: false },] }],
            sibling: [{ type: core.ContentChild, args: [SuiSidebarSibling, { static: false },] }]
        };
        return SuiSidebarContainer;
    }());
    function SuiSidebarContainer_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiSidebarContainer.prototype.service;
        /** @type {?} */
        SuiSidebarContainer.prototype.hasClasses;
        /** @type {?} */
        SuiSidebarContainer.prototype.sidebar;
        /** @type {?} */
        SuiSidebarContainer.prototype.sibling;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiSidebarModule = /** @class */ (function () {
        function SuiSidebarModule() {
        }
        SuiSidebarModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            SuiSidebar,
                            SuiSidebarContainer,
                            SuiSidebarSibling
                        ],
                        exports: [
                            SuiSidebar,
                            SuiSidebarContainer,
                            SuiSidebarSibling
                        ]
                    },] }
        ];
        return SuiSidebarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Tab = /** @class */ (function () {
        function Tab(header, content) {
            var _this = this;
            this.id = header.id;
            this.header = header;
            this.content = content;
            // So that the header and content isActive properties are always in sync.
            this.header.isActiveChange
                .subscribe(function () { return _this.content.isActive = _this.isActive; });
        }
        Object.defineProperty(Tab.prototype, "isActive", {
            get: /**
             * @return {?}
             */
            function () {
                return this.header.isActive;
            },
            set: /**
             * @param {?} active
             * @return {?}
             */
            function (active) {
                // Use `setActiveState` so as not to fire 'external changes' event.
                this.header.setActiveState(active);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Tab.prototype, "isDisabled", {
            get: /**
             * @return {?}
             */
            function () {
                return this.header.isDisabled;
            },
            enumerable: true,
            configurable: true
        });
        return Tab;
    }());
    function Tab_tsickle_Closure_declarations() {
        /** @type {?} */
        Tab.prototype.id;
        /** @type {?} */
        Tab.prototype.header;
        /** @type {?} */
        Tab.prototype.content;
        /** @type {?} */
        Tab.prototype.index;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiTabHeader = /** @class */ (function () {
        function SuiTabHeader() {
            this._isActive = false;
            this.isActiveChange = new core.EventEmitter();
            this.isActiveExternalChange = new core.EventEmitter();
            this.onActivate = new core.EventEmitter();
            this.onDeactivate = new core.EventEmitter();
            this.isDisabled = false;
            this.hasClasses = true;
        }
        Object.defineProperty(SuiTabHeader.prototype, "isActive", {
            get: /**
             * @return {?}
             */
            function () {
                return this._isActive;
            },
            set: /**
             * @param {?} active
             * @return {?}
             */
            function (active) {
                var _this = this;
                var /** @type {?} */ isActive = active;
                // Only used by @Input(), runs whenever user input changes `isActive`.
                // Run in timeout because `isDisabled` can prohibit user from changing `isActive`.
                // so update is delayed to avoid 'changed after checked' error.
                setTimeout(function () {
                    // Only allow change if tab header is not disabled.
                    isActive = !_this.isDisabled ? active : false;
                    _this.setActiveState(isActive);
                    // Fire 'external change' event as user input has occured.
                    _this.isActiveExternalChange.emit(isActive);
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiTabHeader.prototype, "isDisabled", {
            get: /**
             * @return {?}
             */
            function () {
                return this._isDisabled;
            },
            set: /**
             * @param {?} disabled
             * @return {?}
             */
            function (disabled) {
                // Only update if value provided is different to current one.
                if (this._isDisabled !== disabled) {
                    this._isDisabled = disabled;
                    // If now disabled, then tab header must be deactivated.
                    if (this.isDisabled) {
                        this.isActive = false;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} active
         * @return {?}
         */
        SuiTabHeader.prototype.setActiveState = /**
         * @param {?} active
         * @return {?}
         */
        function (active) {
            // If (cast) active value has changed:
            if (!!this._isActive !== active) {
                // Update to the new value.
                this._isActive = active;
                // Fire the appropriate activation event.
                if (active) {
                    this.onActivate.emit();
                }
                else {
                    this.onDeactivate.emit();
                }
            }
            // Regardless, emit a change to `isActive`, so [(isActive)] works correctly.
            this.isActiveChange.emit(active);
        };
        /**
         * @return {?}
         */
        SuiTabHeader.prototype.onClick = /**
         * @return {?}
         */
        function () {
            if (!this.isDisabled) {
                // Activate the tab when clicked, so long as it isn't disabled.
                this.isActive = true;
            }
        };
        SuiTabHeader.decorators = [
            { type: core.Directive, args: [{
                        selector: "[suiTabHeader]"
                    },] }
        ];
        /** @nocollapse */
        SuiTabHeader.ctorParameters = function () { return []; };
        SuiTabHeader.propDecorators = {
            hasClasses: [{ type: core.HostBinding, args: ["class.item",] }],
            id: [{ type: core.Input, args: ["suiTabHeader",] }],
            isActiveChange: [{ type: core.Output }],
            onActivate: [{ type: core.Output, args: ["activate",] }],
            onDeactivate: [{ type: core.Output, args: ["deactivate",] }],
            isActive: [{ type: core.HostBinding, args: ["class.active",] }, { type: core.Input }],
            isDisabled: [{ type: core.HostBinding, args: ["class.disabled",] }, { type: core.Input }],
            onClick: [{ type: core.HostListener, args: ["click",] }]
        };
        return SuiTabHeader;
    }());
    function SuiTabHeader_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiTabHeader.prototype.hasClasses;
        /** @type {?} */
        SuiTabHeader.prototype.id;
        /** @type {?} */
        SuiTabHeader.prototype._isActive;
        /** @type {?} */
        SuiTabHeader.prototype.isActiveChange;
        /** @type {?} */
        SuiTabHeader.prototype.isActiveExternalChange;
        /** @type {?} */
        SuiTabHeader.prototype.onActivate;
        /** @type {?} */
        SuiTabHeader.prototype.onDeactivate;
        /** @type {?} */
        SuiTabHeader.prototype._isDisabled;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiTabContent = /** @class */ (function () {
        function SuiTabContent() {
            this.isActive = false;
            this.hasClasses = true;
        }
        SuiTabContent.decorators = [
            { type: core.Directive, args: [{
                        selector: "[suiTabContent]"
                    },] }
        ];
        /** @nocollapse */
        SuiTabContent.ctorParameters = function () { return []; };
        SuiTabContent.propDecorators = {
            hasClasses: [{ type: core.HostBinding, args: ["class.tab",] }],
            id: [{ type: core.Input, args: ["suiTabContent",] }],
            isActive: [{ type: core.HostBinding, args: ["class.active",] }]
        };
        return SuiTabContent;
    }());
    function SuiTabContent_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiTabContent.prototype.hasClasses;
        /** @type {?} */
        SuiTabContent.prototype.id;
        /** @type {?} */
        SuiTabContent.prototype.isActive;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiTabset = /** @class */ (function () {
        function SuiTabset() {
            this.tabs = [];
            this._barrierCount = 0;
        }
        Object.defineProperty(SuiTabset.prototype, "activeTab", {
            get: /**
             * @return {?}
             */
            function () {
                return this._activeTab;
            },
            set: /**
             * @param {?} tab
             * @return {?}
             */
            function (tab) {
                this._activeTab = tab;
                tab.isActive = true;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SuiTabset.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            // Fire `internalComponentsUpdated` when the query lists change.
            this._tabHeaders.changes.subscribe(function () { return _this.internalComponentsUpdated(); });
            this._tabContents.changes.subscribe(function () { return _this.internalComponentsUpdated(); });
            // Initially load the tabs.
            this.loadTabs();
        };
        /**
         * @return {?}
         */
        SuiTabset.prototype.internalComponentsUpdated = /**
         * @return {?}
         */
        function () {
            // We are using a 'counting barrier of n = 2', i.e. the code within only runs after the method is called twice.
            // This is so that both the headers and contents query lists can update before we run code that matches the two up.
            this._barrierCount++;
            if (this._barrierCount === 2) {
                // Reset the barrier so it can be called again.
                this._barrierCount = 0;
                // Update the tabs.
                this.loadTabs();
            }
        };
        /**
         * @return {?}
         */
        SuiTabset.prototype.loadTabs = /**
         * @return {?}
         */
        function () {
            var _this = this;
            // Remove any tabs that no longer have an associated header.
            this.tabs = this.tabs.filter(function (t) { return !!_this._tabHeaders.find(function (tH) { return tH === t.header; }); });
            this._tabHeaders
                // Filter out the loaded headers with attached tab instances.
                .filter(function (tH) { return !_this.tabs.find(function (t) { return t.header === tH; }); })
                .forEach(function (tH) {
                var /** @type {?} */ content = _this._tabContents.find(function (tC) { return tC.id === tH.id; });
                if (!content) {
                    // Error if an associated tab content cannot be found for the given header.
                    throw new Error("A [suiTabHeader] must have a related [suiTabContent].");
                }
                // Create a new tab instance for this header & content combo.
                var /** @type {?} */ tab = new Tab(tH, content);
                // Subscribe to any external changes in the tab header's active state. External changes are triggered by user input.
                tab.header.isActiveExternalChange.subscribe(function () { return _this.onHeaderActiveChanged(tab); });
                // Add the new instance to the list of tabs.
                _this.tabs.push(tab);
            });
            // Assign each tab an index (which denotes the order they physically appear in).
            this._tabHeaders
                .forEach(function (tH, i) {
                var /** @type {?} */ tab = _this.tabs.find(function (t) { return t.header === tH; });
                if (tab) {
                    tab.index = i;
                }
            });
            // Sort the tabs by their index.
            this.tabs.sort(function (a, b) { return a.index - b.index; });
            if (!this.activeTab) { // Check if there are no current existing active tabs.
                // Check if there are no current existing active tabs.
                // If so, we must activate the first available tab.
                this.activateFirstTab();
            }
            else if (!this.tabs.find(function (t) { return t === _this.activeTab; })) { // O'wise check if current active tab has been deleted.
                // O'wise check if current active tab has been deleted.
                // If so, we must find the closest.
                // Use `setTimeout` as this causes a 'changed after checked' error o'wise.
                setTimeout(function () { return _this.activateClosestTab(_this.activeTab); });
            }
            if (this.tabs.length === 0) {
                // Error if there aren't any tabs in the tabset.
                throw new Error("You cannot have no tabs!");
            }
        };
        /**
         * @param {?} tab
         * @return {?}
         */
        SuiTabset.prototype.onHeaderActiveChanged = /**
         * @param {?} tab
         * @return {?}
         */
        function (tab) {
            // If the tab has become activated, but was not previously the active tab:
            if (tab.isActive && this.activeTab !== tab) {
                // Deactivate all of the tabs.
                this.tabs.filter(function (t) { return t !== tab; }).forEach(function (t) { return t.isActive = false; });
                // Set the currently active tab to this one.
                this.activeTab = tab;
            }
            // If the tab has become deactivated, but was previously the active tab:
            if (!tab.isActive && this.activeTab === tab) {
                // Activate the closest tab to it.
                this.activateClosestTab(tab);
            }
        };
        /**
         * @return {?}
         */
        SuiTabset.prototype.activateFirstTab = /**
         * @return {?}
         */
        function () {
            this.activeTab = this.tabs[0];
        };
        /**
         * @param {?} tab
         * @return {?}
         */
        SuiTabset.prototype.activateClosestTab = /**
         * @param {?} tab
         * @return {?}
         */
        function (tab) {
            var /** @type {?} */ nextAvailable;
            // When the exited tab's index is higher than all available tabs,
            if (tab.index >= this.tabs.length) {
                // Activate the last tab.
                nextAvailable = this.tabs[this.tabs.length - 1];
            }
            // If that didn't work, try the following cases:
            if (!nextAvailable) {
                if (!this.tabs.find(function (t) { return t === tab; })) { // When the exited tab no longer exists,
                    // When the exited tab no longer exists,
                    // Replace it with a tab at the same index.
                    nextAvailable = this.tabs[tab.index];
                }
                else { // Or if the exited tab still exists,
                    // Or if the exited tab still exists,
                    // Go to the tab immediately to the left.
                    nextAvailable = this.tabs[Math.max(tab.index - 1, 0)];
                }
            }
            // However, if the chosen tab is disabled,
            if (nextAvailable.isDisabled) {
                // Activate the closest available tab to it.
                return this.activateClosestTab(nextAvailable);
            }
            this.activeTab = nextAvailable;
        };
        SuiTabset.decorators = [
            { type: core.Component, args: [{
                        selector: "sui-tabset",
                        template: "<ng-content></ng-content>"
                    }] }
        ];
        /** @nocollapse */
        SuiTabset.ctorParameters = function () { return []; };
        SuiTabset.propDecorators = {
            _tabHeaders: [{ type: core.ContentChildren, args: [SuiTabHeader,] }],
            _tabContents: [{ type: core.ContentChildren, args: [SuiTabContent,] }]
        };
        return SuiTabset;
    }());
    function SuiTabset_tsickle_Closure_declarations() {
        /** @type {?} */
        SuiTabset.prototype._tabHeaders;
        /** @type {?} */
        SuiTabset.prototype._tabContents;
        /** @type {?} */
        SuiTabset.prototype.tabs;
        /** @type {?} */
        SuiTabset.prototype._activeTab;
        /** @type {?} */
        SuiTabset.prototype._barrierCount;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiTabsModule = /** @class */ (function () {
        function SuiTabsModule() {
        }
        SuiTabsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            SuiTabset,
                            SuiTabHeader,
                            SuiTabContent
                        ],
                        exports: [
                            SuiTabset,
                            SuiTabHeader,
                            SuiTabContent
                        ]
                    },] }
        ];
        return SuiTabsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuiModule = /** @class */ (function () {
        function SuiModule() {
        }
        SuiModule.decorators = [
            { type: core.NgModule, args: [{
                        exports: [
                            SuiMessageModule,
                            SuiPaginationModule,
                            SuiAccordionModule,
                            SuiCheckboxModule,
                            SuiCollapseModule,
                            SuiDatepickerModule,
                            SuiDimmerModule,
                            SuiDropdownModule,
                            SuiModalModule,
                            SuiPopupModule,
                            SuiProgressModule,
                            SuiRatingModule,
                            SuiSearchModule,
                            SuiSelectModule,
                            SuiSidebarModule,
                            SuiTabsModule,
                            SuiTransitionModule,
                            SuiLocalizationModule,
                            SuiUtilityModule
                        ]
                    },] }
        ];
        return SuiModule;
    }());

    exports.ComponentModalConfig = ComponentModalConfig;
    exports.DatepickerMode = DatepickerMode;
    exports.DropdownAutoCloseType = DropdownAutoCloseType;
    exports.ModalConfig = ModalConfig;
    exports.ModalControls = ModalControls;
    exports.ModalSize = ModalSize;
    exports.ModalTemplate = ModalTemplate;
    exports.PopupPlacement = PositioningPlacement;
    exports.PopupTrigger = PopupTrigger;
    exports.SearchService = SearchService;
    exports.SidebarDirection = SidebarDirection;
    exports.SidebarTransition = SidebarTransition;
    exports.SuiAccordionModule = SuiAccordionModule;
    exports.SuiActiveModal = ActiveModal;
    exports.SuiCheckboxModule = SuiCheckboxModule;
    exports.SuiCollapseModule = SuiCollapseModule;
    exports.SuiDatepickerModule = SuiDatepickerModule;
    exports.SuiDimmerModule = SuiDimmerModule;
    exports.SuiDropdownModule = SuiDropdownModule;
    exports.SuiLocalizationModule = SuiLocalizationModule;
    exports.SuiLocalizationService = SuiLocalizationService;
    exports.SuiMessageModule = SuiMessageModule;
    exports.SuiModal = Modal;
    exports.SuiModalModule = SuiModalModule;
    exports.SuiModalService = SuiModalService;
    exports.SuiModule = SuiModule;
    exports.SuiPaginationModule = SuiPaginationModule;
    exports.SuiPopupConfig = SuiPopupConfig;
    exports.SuiPopupModule = SuiPopupModule;
    exports.SuiProgressModule = SuiProgressModule;
    exports.SuiRatingModule = SuiRatingModule;
    exports.SuiSearchModule = SuiSearchModule;
    exports.SuiSelectModule = SuiSelectModule;
    exports.SuiSidebarModule = SuiSidebarModule;
    exports.SuiTabsModule = SuiTabsModule;
    exports.SuiTransition = SuiTransition;
    exports.SuiTransitionModule = SuiTransitionModule;
    exports.SuiUtilityModule = SuiUtilityModule;
    exports.TemplateModalConfig = TemplateModalConfig;
    exports.Transition = Transition;
    exports.TransitionController = TransitionController;
    exports.TransitionDirection = TransitionDirection;
    exports.ɵa = SuiLocalizationService;
    exports.ɵb = SuiLocalizationModule;
    exports.ɵba = SuiCalendarDateView;
    exports.ɵbb = SuiCalendarHourView;
    exports.ɵbc = SuiCalendarMinuteView;
    exports.ɵbd = SuiCalendarMonthView;
    exports.ɵbe = SuiCalendarYearView;
    exports.ɵbf = SuiDatepickerModule;
    exports.ɵbg = SuiDimmer;
    exports.ɵbh = SuiDimmerModule;
    exports.ɵbi = SuiDropdownMenuItem;
    exports.ɵbj = SuiDropdownMenu;
    exports.ɵbk = SuiDropdown;
    exports.ɵbl = SuiDropdownModule;
    exports.ɵbm = ModalConfig;
    exports.ɵbn = ModalControls;
    exports.ɵbo = ModalTemplate;
    exports.ɵbp = SuiModal;
    exports.ɵbq = SuiModalService;
    exports.ɵbr = SuiModalModule;
    exports.ɵbs = CustomValidator;
    exports.ɵbt = customValidatorFactory;
    exports.ɵbu = CustomValueAccessor;
    exports.ɵbv = customValueAccessorFactory;
    exports.ɵbw = DatePrecision;
    exports.ɵbx = SuiComponentFactory;
    exports.ɵby = SuiUtilityModule;
    exports.ɵbz = SuiPopupComponentController;
    exports.ɵc = SuiMessage;
    exports.ɵca = PopupConfig;
    exports.ɵcb = SuiPopupController;
    exports.ɵcc = SuiPopupTemplateController;
    exports.ɵcd = SuiPopupArrow;
    exports.ɵce = SuiPopup;
    exports.ɵcf = SuiPopupDirective;
    exports.ɵcg = SuiPopupConfig;
    exports.ɵch = SuiPopupModule;
    exports.ɵci = SuiProgress;
    exports.ɵcj = SuiProgressModule;
    exports.ɵck = SuiRating;
    exports.ɵcl = SuiRatingValueAccessor;
    exports.ɵcm = SuiRatingModule;
    exports.ɵcn = SuiSearchResult;
    exports.ɵco = SuiSearch;
    exports.ɵcp = SuiSearchModule;
    exports.ɵcq = SuiSelectBase;
    exports.ɵcr = SuiMultiSelectLabel;
    exports.ɵcs = SuiMultiSelect;
    exports.ɵct = SuiMultiSelectValueAccessor;
    exports.ɵcu = SuiSelectOption;
    exports.ɵcv = SuiSelect;
    exports.ɵcw = SuiSelectValueAccessor;
    exports.ɵcx = SuiSelectSearch;
    exports.ɵcy = SuiSelectModule;
    exports.ɵcz = SuiSidebarContainer;
    exports.ɵd = SuiMessageModule;
    exports.ɵda = SuiSidebarSibling;
    exports.ɵdb = SuiSidebar;
    exports.ɵdc = SuiSidebarModule;
    exports.ɵdd = SuiTabset;
    exports.ɵde = SuiTabContent;
    exports.ɵdf = SuiTabHeader;
    exports.ɵdg = SuiTabsModule;
    exports.ɵdh = SuiTransition;
    exports.ɵdi = SuiTransitionModule;
    exports.ɵdj = SuiModalDimmer;
    exports.ɵe = SuiPagination;
    exports.ɵf = SuiPaginationModule;
    exports.ɵg = SuiAccordionPanel;
    exports.ɵh = SuiAccordion;
    exports.ɵi = SuiAccordionModule;
    exports.ɵj = SuiCheckbox;
    exports.ɵk = SuiCheckboxValueAccessor;
    exports.ɵl = SuiRadio;
    exports.ɵm = SuiRadioValueAccessor;
    exports.ɵn = SuiRadioManager;
    exports.ɵo = SuiCheckboxModule;
    exports.ɵp = SuiCollapse;
    exports.ɵq = SuiCollapseModule;
    exports.ɵr = SuiCalendarViewTitle;
    exports.ɵs = SuiDatepicker;
    exports.ɵt = SuiCalendarItem;
    exports.ɵu = SuiDatepickerDirective;
    exports.ɵv = SuiDatepickerDirectiveValueAccessor;
    exports.ɵw = SuiDatepickerDirectiveValidator;
    exports.ɵx = SuiDatepickerInputDirective;
    exports.ɵy = CalendarRangeService;
    exports.ɵz = CalendarView;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng2-semantic-ui.umd.js.map
