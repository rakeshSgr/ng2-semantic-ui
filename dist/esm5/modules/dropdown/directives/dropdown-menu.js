import { __decorate, __extends, __metadata, __read } from "tslib";
import { Directive, ContentChild, forwardRef, Renderer2, ElementRef, AfterContentInit, ContentChildren, QueryList, Input, HostListener, ChangeDetectorRef, OnDestroy } from "@angular/core";
import { Transition, SuiTransition, TransitionController, TransitionDirection } from "../../transition/internal";
import { KeyCode } from "../../../misc/util/internal";
import { DropdownAutoCloseType } from "../services/dropdown.service";
// Polyfill for IE
import "element-closest";
var SuiDropdownMenuItem = /** @class */ (function () {
    function SuiDropdownMenuItem(_renderer, element) {
        this._renderer = _renderer;
        this.element = element;
        this.isSelected = false;
        this.selectedClass = "selected";
    }
    Object.defineProperty(SuiDropdownMenuItem.prototype, "isDisabled", {
        get: function () {
            // We must use nativeElement as Angular doesn't have a way of reading class information.
            var element = this.element.nativeElement;
            return element.classList.contains("disabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdownMenuItem.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        set: function (value) {
            // Renderer is used to enable a dynamic class name.
            if (value) {
                this._renderer.addClass(this.element.nativeElement, this.selectedClass);
            }
            else {
                this._renderer.removeClass(this.element.nativeElement, this.selectedClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdownMenuItem.prototype, "hasChildDropdown", {
        get: function () {
            return !!this.childDropdownMenu;
        },
        enumerable: true,
        configurable: true
    });
    SuiDropdownMenuItem.prototype.performClick = function () {
        // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
        this.element.nativeElement.click();
    };
    SuiDropdownMenuItem.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    __decorate([
        ContentChild(forwardRef(function () { return SuiDropdownMenu; })),
        __metadata("design:type", SuiDropdownMenu)
    ], SuiDropdownMenuItem.prototype, "childDropdownMenu", void 0);
    SuiDropdownMenuItem = __decorate([
        Directive({
            // We must attach to every '.item' as Angular doesn't support > selectors.
            selector: ".item"
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef])
    ], SuiDropdownMenuItem);
    return SuiDropdownMenuItem;
}());
export { SuiDropdownMenuItem };
var SuiDropdownMenu = /** @class */ (function (_super) {
    __extends(SuiDropdownMenu, _super);
    function SuiDropdownMenu(renderer, element, changeDetector) {
        var _this = _super.call(this, renderer, element, changeDetector) || this;
        // Initialise transition functionality.
        _this._transitionController = new TransitionController(false);
        _this.setTransitionController(_this._transitionController);
        _this.menuTransition = "slide down";
        _this.menuTransitionDuration = 200;
        _this.menuAutoSelectFirst = false;
        _this.menuSelectedItemClass = "selected";
        // In case the dropdown menu is destroyed before it has a chance to be fully initialised.
        _this._parentKeyDownListener = function () { };
        return _this;
    }
    Object.defineProperty(SuiDropdownMenu.prototype, "service", {
        get: function () {
            return this._service;
        },
        set: function (value) {
            var _this = this;
            this._service = value;
            var previousIsOpen = this._service.isOpen;
            this._service.isOpenChange.subscribe(function (isOpen) {
                if (isOpen !== previousIsOpen) {
                    // Only run transitions if the open state has changed.
                    _this._transitionController.stopAll();
                    _this._transitionController.animate(new Transition(_this.menuTransition, _this.menuTransitionDuration, TransitionDirection.Either, function () { return _this._service.isAnimating = false; }));
                }
                if (!isOpen) {
                    // Reset the item selections when a nested item is selected to avoid incosistent open states.
                    if (_this.selectedItems.length > 1) {
                        _this.resetSelection();
                    }
                }
                previousIsOpen = isOpen;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdownMenu.prototype, "parentElement", {
        set: function (value) {
            var _this = this;
            this._parentKeyDownListener = this._renderer
                .listen(value.nativeElement, "keydown", function (e) {
                return _this.onParentKeyDown(e);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdownMenu.prototype, "items", {
        set: function (items) {
            this._itemsQueryOverride = items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdownMenu.prototype, "_itemsQuery", {
        get: function () {
            return this._itemsQueryOverride || this._itemsQueryInternal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdownMenu.prototype, "_items", {
        // Get the list of items, ignoring those that are disabled.
        get: function () {
            return this._itemsQuery.filter(function (i) { return !i.isDisabled; });
        },
        enumerable: true,
        configurable: true
    });
    SuiDropdownMenu.prototype.onClick = function (e) {
        if (!e.eventHandled) {
            e.eventHandled = true;
            if (this._service.autoCloseMode === DropdownAutoCloseType.ItemClick) {
                var target = e.target;
                if (this._element.nativeElement.contains(target.closest(".item")) && !/input|textarea/i.test(target.tagName)) {
                    // Once an item is selected, we can close the entire dropdown.
                    this._service.setOpenState(false, true);
                }
            }
        }
    };
    SuiDropdownMenu.prototype.onParentKeyDown = function (e) {
        // Only the root dropdown (i.e. not nested dropdowns) is responsible for keeping track of the currently selected item.
        if (this._service && this._service.isOpen && !this._service.isNested) {
            // Stop document events like scrolling while open.
            var target = e.target;
            if (!/input/i.test(target.tagName) &&
                [KeyCode.Escape, KeyCode.Enter, KeyCode.Up, KeyCode.Down, KeyCode.Left, KeyCode.Right].find(function (kC) { return kC === e.keyCode; })) {
                e.preventDefault();
            }
            // Gets the top selected item from the stack.
            var _a = __read(this.selectedItems.slice(-1), 1), selected = _a[0];
            // Keeping track of the menu containing the currently selected element allows us to easily determine its siblings.
            var selectedContainer = this;
            if (this.selectedItems.length >= 2) {
                var _b = __read(this.selectedItems.slice(-2), 1), selectedParent = _b[0];
                selectedContainer = selectedParent.childDropdownMenu;
            }
            switch (e.keyCode) {
                // Escape : close the entire dropdown.
                case KeyCode.Escape: {
                    this._service.setOpenState(false);
                    break;
                }
                // Down : select the next item below the current one, or the 1st if none selected.
                case KeyCode.Down:
                // Up : select the next item above the current one, or the 1st if none selected.
                case KeyCode.Up: {
                    this.selectedItems.pop();
                    this.selectedItems.push(selectedContainer.updateSelection(selected, e.keyCode));
                    // Prevent default regardless of whether we are in an input, to stop jumping to the start or end of the query string.
                    e.preventDefault();
                    break;
                }
                // Enter : if the item doesn't contain a nested dropdown, 'click' it. Otherwise, fall through to 'Right' action.
                case KeyCode.Enter: {
                    if (selected && !selected.hasChildDropdown) {
                        selected.performClick();
                        break;
                    }
                }
                // falls through
                // Right : if the selected item contains a nested dropdown, open the dropdown & select the 1st item.
                case KeyCode.Right: {
                    if (selected && selected.hasChildDropdown) {
                        selected.childDropdownMenu.service.setOpenState(true);
                        this.selectedItems.push(selected.childDropdownMenu.updateSelection(selected, e.keyCode));
                    }
                    break;
                }
                // Left : if the selected item is in a nested dropdown, close it and select the containing item.
                case KeyCode.Left: {
                    if (this.selectedItems.length >= 2) {
                        this.selectedItems.pop();
                        var _c = __read(this.selectedItems.slice(-1), 1), selectedParent = _c[0];
                        selectedParent.childDropdownMenu.service.setOpenState(false);
                        selectedParent.isSelected = true;
                    }
                    break;
                }
            }
        }
    };
    SuiDropdownMenu.prototype.resetSelection = function () {
        var _this = this;
        this.selectedItems = [];
        this._items.forEach(function (i) {
            i.selectedClass = _this.menuSelectedItemClass;
            i.isSelected = false;
        });
        if (this.menuAutoSelectFirst && this._items.length > 0) {
            // Autoselect 1st item if required & possible.
            this._items[0].isSelected = true;
            this.scrollToItem(this._items[0]);
            this.selectedItems.push(this._itemsQuery.first);
        }
    };
    // Determines the item to next be selected, based on the keyboard input & the currently selected item.
    SuiDropdownMenu.prototype.updateSelection = function (selectedItem, keyCode) {
        if (selectedItem) {
            // Remove the selected status on the previously selected item.
            selectedItem.isSelected = false;
        }
        var selectedIndex = this._items
            .findIndex(function (i) { return i === selectedItem; });
        var newSelection;
        switch (keyCode) {
            case KeyCode.Enter:
            case KeyCode.Right:
            case KeyCode.Down:
                selectedIndex += 1;
                break;
            case KeyCode.Up:
                if (selectedIndex === -1) {
                    // If none are selected, select the 1st item. Should this be `this.items.last - 1`?
                    selectedIndex = 0;
                    break;
                }
                selectedIndex -= 1;
                break;
        }
        // Select the item at the updated index. The || is to stop us selecting past the start or end of the item list.
        newSelection = this._items[selectedIndex] || selectedItem;
        if (newSelection) {
            // Set the selected status on the newly selected item.
            newSelection.isSelected = true;
            // Set the current scroll position to the location of the newly selected item.
            this.scrollToItem(newSelection);
        }
        return newSelection;
    };
    SuiDropdownMenu.prototype.scrollToItem = function (item) {
        var menu = this._element.nativeElement;
        var selectedRect = item.element.nativeElement.getBoundingClientRect();
        var menuRect = menu.getBoundingClientRect();
        var scrollAmount = 0;
        if (selectedRect.bottom > menuRect.bottom) {
            scrollAmount = selectedRect.bottom - menuRect.bottom;
        }
        if (selectedRect.top < menuRect.top) {
            scrollAmount = selectedRect.top - menuRect.top;
        }
        menu.scrollTop += Math.round(scrollAmount);
    };
    SuiDropdownMenu.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.onItemsChanged();
        this._itemsQuery.changes.subscribe(function () { return _this.onItemsChanged(); });
    };
    SuiDropdownMenu.prototype.onItemsChanged = function () {
        // We use `_items` rather than `items` in case one or more have become disabled.
        this.resetSelection();
    };
    SuiDropdownMenu.prototype.ngOnDestroy = function () {
        this._parentKeyDownListener();
    };
    SuiDropdownMenu.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SuiDropdownMenu.prototype, "menuTransition", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], SuiDropdownMenu.prototype, "menuTransitionDuration", void 0);
    __decorate([
        ContentChildren(SuiDropdownMenuItem),
        __metadata("design:type", QueryList)
    ], SuiDropdownMenu.prototype, "_itemsQueryInternal", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], SuiDropdownMenu.prototype, "menuAutoSelectFirst", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SuiDropdownMenu.prototype, "menuSelectedItemClass", void 0);
    __decorate([
        HostListener("click", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SuiDropdownMenu.prototype, "onClick", null);
    SuiDropdownMenu = __decorate([
        Directive({
            selector: "[suiDropdownMenu]"
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef, ChangeDetectorRef])
    ], SuiDropdownMenu);
    return SuiDropdownMenu;
}(SuiTransition));
export { SuiDropdownMenu };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZHJvcGRvd24vZGlyZWN0aXZlcy9kcm9wZG93bi1tZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFDNUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFDaEYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqSCxPQUFPLEVBQW1DLE9BQU8sRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3ZGLE9BQU8sRUFBbUIscUJBQXFCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN0RixrQkFBa0I7QUFDbEIsT0FBTyxpQkFBaUIsQ0FBQztBQU16QjtJQWdDSSw2QkFBb0IsU0FBbUIsRUFBUyxPQUFrQjtRQUE5QyxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUM5RCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUV4QixJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQztJQUNwQyxDQUFDO0lBbkNELHNCQUFXLDJDQUFVO2FBQXJCO1lBQ0ksd0ZBQXdGO1lBQ3hGLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBd0IsQ0FBQztZQUN0RCxPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELENBQUM7OztPQUFBO0lBSUQsc0JBQVcsMkNBQVU7YUFBckI7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENB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QUFLLEVBQUU7O2dFQUMyQjtJQUduQztRQURDLEtBQUssRUFBRTs7a0VBQzRCO0lBc0JwQztRQURDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7OztrREFhakM7SUE1R1EsZUFBZTtRQUgzQixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsbUJBQW1CO1NBQ2hDLENBQUM7eUNBK0V1QixTQUFTLEVBQVUsVUFBVSxFQUFpQixpQkFBaUI7T0E5RTNFLGVBQWUsQ0EyUTNCO0lBQUQsc0JBQUM7Q0FBQSxBQTNRRCxDQUFxQyxhQUFhLEdBMlFqRDtTQTNRWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBEaXJlY3RpdmUsIENvbnRlbnRDaGlsZCwgZm9yd2FyZFJlZiwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBBZnRlckNvbnRlbnRJbml0LFxuICAgIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBJbnB1dCwgSG9zdExpc3RlbmVyLCBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uLCBTdWlUcmFuc2l0aW9uLCBUcmFuc2l0aW9uQ29udHJvbGxlciwgVHJhbnNpdGlvbkRpcmVjdGlvbiB9IGZyb20gXCIuLi8uLi90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBIYW5kbGVkRXZlbnQsIElBdWdtZW50ZWRFbGVtZW50LCBLZXlDb2RlIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgRHJvcGRvd25TZXJ2aWNlLCBEcm9wZG93bkF1dG9DbG9zZVR5cGUgfSBmcm9tIFwiLi4vc2VydmljZXMvZHJvcGRvd24uc2VydmljZVwiO1xuLy8gUG9seWZpbGwgZm9yIElFXG5pbXBvcnQgXCJlbGVtZW50LWNsb3Nlc3RcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgLy8gV2UgbXVzdCBhdHRhY2ggdG8gZXZlcnkgJy5pdGVtJyBhcyBBbmd1bGFyIGRvZXNuJ3Qgc3VwcG9ydCA+IHNlbGVjdG9ycy5cbiAgICBzZWxlY3RvcjogXCIuaXRlbVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aURyb3Bkb3duTWVudUl0ZW0ge1xuICAgIHB1YmxpYyBnZXQgaXNEaXNhYmxlZCgpOmJvb2xlYW4ge1xuICAgICAgICAvLyBXZSBtdXN0IHVzZSBuYXRpdmVFbGVtZW50IGFzIEFuZ3VsYXIgZG9lc24ndCBoYXZlIGEgd2F5IG9mIHJlYWRpbmcgY2xhc3MgaW5mb3JtYXRpb24uXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50O1xuICAgICAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNhYmxlZFwiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc1NlbGVjdGVkOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgZ2V0IGlzU2VsZWN0ZWQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzU2VsZWN0ZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc1NlbGVjdGVkKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgLy8gUmVuZGVyZXIgaXMgdXNlZCB0byBlbmFibGUgYSBkeW5hbWljIGNsYXNzIG5hbWUuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuc2VsZWN0ZWRDbGFzcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5zZWxlY3RlZENsYXNzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN0b3JlcyB0aGUgY2xhc3MgbmFtZSB1c2VkIGZvciBhICdzZWxlY3RlZCcgaXRlbS5cbiAgICBwdWJsaWMgc2VsZWN0ZWRDbGFzczpzdHJpbmc7XG5cbiAgICBAQ29udGVudENoaWxkKGZvcndhcmRSZWYoKCkgPT4gU3VpRHJvcGRvd25NZW51KSlcbiAgICBwdWJsaWMgY2hpbGREcm9wZG93bk1lbnU6U3VpRHJvcGRvd25NZW51O1xuXG4gICAgcHVibGljIGdldCBoYXNDaGlsZERyb3Bkb3duKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuY2hpbGREcm9wZG93bk1lbnU7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6UmVuZGVyZXIyLCBwdWJsaWMgZWxlbWVudDpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDbGFzcyA9IFwic2VsZWN0ZWRcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGVyZm9ybUNsaWNrKCk6dm9pZCB7XG4gICAgICAgIC8vIFVzaW5nIGRpcmVjdGx5IGJlY2F1c2UgUmVuZGVyZXIyIGRvZXNuJ3QgaGF2ZSBpbnZva2VFbGVtZW50TWV0aG9kIG1ldGhvZCBhbnltb3JlLlxuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGljaygpO1xuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW3N1aURyb3Bkb3duTWVudV1cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlEcm9wZG93bk1lbnUgZXh0ZW5kcyBTdWlUcmFuc2l0aW9uIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIF9zZXJ2aWNlOkRyb3Bkb3duU2VydmljZTtcbiAgICBwcml2YXRlIF90cmFuc2l0aW9uQ29udHJvbGxlcjpUcmFuc2l0aW9uQ29udHJvbGxlcjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1lbnVUcmFuc2l0aW9uOnN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1lbnVUcmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuXG4gICAgcHVibGljIGdldCBzZXJ2aWNlKCk6RHJvcGRvd25TZXJ2aWNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZpY2U7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzZXJ2aWNlKHZhbHVlOkRyb3Bkb3duU2VydmljZSkge1xuICAgICAgICB0aGlzLl9zZXJ2aWNlID0gdmFsdWU7XG5cbiAgICAgICAgbGV0IHByZXZpb3VzSXNPcGVuID0gdGhpcy5fc2VydmljZS5pc09wZW47XG4gICAgICAgIHRoaXMuX3NlcnZpY2UuaXNPcGVuQ2hhbmdlLnN1YnNjcmliZSgoaXNPcGVuOmJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgIGlmIChpc09wZW4gIT09IHByZXZpb3VzSXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgLy8gT25seSBydW4gdHJhbnNpdGlvbnMgaWYgdGhlIG9wZW4gc3RhdGUgaGFzIGNoYW5nZWQuXG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIuc3RvcEFsbCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAgICAgIG5ldyBUcmFuc2l0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51VHJhbnNpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVudVRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIFRyYW5zaXRpb25EaXJlY3Rpb24uRWl0aGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5fc2VydmljZS5pc0FuaW1hdGluZyA9IGZhbHNlKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVzZXQgdGhlIGl0ZW0gc2VsZWN0aW9ucyB3aGVuIGEgbmVzdGVkIGl0ZW0gaXMgc2VsZWN0ZWQgdG8gYXZvaWQgaW5jb3Npc3RlbnQgb3BlbiBzdGF0ZXMuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByZXZpb3VzSXNPcGVuID0gaXNPcGVuO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBhcmVudEVsZW1lbnQodmFsdWU6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLl9wYXJlbnRLZXlEb3duTGlzdGVuZXIgPSB0aGlzLl9yZW5kZXJlclxuICAgICAgICAgICAgLmxpc3Rlbih2YWx1ZS5uYXRpdmVFbGVtZW50LCBcImtleWRvd25cIiwgKGU6S2V5Ym9hcmRFdmVudCkgPT5cbiAgICAgICAgICAgICAgICB0aGlzLm9uUGFyZW50S2V5RG93bihlKSk7XG4gICAgfVxuXG4gICAgQENvbnRlbnRDaGlsZHJlbihTdWlEcm9wZG93bk1lbnVJdGVtKVxuICAgIHByaXZhdGUgX2l0ZW1zUXVlcnlJbnRlcm5hbDpRdWVyeUxpc3Q8U3VpRHJvcGRvd25NZW51SXRlbT47XG5cbiAgICBwcml2YXRlIF9pdGVtc1F1ZXJ5T3ZlcnJpZGU6UXVlcnlMaXN0PFN1aURyb3Bkb3duTWVudUl0ZW0+O1xuXG4gICAgcHVibGljIHNldCBpdGVtcyhpdGVtczpRdWVyeUxpc3Q8U3VpRHJvcGRvd25NZW51SXRlbT4pIHtcbiAgICAgICAgdGhpcy5faXRlbXNRdWVyeU92ZXJyaWRlID0gaXRlbXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgX2l0ZW1zUXVlcnkoKTpRdWVyeUxpc3Q8U3VpRHJvcGRvd25NZW51SXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXNRdWVyeU92ZXJyaWRlIHx8IHRoaXMuX2l0ZW1zUXVlcnlJbnRlcm5hbDtcbiAgICB9XG5cbiAgICAvLyBHZXQgdGhlIGxpc3Qgb2YgaXRlbXMsIGlnbm9yaW5nIHRob3NlIHRoYXQgYXJlIGRpc2FibGVkLlxuICAgIHByaXZhdGUgZ2V0IF9pdGVtcygpOlN1aURyb3Bkb3duTWVudUl0ZW1bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtc1F1ZXJ5LmZpbHRlcihpID0+ICFpLmlzRGlzYWJsZWQpO1xuICAgIH1cblxuICAgIC8vIFN0YWNrIHRoYXQga2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLlxuICAgIC8vIFNlbGVjdGVkIGl0ZW1zIGxvd2VyIGluIHRoZSBzdGFjayBhcmUgbmVjZXNzYXJpbHkgdGhlIHBhcmVudCBvZiB0aGUgaXRlbSBvbmUgaGlnaGVyLlxuICAgIHB1YmxpYyBzZWxlY3RlZEl0ZW1zOlN1aURyb3Bkb3duTWVudUl0ZW1bXTtcblxuICAgIC8vIFNldHMgd2hldGhlciBvciBub3QgdG8gYXV0b21hdGljYWxseSBzZWxlY3QgdGhlIDFzdCBpdGVtIHdoZW4gdGhlIGRyb3Bkb3duIGlzIG9wZW5lZC5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtZW51QXV0b1NlbGVjdEZpcnN0OmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtZW51U2VsZWN0ZWRJdGVtQ2xhc3M6c3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBfcGFyZW50S2V5RG93bkxpc3RlbmVyOigpID0+IHZvaWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsIGVsZW1lbnQ6RWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIGVsZW1lbnQsIGNoYW5nZURldGVjdG9yKTtcblxuICAgICAgICAvLyBJbml0aWFsaXNlIHRyYW5zaXRpb24gZnVuY3Rpb25hbGl0eS5cbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIgPSBuZXcgVHJhbnNpdGlvbkNvbnRyb2xsZXIoZmFsc2UpO1xuICAgICAgICB0aGlzLnNldFRyYW5zaXRpb25Db250cm9sbGVyKHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyKTtcblxuICAgICAgICB0aGlzLm1lbnVUcmFuc2l0aW9uID0gXCJzbGlkZSBkb3duXCI7XG4gICAgICAgIHRoaXMubWVudVRyYW5zaXRpb25EdXJhdGlvbiA9IDIwMDtcblxuICAgICAgICB0aGlzLm1lbnVBdXRvU2VsZWN0Rmlyc3QgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tZW51U2VsZWN0ZWRJdGVtQ2xhc3MgPSBcInNlbGVjdGVkXCI7XG5cbiAgICAgICAgLy8gSW4gY2FzZSB0aGUgZHJvcGRvd24gbWVudSBpcyBkZXN0cm95ZWQgYmVmb3JlIGl0IGhhcyBhIGNoYW5jZSB0byBiZSBmdWxseSBpbml0aWFsaXNlZC5cbiAgICAgICAgdGhpcy5fcGFyZW50S2V5RG93bkxpc3RlbmVyID0gKCkgPT4ge307XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25DbGljayhlOkhhbmRsZWRFdmVudCAmIE1vdXNlRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoIWUuZXZlbnRIYW5kbGVkKSB7XG4gICAgICAgICAgICBlLmV2ZW50SGFuZGxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9zZXJ2aWNlLmF1dG9DbG9zZU1vZGUgPT09IERyb3Bkb3duQXV0b0Nsb3NlVHlwZS5JdGVtQ2xpY2spIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBJQXVnbWVudGVkRWxlbWVudDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKHRhcmdldC5jbG9zZXN0KFwiLml0ZW1cIikpICYmICEvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KHRhcmdldC50YWdOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBPbmNlIGFuIGl0ZW0gaXMgc2VsZWN0ZWQsIHdlIGNhbiBjbG9zZSB0aGUgZW50aXJlIGRyb3Bkb3duLlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZXJ2aWNlLnNldE9wZW5TdGF0ZShmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uUGFyZW50S2V5RG93bihlOktleWJvYXJkRXZlbnQpOnZvaWQge1xuICAgICAgICAvLyBPbmx5IHRoZSByb290IGRyb3Bkb3duIChpLmUuIG5vdCBuZXN0ZWQgZHJvcGRvd25zKSBpcyByZXNwb25zaWJsZSBmb3Iga2VlcGluZyB0cmFjayBvZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0uXG4gICAgICAgIGlmICh0aGlzLl9zZXJ2aWNlICYmIHRoaXMuX3NlcnZpY2UuaXNPcGVuICYmICF0aGlzLl9zZXJ2aWNlLmlzTmVzdGVkKSB7XG4gICAgICAgICAgICAvLyBTdG9wIGRvY3VtZW50IGV2ZW50cyBsaWtlIHNjcm9sbGluZyB3aGlsZSBvcGVuLlxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgRWxlbWVudDtcbiAgICAgICAgICAgIGlmICghL2lucHV0L2kudGVzdCh0YXJnZXQudGFnTmFtZSkgJiZcbiAgICAgICAgICAgICAgICBbS2V5Q29kZS5Fc2NhcGUsIEtleUNvZGUuRW50ZXIsIEtleUNvZGUuVXAsIEtleUNvZGUuRG93biwgS2V5Q29kZS5MZWZ0LCBLZXlDb2RlLlJpZ2h0XS5maW5kKGtDID0+IGtDID09PSBlLmtleUNvZGUpKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBHZXRzIHRoZSB0b3Agc2VsZWN0ZWQgaXRlbSBmcm9tIHRoZSBzdGFjay5cbiAgICAgICAgICAgIGNvbnN0IFtzZWxlY3RlZF0gPSB0aGlzLnNlbGVjdGVkSXRlbXMuc2xpY2UoLTEpO1xuICAgICAgICAgICAgLy8gS2VlcGluZyB0cmFjayBvZiB0aGUgbWVudSBjb250YWluaW5nIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZWxlbWVudCBhbGxvd3MgdXMgdG8gZWFzaWx5IGRldGVybWluZSBpdHMgc2libGluZ3MuXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRDb250YWluZXI6U3VpRHJvcGRvd25NZW51ID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBbc2VsZWN0ZWRQYXJlbnRdID0gdGhpcy5zZWxlY3RlZEl0ZW1zLnNsaWNlKC0yKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENvbnRhaW5lciA9IHNlbGVjdGVkUGFyZW50LmNoaWxkRHJvcGRvd25NZW51O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIC8vIEVzY2FwZSA6IGNsb3NlIHRoZSBlbnRpcmUgZHJvcGRvd24uXG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkVzY2FwZToge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZXJ2aWNlLnNldE9wZW5TdGF0ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBEb3duIDogc2VsZWN0IHRoZSBuZXh0IGl0ZW0gYmVsb3cgdGhlIGN1cnJlbnQgb25lLCBvciB0aGUgMXN0IGlmIG5vbmUgc2VsZWN0ZWQuXG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkRvd246XG4gICAgICAgICAgICAgICAgLy8gVXAgOiBzZWxlY3QgdGhlIG5leHQgaXRlbSBhYm92ZSB0aGUgY3VycmVudCBvbmUsIG9yIHRoZSAxc3QgaWYgbm9uZSBzZWxlY3RlZC5cbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuVXA6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChzZWxlY3RlZENvbnRhaW5lci51cGRhdGVTZWxlY3Rpb24oc2VsZWN0ZWQsIGUua2V5Q29kZSkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHQgcmVnYXJkbGVzcyBvZiB3aGV0aGVyIHdlIGFyZSBpbiBhbiBpbnB1dCwgdG8gc3RvcCBqdW1waW5nIHRvIHRoZSBzdGFydCBvciBlbmQgb2YgdGhlIHF1ZXJ5IHN0cmluZy5cbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gRW50ZXIgOiBpZiB0aGUgaXRlbSBkb2Vzbid0IGNvbnRhaW4gYSBuZXN0ZWQgZHJvcGRvd24sICdjbGljaycgaXQuIE90aGVyd2lzZSwgZmFsbCB0aHJvdWdoIHRvICdSaWdodCcgYWN0aW9uLlxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5FbnRlcjoge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQgJiYgIXNlbGVjdGVkLmhhc0NoaWxkRHJvcGRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLnBlcmZvcm1DbGljaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgICAgICAgICAgICAvLyBSaWdodCA6IGlmIHRoZSBzZWxlY3RlZCBpdGVtIGNvbnRhaW5zIGEgbmVzdGVkIGRyb3Bkb3duLCBvcGVuIHRoZSBkcm9wZG93biAmIHNlbGVjdCB0aGUgMXN0IGl0ZW0uXG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlJpZ2h0OiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCAmJiBzZWxlY3RlZC5oYXNDaGlsZERyb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5jaGlsZERyb3Bkb3duTWVudS5zZXJ2aWNlLnNldE9wZW5TdGF0ZSh0cnVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2goc2VsZWN0ZWQuY2hpbGREcm9wZG93bk1lbnUudXBkYXRlU2VsZWN0aW9uKHNlbGVjdGVkLCBlLmtleUNvZGUpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTGVmdCA6IGlmIHRoZSBzZWxlY3RlZCBpdGVtIGlzIGluIGEgbmVzdGVkIGRyb3Bkb3duLCBjbG9zZSBpdCBhbmQgc2VsZWN0IHRoZSBjb250YWluaW5nIGl0ZW0uXG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkxlZnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgW3NlbGVjdGVkUGFyZW50XSA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5zbGljZSgtMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUGFyZW50LmNoaWxkRHJvcGRvd25NZW51LnNlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUGFyZW50LmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyByZXNldFNlbGVjdGlvbigpOnZvaWQge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5faXRlbXMuZm9yRWFjaChpID0+IHtcbiAgICAgICAgICAgIGkuc2VsZWN0ZWRDbGFzcyA9IHRoaXMubWVudVNlbGVjdGVkSXRlbUNsYXNzO1xuICAgICAgICAgICAgaS5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLm1lbnVBdXRvU2VsZWN0Rmlyc3QgJiYgdGhpcy5faXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gQXV0b3NlbGVjdCAxc3QgaXRlbSBpZiByZXF1aXJlZCAmIHBvc3NpYmxlLlxuICAgICAgICAgICAgdGhpcy5faXRlbXNbMF0uaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvSXRlbSh0aGlzLl9pdGVtc1swXSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaCh0aGlzLl9pdGVtc1F1ZXJ5LmZpcnN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIERldGVybWluZXMgdGhlIGl0ZW0gdG8gbmV4dCBiZSBzZWxlY3RlZCwgYmFzZWQgb24gdGhlIGtleWJvYXJkIGlucHV0ICYgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLlxuICAgIHB1YmxpYyB1cGRhdGVTZWxlY3Rpb24oc2VsZWN0ZWRJdGVtOlN1aURyb3Bkb3duTWVudUl0ZW0sIGtleUNvZGU6S2V5Q29kZSk6U3VpRHJvcGRvd25NZW51SXRlbSB7XG4gICAgICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgc2VsZWN0ZWQgc3RhdHVzIG9uIHRoZSBwcmV2aW91c2x5IHNlbGVjdGVkIGl0ZW0uXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW0uaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNlbGVjdGVkSW5kZXggPSB0aGlzLl9pdGVtc1xuICAgICAgICAgICAgLmZpbmRJbmRleChpID0+IGkgPT09IHNlbGVjdGVkSXRlbSk7XG5cbiAgICAgICAgbGV0IG5ld1NlbGVjdGlvbjpTdWlEcm9wZG93bk1lbnVJdGVtO1xuXG4gICAgICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkVudGVyOlxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlJpZ2h0OlxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkRvd246XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleCArPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlVwOlxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBub25lIGFyZSBzZWxlY3RlZCwgc2VsZWN0IHRoZSAxc3QgaXRlbS4gU2hvdWxkIHRoaXMgYmUgYHRoaXMuaXRlbXMubGFzdCAtIDFgP1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleCAtPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2VsZWN0IHRoZSBpdGVtIGF0IHRoZSB1cGRhdGVkIGluZGV4LiBUaGUgfHwgaXMgdG8gc3RvcCB1cyBzZWxlY3RpbmcgcGFzdCB0aGUgc3RhcnQgb3IgZW5kIG9mIHRoZSBpdGVtIGxpc3QuXG4gICAgICAgIG5ld1NlbGVjdGlvbiA9IHRoaXMuX2l0ZW1zW3NlbGVjdGVkSW5kZXhdIHx8IHNlbGVjdGVkSXRlbTtcblxuICAgICAgICBpZiAobmV3U2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAvLyBTZXQgdGhlIHNlbGVjdGVkIHN0YXR1cyBvbiB0aGUgbmV3bHkgc2VsZWN0ZWQgaXRlbS5cbiAgICAgICAgICAgIG5ld1NlbGVjdGlvbi5pc1NlbGVjdGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gU2V0IHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiB0byB0aGUgbG9jYXRpb24gb2YgdGhlIG5ld2x5IHNlbGVjdGVkIGl0ZW0uXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvSXRlbShuZXdTZWxlY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld1NlbGVjdGlvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2Nyb2xsVG9JdGVtKGl0ZW06U3VpRHJvcGRvd25NZW51SXRlbSk6dm9pZCB7XG4gICAgICAgIGNvbnN0IG1lbnU6RWxlbWVudCA9IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRSZWN0OkNsaWVudFJlY3QgPSBpdGVtLmVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBjb25zdCBtZW51UmVjdCA9IG1lbnUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgbGV0IHNjcm9sbEFtb3VudCA9IDA7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkUmVjdC5ib3R0b20gPiBtZW51UmVjdC5ib3R0b20pIHtcbiAgICAgICAgICAgIHNjcm9sbEFtb3VudCA9IHNlbGVjdGVkUmVjdC5ib3R0b20gLSBtZW51UmVjdC5ib3R0b207XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0ZWRSZWN0LnRvcCA8IG1lbnVSZWN0LnRvcCkge1xuICAgICAgICAgICAgc2Nyb2xsQW1vdW50ID0gc2VsZWN0ZWRSZWN0LnRvcCAtIG1lbnVSZWN0LnRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lbnUuc2Nyb2xsVG9wICs9IE1hdGgucm91bmQoc2Nyb2xsQW1vdW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMub25JdGVtc0NoYW5nZWQoKTtcbiAgICAgICAgdGhpcy5faXRlbXNRdWVyeS5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uSXRlbXNDaGFuZ2VkKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25JdGVtc0NoYW5nZWQoKTp2b2lkIHtcbiAgICAgICAgLy8gV2UgdXNlIGBfaXRlbXNgIHJhdGhlciB0aGFuIGBpdGVtc2AgaW4gY2FzZSBvbmUgb3IgbW9yZSBoYXZlIGJlY29tZSBkaXNhYmxlZC5cbiAgICAgICAgdGhpcy5yZXNldFNlbGVjdGlvbigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9wYXJlbnRLZXlEb3duTGlzdGVuZXIoKTtcbiAgICB9XG59XG4iXX0=