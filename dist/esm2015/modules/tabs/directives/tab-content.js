import { __decorate, __metadata } from "tslib";
import { HostBinding, Directive, Input } from "@angular/core";
let SuiTabContent = class SuiTabContent {
    constructor() {
        this.isActive = false;
        this.hasClasses = true;
    }
};
__decorate([
    HostBinding("class.tab"),
    __metadata("design:type", Boolean)
], SuiTabContent.prototype, "hasClasses", void 0);
__decorate([
    Input("suiTabContent"),
    __metadata("design:type", String)
], SuiTabContent.prototype, "id", void 0);
__decorate([
    HostBinding("class.active"),
    __metadata("design:type", Boolean)
], SuiTabContent.prototype, "isActive", void 0);
SuiTabContent = __decorate([
    Directive({
        selector: "[suiTabContent]"
    }),
    __metadata("design:paramtypes", [])
], SuiTabContent);
export { SuiTabContent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWNvbnRlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL3RhYnMvZGlyZWN0aXZlcy90YWItY29udGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzlELElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFVdEI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUV0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0NBQ0osQ0FBQTtBQWJHO0lBREMsV0FBVyxDQUFDLFdBQVcsQ0FBQzs7aURBQ1U7QUFHbkM7SUFEQyxLQUFLLENBQUMsZUFBZSxDQUFDOzt5Q0FDTjtBQUdqQjtJQURDLFdBQVcsQ0FBQyxjQUFjLENBQUM7OytDQUNKO0FBUmYsYUFBYTtJQUh6QixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsaUJBQWlCO0tBQzlCLENBQUM7O0dBQ1csYUFBYSxDQWV6QjtTQWZZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIb3N0QmluZGluZywgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzdWlUYWJDb250ZW50XVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aVRhYkNvbnRlbnQge1xuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnRhYlwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoXCJzdWlUYWJDb250ZW50XCIpXG4gICAgcHVibGljIGlkOnN0cmluZztcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjdGl2ZVwiKVxuICAgIHB1YmxpYyBpc0FjdGl2ZTpib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cbn1cbiJdfQ==