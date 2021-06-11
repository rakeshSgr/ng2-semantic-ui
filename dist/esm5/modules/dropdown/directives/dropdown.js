/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Input, HostBinding, EventEmitter, Output, ContentChild, ElementRef, HostListener, QueryList, ContentChildren } from "@angular/core";
import { HandledEvent, KeyCode } from "../../../misc/util/internal";
import { DropdownService, DropdownAutoCloseType } from "../services/dropdown.service";
import { SuiDropdownMenu } from "./dropdown-menu";
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
        { type: Directive, args: [{
                    selector: "[suiDropdown]"
                },] }
    ];
    /** @nocollapse */
    SuiDropdown.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    SuiDropdown.propDecorators = {
        _menu: [{ type: ContentChild, args: [SuiDropdownMenu, { static: false },] }],
        _children: [{ type: ContentChildren, args: [SuiDropdown, { descendants: true },] }],
        isOpenChange: [{ type: Output }],
        isActive: [{ type: HostBinding, args: ["class.active",] }],
        isOpen: [{ type: Input }],
        isDisabled: [{ type: HostBinding, args: ["class.disabled",] }, { type: Input }],
        _tabIndex: [{ type: Input, args: ["tabindex",] }],
        tabIndex: [{ type: HostBinding, args: ["attr.tabindex",] }],
        autoClose: [{ type: Input }],
        onClick: [{ type: HostListener, args: ["click", ["$event"],] }],
        onFocusOut: [{ type: HostListener, args: ["focusout", ["$event"],] }],
        onKeypress: [{ type: HostListener, args: ["keypress", ["$event"],] }]
    };
    return SuiDropdown;
}());
export { SuiDropdown };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL2Ryb3Bkb3duL2RpcmVjdGl2ZXMvZHJvcGRvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFvQixZQUFZLEVBQ25GLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFDdkQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQWUsTUFBTSw2QkFBNkIsQ0FBQztBQUNqRixPQUFPLEVBQUUsZUFBZSxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztJQTRFOUMscUJBQW9CLFFBQW1CO1FBQXZDLGlCQU9DO1FBUG1CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQztZQUNoQyxJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO2dCQUNyQixLQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUN2QztTQUNKLENBQUMsQ0FBQztLQUNOOzBCQXJFVSxpQ0FBUTs7Ozs7OztZQUVmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssS0FBSSxFQUFWLENBQVUsQ0FBQyxDQUFDOzs7OztJQUdsRCxzQkFDVyxxQ0FBWTs7OztRQUR2QjtZQUVJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7U0FDcEM7OztP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QkFDN0IsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBRXRCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25DO1NBQ0o7S0FDSjs7OztJQUVPLHFDQUFlOzs7O1FBQ25CLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEtBQUsscUJBQXFCLENBQUMsU0FBUztZQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsS0FBSyxxQkFBcUIsQ0FBQyxZQUFZLEVBQUU7O1lBRXZFLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDOzs7Z0JBeElSLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsZUFBZTtpQkFDNUI7Ozs7Z0JBUkcsVUFBVTs7O3dCQVlULFlBQVksU0FBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzRCQUcvQyxlQUFlLFNBQUMsV0FBVyxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTsrQkFRbEQsTUFBTTsyQkFLTixXQUFXLFNBQUMsY0FBYzt5QkFNMUIsS0FBSzs2QkFVTCxXQUFXLFNBQUMsZ0JBQWdCLGNBQzVCLEtBQUs7NEJBU0wsS0FBSyxTQUFDLFVBQVU7MkJBR2hCLFdBQVcsU0FBQyxlQUFlOzRCQWMzQixLQUFLOzBCQXFDTCxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzZCQVNoQyxZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDOzZCQU9uQyxZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDOztzQkE5SHhDOztTQVdhLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIERpcmVjdGl2ZSwgSW5wdXQsIEhvc3RCaW5kaW5nLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgQWZ0ZXJDb250ZW50SW5pdCwgQ29udGVudENoaWxkLFxuICAgIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgUXVlcnlMaXN0LCBDb250ZW50Q2hpbGRyZW5cbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEhhbmRsZWRFdmVudCwgS2V5Q29kZSwgSUZvY3VzRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBEcm9wZG93blNlcnZpY2UsIERyb3Bkb3duQXV0b0Nsb3NlVHlwZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9kcm9wZG93bi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTdWlEcm9wZG93bk1lbnUgfSBmcm9tIFwiLi9kcm9wZG93bi1tZW51XCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzdWlEcm9wZG93bl1cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlEcm9wZG93biBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICAgIHB1YmxpYyBzZXJ2aWNlOkRyb3Bkb3duU2VydmljZTtcblxuICAgIEBDb250ZW50Q2hpbGQoU3VpRHJvcGRvd25NZW51LCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwcml2YXRlIF9tZW51OlN1aURyb3Bkb3duTWVudTtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oU3VpRHJvcGRvd24sIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgICBwcml2YXRlIF9jaGlsZHJlbjpRdWVyeUxpc3Q8U3VpRHJvcGRvd24+O1xuXG4gICAgcHVibGljIGdldCBjaGlsZHJlbigpOlN1aURyb3Bkb3duW10ge1xuICAgICAgICAvLyBAQ29udGVudENoaWxkcmVuIGluY2x1ZGVzIHRoZSBjdXJyZW50IGVsZW1lbnQgYnkgZGVmYXVsdC5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuLmZpbHRlcihjID0+IGMgIT09IHRoaXMpO1xuICAgIH1cblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNPcGVuQ2hhbmdlKCk6RXZlbnRFbWl0dGVyPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5pc09wZW5DaGFuZ2U7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYWN0aXZlXCIpXG4gICAgcHVibGljIGdldCBpc0FjdGl2ZSgpOmJvb2xlYW4ge1xuICAgICAgICAvLyBUaGlzIGlzIHRvIGVuc3VyZSBuZXN0ZWQgZHJvcGRvd25zIGRvbid0IGdldCBtYWRlIGJvbGQuXG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuaXNPcGVuICYmICF0aGlzLnNlcnZpY2UuaXNOZXN0ZWQ7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzT3BlbigpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmlzT3BlbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzT3Blbih2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgIC8vIElmIHdlIGFyZSBvcGVuaW5nIHRoZSBkcm9wZG93biwgd2Ugd2FudCB0byBhbHdheXMgb3BlbiBpdHMgcGFyZW50cy5cbiAgICAgICAgdGhpcy5zZXJ2aWNlLnNldE9wZW5TdGF0ZSh2YWx1ZSwgISF2YWx1ZSk7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuZGlzYWJsZWRcIilcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNEaXNhYmxlZCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmlzRGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc0Rpc2FibGVkKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnNldERpc2FibGVkU3RhdGUodmFsdWUpO1xuICAgIH1cblxuICAgIEBJbnB1dChcInRhYmluZGV4XCIpXG4gICAgcHJpdmF0ZSBfdGFiSW5kZXg/Om51bWJlcjtcblxuICAgIEBIb3N0QmluZGluZyhcImF0dHIudGFiaW5kZXhcIilcbiAgICBwdWJsaWMgZ2V0IHRhYkluZGV4KCk6bnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCB8fCB0aGlzLnNlcnZpY2UuaXNOZXN0ZWQpIHtcbiAgICAgICAgICAgIC8vIElmIGRpc2FibGVkLCByZW1vdmUgZnJvbSB0YWJpbmRleC5cbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3RhYkluZGV4ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gSWYgY3VzdG9tIHRhYmluZGV4LCBkZWZhdWx0IHRvIHRoYXQuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGFiSW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCByZXR1cm4gZGVmYXVsdCBvZiAwLlxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgYXV0b0Nsb3NlKCk6RHJvcGRvd25BdXRvQ2xvc2VUeXBlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5hdXRvQ2xvc2VNb2RlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYXV0b0Nsb3NlKHZhbHVlOkRyb3Bkb3duQXV0b0Nsb3NlVHlwZSkge1xuICAgICAgICB0aGlzLnNlcnZpY2UuYXV0b0Nsb3NlTW9kZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnQ6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLnNlcnZpY2UgPSBuZXcgRHJvcGRvd25TZXJ2aWNlKCk7XG4gICAgICAgIHRoaXMuc2VydmljZS5pc09wZW5DaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlcnZpY2UuaXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9tZW51KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBzZXQgW3N1aURyb3Bkb3duTWVudV0gb24gdGhlIG1lbnUgZWxlbWVudC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbWVudS5zZXJ2aWNlID0gdGhpcy5zZXJ2aWNlO1xuICAgICAgICB0aGlzLl9tZW51LnBhcmVudEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuXG4gICAgICAgIHRoaXMuY2hpbGRyZW5VcGRhdGVkKCk7XG4gICAgICAgIHRoaXMuX2NoaWxkcmVuLmNoYW5nZXNcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jaGlsZHJlblVwZGF0ZWQoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGlsZHJlblVwZGF0ZWQoKTp2b2lkIHtcbiAgICAgICAgLy8gUmVyZWdpc3RlciBjaGlsZCBkcm9wZG93bnMgZWFjaCB0aW1lIHRoZSBtZW51IGNvbnRlbnQgY2hhbmdlcy5cbiAgICAgICAgdGhpcy5jaGlsZHJlblxuICAgICAgICAgICAgLm1hcChjID0+IGMuc2VydmljZSlcbiAgICAgICAgICAgIC5mb3JFYWNoKHMgPT4gdGhpcy5zZXJ2aWNlLnJlZ2lzdGVyQ2hpbGQocykpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uQ2xpY2soZTpIYW5kbGVkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoIWUuZXZlbnRIYW5kbGVkKSB7XG4gICAgICAgICAgICBlLmV2ZW50SGFuZGxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuc2VydmljZS50b2dnbGVPcGVuU3RhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c291dFwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uRm9jdXNPdXQoZTpJRm9jdXNFdmVudCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGUucmVsYXRlZFRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMuZXh0ZXJuYWxseUNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwia2V5cHJlc3NcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbktleXByZXNzKGU6SGFuZGxlZEV2ZW50ICYgS2V5Ym9hcmRFdmVudCk6dm9pZCB7XG4gICAgICAgIC8vIEJsb2NrIHRoZSBrZXlib2FyZCBldmVudCBmcm9tIGJlaW5nIGZpcmVkIG9uIHBhcmVudCBkcm9wZG93bnMuXG4gICAgICAgIGlmICghZS5ldmVudEhhbmRsZWQpIHtcblxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gS2V5Q29kZS5FbnRlcikge1xuICAgICAgICAgICAgICAgIGUuZXZlbnRIYW5kbGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZS5zZXRPcGVuU3RhdGUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGV4dGVybmFsbHlDbG9zZSgpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5zZXJ2aWNlLmF1dG9DbG9zZU1vZGUgPT09IERyb3Bkb3duQXV0b0Nsb3NlVHlwZS5JdGVtQ2xpY2sgfHxcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2UuYXV0b0Nsb3NlTW9kZSA9PT0gRHJvcGRvd25BdXRvQ2xvc2VUeXBlLk91dHNpZGVDbGljaykge1xuICAgICAgICAgICAgICAgIC8vIE5vIG5lZWQgdG8gcmVmbGVjdCBpbiBwYXJlbnQgc2luY2UgdGhleSBhcmUgYWxzbyBib3VuZCB0byBkb2N1bWVudC5cbiAgICAgICAgICAgIHRoaXMuc2VydmljZS5zZXRPcGVuU3RhdGUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19