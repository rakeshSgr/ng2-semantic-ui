/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, HostBinding } from "@angular/core";
export class SuiPagination {
    constructor() {
        this.hasClasses = true;
        this.pageChange = new EventEmitter();
        this.pageSize = 10;
        this._page = 1;
        this._pages = [];
        this.pageCount = 1;
        this.hasNavigationLinks = true;
        this.hasBoundaryLinks = false;
        this.canRotate = false;
        this.hasEllipses = true;
    }
    /**
     * @return {?}
     */
    get maxSize() {
        return this._maxSize;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxSize(value) {
        this._maxSize = (value != undefined) ? Math.max(value, 1) : undefined;
    }
    /**
     * @return {?}
     */
    get collectionSize() {
        return this._collectionSize;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set collectionSize(value) {
        this._collectionSize = Math.max(value, 0);
        this.pageCount = Math.max(1, Math.ceil(this._collectionSize / this.pageSize));
    }
    /**
     * @return {?}
     */
    get hasNavigationLinks() {
        const /** @type {?} */ maxSize = this._maxSize || this.pageCount;
        return this._hasNavigationLinks || maxSize < this.pageCount;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set hasNavigationLinks(value) {
        this._hasNavigationLinks = value;
    }
    /**
     * @return {?}
     */
    get page() {
        return this._page;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set page(value) {
        this.setPage(value);
    }
    /**
     * @return {?}
     */
    get pages() {
        return this._pages;
    }
    /**
     * @return {?}
     */
    hasPrevious() {
        return this.page > 1;
    }
    /**
     * @return {?}
     */
    hasNext() {
        return this.page < this.pageCount;
    }
    /**
     * @param {?} newPage
     * @return {?}
     */
    setPage(newPage) {
        const /** @type {?} */ value = (Number.isInteger(newPage)) ? Math.min(Math.max(newPage, 1), this.pageCount) : 1;
        if (value !== this._page) {
            this._page = value;
            this.pageChange.emit(this._page);
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.updatePages();
    }
    /**
     * @return {?}
     */
    updatePages() {
        this.pageCount = Math.max(1, Math.ceil(this._collectionSize / this.pageSize));
        const [start, end] = this.applyPagination();
        this._pages = Array(end - start)
            .fill(start + 1)
            .map((s, i) => s + i);
    }
    /**
     * @return {?}
     */
    applyPagination() {
        const /** @type {?} */ maxSize = (this.maxSize != undefined) ? Math.min(this.maxSize, this.pageCount) : this.pageCount;
        const /** @type {?} */ page = Math.ceil(this.page / maxSize) - 1;
        let /** @type {?} */ start = 0;
        let /** @type {?} */ end = this.pageCount;
        if (this.canRotate) {
            const /** @type {?} */ leftOffset = Math.floor(maxSize / 2);
            const /** @type {?} */ rightOffset = maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
            if (this.page <= leftOffset) {
                end = maxSize;
            }
            else if (this.pageCount - this.page < leftOffset) {
                start = this.pageCount - maxSize;
            }
            else {
                start = this.page - leftOffset - 1;
                end = this.page + rightOffset;
            }
        }
        else {
            start = page * maxSize;
            end = start + maxSize;
        }
        return [start, Math.min(end, this.pageCount)];
    }
}
SuiPagination.decorators = [
    { type: Component, args: [{
                selector: "sui-pagination",
                template: `
<a *ngIf="hasBoundaryLinks" class="item"  (click)="setPage(1)" [class.disabled]="page===1">
    <span><i class="angle double left icon"></i></span>
</a>
<a *ngIf="hasNavigationLinks" class="item" (click)="setPage(page-1)" [class.disabled]="!hasPrevious()">
    <span><i class="angle left icon"></i></span>
</a>
<ng-container *ngIf="hasEllipses">
    <a class="item" (click)="setPage(1)" *ngIf="pages[0] !== 1">
        <span>1</span>
    </a>
    <a class="disabled item" *ngIf="pages[0] > 2">...</a>
</ng-container>
<a *ngFor="let p of pages" class="item" [class.active]="p===page" (click)="setPage(p)">
    {{ p }}
</a>
<ng-container *ngIf="hasEllipses">
    <a class="disabled item" *ngIf="pages[pages.length - 1] < pageCount - 1">...</a>
    <a class="item" (click)="setPage(pageCount)" *ngIf="pages[pages.length - 1] !== pageCount">
        <span>{{ pageCount }}</span>
    </a>
</ng-container>
<a *ngIf="hasNavigationLinks" class="item" (click)="setPage(page+1)" [class.disabled]="!hasNext()">
    <span><i class="angle right icon"></i></span>
</a>
<a *ngIf="hasBoundaryLinks" class="item"  (click)="setPage(pageCount)" [class.disabled]="page===pageCount">
    <span><i class="angle double right icon"></i></span>
</a>
`,
                styles: [`
:host .item {
    transition: none;
}
`]
            }] }
];
/** @nocollapse */
SuiPagination.ctorParameters = () => [];
SuiPagination.propDecorators = {
    hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.pagination",] }, { type: HostBinding, args: ["class.menu",] }],
    pageChange: [{ type: Output }],
    maxSize: [{ type: Input }],
    pageSize: [{ type: Input }],
    collectionSize: [{ type: Input }],
    hasNavigationLinks: [{ type: Input }],
    hasBoundaryLinks: [{ type: Input }],
    canRotate: [{ type: Input }],
    hasEllipses: [{ type: Input }],
    page: [{ type: Input }]
};
function SuiPagination_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiPagination.prototype.hasClasses;
    /** @type {?} */
    SuiPagination.prototype.pageCount;
    /** @type {?} */
    SuiPagination.prototype.pageChange;
    /** @type {?} */
    SuiPagination.prototype._maxSize;
    /** @type {?} */
    SuiPagination.prototype._collectionSize;
    /** @type {?} */
    SuiPagination.prototype._page;
    /** @type {?} */
    SuiPagination.prototype._pages;
    /** @type {?} */
    SuiPagination.prototype._hasNavigationLinks;
    /** @type {?} */
    SuiPagination.prototype.pageSize;
    /** @type {?} */
    SuiPagination.prototype.hasBoundaryLinks;
    /** @type {?} */
    SuiPagination.prototype.canRotate;
    /** @type {?} */
    SuiPagination.prototype.hasEllipses;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3BhZ2luYXRpb24vY29tcG9uZW50cy9wYWdpbmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWEsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXVDL0YsTUFBTSxPQUFPLGFBQWE7SUEwRXRCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRTdDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0tBQzNCOzs7O0lBbEVELElBQ1csT0FBTztRQUNkLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztLQUN4Qjs7Ozs7UUFFVSxPQUFPLENBQUMsS0FBd0I7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQzs7Ozs7SUFNMUUsSUFDVyxjQUFjO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztLQUMvQjs7Ozs7UUFFVSxjQUFjLENBQUMsS0FBWTtRQUNsQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzs7OztJQUdsRixJQUNXLGtCQUFrQjtRQUN6Qix1QkFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2hELE9BQU8sSUFBSSxDQUFDLG1CQUFtQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQy9EOzs7OztRQUVVLGtCQUFrQixDQUFDLEtBQWE7UUFDdkMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQzs7Ozs7SUFZckMsSUFDVyxJQUFJO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ3JCOzs7OztRQUVVLElBQUksQ0FBQyxLQUFZO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7O1FBR2IsS0FBSztRQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQzs7Ozs7SUFrQmhCLFdBQVc7UUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDOzs7OztJQUdsQixPQUFPO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Ozs7OztJQUcvQixPQUFPLENBQUMsT0FBYztRQUN6Qix1QkFBTSxLQUFLLEdBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEcsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtZQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEM7Ozs7O0lBSUUsV0FBVztRQUNkLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7Ozs7SUFJZixXQUFXO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFFOUUsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQVMsR0FBRyxHQUFHLEtBQUssQ0FBQzthQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzthQUNmLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFHdEIsZUFBZTtRQUNuQix1QkFBTSxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRXRHLHVCQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELHFCQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxxQkFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUV6QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsdUJBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzNDLHVCQUFNLFdBQVcsR0FBRyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1lBRXBFLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxVQUFVLEVBQUU7Z0JBQ3pCLEdBQUcsR0FBRyxPQUFPLENBQUM7YUFDakI7aUJBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxFQUFFO2dCQUNoRCxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7YUFDcEM7aUJBQU07Z0JBQ0gsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztnQkFDbkMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO2FBQ2pDO1NBQ0o7YUFBTTtZQUNILEtBQUssR0FBRyxJQUFJLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLEdBQUcsR0FBRyxLQUFLLEdBQUcsT0FBTyxDQUFDO1NBQ3pCO1FBRUQsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs7OztZQXRMckQsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTRCYjt5QkFDWTs7OztDQUlaO2FBQ0E7Ozs7O3lCQUdJLFdBQVcsU0FBQyxVQUFVLGNBQ3RCLFdBQVcsU0FBQyxrQkFBa0IsY0FDOUIsV0FBVyxTQUFDLFlBQVk7eUJBTXhCLE1BQU07c0JBVU4sS0FBSzt1QkFTTCxLQUFLOzZCQUdMLEtBQUs7aUNBVUwsS0FBSzsrQkFVTCxLQUFLO3dCQUdMLEtBQUs7MEJBR0wsS0FBSzttQkFHTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBPbkNoYW5nZXMsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktcGFnaW5hdGlvblwiLFxuICAgIHRlbXBsYXRlOiBgXG48YSAqbmdJZj1cImhhc0JvdW5kYXJ5TGlua3NcIiBjbGFzcz1cIml0ZW1cIiAgKGNsaWNrKT1cInNldFBhZ2UoMSlcIiBbY2xhc3MuZGlzYWJsZWRdPVwicGFnZT09PTFcIj5cbiAgICA8c3Bhbj48aSBjbGFzcz1cImFuZ2xlIGRvdWJsZSBsZWZ0IGljb25cIj48L2k+PC9zcGFuPlxuPC9hPlxuPGEgKm5nSWY9XCJoYXNOYXZpZ2F0aW9uTGlua3NcIiBjbGFzcz1cIml0ZW1cIiAoY2xpY2spPVwic2V0UGFnZShwYWdlLTEpXCIgW2NsYXNzLmRpc2FibGVkXT1cIiFoYXNQcmV2aW91cygpXCI+XG4gICAgPHNwYW4+PGkgY2xhc3M9XCJhbmdsZSBsZWZ0IGljb25cIj48L2k+PC9zcGFuPlxuPC9hPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc0VsbGlwc2VzXCI+XG4gICAgPGEgY2xhc3M9XCJpdGVtXCIgKGNsaWNrKT1cInNldFBhZ2UoMSlcIiAqbmdJZj1cInBhZ2VzWzBdICE9PSAxXCI+XG4gICAgICAgIDxzcGFuPjE8L3NwYW4+XG4gICAgPC9hPlxuICAgIDxhIGNsYXNzPVwiZGlzYWJsZWQgaXRlbVwiICpuZ0lmPVwicGFnZXNbMF0gPiAyXCI+Li4uPC9hPlxuPC9uZy1jb250YWluZXI+XG48YSAqbmdGb3I9XCJsZXQgcCBvZiBwYWdlc1wiIGNsYXNzPVwiaXRlbVwiIFtjbGFzcy5hY3RpdmVdPVwicD09PXBhZ2VcIiAoY2xpY2spPVwic2V0UGFnZShwKVwiPlxuICAgIHt7IHAgfX1cbjwvYT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJoYXNFbGxpcHNlc1wiPlxuICAgIDxhIGNsYXNzPVwiZGlzYWJsZWQgaXRlbVwiICpuZ0lmPVwicGFnZXNbcGFnZXMubGVuZ3RoIC0gMV0gPCBwYWdlQ291bnQgLSAxXCI+Li4uPC9hPlxuICAgIDxhIGNsYXNzPVwiaXRlbVwiIChjbGljayk9XCJzZXRQYWdlKHBhZ2VDb3VudClcIiAqbmdJZj1cInBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdICE9PSBwYWdlQ291bnRcIj5cbiAgICAgICAgPHNwYW4+e3sgcGFnZUNvdW50IH19PC9zcGFuPlxuICAgIDwvYT5cbjwvbmctY29udGFpbmVyPlxuPGEgKm5nSWY9XCJoYXNOYXZpZ2F0aW9uTGlua3NcIiBjbGFzcz1cIml0ZW1cIiAoY2xpY2spPVwic2V0UGFnZShwYWdlKzEpXCIgW2NsYXNzLmRpc2FibGVkXT1cIiFoYXNOZXh0KClcIj5cbiAgICA8c3Bhbj48aSBjbGFzcz1cImFuZ2xlIHJpZ2h0IGljb25cIj48L2k+PC9zcGFuPlxuPC9hPlxuPGEgKm5nSWY9XCJoYXNCb3VuZGFyeUxpbmtzXCIgY2xhc3M9XCJpdGVtXCIgIChjbGljayk9XCJzZXRQYWdlKHBhZ2VDb3VudClcIiBbY2xhc3MuZGlzYWJsZWRdPVwicGFnZT09PXBhZ2VDb3VudFwiPlxuICAgIDxzcGFuPjxpIGNsYXNzPVwiYW5nbGUgZG91YmxlIHJpZ2h0IGljb25cIj48L2k+PC9zcGFuPlxuPC9hPlxuYCxcbiAgICBzdHlsZXM6IFtgXG46aG9zdCAuaXRlbSB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVBhZ2luYXRpb24gaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudWlcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5wYWdpbmF0aW9uXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MubWVudVwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICAvLyBQdWJsaWMgbWVtYmVyc1xuICAgIHB1YmxpYyBwYWdlQ291bnQ6bnVtYmVyO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIHBhZ2VDaGFuZ2U6RXZlbnRFbWl0dGVyPG51bWJlcj47XG5cbiAgICAvLyBQcml2YXRlIG1lbWJlcnNcbiAgICBwcml2YXRlIF9tYXhTaXplPzpudW1iZXI7XG4gICAgcHJpdmF0ZSBfY29sbGVjdGlvblNpemU6bnVtYmVyO1xuICAgIHByaXZhdGUgX3BhZ2U6bnVtYmVyO1xuICAgIHByaXZhdGUgX3BhZ2VzOm51bWJlcltdO1xuICAgIHByaXZhdGUgX2hhc05hdmlnYXRpb25MaW5rczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IG1heFNpemUoKTpudW1iZXJ8dW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heFNpemU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBtYXhTaXplKHZhbHVlOm51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9tYXhTaXplID0gKHZhbHVlICE9IHVuZGVmaW5lZCkgPyBNYXRoLm1heCh2YWx1ZSwgMSkgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcGFnZVNpemU6bnVtYmVyO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGNvbGxlY3Rpb25TaXplKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbGxlY3Rpb25TaXplO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgY29sbGVjdGlvblNpemUodmFsdWU6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2NvbGxlY3Rpb25TaXplID0gTWF0aC5tYXgodmFsdWUsIDApO1xuICAgICAgICB0aGlzLnBhZ2VDb3VudCA9IE1hdGgubWF4KDEsIE1hdGguY2VpbCh0aGlzLl9jb2xsZWN0aW9uU2l6ZSAvIHRoaXMucGFnZVNpemUpKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaGFzTmF2aWdhdGlvbkxpbmtzKCk6Ym9vbGVhbiB7XG4gICAgICAgIGNvbnN0IG1heFNpemUgPSB0aGlzLl9tYXhTaXplIHx8IHRoaXMucGFnZUNvdW50O1xuICAgICAgICByZXR1cm4gdGhpcy5faGFzTmF2aWdhdGlvbkxpbmtzIHx8IG1heFNpemUgPCB0aGlzLnBhZ2VDb3VudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGhhc05hdmlnYXRpb25MaW5rcyh2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2hhc05hdmlnYXRpb25MaW5rcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGhhc0JvdW5kYXJ5TGlua3M6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNhblJvdGF0ZTpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaGFzRWxsaXBzZXM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBwYWdlKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhZ2U7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwYWdlKHZhbHVlOm51bWJlcikge1xuICAgICAgICB0aGlzLnNldFBhZ2UodmFsdWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcGFnZXMoKTpudW1iZXJbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYWdlcztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgICAgICAgdGhpcy5wYWdlU2l6ZSA9IDEwO1xuICAgICAgICB0aGlzLl9wYWdlID0gMTtcbiAgICAgICAgdGhpcy5fcGFnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5wYWdlQ291bnQgPSAxO1xuICAgICAgICB0aGlzLmhhc05hdmlnYXRpb25MaW5rcyA9IHRydWU7XG4gICAgICAgIHRoaXMuaGFzQm91bmRhcnlMaW5rcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNhblJvdGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhc0VsbGlwc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xuICAgIHB1YmxpYyBoYXNQcmV2aW91cygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWdlID4gMTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFzTmV4dCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWdlIDwgdGhpcy5wYWdlQ291bnQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFBhZ2UobmV3UGFnZTpudW1iZXIpOnZvaWQge1xuICAgICAgICBjb25zdCB2YWx1ZTpudW1iZXIgPSAoTnVtYmVyLmlzSW50ZWdlcihuZXdQYWdlKSkgPyBNYXRoLm1pbihNYXRoLm1heChuZXdQYWdlLCAxKSwgdGhpcy5wYWdlQ291bnQpIDogMTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLl9wYWdlKSB7XG4gICAgICAgICAgICB0aGlzLl9wYWdlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnBhZ2VDaGFuZ2UuZW1pdCh0aGlzLl9wYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIExpZmVjeWNsZSBob29rc1xuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcygpOnZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2VzKCk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZSBtZXRob2RzXG4gICAgcHJpdmF0ZSB1cGRhdGVQYWdlcygpOnZvaWQge1xuICAgICAgICB0aGlzLnBhZ2VDb3VudCA9IE1hdGgubWF4KDEsIE1hdGguY2VpbCh0aGlzLl9jb2xsZWN0aW9uU2l6ZSAvIHRoaXMucGFnZVNpemUpKTtcblxuICAgICAgICBjb25zdCBbc3RhcnQsIGVuZF0gPSB0aGlzLmFwcGx5UGFnaW5hdGlvbigpO1xuXG4gICAgICAgIHRoaXMuX3BhZ2VzID0gQXJyYXk8bnVtYmVyPihlbmQgLSBzdGFydClcbiAgICAgICAgICAgIC5maWxsKHN0YXJ0ICsgMSlcbiAgICAgICAgICAgIC5tYXAoKHMsIGkpID0+IHMgKyBpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFwcGx5UGFnaW5hdGlvbigpOltudW1iZXIsIG51bWJlcl0ge1xuICAgICAgICBjb25zdCBtYXhTaXplID0gKHRoaXMubWF4U2l6ZSAhPSB1bmRlZmluZWQpID8gTWF0aC5taW4odGhpcy5tYXhTaXplLCB0aGlzLnBhZ2VDb3VudCkgOiB0aGlzLnBhZ2VDb3VudDtcblxuICAgICAgICBjb25zdCBwYWdlID0gTWF0aC5jZWlsKHRoaXMucGFnZSAvIG1heFNpemUpIC0gMTtcbiAgICAgICAgbGV0IHN0YXJ0ID0gMDtcbiAgICAgICAgbGV0IGVuZCA9IHRoaXMucGFnZUNvdW50O1xuXG4gICAgICAgIGlmICh0aGlzLmNhblJvdGF0ZSkge1xuICAgICAgICAgICAgY29uc3QgbGVmdE9mZnNldCA9IE1hdGguZmxvb3IobWF4U2l6ZSAvIDIpO1xuICAgICAgICAgICAgY29uc3QgcmlnaHRPZmZzZXQgPSBtYXhTaXplICUgMiA9PT0gMCA/IGxlZnRPZmZzZXQgLSAxIDogbGVmdE9mZnNldDtcblxuICAgICAgICAgICAgaWYgKHRoaXMucGFnZSA8PSBsZWZ0T2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgZW5kID0gbWF4U2l6ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wYWdlQ291bnQgLSB0aGlzLnBhZ2UgPCBsZWZ0T2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgc3RhcnQgPSB0aGlzLnBhZ2VDb3VudCAtIG1heFNpemU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXJ0ID0gdGhpcy5wYWdlIC0gbGVmdE9mZnNldCAtIDE7XG4gICAgICAgICAgICAgICAgZW5kID0gdGhpcy5wYWdlICsgcmlnaHRPZmZzZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGFydCA9IHBhZ2UgKiBtYXhTaXplO1xuICAgICAgICAgICAgZW5kID0gc3RhcnQgKyBtYXhTaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtzdGFydCwgTWF0aC5taW4oZW5kLCB0aGlzLnBhZ2VDb3VudCldO1xuICAgIH1cbn1cbiJdfQ==