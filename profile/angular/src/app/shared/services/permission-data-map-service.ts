import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Permission } from '../dto/model/permission';

@Injectable( {
    providedIn: 'root',
})

export class PermissionDataMapService {
    
    constructor() {
    }
    
    populate(formGroup: FormGroup, src: Permission): void {
        if (src != null) {
            formGroup.get("id")?.setValue(src.id)
            formGroup.get("code")?.setValue(src.code)
            formGroup.get("description")?.setValue(src.description)
        }
    }
}

