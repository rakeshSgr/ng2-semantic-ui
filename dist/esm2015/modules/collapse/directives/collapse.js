import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, Input, HostBinding, Renderer2 } from "@angular/core";
let SuiCollapse = class SuiCollapse {
    constructor(_element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this._pristine = true;
        // Collapse animation duration is 350ms by default.
        this.collapseDuration = 350;
        this._isExpanded = false;
        this._isCollapsing = false;
    }
    // Set when the collapse is open, and not animating.
    get isExpanded() {
        return this._isExpanded;
    }
    // Set when the collapse is closed, and not animating.
    get isCollapsed() {
        return !this.isExpanded && !this.isCollapsing;
    }
    // Set when the collapse is animating.
    get isCollapsing() {
        return this._isCollapsing;
    }
    get suiCollapse() {
        return this._isExpanded;
    }
    // Sets the state of the collapse, `true` is collapsed.
    set suiCollapse(value) {
        if (value) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    get _animationDuration() {
        return this._pristine ? 0 : this.collapseDuration;
    }
    hide() {
        this._isCollapsing = true;
        this._isExpanded = false;
        // Forcibly hide the overflow so that content is not visible past the boundaries of its container.
        this._renderer.setStyle(this._element.nativeElement, "overflow", "hidden");
        // Animate the host element from its scroll height to 0.
        this.animate(this._element.nativeElement.scrollHeight, 0, false, () => {
            this._isCollapsing = false;
        });
    }
    show() {
        this._isCollapsing = true;
        // Animate the host element from its offset height to its scroll height.
        this.animate(this._element.nativeElement.offsetHeight, this._element.nativeElement.scrollHeight, true, () => {
            // Remove the overflow override to enable user styling once again.
            this._renderer.removeStyle(this._element.nativeElement, "overflow");
            this._isCollapsing = false;
            this._isExpanded = true;
        });
    }
    animate(startHeight, endHeight, removeOnComplete = false, callback = () => { }) {
        const heightFrames = [
            {
                offset: 0,
                height: `${startHeight}px`
            },
            {
                offset: 1,
                height: `${endHeight}px`
            }
        ];
        if (removeOnComplete) {
            heightFrames.push({
                offset: 1,
                height: `auto`
            });
        }
        // Animate the collapse using the web animations API.
        // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
        this._element.nativeElement.animate(heightFrames, {
            delay: 0,
            // Disable animation on 1st collapse / expansion.
            duration: this._animationDuration,
            iterations: 1,
            easing: "ease",
            fill: "both"
        });
        if (this._pristine) {
            // Remove pristine flag when first hit.
            this._pristine = false;
        }
        setTimeout(() => callback(), this.collapseDuration);
    }
};
SuiCollapse.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    HostBinding("class.expanded"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], SuiCollapse.prototype, "isExpanded", null);
__decorate([
    HostBinding("class.collapsed"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], SuiCollapse.prototype, "isCollapsed", null);
__decorate([
    HostBinding("class.collapsing"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], SuiCollapse.prototype, "isCollapsing", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SuiCollapse.prototype, "suiCollapse", null);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SuiCollapse.prototype, "collapseDuration", void 0);
SuiCollapse = __decorate([
    Directive({
        selector: "[suiCollapse]"
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer2])
], SuiCollapse);
export { SuiCollapse };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL2NvbGxhcHNlL2RpcmVjdGl2ZXMvY29sbGFwc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBS3JGLElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7SUErQ3BCLFlBQTJCLFFBQW1CLEVBQVUsU0FBbUI7UUFBaEQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDdkUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFdEIsbURBQW1EO1FBQ25ELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUM7UUFFNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQXRERCxvREFBb0Q7SUFFcEQsSUFBVyxVQUFVO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBSUQsc0RBQXNEO0lBRXRELElBQVcsV0FBVztRQUNsQixPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDbEQsQ0FBQztJQUVELHNDQUFzQztJQUV0QyxJQUFXLFlBQVk7UUFDbkIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7SUFRRCxJQUFXLFdBQVc7UUFDbEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFFRCx1REFBdUQ7SUFDdkQsSUFBVyxXQUFXLENBQUMsS0FBYTtRQUNoQyxJQUFJLEtBQUssRUFBRTtZQUNQLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztT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K0NBRy9CO0FBUUQ7SUFEQyxLQUFLLEVBQUU7Ozs4Q0FHUDtBQVlEO0lBREMsS0FBSyxFQUFFOztxREFDdUI7QUF6Q3RCLFdBQVc7SUFIdkIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGVBQWU7S0FDNUIsQ0FBQztxQ0FnRHNDLFVBQVUsRUFBb0IsU0FBUztHQS9DbEUsV0FBVyxDQTJIdkI7U0EzSFksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIEhvc3RCaW5kaW5nLCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpQ29sbGFwc2VdXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpQ29sbGFwc2Uge1xuICAgIC8vIFNldCB3aGVuIHRoZSBjb2xsYXBzZSBpcyBvcGVuLCBhbmQgbm90IGFuaW1hdGluZy5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5leHBhbmRlZFwiKVxuICAgIHB1YmxpYyBnZXQgaXNFeHBhbmRlZCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNFeHBhbmRlZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc0V4cGFuZGVkOmJvb2xlYW47XG5cbiAgICAvLyBTZXQgd2hlbiB0aGUgY29sbGFwc2UgaXMgY2xvc2VkLCBhbmQgbm90IGFuaW1hdGluZy5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5jb2xsYXBzZWRcIilcbiAgICBwdWJsaWMgZ2V0IGlzQ29sbGFwc2VkKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhdGhpcy5pc0V4cGFuZGVkICYmICF0aGlzLmlzQ29sbGFwc2luZztcbiAgICB9XG5cbiAgICAvLyBTZXQgd2hlbiB0aGUgY29sbGFwc2UgaXMgYW5pbWF0aW5nLlxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmNvbGxhcHNpbmdcIilcbiAgICBwdWJsaWMgZ2V0IGlzQ29sbGFwc2luZygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNDb2xsYXBzaW5nO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2lzQ29sbGFwc2luZzpib29sZWFuO1xuXG4gICAgLy8gRmxhZyB0aGF0IGlzIGluaXRpYWxseSB0cnVlLCB0byBtYWtlIHRoZSAxc3QgYW5pbWF0aW9uIGluc3RhbnRhbmVvdXMuXG4gICAgcHJpdmF0ZSBfcHJpc3RpbmU6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBzdWlDb2xsYXBzZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNFeHBhbmRlZDtcbiAgICB9XG5cbiAgICAvLyBTZXRzIHRoZSBzdGF0ZSBvZiB0aGUgY29sbGFwc2UsIGB0cnVlYCBpcyBjb2xsYXBzZWQuXG4gICAgcHVibGljIHNldCBzdWlDb2xsYXBzZSh2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbGxhcHNlRHVyYXRpb246bnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBnZXQgX2FuaW1hdGlvbkR1cmF0aW9uKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByaXN0aW5lID8gMCA6IHRoaXMuY29sbGFwc2VEdXJhdGlvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjpSZW5kZXJlcjIpIHtcbiAgICAgICAgdGhpcy5fcHJpc3RpbmUgPSB0cnVlO1xuXG4gICAgICAgIC8vIENvbGxhcHNlIGFuaW1hdGlvbiBkdXJhdGlvbiBpcyAzNTBtcyBieSBkZWZhdWx0LlxuICAgICAgICB0aGlzLmNvbGxhcHNlRHVyYXRpb24gPSAzNTA7XG5cbiAgICAgICAgdGhpcy5faXNFeHBhbmRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc0NvbGxhcHNpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGlkZSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9pc0NvbGxhcHNpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLl9pc0V4cGFuZGVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gRm9yY2libHkgaGlkZSB0aGUgb3ZlcmZsb3cgc28gdGhhdCBjb250ZW50IGlzIG5vdCB2aXNpYmxlIHBhc3QgdGhlIGJvdW5kYXJpZXMgb2YgaXRzIGNvbnRhaW5lci5cbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCBcIm92ZXJmbG93XCIsIFwiaGlkZGVuXCIpO1xuXG4gICAgICAgIC8vIEFuaW1hdGUgdGhlIGhvc3QgZWxlbWVudCBmcm9tIGl0cyBzY3JvbGwgaGVpZ2h0IHRvIDAuXG4gICAgICAgIHRoaXMuYW5pbWF0ZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0LCAwLCBmYWxzZSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5faXNDb2xsYXBzaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2lzQ29sbGFwc2luZyA9IHRydWU7XG5cbiAgICAgICAgLy8gQW5pbWF0ZSB0aGUgaG9zdCBlbGVtZW50IGZyb20gaXRzIG9mZnNldCBoZWlnaHQgdG8gaXRzIHNjcm9sbCBoZWlnaHQuXG4gICAgICAgIHRoaXMuYW5pbWF0ZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0LCB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0LCB0cnVlLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIG92ZXJmbG93IG92ZXJyaWRlIHRvIGVuYWJsZSB1c2VyIHN0eWxpbmcgb25jZSBhZ2Fpbi5cbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgXCJvdmVyZmxvd1wiKTtcblxuICAgICAgICAgICAgdGhpcy5faXNDb2xsYXBzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9pc0V4cGFuZGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhbmltYXRlKHN0YXJ0SGVpZ2h0Om51bWJlciwgZW5kSGVpZ2h0Om51bWJlciwgcmVtb3ZlT25Db21wbGV0ZTpib29sZWFuID0gZmFsc2UsIGNhbGxiYWNrOigpID0+IHZvaWQgPSAoKSA9PiB7fSk6dm9pZCB7XG4gICAgICAgIGNvbnN0IGhlaWdodEZyYW1lcyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtzdGFydEhlaWdodH1weGBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAxLFxuICAgICAgICAgICAgICAgIGhlaWdodDogYCR7ZW5kSGVpZ2h0fXB4YFxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuXG4gICAgICAgIGlmIChyZW1vdmVPbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICBoZWlnaHRGcmFtZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAxLFxuICAgICAgICAgICAgICAgIGhlaWdodDogYGF1dG9gXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFuaW1hdGUgdGhlIGNvbGxhcHNlIHVzaW5nIHRoZSB3ZWIgYW5pbWF0aW9ucyBBUEkuXG4gICAgICAgIC8vIFVzaW5nIGRpcmVjdGx5IGJlY2F1c2UgUmVuZGVyZXIyIGRvZXNuJ3QgaGF2ZSBpbnZva2VFbGVtZW50TWV0aG9kIG1ldGhvZCBhbnltb3JlLlxuICAgICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZShcbiAgICAgICAgICAgIGhlaWdodEZyYW1lcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgICAgICAvLyBEaXNhYmxlIGFuaW1hdGlvbiBvbiAxc3QgY29sbGFwc2UgLyBleHBhbnNpb24uXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IHRoaXMuX2FuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnM6IDEsXG4gICAgICAgICAgICAgICAgZWFzaW5nOiBcImVhc2VcIixcbiAgICAgICAgICAgICAgICBmaWxsOiBcImJvdGhcIlxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIGlmICh0aGlzLl9wcmlzdGluZSkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIHByaXN0aW5lIGZsYWcgd2hlbiBmaXJzdCBoaXQuXG4gICAgICAgICAgICB0aGlzLl9wcmlzdGluZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjYWxsYmFjaygpLCB0aGlzLmNvbGxhcHNlRHVyYXRpb24pO1xuICAgIH1cbn1cbiJdfQ==