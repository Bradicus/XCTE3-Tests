import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionEditComponent } from './permission-edit/permission-edit.component';
import { PermissionListingComponent } from './permission-listing/permission-listing.component';
import { PermissionViewComponent } from './permission-view/permission-view.component';

const routes: Routes = [
    {
        path: 'permission', 
        children: [ 
            { path: 'permission-listing', component: PermissionListingComponent },
            { path: 'permission-view/:id', component: PermissionViewComponent },
            { path: 'permission-edit/:id', component: PermissionEditComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PermissionRoutingModule {
}

