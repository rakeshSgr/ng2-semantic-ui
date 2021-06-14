import { __decorate, __metadata } from "tslib";
import { Component, ViewChild, ViewContainerRef, HostBinding, Input, TemplateRef } from "@angular/core";
import { ITemplateRefContext, SuiComponentFactory } from "../../../misc/util/internal";
// See https://github.com/Microsoft/TypeScript/issues/13449.
const templateRef = TemplateRef;
let SuiSearchResult = class SuiSearchResult {
    constructor(componentFactory) {
        this.componentFactory = componentFactory;
        this.hasClasses = true;
        // By default we make this function return an empty string, for the brief moment when it isn't displaying the correct label.
        this.formatter = value => "";
    }
    get template() {
        return this._template;
    }
    set template(template) {
        this._template = template;
        if (this.template) {
            this.componentFactory.createView(this.templateSibling, this.template, {
                $implicit: this.value,
                query: this.query
            });
        }
    }
};
SuiSearchResult.ctorParameters = () => [
    { type: SuiComponentFactory }
];
__decorate([
    HostBinding("class.result"),
    __metadata("design:type", Boolean)
], SuiSearchResult.prototype, "hasClasses", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SuiSearchResult.prototype, "value", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SuiSearchResult.prototype, "query", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], SuiSearchResult.prototype, "formatter", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef),
    __metadata("design:paramtypes", [TemplateRef])
], SuiSearchResult.prototype, "template", null);
__decorate([
    ViewChild("templateSibling", { read: ViewContainerRef, static: true }),
    __metadata("design:type", ViewContainerRef)
], SuiSearchResult.prototype, "templateSibling", void 0);
SuiSearchResult = __decorate([
    Component({
        selector: "sui-search-result",
        template: `
<span #templateSibling></span>
<span *ngIf="!template" [innerHTML]="formatter(value, query)"></span>
`
    }),
    __metadata("design:paramtypes", [SuiComponentFactory])
], SuiSearchResult);
export { SuiSearchResult };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvc2VhcmNoL2NvbXBvbmVudHMvc2VhcmNoLXJlc3VsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILFNBQVMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQXlCLFdBQVcsRUFDMUUsS0FBSyxFQUFFLFdBQVcsRUFDckIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFHdkYsNERBQTREO0FBQzVELE1BQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQztBQVNoQyxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBb0N4QixZQUFtQixnQkFBb0M7UUFBcEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFvQjtRQUNuRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUV2Qiw0SEFBNEg7UUFDNUgsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBdkJELElBQVcsUUFBUTtRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBVyxRQUFRLENBQUMsUUFBbUQ7UUFDbkUsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xFLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDckIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2FBQ3BCLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztDQVlKLENBQUE7O1lBTnVDLG1CQUFtQjs7QUFqQ3ZEO0lBREMsV0FBVyxDQUFDLGNBQWMsQ0FBQzs7bURBQ087QUFHbkM7SUFEQyxLQUFLLEVBQUU7OzhDQUNPO0FBR2Y7SUFEQyxLQUFLLEVBQUU7OzhDQUNZO0FBSXBCO0lBREMsS0FBSyxFQUFFOztrREFDeUM7QUFLakQ7SUFEQyxLQUFLLEVBQUU7OEJBS3FCLFdBQVc7cUNBQVgsV0FBVzsrQ0FGdkM7QUFjRDtJQURDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7OEJBQ2hELGdCQUFnQjt3REFBQztBQWxDL0IsZUFBZTtJQVAzQixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLFFBQVEsRUFBRTs7O0NBR2I7S0FDQSxDQUFDO3FDQXFDc0MsbUJBQW1CO0dBcEM5QyxlQUFlLENBMEMzQjtTQTFDWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZyxcbiAgICBJbnB1dCwgVGVtcGxhdGVSZWZcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElUZW1wbGF0ZVJlZkNvbnRleHQsIFN1aUNvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBJUmVzdWx0Q29udGV4dCB9IGZyb20gXCIuL3NlYXJjaFwiO1xuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8xMzQ0OS5cbmNvbnN0IHRlbXBsYXRlUmVmID0gVGVtcGxhdGVSZWY7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1zZWFyY2gtcmVzdWx0XCIsXG4gICAgdGVtcGxhdGU6IGBcbjxzcGFuICN0ZW1wbGF0ZVNpYmxpbmc+PC9zcGFuPlxuPHNwYW4gKm5nSWY9XCIhdGVtcGxhdGVcIiBbaW5uZXJIVE1MXT1cImZvcm1hdHRlcih2YWx1ZSwgcXVlcnkpXCI+PC9zcGFuPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBTdWlTZWFyY2hSZXN1bHQ8VD4ge1xuICAgIC8vIFNldHMgdGhlIFNlbWFudGljIFVJIGNsYXNzZXMgb24gdGhlIGhvc3QgZWxlbWVudC5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5yZXN1bHRcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdmFsdWU6VDtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHF1ZXJ5OnN0cmluZztcblxuICAgIC8vIFJldHVybnMgdGhlIGxhYmVsIGZyb20gYSBnaXZlbiB2YWx1ZS5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBmb3JtYXR0ZXI6KG9iajpULCBxdWVyeTpzdHJpbmcpID0+IHN0cmluZztcblxuICAgIHByaXZhdGUgX3RlbXBsYXRlPzpUZW1wbGF0ZVJlZjxJUmVzdWx0Q29udGV4dDxUPj47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgdGVtcGxhdGUoKTpUZW1wbGF0ZVJlZjxJUmVzdWx0Q29udGV4dDxUPj4gfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCB0ZW1wbGF0ZSh0ZW1wbGF0ZTpUZW1wbGF0ZVJlZjxJUmVzdWx0Q29udGV4dDxUPj4gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgaWYgKHRoaXMudGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50RmFjdG9yeS5jcmVhdGVWaWV3KHRoaXMudGVtcGxhdGVTaWJsaW5nLCB0aGlzLnRlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgJGltcGxpY2l0OiB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFBsYWNlaG9sZGVyIHRvIGRyYXcgdGVtcGxhdGUgYmVzaWRlLlxuICAgIEBWaWV3Q2hpbGQoXCJ0ZW1wbGF0ZVNpYmxpbmdcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgdGVtcGxhdGVTaWJsaW5nOlZpZXdDb250YWluZXJSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29tcG9uZW50RmFjdG9yeTpTdWlDb21wb25lbnRGYWN0b3J5KSB7XG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG5cbiAgICAgICAgLy8gQnkgZGVmYXVsdCB3ZSBtYWtlIHRoaXMgZnVuY3Rpb24gcmV0dXJuIGFuIGVtcHR5IHN0cmluZywgZm9yIHRoZSBicmllZiBtb21lbnQgd2hlbiBpdCBpc24ndCBkaXNwbGF5aW5nIHRoZSBjb3JyZWN0IGxhYmVsLlxuICAgICAgICB0aGlzLmZvcm1hdHRlciA9IHZhbHVlID0+IFwiXCI7XG4gICAgfVxufVxuIl19