import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormArray } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { AddressListingComponent } from './address-listing/address-listing.component';
import { AddressRoutingModule } from './address.routing.module';

@NgModule({
    declarations: [
        AddressEditComponent,
        AddressListingComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        AddressRoutingModule
    ],
    exports:[
        RouterModule,
        AddressEditComponent,
        AddressListingComponent
    ],
    providers: [],
})
export class AddressModule {
}

