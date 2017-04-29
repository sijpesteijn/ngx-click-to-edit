import { AfterViewInit } from '@angular/core';
export declare class NgxClickToEditComponent implements AfterViewInit {
    min: number;
    max: number;
    field: string;
    unit: string;
    show: boolean;
    value: any;
    type: string;
    setField: string;
    private original;
    private onSave;
    private valid;
    ngAfterViewInit(): void;
    makeEditable(): void;
    cancelEditable(): void;
    validate(value: any): void;
    onKey(event: KeyboardEvent): void;
    callSave(): void;
}
