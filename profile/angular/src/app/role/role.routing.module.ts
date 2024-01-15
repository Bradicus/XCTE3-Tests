import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleEditComponent } from './role-edit/role-edit.component';
import { RoleListingComponent } from './role-listing/role-listing.component';
import { RoleViewComponent } from './role-view/role-view.component';

const routes: Routes = [
    {
        path: 'role', 
        children: [ 
            { path: 'role-listing', component: RoleListingComponent },
            { path: 'role-view/:id', component: RoleViewComponent },
            { path: 'role-edit/:id', component: RoleEditComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoleRoutingModule {
}

