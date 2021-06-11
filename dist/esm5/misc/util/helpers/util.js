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
export { KeyCode };
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
export function ITemplateRefContext() { }
function ITemplateRefContext_tsickle_Closure_declarations() {
    /** @type {?} */
    ITemplateRefContext.prototype.$implicit;
}
/**
 * @record
 */
export function IAugmentedElement() { }
function IAugmentedElement_tsickle_Closure_declarations() {
    /** @type {?} */
    IAugmentedElement.prototype.closest;
}
var HandledEvent = /** @class */ (function () {
    function HandledEvent() {
    }
    return HandledEvent;
}());
export { HandledEvent };
function HandledEvent_tsickle_Closure_declarations() {
    /** @type {?} */
    HandledEvent.prototype.eventHandled;
}
/**
 * @record
 */
export function IDynamicClasses() { }
function IDynamicClasses_tsickle_Closure_declarations() {
    /* TODO: handle strange member:
    [name:string]:true;
    */
}
export var /** @type {?} */ Util = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1pc2MvdXRpbC9oZWxwZXJzL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkEsSUFBQTs7O3VCQXRCQTtJQXdCQyxDQUFBO0FBRkQsd0JBRUM7Ozs7Ozs7Ozs7Ozs7O0FBTUQsTUFBTSxDQUFDLHFCQUFNLElBQUksR0FBRztJQUNoQixLQUFLLEVBQUU7UUFDSCxLQUFLOzs7OztRQUFMLFVBQU0sQ0FBUSxFQUFFLE1BQWlCO1lBQWpCLHVCQUFBLEVBQUEsVUFBaUI7WUFDN0IsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLEdBQUcsTUFBTSxFQUFWLENBQVUsQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsS0FBSzs7Ozs7O1FBQUwsVUFBUyxLQUFTLEVBQUUsV0FBa0I7WUFDbEMscUJBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFL0IscUJBQU0sTUFBTSxHQUFTLEVBQUUsQ0FBQztZQUN4QixPQUFPLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7YUFDL0M7WUFDRCxPQUFPLE1BQU0sQ0FBQztTQUNqQjtRQUNELE9BQU87Ozs7OztRQUFQLFVBQVcsS0FBUyxFQUFFLEtBQWE7WUFDL0IsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUNmLFVBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ04scUJBQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDdkMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzlDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLE9BQU8sTUFBTSxDQUFDO2FBQ2pCLEVBQ0QsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUNqQjtRQUNELE9BQU87Ozs7O1FBQVAsVUFBVyxLQUFXO1lBQ2xCLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEVBQUUsRUFBRSxDQUFDLElBQUssT0FBQSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFaLENBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNwRDtLQUNKO0lBRUQsTUFBTSxFQUFFO1FBQ0osT0FBTzs7Ozs7O1FBQVAsVUFBUSxHQUFVLEVBQUUsTUFBYSxFQUFFLE9BQWM7WUFDN0MscUJBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNaLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQUU7Z0JBQ3RCLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2FBQ25CO1lBQ0QsT0FBTyxDQUFDLENBQUM7U0FDWjtLQUNKO0lBRUQsR0FBRyxFQUFFO1FBQ0QscUJBQXFCOzs7O1FBQXJCLFVBQXNCLGNBQXNCO1lBQ3hDLHFCQUFJLEtBQUssR0FBRyxjQUFjLENBQUM7WUFDM0IsSUFBSSxPQUFPLGNBQWMsS0FBSyxRQUFRLEVBQUU7Z0JBQ3BDLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDaEI7WUFFRCxPQUFPLEtBQUssQ0FBQztTQUNoQjtLQUNKO0lBRUQsTUFBTSxFQUFFO1FBQ0osU0FBUzs7Ozs7O1FBQVQsVUFBZ0IsTUFBUSxFQUFFLElBQVk7WUFDbEMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDUCxPQUFPLE1BQWEsQ0FBTTthQUM3QjtZQUVELHFCQUFJLFFBQVEsR0FBRyxNQUFpQyxDQUFDO1lBRWpELEtBQUsscUJBQUksQ0FBQyxHQUFHLENBQUMsbUJBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLG1CQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQy9ELFFBQVEsR0FBSSxRQUFvQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFEO1lBRUQsT0FBTyxRQUFlLENBQU07U0FDL0I7S0FDSjtJQUVELElBQUksRUFBRTtRQUNGLEtBQUs7Ozs7O1FBQUwsVUFBTSxDQUFRLEVBQUUsQ0FBUTtZQUNwQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNoQztRQUNELE9BQU87Ozs7O1FBQVAsVUFBUSxDQUFRLEVBQUUsQ0FBUTtZQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMvQjtRQUNELFNBQVM7Ozs7O1FBQVQsVUFBVSxDQUFRLEVBQUUsQ0FBUTtZQUN4QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNoQztRQUNELEdBQUc7Ozs7O1FBQUgsVUFBSSxDQUFRLEVBQUUsQ0FBUTtZQUNsQixxQkFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQixJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7Z0JBQ1QsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2FBQ2xCO1lBQ0QsT0FBTyxHQUFHLENBQUM7U0FDZDtLQUNKO0NBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEtleWJvYXJkIGtleWNvZGVzLlxuZXhwb3J0IGVudW0gS2V5Q29kZSB7XG4gICAgTGVmdCA9IDM3LFxuICAgIFVwID0gMzgsXG4gICAgUmlnaHQgPSAzOSxcbiAgICBEb3duID0gNDAsXG5cbiAgICBFc2NhcGUgPSAyNyxcbiAgICBFbnRlciA9IDEzLFxuXG4gICAgU3BhY2UgPSAzMixcbiAgICBCYWNrc3BhY2UgPSA4XG59XG5cbmludGVyZmFjZSBJUmVjdXJzaXZlT2JqZWN0IHsgW25hbWU6c3RyaW5nXTpJUmVjdXJzaXZlT2JqZWN0OyB9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRlbXBsYXRlUmVmQ29udGV4dDxUPiB7ICRpbXBsaWNpdDpUOyB9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUF1Z21lbnRlZEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgICBjbG9zZXN0KHNlbGVjdG9yOnN0cmluZyk6SUF1Z21lbnRlZEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBjbGFzcyBIYW5kbGVkRXZlbnQge1xuICAgIHB1YmxpYyBldmVudEhhbmRsZWQ6Ym9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRHluYW1pY0NsYXNzZXMge1xuICAgIFtuYW1lOnN0cmluZ106dHJ1ZTtcbn1cblxuZXhwb3J0IGNvbnN0IFV0aWwgPSB7XG4gICAgQXJyYXk6IHtcbiAgICAgICAgcmFuZ2UobjpudW1iZXIsIG9mZnNldDpudW1iZXIgPSAwKTpudW1iZXJbXSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkobikuZmlsbCgwKS5tYXAoKHosIGkpID0+IGkgKyBvZmZzZXQpO1xuICAgICAgICB9LFxuICAgICAgICBncm91cDxUPihpdGVtczpUW10sIGdyb3VwTGVuZ3RoOm51bWJlcik6VFtdW10ge1xuICAgICAgICAgICAgY29uc3QgbXV0YWJsZSA9IGl0ZW1zLnNsaWNlKDApO1xuXG4gICAgICAgICAgICBjb25zdCBncm91cHM6VFtdW10gPSBbXTtcbiAgICAgICAgICAgIHdoaWxlIChtdXRhYmxlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBncm91cHMucHVzaChtdXRhYmxlLnNwbGljZSgwLCBncm91cExlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdyb3VwcztcbiAgICAgICAgfSxcbiAgICAgICAgZ3JvdXBCeTxUPihpdGVtczpUW10sIGZpZWxkOmtleW9mIFQpOnsgW25hbWU6c3RyaW5nXTpUW10gfSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbXMucmVkdWNlPHsgW25hbWU6c3RyaW5nXTpUW10gfT4oXG4gICAgICAgICAgICAgICAgKGdyb3VwcywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZFZhbHVlID0gaVtmaWVsZF0udG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBzW2ZpZWxkVmFsdWVdID0gZ3JvdXBzW2ZpZWxkVmFsdWVdIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICBncm91cHNbZmllbGRWYWx1ZV0ucHVzaChpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdyb3VwcztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIE9iamVjdCgpKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmxhdHRlbjxUPihpdGVtczpUW11bXSk6VFtdIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtcy5yZWR1Y2UoKGlzLCBpKSA9PiBpcy5jb25jYXQoaSksIFtdKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBTdHJpbmc6IHtcbiAgICAgICAgcGFkTGVmdChzdHI6c3RyaW5nLCBsZW5ndGg6bnVtYmVyLCBwYWRkaW5nOnN0cmluZyk6c3RyaW5nIHtcbiAgICAgICAgICAgIGxldCBzID0gc3RyO1xuICAgICAgICAgICAgd2hpbGUgKHMubGVuZ3RoIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcyA9IHBhZGRpbmcgKyBzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgRE9NOiB7XG4gICAgICAgIHBhcnNlQm9vbGVhbkF0dHJpYnV0ZShhdHRyaWJ1dGVWYWx1ZTpib29sZWFuKTpib29sZWFuIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGF0dHJpYnV0ZVZhbHVlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVWYWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIE9iamVjdDoge1xuICAgICAgICByZWFkVmFsdWU8VCwgVT4ob2JqZWN0OlQsIHBhdGg/OnN0cmluZyk6VSB7XG4gICAgICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0IGFzIGFueSBhcyBVO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcmVjdXJzZWQgPSBvYmplY3QgYXMgYW55IGFzIElSZWN1cnNpdmVPYmplY3Q7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBwID0gcGF0aC5zcGxpdChcIi5cIiksIGxlbiA9IHAubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICByZWN1cnNlZCA9IChyZWN1cnNlZCBhcyBhbnkgYXMgSVJlY3Vyc2l2ZU9iamVjdClbcFtpXV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZWN1cnNlZCBhcyBhbnkgYXMgVTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBNYXRoOiB7XG4gICAgICAgIHJvdW5kKHI6bnVtYmVyLCBuOm51bWJlcik6bnVtYmVyIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHIgLyBuKSAqIG47XG4gICAgICAgIH0sXG4gICAgICAgIHJvdW5kVXAocjpudW1iZXIsIG46bnVtYmVyKTpudW1iZXIge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguY2VpbChyIC8gbikgKiBuO1xuICAgICAgICB9LFxuICAgICAgICByb3VuZERvd24ocjpudW1iZXIsIG46bnVtYmVyKTpudW1iZXIge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IociAvIG4pICogbjtcbiAgICAgICAgfSxcbiAgICAgICAgbW9kKHI6bnVtYmVyLCBuOm51bWJlcik6bnVtYmVyIHtcbiAgICAgICAgICAgIGNvbnN0IHJlbSA9IHIgJSBuO1xuICAgICAgICAgICAgaWYgKHJlbSA8IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVtICsgbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZW07XG4gICAgICAgIH1cbiAgICB9XG59O1xuIl19