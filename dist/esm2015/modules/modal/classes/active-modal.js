/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T, U, V
 */
export class ActiveModal {
    /**
     * @param {?} instance
     * @param {?} componentRef
     */
    constructor(instance, componentRef) {
        this._config = instance;
        this._componentRef = componentRef;
        // Automatically destroy the modal component when it has been dismissed.
        this.component.onDismiss.subscribe(() => this._componentRef.destroy());
    }
    /**
     * @return {?}
     */
    get component() {
        return this._componentRef.instance;
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    onApprove(callback) {
        this.component.onApprove.subscribe((res) => callback(res));
        return this;
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    onDeny(callback) {
        this.component.onDeny.subscribe((res) => callback(res));
        return this;
    }
    /**
     * @param {?} result
     * @return {?}
     */
    approve(result) {
        this.component.approve(result);
    }
    /**
     * @param {?} result
     * @return {?}
     */
    deny(result) {
        this.component.deny(result);
    }
    /**
     * @return {?}
     */
    destroy() {
        this._componentRef.destroy();
    }
}
function ActiveModal_tsickle_Closure_declarations() {
    /** @type {?} */
    ActiveModal.prototype._config;
    /** @type {?} */
    ActiveModal.prototype._componentRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLW1vZGFsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9tb2RhbC9jbGFzc2VzL2FjdGl2ZS1tb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0EsTUFBTSxPQUFPLFdBQVc7Ozs7O0lBU3BCLFlBQVksUUFBNkIsRUFBRSxZQUF5QztRQUNoRixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQzs7UUFHbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztLQUMxRTs7OztRQVZVLFNBQVM7UUFDaEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQzs7Ozs7O0lBWWhDLFNBQVMsQ0FBQyxRQUEyQjtRQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFLLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdELE9BQU8sSUFBSSxDQUFDOzs7Ozs7SUFJVCxNQUFNLENBQUMsUUFBMkI7UUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBSyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxRCxPQUFPLElBQUksQ0FBQzs7Ozs7O0lBSVQsT0FBTyxDQUFDLE1BQVE7UUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7OztJQUk1QixJQUFJLENBQUMsTUFBUTtRQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7SUFJekIsT0FBTztRQUNWLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7O0NBRXBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsQ29uZmlnIH0gZnJvbSBcIi4vbW9kYWwtY29uZmlnXCI7XG5pbXBvcnQgeyBTdWlNb2RhbCB9IGZyb20gXCIuLi9jb21wb25lbnRzL21vZGFsXCI7XG5cbi8vIEhlbHBlciBjbGFzcyB0byBzdXBwb3J0IG1ldGhvZCBjaGFpbmluZyB3aGVuIGNhbGxpbmcgYFN1aU1vZGFsU2VydmljZS5vcGVuKC4uLilgLlxuZXhwb3J0IGNsYXNzIEFjdGl2ZU1vZGFsPFQsIFUsIFY+IHtcbiAgICBwcml2YXRlIF9jb25maWc6TW9kYWxDb25maWc8VCwgVSwgVj47XG4gICAgcHJpdmF0ZSBfY29tcG9uZW50UmVmOkNvbXBvbmVudFJlZjxTdWlNb2RhbDxVLCBWPj47XG5cbiAgICAvLyBTaG9ydGhhbmQgZm9yIGRpcmVjdCBhY2Nlc3MgdG8gdGhlIGBTdWlNb2RhbGAgaW5zdGFuY2UuXG4gICAgcHVibGljIGdldCBjb21wb25lbnQoKTpTdWlNb2RhbDxVLCBWPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoaW5zdGFuY2U6TW9kYWxDb25maWc8VCwgVSwgVj4sIGNvbXBvbmVudFJlZjpDb21wb25lbnRSZWY8U3VpTW9kYWw8VSwgVj4+KSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGluc3RhbmNlO1xuICAgICAgICB0aGlzLl9jb21wb25lbnRSZWYgPSBjb21wb25lbnRSZWY7XG5cbiAgICAgICAgLy8gQXV0b21hdGljYWxseSBkZXN0cm95IHRoZSBtb2RhbCBjb21wb25lbnQgd2hlbiBpdCBoYXMgYmVlbiBkaXNtaXNzZWQuXG4gICAgICAgIHRoaXMuY29tcG9uZW50Lm9uRGlzbWlzcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fY29tcG9uZW50UmVmLmRlc3Ryb3koKSk7XG4gICAgfVxuXG4gICAgLy8gUmVnaXN0ZXJzIGEgY2FsbGJhY2sgZm9yIHdoZW4gYG9uQXBwcm92ZWAgaXMgZmlyZWQuXG4gICAgcHVibGljIG9uQXBwcm92ZShjYWxsYmFjazoocmVzdWx0OlUpID0+IHZvaWQpOkFjdGl2ZU1vZGFsPFQsIFUsIFY+IHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQub25BcHByb3ZlLnN1YnNjcmliZSgocmVzOlUpID0+IGNhbGxiYWNrKHJlcykpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBSZWdpc3RlcnMgYSBjYWxsYmFjayBmb3Igd2hlbiBgb25EZW55YCBpcyBmaXJlZC5cbiAgICBwdWJsaWMgb25EZW55KGNhbGxiYWNrOihyZXN1bHQ6VikgPT4gdm9pZCk6QWN0aXZlTW9kYWw8VCwgVSwgVj4ge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5vbkRlbnkuc3Vic2NyaWJlKChyZXM6VikgPT4gY2FsbGJhY2socmVzKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIEZpcmVzIHRoZSBhcHByb3ZlIGV2ZW50IG9mIHRoZSBtb2RhbCBtYW51YWxseS5cbiAgICBwdWJsaWMgYXBwcm92ZShyZXN1bHQ6VSk6dm9pZCB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmFwcHJvdmUocmVzdWx0KTtcbiAgICB9XG5cbiAgICAvLyBGaXJlcyB0aGUgZGVueSBldmVudCBvZiB0aGUgbW9kYWwgbWFudWFsbHkuXG4gICAgcHVibGljIGRlbnkocmVzdWx0OlYpOnZvaWQge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5kZW55KHJlc3VsdCk7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlcyB0aGUgbW9kYWwgY29tcG9uZW50IGluc3RhbnRseSwgd2l0aG91dCB0cmFuc2l0aW9ucyBvciBmaXJpbmcgYW55IGV2ZW50cy5cbiAgICBwdWJsaWMgZGVzdHJveSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgIH1cbn1cbiJdfQ==