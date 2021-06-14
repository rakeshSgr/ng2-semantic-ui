import { __decorate, __metadata } from "tslib";
import { Input, QueryList, ViewChildren } from "@angular/core";
import { KeyCode } from "../../../misc/util/internal";
import { SuiCalendarItem } from "../directives/calendar-item";
import { CalendarService } from "../services/calendar.service";
export var CalendarViewType;
(function (CalendarViewType) {
    CalendarViewType[CalendarViewType["Year"] = 0] = "Year";
    CalendarViewType[CalendarViewType["Month"] = 1] = "Month";
    CalendarViewType[CalendarViewType["Date"] = 2] = "Date";
    CalendarViewType[CalendarViewType["Hour"] = 3] = "Hour";
    CalendarViewType[CalendarViewType["Minute"] = 4] = "Minute";
})(CalendarViewType || (CalendarViewType = {}));
var CalendarView = /** @class */ (function () {
    function CalendarView(renderer, viewType, ranges) {
        var _this = this;
        this._type = viewType;
        this.ranges = ranges;
        this._documentKeyDownListener = renderer.listen("document", "keydown", function (e) { return _this.onDocumentKeyDown(e); });
    }
    Object.defineProperty(CalendarView.prototype, "service", {
        get: function () {
            return this._service;
        },
        set: function (service) {
            var _this = this;
            this._service = service;
            this.ranges.loadService(service);
            this.service.onManualUpdate = function () {
                _this.ranges.refresh();
                delete _this._highlightedItem;
                _this.autoHighlight();
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarView.prototype, "currentDate", {
        get: function () {
            return this.service.currentDate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarView.prototype, "selectedDate", {
        get: function () {
            return this.service.selectedDate;
        },
        enumerable: true,
        configurable: true
    });
    // Template Methods
    CalendarView.prototype.setDate = function (item) {
        this.service.changeDate(item.date, this._type);
    };
    CalendarView.prototype.zoomOut = function () {
        this.service.zoomOut(this._type);
    };
    // Keyboard Control
    CalendarView.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._renderedItems.changes.subscribe(function () { return _this.onRenderedItemsChanged(); });
        this.onRenderedItemsChanged();
    };
    CalendarView.prototype.onRenderedItemsChanged = function () {
        var _this = this;
        this._renderedItems.forEach(function (i) {
            return i.onFocussed.subscribe(function (hasFocus) {
                if (hasFocus) {
                    _this.highlightItem(i.item);
                }
            });
        });
        this.autoHighlight();
        this.highlightItem(this._highlightedItem);
    };
    CalendarView.prototype.autoHighlight = function () {
        var _this = this;
        var date = this.selectedDate && this.ranges.current.containsDate(this.selectedDate) ? this.selectedDate : this.currentDate;
        if (this._highlightedItem && this.ranges.current.containsDate(this._highlightedItem.date)) {
            date = this._highlightedItem.date;
        }
        var initiallyHighlighted = this.ranges.current.items.find(function (i) { return _this.ranges.dateComparer.equal(i.date, date); });
        if (initiallyHighlighted && !initiallyHighlighted.isDisabled) {
            this._highlightedItem = initiallyHighlighted;
        }
    };
    CalendarView.prototype.highlightItem = function (item) {
        if (item) {
            this._renderedItems.forEach(function (i) { return i.hasFocus = false; });
            var rendered = this._renderedItems.find(function (ri) { return ri.item === item; });
            if (rendered && !rendered.hasFocus) {
                rendered.hasFocus = true;
                rendered.changeDetector.detectChanges();
            }
            this._highlightedItem = item;
        }
    };
    CalendarView.prototype.onDocumentKeyDown = function (e) {
        if (this._highlightedItem && e.keyCode === KeyCode.Enter) {
            this.setDate(this._highlightedItem);
            return;
        }
        if (!this._highlightedItem) {
            this.autoHighlight();
        }
        var index = this.ranges.current.findIndex(this._highlightedItem);
        var isMovingForward = true;
        var delta = 0;
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
        var nextItem = this.ranges.current.items[index + delta];
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
            var adjustedIndex = this.ranges.current.findIndex(this._highlightedItem);
            var nextItems = this.ranges.calc(isMovingForward).inRange;
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
    };
    CalendarView.prototype.ngOnDestroy = function () {
        this._documentKeyDownListener();
    };
    __decorate([
        ViewChildren(SuiCalendarItem),
        __metadata("design:type", QueryList)
    ], CalendarView.prototype, "_renderedItems", void 0);
    __decorate([
        Input(),
        __metadata("design:type", CalendarService),
        __metadata("design:paramtypes", [CalendarService])
    ], CalendarView.prototype, "service", null);
    return CalendarView;
}());
export { CalendarView };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItdmlldy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGF0ZXBpY2tlci92aWV3cy9jYWxlbmRhci12aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQWdFLE1BQU0sZUFBZSxDQUFDO0FBQzdILE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RCxPQUFPLEVBQWdCLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUcvRCxNQUFNLENBQU4sSUFBWSxnQkFNWDtBQU5ELFdBQVksZ0JBQWdCO0lBQ3hCLHVEQUFRLENBQUE7SUFDUix5REFBUyxDQUFBO0lBQ1QsdURBQVEsQ0FBQTtJQUNSLHVEQUFRLENBQUE7SUFDUiwyREFBVSxDQUFBO0FBQ2QsQ0FBQyxFQU5XLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFNM0I7QUFHRDtJQXFDSSxzQkFBWSxRQUFrQixFQUFFLFFBQXlCLEVBQUUsTUFBMkI7UUFBdEYsaUJBS0M7UUFKRyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixJQUFJLENBQUMsd0JBQXdCLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQUMsQ0FBZSxJQUFLLE9BQUEsS0FBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7SUFDM0gsQ0FBQztJQWpDRCxzQkFBVyxpQ0FBTzthQVlsQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDO2FBZEQsVUFBbUIsT0FBdUI7WUFEMUMsaUJBV0M7WUFURyxJQUFJLENB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QUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFFNUQsSUFBSSxlQUFlLEVBQUU7Z0JBQ2pCLGFBQWEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2FBQ3ZEO2lCQUFNO2dCQUNILGFBQWEsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDO2FBQ3JDO1lBRUQsUUFBUSxHQUFHLFNBQVMsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFFNUMsSUFBSSxRQUFRLENBQUMsVUFBVSxFQUFFO2dCQUNyQixPQUFPO2FBQ1Y7U0FDSjtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVNLGtDQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDcEMsQ0FBQztJQXpLRDtRQURDLFlBQVksQ0FBQyxlQUFlLENBQUM7a0NBQ1AsU0FBUzt3REFBa0I7SUFJbEQ7UUFEQyxLQUFLLEVBQUU7a0NBQ21CLGVBQWU7eUNBQWYsZUFBZTsrQ0FVekM7SUE0SkwsbUJBQUM7Q0FBQSxBQS9LRCxJQStLQztTQS9LcUIsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiwgQWZ0ZXJWaWV3SW5pdCwgSG9zdExpc3RlbmVyLCBSZW5kZXJlcjIsIE9uRGVzdHJveSwgRGlyZWN0aXZlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEtleUNvZGUgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBDYWxlbmRhckl0ZW0sIFN1aUNhbGVuZGFySXRlbSB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL2NhbGVuZGFyLWl0ZW1cIjtcbmltcG9ydCB7IENhbGVuZGFyU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDYWxlbmRhclJhbmdlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jYWxlbmRhci1yYW5nZS5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBlbnVtIENhbGVuZGFyVmlld1R5cGUge1xuICAgIFllYXIgPSAwLFxuICAgIE1vbnRoID0gMSxcbiAgICBEYXRlID0gMixcbiAgICBIb3VyID0gMyxcbiAgICBNaW51dGUgPSA0XG59XG5leHBvcnQgdHlwZSBDYWxlbmRhclZpZXdSZXN1bHQgPSBbRGF0ZSwgQ2FsZW5kYXJWaWV3VHlwZV07XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDYWxlbmRhclZpZXcgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgX3R5cGU6Q2FsZW5kYXJWaWV3VHlwZTtcbiAgICBwcml2YXRlIF9zZXJ2aWNlOkNhbGVuZGFyU2VydmljZTtcblxuICAgIEBWaWV3Q2hpbGRyZW4oU3VpQ2FsZW5kYXJJdGVtKVxuICAgIHByaXZhdGUgX3JlbmRlcmVkSXRlbXM6UXVlcnlMaXN0PFN1aUNhbGVuZGFySXRlbT47XG4gICAgcHJpdmF0ZSBfaGlnaGxpZ2h0ZWRJdGVtPzpDYWxlbmRhckl0ZW07XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgc2VydmljZShzZXJ2aWNlOkNhbGVuZGFyU2VydmljZSkge1xuICAgICAgICB0aGlzLl9zZXJ2aWNlID0gc2VydmljZTtcbiAgICAgICAgdGhpcy5yYW5nZXMubG9hZFNlcnZpY2Uoc2VydmljZSk7XG5cbiAgICAgICAgdGhpcy5zZXJ2aWNlLm9uTWFudWFsVXBkYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yYW5nZXMucmVmcmVzaCgpO1xuXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5faGlnaGxpZ2h0ZWRJdGVtO1xuICAgICAgICAgICAgdGhpcy5hdXRvSGlnaGxpZ2h0KCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzZXJ2aWNlKCk6Q2FsZW5kYXJTZXJ2aWNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZpY2U7XG4gICAgfVxuXG4gICAgcHVibGljIHJhbmdlczpDYWxlbmRhclJhbmdlU2VydmljZTtcblxuICAgIHB1YmxpYyBnZXQgY3VycmVudERhdGUoKTpEYXRlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5jdXJyZW50RGF0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGVkRGF0ZSgpOkRhdGUgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLnNlbGVjdGVkRGF0ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9kb2N1bWVudEtleURvd25MaXN0ZW5lcjooKSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyLCB2aWV3VHlwZTpDYWxlbmRhclZpZXdUeXBlLCByYW5nZXM6Q2FsZW5kYXJSYW5nZVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fdHlwZSA9IHZpZXdUeXBlO1xuICAgICAgICB0aGlzLnJhbmdlcyA9IHJhbmdlcztcblxuICAgICAgICB0aGlzLl9kb2N1bWVudEtleURvd25MaXN0ZW5lciA9IHJlbmRlcmVyLmxpc3RlbihcImRvY3VtZW50XCIsIFwia2V5ZG93blwiLCAoZTpLZXlib2FyZEV2ZW50KSA9PiB0aGlzLm9uRG9jdW1lbnRLZXlEb3duKGUpKTtcbiAgICB9XG5cbiAgICAvLyBUZW1wbGF0ZSBNZXRob2RzXG5cbiAgICBwdWJsaWMgc2V0RGF0ZShpdGVtOkNhbGVuZGFySXRlbSk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VydmljZS5jaGFuZ2VEYXRlKGl0ZW0uZGF0ZSwgdGhpcy5fdHlwZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHpvb21PdXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnpvb21PdXQodGhpcy5fdHlwZSk7XG4gICAgfVxuXG4gICAgLy8gS2V5Ym9hcmQgQ29udHJvbFxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOnZvaWQge1xuICAgICAgICB0aGlzLl9yZW5kZXJlZEl0ZW1zLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMub25SZW5kZXJlZEl0ZW1zQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy5vblJlbmRlcmVkSXRlbXNDaGFuZ2VkKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblJlbmRlcmVkSXRlbXNDaGFuZ2VkKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVkSXRlbXMuZm9yRWFjaChpID0+XG4gICAgICAgICAgICBpLm9uRm9jdXNzZWQuc3Vic2NyaWJlKChoYXNGb2N1czpib29sZWFuKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGhhc0ZvY3VzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0SXRlbShpLml0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLmF1dG9IaWdobGlnaHQoKTtcbiAgICAgICAgdGhpcy5oaWdobGlnaHRJdGVtKHRoaXMuX2hpZ2hsaWdodGVkSXRlbSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhdXRvSGlnaGxpZ2h0KCk6dm9pZCB7XG4gICAgICAgIGxldCBkYXRlID0gdGhpcy5zZWxlY3RlZERhdGUgJiYgdGhpcy5yYW5nZXMuY3VycmVudC5jb250YWluc0RhdGUodGhpcy5zZWxlY3RlZERhdGUpID8gdGhpcy5zZWxlY3RlZERhdGUgOiB0aGlzLmN1cnJlbnREYXRlO1xuICAgICAgICBpZiAodGhpcy5faGlnaGxpZ2h0ZWRJdGVtICYmIHRoaXMucmFuZ2VzLmN1cnJlbnQuY29udGFpbnNEYXRlKHRoaXMuX2hpZ2hsaWdodGVkSXRlbS5kYXRlKSkge1xuICAgICAgICAgICAgZGF0ZSA9IHRoaXMuX2hpZ2hsaWdodGVkSXRlbS5kYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW5pdGlhbGx5SGlnaGxpZ2h0ZWQgPSB0aGlzLnJhbmdlcy5jdXJyZW50Lml0ZW1zLmZpbmQoaSA9PiB0aGlzLnJhbmdlcy5kYXRlQ29tcGFyZXIuZXF1YWwoaS5kYXRlLCBkYXRlKSk7XG4gICAgICAgIGlmIChpbml0aWFsbHlIaWdobGlnaHRlZCAmJiAhaW5pdGlhbGx5SGlnaGxpZ2h0ZWQuaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5faGlnaGxpZ2h0ZWRJdGVtID0gaW5pdGlhbGx5SGlnaGxpZ2h0ZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGhpZ2hsaWdodEl0ZW0oaXRlbTpDYWxlbmRhckl0ZW0gfCB1bmRlZmluZWQpOnZvaWQge1xuICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZWRJdGVtcy5mb3JFYWNoKGkgPT4gaS5oYXNGb2N1cyA9IGZhbHNlKTtcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVkID0gdGhpcy5fcmVuZGVyZWRJdGVtcy5maW5kKHJpID0+IHJpLml0ZW0gPT09IGl0ZW0pO1xuICAgICAgICAgICAgaWYgKHJlbmRlcmVkICYmICFyZW5kZXJlZC5oYXNGb2N1cykge1xuICAgICAgICAgICAgICAgIHJlbmRlcmVkLmhhc0ZvY3VzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZW5kZXJlZC5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2hpZ2hsaWdodGVkSXRlbSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRG9jdW1lbnRLZXlEb3duKGU6S2V5Ym9hcmRFdmVudCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9oaWdobGlnaHRlZEl0ZW0gJiYgZS5rZXlDb2RlID09PSBLZXlDb2RlLkVudGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGUodGhpcy5faGlnaGxpZ2h0ZWRJdGVtKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5faGlnaGxpZ2h0ZWRJdGVtKSB7XG4gICAgICAgICAgICB0aGlzLmF1dG9IaWdobGlnaHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5yYW5nZXMuY3VycmVudC5maW5kSW5kZXgodGhpcy5faGlnaGxpZ2h0ZWRJdGVtKTtcbiAgICAgICAgbGV0IGlzTW92aW5nRm9yd2FyZCA9IHRydWU7XG4gICAgICAgIGxldCBkZWx0YSA9IDA7XG5cbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5SaWdodDpcbiAgICAgICAgICAgICAgICBkZWx0YSArPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkxlZnQ6XG4gICAgICAgICAgICAgICAgZGVsdGEgLT0gMTtcbiAgICAgICAgICAgICAgICBpc01vdmluZ0ZvcndhcmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5Eb3duOlxuICAgICAgICAgICAgICAgIGRlbHRhICs9IHRoaXMucmFuZ2VzLmNvbHVtbnM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuVXA6XG4gICAgICAgICAgICAgICAgZGVsdGEgLT0gdGhpcy5yYW5nZXMuY29sdW1ucztcbiAgICAgICAgICAgICAgICBpc01vdmluZ0ZvcndhcmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3RvcCB0aGVzZSBrZXlwcmVzc2VzIGJlaW5nIGNhcHR1cmVkIGVsc2V3aGVyZS5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGxldCBuZXh0SXRlbSA9IHRoaXMucmFuZ2VzLmN1cnJlbnQuaXRlbXNbaW5kZXggKyBkZWx0YV07XG5cbiAgICAgICAgaWYgKG5leHRJdGVtICYmIG5leHRJdGVtLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0SXRlbSAmJiAhbmV4dEl0ZW0uaXNPdXRzaWRlUmFuZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhpZ2hsaWdodEl0ZW0obmV4dEl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5leHRJdGVtICYmIG5leHRJdGVtLmlzT3V0c2lkZVJhbmdlKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggKyBkZWx0YSA+PSB0aGlzLnJhbmdlcy5jdXJyZW50LmluUmFuZ2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaXNNb3ZpbmdGb3J3YXJkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbmV4dEl0ZW0pIHtcbiAgICAgICAgICAgIGxldCBhZGp1c3RlZEluZGV4ID0gdGhpcy5yYW5nZXMuY3VycmVudC5maW5kSW5kZXgodGhpcy5faGlnaGxpZ2h0ZWRJdGVtKTtcblxuICAgICAgICAgICAgY29uc3QgbmV4dEl0ZW1zID0gdGhpcy5yYW5nZXMuY2FsYyhpc01vdmluZ0ZvcndhcmQpLmluUmFuZ2U7XG5cbiAgICAgICAgICAgIGlmIChpc01vdmluZ0ZvcndhcmQpIHtcbiAgICAgICAgICAgICAgICBhZGp1c3RlZEluZGV4IC09IHRoaXMucmFuZ2VzLmN1cnJlbnQuaW5SYW5nZS5sZW5ndGg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkanVzdGVkSW5kZXggKz0gbmV4dEl0ZW1zLmxlbmd0aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV4dEl0ZW0gPSBuZXh0SXRlbXNbYWRqdXN0ZWRJbmRleCArIGRlbHRhXTtcblxuICAgICAgICAgICAgaWYgKG5leHRJdGVtLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJhbmdlcy5tb3ZlKGlzTW92aW5nRm9yd2FyZCk7XG4gICAgICAgIHRoaXMuX2hpZ2hsaWdodGVkSXRlbSA9IHRoaXMucmFuZ2VzLmN1cnJlbnQuZmluZChuZXh0SXRlbSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2RvY3VtZW50S2V5RG93bkxpc3RlbmVyKCk7XG4gICAgfVxufVxuIl19