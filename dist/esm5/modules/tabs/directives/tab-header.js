import { __decorate, __metadata } from "tslib";
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
        get: function () {
            return this._isActive;
        },
        set: function (active) {
            var _this = this;
            var isActive = active;
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
        get: function () {
            return this._isDisabled;
        },
        set: function (disabled) {
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
    // Internally update active state.
    SuiTabHeader.prototype.setActiveState = function (active) {
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
    SuiTabHeader.prototype.onClick = function () {
        if (!this.isDisabled) {
            // Activate the tab when clicked, so long as it isn't disabled.
            this.isActive = true;
        }
    };
    __decorate([
        HostBinding("class.item"),
        __metadata("design:type", Boolean)
    ], SuiTabHeader.prototype, "hasClasses", void 0);
    __decorate([
        Input("suiTabHeader"),
        __metadata("design:type", String)
    ], SuiTabHeader.prototype, "id", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], SuiTabHeader.prototype, "isActiveChange", void 0);
    __decorate([
        Output("activate"),
        __metadata("design:type", EventEmitter)
    ], SuiTabHeader.prototype, "onActivate", void 0);
    __decorate([
        Output("deactivate"),
        __metadata("design:type", EventEmitter)
    ], SuiTabHeader.prototype, "onDeactivate", void 0);
    __decorate([
        HostBinding("class.active"),
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SuiTabHeader.prototype, "isActive", null);
    __decorate([
        HostBinding("class.disabled"),
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SuiTabHeader.prototype, "isDisabled", null);
    __decorate([
        HostListener("click"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SuiTabHeader.prototype, "onClick", null);
    SuiTabHeader = __decorate([
        Directive({
            selector: "[suiTabHeader]"
        }),
        __metadata("design:paramtypes", [])
    ], SuiTabHeader);
    return SuiTabHeader;
}());
export { SuiTabHeader };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvdGFicy9kaXJlY3RpdmVzL3RhYi1oZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUtsRztJQWtFSTtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNsRCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUUxRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRTdDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBRXhCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFsREQsc0JBQVcsa0NBQVE7YUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQUVELFVBQW9CLE1BQWM7WUFBbEMsaUJBYUM7WUFaRyxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUM7WUFDdEIsc0VBQXNFO1lBQ3RFLGtGQUFrRjtZQUNsRiwrREFBK0Q7WUFDL0QsVUFBVSxDQUFDO2dCQUNQLG1EQUFtRDtnQkFDbkQsUUFBUSxHQUFHLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQzdDLEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBRTlCLDBEQUEwRDtnQkFDMUQsS0FBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7OztPQWZBO0lBcUJELHNCQUFXLG9DQUFVO2FBQXJCO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7YUFFRCxVQUFzQixRQUFnQjtZQUNsQyw2REFBNkQ7WUFDN0QsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFFBQVEsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7Z0JBRTVCLHdEQUF3RDtnQkFDeEQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztpQkFDekI7YUFDSjtRQUNMLENBQUM7OztPQVpBO0lBMkJELGtDQUFrQztJQUMzQixxQ0FBYyxHQUFyQixVQUFzQixNQUFjO1FBQ2hDLHNDQUFzQztRQUN0QyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLE1BQU0sRUFBRTtZQUM3QiwyQkFBMkI7WUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7WUFFeEIseUNBQXlDO1lBQ3pDLElBQUksTUFBTSxFQUFFO2dCQUNSLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDMUI7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUM1QjtTQUNKO1FBRUQsNEVBQTRFO1FBQzVFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFHTSw4QkFBTyxHQUFkO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsK0RBQStEO1lBQy9ELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQXRHRDtRQURDLFdBQVcsQ0FBQyxZQUFZLENBQUM7O29EQUNTO0lBR25DO1FBREMsS0FBSyxDQUFDLGNBQWMsQ0FBQzs7NENBQ0w7SUFPakI7UUFEQyxNQUFNLEVBQUU7a0NBQ2EsWUFBWTt3REFBVTtJQU81QztRQURDLE1BQU0sQ0FBQyxVQUFVLENBQUM7a0NBQ0QsWUFBWTtvREFBTztJQUlyQztRQURDLE1BQU0sQ0FBQyxZQUFZLENBQUM7a0NBQ0QsWUFBWTtzREFBTztJQUl2QztRQUZDLFdBQVcsQ0FBQyxjQUFjLENBQUM7UUFDM0IsS0FBSyxFQUFFOzs7Z0RBR1A7SUFxQkQ7UUFGQyxXQUFXLENBQUMsZ0JBQWdCLENBQUM7UUFDN0IsS0FBSyxFQUFFOzs7a0RBR1A7SUErQ0Q7UUFEQyxZQUFZLENBQUMsT0FBTyxDQUFDOzs7OytDQU1yQjtJQXhHUSxZQUFZO1FBSHhCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7U0FDN0IsQ0FBQzs7T0FDVyxZQUFZLENBeUd4QjtJQUFELG1CQUFDO0NBQUEsQUF6R0QsSUF5R0M7U0F6R1ksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhvc3RCaW5kaW5nLCBJbnB1dCwgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgT3V0cHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW3N1aVRhYkhlYWRlcl1cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlUYWJIZWFkZXIge1xuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLml0ZW1cIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQElucHV0KFwic3VpVGFiSGVhZGVyXCIpXG4gICAgcHVibGljIGlkOnN0cmluZztcblxuICAgIC8vIEludGVybmFsbHkga2VlcHMgdHJhY2sgb2Ygd2hldGhlciB0aGUgaGVhZGVyIGlzIGFjdGl2ZS5cbiAgICBwcml2YXRlIF9pc0FjdGl2ZTpib29sZWFuO1xuXG4gICAgLy8gRW5hYmxlcyB1c2Ugb2YgWyhpc0FjdGl2ZSldIHNvIHN0YXRlIGNhbiBiZSBzZXQgdXNpbmcgYm9vbGVhbnMuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIGlzQWN0aXZlQ2hhbmdlOkV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICAgIC8vIEZpcmVzIG9ubHkgd2hlbiBgaXNBY3RpdmVgIGNoYW5nZXMgZHVlIHRvIHVzZXIgaW5wdXQuXG4gICAgcHVibGljIGlzQWN0aXZlRXh0ZXJuYWxDaGFuZ2U6RXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuXG4gICAgLy8gRmlyZXMgd2hlbmV2ZXIgYSB0YWIgaXMgYWN0aXZhdGVkIGhhdmluZyBwcmV2aW91c2x5IGJlZW4gZGVhY3RpdmF0ZWQuXG4gICAgQE91dHB1dChcImFjdGl2YXRlXCIpXG4gICAgcHVibGljIG9uQWN0aXZhdGU6RXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgLy8gRmlyZXMgd2hlbmV2ZXIgYSB0YWIgaXMgZGVhY3RpdmF0ZWQgaGF2aW5nIHByZXZpb3VzbHkgYmVlbiBhY3RpdmF0ZWQuXG4gICAgQE91dHB1dChcImRlYWN0aXZhdGVcIilcbiAgICBwdWJsaWMgb25EZWFjdGl2YXRlOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjdGl2ZVwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc0FjdGl2ZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNBY3RpdmU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc0FjdGl2ZShhY3RpdmU6Ym9vbGVhbikge1xuICAgICAgICBsZXQgaXNBY3RpdmUgPSBhY3RpdmU7XG4gICAgICAgIC8vIE9ubHkgdXNlZCBieSBASW5wdXQoKSwgcnVucyB3aGVuZXZlciB1c2VyIGlucHV0IGNoYW5nZXMgYGlzQWN0aXZlYC5cbiAgICAgICAgLy8gUnVuIGluIHRpbWVvdXQgYmVjYXVzZSBgaXNEaXNhYmxlZGAgY2FuIHByb2hpYml0IHVzZXIgZnJvbSBjaGFuZ2luZyBgaXNBY3RpdmVgLlxuICAgICAgICAvLyBzbyB1cGRhdGUgaXMgZGVsYXllZCB0byBhdm9pZCAnY2hhbmdlZCBhZnRlciBjaGVja2VkJyBlcnJvci5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBPbmx5IGFsbG93IGNoYW5nZSBpZiB0YWIgaGVhZGVyIGlzIG5vdCBkaXNhYmxlZC5cbiAgICAgICAgICAgIGlzQWN0aXZlID0gIXRoaXMuaXNEaXNhYmxlZCA/IGFjdGl2ZSA6IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVTdGF0ZShpc0FjdGl2ZSk7XG5cbiAgICAgICAgICAgIC8vIEZpcmUgJ2V4dGVybmFsIGNoYW5nZScgZXZlbnQgYXMgdXNlciBpbnB1dCBoYXMgb2NjdXJlZC5cbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmVFeHRlcm5hbENoYW5nZS5lbWl0KGlzQWN0aXZlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaXNEaXNhYmxlZDpib29sZWFuO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuZGlzYWJsZWRcIilcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNEaXNhYmxlZCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNEaXNhYmxlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzRGlzYWJsZWQoZGlzYWJsZWQ6Ym9vbGVhbikge1xuICAgICAgICAvLyBPbmx5IHVwZGF0ZSBpZiB2YWx1ZSBwcm92aWRlZCBpcyBkaWZmZXJlbnQgdG8gY3VycmVudCBvbmUuXG4gICAgICAgIGlmICh0aGlzLl9pc0Rpc2FibGVkICE9PSBkaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5faXNEaXNhYmxlZCA9IGRpc2FibGVkO1xuXG4gICAgICAgICAgICAvLyBJZiBub3cgZGlzYWJsZWQsIHRoZW4gdGFiIGhlYWRlciBtdXN0IGJlIGRlYWN0aXZhdGVkLlxuICAgICAgICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzQWN0aXZlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgICAgICB0aGlzLmlzQWN0aXZlRXh0ZXJuYWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgICAgICAgdGhpcy5vbkFjdGl2YXRlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICAgICAgICB0aGlzLm9uRGVhY3RpdmF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEludGVybmFsbHkgdXBkYXRlIGFjdGl2ZSBzdGF0ZS5cbiAgICBwdWJsaWMgc2V0QWN0aXZlU3RhdGUoYWN0aXZlOmJvb2xlYW4pOnZvaWQge1xuICAgICAgICAvLyBJZiAoY2FzdCkgYWN0aXZlIHZhbHVlIGhhcyBjaGFuZ2VkOlxuICAgICAgICBpZiAoISF0aGlzLl9pc0FjdGl2ZSAhPT0gYWN0aXZlKSB7XG4gICAgICAgICAgICAvLyBVcGRhdGUgdG8gdGhlIG5ldyB2YWx1ZS5cbiAgICAgICAgICAgIHRoaXMuX2lzQWN0aXZlID0gYWN0aXZlO1xuXG4gICAgICAgICAgICAvLyBGaXJlIHRoZSBhcHByb3ByaWF0ZSBhY3RpdmF0aW9uIGV2ZW50LlxuICAgICAgICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25BY3RpdmF0ZS5lbWl0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMub25EZWFjdGl2YXRlLmVtaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlZ2FyZGxlc3MsIGVtaXQgYSBjaGFuZ2UgdG8gYGlzQWN0aXZlYCwgc28gWyhpc0FjdGl2ZSldIHdvcmtzIGNvcnJlY3RseS5cbiAgICAgICAgdGhpcy5pc0FjdGl2ZUNoYW5nZS5lbWl0KGFjdGl2ZSk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIpXG4gICAgcHVibGljIG9uQ2xpY2soKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIC8vIEFjdGl2YXRlIHRoZSB0YWIgd2hlbiBjbGlja2VkLCBzbyBsb25nIGFzIGl0IGlzbid0IGRpc2FibGVkLlxuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=