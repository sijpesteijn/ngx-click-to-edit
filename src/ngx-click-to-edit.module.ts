import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxClickToEditComponent } from './ngx-click-to-edit.component';

@NgModule({
    declarations: [
        NgxClickToEditComponent
    ],
    imports     : [
        CommonModule,
        FormsModule
    ],
    exports     : [
      NgxClickToEditComponent
    ],
    entryComponents: [
      NgxClickToEditComponent
    ]
})
export class NgxClickToEditModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgxClickToEditModule
        };
    }

}
