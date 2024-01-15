import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormArray } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ThemeEditComponent } from './theme-edit/theme-edit.component';
import { ThemeListingComponent } from './theme-listing/theme-listing.component';
import { ThemeViewComponent } from './theme-view/theme-view.component';
import { ThemeRoutingModule } from './theme.routing.module';

@NgModule({
    declarations: [
        ThemeEditComponent,
        ThemeViewComponent,
        ThemeListingComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        ThemeRoutingModule
    ],
    exports:[
        RouterModule,
        ThemeEditComponent,
        ThemeViewComponent,
        ThemeListingComponent
    ],
    providers: [],
})
export class ThemeModule {
}

