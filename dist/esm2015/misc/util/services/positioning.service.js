/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import Popper from "popper.js";
export const /** @type {?} */ PositioningPlacement = {
    Auto: "auto",
    TopLeft: "top left",
    Top: "top",
    TopRight: "top right",
    LeftTop: "left top",
    Left: "left",
    LeftBottom: "left bottom",
    BottomLeft: "bottom left",
    Bottom: "bottom",
    BottomRight: "bottom right",
    RightTop: "right top",
    Right: "right",
    RightBottom: "right bottom"
};
/**
 * @record
 */
export function IPositionBoundingBox() { }
function IPositionBoundingBox_tsickle_Closure_declarations() {
    /** @type {?} */
    IPositionBoundingBox.prototype.width;
    /** @type {?} */
    IPositionBoundingBox.prototype.height;
    /** @type {?} */
    IPositionBoundingBox.prototype.top;
    /** @type {?} */
    IPositionBoundingBox.prototype.left;
    /** @type {?} */
    IPositionBoundingBox.prototype.bottom;
    /** @type {?} */
    IPositionBoundingBox.prototype.right;
}
/**
 * @param {?} placement
 * @return {?}
 */
function placementToPopper(placement) {
    if (!placement || placement === PositioningPlacement.Auto) {
        return "auto";
    }
    // All placements of the format: `direction alignment`, e.g. `top left`.
    const [direction, alignment] = placement.split(" ");
    // Direction alone covers case of just `top`, `left`, `bottom`, `right`.
    const /** @type {?} */ chosenPlacement = [direction];
    // Add `start` / `end` to placement, depending on alignment direction.
    switch (alignment) {
        case "top":
        case "left":
            chosenPlacement.push("start");
            break;
        case "bottom":
        case "right":
            chosenPlacement.push("end");
            break;
    }
    // Join with hyphen to create Popper compatible placement.
    return chosenPlacement.join("-");
}
/**
 * @param {?} popper
 * @return {?}
 */
