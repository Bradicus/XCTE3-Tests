import { Routes } from '@angular/router';
import { AddressEditComponent } from './address/address-edit/address-edit.component';
import { AddressListingComponent } from './address/address-listing/address-listing.component';
import { PermissionEditComponent } from './permission/permission-edit/permission-edit.component';
import { PermissionListingComponent } from './permission/permission-listing/permission-listing.component';
import { ProfileAdminEditComponent } from './profile/profile-admin-edit/profile-admin-edit.component';
import { ProfileListingComponent } from './profile/profile-listing/profile-listing.component';
import { ProfileUserEditComponent } from './profile/profile-user-edit/profile-user-edit.component';
import { RoleEditComponent } from './role/role-edit/role-edit.component';
import { RoleListingComponent } from './role/role-listing/role-listing.component';
import { ThemeEditComponent } from './theme/theme-edit/theme-edit.component';
import { ThemeListingComponent } from './theme/theme-listing/theme-listing.component';

/**
* @class Routes
* 
*/
export const routes: Routes = [
    { path: 'address/address-edit/:id', component: AddressEditComponent },
    { path: 'address/address-listing', component: AddressListingComponent },
    { path: 'permission/permission-listing', component: PermissionListingComponent },
    { path: 'permission/permission-edit/:id', component: PermissionEditComponent },
    { path: 'profile/profile-admin-edit/:id', component: ProfileAdminEditComponent },
    { path: 'profile/profile-listing', component: ProfileListingComponent },
    { path: 'profile/profile-user-edit/:id', component: ProfileUserEditComponent },
    { path: 'role/role-listing', component: RoleListingComponent },
    { path: 'role/role-edit/:id', component: RoleEditComponent },
    { path: 'theme/theme-listing', component: ThemeListingComponent },
    { path: 'theme/theme-edit/:id', component: ThemeEditComponent },
];
