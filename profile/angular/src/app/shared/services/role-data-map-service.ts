import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Permission } from '../dto/model/permission';
import { Role } from '../dto/model/role';

@Injectable( {
    providedIn: 'root',
})

export class RoleDataMapService {
    
    constructor() {
    }
    
    populate(formGroup: FormGroup, src: Role): void {
        if (src != null) {
            formGroup.get("id")?.setValue(src.id)
            formGroup.get("name")?.setValue(src.name)
            formGroup.get("description")?.setValue(src.description)
        }
    }
}

