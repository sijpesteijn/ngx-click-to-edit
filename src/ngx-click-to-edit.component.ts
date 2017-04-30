import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ngx-click-to-edit',
    template: require('./ngx-click-to-edit.html'),
    styles  : [require('./ngx-click-to-edit.css')]
})
export class NgxClickToEditComponent implements AfterViewInit {
    @Input('min') min: number;
    @Input('max') max: number;
    @Input('field') field: string              = 'field';
    @Input('unit') unit: string                = '';
    @Input('full') full: boolean               = false;
    @Input('hideTrigger') hideTrigger: boolean = false;
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
    }

    callSave(): void {
        this.onSave.emit({ field: this.field, value: this.value });
        this.show = false;
    }
}
