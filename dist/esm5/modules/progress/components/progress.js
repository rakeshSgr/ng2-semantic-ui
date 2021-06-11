/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, HostBinding } from "@angular/core";
var SuiProgress = /** @class */ (function () {
    function SuiProgress() {
        this.value = 0;
        this.maximum = 100;
        this.precision = 0;
        this._overrideSuccess = false;
        this.autoSuccess = true;
        this.showProgress = true;
        this.hasClasses = true;
    }
    Object.defineProperty(SuiProgress.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // Convert value from string to number where necessary.
            var /** @type {?} */ converted = +value;
            if (Number.isNaN(converted)) {
                return;
            }
            this._value = converted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiProgress.prototype, "maximum", {
        get: /**
         * @return {?}
         */
        function () {
            return this._maximum;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // Convert value from string to number where necessary.
            var /** @type {?} */ converted = +value;
            if (Number.isNaN(converted)) {
                return;
            }
            this._maximum = converted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiProgress.prototype, "precision", {
        get: /**
         * @return {?}
         */
        function () {
            return this._precision;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // Convert value from string to number where necessary.
            var /** @type {?} */ converted = +value;
            if (Number.isNaN(converted)) {
                return;
            }
            this._precision = Math.min(Math.max(converted, 0), 20);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiProgress.prototype, "reachedMaximum", {
        get: /**
         * @return {?}
         */
        function () {
            return this._overrideSuccess || ((this.value >= this.maximum) && this.autoSuccess);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiProgress.prototype, "percentage", {
        get: /**
         * @return {?}
         */
        function () {
            var /** @type {?} */ boundedValue = Math.min(Math.max(this.value, 0), this.maximum);
            var /** @type {?} */ percentage = (boundedValue / this.maximum) * 100;
            return percentage.toFixed(this.precision);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiProgress.prototype, "classValue", {
        set: /**
         * @param {?} classes
         * @return {?}
         */
        function (classes) {
            if (classes.includes("attached") || classes.includes("tiny")) {
                this.showProgress = false;
            }
            if (classes.includes("success")) {
                this._overrideSuccess = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    SuiProgress.decorators = [
        { type: Component, args: [{
                    selector: "sui-progress",
                    template: "\n<div class=\"bar\" [style.width.%]=\"percentage\">\n    <div class=\"progress\" *ngIf=\"showProgress\">{{ percentage }}%</div>\n</div>\n<div class=\"label\">\n    <ng-content></ng-content>\n</div>\n",
                    styles: ["\n.bar {\n    transition-duration: 300ms !important;\n    z-index: 1;\n}\n"]
                }] }
    ];
    /** @nocollapse */
    SuiProgress.ctorParameters = function () { return []; };
    SuiProgress.propDecorators = {
        hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.progress",] }],
        autoSuccess: [{ type: Input }],
        showProgress: [{ type: Input }],
        value: [{ type: Input }],
        maximum: [{ type: Input }],
        precision: [{ type: Input }],
        reachedMaximum: [{ type: HostBinding, args: ["class.success",] }],
        percentage: [{ type: HostBinding, args: ["attr.data-percent",] }],
        classValue: [{ type: Input, args: ["class",] }]
    };
    return SuiProgress;
}());
export { SuiProgress };
function SuiProgress_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiProgress.prototype.hasClasses;
    /** @type {?} */
    SuiProgress.prototype._value;
    /** @type {?} */
    SuiProgress.prototype._maximum;
    /** @type {?} */
    SuiProgress.prototype._precision;
    /** @type {?} */
    SuiProgress.prototype._overrideSuccess;
    /** @type {?} */
    SuiProgress.prototype.autoSuccess;
    /** @type {?} */
    SuiProgress.prototype.showProgress;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL3Byb2dyZXNzL2NvbXBvbmVudHMvcHJvZ3Jlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUE0RzFEO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUVuQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBRXpCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0tBQzFCO0lBbEZELHNCQUNXLDhCQUFLOzs7O1FBRGhCO1lBRUksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3RCOzs7OztrQkFFZ0IsS0FBWTs7WUFFekIscUJBQU0sU0FBUyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBRXpCLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDekIsT0FBTzthQUNWO1lBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7Ozs7T0FWM0I7SUFhRCxzQkFDVyxnQ0FBTzs7OztRQURsQjtZQUVJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN4Qjs7Ozs7a0JBRWtCLEtBQVk7O1lBRTNCLHFCQUFNLFNBQVMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUV6QixJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ3pCLE9BQU87YUFDVjtZQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDOzs7O09BVjdCO0lBYUQsc0JBQ1csa0NBQVM7Ozs7UUFEcEI7WUFFSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDMUI7Ozs7O2tCQUVvQixLQUFZOztZQUU3QixxQkFBTSxTQUFTLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFFekIsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUN6QixPQUFPO2FBQ1Y7WUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Ozs7T0FWMUQ7SUFhRCxzQkFDVyx1Q0FBYzs7OztRQUR6QjtZQUVJLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdEY7OztPQUFBO0lBRUQsc0JBQ1csbUNBQVU7Ozs7UUFEckI7WUFFSSxxQkFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRXJFLHFCQUFNLFVBQVUsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBRXZELE9BQU8sVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDN0M7OztPQUFBO0lBRUQsc0JBQ1csbUNBQVU7Ozs7O1FBRHJCLFVBQ3NCLE9BQWM7WUFDaEMsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQzFELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2FBQzdCO1lBQ0QsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO2FBQ2hDO1NBQ0o7OztPQUFBOztnQkF4R0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUsME1BT2I7NkJBQ1ksNEVBS1o7aUJBQ0E7Ozs7OzZCQUVJLFdBQVcsU0FBQyxVQUFVLGNBQ3RCLFdBQVcsU0FBQyxnQkFBZ0I7OEJBUzVCLEtBQUs7K0JBR0wsS0FBSzt3QkFHTCxLQUFLOzBCQWdCTCxLQUFLOzRCQWdCTCxLQUFLO2lDQWdCTCxXQUFXLFNBQUMsZUFBZTs2QkFLM0IsV0FBVyxTQUFDLG1CQUFtQjs2QkFTL0IsS0FBSyxTQUFDLE9BQU87O3NCQWxHbEI7O1NBbUJhLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1wcm9ncmVzc1wiLFxuICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwiYmFyXCIgW3N0eWxlLndpZHRoLiVdPVwicGVyY2VudGFnZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiICpuZ0lmPVwic2hvd1Byb2dyZXNzXCI+e3sgcGVyY2VudGFnZSB9fSU8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImxhYmVsXCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2Bcbi5iYXIge1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogMTtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVByb2dyZXNzIHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnByb2dyZXNzXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIHByaXZhdGUgX3ZhbHVlOm51bWJlcjtcbiAgICBwcml2YXRlIF9tYXhpbXVtOm51bWJlcjtcbiAgICBwcml2YXRlIF9wcmVjaXNpb246bnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBfb3ZlcnJpZGVTdWNjZXNzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBhdXRvU3VjY2Vzczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2hvd1Byb2dyZXNzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgdmFsdWUoKTpudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTpudW1iZXIpIHtcbiAgICAgICAgLy8gQ29udmVydCB2YWx1ZSBmcm9tIHN0cmluZyB0byBudW1iZXIgd2hlcmUgbmVjZXNzYXJ5LlxuICAgICAgICBjb25zdCBjb252ZXJ0ZWQgPSArdmFsdWU7XG5cbiAgICAgICAgaWYgKE51bWJlci5pc05hTihjb252ZXJ0ZWQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl92YWx1ZSA9IGNvbnZlcnRlZDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgbWF4aW11bSgpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhpbXVtO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbWF4aW11bSh2YWx1ZTpudW1iZXIpIHtcbiAgICAgICAgLy8gQ29udmVydCB2YWx1ZSBmcm9tIHN0cmluZyB0byBudW1iZXIgd2hlcmUgbmVjZXNzYXJ5LlxuICAgICAgICBjb25zdCBjb252ZXJ0ZWQgPSArdmFsdWU7XG5cbiAgICAgICAgaWYgKE51bWJlci5pc05hTihjb252ZXJ0ZWQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9tYXhpbXVtID0gY29udmVydGVkO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBwcmVjaXNpb24oKTpudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJlY2lzaW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcHJlY2lzaW9uKHZhbHVlOm51bWJlcikge1xuICAgICAgICAvLyBDb252ZXJ0IHZhbHVlIGZyb20gc3RyaW5nIHRvIG51bWJlciB3aGVyZSBuZWNlc3NhcnkuXG4gICAgICAgIGNvbnN0IGNvbnZlcnRlZCA9ICt2YWx1ZTtcblxuICAgICAgICBpZiAoTnVtYmVyLmlzTmFOKGNvbnZlcnRlZCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3ByZWNpc2lvbiA9IE1hdGgubWluKE1hdGgubWF4KGNvbnZlcnRlZCwgMCksIDIwKTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5zdWNjZXNzXCIpXG4gICAgcHVibGljIGdldCByZWFjaGVkTWF4aW11bSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3ZlcnJpZGVTdWNjZXNzIHx8ICgodGhpcy52YWx1ZSA+PSB0aGlzLm1heGltdW0pICYmIHRoaXMuYXV0b1N1Y2Nlc3MpO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImF0dHIuZGF0YS1wZXJjZW50XCIpXG4gICAgcHVibGljIGdldCBwZXJjZW50YWdlKCk6c3RyaW5nIHtcbiAgICAgICAgY29uc3QgYm91bmRlZFZhbHVlID0gTWF0aC5taW4oTWF0aC5tYXgodGhpcy52YWx1ZSwgMCksIHRoaXMubWF4aW11bSk7XG5cbiAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IChib3VuZGVkVmFsdWUgLyB0aGlzLm1heGltdW0pICogMTAwO1xuXG4gICAgICAgIHJldHVybiBwZXJjZW50YWdlLnRvRml4ZWQodGhpcy5wcmVjaXNpb24pO1xuICAgIH1cblxuICAgIEBJbnB1dChcImNsYXNzXCIpXG4gICAgcHVibGljIHNldCBjbGFzc1ZhbHVlKGNsYXNzZXM6c3RyaW5nKSB7XG4gICAgICAgIGlmIChjbGFzc2VzLmluY2x1ZGVzKFwiYXR0YWNoZWRcIikgfHwgY2xhc3Nlcy5pbmNsdWRlcyhcInRpbnlcIikpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsYXNzZXMuaW5jbHVkZXMoXCJzdWNjZXNzXCIpKSB7XG4gICAgICAgICAgICB0aGlzLl9vdmVycmlkZVN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSAwO1xuICAgICAgICB0aGlzLm1heGltdW0gPSAxMDA7XG4gICAgICAgIHRoaXMucHJlY2lzaW9uID0gMDtcblxuICAgICAgICB0aGlzLl9vdmVycmlkZVN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hdXRvU3VjY2VzcyA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cbn1cbiJdfQ==