/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Util } from "../../../misc/util/internal";
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
var /**
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
/**
 * @template T, U
 */
export { SearchService };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL3NlYXJjaC9zZXJ2aWNlcy9zZWFyY2guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7Ozs7Ozs7OztBQUtuRDs7O0FBQUE7SUEwRUksdUJBQVksZUFBK0I7UUFBM0MsaUJBd0JDO1FBeEJXLGdDQUFBLEVBQUEsdUJBQStCO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBQyxFQUFFLEVBQUUsQ0FBQzs7WUFFdkIscUJBQU0sS0FBSyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXhDLElBQUksS0FBSyxZQUFZLE1BQU0sRUFBRTs7O2dCQUd6QixPQUFPLEVBQUU7b0JBQ0wseUVBQXlFO3FCQUN4RSxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBWSxDQUFDLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQztxQkFDL0QsUUFBUSxFQUFFO3FCQUNWLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFGSixDQUVJLENBQUMsQ0FBQzthQUMxQjs7WUFHRCxPQUFPLEtBQUssQ0FBQztTQUNoQixDQUFDOztRQUdGLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUNoQjswQkF4RlUsa0NBQU87Ozs7O1lBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDOzs7Ozs7a0JBR04sT0FBVztZQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sSUFB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RSxDQUFDO1FBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7O3dCQTdNN0I7SUErTUMsQ0FBQTs7OztBQTFNRCx5QkEwTUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgTG9va3VwRm4sIExvb2t1cEZuUmVzdWx0LCBGaWx0ZXJGbiB9IGZyb20gXCIuLi9oZWxwZXJzL2xvb2t1cC1mblwiO1xuXG5pbnRlcmZhY2UgSUNhY2hlZEFycmF5PFQ+IHsgW3F1ZXJ5OnN0cmluZ106VFtdOyB9XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hTZXJ2aWNlPFQsIFU+IHtcbiAgICAvLyBTdG9yZXMgdGhlIGF2YWlsYWJsZSBvcHRpb25zLlxuICAgIHByaXZhdGUgX29wdGlvbnM6VFtdO1xuICAgIC8vIENvbnZlcnRzIGEgcXVlcnkgc3RyaW5nIGludG8gYW4gYXJyYXkgb2Ygb3B0aW9ucy4gTXVzdCBiZSBhIGZ1bmN0aW9uIHJldHVybmluZyBhIHByb21pc2UuXG4gICAgcHJpdmF0ZSBfb3B0aW9uc0xvb2t1cD86TG9va3VwRm48VCwgVT47XG4gICAgLy8gRmllbGQgdGhhdCBvcHRpb25zIGFyZSBzZWFyY2hlZCAmIGRpc3BsYXllZCBvbi5cbiAgICBwcml2YXRlIF9vcHRpb25zRmllbGQ/OnN0cmluZztcbiAgICAvLyBGaWx0ZXJzIGEgbGlzdCBvZiBvcHRpb25zLlxuICAgIHB1YmxpYyBvcHRpb25zRmlsdGVyOkZpbHRlckZuPFQ+O1xuXG4gICAgcHVibGljIGdldCBvcHRpb25zKCk6VFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBvcHRpb25zKG9wdGlvbnM6VFtdKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zIHx8IFtdO1xuICAgICAgICAvLyBXZSBjYW5ub3QgdXNlIGJvdGggbG9jYWwgJiByZW1vdGUgb3B0aW9ucyBzaW11bHRhbmVvdXNseS5cbiAgICAgICAgdGhpcy5fb3B0aW9uc0xvb2t1cCA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gUmVzZXQgZW50aXJlIHNlcnZpY2Ugd2l0aCBuZXcgb3B0aW9ucy5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgb3B0aW9uc0xvb2t1cCgpOkxvb2t1cEZuPFQsIFU+IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnNMb29rdXA7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBvcHRpb25zTG9va3VwKGxvb2t1cEZuOkxvb2t1cEZuPFQsIFU+IHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnNMb29rdXAgPSBsb29rdXBGbjtcbiAgICAgICAgLy8gQXMgYmVmb3JlLCBjYW5ub3QgdXNlIGxvY2FsICYgcmVtb3RlIG9wdGlvbnMgc2ltdWx0YW5lb3VzbHkuXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaGFzSXRlbUxvb2t1cCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISF0aGlzLm9wdGlvbnNMb29rdXAgJiYgdGhpcy5vcHRpb25zTG9va3VwLmxlbmd0aCA9PT0gMjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG9wdGlvbnNGaWVsZCgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zRmllbGQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBvcHRpb25zRmllbGQoZmllbGQ6c3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnNGaWVsZCA9IGZpZWxkO1xuICAgICAgICAvLyBXZSBuZWVkIHRvIHJlc2V0IG90aGVyd2lzZSB3ZSB3b3VsZCBub3cgYmUgc2hvd2luZyBpbnZhbGlkIHNlYXJjaCByZXN1bHRzLlxuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgLy8gU3RvcmVzIHRoZSByZXN1bHRzIG9mIHRoZSBxdWVyeS5cbiAgICBwcml2YXRlIF9yZXN1bHRzOlRbXTtcbiAgICAvLyBDYWNoZSBvZiByZXN1bHRzLCBpbmRleGVkIGJ5IHF1ZXJ5LlxuICAgIHByaXZhdGUgX3Jlc3VsdHNDYWNoZTpJQ2FjaGVkQXJyYXk8VD47XG5cbiAgICBwdWJsaWMgZ2V0IHJlc3VsdHMoKTpUW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzdWx0cztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9xdWVyeTpzdHJpbmc7XG4gICAgLy8gQWxsb3dzIHRoZSBlbXB0eSBxdWVyeSB0byBwcm9kdWNlIHJlc3VsdHMuXG4gICAgcHVibGljIGFsbG93RW1wdHlRdWVyeTpib29sZWFuO1xuICAgIC8vIEhvdyBsb25nIHRvIGRlbGF5IHRoZSBzZWFyY2ggZm9yIHdoZW4gdXNpbmcgdXBkYXRlUXVlcnlEZWxheWVkLiBTdG9yZWQgaW4gbXMuXG4gICAgcHVibGljIHNlYXJjaERlbGF5Om51bWJlcjtcbiAgICAvLyBTdG9yZXMgdGhlIHNlYXJjaCB0aW1lb3V0IGhhbmRsZSBzbyB3ZSBjYW4gY2FuY2VsIGl0LlxuICAgIHByaXZhdGUgX3NlYXJjaERlbGF5VGltZW91dDpudW1iZXI7XG4gICAgLy8gUHJvdmlkZXMgJ2xvYWRpbmcnIGZ1bmN0aW9uYWxpdHkuXG4gICAgcHJpdmF0ZSBfaXNTZWFyY2hpbmc6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgcXVlcnkoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcXVlcnk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpc1NlYXJjaGluZygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNTZWFyY2hpbmc7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoYWxsb3dFbXB0eVF1ZXJ5OmJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gW107XG4gICAgICAgIHRoaXMub3B0aW9uc0ZpbHRlciA9IChvcywgcSkgPT4ge1xuICAgICAgICAgICAgLy8gQ29udmVydCB0aGUgcXVlcnkgc3RyaW5nIHRvIGEgUmVnRXhwLlxuICAgICAgICAgICAgY29uc3QgcmVnZXggPSB0aGlzLnRvUmVnZXgodGhpcy5fcXVlcnkpO1xuXG4gICAgICAgICAgICBpZiAocmVnZXggaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgICAgICAgICAvLyBPbmx5IHVwZGF0ZSB0aGUgcmVzdWx0cyBpZiB0aGUgcXVlcnkgd2FzIHZhbGlkIHJlZ2V4LlxuICAgICAgICAgICAgICAgIC8vIFRoaXMgYXZvaWRzIHRoZSByZXN1bHRzIHN1ZGRlbmx5IGJlY29taW5nIGVtcHR5IGlmIGFuIGludmFsaWQgcmVnZXggc3RyaW5nIGlzIGlucHV0dGVkLlxuICAgICAgICAgICAgICAgIHJldHVybiBvc1xuICAgICAgICAgICAgICAgICAgICAvLyBGaWx0ZXIgb24gdGhlIG9wdGlvbnMgd2l0aCBhIHN0cmluZyBtYXRjaCBvbiB0aGUgZmllbGQgd2UgYXJlIHRlc3RpbmcuXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIobyA9PiBVdGlsLk9iamVjdC5yZWFkVmFsdWU8VCwgc3RyaW5nPihvLCB0aGlzLl9vcHRpb25zRmllbGQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hdGNoKHJlZ2V4KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIERvbid0IHVwZGF0ZSBzaW5jZSBpdCB3YXNuJ3QgYSB2YWxpZCByZWdleC5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBTZXQgZGVmYXVsdCB2YWx1ZXMgYW5kIHJlc2V0LlxuICAgICAgICB0aGlzLmFsbG93RW1wdHlRdWVyeSA9IGFsbG93RW1wdHlRdWVyeTtcbiAgICAgICAgdGhpcy5zZWFyY2hEZWxheSA9IDA7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGVzIHRoZSBxdWVyeSBhZnRlciB0aGUgc3BlY2lmaWVkIHNlYXJjaCBkZWxheS5cbiAgICBwdWJsaWMgdXBkYXRlUXVlcnlEZWxheWVkKHF1ZXJ5OnN0cmluZywgY2FsbGJhY2s6KGVycj86RXJyb3IpID0+IHZvaWQgPSAoKSA9PiB7fSk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3F1ZXJ5ID0gcXVlcnk7XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3NlYXJjaERlbGF5VGltZW91dCk7XG4gICAgICAgIHRoaXMuX3NlYXJjaERlbGF5VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUXVlcnkocXVlcnksIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLnNlYXJjaERlbGF5XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlcyB0aGUgY3VycmVudCBzZWFyY2ggcXVlcnkuXG4gICAgcHVibGljIHVwZGF0ZVF1ZXJ5KHF1ZXJ5OnN0cmluZywgY2FsbGJhY2s6KGVycj86RXJyb3IpID0+IHZvaWQgPSAoKSA9PiB7fSk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3F1ZXJ5ID0gcXVlcnk7XG5cbiAgICAgICAgaWYgKHRoaXMuX3F1ZXJ5ID09PSBcIlwiICYmICF0aGlzLmFsbG93RW1wdHlRdWVyeSkge1xuICAgICAgICAgICAgLy8gRG9uJ3QgdXBkYXRlIGlmIHRoZSBuZXcgcXVlcnkgaXMgZW1wdHkgKGFuZCB3ZSBkb24ndCBhbGxvdyBlbXB0eSBxdWVyaWVzKS5cbiAgICAgICAgICAgIC8vIERvbid0IHJlc2V0IHNvIHRoYXQgd2hlbiBhbmltYXRpbmcgY2xvc2VkIHdlIGRvbid0IGdldCBhIGp1ZGRlci5cbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX3Jlc3VsdHNDYWNoZS5oYXNPd25Qcm9wZXJ0eSh0aGlzLl9xdWVyeSkpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBxdWVyeSBpcyBhbHJlYWR5IGNhY2hlZCwgbWFrZSB1c2Ugb2YgaXQuXG4gICAgICAgICAgICB0aGlzLl9yZXN1bHRzID0gdGhpcy5fcmVzdWx0c0NhY2hlW3RoaXMuX3F1ZXJ5XTtcblxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fb3B0aW9uc0xvb2t1cCkge1xuICAgICAgICAgICAgdGhpcy5faXNTZWFyY2hpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBDYWxsIHRoZSBvcHRpb25zIGxvb2t1cCB3aXRob3V0IGEgdGhpcyBjb250ZXh0LlxuICAgICAgICAgICAgY29uc3QgcXVlcnlMb29rdXAgPSB0aGlzLl9vcHRpb25zTG9va3VwLmNhbGwodW5kZWZpbmVkLCB0aGlzLl9xdWVyeSkgYXMgTG9va3VwRm5SZXN1bHQ8VFtdPjtcblxuICAgICAgICAgICAgcXVlcnlMb29rdXBcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHRzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNTZWFyY2hpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJlc3VsdHMocmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVW5zZXQgJ2xvYWRpbmcnIHN0YXRlLCBhbmQgdGhyb3cgdGhlIHJldHVybmVkIGVycm9yIHdpdGhvdXQgdXBkYXRpbmcgdGhlIHJlc3VsdHMuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzU2VhcmNoaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0gdGhpcy5vcHRpb25zRmlsdGVyLmNhbGwodW5kZWZpbmVkLCB0aGlzLl9vcHRpb25zLCB0aGlzLl9xdWVyeSk7XG4gICAgICAgIGlmIChmaWx0ZXJlZCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVSZXN1bHRzKGZpbHRlcmVkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGVzICYgY2FjaGVzIHRoZSBuZXcgc2V0IG9mIHJlc3VsdHMuXG4gICAgcHJpdmF0ZSB1cGRhdGVSZXN1bHRzKHJlc3VsdHM6VFtdKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcmVzdWx0c0NhY2hlW3RoaXMuX3F1ZXJ5XSA9IHJlc3VsdHM7XG4gICAgICAgIHRoaXMuX3Jlc3VsdHMgPSByZXN1bHRzO1xuICAgIH1cblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcm9taXNlLWZ1bmN0aW9uLWFzeW5jXG4gICAgcHVibGljIGluaXRpYWxMb29rdXAoaW5pdGlhbDpVKTpMb29rdXBGblJlc3VsdDxUPjtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJvbWlzZS1mdW5jdGlvbi1hc3luY1xuICAgIHB1YmxpYyBpbml0aWFsTG9va3VwKGluaXRpYWw6VVtdKTpMb29rdXBGblJlc3VsdDxUW10+O1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcm9taXNlLWZ1bmN0aW9uLWFzeW5jXG4gICAgcHVibGljIGluaXRpYWxMb29rdXAoaW5pdGlhbDpVIHwgVVtdKTpMb29rdXBGblJlc3VsdDxUPiB8IExvb2t1cEZuUmVzdWx0PFRbXT4ge1xuICAgICAgICBpZiAoaW5pdGlhbCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuX29wdGlvbnNMb29rdXApKHVuZGVmaW5lZCwgaW5pdGlhbCkgYXMgTG9va3VwRm5SZXN1bHQ8VFtdPjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHRoaXMuX29wdGlvbnNMb29rdXAgYXMgTG9va3VwRm48VCwgVT4pKHVuZGVmaW5lZCwgaW5pdGlhbCkgYXMgTG9va3VwRm5SZXN1bHQ8VD47XG4gICAgfVxuXG4gICAgLy8gQ29udmVydHMgYSBxdWVyeSBzdHJpbmcgdG8gcmVnZXggd2l0aG91dCB0aHJvd2luZyBhbiBlcnJvci5cbiAgICBwcml2YXRlIHRvUmVnZXgocXVlcnk6c3RyaW5nKTpSZWdFeHAgfCBzdHJpbmcge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAocXVlcnksIFwiaVwiKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gR2VuZXJhdGVzIEhUTUwgZm9yIGhpZ2hsaWdodGVkIG1hdGNoIHRleHQuXG4gICAgcHVibGljIGhpZ2hsaWdodE1hdGNoZXModGV4dDpzdHJpbmcsIHF1ZXJ5OnN0cmluZyk6c3RyaW5nIHtcbiAgICAgICAgY29uc3QgcmVnZXggPSB0aGlzLnRvUmVnZXgocXVlcnkpO1xuICAgICAgICBpZiAocmVnZXggaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UocmVnZXgsIG1hdGNoID0+IGA8Yj4ke21hdGNofTwvYj5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG5cbiAgICAvLyBSZXNldHMgdGhlIHNlYXJjaCBiYWNrIHRvIGEgcHJpc3RpbmUgc3RhdGUuXG4gICAgcHJpdmF0ZSByZXNldCgpOnZvaWQge1xuICAgICAgICB0aGlzLl9yZXN1bHRzID0gW107XG4gICAgICAgIHRoaXMuX3Jlc3VsdHNDYWNoZSA9IHt9O1xuICAgICAgICB0aGlzLl9pc1NlYXJjaGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KFwiXCIpO1xuICAgIH1cbn1cbiJdfQ==