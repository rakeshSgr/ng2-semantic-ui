import { __decorate, __metadata } from "tslib";
import { Component, Input, HostBinding } from "@angular/core";
let SuiProgress = class SuiProgress {
    constructor() {
        this.value = 0;
        this.maximum = 100;
        this.precision = 0;
        this._overrideSuccess = false;
        this.autoSuccess = true;
        this.showProgress = true;
        this.hasClasses = true;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        // Convert value from string to number where necessary.
        const converted = +value;
        if (Number.isNaN(converted)) {
            return;
        }
        this._value = converted;
    }
    get maximum() {
        return this._maximum;
    }
    set maximum(value) {
        // Convert value from string to number where necessary.
        const converted = +value;
        if (Number.isNaN(converted)) {
            return;
        }
        this._maximum = converted;
    }
    get precision() {
        return this._precision;
    }
    set precision(value) {
        // Convert value from string to number where necessary.
        const converted = +value;
        if (Number.isNaN(converted)) {
            return;
        }
        this._precision = Math.min(Math.max(converted, 0), 20);
    }
    get reachedMaximum() {
        return this._overrideSuccess || ((this.value >= this.maximum) && this.autoSuccess);
    }
    get percentage() {
        const boundedValue = Math.min(Math.max(this.value, 0), this.maximum);
        const percentage = (boundedValue / this.maximum) * 100;
        return percentage.toFixed(this.precision);
    }
    set classValue(classes) {
        if (classes.includes("attached") || classes.includes("tiny")) {
            this.showProgress = false;
        }
        if (classes.includes("success")) {
            this._overrideSuccess = true;
        }
    }
};
__decorate([
    HostBinding("class.ui"),
    HostBinding("class.progress"),
    __metadata("design:type", Boolean)
], SuiProgress.prototype, "hasClasses", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SuiProgress.prototype, "autoSuccess", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SuiProgress.prototype, "showProgress", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SuiProgress.prototype, "value", null);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SuiProgress.prototype, "maximum", null);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SuiProgress.prototype, "precision", null);
__decorate([
    HostBinding("class.success"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], SuiProgress.prototype, "reachedMaximum", null);
__decorate([
    HostBinding("attr.data-percent"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], SuiProgress.prototype, "percentage", null);
__decorate([
    Input("class"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SuiProgress.prototype, "classValue", null);
SuiProgress = __decorate([
    Component({
        selector: "sui-progress",
        template: `
<div class="bar" [style.width.%]="percentage">
    <div class="progress" *ngIf="showProgress">{{ percentage }}%</div>
</div>
<div class="label">
    <ng-content></ng-content>
</div>
`,
        styles: [`
.bar {
    transition-duration: 300ms !important;
    z-index: 1;
}
`]
    }),
    __metadata("design:paramtypes", [])
], SuiProgress);
export { SuiProgress };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL3Byb2dyZXNzL2NvbXBvbmVudHMvcHJvZ3Jlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQW1COUQsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztJQXlGcEI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRW5CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFFekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQWpGRCxJQUFXLEtBQUs7UUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQVcsS0FBSyxDQUFDLEtBQVk7UUFDekIsdURBQXVEO1FBQ3ZELE1BQU0sU0FBUyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBRXpCLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN6QixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztJQUM1QixDQUFDO0lBR0QsSUFBVyxPQUFPO1FBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFXLE9BQU8sQ0FBQyxLQUFZO1FBQzNCLHVEQUF1RDtRQUN2RCxNQUFNLFNBQVMsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUV6QixJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDekIsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7SUFDOUIsQ0FBQztJQUdELElBQVcsU0FBUztRQUNoQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQVcsU0FBUyxDQUFDLEtBQVk7UUFDN0IsdURBQXVEO1FBQ3ZELE1BQU0sU0FBUyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBRXpCLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN6QixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUdELElBQVcsY0FBYztRQUNyQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFHRCxJQUFXLFVBQVU7UUFDakIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXJFLE1BQU0sVUFBVSxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUM7UUFFdkQsT0FBTyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBR0QsSUFBVyxVQUFVLENBQUMsT0FBYztRQUNoQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMxRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztTQUM3QjtRQUNELElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1NBQ2hDO0lBQ0wsQ0FBQztDQWFKLENBQUE7QUFqR0c7SUFGQyxXQUFXLENBQUMsVUFBVSxDQUFDO0lBQ3ZCLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQzs7K0NBQ0s7QUFTbkM7SUFEQyxLQUFLLEVBQUU7O2dEQUNtQjtBQUczQjtJQURDLEtBQUssRUFBRTs7aURBQ29CO0FBRzVCO0lBREMsS0FBSyxFQUFFOzs7d0NBR1A7QUFjRDtJQURDLEtBQUssRUFBRTs7OzBDQUdQO0FBY0Q7SUFEQyxLQUFLLEVBQUU7Ozs0Q0FHUDtBQWNEO0lBREMsV0FBVyxDQUFDLGVBQWUsQ0FBQzs7O2lEQUc1QjtBQUdEO0lBREMsV0FBVyxDQUFDLG1CQUFtQixDQUFDOzs7NkNBT2hDO0FBR0Q7SUFEQyxLQUFLLENBQUMsT0FBTyxDQUFDOzs7NkNBUWQ7QUF2RlEsV0FBVztJQWpCdkIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUFFOzs7Ozs7O0NBT2I7aUJBQ1k7Ozs7O0NBS1o7S0FDQSxDQUFDOztHQUNXLFdBQVcsQ0FvR3ZCO1NBcEdZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1wcm9ncmVzc1wiLFxuICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwiYmFyXCIgW3N0eWxlLndpZHRoLiVdPVwicGVyY2VudGFnZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiICpuZ0lmPVwic2hvd1Byb2dyZXNzXCI+e3sgcGVyY2VudGFnZSB9fSU8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImxhYmVsXCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2Bcbi5iYXIge1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogMTtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVByb2dyZXNzIHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnByb2dyZXNzXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIHByaXZhdGUgX3ZhbHVlOm51bWJlcjtcbiAgICBwcml2YXRlIF9tYXhpbXVtOm51bWJlcjtcbiAgICBwcml2YXRlIF9wcmVjaXNpb246bnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBfb3ZlcnJpZGVTdWNjZXNzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBhdXRvU3VjY2Vzczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2hvd1Byb2dyZXNzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgdmFsdWUoKTpudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTpudW1iZXIpIHtcbiAgICAgICAgLy8gQ29udmVydCB2YWx1ZSBmcm9tIHN0cmluZyB0byBudW1iZXIgd2hlcmUgbmVjZXNzYXJ5LlxuICAgICAgICBjb25zdCBjb252ZXJ0ZWQgPSArdmFsdWU7XG5cbiAgICAgICAgaWYgKE51bWJlci5pc05hTihjb252ZXJ0ZWQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl92YWx1ZSA9IGNvbnZlcnRlZDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgbWF4aW11bSgpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhpbXVtO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbWF4aW11bSh2YWx1ZTpudW1iZXIpIHtcbiAgICAgICAgLy8gQ29udmVydCB2YWx1ZSBmcm9tIHN0cmluZyB0byBudW1iZXIgd2hlcmUgbmVjZXNzYXJ5LlxuICAgICAgICBjb25zdCBjb252ZXJ0ZWQgPSArdmFsdWU7XG5cbiAgICAgICAgaWYgKE51bWJlci5pc05hTihjb252ZXJ0ZWQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9tYXhpbXVtID0gY29udmVydGVkO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBwcmVjaXNpb24oKTpudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJlY2lzaW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcHJlY2lzaW9uKHZhbHVlOm51bWJlcikge1xuICAgICAgICAvLyBDb252ZXJ0IHZhbHVlIGZyb20gc3RyaW5nIHRvIG51bWJlciB3aGVyZSBuZWNlc3NhcnkuXG4gICAgICAgIGNvbnN0IGNvbnZlcnRlZCA9ICt2YWx1ZTtcblxuICAgICAgICBpZiAoTnVtYmVyLmlzTmFOKGNvbnZlcnRlZCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3ByZWNpc2lvbiA9IE1hdGgubWluKE1hdGgubWF4KGNvbnZlcnRlZCwgMCksIDIwKTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5zdWNjZXNzXCIpXG4gICAgcHVibGljIGdldCByZWFjaGVkTWF4aW11bSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3ZlcnJpZGVTdWNjZXNzIHx8ICgodGhpcy52YWx1ZSA+PSB0aGlzLm1heGltdW0pICYmIHRoaXMuYXV0b1N1Y2Nlc3MpO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImF0dHIuZGF0YS1wZXJjZW50XCIpXG4gICAgcHVibGljIGdldCBwZXJjZW50YWdlKCk6c3RyaW5nIHtcbiAgICAgICAgY29uc3QgYm91bmRlZFZhbHVlID0gTWF0aC5taW4oTWF0aC5tYXgodGhpcy52YWx1ZSwgMCksIHRoaXMubWF4aW11bSk7XG5cbiAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IChib3VuZGVkVmFsdWUgLyB0aGlzLm1heGltdW0pICogMTAwO1xuXG4gICAgICAgIHJldHVybiBwZXJjZW50YWdlLnRvRml4ZWQodGhpcy5wcmVjaXNpb24pO1xuICAgIH1cblxuICAgIEBJbnB1dChcImNsYXNzXCIpXG4gICAgcHVibGljIHNldCBjbGFzc1ZhbHVlKGNsYXNzZXM6c3RyaW5nKSB7XG4gICAgICAgIGlmIChjbGFzc2VzLmluY2x1ZGVzKFwiYXR0YWNoZWRcIikgfHwgY2xhc3Nlcy5pbmNsdWRlcyhcInRpbnlcIikpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsYXNzZXMuaW5jbHVkZXMoXCJzdWNjZXNzXCIpKSB7XG4gICAgICAgICAgICB0aGlzLl9vdmVycmlkZVN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSAwO1xuICAgICAgICB0aGlzLm1heGltdW0gPSAxMDA7XG4gICAgICAgIHRoaXMucHJlY2lzaW9uID0gMDtcblxuICAgICAgICB0aGlzLl9vdmVycmlkZVN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hdXRvU3VjY2VzcyA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cbn1cbiJdfQ==