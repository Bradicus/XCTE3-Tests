import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Entity } from '../dto/model/entity';
import { Stat } from '../dto/model/stat';

@Injectable( {
    providedIn: 'root',
})

export class EntityDataMapService {
    
    constructor() {
    }
    
    populate(formGroup: FormGroup, src: Entity): void {
        if (src != null) {
            formGroup.get("id")?.setValue(src.id)
            formGroup.get("name")?.setValue(src.name)
        }
    }
}

