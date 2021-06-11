/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { forwardRef } from "@angular/core";
/**
 * @record
 * @template T
 */
export function ICustomValueAccessorHost() { }
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
// unsupported: template constraints.
/**
 * @template U, T
 */
export { CustomValueAccessor };
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
export function IValueAccessorProvider() { }
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
export function customValueAccessorFactory(type) {
    return {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(function () { return type; }),
        multi: true
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXZhbHVlLWFjY2Vzc29yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibWlzYy91dGlsL2hlbHBlcnMvY3VzdG9tLXZhbHVlLWFjY2Vzc29yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFVBQVUsRUFBd0IsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBTWpFOzs7OztBQUFBO0lBQ0ksNkJBQW9CLEtBQU87UUFBUCxVQUFLLEdBQUwsS0FBSyxDQUFFO3dCQUVULFVBQUMsQ0FBSyxLQUFPO3lCQUNaLGVBQVE7S0FISTs7Ozs7SUFLeEIsd0NBQVU7Ozs7Y0FBQyxLQUFPO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7SUFHMUIsOENBQWdCOzs7O2NBQUMsRUFBa0I7UUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7Ozs7OztJQUdoQiwrQ0FBaUI7Ozs7Y0FBQyxFQUFhO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDOzs4QkF0QjVCO0lBd0JDLENBQUE7Ozs7O0FBakJELCtCQWlCQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFELE1BQU0sVUFBVSwwQkFBMEIsQ0FBQyxJQUFhO0lBQ3BELE9BQU87UUFDSCxPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7UUFDbkMsS0FBSyxFQUFFLElBQUk7S0FDZCxDQUFDO0NBQ0wiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IGZvcndhcmRSZWYsIEluamVjdGlvblRva2VuLCBUeXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3Q8VD4ge1xuICAgIHdyaXRlVmFsdWUodmFsdWU6VCk6dm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIEN1c3RvbVZhbHVlQWNjZXNzb3I8VSwgVCBleHRlbmRzIElDdXN0b21WYWx1ZUFjY2Vzc29ySG9zdDxVPj4gaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaG9zdDpUKSB7fVxuXG4gICAgcHVibGljIG9uQ2hhbmdlID0gKGU6YW55KSA9PiB7fTtcbiAgICBwdWJsaWMgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTpVKTp2b2lkIHtcbiAgICAgICAgdGhpcy5faG9zdC53cml0ZVZhbHVlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjooZTphbnkpID0+IHZvaWQpOnZvaWQge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOigpID0+IHZvaWQpOnZvaWQge1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVmFsdWVBY2Nlc3NvclByb3ZpZGVyIHtcbiAgICBwcm92aWRlOkluamVjdGlvblRva2VuPENvbnRyb2xWYWx1ZUFjY2Vzc29yPjtcbiAgICB1c2VFeGlzdGluZzpUeXBlPGFueT47XG4gICAgbXVsdGk6Ym9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGN1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5KHR5cGU6RnVuY3Rpb24pOklWYWx1ZUFjY2Vzc29yUHJvdmlkZXIge1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiB0eXBlKSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9O1xufVxuIl19