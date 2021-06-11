/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { EventEmitter } from "@angular/core";
// Creates essentially a 'string' enum.
export const /** @type {?} */ DropdownAutoCloseType = {
    ItemClick: "itemClick",
    OutsideClick: "outsideClick",
    Disabled: "disabled"
};
export class DropdownService {
    /**
     * @return {?}
     */
    get isNested() {
        return !!this.parent;
    }
    /**
     * @param {?=} autoCloseMode
     */
    constructor(autoCloseMode = DropdownAutoCloseType.ItemClick) {
        this.isOpen = false;
        this.isOpenChange = new EventEmitter();
        this.isDisabled = false;
        this.autoCloseMode = autoCloseMode;
        this.children = [];
    }
    /**
     * @param {?} isOpen
     * @param {?=} reflectInParent
     * @return {?}
     */
    setOpenState(isOpen, reflectInParent = false) {
        if (this.isOpen !== isOpen && !this.isDisabled) {
            // Only update the state if it has changed, and the dropdown isn't disabled.
            this.isOpen = !!isOpen;
            this.isAnimating = true;
            // We must delay the emitting to avoid the 'changed after checked' Angular errors.
            this.delay(() => this.isOpenChange.emit(this.isOpen));
            if (!this.isOpen) {
                // Close the child dropdowns when this one closes.
                this.children.forEach(c => c.setOpenState(this.isOpen));
            }
            if (this.parent && reflectInParent) {
                // Open the parent dropdowns when this one opens.
                this.parent.setOpenState(this.isOpen, true);
            }
        }
        else if (this.isOpen !== isOpen && this.isDisabled) {
            // If the state has changed, but the dropdown is disabled, re-emit the original isOpen value.
            this.delay(() => this.isOpenChange.emit(this.isOpen));
        }
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        if (this.isDisabled !== isDisabled) {
            if (!!isDisabled) {
                // Close the dropdown as it is now disabled
                this.setOpenState(false);
            }
            this.isDisabled = !!isDisabled;
        }
    }
    /**
     * @return {?}
     */
    toggleOpenState() {
        this.setOpenState(!this.isOpen);
    }
    /**
     * @param {?} child
     * @return {?}
     */
    registerChild(child) {
        if (!this.isChildRegistered(child)) {
            this.children.push(child);
            child.parent = this;
        }
    }
    /**
     * @param {?} child
     * @return {?}
     */
    isChildRegistered(child) {
        return this === child || !!this.children
            .find(c => !!c.children
            .find(cChild => cChild.isChildRegistered(child)));
    }
    /**
     * @return {?}
     */
    clearChildren() {
        this.children.forEach(c => {
            c.parent = undefined;
        });
        this.children = [];
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    delay(callback) {
        setTimeout(() => callback());
    }
}
function DropdownService_tsickle_Closure_declarations() {
    /** @type {?} */
    DropdownService.prototype.isOpen;
    /** @type {?} */
    DropdownService.prototype.isAnimating;
    /** @type {?} */
    DropdownService.prototype.isOpenChange;
    /** @type {?} */
    DropdownService.prototype.isDisabled;
    /** @type {?} */
    DropdownService.prototype.autoCloseMode;
    /** @type {?} */
    DropdownService.prototype.parent;
    /** @type {?} */
    DropdownService.prototype.children;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZHJvcGRvd24vc2VydmljZXMvZHJvcGRvd24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLN0MsTUFBTSxDQUFDLHVCQUFNLHFCQUFxQixHQUFHO0lBQ2pDLFNBQVMsRUFBRSxXQUFvQztJQUMvQyxZQUFZLEVBQUUsY0FBdUM7SUFDckQsUUFBUSxFQUFFLFVBQW1DO0NBQ2hELENBQUM7QUFFRixNQUFNLE9BQU8sZUFBZTs7OztRQWlCYixRQUFRO1FBQ2YsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzs7Ozs7SUFHekIsWUFBWSxnQkFBc0MscUJBQXFCLENBQUMsU0FBUztRQUM3RSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFaEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFFeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFFbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7S0FDdEI7Ozs7OztJQUVNLFlBQVksQ0FBQyxNQUFjLEVBQUUsa0JBQTBCLEtBQUs7UUFDL0QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7O1lBRTVDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzs7WUFFeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUV0RCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTs7Z0JBRWQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQzNEO1lBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLGVBQWUsRUFBRTs7Z0JBRWhDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDL0M7U0FDSjthQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTs7WUFFbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN6RDs7Ozs7O0lBR0UsZ0JBQWdCLENBQUMsVUFBa0I7UUFDdEMsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBRTtZQUNoQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUU7O2dCQUVkLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDNUI7WUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7U0FDbEM7Ozs7O0lBR0UsZUFBZTtRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7SUFJN0IsYUFBYSxDQUFDLEtBQXFCO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUIsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDdkI7Ozs7OztJQUlFLGlCQUFpQixDQUFDLEtBQXFCO1FBQzFDLE9BQU8sSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVE7YUFDbkMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRO2FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7O0lBSXZELGFBQWE7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDdEIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7U0FDeEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7Ozs7OztJQUlmLEtBQUssQ0FBQyxRQUFtQjtRQUM3QixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzs7Q0FFcEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgdHlwZSBEcm9wZG93bkF1dG9DbG9zZVR5cGUgPSBcIml0ZW1DbGlja1wiIHwgXCJvdXRzaWRlQ2xpY2tcIiB8IFwiZGlzYWJsZWRcIjtcblxuLy8gQ3JlYXRlcyBlc3NlbnRpYWxseSBhICdzdHJpbmcnIGVudW0uXG5leHBvcnQgY29uc3QgRHJvcGRvd25BdXRvQ2xvc2VUeXBlID0ge1xuICAgIEl0ZW1DbGljazogXCJpdGVtQ2xpY2tcIiBhcyBEcm9wZG93bkF1dG9DbG9zZVR5cGUsXG4gICAgT3V0c2lkZUNsaWNrOiBcIm91dHNpZGVDbGlja1wiIGFzIERyb3Bkb3duQXV0b0Nsb3NlVHlwZSxcbiAgICBEaXNhYmxlZDogXCJkaXNhYmxlZFwiIGFzIERyb3Bkb3duQXV0b0Nsb3NlVHlwZVxufTtcblxuZXhwb3J0IGNsYXNzIERyb3Bkb3duU2VydmljZSB7XG4gICAgLy8gT3BlbiBzdGF0ZSBvZiB0aGUgZHJvcGRvd25cbiAgICBwdWJsaWMgaXNPcGVuOmJvb2xlYW47XG4gICAgLy8gQW5pbWF0aW5nIHN0YXRlIG9mIHRoZSBkcm9wZG93bi5cbiAgICBwdWJsaWMgaXNBbmltYXRpbmc6Ym9vbGVhbjtcbiAgICAvLyBFbWl0dGVyIGZvciB3aGVuIGRyb3Bkb3duIG9wZW4gc3RhdGUgY2hhbmdlcy5cbiAgICBwdWJsaWMgaXNPcGVuQ2hhbmdlOkV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICAgIHB1YmxpYyBpc0Rpc2FibGVkOmJvb2xlYW47XG5cbiAgICAvLyBTZXRzIHRoZSBcImF1dG9jbG9zZVwiIG1vZGUgb2YgdGhlIGRyb3Bkb3duIC0gaS5lLiB3aGF0IHVzZXIgYWN0aW9uIGNhdXNlcyBpdCB0byBhdXRvY2xvc2UuXG4gICAgcHVibGljIGF1dG9DbG9zZU1vZGU6RHJvcGRvd25BdXRvQ2xvc2VUeXBlO1xuXG4gICAgLy8gS2VlcCB0cmFjayBvZiB0aGUgY29udGFpbmluZyBkcm9wZG93biBzbyB3ZSBjYW4gb3BlbiBpdCBhcyBuZWNlc3NhcnkuXG4gICAgcHVibGljIHBhcmVudD86RHJvcGRvd25TZXJ2aWNlO1xuICAgIC8vIEFsc28ga2VlcCB0cmFjayBvZiBkcm9wZG93bnMgbmVzdGVkIGluIHRoaXMgb25lIHNvIHdlIGNhbiBjbG9zZSB0aGVtIGFzIG5lY2Vzc2FyeS5cbiAgICBwdWJsaWMgY2hpbGRyZW46RHJvcGRvd25TZXJ2aWNlW107XG4gICAgcHVibGljIGdldCBpc05lc3RlZCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISF0aGlzLnBhcmVudDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihhdXRvQ2xvc2VNb2RlOkRyb3Bkb3duQXV0b0Nsb3NlVHlwZSA9IERyb3Bkb3duQXV0b0Nsb3NlVHlwZS5JdGVtQ2xpY2spIHtcbiAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc09wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgICAgICAgdGhpcy5pc0Rpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5hdXRvQ2xvc2VNb2RlID0gYXV0b0Nsb3NlTW9kZTtcblxuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgfVxuXG4gICAgcHVibGljIHNldE9wZW5TdGF0ZShpc09wZW46Ym9vbGVhbiwgcmVmbGVjdEluUGFyZW50OmJvb2xlYW4gPSBmYWxzZSk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzT3BlbiAhPT0gaXNPcGVuICYmICF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIC8vIE9ubHkgdXBkYXRlIHRoZSBzdGF0ZSBpZiBpdCBoYXMgY2hhbmdlZCwgYW5kIHRoZSBkcm9wZG93biBpc24ndCBkaXNhYmxlZC5cbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gISFpc09wZW47XG4gICAgICAgICAgICB0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIFdlIG11c3QgZGVsYXkgdGhlIGVtaXR0aW5nIHRvIGF2b2lkIHRoZSAnY2hhbmdlZCBhZnRlciBjaGVja2VkJyBBbmd1bGFyIGVycm9ycy5cbiAgICAgICAgICAgIHRoaXMuZGVsYXkoKCkgPT4gdGhpcy5pc09wZW5DaGFuZ2UuZW1pdCh0aGlzLmlzT3BlbikpO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2xvc2UgdGhlIGNoaWxkIGRyb3Bkb3ducyB3aGVuIHRoaXMgb25lIGNsb3Nlcy5cbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goYyA9PiBjLnNldE9wZW5TdGF0ZSh0aGlzLmlzT3BlbikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQgJiYgcmVmbGVjdEluUGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gT3BlbiB0aGUgcGFyZW50IGRyb3Bkb3ducyB3aGVuIHRoaXMgb25lIG9wZW5zLlxuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LnNldE9wZW5TdGF0ZSh0aGlzLmlzT3BlbiwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc09wZW4gIT09IGlzT3BlbiAmJiB0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBzdGF0ZSBoYXMgY2hhbmdlZCwgYnV0IHRoZSBkcm9wZG93biBpcyBkaXNhYmxlZCwgcmUtZW1pdCB0aGUgb3JpZ2luYWwgaXNPcGVuIHZhbHVlLlxuICAgICAgICAgICAgdGhpcy5kZWxheSgoKSA9PiB0aGlzLmlzT3BlbkNoYW5nZS5lbWl0KHRoaXMuaXNPcGVuKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOmJvb2xlYW4pOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc0Rpc2FibGVkICE9PSBpc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICBpZiAoISFpc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2xvc2UgdGhlIGRyb3Bkb3duIGFzIGl0IGlzIG5vdyBkaXNhYmxlZFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5pc0Rpc2FibGVkID0gISFpc0Rpc2FibGVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZU9wZW5TdGF0ZSgpOnZvaWQge1xuICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZSghdGhpcy5pc09wZW4pO1xuICAgIH1cblxuICAgIC8vIFJlZ2lzdGVycyBhIGRyb3Bkb3duIHNlcnZpY2UgYXMgYSBjaGlsZCBvZiB0aGlzIHNlcnZpY2UuXG4gICAgcHVibGljIHJlZ2lzdGVyQ2hpbGQoY2hpbGQ6RHJvcGRvd25TZXJ2aWNlKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQ2hpbGRSZWdpc3RlcmVkKGNoaWxkKSkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudCA9IHRoaXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZWN1cnNpdmUgbWV0aG9kIHRvIGNoZWNrIGlmIHRoZSBwcm92aWRlZCBkcm9wZG93biBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQgYXMgYSBjaGlsZCwgb3IgaXMgYSBkZXNjZW5kYW50IG9mIGEgY2hpbGQuXG4gICAgcHVibGljIGlzQ2hpbGRSZWdpc3RlcmVkKGNoaWxkOkRyb3Bkb3duU2VydmljZSk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzID09PSBjaGlsZCB8fCAhIXRoaXMuY2hpbGRyZW5cbiAgICAgICAgICAgIC5maW5kKGMgPT4gISFjLmNoaWxkcmVuXG4gICAgICAgICAgICAgICAgLmZpbmQoY0NoaWxkID0+IGNDaGlsZC5pc0NoaWxkUmVnaXN0ZXJlZChjaGlsZCkpKTtcbiAgICB9XG5cbiAgICAvLyBXaXBlcyBhbnkgbmVzdGVkIGRhdGEsIHNvIGFsbCBzZXJ2aWNlcyBjYW4gYmUgY2xlYW5seSByZWF0dGFjaGVkLlxuICAgIHB1YmxpYyBjbGVhckNoaWxkcmVuKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChjID0+IHtcbiAgICAgICAgICAgIGMucGFyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIH1cblxuICAgIC8vIE1ldGhvZCBmb3IgZGVsYXlpbmcgYW4gZXZlbnQgaW50byB0aGUgbmV4dCB0aWNrLCB0byBhdm9pZCBBbmd1bGFyIFwiY2hhbmdlZCBhZnRlciBjaGVja2VkXCIgZXJyb3IuXG4gICAgcHJpdmF0ZSBkZWxheShjYWxsYmFjazooKSA9PiB2b2lkKTp2b2lkIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjYWxsYmFjaygpKTtcbiAgICB9XG59XG4iXX0=