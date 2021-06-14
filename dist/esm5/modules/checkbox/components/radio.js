import { __decorate, __extends, __metadata } from "tslib";
import { Component, Directive, Input, Output, HostListener, HostBinding, EventEmitter, ViewChild, ElementRef } from "@angular/core";
import { customValueAccessorFactory, CustomValueAccessor } from "../../../misc/util/internal";
var SuiRadio = /** @class */ (function () {
    function SuiRadio() {
        this.isChecked = false;
        this.onCurrentValueChange = new EventEmitter();
        this.onTouched = new EventEmitter();
        this.isDisabled = false;
        this.isReadonly = false;
        this.hasClasses = true;
    }
    Object.defineProperty(SuiRadio.prototype, "checkedAttribute", {
        get: function () {
            return this.isChecked ? "" : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiRadio.prototype, "isDisabledAttribute", {
        get: function () {
            return this.isDisabled ? "disabled" : undefined;
        },
        enumerable: true,
        configurable: true
    });
    SuiRadio.prototype.onMouseDown = function (e) {
        e.preventDefault();
    };
    SuiRadio.prototype.onClick = function () {
        if (!this.isDisabled && !this.isReadonly) {
            this.currentValue = this.value;
            this.onCurrentValueChange.emit(this.currentValue);
            this.update();
            this.focusRadio();
        }
    };
    SuiRadio.prototype.onFocusOut = function () {
        this.onTouched.emit();
    };
    SuiRadio.prototype.update = function () {
        this.isChecked = this.currentValue === this.value;
    };
    SuiRadio.prototype.writeValue = function (value) {
        this.currentValue = value;
        this.update();
    };
    SuiRadio.prototype.focusRadio = function () {
        this._radioElement.nativeElement.focus();
    };
    __decorate([
        HostBinding("class.ui"),
        HostBinding("class.radio"),
        HostBinding("class.checkbox"),
        __metadata("design:type", Boolean)
    ], SuiRadio.prototype, "hasClasses", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SuiRadio.prototype, "name", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SuiRadio.prototype, "value", void 0);
    __decorate([
        HostBinding("class.checked"),
        __metadata("design:type", Boolean)
    ], SuiRadio.prototype, "isChecked", void 0);
    __decorate([
        Output("currentValueChange"),
        __metadata("design:type", EventEmitter)
    ], SuiRadio.prototype, "onCurrentValueChange", void 0);
    __decorate([
        Output("touched"),
        __metadata("design:type", EventEmitter)
    ], SuiRadio.prototype, "onTouched", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], SuiRadio.prototype, "isDisabled", void 0);
    __decorate([
        HostBinding("class.read-only"),
        Input(),
        __metadata("design:type", Boolean)
    ], SuiRadio.prototype, "isReadonly", void 0);
    __decorate([
        ViewChild("radio", { static: true }),
        __metadata("design:type", ElementRef)
    ], SuiRadio.prototype, "_radioElement", void 0);
    __decorate([
        HostListener("mousedown", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], SuiRadio.prototype, "onMouseDown", null);
    __decorate([
        HostListener("click"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SuiRadio.prototype, "onClick", null);
    __decorate([
        HostListener("focusout"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SuiRadio.prototype, "onFocusOut", null);
    SuiRadio = __decorate([
        Component({
            selector: "sui-radio-button",
            template: "\n<input class=\"hidden\"\n       type=\"checkbox\"\n       [attr.name]=\"name\"\n       [attr.checked]=\"checkedAttribute\"\n       [attr.disabled]=\"isDisabledAttribute\"\n       [ngModel]=\"isChecked\"\n       (ngModel)=\"currentValue = value\"\n       #radio>\n<label>\n    <ng-content></ng-content>\n</label>\n"
        }),
        __metadata("design:paramtypes", [])
    ], SuiRadio);
    return SuiRadio;
}());
export { SuiRadio };
var SuiRadioValueAccessor = /** @class */ (function (_super) {
    __extends(SuiRadioValueAccessor, _super);
    function SuiRadioValueAccessor(host) {
        return _super.call(this, host) || this;
    }
    SuiRadioValueAccessor_1 = SuiRadioValueAccessor;
    var SuiRadioValueAccessor_1;
    SuiRadioValueAccessor.ctorParameters = function () { return [
        { type: SuiRadio }
    ]; };
    SuiRadioValueAccessor = SuiRadioValueAccessor_1 = __decorate([
        Directive({
            selector: "sui-radio-button",
            host: {
                "(currentValueChange)": "onChange($event)",
                "(touched)": "onTouched()"
            },
            providers: [customValueAccessorFactory(SuiRadioValueAccessor_1)]
        }),
        __metadata("design:paramtypes", [SuiRadio])
    ], SuiRadioValueAccessor);
    return SuiRadioValueAccessor;
}(CustomValueAccessor));
export { SuiRadioValueAccessor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL2NoZWNrYm94L2NvbXBvbmVudHMvcmFkaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFDOUQsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQ3RDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDdUIsMEJBQTBCLEVBQUUsbUJBQW1CLEVBRTVFLE1BQU0sNkJBQTZCLENBQUM7QUFrQnJDO0lBeUNJO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksWUFBWSxFQUFLLENBQUM7UUFDbEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRTFDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBRXhCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFqQkQsc0JBQVcsc0NBQWdCO2FBQTNCO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUMzQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLHlDQUFtQjthQUE5QjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7SUFjTSw4QkFBVyxHQUFsQixVQUFtQixDQUFZO1FBQzNCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBR00sMEJBQU8sR0FBZDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDL0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3JCO0lBQ0wsQ0FBQztJQUdNLDZCQUFVLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU0seUJBQU0sR0FBYjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RELENBQUM7SUFFTSw2QkFBVSxHQUFqQixVQUFrQixLQUFPO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU8sNkJBQVUsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBL0VEO1FBSEMsV0FBVyxDQUFDLFVBQVUsQ0FBQztRQUN2QixXQUFXLENBQUMsYUFBYSxDQUFDO1FBQzFCLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQzs7Z0RBQ0s7SUFHbkM7UUFEQyxLQUFLLEVBQUU7OzBDQUNXO0lBR25CO1FBREMsS0FBSyxFQUFFOzsyQ0FDTztJQUdmO1FBREMsV0FBVyxDQUFDLGVBQWUsQ0FBQzs7K0NBQ0o7SUFLekI7UUFEQyxNQUFNLENBQUMsb0JBQW9CLENBQUM7a0NBQ0QsWUFBWTswREFBSTtJQUc1QztRQURDLE1BQU0sQ0FBQyxTQUFTLENBQUM7a0NBQ0QsWUFBWTsrQ0FBTztJQUdwQztRQURDLEtBQUssRUFBRTs7Z0RBQ2tCO0lBSTFCO1FBRkMsV0FBVyxDQUFDLGlCQUFpQixDQUFDO1FBQzlCLEtBQUssRUFBRTs7Z0RBQ2tCO0lBRzFCO1FBREMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztrQ0FDZixVQUFVO21EQUFDO0lBc0JqQztRQURDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7eUNBQ2pCLFVBQVU7OytDQUU5QjtJQUdEO1FBREMsWUFBWSxDQUFDLE9BQU8sQ0FBQzs7OzsyQ0FRckI7SUFHRDtRQURDLFlBQVksQ0FBQyxVQUFVLENBQUM7Ozs7OENBR3hCO0lBdEVRLFFBQVE7UUFoQnBCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLDZUQVliO1NBQ0EsQ0FBQzs7T0FDVyxRQUFRLENBb0ZwQjtJQUFELGVBQUM7Q0FBQSxBQXBGRCxJQW9GQztTQXBGWSxRQUFRO0FBOEZyQjtJQUE4Qyx5Q0FBbUM7SUFDN0UsK0JBQVksSUFBZ0I7ZUFDeEIsa0JBQU0sSUFBSSxDQUFDO0lBQ2YsQ0FBQzs4QkFIUSxxQkFBcUI7OztnQkFDYixRQUFROztJQURoQixxQkFBcUI7UUFSakMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixJQUFJLEVBQUU7Z0JBQ0Ysc0JBQXNCLEVBQUUsa0JBQWtCO2dCQUMxQyxXQUFXLEVBQUUsYUFBYTthQUM3QjtZQUNELFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDLHVCQUFxQixDQUFDLENBQUM7U0FDakUsQ0FBQzt5Q0FFbUIsUUFBUTtPQURoQixxQkFBcUIsQ0FJakM7SUFBRCw0QkFBQztDQUFBLEFBSkQsQ0FBOEMsbUJBQW1CLEdBSWhFO1NBSlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZyxcbiAgICBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQ29udGVudENoaWxkcmVuLCBBZnRlckNvbnRlbnRJbml0LCBRdWVyeUxpc3Rcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gICAgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0LCBjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeSwgQ3VzdG9tVmFsdWVBY2Nlc3NvcixcbiAgICBVdGlsXG59IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXJhZGlvLWJ1dHRvblwiLFxuICAgIHRlbXBsYXRlOiBgXG48aW5wdXQgY2xhc3M9XCJoaWRkZW5cIlxuICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgW2F0dHIubmFtZV09XCJuYW1lXCJcbiAgICAgICBbYXR0ci5jaGVja2VkXT1cImNoZWNrZWRBdHRyaWJ1dGVcIlxuICAgICAgIFthdHRyLmRpc2FibGVkXT1cImlzRGlzYWJsZWRBdHRyaWJ1dGVcIlxuICAgICAgIFtuZ01vZGVsXT1cImlzQ2hlY2tlZFwiXG4gICAgICAgKG5nTW9kZWwpPVwiY3VycmVudFZhbHVlID0gdmFsdWVcIlxuICAgICAgICNyYWRpbz5cbjxsYWJlbD5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2xhYmVsPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBTdWlSYWRpbzxUPiBpbXBsZW1lbnRzIElDdXN0b21WYWx1ZUFjY2Vzc29ySG9zdDxUPiB7XG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudWlcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5yYWRpb1wiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmNoZWNrYm94XCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG5hbWU6c3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdmFsdWU6VDtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmNoZWNrZWRcIilcbiAgICBwdWJsaWMgaXNDaGVja2VkOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgY3VycmVudFZhbHVlOlQ7XG5cbiAgICBAT3V0cHV0KFwiY3VycmVudFZhbHVlQ2hhbmdlXCIpXG4gICAgcHVibGljIG9uQ3VycmVudFZhbHVlQ2hhbmdlOkV2ZW50RW1pdHRlcjxUPjtcblxuICAgIEBPdXRwdXQoXCJ0b3VjaGVkXCIpXG4gICAgcHVibGljIG9uVG91Y2hlZDpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc0Rpc2FibGVkOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5yZWFkLW9ubHlcIilcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc1JlYWRvbmx5OmJvb2xlYW47XG5cbiAgICBAVmlld0NoaWxkKFwicmFkaW9cIiwgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBwcml2YXRlIF9yYWRpb0VsZW1lbnQ6RWxlbWVudFJlZjtcblxuICAgIHB1YmxpYyBnZXQgY2hlY2tlZEF0dHJpYnV0ZSgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQ2hlY2tlZCA/IFwiXCIgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpc0Rpc2FibGVkQXR0cmlidXRlKCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNEaXNhYmxlZCA/IFwiZGlzYWJsZWRcIiA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkN1cnJlbnRWYWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICAgICAgdGhpcy5pc0Rpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNSZWFkb25seSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uTW91c2VEb3duKGU6TW91c2VFdmVudCk6dm9pZCB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIilcbiAgICBwdWJsaWMgb25DbGljaygpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCAmJiAhdGhpcy5pc1JlYWRvbmx5KSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICB0aGlzLm9uQ3VycmVudFZhbHVlQ2hhbmdlLmVtaXQodGhpcy5jdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNSYWRpbygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImZvY3Vzb3V0XCIpXG4gICAgcHVibGljIG9uRm9jdXNPdXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQuZW1pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5pc0NoZWNrZWQgPSB0aGlzLmN1cnJlbnRWYWx1ZSA9PT0gdGhpcy52YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTpUKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZvY3VzUmFkaW8oKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcmFkaW9FbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1yYWRpby1idXR0b25cIixcbiAgICBob3N0OiB7XG4gICAgICAgIFwiKGN1cnJlbnRWYWx1ZUNoYW5nZSlcIjogXCJvbkNoYW5nZSgkZXZlbnQpXCIsXG4gICAgICAgIFwiKHRvdWNoZWQpXCI6IFwib25Ub3VjaGVkKClcIlxuICAgIH0sXG4gICAgcHJvdmlkZXJzOiBbY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnkoU3VpUmFkaW9WYWx1ZUFjY2Vzc29yKV1cbn0pXG5leHBvcnQgY2xhc3MgU3VpUmFkaW9WYWx1ZUFjY2Vzc29yPFQ+IGV4dGVuZHMgQ3VzdG9tVmFsdWVBY2Nlc3NvcjxULCBTdWlSYWRpbzxUPj4ge1xuICAgIGNvbnN0cnVjdG9yKGhvc3Q6U3VpUmFkaW88VD4pIHtcbiAgICAgICAgc3VwZXIoaG9zdCk7XG4gICAgfVxufVxuIl19