/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { HostBinding, Input, Directive, EventEmitter, HostListener, Output } from "@angular/core";
var SuiTabHeader = /** @class */ (function () {
    function SuiTabHeader() {
        this._isActive = false;
        this.isActiveChange = new EventEmitter();
        this.isActiveExternalChange = new EventEmitter();
        this.onActivate = new EventEmitter();
        this.onDeactivate = new EventEmitter();
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
        { type: Directive, args: [{
                    selector: "[suiTabHeader]"
                },] }
    ];
    /** @nocollapse */
    SuiTabHeader.ctorParameters = function () { return []; };
    SuiTabHeader.propDecorators = {
        hasClasses: [{ type: HostBinding, args: ["class.item",] }],
        id: [{ type: Input, args: ["suiTabHeader",] }],
        isActiveChange: [{ type: Output }],
        onActivate: [{ type: Output, args: ["activate",] }],
        onDeactivate: [{ type: Output, args: ["deactivate",] }],
        isActive: [{ type: HostBinding, args: ["class.active",] }, { type: Input }],
        isDisabled: [{ type: HostBinding, args: ["class.disabled",] }, { type: Input }],
        onClick: [{ type: HostListener, args: ["click",] }]
    };
    return SuiTabHeader;
}());
export { SuiTabHeader };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvdGFicy9kaXJlY3RpdmVzL3RhYi1oZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUF1RTlGO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ2xELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRTFELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUMzQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFFeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7S0FDMUI7SUFwREQsc0JBRVcsa0NBQVE7Ozs7UUFGbkI7WUFHSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDekI7Ozs7O2tCQUVtQixNQUFjOztZQUM5QixxQkFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDOzs7O1lBSXRCLFVBQVUsQ0FBQzs7Z0JBRVAsUUFBUSxHQUFHLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQzdDLEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7O2dCQUc5QixLQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlDLENBQUMsQ0FBQzs7OztPQWROO0lBbUJELHNCQUVXLG9DQUFVOzs7O1FBRnJCO1lBR0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQzNCOzs7OztrQkFFcUIsUUFBZ0I7O1lBRWxDLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxRQUFRLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDOztnQkFHNUIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztpQkFDekI7YUFDSjs7OztPQVhKOzs7OztJQTRCTSxxQ0FBYzs7OztjQUFDLE1BQWM7O1FBRWhDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssTUFBTSxFQUFFOztZQUU3QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQzs7WUFHeEIsSUFBSSxNQUFNLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUMxQjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQzVCO1NBQ0o7O1FBR0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7O0lBSTlCLDhCQUFPOzs7SUFEZDtRQUVJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFOztZQUVsQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN4QjtLQUNKOztnQkEzR0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzdCOzs7Ozs2QkFFSSxXQUFXLFNBQUMsWUFBWTtxQkFHeEIsS0FBSyxTQUFDLGNBQWM7aUNBT3BCLE1BQU07NkJBT04sTUFBTSxTQUFDLFVBQVU7K0JBSWpCLE1BQU0sU0FBQyxZQUFZOzJCQUduQixXQUFXLFNBQUMsY0FBYyxjQUMxQixLQUFLOzZCQXNCTCxXQUFXLFNBQUMsZ0JBQWdCLGNBQzVCLEtBQUs7MEJBaURMLFlBQVksU0FBQyxPQUFPOzt1QkF2R3pCOztTQUthLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIb3N0QmluZGluZywgSW5wdXQsIERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIE91dHB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzdWlUYWJIZWFkZXJdXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpVGFiSGVhZGVyIHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5pdGVtXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dChcInN1aVRhYkhlYWRlclwiKVxuICAgIHB1YmxpYyBpZDpzdHJpbmc7XG5cbiAgICAvLyBJbnRlcm5hbGx5IGtlZXBzIHRyYWNrIG9mIHdoZXRoZXIgdGhlIGhlYWRlciBpcyBhY3RpdmUuXG4gICAgcHJpdmF0ZSBfaXNBY3RpdmU6Ym9vbGVhbjtcblxuICAgIC8vIEVuYWJsZXMgdXNlIG9mIFsoaXNBY3RpdmUpXSBzbyBzdGF0ZSBjYW4gYmUgc2V0IHVzaW5nIGJvb2xlYW5zLlxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBpc0FjdGl2ZUNoYW5nZTpFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG5cbiAgICAvLyBGaXJlcyBvbmx5IHdoZW4gYGlzQWN0aXZlYCBjaGFuZ2VzIGR1ZSB0byB1c2VyIGlucHV0LlxuICAgIHB1YmxpYyBpc0FjdGl2ZUV4dGVybmFsQ2hhbmdlOkV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICAgIC8vIEZpcmVzIHdoZW5ldmVyIGEgdGFiIGlzIGFjdGl2YXRlZCBoYXZpbmcgcHJldmlvdXNseSBiZWVuIGRlYWN0aXZhdGVkLlxuICAgIEBPdXRwdXQoXCJhY3RpdmF0ZVwiKVxuICAgIHB1YmxpYyBvbkFjdGl2YXRlOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIC8vIEZpcmVzIHdoZW5ldmVyIGEgdGFiIGlzIGRlYWN0aXZhdGVkIGhhdmluZyBwcmV2aW91c2x5IGJlZW4gYWN0aXZhdGVkLlxuICAgIEBPdXRwdXQoXCJkZWFjdGl2YXRlXCIpXG4gICAgcHVibGljIG9uRGVhY3RpdmF0ZTpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY3RpdmVcIilcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNBY3RpdmUoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNBY3RpdmUoYWN0aXZlOmJvb2xlYW4pIHtcbiAgICAgICAgbGV0IGlzQWN0aXZlID0gYWN0aXZlO1xuICAgICAgICAvLyBPbmx5IHVzZWQgYnkgQElucHV0KCksIHJ1bnMgd2hlbmV2ZXIgdXNlciBpbnB1dCBjaGFuZ2VzIGBpc0FjdGl2ZWAuXG4gICAgICAgIC8vIFJ1biBpbiB0aW1lb3V0IGJlY2F1c2UgYGlzRGlzYWJsZWRgIGNhbiBwcm9oaWJpdCB1c2VyIGZyb20gY2hhbmdpbmcgYGlzQWN0aXZlYC5cbiAgICAgICAgLy8gc28gdXBkYXRlIGlzIGRlbGF5ZWQgdG8gYXZvaWQgJ2NoYW5nZWQgYWZ0ZXIgY2hlY2tlZCcgZXJyb3IuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gT25seSBhbGxvdyBjaGFuZ2UgaWYgdGFiIGhlYWRlciBpcyBub3QgZGlzYWJsZWQuXG4gICAgICAgICAgICBpc0FjdGl2ZSA9ICF0aGlzLmlzRGlzYWJsZWQgPyBhY3RpdmUgOiBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlU3RhdGUoaXNBY3RpdmUpO1xuXG4gICAgICAgICAgICAvLyBGaXJlICdleHRlcm5hbCBjaGFuZ2UnIGV2ZW50IGFzIHVzZXIgaW5wdXQgaGFzIG9jY3VyZWQuXG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlRXh0ZXJuYWxDaGFuZ2UuZW1pdChpc0FjdGl2ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2lzRGlzYWJsZWQ6Ym9vbGVhbjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmRpc2FibGVkXCIpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzRGlzYWJsZWQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc0Rpc2FibGVkKGRpc2FibGVkOmJvb2xlYW4pIHtcbiAgICAgICAgLy8gT25seSB1cGRhdGUgaWYgdmFsdWUgcHJvdmlkZWQgaXMgZGlmZmVyZW50IHRvIGN1cnJlbnQgb25lLlxuICAgICAgICBpZiAodGhpcy5faXNEaXNhYmxlZCAhPT0gZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzRGlzYWJsZWQgPSBkaXNhYmxlZDtcblxuICAgICAgICAgICAgLy8gSWYgbm93IGRpc2FibGVkLCB0aGVuIHRhYiBoZWFkZXIgbXVzdCBiZSBkZWFjdGl2YXRlZC5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZUV4dGVybmFsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gICAgICAgIHRoaXMub25BY3RpdmF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgICAgICAgdGhpcy5vbkRlYWN0aXZhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICAgICAgdGhpcy5pc0Rpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBJbnRlcm5hbGx5IHVwZGF0ZSBhY3RpdmUgc3RhdGUuXG4gICAgcHVibGljIHNldEFjdGl2ZVN0YXRlKGFjdGl2ZTpib29sZWFuKTp2b2lkIHtcbiAgICAgICAgLy8gSWYgKGNhc3QpIGFjdGl2ZSB2YWx1ZSBoYXMgY2hhbmdlZDpcbiAgICAgICAgaWYgKCEhdGhpcy5faXNBY3RpdmUgIT09IGFjdGl2ZSkge1xuICAgICAgICAgICAgLy8gVXBkYXRlIHRvIHRoZSBuZXcgdmFsdWUuXG4gICAgICAgICAgICB0aGlzLl9pc0FjdGl2ZSA9IGFjdGl2ZTtcblxuICAgICAgICAgICAgLy8gRmlyZSB0aGUgYXBwcm9wcmlhdGUgYWN0aXZhdGlvbiBldmVudC5cbiAgICAgICAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQWN0aXZhdGUuZW1pdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uRGVhY3RpdmF0ZS5lbWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZWdhcmRsZXNzLCBlbWl0IGEgY2hhbmdlIHRvIGBpc0FjdGl2ZWAsIHNvIFsoaXNBY3RpdmUpXSB3b3JrcyBjb3JyZWN0bHkuXG4gICAgICAgIHRoaXMuaXNBY3RpdmVDaGFuZ2UuZW1pdChhY3RpdmUpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiKVxuICAgIHB1YmxpYyBvbkNsaWNrKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAvLyBBY3RpdmF0ZSB0aGUgdGFiIHdoZW4gY2xpY2tlZCwgc28gbG9uZyBhcyBpdCBpc24ndCBkaXNhYmxlZC5cbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19