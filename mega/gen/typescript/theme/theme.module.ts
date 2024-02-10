import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormArray } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ThemeComponent } from './theme-listing/theme.component';
import { ThemeComponent } from './theme-view/theme.component';
import { ThemeRoutingModule } from './theme.routing.module';

@NgModule({
    declarations: [
        ThemeComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        ThemeRoutingModule
    ],
    exports:[
        RouterModule,
        ThemeComponent
    ],
    providers: [],
})
export class ThemeModule {
}

