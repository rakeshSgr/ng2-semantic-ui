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
export class SearchService {
    /**
     * @param {?=} allowEmptyQuery
     */
    constructor(allowEmptyQuery = false) {
        this._options = [];
        this.optionsFilter = (os, q) => {
            // Convert the query string to a RegExp.
            const /** @type {?} */ regex = this.toRegex(this._query);
            if (regex instanceof RegExp) {
                // Only update the results if the query was valid regex.
                // This avoids the results suddenly becoming empty if an invalid regex string is inputted.
                return os
                    // Filter on the options with a string match on the field we are testing.
                    .filter(o => Util.Object.readValue(o, this._optionsField)
                    .toString()
                    .match(regex));
            }
            // Don't update since it wasn't a valid regex.
            return false;
        };
        // Set default values and reset.
        this.allowEmptyQuery = allowEmptyQuery;
        this.searchDelay = 0;
        this.reset();
    }
    /**
     * @return {?}
     */
    get options() {
        return this._options;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    set options(options) {
        this._options = options || [];
        // We cannot use both local & remote options simultaneously.
        this._optionsLookup = undefined;
        // Reset entire service with new options.
        this.reset();
    }
    /**
     * @return {?}
     */
    get optionsLookup() {
        return this._optionsLookup;
    }
    /**
     * @param {?} lookupFn
     * @return {?}
     */
    set optionsLookup(lookupFn) {
        this._optionsLookup = lookupFn;
        // As before, cannot use local & remote options simultaneously.
        this._options = [];
        this.reset();
    }
    /**
     * @return {?}
     */
    get hasItemLookup() {
        return !!this.optionsLookup && this.optionsLookup.length === 2;
    }
    /**
     * @return {?}
     */
    get optionsField() {
        return this._optionsField;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    set optionsField(field) {
        this._optionsField = field;
        // We need to reset otherwise we would now be showing invalid search results.
        this.reset();
    }
    /**
     * @return {?}
     */
    get results() {
        return this._results;
    }
    /**
     * @return {?}
     */
    get query() {
        return this._query;
    }
    /**
     * @return {?}
     */
    get isSearching() {
        return this._isSearching;
    }
    /**
     * @param {?} query
     * @param {?=} callback
     * @return {?}
     */
    updateQueryDelayed(query, callback = () => { }) {
        this._query = query;
        clearTimeout(this._searchDelayTimeout);
        this._searchDelayTimeout = window.setTimeout(() => {
            this.updateQuery(query, callback);
        }, this.searchDelay);
    }
    /**
     * @param {?} query
     * @param {?=} callback
     * @return {?}
     */
    updateQuery(query, callback = () => { }) {
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
            const /** @type {?} */ queryLookup = this._optionsLookup.call(undefined, this._query);
            queryLookup
                .then(results => {
                this._isSearching = false;
                this.updateResults(results);
                return callback();
            })
                .catch(error => {
                // Unset 'loading' state, and throw the returned error without updating the results.
                this._isSearching = false;
                return callback(error);
            });
            return;
        }
        const /** @type {?} */ filtered = this.optionsFilter.call(undefined, this._options, this._query);
        if (filtered) {
            this.updateResults(filtered);
        }
        return callback();
    }
    /**
     * @param {?} results
     * @return {?}
     */
    updateResults(results) {
        this._resultsCache[this._query] = results;
        this._results = results;
    }
    /**
     * @param {?} initial
     * @return {?}
     */
    initialLookup(initial) {
        if (initial instanceof Array) {
            return (this._optionsLookup)(undefined, initial);
        }
        return this._optionsLookup(undefined, initial);
    }
    /**
     * @param {?} query
     * @return {?}
     */
    toRegex(query) {
        try {
            return new RegExp(query, "i");
        }
        catch (/** @type {?} */ e) {
            return query;
        }
    }
    /**
     * @param {?} text
     * @param {?} query
     * @return {?}
     */
    highlightMatches(text, query) {
        const /** @type {?} */ regex = this.toRegex(query);
        if (regex instanceof RegExp) {
            return text.replace(regex, match => `<b>${match}</b>`);
        }
        return text;
    }
    /**
     * @return {?}
     */
    reset() {
        this._results = [];
        this._resultsCache = {};
        this._isSearching = false;
        this.updateQuery("");
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL3NlYXJjaC9zZXJ2aWNlcy9zZWFyY2guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7Ozs7Ozs7OztBQUtuRCxNQUFNLE9BQU8sYUFBYTs7OztJQTBFdEIsWUFBWSxrQkFBMEIsS0FBSztRQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFOztZQUUzQix1QkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFeEMsSUFBSSxLQUFLLFlBQVksTUFBTSxFQUFFOzs7Z0JBR3pCLE9BQU8sRUFBRTtvQkFDTCx5RUFBeUU7cUJBQ3hFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFZLENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDO3FCQUMvRCxRQUFRLEVBQUU7cUJBQ1YsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDMUI7O1lBR0QsT0FBTyxLQUFLLENBQUM7U0FDaEIsQ0FBQzs7UUFHRixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDaEI7Ozs7UUF4RlUsT0FBTztRQUNkLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQzs7Ozs7O1FBR2QsT0FBTyxDQUFDLE9BQVc7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDOztR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Q0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDOztDQUU1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBMb29rdXBGbiwgTG9va3VwRm5SZXN1bHQsIEZpbHRlckZuIH0gZnJvbSBcIi4uL2hlbHBlcnMvbG9va3VwLWZuXCI7XG5cbmludGVyZmFjZSBJQ2FjaGVkQXJyYXk8VD4geyBbcXVlcnk6c3RyaW5nXTpUW107IH1cblxuZXhwb3J0IGNsYXNzIFNlYXJjaFNlcnZpY2U8VCwgVT4ge1xuICAgIC8vIFN0b3JlcyB0aGUgYXZhaWxhYmxlIG9wdGlvbnMuXG4gICAgcHJpdmF0ZSBfb3B0aW9uczpUW107XG4gICAgLy8gQ29udmVydHMgYSBxdWVyeSBzdHJpbmcgaW50byBhbiBhcnJheSBvZiBvcHRpb25zLiBNdXN0IGJlIGEgZnVuY3Rpb24gcmV0dXJuaW5nIGEgcHJvbWlzZS5cbiAgICBwcml2YXRlIF9vcHRpb25zTG9va3VwPzpMb29rdXBGbjxULCBVPjtcbiAgICAvLyBGaWVsZCB0aGF0IG9wdGlvbnMgYXJlIHNlYXJjaGVkICYgZGlzcGxheWVkIG9uLlxuICAgIHByaXZhdGUgX29wdGlvbnNGaWVsZD86c3RyaW5nO1xuICAgIC8vIEZpbHRlcnMgYSBsaXN0IG9mIG9wdGlvbnMuXG4gICAgcHVibGljIG9wdGlvbnNGaWx0ZXI6RmlsdGVyRm48VD47XG5cbiAgICBwdWJsaWMgZ2V0IG9wdGlvbnMoKTpUW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG9wdGlvbnMob3B0aW9uczpUW10pIHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnMgfHwgW107XG4gICAgICAgIC8vIFdlIGNhbm5vdCB1c2UgYm90aCBsb2NhbCAmIHJlbW90ZSBvcHRpb25zIHNpbXVsdGFuZW91c2x5LlxuICAgICAgICB0aGlzLl9vcHRpb25zTG9va3VwID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyBSZXNldCBlbnRpcmUgc2VydmljZSB3aXRoIG5ldyBvcHRpb25zLlxuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBvcHRpb25zTG9va3VwKCk6TG9va3VwRm48VCwgVT4gfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9uc0xvb2t1cDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG9wdGlvbnNMb29rdXAobG9va3VwRm46TG9va3VwRm48VCwgVT4gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9uc0xvb2t1cCA9IGxvb2t1cEZuO1xuICAgICAgICAvLyBBcyBiZWZvcmUsIGNhbm5vdCB1c2UgbG9jYWwgJiByZW1vdGUgb3B0aW9ucyBzaW11bHRhbmVvdXNseS5cbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBoYXNJdGVtTG9va3VwKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhIXRoaXMub3B0aW9uc0xvb2t1cCAmJiB0aGlzLm9wdGlvbnNMb29rdXAubGVuZ3RoID09PSAyO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgb3B0aW9uc0ZpZWxkKCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnNGaWVsZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG9wdGlvbnNGaWVsZChmaWVsZDpzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9uc0ZpZWxkID0gZmllbGQ7XG4gICAgICAgIC8vIFdlIG5lZWQgdG8gcmVzZXQgb3RoZXJ3aXNlIHdlIHdvdWxkIG5vdyBiZSBzaG93aW5nIGludmFsaWQgc2VhcmNoIHJlc3VsdHMuXG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICAvLyBTdG9yZXMgdGhlIHJlc3VsdHMgb2YgdGhlIHF1ZXJ5LlxuICAgIHByaXZhdGUgX3Jlc3VsdHM6VFtdO1xuICAgIC8vIENhY2hlIG9mIHJlc3VsdHMsIGluZGV4ZWQgYnkgcXVlcnkuXG4gICAgcHJpdmF0ZSBfcmVzdWx0c0NhY2hlOklDYWNoZWRBcnJheTxUPjtcblxuICAgIHB1YmxpYyBnZXQgcmVzdWx0cygpOlRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXN1bHRzO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3F1ZXJ5OnN0cmluZztcbiAgICAvLyBBbGxvd3MgdGhlIGVtcHR5IHF1ZXJ5IHRvIHByb2R1Y2UgcmVzdWx0cy5cbiAgICBwdWJsaWMgYWxsb3dFbXB0eVF1ZXJ5OmJvb2xlYW47XG4gICAgLy8gSG93IGxvbmcgdG8gZGVsYXkgdGhlIHNlYXJjaCBmb3Igd2hlbiB1c2luZyB1cGRhdGVRdWVyeURlbGF5ZWQuIFN0b3JlZCBpbiBtcy5cbiAgICBwdWJsaWMgc2VhcmNoRGVsYXk6bnVtYmVyO1xuICAgIC8vIFN0b3JlcyB0aGUgc2VhcmNoIHRpbWVvdXQgaGFuZGxlIHNvIHdlIGNhbiBjYW5jZWwgaXQuXG4gICAgcHJpdmF0ZSBfc2VhcmNoRGVsYXlUaW1lb3V0Om51bWJlcjtcbiAgICAvLyBQcm92aWRlcyAnbG9hZGluZycgZnVuY3Rpb25hbGl0eS5cbiAgICBwcml2YXRlIF9pc1NlYXJjaGluZzpib29sZWFuO1xuXG4gICAgcHVibGljIGdldCBxdWVyeSgpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xdWVyeTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlzU2VhcmNoaW5nKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1NlYXJjaGluZztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihhbGxvd0VtcHR5UXVlcnk6Ym9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5vcHRpb25zRmlsdGVyID0gKG9zLCBxKSA9PiB7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IHRoZSBxdWVyeSBzdHJpbmcgdG8gYSBSZWdFeHAuXG4gICAgICAgICAgICBjb25zdCByZWdleCA9IHRoaXMudG9SZWdleCh0aGlzLl9xdWVyeSk7XG5cbiAgICAgICAgICAgIGlmIChyZWdleCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICAgICAgICAgIC8vIE9ubHkgdXBkYXRlIHRoZSByZXN1bHRzIGlmIHRoZSBxdWVyeSB3YXMgdmFsaWQgcmVnZXguXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBhdm9pZHMgdGhlIHJlc3VsdHMgc3VkZGVubHkgYmVjb21pbmcgZW1wdHkgaWYgYW4gaW52YWxpZCByZWdleCBzdHJpbmcgaXMgaW5wdXR0ZWQuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9zXG4gICAgICAgICAgICAgICAgICAgIC8vIEZpbHRlciBvbiB0aGUgb3B0aW9ucyB3aXRoIGEgc3RyaW5nIG1hdGNoIG9uIHRoZSBmaWVsZCB3ZSBhcmUgdGVzdGluZy5cbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihvID0+IFV0aWwuT2JqZWN0LnJlYWRWYWx1ZTxULCBzdHJpbmc+KG8sIHRoaXMuX29wdGlvbnNGaWVsZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICAubWF0Y2gocmVnZXgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRG9uJ3QgdXBkYXRlIHNpbmNlIGl0IHdhc24ndCBhIHZhbGlkIHJlZ2V4LlxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFNldCBkZWZhdWx0IHZhbHVlcyBhbmQgcmVzZXQuXG4gICAgICAgIHRoaXMuYWxsb3dFbXB0eVF1ZXJ5ID0gYWxsb3dFbXB0eVF1ZXJ5O1xuICAgICAgICB0aGlzLnNlYXJjaERlbGF5ID0gMDtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZXMgdGhlIHF1ZXJ5IGFmdGVyIHRoZSBzcGVjaWZpZWQgc2VhcmNoIGRlbGF5LlxuICAgIHB1YmxpYyB1cGRhdGVRdWVyeURlbGF5ZWQocXVlcnk6c3RyaW5nLCBjYWxsYmFjazooZXJyPzpFcnJvcikgPT4gdm9pZCA9ICgpID0+IHt9KTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcXVlcnkgPSBxdWVyeTtcblxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fc2VhcmNoRGVsYXlUaW1lb3V0KTtcbiAgICAgICAgdGhpcy5fc2VhcmNoRGVsYXlUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVRdWVyeShxdWVyeSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoRGVsYXlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGVzIHRoZSBjdXJyZW50IHNlYXJjaCBxdWVyeS5cbiAgICBwdWJsaWMgdXBkYXRlUXVlcnkocXVlcnk6c3RyaW5nLCBjYWxsYmFjazooZXJyPzpFcnJvcikgPT4gdm9pZCA9ICgpID0+IHt9KTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcXVlcnkgPSBxdWVyeTtcblxuICAgICAgICBpZiAodGhpcy5fcXVlcnkgPT09IFwiXCIgJiYgIXRoaXMuYWxsb3dFbXB0eVF1ZXJ5KSB7XG4gICAgICAgICAgICAvLyBEb24ndCB1cGRhdGUgaWYgdGhlIG5ldyBxdWVyeSBpcyBlbXB0eSAoYW5kIHdlIGRvbid0IGFsbG93IGVtcHR5IHF1ZXJpZXMpLlxuICAgICAgICAgICAgLy8gRG9uJ3QgcmVzZXQgc28gdGhhdCB3aGVuIGFuaW1hdGluZyBjbG9zZWQgd2UgZG9uJ3QgZ2V0IGEganVkZGVyLlxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fcmVzdWx0c0NhY2hlLmhhc093blByb3BlcnR5KHRoaXMuX3F1ZXJ5KSkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIHF1ZXJ5IGlzIGFscmVhZHkgY2FjaGVkLCBtYWtlIHVzZSBvZiBpdC5cbiAgICAgICAgICAgIHRoaXMuX3Jlc3VsdHMgPSB0aGlzLl9yZXN1bHRzQ2FjaGVbdGhpcy5fcXVlcnldO1xuXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9vcHRpb25zTG9va3VwKSB7XG4gICAgICAgICAgICB0aGlzLl9pc1NlYXJjaGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIENhbGwgdGhlIG9wdGlvbnMgbG9va3VwIHdpdGhvdXQgYSB0aGlzIGNvbnRleHQuXG4gICAgICAgICAgICBjb25zdCBxdWVyeUxvb2t1cCA9IHRoaXMuX29wdGlvbnNMb29rdXAuY2FsbCh1bmRlZmluZWQsIHRoaXMuX3F1ZXJ5KSBhcyBMb29rdXBGblJlc3VsdDxUW10+O1xuXG4gICAgICAgICAgICBxdWVyeUxvb2t1cFxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc1NlYXJjaGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUmVzdWx0cyhyZXN1bHRzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBVbnNldCAnbG9hZGluZycgc3RhdGUsIGFuZCB0aHJvdyB0aGUgcmV0dXJuZWQgZXJyb3Igd2l0aG91dCB1cGRhdGluZyB0aGUgcmVzdWx0cy5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNTZWFyY2hpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmlsdGVyZWQgPSB0aGlzLm9wdGlvbnNGaWx0ZXIuY2FsbCh1bmRlZmluZWQsIHRoaXMuX29wdGlvbnMsIHRoaXMuX3F1ZXJ5KTtcbiAgICAgICAgaWYgKGZpbHRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJlc3VsdHMoZmlsdGVyZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZXMgJiBjYWNoZXMgdGhlIG5ldyBzZXQgb2YgcmVzdWx0cy5cbiAgICBwcml2YXRlIHVwZGF0ZVJlc3VsdHMocmVzdWx0czpUW10pOnZvaWQge1xuICAgICAgICB0aGlzLl9yZXN1bHRzQ2FjaGVbdGhpcy5fcXVlcnldID0gcmVzdWx0cztcbiAgICAgICAgdGhpcy5fcmVzdWx0cyA9IHJlc3VsdHM7XG4gICAgfVxuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByb21pc2UtZnVuY3Rpb24tYXN5bmNcbiAgICBwdWJsaWMgaW5pdGlhbExvb2t1cChpbml0aWFsOlUpOkxvb2t1cEZuUmVzdWx0PFQ+O1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcm9taXNlLWZ1bmN0aW9uLWFzeW5jXG4gICAgcHVibGljIGluaXRpYWxMb29rdXAoaW5pdGlhbDpVW10pOkxvb2t1cEZuUmVzdWx0PFRbXT47XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByb21pc2UtZnVuY3Rpb24tYXN5bmNcbiAgICBwdWJsaWMgaW5pdGlhbExvb2t1cChpbml0aWFsOlUgfCBVW10pOkxvb2t1cEZuUmVzdWx0PFQ+IHwgTG9va3VwRm5SZXN1bHQ8VFtdPiB7XG4gICAgICAgIGlmIChpbml0aWFsIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5fb3B0aW9uc0xvb2t1cCkodW5kZWZpbmVkLCBpbml0aWFsKSBhcyBMb29rdXBGblJlc3VsdDxUW10+O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAodGhpcy5fb3B0aW9uc0xvb2t1cCBhcyBMb29rdXBGbjxULCBVPikodW5kZWZpbmVkLCBpbml0aWFsKSBhcyBMb29rdXBGblJlc3VsdDxUPjtcbiAgICB9XG5cbiAgICAvLyBDb252ZXJ0cyBhIHF1ZXJ5IHN0cmluZyB0byByZWdleCB3aXRob3V0IHRocm93aW5nIGFuIGVycm9yLlxuICAgIHByaXZhdGUgdG9SZWdleChxdWVyeTpzdHJpbmcpOlJlZ0V4cCB8IHN0cmluZyB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChxdWVyeSwgXCJpXCIpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZW5lcmF0ZXMgSFRNTCBmb3IgaGlnaGxpZ2h0ZWQgbWF0Y2ggdGV4dC5cbiAgICBwdWJsaWMgaGlnaGxpZ2h0TWF0Y2hlcyh0ZXh0OnN0cmluZywgcXVlcnk6c3RyaW5nKTpzdHJpbmcge1xuICAgICAgICBjb25zdCByZWdleCA9IHRoaXMudG9SZWdleChxdWVyeSk7XG4gICAgICAgIGlmIChyZWdleCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZShyZWdleCwgbWF0Y2ggPT4gYDxiPiR7bWF0Y2h9PC9iPmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cblxuICAgIC8vIFJlc2V0cyB0aGUgc2VhcmNoIGJhY2sgdG8gYSBwcmlzdGluZSBzdGF0ZS5cbiAgICBwcml2YXRlIHJlc2V0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3Jlc3VsdHMgPSBbXTtcbiAgICAgICAgdGhpcy5fcmVzdWx0c0NhY2hlID0ge307XG4gICAgICAgIHRoaXMuX2lzU2VhcmNoaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXBkYXRlUXVlcnkoXCJcIik7XG4gICAgfVxufVxuIl19