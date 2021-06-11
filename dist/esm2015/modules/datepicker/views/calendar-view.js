/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Input, QueryList, ViewChildren } from "@angular/core";
import { KeyCode } from "../../../misc/util/internal";
import { SuiCalendarItem } from "../directives/calendar-item";
import { CalendarService } from "../services/calendar.service";
/** @enum {number} */
const CalendarViewType = {
    Year: 0,
    Month: 1,
    Date: 2,
    Hour: 3,
    Minute: 4,
};
export { CalendarViewType };
CalendarViewType[CalendarViewType.Year] = "Year";
CalendarViewType[CalendarViewType.Month] = "Month";
CalendarViewType[CalendarViewType.Date] = "Date";
CalendarViewType[CalendarViewType.Hour] = "Hour";
CalendarViewType[CalendarViewType.Minute] = "Minute";
/**
 * @abstract
 */
export class CalendarView {
    /**
     * @param {?} renderer
     * @param {?} viewType
     * @param {?} ranges
     */
    constructor(renderer, viewType, ranges) {
        this._type = viewType;
        this.ranges = ranges;
        this._documentKeyDownListener = renderer.listen("document", "keydown", (e) => this.onDocumentKeyDown(e));
    }
    /**
     * @param {?} service
     * @return {?}
     */
    set service(service) {
        this._service = service;
        this.ranges.loadService(service);
        this.service.onManualUpdate = () => {
            this.ranges.refresh();
            delete this._highlightedItem;
            this.autoHighlight();
        };
    }
    /**
     * @return {?}
     */
    get service() {
        return this._service;
    }
    /**
     * @return {?}
     */
    get currentDate() {
        return this.service.currentDate;
    }
    /**
     * @return {?}
     */
    get selectedDate() {
        return this.service.selectedDate;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    setDate(item) {
        this.service.changeDate(item.date, this._type);
    }
    /**
     * @return {?}
     */
    zoomOut() {
        this.service.zoomOut(this._type);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._renderedItems.changes.subscribe(() => this.onRenderedItemsChanged());
        this.onRenderedItemsChanged();
    }
    /**
     * @return {?}
     */
    onRenderedItemsChanged() {
        this._renderedItems.forEach(i => i.onFocussed.subscribe((hasFocus) => {
            if (hasFocus) {
                this.highlightItem(i.item);
            }
        }));
        this.autoHighlight();
        this.highlightItem(this._highlightedItem);
    }
    /**
     * @return {?}
     */
    autoHighlight() {
        let /** @type {?} */ date = this.selectedDate && this.ranges.current.containsDate(this.selectedDate) ? this.selectedDate : this.currentDate;
        if (this._highlightedItem && this.ranges.current.containsDate(this._highlightedItem.date)) {
            date = this._highlightedItem.date;
        }
        const /** @type {?} */ initiallyHighlighted = this.ranges.current.items.find(i => this.ranges.dateComparer.equal(i.date, date));
        if (initiallyHighlighted && !initiallyHighlighted.isDisabled) {
            this._highlightedItem = initiallyHighlighted;
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    highlightItem(item) {
        if (item) {
            this._renderedItems.forEach(i => i.hasFocus = false);
            const /** @type {?} */ rendered = this._renderedItems.find(ri => ri.item === item);
            if (rendered && !rendered.hasFocus) {
                rendered.hasFocus = true;
                rendered.changeDetector.detectChanges();
            }
            this._highlightedItem = item;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onDocumentKeyDown(e) {
        if (this._highlightedItem && e.keyCode === KeyCode.Enter) {
            this.setDate(this._highlightedItem);
            return;
        }
        if (!this._highlightedItem) {
            this.autoHighlight();
        }
        const /** @type {?} */ index = this.ranges.current.findIndex(this._highlightedItem);
        let /** @type {?} */ isMovingForward = true;
        let /** @type {?} */ delta = 0;
        switch (e.keyCode) {
            case KeyCode.Right:
                delta += 1;
                break;
            case KeyCode.Left:
                delta -= 1;
                isMovingForward = false;
                break;
            case KeyCode.Down:
                delta += this.ranges.columns;
                break;
            case KeyCode.Up:
                delta -= this.ranges.columns;
                isMovingForward = false;
                break;
            default:
                return;
        }
        // Stop these keypresses being captured elsewhere.
        e.preventDefault();
        let /** @type {?} */ nextItem = this.ranges.current.items[index + delta];
        if (nextItem && nextItem.isDisabled) {
            return;
        }
        if (nextItem && !nextItem.isOutsideRange) {
            return this.highlightItem(nextItem);
        }
        if (nextItem && nextItem.isOutsideRange) {
            if (index + delta >= this.ranges.current.inRange.length) {
                isMovingForward = true;
            }
        }
        if (!nextItem) {
            let /** @type {?} */ adjustedIndex = this.ranges.current.findIndex(this._highlightedItem);
            const /** @type {?} */ nextItems = this.ranges.calc(isMovingForward).inRange;
            if (isMovingForward) {
                adjustedIndex -= this.ranges.current.inRange.length;
            }
            else {
                adjustedIndex += nextItems.length;
            }
            nextItem = nextItems[adjustedIndex + delta];
            if (nextItem.isDisabled) {
                return;
            }
        }
        this.ranges.move(isMovingForward);
        this._highlightedItem = this.ranges.current.find(nextItem);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._documentKeyDownListener();
    }
}
CalendarView.propDecorators = {
    _renderedItems: [{ type: ViewChildren, args: [SuiCalendarItem,] }],
    service: [{ type: Input }]
};
function CalendarView_tsickle_Closure_declarations() {
    /** @type {?} */
    CalendarView.prototype._type;
    /** @type {?} */
    CalendarView.prototype._service;
    /** @type {?} */
    CalendarView.prototype._renderedItems;
    /** @type {?} */
    CalendarView.prototype._highlightedItem;
    /** @type {?} */
    CalendarView.prototype.ranges;
    /** @type {?} */
    CalendarView.prototype._documentKeyDownListener;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItdmlldy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGF0ZXBpY2tlci92aWV3cy9jYWxlbmRhci12aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQXFELE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RCxPQUFPLEVBQWdCLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWS9ELE1BQU0sT0FBZ0IsWUFBWTs7Ozs7O0lBcUM5QixZQUFZLFFBQWtCLEVBQUUsUUFBeUIsRUFBRSxNQUEyQjtRQUNsRixJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixJQUFJLENBQUMsd0JBQXdCLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBZSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMxSDs7Ozs7SUFsQ0QsSUFDVyxPQUFPLENBQUMsT0FBdUI7UUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsR0FBRyxFQUFFO1lBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFdEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDN0IsSUFBSSxDQUFD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QUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozs7SUFHeEQsV0FBVztRQUNkLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDOzs7OzZCQXpLbkMsWUFBWSxTQUFDLGVBQWU7c0JBSTVCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgUXVlcnlMaXN0LCBWaWV3Q2hpbGRyZW4sIEFmdGVyVmlld0luaXQsIEhvc3RMaXN0ZW5lciwgUmVuZGVyZXIyLCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgS2V5Q29kZSB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IENhbGVuZGFySXRlbSwgU3VpQ2FsZW5kYXJJdGVtIH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvY2FsZW5kYXItaXRlbVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NhbGVuZGFyLnNlcnZpY2VcIjtcbmltcG9ydCB7IENhbGVuZGFyUmFuZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NhbGVuZGFyLXJhbmdlLnNlcnZpY2VcIjtcblxuZXhwb3J0IGVudW0gQ2FsZW5kYXJWaWV3VHlwZSB7XG4gICAgWWVhciA9IDAsXG4gICAgTW9udGggPSAxLFxuICAgIERhdGUgPSAyLFxuICAgIEhvdXIgPSAzLFxuICAgIE1pbnV0ZSA9IDRcbn1cbmV4cG9ydCB0eXBlIENhbGVuZGFyVmlld1Jlc3VsdCA9IFtEYXRlLCBDYWxlbmRhclZpZXdUeXBlXTtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENhbGVuZGFyVmlldyBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBfdHlwZTpDYWxlbmRhclZpZXdUeXBlO1xuICAgIHByaXZhdGUgX3NlcnZpY2U6Q2FsZW5kYXJTZXJ2aWNlO1xuXG4gICAgQFZpZXdDaGlsZHJlbihTdWlDYWxlbmRhckl0ZW0pXG4gICAgcHJpdmF0ZSBfcmVuZGVyZWRJdGVtczpRdWVyeUxpc3Q8U3VpQ2FsZW5kYXJJdGVtPjtcbiAgICBwcml2YXRlIF9oaWdobGlnaHRlZEl0ZW0/OkNhbGVuZGFySXRlbTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBzZXJ2aWNlKHNlcnZpY2U6Q2FsZW5kYXJTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX3NlcnZpY2UgPSBzZXJ2aWNlO1xuICAgICAgICB0aGlzLnJhbmdlcy5sb2FkU2VydmljZShzZXJ2aWNlKTtcblxuICAgICAgICB0aGlzLnNlcnZpY2Uub25NYW51YWxVcGRhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJhbmdlcy5yZWZyZXNoKCk7XG5cbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9oaWdobGlnaHRlZEl0ZW07XG4gICAgICAgICAgICB0aGlzLmF1dG9IaWdobGlnaHQoKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHNlcnZpY2UoKTpDYWxlbmRhclNlcnZpY2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VydmljZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmFuZ2VzOkNhbGVuZGFyUmFuZ2VTZXJ2aWNlO1xuXG4gICAgcHVibGljIGdldCBjdXJyZW50RGF0ZSgpOkRhdGUge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmN1cnJlbnREYXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWREYXRlKCk6RGF0ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2Uuc2VsZWN0ZWREYXRlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RvY3VtZW50S2V5RG93bkxpc3RlbmVyOigpID0+IHZvaWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsIHZpZXdUeXBlOkNhbGVuZGFyVmlld1R5cGUsIHJhbmdlczpDYWxlbmRhclJhbmdlU2VydmljZSkge1xuICAgICAgICB0aGlzLl90eXBlID0gdmlld1R5cGU7XG4gICAgICAgIHRoaXMucmFuZ2VzID0gcmFuZ2VzO1xuXG4gICAgICAgIHRoaXMuX2RvY3VtZW50S2V5RG93bkxpc3RlbmVyID0gcmVuZGVyZXIubGlzdGVuKFwiZG9jdW1lbnRcIiwgXCJrZXlkb3duXCIsIChlOktleWJvYXJkRXZlbnQpID0+IHRoaXMub25Eb2N1bWVudEtleURvd24oZSkpO1xuICAgIH1cblxuICAgIC8vIFRlbXBsYXRlIE1ldGhvZHNcblxuICAgIHB1YmxpYyBzZXREYXRlKGl0ZW06Q2FsZW5kYXJJdGVtKTp2b2lkIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmNoYW5nZURhdGUoaXRlbS5kYXRlLCB0aGlzLl90eXBlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgem9vbU91dCgpOnZvaWQge1xuICAgICAgICB0aGlzLnNlcnZpY2Uuem9vbU91dCh0aGlzLl90eXBlKTtcbiAgICB9XG5cbiAgICAvLyBLZXlib2FyZCBDb250cm9sXG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVkSXRlbXMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vblJlbmRlcmVkSXRlbXNDaGFuZ2VkKCkpO1xuICAgICAgICB0aGlzLm9uUmVuZGVyZWRJdGVtc0NoYW5nZWQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uUmVuZGVyZWRJdGVtc0NoYW5nZWQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZWRJdGVtcy5mb3JFYWNoKGkgPT5cbiAgICAgICAgICAgIGkub25Gb2N1c3NlZC5zdWJzY3JpYmUoKGhhc0ZvY3VzOmJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaGFzRm9jdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWdobGlnaHRJdGVtKGkuaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMuYXV0b0hpZ2hsaWdodCgpO1xuICAgICAgICB0aGlzLmhpZ2hsaWdodEl0ZW0odGhpcy5faGlnaGxpZ2h0ZWRJdGVtKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGF1dG9IaWdobGlnaHQoKTp2b2lkIHtcbiAgICAgICAgbGV0IGRhdGUgPSB0aGlzLnNlbGVjdGVkRGF0ZSAmJiB0aGlzLnJhbmdlcy5jdXJyZW50LmNvbnRhaW5zRGF0ZSh0aGlzLnNlbGVjdGVkRGF0ZSkgPyB0aGlzLnNlbGVjdGVkRGF0ZSA6IHRoaXMuY3VycmVudERhdGU7XG4gICAgICAgIGlmICh0aGlzLl9oaWdobGlnaHRlZEl0ZW0gJiYgdGhpcy5yYW5nZXMuY3VycmVudC5jb250YWluc0RhdGUodGhpcy5faGlnaGxpZ2h0ZWRJdGVtLmRhdGUpKSB7XG4gICAgICAgICAgICBkYXRlID0gdGhpcy5faGlnaGxpZ2h0ZWRJdGVtLmRhdGU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbml0aWFsbHlIaWdobGlnaHRlZCA9IHRoaXMucmFuZ2VzLmN1cnJlbnQuaXRlbXMuZmluZChpID0+IHRoaXMucmFuZ2VzLmRhdGVDb21wYXJlci5lcXVhbChpLmRhdGUsIGRhdGUpKTtcbiAgICAgICAgaWYgKGluaXRpYWxseUhpZ2hsaWdodGVkICYmICFpbml0aWFsbHlIaWdobGlnaHRlZC5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9oaWdobGlnaHRlZEl0ZW0gPSBpbml0aWFsbHlIaWdobGlnaHRlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaGlnaGxpZ2h0SXRlbShpdGVtOkNhbGVuZGFySXRlbSB8IHVuZGVmaW5lZCk6dm9pZCB7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlZEl0ZW1zLmZvckVhY2goaSA9PiBpLmhhc0ZvY3VzID0gZmFsc2UpO1xuICAgICAgICAgICAgY29uc3QgcmVuZGVyZWQgPSB0aGlzLl9yZW5kZXJlZEl0ZW1zLmZpbmQocmkgPT4gcmkuaXRlbSA9PT0gaXRlbSk7XG4gICAgICAgICAgICBpZiAocmVuZGVyZWQgJiYgIXJlbmRlcmVkLmhhc0ZvY3VzKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyZWQuaGFzRm9jdXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJlbmRlcmVkLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5faGlnaGxpZ2h0ZWRJdGVtID0gaXRlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25Eb2N1bWVudEtleURvd24oZTpLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2hpZ2hsaWdodGVkSXRlbSAmJiBlLmtleUNvZGUgPT09IEtleUNvZGUuRW50ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0ZSh0aGlzLl9oaWdobGlnaHRlZEl0ZW0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl9oaWdobGlnaHRlZEl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuYXV0b0hpZ2hsaWdodCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnJhbmdlcy5jdXJyZW50LmZpbmRJbmRleCh0aGlzLl9oaWdobGlnaHRlZEl0ZW0pO1xuICAgICAgICBsZXQgaXNNb3ZpbmdGb3J3YXJkID0gdHJ1ZTtcbiAgICAgICAgbGV0IGRlbHRhID0gMDtcblxuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlJpZ2h0OlxuICAgICAgICAgICAgICAgIGRlbHRhICs9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuTGVmdDpcbiAgICAgICAgICAgICAgICBkZWx0YSAtPSAxO1xuICAgICAgICAgICAgICAgIGlzTW92aW5nRm9yd2FyZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkRvd246XG4gICAgICAgICAgICAgICAgZGVsdGEgKz0gdGhpcy5yYW5nZXMuY29sdW1ucztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5VcDpcbiAgICAgICAgICAgICAgICBkZWx0YSAtPSB0aGlzLnJhbmdlcy5jb2x1bW5zO1xuICAgICAgICAgICAgICAgIGlzTW92aW5nRm9yd2FyZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdG9wIHRoZXNlIGtleXByZXNzZXMgYmVpbmcgY2FwdHVyZWQgZWxzZXdoZXJlLlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgbGV0IG5leHRJdGVtID0gdGhpcy5yYW5nZXMuY3VycmVudC5pdGVtc1tpbmRleCArIGRlbHRhXTtcblxuICAgICAgICBpZiAobmV4dEl0ZW0gJiYgbmV4dEl0ZW0uaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5leHRJdGVtICYmICFuZXh0SXRlbS5pc091dHNpZGVSYW5nZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGlnaGxpZ2h0SXRlbShuZXh0SXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV4dEl0ZW0gJiYgbmV4dEl0ZW0uaXNPdXRzaWRlUmFuZ2UpIHtcbiAgICAgICAgICAgIGlmIChpbmRleCArIGRlbHRhID49IHRoaXMucmFuZ2VzLmN1cnJlbnQuaW5SYW5nZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpc01vdmluZ0ZvcndhcmQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFuZXh0SXRlbSkge1xuICAgICAgICAgICAgbGV0IGFkanVzdGVkSW5kZXggPSB0aGlzLnJhbmdlcy5jdXJyZW50LmZpbmRJbmRleCh0aGlzLl9oaWdobGlnaHRlZEl0ZW0pO1xuXG4gICAgICAgICAgICBjb25zdCBuZXh0SXRlbXMgPSB0aGlzLnJhbmdlcy5jYWxjKGlzTW92aW5nRm9yd2FyZCkuaW5SYW5nZTtcblxuICAgICAgICAgICAgaWYgKGlzTW92aW5nRm9yd2FyZCkge1xuICAgICAgICAgICAgICAgIGFkanVzdGVkSW5kZXggLT0gdGhpcy5yYW5nZXMuY3VycmVudC5pblJhbmdlLmxlbmd0aDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRqdXN0ZWRJbmRleCArPSBuZXh0SXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXh0SXRlbSA9IG5leHRJdGVtc1thZGp1c3RlZEluZGV4ICsgZGVsdGFdO1xuXG4gICAgICAgICAgICBpZiAobmV4dEl0ZW0uaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmFuZ2VzLm1vdmUoaXNNb3ZpbmdGb3J3YXJkKTtcbiAgICAgICAgdGhpcy5faGlnaGxpZ2h0ZWRJdGVtID0gdGhpcy5yYW5nZXMuY3VycmVudC5maW5kKG5leHRJdGVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fZG9jdW1lbnRLZXlEb3duTGlzdGVuZXIoKTtcbiAgICB9XG59XG4iXX0=