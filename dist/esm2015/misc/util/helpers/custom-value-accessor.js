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
export class CustomValueAccessor {
    /**
     * @param {?} _host
     */
    constructor(_host) {
        this._host = _host;
        this.onChange = (e) => { };
        this.onTouched = () => { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._host.writeValue(value);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
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
        useExisting: forwardRef(() => type),
        multi: true
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXZhbHVlLWFjY2Vzc29yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibWlzYy91dGlsL2hlbHBlcnMvY3VzdG9tLXZhbHVlLWFjY2Vzc29yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFVBQVUsRUFBd0IsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBTWpFLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFDNUIsWUFBb0IsS0FBTztRQUFQLFVBQUssR0FBTCxLQUFLLENBQUU7d0JBRVQsQ0FBQyxDQUFLLEVBQUUsRUFBRSxJQUFHO3lCQUNaLEdBQUcsRUFBRSxJQUFHO0tBSEk7Ozs7O0lBS3hCLFVBQVUsQ0FBQyxLQUFPO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7SUFHMUIsZ0JBQWdCLENBQUMsRUFBa0I7UUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7Ozs7OztJQUdoQixpQkFBaUIsQ0FBQyxFQUFhO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDOztDQUUzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFELE1BQU0sVUFBVSwwQkFBMEIsQ0FBQyxJQUFhO0lBQ3BELE9BQU87UUFDSCxPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQ25DLEtBQUssRUFBRSxJQUFJO0tBQ2QsQ0FBQztDQUNMIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBmb3J3YXJkUmVmLCBJbmplY3Rpb25Ub2tlbiwgVHlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0PFQ+IHtcbiAgICB3cml0ZVZhbHVlKHZhbHVlOlQpOnZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21WYWx1ZUFjY2Vzc29yPFUsIFQgZXh0ZW5kcyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3Q8VT4+IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2hvc3Q6VCkge31cblxuICAgIHB1YmxpYyBvbkNoYW5nZSA9IChlOmFueSkgPT4ge307XG4gICAgcHVibGljIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6VSk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2hvc3Qud3JpdGVWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46KGU6YW55KSA9PiB2b2lkKTp2b2lkIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjooKSA9PiB2b2lkKTp2b2lkIHtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVZhbHVlQWNjZXNzb3JQcm92aWRlciB7XG4gICAgcHJvdmlkZTpJbmplY3Rpb25Ub2tlbjxDb250cm9sVmFsdWVBY2Nlc3Nvcj47XG4gICAgdXNlRXhpc3Rpbmc6VHlwZTxhbnk+O1xuICAgIG11bHRpOmJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeSh0eXBlOkZ1bmN0aW9uKTpJVmFsdWVBY2Nlc3NvclByb3ZpZGVyIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gdHlwZSksXG4gICAgICAgIG11bHRpOiB0cnVlXG4gICAgfTtcbn1cbiJdfQ==