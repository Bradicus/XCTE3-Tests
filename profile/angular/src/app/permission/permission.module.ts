import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormArray } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PermissionEditComponent } from './permission-edit/permission-edit.component';
import { PermissionListingComponent } from './permission-listing/permission-listing.component';
import { PermissionViewComponent } from './permission-view/permission-view.component';
import { PermissionRoutingModule } from './permission.routing.module';

@NgModule({
    declarations: [
        PermissionEditComponent,
        PermissionViewComponent,
        PermissionListingComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        PermissionRoutingModule
    ],
    exports:[
        RouterModule,
        PermissionEditComponent,
        PermissionViewComponent,
        PermissionListingComponent
    ],
    providers: [],
})
export class PermissionModule {
}

