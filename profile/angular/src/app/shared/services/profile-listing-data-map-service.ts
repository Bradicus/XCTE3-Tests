import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormArray } from '@angular/forms';
import { ProfileListing } from '../dto/model/profile-listing';

@Injectable( {
    providedIn: 'root',
})

export class ProfileListingDataMapService {
    
    constructor() {
    }
    
    populate(formGroup: FormGroup, src: ProfileListing): void {
        if (src != null) {
            formGroup.get("id")?.setValue(src.id)
            formGroup.get("firstName")?.setValue(src.firstName)
            formGroup.get("lastName")?.setValue(src.lastName)
            formGroup.get("pusername")?.setValue(src.pusername)
            formGroup.get("email")?.setValue(src.email)
            
            formGroup.get("createdDate")?.setValue(src.createdDate?.toISOString().slice(0, -1))
            formGroup.get("lastLoginDate")?.setValue(src.lastLoginDate?.toISOString().slice(0, -1))
            formGroup.get("active")?.setValue(src.active)
        }
    }
}

