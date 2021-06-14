import { __decorate, __metadata } from "tslib";
import { Component, Input, HostBinding, HostListener, EventEmitter, ViewContainerRef, ViewChild, Renderer2, ElementRef, Output, ChangeDetectorRef } from "@angular/core";
import { SuiDropdownMenuItem } from "../../dropdown/internal";
import { HandledEvent } from "../../../misc/util/internal";
let SuiSelectOption = class SuiSelectOption extends SuiDropdownMenuItem {
    constructor(renderer, element, changeDetector) {
        // We inherit SuiDropdownMenuItem to automatically gain all keyboard navigation functionality.
        // This is not done via adding the .item class because it isn't supported by Angular.
        super(renderer, element);
        this.changeDetector = changeDetector;
        this.hasClasses = true;
        this.isActive = false;
        this.onSelected = new EventEmitter();
        // By default we make the default text an empty label, for the brief moment when it isn't displaying the correct one.
        this.renderedText = "";
        this.usesTemplate = false;
    }
    set formatter(formatter) {
        if (!this.usesTemplate) {
            this.renderedText = formatter(this.value);
        }
        else {
            this.renderedText = "";
        }
    }
    onClick(e) {
        e.eventHandled = true;
        setTimeout(() => this.onSelected.emit(this.value));
    }
};
SuiSelectOption.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
__decorate([
    HostBinding("class.item"),
    __metadata("design:type", Boolean)
], SuiSelectOption.prototype, "hasClasses", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SuiSelectOption.prototype, "value", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], SuiSelectOption.prototype, "onSelected", void 0);
__decorate([
    HostBinding("class.active"),
    __metadata("design:type", Boolean)
], SuiSelectOption.prototype, "isActive", void 0);
__decorate([
    ViewChild("templateSibling", { read: ViewContainerRef, static: true }),
    __metadata("design:type", ViewContainerRef)
], SuiSelectOption.prototype, "templateSibling", void 0);
__decorate([
    HostListener("click", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HandledEvent]),
    __metadata("design:returntype", void 0)
], SuiSelectOption.prototype, "onClick", null);
SuiSelectOption = __decorate([
    Component({
        selector: "sui-select-option",
        template: `
<span #templateSibling></span>
<span [innerHTML]="renderedText"></span>
`
    }),
    __metadata("design:paramtypes", [Renderer2, ElementRef, ChangeDetectorRef])
], SuiSelectOption);
export { SuiSelectOption };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvc2VsZWN0L2NvbXBvbmVudHMvc2VsZWN0LW9wdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQzNFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFDOUQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBUzNELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQW1CLFNBQVEsbUJBQW1CO0lBK0J2RCxZQUFZLFFBQWtCLEVBQUUsT0FBa0IsRUFBUyxjQUFnQztRQUN2Riw4RkFBOEY7UUFDOUYscUZBQXFGO1FBQ3JGLEtBQUssQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFIOEIsbUJBQWMsR0FBZCxjQUFjLENBQWtCO1FBS3ZGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUssQ0FBQztRQUV4QyxxSEFBcUg7UUFDckgsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFFdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQTNCRCxJQUFXLFNBQVMsQ0FBQyxTQUEyQjtRQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNILElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQXdCTSxPQUFPLENBQUMsQ0FBYztRQUN6QixDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUV0QixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztDQUNKLENBQUE7O1lBckJ3QixTQUFTO1lBQVUsVUFBVTtZQUF3QixpQkFBaUI7O0FBNUIzRjtJQURDLFdBQVcsQ0FBQyxZQUFZLENBQUM7O21EQUNTO0FBR25DO0lBREMsS0FBSyxFQUFFOzs4Q0FDTztBQUlmO0lBREMsTUFBTSxFQUFFOzhCQUNTLFlBQVk7bURBQUk7QUFHbEM7SUFEQyxXQUFXLENBQUMsY0FBYyxDQUFDOztpREFDSjtBQWdCeEI7SUFEQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOzhCQUNoRCxnQkFBZ0I7d0RBQUM7QUFrQnhDO0lBREMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztxQ0FDakIsWUFBWTs7OENBSTVCO0FBbkRRLGVBQWU7SUFQM0IsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixRQUFRLEVBQUU7OztDQUdiO0tBQ0EsQ0FBQztxQ0FnQ3VCLFNBQVMsRUFBVSxVQUFVLEVBQXdCLGlCQUFpQjtHQS9CbEYsZUFBZSxDQW9EM0I7U0FwRFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgRXZlbnRFbWl0dGVyLCBWaWV3Q29udGFpbmVyUmVmLFxuICAgIFZpZXdDaGlsZCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBPdXRwdXQsIENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlEcm9wZG93bk1lbnVJdGVtIH0gZnJvbSBcIi4uLy4uL2Ryb3Bkb3duL2ludGVybmFsXCI7XG5pbXBvcnQgeyBIYW5kbGVkRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1zZWxlY3Qtb3B0aW9uXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxzcGFuICN0ZW1wbGF0ZVNpYmxpbmc+PC9zcGFuPlxuPHNwYW4gW2lubmVySFRNTF09XCJyZW5kZXJlZFRleHRcIj48L3NwYW4+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aVNlbGVjdE9wdGlvbjxUPiBleHRlbmRzIFN1aURyb3Bkb3duTWVudUl0ZW0ge1xuICAgIC8vIFNldHMgdGhlIFNlbWFudGljIFVJIGNsYXNzZXMgb24gdGhlIGhvc3QgZWxlbWVudC5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5pdGVtXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHZhbHVlOlQ7XG5cbiAgICAvLyBGaXJlcyB3aGVuIHRoZSBvcHRpb24gaXMgc2VsZWN0ZWQsIHdoZXRoZXIgYnkgY2xpY2tpbmcgb3IgYnkga2V5Ym9hcmQuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uU2VsZWN0ZWQ6RXZlbnRFbWl0dGVyPFQ+O1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYWN0aXZlXCIpXG4gICAgcHVibGljIGlzQWN0aXZlOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgcmVuZGVyZWRUZXh0PzpzdHJpbmc7XG5cbiAgICBwdWJsaWMgc2V0IGZvcm1hdHRlcihmb3JtYXR0ZXI6KG9iajpUKSA9PiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLnVzZXNUZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZFRleHQgPSBmb3JtYXR0ZXIodGhpcy52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkVGV4dCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdXNlc1RlbXBsYXRlOmJvb2xlYW47XG5cbiAgICAvLyBQbGFjZWhvbGRlciB0byBkcmF3IHRlbXBsYXRlIGJlc2lkZS5cbiAgICBAVmlld0NoaWxkKFwidGVtcGxhdGVTaWJsaW5nXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIHRlbXBsYXRlU2libGluZzpWaWV3Q29udGFpbmVyUmVmO1xuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyLCBlbGVtZW50OkVsZW1lbnRSZWYsIHB1YmxpYyBjaGFuZ2VEZXRlY3RvcjpDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICAvLyBXZSBpbmhlcml0IFN1aURyb3Bkb3duTWVudUl0ZW0gdG8gYXV0b21hdGljYWxseSBnYWluIGFsbCBrZXlib2FyZCBuYXZpZ2F0aW9uIGZ1bmN0aW9uYWxpdHkuXG4gICAgICAgIC8vIFRoaXMgaXMgbm90IGRvbmUgdmlhIGFkZGluZyB0aGUgLml0ZW0gY2xhc3MgYmVjYXVzZSBpdCBpc24ndCBzdXBwb3J0ZWQgYnkgQW5ndWxhci5cbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIGVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vblNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuXG4gICAgICAgIC8vIEJ5IGRlZmF1bHQgd2UgbWFrZSB0aGUgZGVmYXVsdCB0ZXh0IGFuIGVtcHR5IGxhYmVsLCBmb3IgdGhlIGJyaWVmIG1vbWVudCB3aGVuIGl0IGlzbid0IGRpc3BsYXlpbmcgdGhlIGNvcnJlY3Qgb25lLlxuICAgICAgICB0aGlzLnJlbmRlcmVkVGV4dCA9IFwiXCI7XG5cbiAgICAgICAgdGhpcy51c2VzVGVtcGxhdGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkNsaWNrKGU6SGFuZGxlZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgZS5ldmVudEhhbmRsZWQgPSB0cnVlO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5vblNlbGVjdGVkLmVtaXQodGhpcy52YWx1ZSkpO1xuICAgIH1cbn1cbiJdfQ==