import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'click-to-edit',
    template: `<div class="click-to-edit">
    <div class='ndv-comp' [ngClass]="{'ndv-active':show}">
        <input tabindex="-1" *ngIf='show && type === "string"' type='text' [(ngModel)]='value' (keyup)="onKey($event)"/>
        <input tabindex="-1" *ngIf='show && type === "number"' type='number' [min]="min" [max]="max" [(ngModel)]='value'
               (keyup)="onKey($event)"/>

        <div *ngIf='!show'>
            <div *ngIf="hideTrigger === false">
                <div #ref class="click-to-edit-content selectable" (click)='makeEditable("trigger")'><ng-content></ng-content></div>
                <i class="fa fa-pencil selectable" (click)='makeEditable("trigger")' *ngIf="ref.childNodes.length == 0"></i>
            </div>
            <div class="click-to-edit-value" [class.selectable]="full === true || hideTrigger === true"
                 (click)='makeEditable("value")' [innerHTML]="value || 'empty'"></div>
            <div class="click-to-edit-unit" [class.selectable]="full === true || hideTrigger === true"
                 (click)='makeEditable("unit")' *ngIf="unit !== ''" [innerHTML]="unit"></div>
        </div>
    </div>
    <div class='ndv-buttons' *ngIf='!hideButtons && show'>
        <button class='btn-x-sm' (click)='callSave()'><i class="fa fa-check"></i></button>
        <button class='btn-x-sm' (click)='cancelEditable()'><i class="fa fa-times"></i></button>
    </div>
</div>`,
    styles  : [`.click-to-edit {
      width: inherit;
}

.selectable {
    cursor: pointer;
}

.ndv-comp {
    position: relative;
    overflow: hidden;
    min-width: 20px;
    border-radius: 3px;
    cursor: default;
}

.fa-pencil {
    float: left;
    padding-top: 2px;
}

.click-to-edit-content {
    float: left;
}

.click-to-edit-value {
    float: left;
    min-width: 33px;
    padding: 0 2px 0 8px;
    text-align: right;
}

.click-to-edit-unit {
    float: left;
}

.active-ndv {
    background-color: transparent;
}
input {
    border-radius: 5px;
    box-shadow: none;
    min-width: 5px;
    color: #000;
}
.ndv-buttons {
    background-color: transparent;
    border-top: none;
    border-radius: 0 0 3px 3px;
    box-shadow: 0 3px 6px rgba(111,111,111,0.2);
    outline: none;
    padding: 3px;
    position: absolute;
    margin-left: 6px;
    z-index: 1;
}
.ndv-comp:hover {
}
.ndv-save {
    margin-right:3px;
}
.ndv-active {
    background-color: transparent;
}`]
})
export class NgxClickToEditComponent implements AfterViewInit {
    @Input('min') min: number;
    @Input('max') max: number;
    @Input('field') field: string              = 'field';
    @Input('unit') unit: string                = '';
    @Input('full') full: boolean               = false;
    @Input('hideTrigger') hideTrigger: boolean = false;
    @Input('hideButtons') hideButtons: boolean = false;
    @Input('type') type: string                = 'string';
                  show: boolean                = false;
                  value: any                   = '';

    @Input('value')
    set theValue(value: string) {
        this.value    = value;
        this.original = this.value;
    }

    private original: any;
    @Output()
    private onSave: EventEmitter<any> = new EventEmitter();

    ngAfterViewInit(): void {
        if (typeof this.value === 'string') {
            this.type = 'string';
        }
        if (typeof this.value === 'number') {
            this.type = 'number';
        }
    }

    makeEditable(field: string): void {
        if (this.hideTrigger === true) {
            this.show = true;
        }
        if (this.full === false && field === 'trigger') {
            this.show = true;
        } else if (this.full === true) {
            this.show = true;
        }
    }

    cancelEditable(): void {
        this.show  = false;
        this.value = this.original;
    }

    onKey(event: KeyboardEvent): void {
        if (event.key === 'Enter') {
            this.callSave();
        }
        if (event.key === 'Escape') {
            this.cancelEditable();
        }
    }

    callSave(): void {
        this.onSave.emit({ field: this.field, value: this.value });
        this.show = false;
    }
}
