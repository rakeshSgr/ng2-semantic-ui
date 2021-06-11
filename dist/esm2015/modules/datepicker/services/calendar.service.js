/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { EventEmitter } from "@angular/core";
import { DateUtil } from "../../../misc/util/internal";
/** @enum {number} */
const CalendarMode = {
    DateOnly: 0,
    TimeOnly: 1,
    Both: 2,
};
export { CalendarMode };
CalendarMode[CalendarMode.DateOnly] = "DateOnly";
CalendarMode[CalendarMode.TimeOnly] = "TimeOnly";
CalendarMode[CalendarMode.Both] = "Both";
export class CalendarService {
    /**
     * @param {?} config
     * @param {?} localeValues
     */
    constructor(config, localeValues) {
        this.localeValues = localeValues;
        this.onManualUpdate = () => { };
        this.config = config;
        this.currentDate = new Date();
        this.firstDayOfWeek = this.localeValues.firstDayOfWeek;
        this.onDateChange = new EventEmitter();
        this.reset();
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    set config(config) {
        this._config = config;
        config.updateBounds(this._selectedDate || this.currentDate);
    }
    /**
     * @return {?}
     */
    get inFinalView() {
        return this.currentView === this.config.mappings.finalView;
    }
    /**
     * @return {?}
     */
    get selectedDate() {
        return this._selectedDate;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    set selectedDate(date) {
        if (date) {
            this._selectedDate = DateUtil.clone(date);
            this.currentDate = DateUtil.clone(date);
        }
        else {
            this._selectedDate = undefined;
        }
        this.config.updateBounds(this._selectedDate || this.currentDate);
        this.onManualUpdate();
    }
    /**
     * @return {?}
     */
    get minDate() {
        if (this._minDate && this.config.dateMinBound) {
            return this._minDate > this.config.dateMinBound ? this._minDate : this.config.dateMinBound;
        }
        return this._minDate || this.config.dateMinBound;
    }
    /**
     * @param {?} min
     * @return {?}
     */
    set minDate(min) {
        this._minDate = min;
    }
    /**
     * @return {?}
     */
    get maxDate() {
        if (this._maxDate && this.config.dateMaxBound) {
            return this._maxDate < this.config.dateMaxBound ? this._maxDate : this.config.dateMaxBound;
        }
        return this._maxDate || this.config.dateMaxBound;
    }
    /**
     * @param {?} max
     * @return {?}
     */
    set maxDate(max) {
        this._maxDate = max;
    }
    /**
     * @return {?}
     */
    get firstDayOfWeek() {
        return this._firstDayOfWeek;
    }
    /**
     * @param {?} firstDayOfWeek
     * @return {?}
     */
    set firstDayOfWeek(firstDayOfWeek) {
        if (firstDayOfWeek != undefined) {
            this._firstDayOfWeek = Math.max(0, Math.min(6, firstDayOfWeek));
        }
    }
    /**
     * @return {?}
     */
    reset() {
        this.currentView = this.config.mappings.finalView;
        if (!this._selectedDate) {
            let /** @type {?} */ current = this.currentDate.getTime();
            if (this._minDate) {
                current = Math.max(current, this._minDate.getTime());
            }
            if (this._maxDate) {
                current = Math.min(current, this._maxDate.getTime());
            }
            this.currentDate = new Date(current);
            this.config.updateBounds(this.currentDate);
            this.currentView = this.config.mappings.initialView;
        }
    }
    /**
     * @param {?} date
     * @param {?} fromView
     * @return {?}
     */
    changeDate(date, fromView) {
        this.currentDate = date;
        if (fromView === this.config.mappings.finalView) {
            this.selectedDate = date;
            return this.onDateChange.emit(date);
        }
        this.updateView(this.config.mappings.changed, fromView);
    }
    /**
     * @param {?} fromView
     * @return {?}
     */
    zoomOut(fromView) {
        this.updateView(this.config.mappings.zoom, fromView);
    }
    /**
     * @param {?} mappings
     * @param {?} fromView
     * @return {?}
     */
    updateView(mappings, fromView) {
        const /** @type {?} */ mapping = mappings.get(fromView);
        if (mapping == undefined) {
            throw new Error("Unknown view type.");
        }
        this.currentView = mapping;
    }
}
function CalendarService_tsickle_Closure_declarations() {
    /** @type {?} */
    CalendarService.prototype._config;
    /** @type {?} */
    CalendarService.prototype.currentView;
    /** @type {?} */
    CalendarService.prototype.currentDate;
    /** @type {?} */
    CalendarService.prototype._selectedDate;
    /** @type {?} */
    CalendarService.prototype._minDate;
    /** @type {?} */
    CalendarService.prototype._maxDate;
    /** @type {?} */
    CalendarService.prototype._firstDayOfWeek;
    /** @type {?} */
    CalendarService.prototype.onDateChange;
    /** @type {?} */
    CalendarService.prototype.onManualUpdate;
    /** @type {?} */
    CalendarService.prototype.localeValues;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGF0ZXBpY2tlci9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7Ozs7QUFVdkQsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBMkV4QixZQUFZLE1BQXFCLEVBQVMsWUFBb0M7UUFBcEMsaUJBQVksR0FBWixZQUFZLENBQXdCOzhCQVkzQyxHQUFHLEVBQUUsSUFBRztRQVh2QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFFOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQztRQUV2RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFN0MsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ2hCOzs7O1FBbEZVLE1BQU07UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7Ozs7OztRQUdiLE1BQU0sQ0FBQyxNQUFxQjtRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzs7OztRQUlyRCxXQUFXO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7Ozs7O1FBTXBELFlBQVk7UUFDbkIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDOzs7Ozs7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V0FBVyxDQUFDO1NBQ3ZEOzs7Ozs7O0lBR0UsVUFBVSxDQUFDLElBQVMsRUFBRSxRQUF5QjtRQUNsRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUV4QixJQUFJLFFBQVEsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFFekIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QztRQUVELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDOzs7Ozs7SUFHckQsT0FBTyxDQUFDLFFBQXlCO1FBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDOzs7Ozs7O0lBR2pELFVBQVUsQ0FBQyxRQUFnRCxFQUFFLFFBQXlCO1FBQzFGLHVCQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksT0FBTyxJQUFJLFNBQVMsRUFBRTtZQUN0QixNQUFNLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7U0FDekM7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQzs7Q0FFbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSURhdGVwaWNrZXJMb2NhbGVWYWx1ZXMgfSBmcm9tIFwiLi4vLi4vLi4vYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgRGF0ZVV0aWwgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBDYWxlbmRhclZpZXdUeXBlIH0gZnJvbSBcIi4uL3ZpZXdzL2NhbGVuZGFyLXZpZXdcIjtcbmltcG9ydCB7IENhbGVuZGFyQ29uZmlnIH0gZnJvbSBcIi4uL2NsYXNzZXMvY2FsZW5kYXItY29uZmlnXCI7XG5cbmV4cG9ydCBlbnVtIENhbGVuZGFyTW9kZSB7XG4gICAgRGF0ZU9ubHkgPSAwLFxuICAgIFRpbWVPbmx5ID0gMSxcbiAgICBCb3RoID0gMlxufVxuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJTZXJ2aWNlIHtcbiAgICBwcml2YXRlIF9jb25maWc6Q2FsZW5kYXJDb25maWc7XG5cbiAgICBwdWJsaWMgZ2V0IGNvbmZpZygpOkNhbGVuZGFyQ29uZmlnIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGNvbmZpZyhjb25maWc6Q2FsZW5kYXJDb25maWcpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgICAgICBjb25maWcudXBkYXRlQm91bmRzKHRoaXMuX3NlbGVjdGVkRGF0ZSB8fCB0aGlzLmN1cnJlbnREYXRlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3VycmVudFZpZXc6Q2FsZW5kYXJWaWV3VHlwZTtcbiAgICBwdWJsaWMgZ2V0IGluRmluYWxWaWV3KCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRWaWV3ID09PSB0aGlzLmNvbmZpZy5tYXBwaW5ncy5maW5hbFZpZXc7XG4gICAgfVxuXG4gICAgcHVibGljIGN1cnJlbnREYXRlOkRhdGU7XG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWREYXRlPzpEYXRlO1xuXG4gICAgcHVibGljIGdldCBzZWxlY3RlZERhdGUoKTpEYXRlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkRGF0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHNlbGVjdGVkRGF0ZShkYXRlOkRhdGUgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkRGF0ZSA9IERhdGVVdGlsLmNsb25lKGRhdGUpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF0ZSA9IERhdGVVdGlsLmNsb25lKGRhdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWREYXRlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb25maWcudXBkYXRlQm91bmRzKHRoaXMuX3NlbGVjdGVkRGF0ZSB8fCB0aGlzLmN1cnJlbnREYXRlKTtcbiAgICAgICAgdGhpcy5vbk1hbnVhbFVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX21pbkRhdGU/OkRhdGU7XG4gICAgcHJpdmF0ZSBfbWF4RGF0ZT86RGF0ZTtcblxuICAgIHB1YmxpYyBnZXQgbWluRGF0ZSgpOkRhdGUgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy5fbWluRGF0ZSAmJiB0aGlzLmNvbmZpZy5kYXRlTWluQm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9taW5EYXRlID4gdGhpcy5jb25maWcuZGF0ZU1pbkJvdW5kID8gdGhpcy5fbWluRGF0ZSA6IHRoaXMuY29uZmlnLmRhdGVNaW5Cb3VuZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbWluRGF0ZSB8fCB0aGlzLmNvbmZpZy5kYXRlTWluQm91bmQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBtaW5EYXRlKG1pbjpEYXRlIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX21pbkRhdGUgPSBtaW47XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBtYXhEYXRlKCk6RGF0ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICh0aGlzLl9tYXhEYXRlICYmIHRoaXMuY29uZmlnLmRhdGVNYXhCb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21heERhdGUgPCB0aGlzLmNvbmZpZy5kYXRlTWF4Qm91bmQgPyB0aGlzLl9tYXhEYXRlIDogdGhpcy5jb25maWcuZGF0ZU1heEJvdW5kO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhEYXRlIHx8IHRoaXMuY29uZmlnLmRhdGVNYXhCb3VuZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG1heERhdGUobWF4OkRhdGUgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fbWF4RGF0ZSA9IG1heDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9maXJzdERheU9mV2VlazpudW1iZXI7XG5cbiAgICBwdWJsaWMgZ2V0IGZpcnN0RGF5T2ZXZWVrKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpcnN0RGF5T2ZXZWVrO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgZmlyc3REYXlPZldlZWsoZmlyc3REYXlPZldlZWs6bnVtYmVyKSB7XG4gICAgICAgIGlmIChmaXJzdERheU9mV2VlayAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZpcnN0RGF5T2ZXZWVrID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oNiwgZmlyc3REYXlPZldlZWspKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbkRhdGVDaGFuZ2U6RXZlbnRFbWl0dGVyPERhdGU+O1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOkNhbGVuZGFyQ29uZmlnLCBwdWJsaWMgbG9jYWxlVmFsdWVzOklEYXRlcGlja2VyTG9jYWxlVmFsdWVzKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuXG4gICAgICAgIHRoaXMuY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgIHRoaXMuZmlyc3REYXlPZldlZWsgPSB0aGlzLmxvY2FsZVZhbHVlcy5maXJzdERheU9mV2VlaztcblxuICAgICAgICB0aGlzLm9uRGF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcblxuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTWFudWFsVXBkYXRlOigpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICAgIHB1YmxpYyByZXNldCgpOnZvaWQge1xuICAgICAgICB0aGlzLmN1cnJlbnRWaWV3ID0gdGhpcy5jb25maWcubWFwcGluZ3MuZmluYWxWaWV3O1xuXG4gICAgICAgIGlmICghdGhpcy5fc2VsZWN0ZWREYXRlKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuY3VycmVudERhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX21pbkRhdGUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gTWF0aC5tYXgoY3VycmVudCwgdGhpcy5fbWluRGF0ZS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX21heERhdGUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gTWF0aC5taW4oY3VycmVudCwgdGhpcy5fbWF4RGF0ZS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUoY3VycmVudCk7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy51cGRhdGVCb3VuZHModGhpcy5jdXJyZW50RGF0ZSk7XG5cbiAgICAgICAgICAgIHRoaXMuY3VycmVudFZpZXcgPSB0aGlzLmNvbmZpZy5tYXBwaW5ncy5pbml0aWFsVmlldztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VEYXRlKGRhdGU6RGF0ZSwgZnJvbVZpZXc6Q2FsZW5kYXJWaWV3VHlwZSk6dm9pZCB7XG4gICAgICAgIHRoaXMuY3VycmVudERhdGUgPSBkYXRlO1xuXG4gICAgICAgIGlmIChmcm9tVmlldyA9PT0gdGhpcy5jb25maWcubWFwcGluZ3MuZmluYWxWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IGRhdGU7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uRGF0ZUNoYW5nZS5lbWl0KGRhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KHRoaXMuY29uZmlnLm1hcHBpbmdzLmNoYW5nZWQsIGZyb21WaWV3KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgem9vbU91dChmcm9tVmlldzpDYWxlbmRhclZpZXdUeXBlKTp2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KHRoaXMuY29uZmlnLm1hcHBpbmdzLnpvb20sIGZyb21WaWV3KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVZpZXcobWFwcGluZ3M6TWFwPENhbGVuZGFyVmlld1R5cGUsIENhbGVuZGFyVmlld1R5cGU+LCBmcm9tVmlldzpDYWxlbmRhclZpZXdUeXBlKTp2b2lkIHtcbiAgICAgICAgY29uc3QgbWFwcGluZyA9IG1hcHBpbmdzLmdldChmcm9tVmlldyk7XG4gICAgICAgIGlmIChtYXBwaW5nID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biB2aWV3IHR5cGUuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudFZpZXcgPSBtYXBwaW5nO1xuICAgIH1cbn1cbiJdfQ==