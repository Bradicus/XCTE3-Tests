import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormArray } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PermissionModule } from '../permission/permission.module';
import { RoleEditComponent } from './role-edit/role-edit.component';
import { RoleListingComponent } from './role-listing/role-listing.component';
import { RoleViewComponent } from './role-view/role-view.component';
import { RoleRoutingModule } from './role.routing.module';

@NgModule({
    declarations: [
        RoleEditComponent,
        RoleViewComponent,
        RoleListingComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        RoleRoutingModule,
        PermissionModule
    ],
    exports:[
        RouterModule,
        RoleEditComponent,
        RoleViewComponent,
        RoleListingComponent
    ],
    providers: [],
})
export class RoleModule {
}

