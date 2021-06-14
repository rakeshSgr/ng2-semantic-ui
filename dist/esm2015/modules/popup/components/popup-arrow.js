import { __decorate, __metadata } from "tslib";
import { Component, Input, HostBinding } from "@angular/core";
import { PositioningPlacement } from "../../../misc/util/internal";
let SuiPopupArrow = class SuiPopupArrow {
    get direction() {
        if (this.placement) {
            return this.placement.split(" ").shift();
        }
    }
    get alignment() {
        if (this.placement) {
            const alignment = this.placement.split(" ").pop();
            if (alignment === this.direction) {
                return "center";
            }
            return alignment;
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], SuiPopupArrow.prototype, "placement", void 0);
__decorate([
    HostBinding("class.inverted"),
    Input(),
    __metadata("design:type", Boolean)
], SuiPopupArrow.prototype, "inverted", void 0);
SuiPopupArrow = __decorate([
    Component({
        selector: "sui-popup-arrow",
        template: `
<div class="dynamic arrow" [attr.direction]="direction" *ngIf="alignment == 'center'"></div>
<div class="static arrow" [attr.direction]="direction" [attr.alignment]="alignment" *ngIf="alignment != 'center'"></div>
`,
        styles: [`
.arrow {
    position: absolute;
    width: 0.71428571em;
    height: 0.71428571em;
    background: #ffffff;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    z-index: 2;
}

:host.inverted .arrow {
    background: #1b1c1d;
}

.arrow[direction="top"] {
    bottom: -0.30714286em;
    box-shadow: 1px 1px 0 0 #bababc;
}

.arrow[direction="left"] {
    right: -0.30714286em;
    box-shadow: 1px -1px 1px 0 #bababc;
}

.arrow[direction="bottom"] {
    top: -0.30714286em;
    box-shadow: -1px -1px 0 0 #bababc;
}

.arrow[direction="right"] {
    left: -0.30714286em;
    box-shadow: -1px 1px 1px 0 #bababc;
}

.static.arrow[direction="bottom"][alignment="left"],
.static.arrow[direction="top"][alignment="left"] {
    left: 1em;
    right: auto;
}

.static.arrow[direction="left"][alignment="top"],
.static.arrow[direction="right"][alignment="top"] {
    top: 1em;
    bottom: auto;
}

.static.arrow[direction="bottom"][alignment="right"],
.static.arrow[direction="top"][alignment="right"] {
    left: auto;
    right: 1em;
}

.static.arrow[direction="left"][alignment="bottom"],
.static.arrow[direction="right"][alignment="bottom"] {
    top: auto;
    bottom: 1em;
}
`]
    })
], SuiPopupArrow);
export { SuiPopupArrow };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAtYXJyb3cuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL3BvcHVwL2NvbXBvbmVudHMvcG9wdXAtYXJyb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQXFFbkUsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQVF0QixJQUFXLFNBQVM7UUFDaEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDNUM7SUFDTCxDQUFDO0lBRUQsSUFBVyxTQUFTO1FBQ2hCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNsRCxJQUFJLFNBQVMsS0FBSyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUM5QixPQUFPLFFBQVEsQ0FBQzthQUNuQjtZQUNELE9BQU8sU0FBUyxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQztDQUNKLENBQUE7QUFyQkc7SUFEQyxLQUFLLEVBQUU7O2dEQUM4QjtBQUl0QztJQUZDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztJQUM3QixLQUFLLEVBQUU7OytDQUNnQjtBQU5mLGFBQWE7SUFuRXpCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsUUFBUSxFQUFFOzs7Q0FHYjtpQkFDWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0EyRFo7S0FDQSxDQUFDO0dBQ1csYUFBYSxDQXVCekI7U0F2QlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBvc2l0aW9uaW5nUGxhY2VtZW50IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktcG9wdXAtYXJyb3dcIixcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cImR5bmFtaWMgYXJyb3dcIiBbYXR0ci5kaXJlY3Rpb25dPVwiZGlyZWN0aW9uXCIgKm5nSWY9XCJhbGlnbm1lbnQgPT0gJ2NlbnRlcidcIj48L2Rpdj5cbjxkaXYgY2xhc3M9XCJzdGF0aWMgYXJyb3dcIiBbYXR0ci5kaXJlY3Rpb25dPVwiZGlyZWN0aW9uXCIgW2F0dHIuYWxpZ25tZW50XT1cImFsaWdubWVudFwiICpuZ0lmPVwiYWxpZ25tZW50ICE9ICdjZW50ZXInXCI+PC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2Bcbi5hcnJvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAwLjcxNDI4NTcxZW07XG4gICAgaGVpZ2h0OiAwLjcxNDI4NTcxZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB6LWluZGV4OiAyO1xufVxuXG46aG9zdC5pbnZlcnRlZCAuYXJyb3cge1xuICAgIGJhY2tncm91bmQ6ICMxYjFjMWQ7XG59XG5cbi5hcnJvd1tkaXJlY3Rpb249XCJ0b3BcIl0ge1xuICAgIGJvdHRvbTogLTAuMzA3MTQyODZlbTtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDAgMCAjYmFiYWJjO1xufVxuXG4uYXJyb3dbZGlyZWN0aW9uPVwibGVmdFwiXSB7XG4gICAgcmlnaHQ6IC0wLjMwNzE0Mjg2ZW07XG4gICAgYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDAgI2JhYmFiYztcbn1cblxuLmFycm93W2RpcmVjdGlvbj1cImJvdHRvbVwiXSB7XG4gICAgdG9wOiAtMC4zMDcxNDI4NmVtO1xuICAgIGJveC1zaGFkb3c6IC0xcHggLTFweCAwIDAgI2JhYmFiYztcbn1cblxuLmFycm93W2RpcmVjdGlvbj1cInJpZ2h0XCJdIHtcbiAgICBsZWZ0OiAtMC4zMDcxNDI4NmVtO1xuICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwICNiYWJhYmM7XG59XG5cbi5zdGF0aWMuYXJyb3dbZGlyZWN0aW9uPVwiYm90dG9tXCJdW2FsaWdubWVudD1cImxlZnRcIl0sXG4uc3RhdGljLmFycm93W2RpcmVjdGlvbj1cInRvcFwiXVthbGlnbm1lbnQ9XCJsZWZ0XCJdIHtcbiAgICBsZWZ0OiAxZW07XG4gICAgcmlnaHQ6IGF1dG87XG59XG5cbi5zdGF0aWMuYXJyb3dbZGlyZWN0aW9uPVwibGVmdFwiXVthbGlnbm1lbnQ9XCJ0b3BcIl0sXG4uc3RhdGljLmFycm93W2RpcmVjdGlvbj1cInJpZ2h0XCJdW2FsaWdubWVudD1cInRvcFwiXSB7XG4gICAgdG9wOiAxZW07XG4gICAgYm90dG9tOiBhdXRvO1xufVxuXG4uc3RhdGljLmFycm93W2RpcmVjdGlvbj1cImJvdHRvbVwiXVthbGlnbm1lbnQ9XCJyaWdodFwiXSxcbi5zdGF0aWMuYXJyb3dbZGlyZWN0aW9uPVwidG9wXCJdW2FsaWdubWVudD1cInJpZ2h0XCJdIHtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiAxZW07XG59XG5cbi5zdGF0aWMuYXJyb3dbZGlyZWN0aW9uPVwibGVmdFwiXVthbGlnbm1lbnQ9XCJib3R0b21cIl0sXG4uc3RhdGljLmFycm93W2RpcmVjdGlvbj1cInJpZ2h0XCJdW2FsaWdubWVudD1cImJvdHRvbVwiXSB7XG4gICAgdG9wOiBhdXRvO1xuICAgIGJvdHRvbTogMWVtO1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpUG9wdXBBcnJvdyB7XG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcGxhY2VtZW50OlBvc2l0aW9uaW5nUGxhY2VtZW50O1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuaW52ZXJ0ZWRcIilcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpbnZlcnRlZDpib29sZWFuO1xuXG4gICAgcHVibGljIGdldCBkaXJlY3Rpb24oKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy5wbGFjZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYWNlbWVudC5zcGxpdChcIiBcIikuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYWxpZ25tZW50KCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMucGxhY2VtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBhbGlnbm1lbnQgPSB0aGlzLnBsYWNlbWVudC5zcGxpdChcIiBcIikucG9wKCk7XG4gICAgICAgICAgICBpZiAoYWxpZ25tZW50ID09PSB0aGlzLmRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImNlbnRlclwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFsaWdubWVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==