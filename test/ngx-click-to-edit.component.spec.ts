import {
    inject,
    ComponentFixture,
    TestBed, async
} from '@angular/core/testing';

import { NgxClickToEditModule } from '../index';
import { NgxClickToEditComponent } from '../src/ngx-click-to-edit.component';

describe('click to edit component', () => {
    let fixture: ComponentFixture<NgxClickToEditComponent>;
    let component: NgxClickToEditComponent;
    let element: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                NgxClickToEditModule.forRoot()
            ]
        });
        this.fixture = TestBed.createComponent(NgxClickToEditComponent);
        this.component = this.fixture.componentInstance;
        this.component.value = 'Some text';
        expect(this.component).toBeDefined();
        this.element = this.fixture.nativeElement;
    });

    it('should show default', () => {
        this.fixture.detectChanges();
        this.component.makeEditable('trigger');
        expect(this.component.value).toEqual('Some text');
        expect(this.component.min).toBeUndefined();
        expect(this.component.max).toBeUndefined();
        expect(this.component.type).toEqual('string');
        expect(this.component.field).toEqual('field');
        expect(this.component.unit).toEqual('');
        expect(this.component.full).toBeFalsy();
        expect(this.component.show).toBeTruthy();
        expect(this.component.hideTrigger).toBeFalsy();
        expect(this.element.querySelectorAll('input').length).toBe(0);
        expect(this.element.querySelectorAll('.ndv-buttons').length).toBe(0);
        expect(this.element.querySelectorAll('i').length).toBe(1);
        expect(this.element.querySelector('i').className.split(' ').indexOf('selectable')).toBeGreaterThan(-1);
        expect(this.element.querySelectorAll('.click-to-edit-value').length).toBe(1);
        expect(this.element.querySelector('.click-to-edit-value').className.split(' ').indexOf('selectable')).toBe(-1);
        expect(this.element.querySelectorAll('.click-to-edit-unit').length).toBe(0);
    });

    it('should show unit', () => {
        this.component.value = '100';
        this.component.unit = 'm/s';
        this.fixture.detectChanges();
        expect(this.element.querySelectorAll('.click-to-edit-unit').length).toBe(1);
        expect(this.component.unit).toEqual('m/s');
        expect(this.element.querySelector('.ndv-comp > div').innerText).toEqual('100m/s');
    });

    it('should be fully selectable when full=true ', () => {
        this.component.unit = 'unit';
        this.component.full = true;
        this.fixture.detectChanges();
        this.component.makeEditable('whatever');
        expect(this.component.show).toBe(true);
        expect(this.element.querySelector('.click-to-edit-value').className.split(' ').indexOf('selectable')).toBeGreaterThan(-1);
        expect(this.element.querySelectorAll('.click-to-edit-unit').length).toBe(1);
        expect(this.element.querySelector('.click-to-edit-unit').className.split(' ').indexOf('selectable')).toBeGreaterThan(-1);
    });

    it('should be value selectable when full=false and hideTrigger=true ', () => {
        this.component.unit        = 'unit';
        this.component.full        = false;
        this.component.hideTrigger = true;
        this.fixture.detectChanges();
        expect(this.element.querySelectorAll('i').length).toBe(0);
        expect(this.element.querySelector('.click-to-edit-value').className.split(' ').indexOf('selectable')).toBeGreaterThan(-1);
        expect(this.element.querySelectorAll('.click-to-edit-unit').length).toBe(1);
        expect(this.element.querySelector('.click-to-edit-unit').className.split(' ').indexOf('selectable')).toBeGreaterThan(-1);
        this.component.makeEditable('whatever');
        expect(this.component.show).toBe(true);
    });

    it('should be value not be selectable when full=false and hideTrigger=false and' +
        ' trigger=whatever', () => {
        this.component.unit        = 'unit';
        this.component.full        = false;
        this.component.hideTrigger = false;
        this.fixture.detectChanges();
        this.component.makeEditable('whatever');
        expect(this.component.show).toBe(false);
    });

    it('should show the value when I click the cancel button in edit mode', () => {
        this.component.show = true;
        this.fixture.detectChanges();
        expect(this.element.querySelectorAll('input').length).toBe(1);
        expect(this.element.querySelectorAll('.ndv-buttons').length).toBe(1);

        this.component.cancelEditable();
        this.fixture.detectChanges();
        expect(this.component.show).toBe(false);
        expect(this.element.querySelectorAll('input').length).toBe(0);
        expect(this.element.querySelectorAll('.ndv-buttons').length).toBe(0);
    });

    it('should emit the field and value', () => {
        this.component.field = 'length';
        this.component.value = '100';
        spyOn(this.component.onSave, 'emit');
        this.component.callSave();
        expect(this.component.onSave.emit).toHaveBeenCalledWith({ field: 'length', value: '100' });
    });

    it('should allow me to edit the value', () => {
        this.component.show = true;
        this.fixture.detectChanges();

        let input: any = this.element.querySelector('input');
        input.value = 'Other text';
        input.dispatchEvent(new Event('input'));
        input.dispatchEvent(new Event('keyup'));
        this.fixture.detectChanges();
        this.fixture.whenStable();
        expect(this.component.value).toEqual('Other text');
    });

    it('should show numeric field', () => {
        let fixture = TestBed.createComponent(NgxClickToEditComponent);
        let component = fixture.componentInstance;
        component.value = 2;
        fixture.detectChanges();
        expect(component.type).toBe('number');
    });

    it('should allow me to set the value', () => {
        this.fixture.detectChanges();
        this.component.theValue = 'Other text';

        expect(this.component.value).toEqual('Other text');
    });


});