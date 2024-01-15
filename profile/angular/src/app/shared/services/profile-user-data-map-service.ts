import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Address } from '../dto/model/address';
import { ProfileUser } from '../dto/model/profile-user';
import { AddressDataMapService } from './address-data-map-service';

@Injectable( {
    providedIn: 'root',
})

export class ProfileUserDataMapService {
    
    constructor(private addressDataMapService: AddressDataMapService) {
    }
    
    populate(formGroup: FormGroup, src: ProfileUser): void {
        if (src != null) {
            formGroup.get("id")?.setValue(src.id)
            formGroup.get("firstName")?.setValue(src.firstName)
            formGroup.get("lastName")?.setValue(src.lastName)
            formGroup.get("email")?.setValue(src.email)
            
            formGroup.get("createdDate")?.setValue(src.createdDate?.toISOString().slice(0, -1))
            formGroup.get("lastLoginDate")?.setValue(src.lastLoginDate?.toISOString().slice(0, -1))
            this.addressDataMapService.populate(formGroup.get('mailingAddress') as FormGroup, src.mailingAddress);
            this.addressDataMapService.populate(formGroup.get('physicalAddress') as FormGroup, src.physicalAddress);
            formGroup.get("themeId")?.setValue(src.themeId)
        }
    }
}

