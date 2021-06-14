import { __decorate, __metadata } from "tslib";
import { Component, ViewChild, ViewContainerRef, ElementRef, EventEmitter, HostListener, HostBinding } from "@angular/core";
import { PositioningService } from "../../../misc/util/internal";
import { TransitionController, TransitionDirection, Transition } from "../../transition/internal";
var SuiPopup = /** @class */ (function () {
    function SuiPopup(elementRef) {
        this.elementRef = elementRef;
        this.transitionController = new TransitionController(false);
        this._isOpen = false;
        this.onOpen = new EventEmitter();
        this.onClose = new EventEmitter();
        this.tabindex = 0;
    }
    Object.defineProperty(SuiPopup.prototype, "isOpen", {
        get: function () {
            return this._isOpen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopup.prototype, "anchor", {
        set: function (anchor) {
            this._anchor = anchor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopup.prototype, "direction", {
        // Returns the direction (`top`, `left`, `right`, `bottom`) of the current placement.
        get: function () {
            // We need to set direction attribute before popper init to allow correct positioning
            return this.config.placement.split(" ").shift();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopup.prototype, "alignment", {
        // Returns the alignment (`top`, `left`, `right`, `bottom`) of the current placement.
        get: function () {
            return this.config.placement.split(" ").pop();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopup.prototype, "dynamicClasses", {
        get: function () {
            var classes = {};
            if (this.direction) {
                classes[this.direction] = true;
            }
            if (this.alignment) {
                classes[this.alignment] = true;
            }
            if (this.config.isInverted) {
                classes.inverted = true;
            }
            if (this.config.isBasic) {
                classes.basic = true;
            }
            if (this.config.isFlowing) {
                classes.flowing = true;
            }
            if (this.config.size) {
                classes[this.config.size] = true;
            }
            if (this.config.width) {
                classes[this.config.width] = true;
            }
            return classes;
        },
        enumerable: true,
        configurable: true
    });
    SuiPopup.prototype.open = function () {
        var _this = this;
        // Only attempt to open if currently closed.
        if (!this.isOpen) {
            // Cancel the closing timer.
            clearTimeout(this.closingTimeout);
            // Create positioning service after a brief delay.
            setTimeout(function () {
                _this.positioningService = new PositioningService(_this._anchor, _this._container.element, _this.config.placement, ".dynamic.arrow");
                _this.positioningService.hasArrow = !_this.config.isBasic;
            });
            // Cancel all other transitions, and initiate the opening transition.
            this.transitionController.stopAll();
            this.transitionController.animate(new Transition(this.config.transition, this.config.transitionDuration, TransitionDirection.In, function () {
                // Focus any element with [autofocus] attribute.
                var autoFocus = _this.elementRef.nativeElement.querySelector("[autofocus]");
                if (autoFocus) {
                    // Autofocus after the browser has had time to process other event handlers.
                    setTimeout(function () { return autoFocus.focus(); }, 10);
                    // Try to focus again when the modal has opened so that autofocus works in IE11.
                    setTimeout(function () { return autoFocus.focus(); }, _this.config.transitionDuration);
                }
            }));
            // Finally, set the popup to be open.
            this._isOpen = true;
            this.onOpen.emit();
        }
    };
    SuiPopup.prototype.toggle = function () {
        if (!this.isOpen) {
            return this.open();
        }
        return this.close();
    };
    SuiPopup.prototype.close = function () {
        var _this = this;
        // Only attempt to close if currently open.
        if (this.isOpen) {
            // Cancel all other transitions, and initiate the closing transition.
            this.transitionController.stopAll();
            this.transitionController.animate(new Transition(this.config.transition, this.config.transitionDuration, TransitionDirection.Out));
            // Cancel the closing timer.
            clearTimeout(this.closingTimeout);
            // Start the closing timer, that fires the `onClose` event after the transition duration number of milliseconds.
            this.closingTimeout = window.setTimeout(function () { return _this.onClose.emit(); }, this.config.transitionDuration);
            // Finally, set the popup to be closed.
            this._isOpen = false;
        }
    };
    SuiPopup.prototype.onClick = function (event) {
        // Makes sense here, as the popup shouldn't be attached to any DOM element.
        event.stopPropagation();
    };
    SuiPopup.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        ViewChild("container", { read: ViewContainerRef, static: true }),
        __metadata("design:type", ViewContainerRef)
    ], SuiPopup.prototype, "_container", void 0);
    __decorate([
        ViewChild("templateSibling", { read: ViewContainerRef, static: true }),
        __metadata("design:type", ViewContainerRef)
    ], SuiPopup.prototype, "templateSibling", void 0);
    __decorate([
        HostBinding("attr.tabindex"),
        __metadata("design:type", Number)
    ], SuiPopup.prototype, "tabindex", void 0);
    __decorate([
        HostListener("click", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], SuiPopup.prototype, "onClick", null);
    SuiPopup = __decorate([
        Component({
            selector: "sui-popup",
            template: "\n<div class=\"ui popup\"\n     [ngClass]=\"dynamicClasses\"\n     [suiTransition]=\"transitionController\"\n     [attr.direction]=\"direction\"\n     #container>\n\n    <ng-container *ngIf=\"!config.template && (!!config.header || !!config.text)\">\n        <div class=\"header\" *ngIf=\"config.header\">{{ config.header }}</div>\n        <div class=\"content\">{{ config.text }}</div>\n    </ng-container>\n    <div #templateSibling></div>\n\n    <sui-popup-arrow *ngIf=\"!config.isBasic\"\n                     [placement]=\"config.placement\"\n                     [inverted]=\"config.isInverted\"></sui-popup-arrow>\n</div>\n",
            styles: ["\n.ui.popup {\n    /* Autofit popup to the contents. */\n    right: auto;\n    margin: 0;\n}\n\n.ui.animating.popup {\n    /* When the popup is animating, it may not initially be in the correct position.\n       This fires a mouse event, causing the anchor's mouseleave to fire - making the popup flicker.\n       Setting pointer-events to none while animating fixes this bug. */\n    pointer-events: none;\n}\n\n.ui.popup::before {\n    /* Hide the Semantic UI CSS arrow. */\n    display: none;\n}\n\n/* Offset popup by 0.75em above and below when placed 'vertically'. */\n.ui.popup[direction=\"top\"],\n.ui.popup[direction=\"bottom\"] {\n    margin-top: 0.75em;\n    margin-bottom: 0.75em;\n}\n\n/* Offset popup by 0.75em either side when placed 'horizontally'. */\n.ui.popup[direction=\"left\"],\n.ui.popup[direction=\"right\"] {\n    margin-left: 0.75em;\n    margin-right: 0.75em;\n}\n"]
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], SuiPopup);
    return SuiPopup;
}());
export { SuiPopup };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL3BvcHVwL2NvbXBvbmVudHMvcG9wdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1SCxPQUFPLEVBQUUsa0JBQWtCLEVBQW1CLE1BQU0sNkJBQTZCLENBQUM7QUFDbEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBMERsRztJQTBFSSxrQkFBbUIsVUFBcUI7UUFBckIsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUNwQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU1RCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUVyQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRXhDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFqRUQsc0JBQVcsNEJBQU07YUFBakI7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFNRCxzQkFBVyw0QkFBTTthQUFqQixVQUFrQixNQUFpQjtZQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUdELHNCQUFXLCtCQUFTO1FBRHBCLHFGQUFxRjthQUNyRjtZQUNJLHFGQUFxRjtZQUNyRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FB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QUFLLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Z0JBOUU2QixVQUFVOztJQWxEeEM7UUFEQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztrQ0FDOUMsZ0JBQWdCO2dEQUFDO0lBNkNwQztRQURDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7a0NBQ2hELGdCQUFnQjtxREFBQztJQUd4QztRQURDLFdBQVcsQ0FBQyxlQUFlLENBQUM7OzhDQUNHO0lBNkVoQztRQURDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7eUNBQ2IsVUFBVTs7MkNBRzlCO0lBeEpRLFFBQVE7UUF0RHBCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSx3bkJBaUJiO3FCQUNZLDQzQkFnQ1o7U0FDQSxDQUFDO3lDQTJFZ0MsVUFBVTtPQTFFL0IsUUFBUSxDQXlKcEI7SUFBRCxlQUFDO0NBQUEsQUF6SkQsSUF5SkM7U0F6SlksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSG9zdEJpbmRpbmcgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlLCBJRHluYW1pY0NsYXNzZXMgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uQ29udHJvbGxlciwgVHJhbnNpdGlvbkRpcmVjdGlvbiwgVHJhbnNpdGlvbiB9IGZyb20gXCIuLi8uLi90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBJUG9wdXAgfSBmcm9tIFwiLi4vY2xhc3Nlcy9wb3B1cC1jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBUZW1wbGF0ZVBvcHVwQ29uZmlnIH0gZnJvbSBcIi4uL2NsYXNzZXMvcG9wdXAtdGVtcGxhdGUtY29udHJvbGxlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktcG9wdXBcIixcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cInVpIHBvcHVwXCJcbiAgICAgW25nQ2xhc3NdPVwiZHluYW1pY0NsYXNzZXNcIlxuICAgICBbc3VpVHJhbnNpdGlvbl09XCJ0cmFuc2l0aW9uQ29udHJvbGxlclwiXG4gICAgIFthdHRyLmRpcmVjdGlvbl09XCJkaXJlY3Rpb25cIlxuICAgICAjY29udGFpbmVyPlxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjb25maWcudGVtcGxhdGUgJiYgKCEhY29uZmlnLmhlYWRlciB8fCAhIWNvbmZpZy50ZXh0KVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCIgKm5nSWY9XCJjb25maWcuaGVhZGVyXCI+e3sgY29uZmlnLmhlYWRlciB9fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPnt7IGNvbmZpZy50ZXh0IH19PC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPGRpdiAjdGVtcGxhdGVTaWJsaW5nPjwvZGl2PlxuXG4gICAgPHN1aS1wb3B1cC1hcnJvdyAqbmdJZj1cIiFjb25maWcuaXNCYXNpY1wiXG4gICAgICAgICAgICAgICAgICAgICBbcGxhY2VtZW50XT1cImNvbmZpZy5wbGFjZW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgW2ludmVydGVkXT1cImNvbmZpZy5pc0ludmVydGVkXCI+PC9zdWktcG9wdXAtYXJyb3c+XG48L2Rpdj5cbmAsXG4gICAgc3R5bGVzOiBbYFxuLnVpLnBvcHVwIHtcbiAgICAvKiBBdXRvZml0IHBvcHVwIHRvIHRoZSBjb250ZW50cy4gKi9cbiAgICByaWdodDogYXV0bztcbiAgICBtYXJnaW46IDA7XG59XG5cbi51aS5hbmltYXRpbmcucG9wdXAge1xuICAgIC8qIFdoZW4gdGhlIHBvcHVwIGlzIGFuaW1hdGluZywgaXQgbWF5IG5vdCBpbml0aWFsbHkgYmUgaW4gdGhlIGNvcnJlY3QgcG9zaXRpb24uXG4gICAgICAgVGhpcyBmaXJlcyBhIG1vdXNlIGV2ZW50LCBjYXVzaW5nIHRoZSBhbmNob3IncyBtb3VzZWxlYXZlIHRvIGZpcmUgLSBtYWtpbmcgdGhlIHBvcHVwIGZsaWNrZXIuXG4gICAgICAgU2V0dGluZyBwb2ludGVyLWV2ZW50cyB0byBub25lIHdoaWxlIGFuaW1hdGluZyBmaXhlcyB0aGlzIGJ1Zy4gKi9cbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnVpLnBvcHVwOjpiZWZvcmUge1xuICAgIC8qIEhpZGUgdGhlIFNlbWFudGljIFVJIENTUyBhcnJvdy4gKi9cbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBPZmZzZXQgcG9wdXAgYnkgMC43NWVtIGFib3ZlIGFuZCBiZWxvdyB3aGVuIHBsYWNlZCAndmVydGljYWxseScuICovXG4udWkucG9wdXBbZGlyZWN0aW9uPVwidG9wXCJdLFxuLnVpLnBvcHVwW2RpcmVjdGlvbj1cImJvdHRvbVwiXSB7XG4gICAgbWFyZ2luLXRvcDogMC43NWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNzVlbTtcbn1cblxuLyogT2Zmc2V0IHBvcHVwIGJ5IDAuNzVlbSBlaXRoZXIgc2lkZSB3aGVuIHBsYWNlZCAnaG9yaXpvbnRhbGx5Jy4gKi9cbi51aS5wb3B1cFtkaXJlY3Rpb249XCJsZWZ0XCJdLFxuLnVpLnBvcHVwW2RpcmVjdGlvbj1cInJpZ2h0XCJdIHtcbiAgICBtYXJnaW4tbGVmdDogMC43NWVtO1xuICAgIG1hcmdpbi1yaWdodDogMC43NWVtO1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpUG9wdXAgaW1wbGVtZW50cyBJUG9wdXAge1xuICAgIC8vIENvbmZpZyBzZXR0aW5ncyBmb3IgdGhpcyBwb3B1cC5cbiAgICBwdWJsaWMgY29uZmlnOlRlbXBsYXRlUG9wdXBDb25maWc8YW55PjtcblxuICAgIHB1YmxpYyB0cmFuc2l0aW9uQ29udHJvbGxlcjpUcmFuc2l0aW9uQ29udHJvbGxlcjtcbiAgICBwdWJsaWMgcG9zaXRpb25pbmdTZXJ2aWNlOlBvc2l0aW9uaW5nU2VydmljZTtcbiAgICBwcml2YXRlIF9hbmNob3I6RWxlbWVudFJlZjtcblxuICAgIC8vIEtlZXBzIHRyYWNrIG9mIHdoZXRoZXIgdGhlIHBvcHVwIGlzIG9wZW4gaW50ZXJuYWxseS5cbiAgICBwcml2YXRlIF9pc09wZW46Ym9vbGVhbjtcbiAgICAvLyBgc2V0VGltZW91dGAgdGltZXIgcG9pbnRlciBmb3IgY2FuY2VsbGluZyBwb3B1cCBjbG9zZS5cbiAgICBwdWJsaWMgY2xvc2luZ1RpbWVvdXQ6bnVtYmVyO1xuXG4gICAgLy8gRmlyZXMgd2hlbiB0aGUgcG9wdXAgb3BlbnMgKGFuZCB0aGUgYW5pbWF0aW9uIGlzIGNvbXBsZXRlZCkuXG4gICAgcHVibGljIG9uT3BlbjpFdmVudEVtaXR0ZXI8dm9pZD47XG4gICAgLy8gRmlyZXMgd2hlbiB0aGUgcG9wdXAgY2xvc2VzIChhbmQgdGhlIGFuaW1hdGlvbiBpcyBjb21wbGV0ZWQpLlxuICAgIHB1YmxpYyBvbkNsb3NlOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIHB1YmxpYyBnZXQgaXNPcGVuKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc09wZW47XG4gICAgfVxuXG4gICAgLy8gYEVsZW1lbnRSZWZgIGZvciB0aGUgcG9zaXRpb25pbmcgc3ViamVjdC5cbiAgICBAVmlld0NoaWxkKFwiY29udGFpbmVyXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJpdmF0ZSBfY29udGFpbmVyOlZpZXdDb250YWluZXJSZWY7XG5cbiAgICBwdWJsaWMgc2V0IGFuY2hvcihhbmNob3I6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLl9hbmNob3IgPSBhbmNob3I7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJucyB0aGUgZGlyZWN0aW9uIChgdG9wYCwgYGxlZnRgLCBgcmlnaHRgLCBgYm90dG9tYCkgb2YgdGhlIGN1cnJlbnQgcGxhY2VtZW50LlxuICAgIHB1YmxpYyBnZXQgZGlyZWN0aW9uKCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgLy8gV2UgbmVlZCB0byBzZXQgZGlyZWN0aW9uIGF0dHJpYnV0ZSBiZWZvcmUgcG9wcGVyIGluaXQgdG8gYWxsb3cgY29ycmVjdCBwb3NpdGlvbmluZ1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcucGxhY2VtZW50LnNwbGl0KFwiIFwiKS5zaGlmdCgpO1xuICAgIH1cblxuICAgIC8vIFJldHVybnMgdGhlIGFsaWdubWVudCAoYHRvcGAsIGBsZWZ0YCwgYHJpZ2h0YCwgYGJvdHRvbWApIG9mIHRoZSBjdXJyZW50IHBsYWNlbWVudC5cbiAgICBwdWJsaWMgZ2V0IGFsaWdubWVudCgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5wbGFjZW1lbnQuc3BsaXQoXCIgXCIpLnBvcCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZHluYW1pY0NsYXNzZXMoKTpJRHluYW1pY0NsYXNzZXMge1xuICAgICAgICBjb25zdCBjbGFzc2VzOklEeW5hbWljQ2xhc3NlcyA9IHt9O1xuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNsYXNzZXNbdGhpcy5kaXJlY3Rpb25dID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hbGlnbm1lbnQpIHtcbiAgICAgICAgICAgIGNsYXNzZXNbdGhpcy5hbGlnbm1lbnRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jb25maWcuaXNJbnZlcnRlZCkge1xuICAgICAgICAgICAgY2xhc3Nlcy5pbnZlcnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmlzQmFzaWMpIHtcbiAgICAgICAgICAgIGNsYXNzZXMuYmFzaWMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5pc0Zsb3dpbmcpIHtcbiAgICAgICAgICAgIGNsYXNzZXMuZmxvd2luZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnNpemUpIHtcbiAgICAgICAgICAgIGNsYXNzZXNbdGhpcy5jb25maWcuc2l6ZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy53aWR0aCkge1xuICAgICAgICAgICAgY2xhc3Nlc1t0aGlzLmNvbmZpZy53aWR0aF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGFzc2VzO1xuICAgIH1cblxuICAgIC8vIGBWaWV3Q29udGFpbmVyUmVmYCBmb3IgdGhlIGVsZW1lbnQgdGhlIHRlbXBsYXRlIGdldHMgaW5qZWN0ZWQgYXMgYSBzaWJsaW5nIG9mLlxuICAgIEBWaWV3Q2hpbGQoXCJ0ZW1wbGF0ZVNpYmxpbmdcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgdGVtcGxhdGVTaWJsaW5nOlZpZXdDb250YWluZXJSZWY7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJhdHRyLnRhYmluZGV4XCIpXG4gICAgcHVibGljIHJlYWRvbmx5IHRhYmluZGV4Om51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOkVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlciA9IG5ldyBUcmFuc2l0aW9uQ29udHJvbGxlcihmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5vbk9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gICAgICAgIHRoaXMub25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLnRhYmluZGV4ID0gMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbigpOnZvaWQge1xuICAgICAgICAvLyBPbmx5IGF0dGVtcHQgdG8gb3BlbiBpZiBjdXJyZW50bHkgY2xvc2VkLlxuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICAvLyBDYW5jZWwgdGhlIGNsb3NpbmcgdGltZXIuXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5jbG9zaW5nVGltZW91dCk7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBwb3NpdGlvbmluZyBzZXJ2aWNlIGFmdGVyIGEgYnJpZWYgZGVsYXkuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uaW5nU2VydmljZSA9IG5ldyBQb3NpdGlvbmluZ1NlcnZpY2UoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FuY2hvcixcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29udGFpbmVyLmVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnBsYWNlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgXCIuZHluYW1pYy5hcnJvd1wiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uaW5nU2VydmljZS5oYXNBcnJvdyA9ICF0aGlzLmNvbmZpZy5pc0Jhc2ljO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIENhbmNlbCBhbGwgb3RoZXIgdHJhbnNpdGlvbnMsIGFuZCBpbml0aWF0ZSB0aGUgb3BlbmluZyB0cmFuc2l0aW9uLlxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlci5zdG9wQWxsKCk7XG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAgbmV3IFRyYW5zaXRpb24odGhpcy5jb25maWcudHJhbnNpdGlvbiwgdGhpcy5jb25maWcudHJhbnNpdGlvbkR1cmF0aW9uLCBUcmFuc2l0aW9uRGlyZWN0aW9uLkluLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZvY3VzIGFueSBlbGVtZW50IHdpdGggW2F1dG9mb2N1c10gYXR0cmlidXRlLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdXRvRm9jdXMgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiW2F1dG9mb2N1c11cIikgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXV0b0ZvY3VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBdXRvZm9jdXMgYWZ0ZXIgdGhlIGJyb3dzZXIgaGFzIGhhZCB0aW1lIHRvIHByb2Nlc3Mgb3RoZXIgZXZlbnQgaGFuZGxlcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGF1dG9Gb2N1cy5mb2N1cygpLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUcnkgdG8gZm9jdXMgYWdhaW4gd2hlbiB0aGUgbW9kYWwgaGFzIG9wZW5lZCBzbyB0aGF0IGF1dG9mb2N1cyB3b3JrcyBpbiBJRTExLlxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBhdXRvRm9jdXMuZm9jdXMoKSwgdGhpcy5jb25maWcudHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgLy8gRmluYWxseSwgc2V0IHRoZSBwb3B1cCB0byBiZSBvcGVuLlxuICAgICAgICAgICAgdGhpcy5faXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMub25PcGVuLmVtaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGUoKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3BlbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2UoKTp2b2lkIHtcbiAgICAgICAgLy8gT25seSBhdHRlbXB0IHRvIGNsb3NlIGlmIGN1cnJlbnRseSBvcGVuLlxuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIC8vIENhbmNlbCBhbGwgb3RoZXIgdHJhbnNpdGlvbnMsIGFuZCBpbml0aWF0ZSB0aGUgY2xvc2luZyB0cmFuc2l0aW9uLlxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlci5zdG9wQWxsKCk7XG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAgbmV3IFRyYW5zaXRpb24odGhpcy5jb25maWcudHJhbnNpdGlvbiwgdGhpcy5jb25maWcudHJhbnNpdGlvbkR1cmF0aW9uLCBUcmFuc2l0aW9uRGlyZWN0aW9uLk91dCkpO1xuXG4gICAgICAgICAgICAvLyBDYW5jZWwgdGhlIGNsb3NpbmcgdGltZXIuXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5jbG9zaW5nVGltZW91dCk7XG4gICAgICAgICAgICAvLyBTdGFydCB0aGUgY2xvc2luZyB0aW1lciwgdGhhdCBmaXJlcyB0aGUgYG9uQ2xvc2VgIGV2ZW50IGFmdGVyIHRoZSB0cmFuc2l0aW9uIGR1cmF0aW9uIG51bWJlciBvZiBtaWxsaXNlY29uZHMuXG4gICAgICAgICAgICB0aGlzLmNsb3NpbmdUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5vbkNsb3NlLmVtaXQoKSwgdGhpcy5jb25maWcudHJhbnNpdGlvbkR1cmF0aW9uKTtcblxuICAgICAgICAgICAgLy8gRmluYWxseSwgc2V0IHRoZSBwb3B1cCB0byBiZSBjbG9zZWQuXG4gICAgICAgICAgICB0aGlzLl9pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uQ2xpY2soZXZlbnQ6TW91c2VFdmVudCk6dm9pZCB7XG4gICAgICAgIC8vIE1ha2VzIHNlbnNlIGhlcmUsIGFzIHRoZSBwb3B1cCBzaG91bGRuJ3QgYmUgYXR0YWNoZWQgdG8gYW55IERPTSBlbGVtZW50LlxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG59XG4iXX0=