import { NgModule } from '@angular/core';
import { NgxClickToEditModule } from '../index';
import { BrowserModule } from '@angular/platform-browser';
import { DemoComponent } from './demo.component';

@NgModule({
    declarations: [DemoComponent],
    imports: [BrowserModule, NgxClickToEditModule.forRoot()],
    bootstrap: [DemoComponent]
})
export class DemoModule {}