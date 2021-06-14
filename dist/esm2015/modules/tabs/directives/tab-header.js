import { __decorate, __metadata } from "tslib";
import { HostBinding, Input, Directive, EventEmitter, HostListener, Output } from "@angular/core";
let SuiTabHeader = class SuiTabHeader {
    constructor() {
        this._isActive = false;
        this.isActiveChange = new EventEmitter();
        this.isActiveExternalChange = new EventEmitter();
        this.onActivate = new EventEmitter();
        this.onDeactivate = new EventEmitter();
        this.isDisabled = false;
        this.hasClasses = true;
    }
    get isActive() {
        return this._isActive;
    }
    set isActive(active) {
        let isActive = active;
        // Only used by @Input(), runs whenever user input changes `isActive`.
        // Run in timeout because `isDisabled` can prohibit user from changing `isActive`.
        // so update is delayed to avoid 'changed after checked' error.
        setTimeout(() => {
            // Only allow change if tab header is not disabled.
            isActive = !this.isDisabled ? active : false;
            this.setActiveState(isActive);
            // Fire 'external change' event as user input has occured.
            this.isActiveExternalChange.emit(isActive);
        });
    }
    get isDisabled() {
        return this._isDisabled;
    }
    set isDisabled(disabled) {
        // Only update if value provided is different to current one.
        if (this._isDisabled !== disabled) {
            this._isDisabled = disabled;
            // If now disabled, then tab header must be deactivated.
            if (this.isDisabled) {
                this.isActive = false;
            }
        }
    }
    // Internally update active state.
    setActiveState(active) {
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
    }
    onClick() {
        if (!this.isDisabled) {
            // Activate the tab when clicked, so long as it isn't disabled.
            this.isActive = true;
        }
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
export { SuiTabHeader };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvdGFicy9kaXJlY3RpdmVzL3RhYi1oZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUtsRyxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBa0VyQjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNsRCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUUxRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRTdDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBRXhCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFsREQsSUFBVyxRQUFRO1FBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFXLFFBQVEsQ0FBQyxNQUFjO1FBQzlCLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUN0QixzRUFBc0U7UUFDdEUsa0ZBQWtGO1FBQ2xGLCtEQUErRDtRQUMvRCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ1osbURBQW1EO1lBQ25ELFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQzdDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFOUIsMERBQTBEO1lBQzFELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBTUQsSUFBVyxVQUFVO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBVyxVQUFVLENBQUMsUUFBZ0I7UUFDbEMsNkRBQTZEO1FBQzdELElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxRQUFRLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7WUFFNUIsd0RBQXdEO1lBQ3hELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDekI7U0FDSjtJQUNMLENBQUM7SUFlRCxrQ0FBa0M7SUFDM0IsY0FBYyxDQUFDLE1BQWM7UUFDaEMsc0NBQXNDO1FBQ3RDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssTUFBTSxFQUFFO1lBQzdCLDJCQUEyQjtZQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztZQUV4Qix5Q0FBeUM7WUFDekMsSUFBSSxNQUFNLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUMxQjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQzVCO1NBQ0o7UUFFRCw0RUFBNEU7UUFDNUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUdNLE9BQU87UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQiwrREFBK0Q7WUFDL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDeEI7SUFDTCxDQUFDO0NBQ0osQ0FBQTtBQXZHRztJQURDLFdBQVcsQ0FBQyxZQUFZLENBQUM7O2dEQUNTO0FBR25DO0lBREMsS0FBSyxDQUFDLGNBQWMsQ0FBQzs7d0NBQ0w7QUFPakI7SUFEQyxNQUFNLEVBQUU7OEJBQ2EsWUFBWTtvREFBVTtBQU81QztJQURDLE1BQU0sQ0FBQyxVQUFVLENBQUM7OEJBQ0QsWUFBWTtnREFBTztBQUlyQztJQURDLE1BQU0sQ0FBQyxZQUFZLENBQUM7OEJBQ0QsWUFBWTtrREFBTztBQUl2QztJQUZDLFdBQVcsQ0FBQyxjQUFjLENBQUM7SUFDM0IsS0FBSyxFQUFFOzs7NENBR1A7QUFxQkQ7SUFGQyxXQUFXLENBQUMsZ0JBQWdCLENBQUM7SUFDN0IsS0FBSyxFQUFFOzs7OENBR1A7QUErQ0Q7SUFEQyxZQUFZLENBQUMsT0FBTyxDQUFDOzs7OzJDQU1yQjtBQXhHUSxZQUFZO0lBSHhCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxnQkFBZ0I7S0FDN0IsQ0FBQzs7R0FDVyxZQUFZLENBeUd4QjtTQXpHWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9zdEJpbmRpbmcsIElucHV0LCBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpVGFiSGVhZGVyXVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aVRhYkhlYWRlciB7XG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuaXRlbVwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoXCJzdWlUYWJIZWFkZXJcIilcbiAgICBwdWJsaWMgaWQ6c3RyaW5nO1xuXG4gICAgLy8gSW50ZXJuYWxseSBrZWVwcyB0cmFjayBvZiB3aGV0aGVyIHRoZSBoZWFkZXIgaXMgYWN0aXZlLlxuICAgIHByaXZhdGUgX2lzQWN0aXZlOmJvb2xlYW47XG5cbiAgICAvLyBFbmFibGVzIHVzZSBvZiBbKGlzQWN0aXZlKV0gc28gc3RhdGUgY2FuIGJlIHNldCB1c2luZyBib29sZWFucy5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgaXNBY3RpdmVDaGFuZ2U6RXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuXG4gICAgLy8gRmlyZXMgb25seSB3aGVuIGBpc0FjdGl2ZWAgY2hhbmdlcyBkdWUgdG8gdXNlciBpbnB1dC5cbiAgICBwdWJsaWMgaXNBY3RpdmVFeHRlcm5hbENoYW5nZTpFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG5cbiAgICAvLyBGaXJlcyB3aGVuZXZlciBhIHRhYiBpcyBhY3RpdmF0ZWQgaGF2aW5nIHByZXZpb3VzbHkgYmVlbiBkZWFjdGl2YXRlZC5cbiAgICBAT3V0cHV0KFwiYWN0aXZhdGVcIilcbiAgICBwdWJsaWMgb25BY3RpdmF0ZTpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICAvLyBGaXJlcyB3aGVuZXZlciBhIHRhYiBpcyBkZWFjdGl2YXRlZCBoYXZpbmcgcHJldmlvdXNseSBiZWVuIGFjdGl2YXRlZC5cbiAgICBAT3V0cHV0KFwiZGVhY3RpdmF0ZVwiKVxuICAgIHB1YmxpYyBvbkRlYWN0aXZhdGU6RXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYWN0aXZlXCIpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzQWN0aXZlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0FjdGl2ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzQWN0aXZlKGFjdGl2ZTpib29sZWFuKSB7XG4gICAgICAgIGxldCBpc0FjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgICAgLy8gT25seSB1c2VkIGJ5IEBJbnB1dCgpLCBydW5zIHdoZW5ldmVyIHVzZXIgaW5wdXQgY2hhbmdlcyBgaXNBY3RpdmVgLlxuICAgICAgICAvLyBSdW4gaW4gdGltZW91dCBiZWNhdXNlIGBpc0Rpc2FibGVkYCBjYW4gcHJvaGliaXQgdXNlciBmcm9tIGNoYW5naW5nIGBpc0FjdGl2ZWAuXG4gICAgICAgIC8vIHNvIHVwZGF0ZSBpcyBkZWxheWVkIHRvIGF2b2lkICdjaGFuZ2VkIGFmdGVyIGNoZWNrZWQnIGVycm9yLlxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8vIE9ubHkgYWxsb3cgY2hhbmdlIGlmIHRhYiBoZWFkZXIgaXMgbm90IGRpc2FibGVkLlxuICAgICAgICAgICAgaXNBY3RpdmUgPSAhdGhpcy5pc0Rpc2FibGVkID8gYWN0aXZlIDogZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZVN0YXRlKGlzQWN0aXZlKTtcblxuICAgICAgICAgICAgLy8gRmlyZSAnZXh0ZXJuYWwgY2hhbmdlJyBldmVudCBhcyB1c2VyIGlucHV0IGhhcyBvY2N1cmVkLlxuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZUV4dGVybmFsQ2hhbmdlLmVtaXQoaXNBY3RpdmUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc0Rpc2FibGVkOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5kaXNhYmxlZFwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc0Rpc2FibGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0Rpc2FibGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNEaXNhYmxlZChkaXNhYmxlZDpib29sZWFuKSB7XG4gICAgICAgIC8vIE9ubHkgdXBkYXRlIGlmIHZhbHVlIHByb3ZpZGVkIGlzIGRpZmZlcmVudCB0byBjdXJyZW50IG9uZS5cbiAgICAgICAgaWYgKHRoaXMuX2lzRGlzYWJsZWQgIT09IGRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9pc0Rpc2FibGVkID0gZGlzYWJsZWQ7XG5cbiAgICAgICAgICAgIC8vIElmIG5vdyBkaXNhYmxlZCwgdGhlbiB0YWIgaGVhZGVyIG11c3QgYmUgZGVhY3RpdmF0ZWQuXG4gICAgICAgICAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNBY3RpdmVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gICAgICAgIHRoaXMuaXNBY3RpdmVFeHRlcm5hbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAgICAgICB0aGlzLm9uQWN0aXZhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gICAgICAgIHRoaXMub25EZWFjdGl2YXRlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgICAgIHRoaXMuaXNEaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gSW50ZXJuYWxseSB1cGRhdGUgYWN0aXZlIHN0YXRlLlxuICAgIHB1YmxpYyBzZXRBY3RpdmVTdGF0ZShhY3RpdmU6Ym9vbGVhbik6dm9pZCB7XG4gICAgICAgIC8vIElmIChjYXN0KSBhY3RpdmUgdmFsdWUgaGFzIGNoYW5nZWQ6XG4gICAgICAgIGlmICghIXRoaXMuX2lzQWN0aXZlICE9PSBhY3RpdmUpIHtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0byB0aGUgbmV3IHZhbHVlLlxuICAgICAgICAgICAgdGhpcy5faXNBY3RpdmUgPSBhY3RpdmU7XG5cbiAgICAgICAgICAgIC8vIEZpcmUgdGhlIGFwcHJvcHJpYXRlIGFjdGl2YXRpb24gZXZlbnQuXG4gICAgICAgICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkFjdGl2YXRlLmVtaXQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkRlYWN0aXZhdGUuZW1pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVnYXJkbGVzcywgZW1pdCBhIGNoYW5nZSB0byBgaXNBY3RpdmVgLCBzbyBbKGlzQWN0aXZlKV0gd29ya3MgY29ycmVjdGx5LlxuICAgICAgICB0aGlzLmlzQWN0aXZlQ2hhbmdlLmVtaXQoYWN0aXZlKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIilcbiAgICBwdWJsaWMgb25DbGljaygpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgLy8gQWN0aXZhdGUgdGhlIHRhYiB3aGVuIGNsaWNrZWQsIHNvIGxvbmcgYXMgaXQgaXNuJ3QgZGlzYWJsZWQuXG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==