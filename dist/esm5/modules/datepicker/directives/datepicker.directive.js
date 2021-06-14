import { __decorate, __extends, __metadata } from "tslib";
import { Directive, ElementRef, Renderer2, EventEmitter, Output, Input, HostListener, OnChanges, SimpleChanges } from "@angular/core";
import { ICustomValueAccessorHost, customValueAccessorFactory, CustomValueAccessor, ICustomValidatorHost, customValidatorFactory, CustomValidator, PositioningPlacement, SuiComponentFactory, KeyCode } from "../../../misc/util/internal";
import { IDatepickerLocaleValues, RecursivePartial, SuiLocalizationService } from "../../../behaviors/localization/internal";
import { SuiPopupComponentController, PopupConfig, PopupTrigger } from "../../popup/internal";
import { SuiDatepicker, DatepickerMode } from "../components/datepicker";
import { YearConfig, MonthConfig, DatetimeConfig, TimeConfig, DateConfig } from "../classes/calendar-config";
var SuiDatepickerDirective = /** @class */ (function (_super) {
    __extends(SuiDatepickerDirective, _super);
    function SuiDatepickerDirective(renderer, element, componentFactory, localizationService) {
        var _this = _super.call(this, renderer, element, componentFactory, SuiDatepicker, new PopupConfig({
            trigger: PopupTrigger.Focus,
            placement: PositioningPlacement.BottomLeft,
            transition: "scale",
            transitionDuration: 200
        })) || this;
        _this.localizationService = localizationService;
        // This ensures the popup is drawn correctly (i.e. no border).
        _this._renderer.addClass(_this.popup.elementRef.nativeElement, "ui");
        _this._renderer.addClass(_this.popup.elementRef.nativeElement, "calendar");
        _this.onLocaleUpdate();
        _this.localizationService.onLanguageUpdate.subscribe(function () { return _this.onLocaleUpdate(); });
        _this.onSelectedDateChange = new EventEmitter();
        _this.onValidatorChange = new EventEmitter();
        _this.mode = DatepickerMode.Datetime;
        return _this;
    }
    SuiDatepickerDirective_1 = SuiDatepickerDirective;
    Object.defineProperty(SuiDatepickerDirective.prototype, "selectedDate", {
        get: function () {
            return this._selectedDate;
        },
        set: function (date) {
            this._selectedDate = date;
            this.onSelectedDateChange.emit(date);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerDirective.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        set: function (mode) {
            this._mode = mode || DatepickerMode.Datetime;
            switch (this._mode) {
                case DatepickerMode.Year:
                    this.config = new YearConfig();
                    break;
                case DatepickerMode.Month:
                    this.config = new MonthConfig();
                    break;
                case DatepickerMode.Date:
                default:
                    this.config = new DateConfig();
                    break;
                case DatepickerMode.Datetime:
                    this.config = new DatetimeConfig();
                    break;
                case DatepickerMode.Time:
                    this.config = new TimeConfig();
                    break;
            }
            this.writeValue(this.selectedDate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerDirective.prototype, "localeValues", {
        get: function () {
            return this.localizationService.override(this._localeValues, this.localeOverrides);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerDirective.prototype, "placement", {
        set: function (placement) {
            this.popup.config.placement = placement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerDirective.prototype, "transition", {
        set: function (transition) {
            this.popup.config.transition = transition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerDirective.prototype, "transitionDuration", {
        set: function (duration) {
            this.popup.config.transitionDuration = duration;
        },
        enumerable: true,
        configurable: true
    });
    SuiDatepickerDirective.prototype.popupOnOpen = function () {
        var _this = this;
        if (this.componentInstance) {
            this.componentInstance.service.config = this.config;
            this.componentInstance.service.localeValues = this.localeValues;
            this.componentInstance.service.currentDate = this.initialDate || new Date();
            this.componentInstance.service.selectedDate = this.selectedDate;
            this.componentInstance.service.maxDate = this.maxDate;
            this.componentInstance.service.minDate = this.minDate;
            if (this.firstDayOfWeek != undefined) {
                this.componentInstance.service.firstDayOfWeek = this.firstDayOfWeek;
            }
            this.componentInstance.service.reset();
            this.componentInstance.service.onDateChange.subscribe(function (d) {
                _this.selectedDate = d;
                _this.close();
            });
        }
    };
    SuiDatepickerDirective.prototype.ngOnChanges = function (_a) {
        var maxDate = _a.maxDate, minDate = _a.minDate, mode = _a.mode;
        if (maxDate || minDate || mode) {
            this.onValidatorChange.emit();
        }
    };
    SuiDatepickerDirective.prototype.onLocaleUpdate = function () {
        this._localeValues = this.localizationService.get().datepicker;
    };
    SuiDatepickerDirective.prototype.validate = function (c) {
        var value = c.value;
        if (value != undefined) {
            // We post process the min & max date because sometimes this puts the date outside of the allowed range.
            if (this.minDate && value < this.minDate) {
                return { suiMinDate: { required: this.minDate, actual: value } };
            }
            if (this.maxDate && value > this.maxDate) {
                return { suiMaxDate: { required: this.maxDate, actual: value } };
            }
        }
        // Angular expects null
        // tslint:disable-next-line:no-null-keyword
        return null;
    };
    SuiDatepickerDirective.prototype.writeValue = function (value) {
        this.selectedDate = value;
        if (this.componentInstance) {
            this.componentInstance.service.selectedDate = value;
        }
    };
    SuiDatepickerDirective.prototype.onKeyDown = function (e) {
        if (e.keyCode === KeyCode.Escape) {
            this.close();
        }
    };
    var SuiDatepickerDirective_1;
    SuiDatepickerDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: SuiComponentFactory },
        { type: SuiLocalizationService }
    ]; };
    __decorate([
        Input("pickerMode"),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SuiDatepickerDirective.prototype, "mode", null);
    __decorate([
        Input("pickerInitialDate"),
        __metadata("design:type", Date)
    ], SuiDatepickerDirective.prototype, "initialDate", void 0);
    __decorate([
        Input("pickerMaxDate"),
        __metadata("design:type", Date)
    ], SuiDatepickerDirective.prototype, "maxDate", void 0);
    __decorate([
        Input("pickerMinDate"),
        __metadata("design:type", Date)
    ], SuiDatepickerDirective.prototype, "minDate", void 0);
    __decorate([
        Input("pickerFirstDayOfWeek"),
        __metadata("design:type", Number)
    ], SuiDatepickerDirective.prototype, "firstDayOfWeek", void 0);
    __decorate([
        Input("pickerLocaleOverrides"),
        __metadata("design:type", Object)
    ], SuiDatepickerDirective.prototype, "localeOverrides", void 0);
    __decorate([
        Input("pickerPlacement"),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SuiDatepickerDirective.prototype, "placement", null);
    __decorate([
        Input("pickerTransition"),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SuiDatepickerDirective.prototype, "transition", null);
    __decorate([
        Input("pickerTransitionDuration"),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], SuiDatepickerDirective.prototype, "transitionDuration", null);
    __decorate([
        Output("pickerSelectedDateChange"),
        __metadata("design:type", EventEmitter)
    ], SuiDatepickerDirective.prototype, "onSelectedDateChange", void 0);
    __decorate([
        Output("pickerValidatorChange"),
        __metadata("design:type", EventEmitter)
    ], SuiDatepickerDirective.prototype, "onValidatorChange", void 0);
    __decorate([
        HostListener("keydown", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], SuiDatepickerDirective.prototype, "onKeyDown", null);
    SuiDatepickerDirective = SuiDatepickerDirective_1 = __decorate([
        Directive({
            selector: "[suiDatepicker]",
            providers: [customValidatorFactory(SuiDatepickerDirective_1)]
        }),
        __metadata("design:paramtypes", [Renderer2,
            ElementRef,
            SuiComponentFactory,
            SuiLocalizationService])
    ], SuiDatepickerDirective);
    return SuiDatepickerDirective;
}(SuiPopupComponentController));
export { SuiDatepickerDirective };
var SuiDatepickerDirectiveValueAccessor = /** @class */ (function (_super) {
    __extends(SuiDatepickerDirectiveValueAccessor, _super);
    function SuiDatepickerDirectiveValueAccessor(host) {
        var _this = _super.call(this, host) || this;
        _this.host = host;
        return _this;
    }
    SuiDatepickerDirectiveValueAccessor_1 = SuiDatepickerDirectiveValueAccessor;
    var SuiDatepickerDirectiveValueAccessor_1;
    SuiDatepickerDirectiveValueAccessor.ctorParameters = function () { return [
        { type: SuiDatepickerDirective }
    ]; };
    SuiDatepickerDirectiveValueAccessor = SuiDatepickerDirectiveValueAccessor_1 = __decorate([
        Directive({
            selector: "[suiDatepicker]",
            host: { "(pickerSelectedDateChange)": "onChange($event)" },
            providers: [customValueAccessorFactory(SuiDatepickerDirectiveValueAccessor_1)]
        }),
        __metadata("design:paramtypes", [SuiDatepickerDirective])
    ], SuiDatepickerDirectiveValueAccessor);
    return SuiDatepickerDirectiveValueAccessor;
}(CustomValueAccessor));
export { SuiDatepickerDirectiveValueAccessor };
var SuiDatepickerDirectiveValidator = /** @class */ (function (_super) {
    __extends(SuiDatepickerDirectiveValidator, _super);
    function SuiDatepickerDirectiveValidator(host) {
        var _this = _super.call(this, host) || this;
        _this.host = host;
        return _this;
    }
    SuiDatepickerDirectiveValidator_1 = SuiDatepickerDirectiveValidator;
    var SuiDatepickerDirectiveValidator_1;
    SuiDatepickerDirectiveValidator.ctorParameters = function () { return [
        { type: SuiDatepickerDirective }
    ]; };
    SuiDatepickerDirectiveValidator = SuiDatepickerDirectiveValidator_1 = __decorate([
        Directive({
            selector: "[suiDatepicker]",
            host: { "(pickerValidatorChange)": "onValidatorChange()" },
            providers: [customValidatorFactory(SuiDatepickerDirectiveValidator_1)]
        }),
        __metadata("design:paramtypes", [SuiDatepickerDirective])
    ], SuiDatepickerDirectiveValidator);
    return SuiDatepickerDirectiveValidator;
}(CustomValidator));
export { SuiDatepickerDirectiveValidator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL2RhdGVwaWNrZXIvZGlyZWN0aXZlcy9kYXRlcGlja2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUM3RCxZQUFZLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFDekMsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNILHdCQUF3QixFQUFFLDBCQUEwQixFQUFFLG1CQUFtQixFQUN6RSxvQkFBb0IsRUFBRSxzQkFBc0IsRUFBRSxlQUFlLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsT0FBTyxFQUNwSCxNQUFNLDZCQUE2QixDQUFDO0FBQ3JDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxnQkFBZ0IsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzdILE9BQU8sRUFBRSwyQkFBMkIsRUFBa0IsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlHLE9BQU8sRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekUsT0FBTyxFQUFrQixVQUFVLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFNN0g7SUFDZSwwQ0FBMEM7SUF1RnJELGdDQUFZLFFBQWtCLEVBQ2xCLE9BQWtCLEVBQ2xCLGdCQUFvQyxFQUM3QixtQkFBMEM7UUFIN0QsWUFLSSxrQkFBTSxRQUFRLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxJQUFJLFdBQVcsQ0FBQztZQUN0RSxPQUFPLEVBQUUsWUFBWSxDQUFDLEtBQUs7WUFDM0IsU0FBUyxF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O0NBQUEsQUFGRCxDQUFxRCxlQUFlLEdBRW5FO1NBRlksK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIElucHV0LFxuICAgIEhvc3RMaXN0ZW5lciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7XG4gICAgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0LCBjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeSwgQ3VzdG9tVmFsdWVBY2Nlc3NvcixcbiAgICBJQ3VzdG9tVmFsaWRhdG9ySG9zdCwgY3VzdG9tVmFsaWRhdG9yRmFjdG9yeSwgQ3VzdG9tVmFsaWRhdG9yLCBQb3NpdGlvbmluZ1BsYWNlbWVudCwgU3VpQ29tcG9uZW50RmFjdG9yeSwgS2V5Q29kZVxufSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcywgUmVjdXJzaXZlUGFydGlhbCwgU3VpTG9jYWxpemF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9iZWhhdmlvcnMvbG9jYWxpemF0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlQb3B1cENvbXBvbmVudENvbnRyb2xsZXIsIFBvcHVwQWZ0ZXJPcGVuLCBQb3B1cENvbmZpZywgUG9wdXBUcmlnZ2VyIH0gZnJvbSBcIi4uLy4uL3BvcHVwL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlEYXRlcGlja2VyLCBEYXRlcGlja2VyTW9kZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2RhdGVwaWNrZXJcIjtcbmltcG9ydCB7IENhbGVuZGFyQ29uZmlnLCBZZWFyQ29uZmlnLCBNb250aENvbmZpZywgRGF0ZXRpbWVDb25maWcsIFRpbWVDb25maWcsIERhdGVDb25maWcgfSBmcm9tIFwiLi4vY2xhc3Nlcy9jYWxlbmRhci1jb25maWdcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW3N1aURhdGVwaWNrZXJdXCIsXG4gICAgcHJvdmlkZXJzOiBbY3VzdG9tVmFsaWRhdG9yRmFjdG9yeShTdWlEYXRlcGlja2VyRGlyZWN0aXZlKV1cbn0pXG5leHBvcnQgY2xhc3MgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVxuICAgICAgIGV4dGVuZHMgU3VpUG9wdXBDb21wb25lbnRDb250cm9sbGVyPFN1aURhdGVwaWNrZXI+XG4gICAgICAgaW1wbGVtZW50cyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3Q8RGF0ZT4sIElDdXN0b21WYWxpZGF0b3JIb3N0LCBPbkNoYW5nZXMsIFBvcHVwQWZ0ZXJPcGVuIHtcblxuICAgIHByaXZhdGUgX3NlbGVjdGVkRGF0ZT86RGF0ZTtcblxuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWREYXRlKCk6RGF0ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZERhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzZWxlY3RlZERhdGUoZGF0ZTpEYXRlIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkRGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMub25TZWxlY3RlZERhdGVDaGFuZ2UuZW1pdChkYXRlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9tb2RlOkRhdGVwaWNrZXJNb2RlO1xuICAgIHB1YmxpYyBjb25maWc6Q2FsZW5kYXJDb25maWc7XG5cbiAgICBASW5wdXQoXCJwaWNrZXJNb2RlXCIpXG4gICAgcHVibGljIGdldCBtb2RlKCk6RGF0ZXBpY2tlck1vZGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG1vZGUobW9kZTpEYXRlcGlja2VyTW9kZSkge1xuICAgICAgICB0aGlzLl9tb2RlID0gbW9kZSB8fCBEYXRlcGlja2VyTW9kZS5EYXRldGltZTtcbiAgICAgICAgc3dpdGNoICh0aGlzLl9tb2RlKSB7XG4gICAgICAgICAgICBjYXNlIERhdGVwaWNrZXJNb2RlLlllYXI6XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcgPSBuZXcgWWVhckNvbmZpZygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlcGlja2VyTW9kZS5Nb250aDpcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZyA9IG5ldyBNb250aENvbmZpZygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlcGlja2VyTW9kZS5EYXRlOlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZyA9IG5ldyBEYXRlQ29uZmlnKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERhdGVwaWNrZXJNb2RlLkRhdGV0aW1lOlxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnID0gbmV3IERhdGV0aW1lQ29uZmlnKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERhdGVwaWNrZXJNb2RlLlRpbWU6XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcgPSBuZXcgVGltZUNvbmZpZygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud3JpdGVWYWx1ZSh0aGlzLnNlbGVjdGVkRGF0ZSk7XG4gICAgfVxuXG4gICAgQElucHV0KFwicGlja2VySW5pdGlhbERhdGVcIilcbiAgICBwdWJsaWMgaW5pdGlhbERhdGU/OkRhdGU7XG5cbiAgICBASW5wdXQoXCJwaWNrZXJNYXhEYXRlXCIpXG4gICAgcHVibGljIG1heERhdGU/OkRhdGU7XG5cbiAgICBASW5wdXQoXCJwaWNrZXJNaW5EYXRlXCIpXG4gICAgcHVibGljIG1pbkRhdGU/OkRhdGU7XG5cbiAgICBASW5wdXQoXCJwaWNrZXJGaXJzdERheU9mV2Vla1wiKVxuICAgIHB1YmxpYyBmaXJzdERheU9mV2Vlaz86bnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBfbG9jYWxlVmFsdWVzOklEYXRlcGlja2VyTG9jYWxlVmFsdWVzO1xuXG4gICAgQElucHV0KFwicGlja2VyTG9jYWxlT3ZlcnJpZGVzXCIpXG4gICAgcHVibGljIGxvY2FsZU92ZXJyaWRlczpSZWN1cnNpdmVQYXJ0aWFsPElEYXRlcGlja2VyTG9jYWxlVmFsdWVzPjtcblxuICAgIHB1YmxpYyBnZXQgbG9jYWxlVmFsdWVzKCk6SURhdGVwaWNrZXJMb2NhbGVWYWx1ZXMge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGl6YXRpb25TZXJ2aWNlLm92ZXJyaWRlPFwiZGF0ZXBpY2tlclwiPih0aGlzLl9sb2NhbGVWYWx1ZXMsIHRoaXMubG9jYWxlT3ZlcnJpZGVzKTtcbiAgICB9XG5cbiAgICBASW5wdXQoXCJwaWNrZXJQbGFjZW1lbnRcIilcbiAgICBwdWJsaWMgc2V0IHBsYWNlbWVudChwbGFjZW1lbnQ6UG9zaXRpb25pbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcucGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICAgIH1cblxuICAgIEBJbnB1dChcInBpY2tlclRyYW5zaXRpb25cIilcbiAgICBwdWJsaWMgc2V0IHRyYW5zaXRpb24odHJhbnNpdGlvbjpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcudHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XG4gICAgfVxuXG4gICAgQElucHV0KFwicGlja2VyVHJhbnNpdGlvbkR1cmF0aW9uXCIpXG4gICAgcHVibGljIHNldCB0cmFuc2l0aW9uRHVyYXRpb24oZHVyYXRpb246bnVtYmVyKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgIH1cblxuICAgIEBPdXRwdXQoXCJwaWNrZXJTZWxlY3RlZERhdGVDaGFuZ2VcIilcbiAgICBwdWJsaWMgb25TZWxlY3RlZERhdGVDaGFuZ2U6RXZlbnRFbWl0dGVyPERhdGU+O1xuXG4gICAgQE91dHB1dChcInBpY2tlclZhbGlkYXRvckNoYW5nZVwiKVxuICAgIHB1YmxpYyBvblZhbGlkYXRvckNoYW5nZTpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgZWxlbWVudDpFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudEZhY3Rvcnk6U3VpQ29tcG9uZW50RmFjdG9yeSxcbiAgICAgICAgICAgICAgICBwdWJsaWMgbG9jYWxpemF0aW9uU2VydmljZTpTdWlMb2NhbGl6YXRpb25TZXJ2aWNlKSB7XG5cbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIGVsZW1lbnQsIGNvbXBvbmVudEZhY3RvcnksIFN1aURhdGVwaWNrZXIsIG5ldyBQb3B1cENvbmZpZyh7XG4gICAgICAgICAgICB0cmlnZ2VyOiBQb3B1cFRyaWdnZXIuRm9jdXMsXG4gICAgICAgICAgICBwbGFjZW1lbnQ6IFBvc2l0aW9uaW5nUGxhY2VtZW50LkJvdHRvbUxlZnQsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBcInNjYWxlXCIsXG4gICAgICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb246IDIwMFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgLy8gVGhpcyBlbnN1cmVzIHRoZSBwb3B1cCBpcyBkcmF3biBjb3JyZWN0bHkgKGkuZS4gbm8gYm9yZGVyKS5cbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5wb3B1cC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIFwidWlcIik7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMucG9wdXAuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBcImNhbGVuZGFyXCIpO1xuXG4gICAgICAgIHRoaXMub25Mb2NhbGVVcGRhdGUoKTtcbiAgICAgICAgdGhpcy5sb2NhbGl6YXRpb25TZXJ2aWNlLm9uTGFuZ3VhZ2VVcGRhdGUuc3Vic2NyaWJlKCgpID0+IHRoaXMub25Mb2NhbGVVcGRhdGUoKSk7XG5cbiAgICAgICAgdGhpcy5vblNlbGVjdGVkRGF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcbiAgICAgICAgdGhpcy5vblZhbGlkYXRvckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLm1vZGUgPSBEYXRlcGlja2VyTW9kZS5EYXRldGltZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcG9wdXBPbk9wZW4oKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50SW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5jb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5sb2NhbGVWYWx1ZXMgPSB0aGlzLmxvY2FsZVZhbHVlcztcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5jdXJyZW50RGF0ZSA9IHRoaXMuaW5pdGlhbERhdGUgfHwgbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5zZWxlY3RlZERhdGUgPSB0aGlzLnNlbGVjdGVkRGF0ZTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5tYXhEYXRlID0gdGhpcy5tYXhEYXRlO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZS5zZXJ2aWNlLm1pbkRhdGUgPSB0aGlzLm1pbkRhdGU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmZpcnN0RGF5T2ZXZWVrICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5maXJzdERheU9mV2VlayA9IHRoaXMuZmlyc3REYXlPZldlZWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5yZXNldCgpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudEluc3RhbmNlLnNlcnZpY2Uub25EYXRlQ2hhbmdlLnN1YnNjcmliZSgoZDpEYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBkO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKHsgbWF4RGF0ZSwgbWluRGF0ZSwgbW9kZSB9OlNpbXBsZUNoYW5nZXMpOnZvaWQge1xuICAgICAgICBpZiAobWF4RGF0ZSB8fCBtaW5EYXRlIHx8IG1vZGUpIHtcbiAgICAgICAgICAgIHRoaXMub25WYWxpZGF0b3JDaGFuZ2UuZW1pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkxvY2FsZVVwZGF0ZSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9sb2NhbGVWYWx1ZXMgPSB0aGlzLmxvY2FsaXphdGlvblNlcnZpY2UuZ2V0KCkuZGF0ZXBpY2tlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmFsaWRhdGUoYzpBYnN0cmFjdENvbnRyb2wpOlZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjLnZhbHVlO1xuXG4gICAgICAgIGlmICh2YWx1ZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIFdlIHBvc3QgcHJvY2VzcyB0aGUgbWluICYgbWF4IGRhdGUgYmVjYXVzZSBzb21ldGltZXMgdGhpcyBwdXRzIHRoZSBkYXRlIG91dHNpZGUgb2YgdGhlIGFsbG93ZWQgcmFuZ2UuXG4gICAgICAgICAgICBpZiAodGhpcy5taW5EYXRlICYmIHZhbHVlIDwgdGhpcy5taW5EYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3VpTWluRGF0ZTogeyByZXF1aXJlZDogdGhpcy5taW5EYXRlLCBhY3R1YWw6IHZhbHVlIH0gfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMubWF4RGF0ZSAmJiB2YWx1ZSA+IHRoaXMubWF4RGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHN1aU1heERhdGU6IHsgcmVxdWlyZWQ6IHRoaXMubWF4RGF0ZSwgYWN0dWFsOiB2YWx1ZSB9IH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbmd1bGFyIGV4cGVjdHMgbnVsbFxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tbnVsbC1rZXl3b3JkXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOkRhdGUgfCB1bmRlZmluZWQpOnZvaWQge1xuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IHZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudEluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudEluc3RhbmNlLnNlcnZpY2Uuc2VsZWN0ZWREYXRlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwia2V5ZG93blwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uS2V5RG93bihlOktleWJvYXJkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBLZXlDb2RlLkVzY2FwZSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpRGF0ZXBpY2tlcl1cIixcbiAgICBob3N0OiB7IFwiKHBpY2tlclNlbGVjdGVkRGF0ZUNoYW5nZSlcIjogXCJvbkNoYW5nZSgkZXZlbnQpXCIgfSxcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeShTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsdWVBY2Nlc3NvcildXG59KVxuZXhwb3J0IGNsYXNzIFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWx1ZUFjY2Vzc29yIGV4dGVuZHMgQ3VzdG9tVmFsdWVBY2Nlc3NvcjxEYXRlLCBTdWlEYXRlcGlja2VyRGlyZWN0aXZlPiB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGhvc3Q6U3VpRGF0ZXBpY2tlckRpcmVjdGl2ZSkgeyBzdXBlcihob3N0KTsgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpRGF0ZXBpY2tlcl1cIixcbiAgICBob3N0OiB7IFwiKHBpY2tlclZhbGlkYXRvckNoYW5nZSlcIjogXCJvblZhbGlkYXRvckNoYW5nZSgpXCIgfSxcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWxpZGF0b3JGYWN0b3J5KFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWxpZGF0b3IpXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsaWRhdG9yIGV4dGVuZHMgQ3VzdG9tVmFsaWRhdG9yPFN1aURhdGVwaWNrZXJEaXJlY3RpdmU+IHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaG9zdDpTdWlEYXRlcGlja2VyRGlyZWN0aXZlKSB7IHN1cGVyKGhvc3QpOyB9XG59XG4iXX0=