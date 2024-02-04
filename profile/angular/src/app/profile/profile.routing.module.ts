import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileAdminEditComponent } from './profile-admin-edit/profile-admin-edit.component';
import { ProfileListingComponent } from './profile-listing/profile-listing.component';
import { ProfileUserEditComponent } from './profile-user-edit/profile-user-edit.component';
import { ProfileUserViewComponent } from './profile-user-view/profile-user-view.component';

const routes: Routes = [
    {
        path: 'profile', 
        children: [ 
            { path: 'profile-admin-edit/:id', component: ProfileAdminEditComponent },
            { path: 'profile-listing', component: ProfileListingComponent },
            { path: 'profile-user-view/:id', component: ProfileUserViewComponent },
            { path: 'profile-user-edit/:id', component: ProfileUserEditComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule {
}

