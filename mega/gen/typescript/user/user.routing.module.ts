import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user-listing/user.component';
import { UserComponent } from './user-view/user.component';

const routes: Routes = [
    {
        path: 'user', 
        children: [ 
            { path: 'user-listing', component: UserComponent },
            { path: 'user-edit/:id', component: UserComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {
}

