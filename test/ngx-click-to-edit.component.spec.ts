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
        this.fixture.detectChanges();
        this.component = this.fixture.componentInstance;
        expect(this.component).toBeDefined();
        this.element = this.fixture.nativeElement;
    });

    beforeEach(async(() => {
        TestBed.compileComponents();
    }));

    it('should show default', () => {
        expect(this.component.value).toEqual('');
        expect(this.component.min).toBeUndefined();
        expect(this.component.max).toBeUndefined();
        expect(this.component.type).toEqual('string');
        expect(this.component.field).toEqual('field');
        expect(this.component.unit).toEqual('');
        expect(this.component.full).toBeFalsy();
        expect(this.component.show).toBeFalsy();
        expect(this.component.hideTrigger).toBeFalsy();
        expect(this.element.querySelectorAll('input').length).toBe(0);
        expect(this.element.querySelectorAll('.ndv-buttons').length).toBe(0);
        expect(this.element.querySelectorAll('i').length).toBe(1);
        expect(this.element.querySelectorAll('.click-to-edit-value').length).toBe(1);
        expect(this.element.querySelector('.click-to-edit-value').className.split(' ').indexOf('selectable')).toBe(-1);
        expect(this.element.querySelectorAll('.click-to-edit-unit').length).toBe(0);
    });

    it('should show unit', () => {
        this.component.unit = 'm/s';
        this.fixture.detectChanges();
        expect(this.component.value).toEqual('');
        expect(this.component.min).toBeUndefined();
        expect(this.component.max).toBeUndefined();
        expect(this.component.type).toEqual('string');
        expect(this.component.field).toEqual('field');
        expect(this.component.unit).toEqual('m/s');
        expect(this.component.full).toBeFalsy();
        expect(this.component.show).toBeFalsy();
        expect(this.component.hideTrigger).toBeFalsy();
        expect(this.element.querySelectorAll('input').length).toBe(0);
        expect(this.element.querySelectorAll('.ndv-buttons').length).toBe(0);
        expect(this.element.querySelectorAll('i').length).toBe(1);
        expect(this.element.querySelectorAll('.click-to-edit-value').length).toBe(1);
        expect(this.element.querySelector('.click-to-edit-value').className.split(' ').indexOf('selectable')).toBe(-1);
        expect(this.element.querySelectorAll('.click-to-edit-unit').length).toBe(1);
    });

    it('should be fully selectable when full=true ', () => {
        this.component.unit = 'm/s';
        this.component.full = true;
        this.fixture.detectChanges();
        expect(this.component.value).toEqual('');
        expect(this.component.min).toBeUndefined();
        expect(this.component.max).toBeUndefined();
        expect(this.component.type).toEqual('string');
        expect(this.component.field).toEqual('field');
        expect(this.component.unit).toEqual('m/s');
        expect(this.component.full).toBe(true);
        expect(this.component.show).toBe(false);
        expect(this.component.hideTrigger).toBe(false);
        expect(this.element.querySelectorAll('input').length).toBe(0);
        expect(this.element.querySelectorAll('.ndv-buttons').length).toBe(0);
        expect(this.element.querySelectorAll('i').length).toBe(1);
        expect(this.element.querySelectorAll('.click-to-edit-value').length).toBe(1);
        expect(this.element.querySelector('.click-to-edit-value').className.split(' ').indexOf('selectable')).toBeGreaterThan(-1);
        expect(this.element.querySelectorAll('.click-to-edit-unit').length).toBe(1);
        expect(this.element.querySelector('.click-to-edit-unit').className.split(' ').indexOf('selectable')).toBeGreaterThan(-1);
    });

    it('should be value selectable when full=false and hideTrigger=true ', () => {
        this.component.unit = 'm/s';
        this.component.full = true;
        this.component.hideTrigger = true;
        this.fixture.detectChanges();
        expect(this.component.value).toEqual('');
        expect(this.component.min).toBeUndefined();
        expect(this.component.max).toBeUndefined();
        expect(this.component.type).toEqual('string');
        expect(this.component.field).toEqual('field');
        expect(this.component.unit).toEqual('m/s');
        expect(this.component.full).toBe(true);
        expect(this.component.show).toBe(false);
        expect(this.component.hideTrigger).toBe(true);
        expect(this.element.querySelectorAll('input').length).toBe(0);
        expect(this.element.querySelectorAll('.ndv-buttons').length).toBe(0);
        expect(this.element.querySelectorAll('i').length).toBe(0);
        expect(this.element.querySelectorAll('.click-to-edit-value').length).toBe(1);
        expect(this.element.querySelector('.click-to-edit-value').className.split(' ').indexOf('selectable')).toBeGreaterThan(-1);
        expect(this.element.querySelectorAll('.click-to-edit-unit').length).toBe(1);
        expect(this.element.querySelector('.click-to-edit-unit').className.split(' ').indexOf('selectable')).toBeGreaterThan(-1);
    });

    it('should show edit field when clicked', () => {
        this.component.value                          = 'Some text';
        this.component.makeEditable('trigger');
        this.fixture.detectChanges();
        expect(this.component.value).toEqual('Some text');
        expect(this.component.min).toBeUndefined();
        expect(this.component.max).toBeUndefined();
        expect(this.component.type).toEqual('string');
        expect(this.component.field).toEqual('field');
        expect(this.component.unit).toEqual('');
        expect(this.component.full).toBe(false);
        expect(this.component.show).toBe(true);
        expect(this.component.hideTrigger).toBe(false);
        expect(this.element.querySelectorAll('input').length).toBe(1);
        this.element.querySelector('input').value = 'Same text';
        this.element.dispatchEvent(new Event('keyup'));
        this.fixture.detectChanges();
        console.log(this.component.value);
        expect(this.element.querySelectorAll('.ndv-buttons').length).toBe(1);
        expect(this.element.querySelectorAll('i').length).toBe(2);
        expect(this.element.querySelectorAll('.click-to-edit-value').length).toBe(0);
        expect(this.element.querySelectorAll('.click-to-edit-unit').length).toBe(0);
    });

});
