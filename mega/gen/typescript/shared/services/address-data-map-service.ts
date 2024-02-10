import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Address } from '../dto/model/address';

@Injectable( {
    providedIn: 'root',
})

export class AddressDataMapService {
    
    constructor() {
    }
    
    populate(formGroup: FormGroup, src: Address): void {
        if (src != null) {
            formGroup.get("id")?.setValue(src.id)
            formGroup.get("street1")?.setValue(src.street1)
            formGroup.get("street2")?.setValue(src.street2)
            formGroup.get("city")?.setValue(src.city)
            formGroup.get("state")?.setValue(src.state)
            formGroup.get("country")?.setValue(src.country)
            formGroup.get("zipCode")?.setValue(src.zipCode)
        }
    }
}