function popperToPlacement(popper) {
    if (!popper || popper === "auto") {
        return "auto";
    }
    const [direction, alignment] = popper.split("-");
    const /** @type {?} */ chosenPlacement = [direction];
    switch (direction) {
        case "top":
        case "bottom":
            switch (alignment) {
                case "start":
                    chosenPlacement.push("left");
                    break;
                case "end":
                    chosenPlacement.push("right");
                    break;
            }
            break;
        case "left":
        case "right":
            switch (alignment) {
                case "start":
                    chosenPlacement.push("top");
                    break;
                case "end":
                    chosenPlacement.push("bottom");
                    break;
            }
            break;
    }
    return chosenPlacement.join(" ");
}
export class PositioningService {
    /**
     * @return {?}
     */
    get placement() {
        return this._placement;
    }
    /**
     * @param {?} placement
     * @return {?}
     */
    set placement(placement) {
        this._placement = placement;
        if (this._popper) {
            this._popper.options.placement = placementToPopper(placement);
        }
    }
    /**
     * @param {?} hasArrow
     * @return {?}
     */
    set hasArrow(hasArrow) {
        this._hasArrow = hasArrow;
    }
    /**
     * @return {?}
     */
    get actualPlacement() {
        if (!this._popperState) {
            return PositioningPlacement.Auto;
        }
        return popperToPlacement(this._popperState.placement);
    }
    /**
     * @return {?}
     */
    get state() {
        return this._popperState;
    }
    /**
     * @param {?} anchor
     * @param {?} subject
     * @param {?} placement
     * @param {?=} arrowSelector
     */
    constructor(anchor, subject, placement, arrowSelector) {
        this.anchor = anchor;
        this.subject = subject;
        this._placement = placement;
        this._arrowSelector = arrowSelector;
        this.init();
    }
    /**
     * @return {?}
     */
    init() {
        const /** @type {?} */ modifiers = {
            computeStyle: {
                gpuAcceleration: false
            },
            preventOverflow: {
                escapeWithReference: true,
                boundariesElement: document.body
            },
            arrow: {
                element: this._arrowSelector
            },
            offset: {
                fn: (data) => {
                    if (this._hasArrow) {
                        const /** @type {?} */ offsets = this.calculateOffsets();
                        data.offsets.popper.left += offsets.left;
                        data.offsets.popper.top += offsets.top;
                    }
                    return data;
                }
            }
        };
        if (!this._arrowSelector) {
            delete modifiers.arrow;
        }
        this._popper = new Popper(this.anchor.nativeElement, this.subject.nativeElement, {
            placement: placementToPopper(this._placement),
            modifiers,
            onCreate: initial => this._popperState = initial,
            onUpdate: update => this._popperState = update
        });
    }
    /**
     * @return {?}
     */
    update() {
        this._popper.update();
    }
    /**
     * @return {?}
     */
    destroy() {
        this._popper.destroy();
    }
    /**
     * @return {?}
     */
    calculateOffsets() {
        let /** @type {?} */ left = 0;
        let /** @type {?} */ top = 0;
        // To support correct positioning for all popup sizes we should calculate offset using em
        const /** @type {?} */ fontSize = parseFloat(window.getComputedStyle(this.subject.nativeElement).getPropertyValue("font-size"));
        // The Semantic UI popup arrow width and height are 0.71428571em and the margin from the popup edge is 1em
        const /** @type {?} */ arrowCenter = (0.71428571 / 2 + 1) * fontSize;
        if (this.anchor.nativeElement.offsetWidth <= arrowCenter * 2) {
            const /** @type {?} */ anchorCenterWidth = this.anchor.nativeElement.offsetWidth / 2;
            if (this._placement === PositioningPlacement.TopLeft || this._placement === PositioningPlacement.BottomLeft) {
                left = anchorCenterWidth - arrowCenter;
            }
            if (this._placement === PositioningPlacement.TopRight || this._placement === PositioningPlacement.BottomRight) {
                left = arrowCenter - anchorCenterWidth;
            }
        }
        if (this.anchor.nativeElement.offsetHeight <= arrowCenter * 2) {
            const /** @type {?} */ anchorCenterHeight = this.anchor.nativeElement.offsetHeight / 2;
            if (this._placement === PositioningPlacement.LeftTop || this._placement === PositioningPlacement.RightTop) {
                top = anchorCenterHeight - arrowCenter;
            }
            if (this._placement === PositioningPlacement.LeftBottom || this._placement === PositioningPlacement.RightBottom) {
                top = arrowCenter - anchorCenterHeight;
            }
        }
        return { top, left, width: 0, height: 0 };
    }
}
function PositioningService_tsickle_Closure_declarations() {
    /** @type {?} */
    PositioningService.prototype.anchor;
    /** @type {?} */
    PositioningService.prototype.subject;
    /** @type {?} */
    PositioningService.prototype._popper;
    /** @type {?} */
    PositioningService.prototype._popperState;
    /** @type {?} */
    PositioningService.prototype._placement;
    /** @type {?} */
    PositioningService.prototype._hasArrow;
    /** @type {?} */
    PositioningService.prototype._arrowSelector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb25pbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1pc2MvdXRpbC9zZXJ2aWNlcy9wb3NpdGlvbmluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLE1BQXFELE1BQU0sV0FBVyxDQUFDO0FBbUI5RSxNQUFNLENBQUMsdUJBQU0sb0JBQW9CLEdBQUc7SUFDaEMsSUFBSSxFQUFFLE1BQThCO0lBQ3BDLE9BQU8sRUFBRSxVQUFrQztJQUMzQyxHQUFHLEVBQUUsS0FBNkI7SUFDbEMsUUFBUSxFQUFFLFdBQW1DO0lBQzdDLE9BQU8sRUFBRSxVQUFrQztJQUMzQyxJQUFJLEVBQUUsTUFBOEI7SUFDcEMsVUFBVSxFQUFFLGFBQXFDO0lBQ2pELFVBQVUsRUFBRSxhQUFxQztJQUNqRCxNQUFNLEVBQUUsUUFBZ0M7SUFDeEMsV0FBVyxFQUFFLGNBQXNDO0lBQ25ELFFBQVEsRUFBRSxXQUFtQztJQUM3QyxLQUFLLEVBQUUsT0FBK0I7SUFDdEMsV0FBVyxFQUFFLGNBQXNDO0NBQ3RELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV0YsU0FBUyxpQkFBaUIsQ0FBQyxTQUE4QjtJQUNyRCxJQUFJLENBQUMsU0FBUyxJQUFJLFNBQVMsS0FBSyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUU7UUFDdkQsT0FBTyxNQUFNLENBQUM7S0FDakI7O0lBR0QsTUFBTSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztJQUdwRCx1QkFBTSxlQUFlLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7SUFHcEMsUUFBUSxTQUFTLEVBQUU7UUFDZixLQUFLLEtBQUssQ0FBQztRQUNYLEtBQUssTUFBTTtZQUNQLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUIsTUFBTTtRQUNWLEtBQUss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SyxvQkFBb0IsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUU7Z0JBQzdHLEdBQUcsR0FBRyxXQUFXLEdBQUcsa0JBQWtCLENBQUM7YUFDMUM7U0FDSjtRQUNELE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDOztDQUdqRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IFBvcHBlciwgeyBNb2RpZmllcnMsIFBvcHBlck9wdGlvbnMsIFBsYWNlbWVudCwgRGF0YSB9IGZyb20gXCJwb3BwZXIuanNcIjtcblxudHlwZSBQb3BwZXJNb2RpZmllcnMgPSBNb2RpZmllcnMgJiB7XG4gICAgY29tcHV0ZVN0eWxlPzp7XG4gICAgICAgIGdwdUFjY2VsZXJhdGlvbjpib29sZWFuO1xuICAgIH07XG59O1xudHlwZSBQb3BwZXJJbnN0YW5jZSA9IFBvcHBlciAmIHtcbiAgICBvcHRpb25zOlBvcHBlck9wdGlvbnMgJiB7XG4gICAgICAgIG1vZGlmaWVyczpQb3BwZXJNb2RpZmllcnM7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIFBvc2l0aW9uaW5nUGxhY2VtZW50ID0gXCJhdXRvXCIgfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvcCBsZWZ0XCIgfCBcInRvcFwiIHwgXCJ0b3AgcmlnaHRcIiB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tIGxlZnRcIiB8IFwiYm90dG9tXCIgfCBcImJvdHRvbSByaWdodFwiIHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0IHRvcFwiIHwgXCJsZWZ0XCIgfCBcImxlZnQgYm90dG9tXCIgfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0IHRvcFwiIHwgXCJyaWdodFwiIHwgXCJyaWdodCBib3R0b21cIjtcblxuZXhwb3J0IGNvbnN0IFBvc2l0aW9uaW5nUGxhY2VtZW50ID0ge1xuICAgIEF1dG86IFwiYXV0b1wiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50LFxuICAgIFRvcExlZnQ6IFwidG9wIGxlZnRcIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBUb3A6IFwidG9wXCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgVG9wUmlnaHQ6IFwidG9wIHJpZ2h0XCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgTGVmdFRvcDogXCJsZWZ0IHRvcFwiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50LFxuICAgIExlZnQ6IFwibGVmdFwiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50LFxuICAgIExlZnRCb3R0b206IFwibGVmdCBib3R0b21cIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBCb3R0b21MZWZ0OiBcImJvdHRvbSBsZWZ0XCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgQm90dG9tOiBcImJvdHRvbVwiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50LFxuICAgIEJvdHRvbVJpZ2h0OiBcImJvdHRvbSByaWdodFwiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50LFxuICAgIFJpZ2h0VG9wOiBcInJpZ2h0IHRvcFwiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50LFxuICAgIFJpZ2h0OiBcInJpZ2h0XCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgUmlnaHRCb3R0b206IFwicmlnaHQgYm90dG9tXCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnRcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBvc2l0aW9uQm91bmRpbmdCb3gge1xuICAgIHdpZHRoOm51bWJlcjtcbiAgICBoZWlnaHQ6bnVtYmVyO1xuICAgIHRvcDpudW1iZXI7XG4gICAgbGVmdDpudW1iZXI7XG4gICAgYm90dG9tOm51bWJlcjtcbiAgICByaWdodDpudW1iZXI7XG59XG5cbmZ1bmN0aW9uIHBsYWNlbWVudFRvUG9wcGVyKHBsYWNlbWVudDpQb3NpdGlvbmluZ1BsYWNlbWVudCk6UGxhY2VtZW50IHtcbiAgICBpZiAoIXBsYWNlbWVudCB8fCBwbGFjZW1lbnQgPT09IFBvc2l0aW9uaW5nUGxhY2VtZW50LkF1dG8pIHtcbiAgICAgICAgcmV0dXJuIFwiYXV0b1wiO1xuICAgIH1cblxuICAgIC8vIEFsbCBwbGFjZW1lbnRzIG9mIHRoZSBmb3JtYXQ6IGBkaXJlY3Rpb24gYWxpZ25tZW50YCwgZS5nLiBgdG9wIGxlZnRgLlxuICAgIGNvbnN0IFtkaXJlY3Rpb24sIGFsaWdubWVudF0gPSBwbGFjZW1lbnQuc3BsaXQoXCIgXCIpO1xuXG4gICAgLy8gRGlyZWN0aW9uIGFsb25lIGNvdmVycyBjYXNlIG9mIGp1c3QgYHRvcGAsIGBsZWZ0YCwgYGJvdHRvbWAsIGByaWdodGAuXG4gICAgY29uc3QgY2hvc2VuUGxhY2VtZW50ID0gW2RpcmVjdGlvbl07XG5cbiAgICAvLyBBZGQgYHN0YXJ0YCAvIGBlbmRgIHRvIHBsYWNlbWVudCwgZGVwZW5kaW5nIG9uIGFsaWdubWVudCBkaXJlY3Rpb24uXG4gICAgc3dpdGNoIChhbGlnbm1lbnQpIHtcbiAgICAgICAgY2FzZSBcInRvcFwiOlxuICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAgICAgY2hvc2VuUGxhY2VtZW50LnB1c2goXCJzdGFydFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYm90dG9tXCI6XG4gICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgY2hvc2VuUGxhY2VtZW50LnB1c2goXCJlbmRcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvLyBKb2luIHdpdGggaHlwaGVuIHRvIGNyZWF0ZSBQb3BwZXIgY29tcGF0aWJsZSBwbGFjZW1lbnQuXG4gICAgcmV0dXJuIGNob3NlblBsYWNlbWVudC5qb2luKFwiLVwiKSBhcyBQbGFjZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHBvcHBlclRvUGxhY2VtZW50KHBvcHBlcjpzdHJpbmcpOlBvc2l0aW9uaW5nUGxhY2VtZW50IHtcbiAgICBpZiAoIXBvcHBlciB8fCBwb3BwZXIgPT09IFwiYXV0b1wiKSB7XG4gICAgICAgIHJldHVybiBcImF1dG9cIjtcbiAgICB9XG5cbiAgICBjb25zdCBbZGlyZWN0aW9uLCBhbGlnbm1lbnRdID0gcG9wcGVyLnNwbGl0KFwiLVwiKTtcblxuICAgIGNvbnN0IGNob3NlblBsYWNlbWVudCA9IFtkaXJlY3Rpb25dO1xuXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgY2FzZSBcInRvcFwiOlxuICAgICAgICBjYXNlIFwiYm90dG9tXCI6XG4gICAgICAgICAgICBzd2l0Y2ggKGFsaWdubWVudCkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzdGFydFwiOlxuICAgICAgICAgICAgICAgICAgICBjaG9zZW5QbGFjZW1lbnQucHVzaChcImxlZnRcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICAgICAgY2hvc2VuUGxhY2VtZW50LnB1c2goXCJyaWdodFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICBzd2l0Y2ggKGFsaWdubWVudCkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzdGFydFwiOlxuICAgICAgICAgICAgICAgICAgICBjaG9zZW5QbGFjZW1lbnQucHVzaChcInRvcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgICAgICBjaG9zZW5QbGFjZW1lbnQucHVzaChcImJvdHRvbVwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gY2hvc2VuUGxhY2VtZW50LmpvaW4oXCIgXCIpIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50O1xufVxuXG5leHBvcnQgY2xhc3MgUG9zaXRpb25pbmdTZXJ2aWNlIHtcbiAgICBwdWJsaWMgcmVhZG9ubHkgYW5jaG9yOkVsZW1lbnRSZWY7XG4gICAgcHVibGljIHJlYWRvbmx5IHN1YmplY3Q6RWxlbWVudFJlZjtcblxuICAgIHByaXZhdGUgX3BvcHBlcjpQb3BwZXJJbnN0YW5jZTtcbiAgICBwcml2YXRlIF9wb3BwZXJTdGF0ZTpEYXRhO1xuICAgIHByaXZhdGUgX3BsYWNlbWVudDpQb3NpdGlvbmluZ1BsYWNlbWVudDtcbiAgICBwcml2YXRlIF9oYXNBcnJvdzpib29sZWFuO1xuICAgIHByaXZhdGUgX2Fycm93U2VsZWN0b3I6c3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgcHVibGljIGdldCBwbGFjZW1lbnQoKTpQb3NpdGlvbmluZ1BsYWNlbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGFjZW1lbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwbGFjZW1lbnQocGxhY2VtZW50OlBvc2l0aW9uaW5nUGxhY2VtZW50KSB7XG4gICAgICAgIHRoaXMuX3BsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICAgICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgICAgICAgdGhpcy5fcG9wcGVyLm9wdGlvbnMucGxhY2VtZW50ID0gcGxhY2VtZW50VG9Qb3BwZXIocGxhY2VtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaGFzQXJyb3coaGFzQXJyb3c6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl9oYXNBcnJvdyA9IGhhc0Fycm93O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYWN0dWFsUGxhY2VtZW50KCk6UG9zaXRpb25pbmdQbGFjZW1lbnQge1xuICAgICAgICBpZiAoIXRoaXMuX3BvcHBlclN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gUG9zaXRpb25pbmdQbGFjZW1lbnQuQXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwb3BwZXJUb1BsYWNlbWVudCh0aGlzLl9wb3BwZXJTdGF0ZS5wbGFjZW1lbnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc3RhdGUoKTpEYXRhIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvcHBlclN0YXRlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGFuY2hvcjpFbGVtZW50UmVmLCBzdWJqZWN0OkVsZW1lbnRSZWYsIHBsYWNlbWVudDpQb3NpdGlvbmluZ1BsYWNlbWVudCwgYXJyb3dTZWxlY3Rvcj86c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYW5jaG9yID0gYW5jaG9yO1xuICAgICAgICB0aGlzLnN1YmplY3QgPSBzdWJqZWN0O1xuICAgICAgICB0aGlzLl9wbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgICAgIHRoaXMuX2Fycm93U2VsZWN0b3IgPSBhcnJvd1NlbGVjdG9yO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdCgpOnZvaWQge1xuICAgICAgICBjb25zdCBtb2RpZmllcnM6UG9wcGVyTW9kaWZpZXJzID0ge1xuICAgICAgICAgICAgY29tcHV0ZVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgZ3B1QWNjZWxlcmF0aW9uOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByZXZlbnRPdmVyZmxvdzoge1xuICAgICAgICAgICAgICAgIGVzY2FwZVdpdGhSZWZlcmVuY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgYm91bmRhcmllc0VsZW1lbnQ6IGRvY3VtZW50LmJvZHlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhcnJvdzoge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuX2Fycm93U2VsZWN0b3JcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgICAgICBmbjogKGRhdGE6UG9wcGVyLkRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2hhc0Fycm93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXRzID0gdGhpcy5jYWxjdWxhdGVPZmZzZXRzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLm9mZnNldHMucG9wcGVyLmxlZnQgKz0gb2Zmc2V0cy5sZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5vZmZzZXRzLnBvcHBlci50b3AgKz0gb2Zmc2V0cy50b3A7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghdGhpcy5fYXJyb3dTZWxlY3Rvcikge1xuICAgICAgICAgICAgZGVsZXRlIG1vZGlmaWVycy5hcnJvdztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3BvcHBlciA9IG5ldyBQb3BwZXIoXG4gICAgICAgICAgICB0aGlzLmFuY2hvci5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgdGhpcy5zdWJqZWN0Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnRUb1BvcHBlcih0aGlzLl9wbGFjZW1lbnQpLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVycyxcbiAgICAgICAgICAgICAgICBvbkNyZWF0ZTogaW5pdGlhbCA9PiB0aGlzLl9wb3BwZXJTdGF0ZSA9IGluaXRpYWwsXG4gICAgICAgICAgICAgICAgb25VcGRhdGU6IHVwZGF0ZSA9PiB0aGlzLl9wb3BwZXJTdGF0ZSA9IHVwZGF0ZVxuICAgICAgICAgICAgfSkgYXMgUG9wcGVySW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNhbGN1bGF0ZU9mZnNldHMoKTpQb3BwZXIuT2Zmc2V0IHtcbiAgICAgICAgbGV0IGxlZnQgPSAwOyBsZXQgdG9wID0gMDtcblxuICAgICAgICAvLyBUbyBzdXBwb3J0IGNvcnJlY3QgcG9zaXRpb25pbmcgZm9yIGFsbCBwb3B1cCBzaXplcyB3ZSBzaG91bGQgY2FsY3VsYXRlIG9mZnNldCB1c2luZyBlbVxuICAgICAgICBjb25zdCBmb250U2l6ZSA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5zdWJqZWN0Lm5hdGl2ZUVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXNpemVcIikpO1xuICAgICAgICAvLyBUaGUgU2VtYW50aWMgVUkgcG9wdXAgYXJyb3cgd2lkdGggYW5kIGhlaWdodCBhcmUgMC43MTQyODU3MWVtIGFuZCB0aGUgbWFyZ2luIGZyb20gdGhlIHBvcHVwIGVkZ2UgaXMgMWVtXG4gICAgICAgIGNvbnN0IGFycm93Q2VudGVyID0gKDAuNzE0Mjg1NzEgLyAyICsgMSkgKiBmb250U2l6ZTtcblxuICAgICAgICBpZiAodGhpcy5hbmNob3IubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCA8PSBhcnJvd0NlbnRlciAqIDIpIHtcbiAgICAgICAgICAgIGNvbnN0IGFuY2hvckNlbnRlcldpZHRoID0gdGhpcy5hbmNob3IubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAvIDI7XG4gICAgICAgICAgICBpZiAodGhpcy5fcGxhY2VtZW50ID09PSBQb3NpdGlvbmluZ1BsYWNlbWVudC5Ub3BMZWZ0IHx8IHRoaXMuX3BsYWNlbWVudCA9PT0gUG9zaXRpb25pbmdQbGFjZW1lbnQuQm90dG9tTGVmdCkge1xuICAgICAgICAgICAgICAgIGxlZnQgPSBhbmNob3JDZW50ZXJXaWR0aCAtIGFycm93Q2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX3BsYWNlbWVudCA9PT0gUG9zaXRpb25pbmdQbGFjZW1lbnQuVG9wUmlnaHQgfHwgdGhpcy5fcGxhY2VtZW50ID09PSBQb3NpdGlvbmluZ1BsYWNlbWVudC5Cb3R0b21SaWdodCkge1xuICAgICAgICAgICAgICAgIGxlZnQgPSBhcnJvd0NlbnRlciAtIGFuY2hvckNlbnRlcldpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYW5jaG9yLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0IDw9IGFycm93Q2VudGVyICogMikge1xuICAgICAgICAgICAgY29uc3QgYW5jaG9yQ2VudGVySGVpZ2h0ID0gdGhpcy5hbmNob3IubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgLyAyO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3BsYWNlbWVudCA9PT0gUG9zaXRpb25pbmdQbGFjZW1lbnQuTGVmdFRvcCB8fCB0aGlzLl9wbGFjZW1lbnQgPT09IFBvc2l0aW9uaW5nUGxhY2VtZW50LlJpZ2h0VG9wKSB7XG4gICAgICAgICAgICAgICAgdG9wID0gYW5jaG9yQ2VudGVySGVpZ2h0IC0gYXJyb3dDZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fcGxhY2VtZW50ID09PSBQb3NpdGlvbmluZ1BsYWNlbWVudC5MZWZ0Qm90dG9tIHx8IHRoaXMuX3BsYWNlbWVudCA9PT0gUG9zaXRpb25pbmdQbGFjZW1lbnQuUmlnaHRCb3R0b20pIHtcbiAgICAgICAgICAgICAgICB0b3AgPSBhcnJvd0NlbnRlciAtIGFuY2hvckNlbnRlckhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB0b3AsIGxlZnQsIHdpZHRoOiAwLCBoZWlnaHQ6IDAgfTtcbiAgICB9XG5cbn1cbiJdfQ==