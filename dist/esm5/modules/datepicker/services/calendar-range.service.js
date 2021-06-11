/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DateUtil, Util } from "../../../misc/util/internal";
import { CalendarItem } from "../directives/calendar-item";
import { DateComparer } from "../classes/date-comparer";
var CalendarRange = /** @class */ (function () {
    function CalendarRange(start, dates, items, grouped, comparer) {
        this.start = start;
        this.dates = dates;
        this.items = items;
        this.groupedItems = grouped;
        this._comparer = comparer;
    }
    Object.defineProperty(CalendarRange.prototype, "inRange", {
        get: /**
         * @return {?}
         */
        function () {
            return this.items.filter(function (i) { return !i.isOutsideRange; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} item
     * @return {?}
     */
    CalendarRange.prototype.find = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        return this.items.find(function (i) { return _this._comparer.equal(i.date, item.date); });
    };
    /**
     * @param {?} item
     * @return {?}
     */
    CalendarRange.prototype.findIndex = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        if (!item) {
            return -1;
        }
        return this.items.findIndex(function (i) { return _this._comparer.equal(i.date, item.date); });
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarRange.prototype.containsDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        var _this = this;
        return !!this.inRange.find(function (i) { return _this._comparer.equal(i.date, date); });
    };
    return CalendarRange;
}());
export { CalendarRange };
function CalendarRange_tsickle_Closure_declarations() {
    /** @type {?} */
    CalendarRange.prototype.start;
    /** @type {?} */
    CalendarRange.prototype.dates;
    /** @type {?} */
    CalendarRange.prototype.items;
    /** @type {?} */
    CalendarRange.prototype.groupedItems;
    /** @type {?} */
    CalendarRange.prototype._comparer;
}
/**
 * @abstract
 */
var /**
 * @abstract
 */
CalendarRangeService = /** @class */ (function () {
    function CalendarRangeService(interval, rows, columns) {
        this.interval = interval;
        this.marginal = /** @type {?} */ interval + 1;
        this.rows = rows;
        this.columns = columns;
    }
    Object.defineProperty(CalendarRangeService.prototype, "dateComparer", {
        get: /**
         * @return {?}
         */
        function () {
            return new DateComparer(this.marginal, this.service.inFinalView);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarRangeService.prototype, "length", {
        get: /**
         * @return {?}
         */
        function () {
            return this.rows * this.columns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarRangeService.prototype, "canMoveNext", {
        get: /**
         * @return {?}
         */
        function () {
            var /** @type {?} */ firstItem = this.next.inRange[0];
            if (firstItem && this.service.maxDate) {
                return firstItem.date <= this.service.maxDate;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarRangeService.prototype, "canMovePrevious", {
        get: /**
         * @return {?}
         */
        function () {
            var /** @type {?} */ lastItem = this.previous.inRange.slice(-1).pop();
            if (lastItem && this.service.minDate) {
                return lastItem.date >= this.service.minDate;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} service
     * @return {?}
     */
    CalendarRangeService.prototype.loadService = /**
     * @param {?} service
     * @return {?}
     */
    function (service) {
        this.service = service;
        this.refresh();
    };
    /**
     * @return {?}
     */
    CalendarRangeService.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.current = this.calcRange(this.service.currentDate);
        this.next = this.calcRange(DateUtil.next(this.interval, DateUtil.clone(this.service.currentDate)));
        this.previous = this.calcRange(DateUtil.previous(this.interval, DateUtil.clone(this.service.currentDate)));
    };
    /**
     * @param {?} forwards
     * @return {?}
     */
    CalendarRangeService.prototype.move = /**
     * @param {?} forwards
     * @return {?}
     */
    function (forwards) {
        if (forwards) {
            return this.moveNext();
        }
        return this.movePrevious();
    };
    /**
     * @return {?}
     */
    CalendarRangeService.prototype.moveNext = /**
     * @return {?}
     */
    function () {
        DateUtil.next(this.interval, this.service.currentDate);
        this.previous = this.current;
        this.current = this.next;
        this.next = this.calcRange(DateUtil.next(this.interval, DateUtil.clone(this.service.currentDate)));
    };
    /**
     * @return {?}
     */
    CalendarRangeService.prototype.movePrevious = /**
     * @return {?}
     */
    function () {
        DateUtil.previous(this.interval, this.service.currentDate);
        this.next = this.current;
        this.current = this.previous;
        this.previous = this.calcRange(DateUtil.previous(this.interval, DateUtil.clone(this.service.currentDate)));
    };
    /**
     * @param {?} forwards
     * @return {?}
     */
    CalendarRangeService.prototype.calc = /**
     * @param {?} forwards
     * @return {?}
     */
    function (forwards) {
        if (forwards) {
            return this.next;
        }
        return this.previous;
    };
    /**
     * @param {?} startDate
     * @return {?}
     */
    CalendarRangeService.prototype.calcRange = /**
     * @param {?} startDate
     * @return {?}
     */
    function (startDate) {
        var /** @type {?} */ start = this.calcStart(startDate);
        if (this.service.inFinalView) {
            DateUtil.startOf(this.marginal, start, true);
        }
        var /** @type {?} */ dates = this.calcDates(start);
        var /** @type {?} */ items = this.calcItems(dates, startDate);
        return new CalendarRange(start, dates, items, Util.Array.group(items, this.columns), this.dateComparer);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarRangeService.prototype.calcStart = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return DateUtil.startOf(this.interval, DateUtil.clone(date));
    };
    /**
     * @param {?} rangeStart
     * @return {?}
     */
    CalendarRangeService.prototype.calcDates = /**
     * @param {?} rangeStart
     * @return {?}
     */
    function (rangeStart) {
        var _this = this;
        return Util.Array
            .range(this.length)
            .map(function (i) { return DateUtil.add(_this.marginal, DateUtil.clone(rangeStart), i); });
    };
    /**
     * @param {?} dateRange
     * @param {?} baseDate
     * @return {?}
     */
    CalendarRangeService.prototype.calcItems = /**
     * @param {?} dateRange
     * @param {?} baseDate
     * @return {?}
     */
    function (dateRange, baseDate) {
        var _this = this;
        return dateRange.map(function (date) {
            var /** @type {?} */ item = new CalendarItem(date);
            item.isDisabled = !_this.dateComparer.between(item.date, _this.service.minDate, _this.service.maxDate);
            item.isActive = _this.dateComparer.equal(item.date, _this.service.selectedDate);
            item.isToday = _this.dateComparer.equal(item.date, new Date());
            item.isSelectable = item.isDisabled;
            _this.configureItem(item, baseDate);
            return item;
        });
    };
    return CalendarRangeService;
}());
/**
 * @abstract
 */
export { CalendarRangeService };
function CalendarRangeService_tsickle_Closure_declarations() {
    /** @type {?} */
    CalendarRangeService.prototype.previous;
    /** @type {?} */
    CalendarRangeService.prototype.current;
    /** @type {?} */
    CalendarRangeService.prototype.next;
    /** @type {?} */
    CalendarRangeService.prototype.service;
    /** @type {?} */
    CalendarRangeService.prototype.interval;
    /** @type {?} */
    CalendarRangeService.prototype.marginal;
    /** @type {?} */
    CalendarRangeService.prototype.rows;
    /** @type {?} */
    CalendarRangeService.prototype.columns;
    /**
     * @abstract
     * @param {?} item
     * @param {?} baseDate
     * @return {?}
     */
    CalendarRangeService.prototype.configureItem = function (item, baseDate) { };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItcmFuZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGF0ZXBpY2tlci9zZXJ2aWNlcy9jYWxlbmRhci1yYW5nZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXhELElBQUE7SUFVSSx1QkFBWSxLQUFVLEVBQUUsS0FBWSxFQUFFLEtBQW9CLEVBQUUsT0FBd0IsRUFBRSxRQUFxQjtRQUN2RyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztLQUM3QjswQkFaVSxrQ0FBTzs7Ozs7WUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFqQixDQUFpQixDQUFDLENBQUM7Ozs7Ozs7OztJQWE5Qyw0QkFBSTs7OztjQUFDLElBQWlCOztRQUN6QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQXZDLENBQXVDLENBQUMsQ0FBQzs7Ozs7O0lBR2xFLGlDQUFTOzs7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Q0FBQztLQUU3RTs7Ozs7O0lBRVMsd0NBQVM7Ozs7O0lBQW5CLFVBQW9CLFNBQWdCLEVBQUUsUUFBYTtRQUFuRCxpQkFhQztRQVpHLE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDckIscUJBQU0sSUFBSSxHQUFHLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXBDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEcsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDOUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFFcEMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFFbkMsT0FBTyxJQUFJLENBQUM7U0FDZixDQUFDLENBQUM7S0FDTjsrQkE5Skw7SUFpS0MsQ0FBQTs7OztBQTFIRCxnQ0EwSEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlUHJlY2lzaW9uLCBEYXRlVXRpbCwgVXRpbCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IENhbGVuZGFySXRlbSB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL2NhbGVuZGFyLWl0ZW1cIjtcbmltcG9ydCB7IENhbGVuZGFyU2VydmljZSB9IGZyb20gXCIuL2NhbGVuZGFyLnNlcnZpY2VcIjtcbmltcG9ydCB7IERhdGVDb21wYXJlciB9IGZyb20gXCIuLi9jbGFzc2VzL2RhdGUtY29tcGFyZXJcIjtcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyUmFuZ2Uge1xuICAgIHB1YmxpYyBzdGFydDpEYXRlO1xuICAgIHB1YmxpYyBkYXRlczpEYXRlW107XG4gICAgcHVibGljIGl0ZW1zOkNhbGVuZGFySXRlbVtdO1xuICAgIHB1YmxpYyBnZXQgaW5SYW5nZSgpOkNhbGVuZGFySXRlbVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKGkgPT4gIWkuaXNPdXRzaWRlUmFuZ2UpO1xuICAgIH1cbiAgICBwdWJsaWMgZ3JvdXBlZEl0ZW1zOkNhbGVuZGFySXRlbVtdW107XG4gICAgcHJpdmF0ZSBfY29tcGFyZXI6RGF0ZUNvbXBhcmVyO1xuXG4gICAgY29uc3RydWN0b3Ioc3RhcnQ6RGF0ZSwgZGF0ZXM6RGF0ZVtdLCBpdGVtczpDYWxlbmRhckl0ZW1bXSwgZ3JvdXBlZDpDYWxlbmRhckl0ZW1bXVtdLCBjb21wYXJlcjpEYXRlQ29tcGFyZXIpIHtcbiAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xuICAgICAgICB0aGlzLmRhdGVzID0gZGF0ZXM7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcbiAgICAgICAgdGhpcy5ncm91cGVkSXRlbXMgPSBncm91cGVkO1xuICAgICAgICB0aGlzLl9jb21wYXJlciA9IGNvbXBhcmVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBmaW5kKGl0ZW06Q2FsZW5kYXJJdGVtKTpDYWxlbmRhckl0ZW0gfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maW5kKGkgPT4gdGhpcy5fY29tcGFyZXIuZXF1YWwoaS5kYXRlLCBpdGVtLmRhdGUpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmluZEluZGV4KGl0ZW06Q2FsZW5kYXJJdGVtIHwgdW5kZWZpbmVkKTpudW1iZXIge1xuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maW5kSW5kZXgoaSA9PiB0aGlzLl9jb21wYXJlci5lcXVhbChpLmRhdGUsIGl0ZW0uZGF0ZSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb250YWluc0RhdGUoZGF0ZTpEYXRlKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5pblJhbmdlLmZpbmQoaSA9PiB0aGlzLl9jb21wYXJlci5lcXVhbChpLmRhdGUsIGRhdGUpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDYWxlbmRhclJhbmdlU2VydmljZSB7XG4gICAgcHVibGljIHByZXZpb3VzOkNhbGVuZGFyUmFuZ2U7XG4gICAgcHVibGljIGN1cnJlbnQ6Q2FsZW5kYXJSYW5nZTtcbiAgICBwdWJsaWMgbmV4dDpDYWxlbmRhclJhbmdlO1xuXG4gICAgcHVibGljIHNlcnZpY2U6Q2FsZW5kYXJTZXJ2aWNlO1xuXG4gICAgcHVibGljIGludGVydmFsOkRhdGVQcmVjaXNpb247XG4gICAgcHVibGljIG1hcmdpbmFsOkRhdGVQcmVjaXNpb247XG4gICAgcHVibGljIHJvd3M6bnVtYmVyO1xuICAgIHB1YmxpYyBjb2x1bW5zOm51bWJlcjtcblxuICAgIHB1YmxpYyBnZXQgZGF0ZUNvbXBhcmVyKCk6RGF0ZUNvbXBhcmVyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlQ29tcGFyZXIodGhpcy5tYXJnaW5hbCwgdGhpcy5zZXJ2aWNlLmluRmluYWxWaWV3KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGxlbmd0aCgpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvd3MgKiB0aGlzLmNvbHVtbnM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBjYW5Nb3ZlTmV4dCgpOmJvb2xlYW4ge1xuICAgICAgICBjb25zdCBmaXJzdEl0ZW0gPSB0aGlzLm5leHQuaW5SYW5nZVswXTtcbiAgICAgICAgaWYgKGZpcnN0SXRlbSAmJiB0aGlzLnNlcnZpY2UubWF4RGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZpcnN0SXRlbS5kYXRlIDw9IHRoaXMuc2VydmljZS5tYXhEYXRlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY2FuTW92ZVByZXZpb3VzKCk6Ym9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGxhc3RJdGVtID0gdGhpcy5wcmV2aW91cy5pblJhbmdlLnNsaWNlKC0xKS5wb3AoKTtcbiAgICAgICAgaWYgKGxhc3RJdGVtICYmIHRoaXMuc2VydmljZS5taW5EYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbGFzdEl0ZW0uZGF0ZSA+PSB0aGlzLnNlcnZpY2UubWluRGF0ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihpbnRlcnZhbDpEYXRlUHJlY2lzaW9uLCByb3dzOm51bWJlciwgY29sdW1uczpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IGludGVydmFsO1xuICAgICAgICB0aGlzLm1hcmdpbmFsID0gaW50ZXJ2YWwgYXMgbnVtYmVyICsgMTtcbiAgICAgICAgdGhpcy5yb3dzID0gcm93cztcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gY29sdW1ucztcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZFNlcnZpY2Uoc2VydmljZTpDYWxlbmRhclNlcnZpY2UpOnZvaWQge1xuICAgICAgICB0aGlzLnNlcnZpY2UgPSBzZXJ2aWNlO1xuXG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWZyZXNoKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMuY2FsY1JhbmdlKHRoaXMuc2VydmljZS5jdXJyZW50RGF0ZSk7XG5cbiAgICAgICAgdGhpcy5uZXh0ID0gdGhpcy5jYWxjUmFuZ2UoRGF0ZVV0aWwubmV4dCh0aGlzLmludGVydmFsLCBEYXRlVXRpbC5jbG9uZSh0aGlzLnNlcnZpY2UuY3VycmVudERhdGUpKSk7XG4gICAgICAgIHRoaXMucHJldmlvdXMgPSB0aGlzLmNhbGNSYW5nZShEYXRlVXRpbC5wcmV2aW91cyh0aGlzLmludGVydmFsLCBEYXRlVXRpbC5jbG9uZSh0aGlzLnNlcnZpY2UuY3VycmVudERhdGUpKSk7XG4gICAgfVxuXG4gICAgcHVibGljIG1vdmUoZm9yd2FyZHM6Ym9vbGVhbik6dm9pZCB7XG4gICAgICAgIGlmIChmb3J3YXJkcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW92ZU5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tb3ZlUHJldmlvdXMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbW92ZU5leHQoKTp2b2lkIHtcbiAgICAgICAgRGF0ZVV0aWwubmV4dCh0aGlzLmludGVydmFsLCB0aGlzLnNlcnZpY2UuY3VycmVudERhdGUpO1xuICAgICAgICB0aGlzLnByZXZpb3VzID0gdGhpcy5jdXJyZW50O1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLm5leHQ7XG4gICAgICAgIHRoaXMubmV4dCA9IHRoaXMuY2FsY1JhbmdlKERhdGVVdGlsLm5leHQodGhpcy5pbnRlcnZhbCwgRGF0ZVV0aWwuY2xvbmUodGhpcy5zZXJ2aWNlLmN1cnJlbnREYXRlKSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBtb3ZlUHJldmlvdXMoKTp2b2lkIHtcbiAgICAgICAgRGF0ZVV0aWwucHJldmlvdXModGhpcy5pbnRlcnZhbCwgdGhpcy5zZXJ2aWNlLmN1cnJlbnREYXRlKTtcbiAgICAgICAgdGhpcy5uZXh0ID0gdGhpcy5jdXJyZW50O1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnByZXZpb3VzO1xuICAgICAgICB0aGlzLnByZXZpb3VzID0gdGhpcy5jYWxjUmFuZ2UoRGF0ZVV0aWwucHJldmlvdXModGhpcy5pbnRlcnZhbCwgRGF0ZVV0aWwuY2xvbmUodGhpcy5zZXJ2aWNlLmN1cnJlbnREYXRlKSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjYWxjKGZvcndhcmRzOmJvb2xlYW4pOkNhbGVuZGFyUmFuZ2Uge1xuICAgICAgICBpZiAoZm9yd2FyZHMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucHJldmlvdXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWxjUmFuZ2Uoc3RhcnREYXRlOkRhdGUpOkNhbGVuZGFyUmFuZ2Uge1xuICAgICAgICBjb25zdCBzdGFydCA9IHRoaXMuY2FsY1N0YXJ0KHN0YXJ0RGF0ZSk7XG4gICAgICAgIGlmICh0aGlzLnNlcnZpY2UuaW5GaW5hbFZpZXcpIHtcbiAgICAgICAgICAgIERhdGVVdGlsLnN0YXJ0T2YodGhpcy5tYXJnaW5hbCwgc3RhcnQsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGVzID0gdGhpcy5jYWxjRGF0ZXMoc3RhcnQpO1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuY2FsY0l0ZW1zKGRhdGVzLCBzdGFydERhdGUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgQ2FsZW5kYXJSYW5nZShzdGFydCwgZGF0ZXMsIGl0ZW1zLCBVdGlsLkFycmF5Lmdyb3VwKGl0ZW1zLCB0aGlzLmNvbHVtbnMpLCB0aGlzLmRhdGVDb21wYXJlcik7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNhbGNTdGFydChkYXRlOkRhdGUpOkRhdGUge1xuICAgICAgICByZXR1cm4gRGF0ZVV0aWwuc3RhcnRPZih0aGlzLmludGVydmFsLCBEYXRlVXRpbC5jbG9uZShkYXRlKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNhbGNEYXRlcyhyYW5nZVN0YXJ0OkRhdGUpOkRhdGVbXSB7XG4gICAgICAgIHJldHVybiBVdGlsLkFycmF5XG4gICAgICAgICAgICAucmFuZ2UodGhpcy5sZW5ndGgpXG4gICAgICAgICAgICAubWFwKGkgPT4gRGF0ZVV0aWwuYWRkKHRoaXMubWFyZ2luYWwsIERhdGVVdGlsLmNsb25lKHJhbmdlU3RhcnQpLCBpKSk7XG5cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2FsY0l0ZW1zKGRhdGVSYW5nZTpEYXRlW10sIGJhc2VEYXRlOkRhdGUpOkNhbGVuZGFySXRlbVtdIHtcbiAgICAgICAgcmV0dXJuIGRhdGVSYW5nZS5tYXAoZGF0ZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gbmV3IENhbGVuZGFySXRlbShkYXRlKTtcblxuICAgICAgICAgICAgaXRlbS5pc0Rpc2FibGVkID0gIXRoaXMuZGF0ZUNvbXBhcmVyLmJldHdlZW4oaXRlbS5kYXRlLCB0aGlzLnNlcnZpY2UubWluRGF0ZSwgdGhpcy5zZXJ2aWNlLm1heERhdGUpO1xuICAgICAgICAgICAgaXRlbS5pc0FjdGl2ZSA9IHRoaXMuZGF0ZUNvbXBhcmVyLmVxdWFsKGl0ZW0uZGF0ZSwgdGhpcy5zZXJ2aWNlLnNlbGVjdGVkRGF0ZSk7XG4gICAgICAgICAgICBpdGVtLmlzVG9kYXkgPSB0aGlzLmRhdGVDb21wYXJlci5lcXVhbChpdGVtLmRhdGUsIG5ldyBEYXRlKCkpO1xuICAgICAgICAgICAgaXRlbS5pc1NlbGVjdGFibGUgPSBpdGVtLmlzRGlzYWJsZWQ7XG5cbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJlSXRlbShpdGVtLCBiYXNlRGF0ZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgY29uZmlndXJlSXRlbShpdGVtOkNhbGVuZGFySXRlbSwgYmFzZURhdGU6RGF0ZSk6dm9pZDtcbn1cbiJdfQ==