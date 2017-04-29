import {
  inject,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { expect } from 'chai';
import { NgxClickToEditModule } from '../index';
import { NgxClickToEditComponent } from '../src/ngx-click-to-edit.component';

xdescribe('hello-world component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxClickToEditModule.forRoot()
      ]
    });
  });

  it('should say hello world', () => {
    const fixture: ComponentFixture<NgxClickToEditComponent> = TestBed.createComponent(NgxClickToEditComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML.trim()).to.equal('Hello world from the ngx click to' +
        ' edit module!');
  });

});
