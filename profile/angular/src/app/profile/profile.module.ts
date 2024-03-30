import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormArray } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProfileAdminEditComponent } from './profile-admin-edit/profile-admin-edit.component';
import { ProfileListingComponent } from './profile-listing/profile-listing.component';
import { ProfileUserEditComponent } from './profile-user-edit/profile-user-edit.component';
import { ProfileUserViewComponent } from './profile-user-view/profile-user-view.component';
import { ProfileRoutingModule } from './profile.routing.module';

@NgModule({
    declarations: [
        ProfileAdminEditComponent,
        ProfileUserEditComponent,
        ProfileUserViewComponent,
        ProfileListingComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        ProfileRoutingModule
    ],
    exports:[
        RouterModule,
        ProfileAdminEditComponent,
        ProfileUserEditComponent,
        ProfileUserViewComponent,
        ProfileListingComponent
    ],
    providers: [],
})
export class ProfileModule {
}

