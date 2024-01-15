import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Theme } from '../dto/model/theme';

@Injectable( {
    providedIn: 'root',
})

export class ThemeDataMapService {
    
    constructor() {
    }
    
    populate(formGroup: FormGroup, src: Theme): void {
        if (src != null) {
            formGroup.get("id")?.setValue(src.id)
            formGroup.get("name")?.setValue(src.name)
            formGroup.get("description")?.setValue(src.description)
        }
    }
}

