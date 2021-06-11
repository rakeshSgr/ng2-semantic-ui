/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DateUtil, Util } from "../../../misc/util/internal";
import { CalendarItem } from "../directives/calendar-item";
import { DateComparer } from "../classes/date-comparer";
export class CalendarRange {
    /**
     * @return {?}
     */
    get inRange() {
        return this.items.filter(i => !i.isOutsideRange);
    }
    /**
     * @param {?} start
     * @param {?} dates
     * @param {?} items
     * @param {?} grouped
     * @param {?} comparer
     */
    constructor(start, dates, items, grouped, comparer) {
        this.start = start;
        this.dates = dates;
        this.items = items;
        this.groupedItems = grouped;
        this._comparer = comparer;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    find(item) {
        return this.items.find(i => this._comparer.equal(i.date, item.date));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    findIndex(item) {
        if (!item) {
            return -1;
        }
        return this.items.findIndex(i => this._comparer.equal(i.date, item.date));
    }
    /**
     * @param {?} date
     * @return {?}
     */
    containsDate(date) {
        return !!this.inRange.find(i => this._comparer.equal(i.date, date));
    }
}
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
export class CalendarRangeService {
    /**
     * @return {?}
     */
    get dateComparer() {
        return new DateComparer(this.marginal, this.service.inFinalView);
    }
    /**
     * @return {?}
     */
    get length() {
        return this.rows * this.columns;
    }
    /**
     * @return {?}
     */
    get canMoveNext() {
        const /** @type {?} */ firstItem = this.next.inRange[0];
        if (firstItem && this.service.maxDate) {
            return firstItem.date <= this.service.maxDate;
        }
        return true;
    }
    /**
     * @return {?}
     */
    get canMovePrevious() {
        const /** @type {?} */ lastItem = this.previous.inRange.slice(-1).pop();
        if (lastItem && this.service.minDate) {
            return lastItem.date >= this.service.minDate;
        }
        return true;
    }
    /**
     * @param {?} interval
     * @param {?} rows
     * @param {?} columns
     */
    constructor(interval, rows, columns) {
        this.interval = interval;
        this.marginal = /** @type {?} */ interval + 1;
        this.rows = rows;
        this.columns = columns;
    }
    /**
     * @param {?} service
     * @return {?}
     */
    loadService(service) {
        this.service = service;
        this.refresh();
    }
    /**
     * @return {?}
     */
    refresh() {
        this.current = this.calcRange(this.service.currentDate);
        this.next = this.calcRange(DateUtil.next(this.interval, DateUtil.clone(this.service.currentDate)));
        this.previous = this.calcRange(DateUtil.previous(this.interval, DateUtil.clone(this.service.currentDate)));
    }
    /**
     * @param {?} forwards
     * @return {?}
     */
    move(forwards) {
        if (forwards) {
            return this.moveNext();
        }
        return this.movePrevious();
    }
    /**
     * @return {?}
     */
    moveNext() {
        DateUtil.next(this.interval, this.service.currentDate);
        this.previous = this.current;
        this.current = this.next;
        this.next = this.calcRange(DateUtil.next(this.interval, DateUtil.clone(this.service.currentDate)));
    }
    /**
     * @return {?}
     */
    movePrevious() {
        DateUtil.previous(this.interval, this.service.currentDate);
        this.next = this.current;
        this.current = this.previous;
        this.previous = this.calcRange(DateUtil.previous(this.interval, DateUtil.clone(this.service.currentDate)));
    }
    /**
     * @param {?} forwards
     * @return {?}
     */
    calc(forwards) {
        if (forwards) {
            return this.next;
        }
        return this.previous;
    }
    /**
     * @param {?} startDate
     * @return {?}
     */
    calcRange(startDate) {
        const /** @type {?} */ start = this.calcStart(startDate);
        if (this.service.inFinalView) {
            DateUtil.startOf(this.marginal, start, true);
        }
        const /** @type {?} */ dates = this.calcDates(start);
        const /** @type {?} */ items = this.calcItems(dates, startDate);
        return new CalendarRange(start, dates, items, Util.Array.group(items, this.columns), this.dateComparer);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    calcStart(date) {
        return DateUtil.startOf(this.interval, DateUtil.clone(date));
    }
    /**
     * @param {?} rangeStart
     * @return {?}
     */
    calcDates(rangeStart) {
        return Util.Array
            .range(this.length)
            .map(i => DateUtil.add(this.marginal, DateUtil.clone(rangeStart), i));
    }
    /**
     * @param {?} dateRange
     * @param {?} baseDate
     * @return {?}
     */
    calcItems(dateRange, baseDate) {
        return dateRange.map(date => {
            const /** @type {?} */ item = new CalendarItem(date);
            item.isDisabled = !this.dateComparer.between(item.date, this.service.minDate, this.service.maxDate);
            item.isActive = this.dateComparer.equal(item.date, this.service.selectedDate);
            item.isToday = this.dateComparer.equal(item.date, new Date());
            item.isSelectable = item.isDisabled;
            this.configureItem(item, baseDate);
            return item;
        });
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItcmFuZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGF0ZXBpY2tlci9zZXJ2aWNlcy9jYWxlbmRhci1yYW5nZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXhELE1BQU0sT0FBTyxhQUFhOzs7O1FBSVgsT0FBTztRQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQzs7Ozs7Ozs7O0lBS3JELFlBQVksS0FBVSxFQUFFLEtBQVksRUFBRSxLQUFvQixFQUFFLE9BQXdCLEVBQUUsUUFBcUI7UUFDdkcsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7S0FDN0I7Ozs7O0lBRU0sSUFBSSxDQUFDLElBQWlCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7Ozs7SUFHbEUsU0FBUyxDQUFDLElBQTZCO1FBQzFDLElBQUks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QVUsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM5RSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUVwQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztZQUVuQyxPQUFPLElBQUksQ0FBQztTQUNmLENBQUMsQ0FBQztLQUNOO0NBR0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlUHJlY2lzaW9uLCBEYXRlVXRpbCwgVXRpbCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IENhbGVuZGFySXRlbSB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL2NhbGVuZGFyLWl0ZW1cIjtcbmltcG9ydCB7IENhbGVuZGFyU2VydmljZSB9IGZyb20gXCIuL2NhbGVuZGFyLnNlcnZpY2VcIjtcbmltcG9ydCB7IERhdGVDb21wYXJlciB9IGZyb20gXCIuLi9jbGFzc2VzL2RhdGUtY29tcGFyZXJcIjtcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyUmFuZ2Uge1xuICAgIHB1YmxpYyBzdGFydDpEYXRlO1xuICAgIHB1YmxpYyBkYXRlczpEYXRlW107XG4gICAgcHVibGljIGl0ZW1zOkNhbGVuZGFySXRlbVtdO1xuICAgIHB1YmxpYyBnZXQgaW5SYW5nZSgpOkNhbGVuZGFySXRlbVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKGkgPT4gIWkuaXNPdXRzaWRlUmFuZ2UpO1xuICAgIH1cbiAgICBwdWJsaWMgZ3JvdXBlZEl0ZW1zOkNhbGVuZGFySXRlbVtdW107XG4gICAgcHJpdmF0ZSBfY29tcGFyZXI6RGF0ZUNvbXBhcmVyO1xuXG4gICAgY29uc3RydWN0b3Ioc3RhcnQ6RGF0ZSwgZGF0ZXM6RGF0ZVtdLCBpdGVtczpDYWxlbmRhckl0ZW1bXSwgZ3JvdXBlZDpDYWxlbmRhckl0ZW1bXVtdLCBjb21wYXJlcjpEYXRlQ29tcGFyZXIpIHtcbiAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xuICAgICAgICB0aGlzLmRhdGVzID0gZGF0ZXM7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcbiAgICAgICAgdGhpcy5ncm91cGVkSXRlbXMgPSBncm91cGVkO1xuICAgICAgICB0aGlzLl9jb21wYXJlciA9IGNvbXBhcmVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBmaW5kKGl0ZW06Q2FsZW5kYXJJdGVtKTpDYWxlbmRhckl0ZW0gfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maW5kKGkgPT4gdGhpcy5fY29tcGFyZXIuZXF1YWwoaS5kYXRlLCBpdGVtLmRhdGUpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmluZEluZGV4KGl0ZW06Q2FsZW5kYXJJdGVtIHwgdW5kZWZpbmVkKTpudW1iZXIge1xuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maW5kSW5kZXgoaSA9PiB0aGlzLl9jb21wYXJlci5lcXVhbChpLmRhdGUsIGl0ZW0uZGF0ZSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb250YWluc0RhdGUoZGF0ZTpEYXRlKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5pblJhbmdlLmZpbmQoaSA9PiB0aGlzLl9jb21wYXJlci5lcXVhbChpLmRhdGUsIGRhdGUpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDYWxlbmRhclJhbmdlU2VydmljZSB7XG4gICAgcHVibGljIHByZXZpb3VzOkNhbGVuZGFyUmFuZ2U7XG4gICAgcHVibGljIGN1cnJlbnQ6Q2FsZW5kYXJSYW5nZTtcbiAgICBwdWJsaWMgbmV4dDpDYWxlbmRhclJhbmdlO1xuXG4gICAgcHVibGljIHNlcnZpY2U6Q2FsZW5kYXJTZXJ2aWNlO1xuXG4gICAgcHVibGljIGludGVydmFsOkRhdGVQcmVjaXNpb247XG4gICAgcHVibGljIG1hcmdpbmFsOkRhdGVQcmVjaXNpb247XG4gICAgcHVibGljIHJvd3M6bnVtYmVyO1xuICAgIHB1YmxpYyBjb2x1bW5zOm51bWJlcjtcblxuICAgIHB1YmxpYyBnZXQgZGF0ZUNvbXBhcmVyKCk6RGF0ZUNvbXBhcmVyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlQ29tcGFyZXIodGhpcy5tYXJnaW5hbCwgdGhpcy5zZXJ2aWNlLmluRmluYWxWaWV3KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGxlbmd0aCgpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvd3MgKiB0aGlzLmNvbHVtbnM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBjYW5Nb3ZlTmV4dCgpOmJvb2xlYW4ge1xuICAgICAgICBjb25zdCBmaXJzdEl0ZW0gPSB0aGlzLm5leHQuaW5SYW5nZVswXTtcbiAgICAgICAgaWYgKGZpcnN0SXRlbSAmJiB0aGlzLnNlcnZpY2UubWF4RGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZpcnN0SXRlbS5kYXRlIDw9IHRoaXMuc2VydmljZS5tYXhEYXRlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY2FuTW92ZVByZXZpb3VzKCk6Ym9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGxhc3RJdGVtID0gdGhpcy5wcmV2aW91cy5pblJhbmdlLnNsaWNlKC0xKS5wb3AoKTtcbiAgICAgICAgaWYgKGxhc3RJdGVtICYmIHRoaXMuc2VydmljZS5taW5EYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbGFzdEl0ZW0uZGF0ZSA+PSB0aGlzLnNlcnZpY2UubWluRGF0ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihpbnRlcnZhbDpEYXRlUHJlY2lzaW9uLCByb3dzOm51bWJlciwgY29sdW1uczpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IGludGVydmFsO1xuICAgICAgICB0aGlzLm1hcmdpbmFsID0gaW50ZXJ2YWwgYXMgbnVtYmVyICsgMTtcbiAgICAgICAgdGhpcy5yb3dzID0gcm93cztcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gY29sdW1ucztcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZFNlcnZpY2Uoc2VydmljZTpDYWxlbmRhclNlcnZpY2UpOnZvaWQge1xuICAgICAgICB0aGlzLnNlcnZpY2UgPSBzZXJ2aWNlO1xuXG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWZyZXNoKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMuY2FsY1JhbmdlKHRoaXMuc2VydmljZS5jdXJyZW50RGF0ZSk7XG5cbiAgICAgICAgdGhpcy5uZXh0ID0gdGhpcy5jYWxjUmFuZ2UoRGF0ZVV0aWwubmV4dCh0aGlzLmludGVydmFsLCBEYXRlVXRpbC5jbG9uZSh0aGlzLnNlcnZpY2UuY3VycmVudERhdGUpKSk7XG4gICAgICAgIHRoaXMucHJldmlvdXMgPSB0aGlzLmNhbGNSYW5nZShEYXRlVXRpbC5wcmV2aW91cyh0aGlzLmludGVydmFsLCBEYXRlVXRpbC5jbG9uZSh0aGlzLnNlcnZpY2UuY3VycmVudERhdGUpKSk7XG4gICAgfVxuXG4gICAgcHVibGljIG1vdmUoZm9yd2FyZHM6Ym9vbGVhbik6dm9pZCB7XG4gICAgICAgIGlmIChmb3J3YXJkcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW92ZU5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tb3ZlUHJldmlvdXMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbW92ZU5leHQoKTp2b2lkIHtcbiAgICAgICAgRGF0ZVV0aWwubmV4dCh0aGlzLmludGVydmFsLCB0aGlzLnNlcnZpY2UuY3VycmVudERhdGUpO1xuICAgICAgICB0aGlzLnByZXZpb3VzID0gdGhpcy5jdXJyZW50O1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLm5leHQ7XG4gICAgICAgIHRoaXMubmV4dCA9IHRoaXMuY2FsY1JhbmdlKERhdGVVdGlsLm5leHQodGhpcy5pbnRlcnZhbCwgRGF0ZVV0aWwuY2xvbmUodGhpcy5zZXJ2aWNlLmN1cnJlbnREYXRlKSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBtb3ZlUHJldmlvdXMoKTp2b2lkIHtcbiAgICAgICAgRGF0ZVV0aWwucHJldmlvdXModGhpcy5pbnRlcnZhbCwgdGhpcy5zZXJ2aWNlLmN1cnJlbnREYXRlKTtcbiAgICAgICAgdGhpcy5uZXh0ID0gdGhpcy5jdXJyZW50O1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnByZXZpb3VzO1xuICAgICAgICB0aGlzLnByZXZpb3VzID0gdGhpcy5jYWxjUmFuZ2UoRGF0ZVV0aWwucHJldmlvdXModGhpcy5pbnRlcnZhbCwgRGF0ZVV0aWwuY2xvbmUodGhpcy5zZXJ2aWNlLmN1cnJlbnREYXRlKSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjYWxjKGZvcndhcmRzOmJvb2xlYW4pOkNhbGVuZGFyUmFuZ2Uge1xuICAgICAgICBpZiAoZm9yd2FyZHMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucHJldmlvdXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWxjUmFuZ2Uoc3RhcnREYXRlOkRhdGUpOkNhbGVuZGFyUmFuZ2Uge1xuICAgICAgICBjb25zdCBzdGFydCA9IHRoaXMuY2FsY1N0YXJ0KHN0YXJ0RGF0ZSk7XG4gICAgICAgIGlmICh0aGlzLnNlcnZpY2UuaW5GaW5hbFZpZXcpIHtcbiAgICAgICAgICAgIERhdGVVdGlsLnN0YXJ0T2YodGhpcy5tYXJnaW5hbCwgc3RhcnQsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGVzID0gdGhpcy5jYWxjRGF0ZXMoc3RhcnQpO1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuY2FsY0l0ZW1zKGRhdGVzLCBzdGFydERhdGUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgQ2FsZW5kYXJSYW5nZShzdGFydCwgZGF0ZXMsIGl0ZW1zLCBVdGlsLkFycmF5Lmdyb3VwKGl0ZW1zLCB0aGlzLmNvbHVtbnMpLCB0aGlzLmRhdGVDb21wYXJlcik7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNhbGNTdGFydChkYXRlOkRhdGUpOkRhdGUge1xuICAgICAgICByZXR1cm4gRGF0ZVV0aWwuc3RhcnRPZih0aGlzLmludGVydmFsLCBEYXRlVXRpbC5jbG9uZShkYXRlKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNhbGNEYXRlcyhyYW5nZVN0YXJ0OkRhdGUpOkRhdGVbXSB7XG4gICAgICAgIHJldHVybiBVdGlsLkFycmF5XG4gICAgICAgICAgICAucmFuZ2UodGhpcy5sZW5ndGgpXG4gICAgICAgICAgICAubWFwKGkgPT4gRGF0ZVV0aWwuYWRkKHRoaXMubWFyZ2luYWwsIERhdGVVdGlsLmNsb25lKHJhbmdlU3RhcnQpLCBpKSk7XG5cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2FsY0l0ZW1zKGRhdGVSYW5nZTpEYXRlW10sIGJhc2VEYXRlOkRhdGUpOkNhbGVuZGFySXRlbVtdIHtcbiAgICAgICAgcmV0dXJuIGRhdGVSYW5nZS5tYXAoZGF0ZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gbmV3IENhbGVuZGFySXRlbShkYXRlKTtcblxuICAgICAgICAgICAgaXRlbS5pc0Rpc2FibGVkID0gIXRoaXMuZGF0ZUNvbXBhcmVyLmJldHdlZW4oaXRlbS5kYXRlLCB0aGlzLnNlcnZpY2UubWluRGF0ZSwgdGhpcy5zZXJ2aWNlLm1heERhdGUpO1xuICAgICAgICAgICAgaXRlbS5pc0FjdGl2ZSA9IHRoaXMuZGF0ZUNvbXBhcmVyLmVxdWFsKGl0ZW0uZGF0ZSwgdGhpcy5zZXJ2aWNlLnNlbGVjdGVkRGF0ZSk7XG4gICAgICAgICAgICBpdGVtLmlzVG9kYXkgPSB0aGlzLmRhdGVDb21wYXJlci5lcXVhbChpdGVtLmRhdGUsIG5ldyBEYXRlKCkpO1xuICAgICAgICAgICAgaXRlbS5pc1NlbGVjdGFibGUgPSBpdGVtLmlzRGlzYWJsZWQ7XG5cbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJlSXRlbShpdGVtLCBiYXNlRGF0ZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgY29uZmlndXJlSXRlbShpdGVtOkNhbGVuZGFySXRlbSwgYmFzZURhdGU6RGF0ZSk6dm9pZDtcbn1cbiJdfQ==