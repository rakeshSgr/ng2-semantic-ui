import {
    Component, ViewChild, ViewContainerRef, Renderer2, ElementRef, HostBinding,
    Input, TemplateRef
} from "@angular/core";
import { ITemplateRefContext, SuiComponentFactory } from "../../../misc/util";

@Component({
    selector: "sui-search-result",
    template: `
<span #templateSibling></span>
<span *ngIf="!template" [innerHTML]="formatter(value)"></span>
`
})
export class SuiSearchResult<T> {
    // Sets the Semantic UI classes on the host element.
    @HostBinding("class.result")
    private _optionClasses:boolean;

    @Input()
    public value:T;

    // Returns the label from a given value.
    @Input()
    public formatter:(obj:T, query:string) => string;

    private _template?:TemplateRef<ITemplateRefContext<T>>;

    @Input()
    public get template():TemplateRef<ITemplateRefContext<T>> | undefined {
        return this._template;
    }

    public set template(template:TemplateRef<ITemplateRefContext<T>> | undefined) {
        this._template = template;
        if (this.template) {
            this.componentFactory.createView(this.templateSibling, this.template, {
                $implicit: this.value
            });
        }
    }

    // Placeholder to draw template beside.
    @ViewChild("templateSibling", { read: ViewContainerRef })
    public templateSibling:ViewContainerRef;

    constructor(public componentFactory:SuiComponentFactory) {
        this._optionClasses = true;

        // By default we make this function return an empty string, for the brief moment when it isn't displaying the correct label.
        this.formatter = value => "";
    }
}