import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { AddressListingComponent } from './address-listing/address-listing.component';

const routes: Routes = [
    {
        path: 'address', 
        children: [ 
            { path: 'address-edit/:id', component: AddressEditComponent },
            { path: 'address-listing', component: AddressListingComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddressRoutingModule {
}

