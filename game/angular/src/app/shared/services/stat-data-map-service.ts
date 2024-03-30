import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Stat } from '../dto/model/stat';

@Injectable( {
    providedIn: 'root',
})

export class StatDataMapService {
    
    constructor() {
    }
    
    populate(formGroup: FormGroup, src: Stat): void {
        if (src != null) {
            formGroup.get("id")?.setValue(src.id)
            formGroup.get("name")?.setValue(src.name)
            formGroup.get("curValue")?.setValue(src.curValue)
            formGroup.get("maxValue")?.setValue(src.maxValue)
        }
    }
}

