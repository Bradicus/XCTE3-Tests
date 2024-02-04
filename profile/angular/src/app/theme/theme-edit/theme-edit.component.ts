import { Component, OnInit, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faker } from '@faker-js/faker';
import { Observable, of } from 'rxjs';
import { Theme } from '../../shared/dto/model/theme';
import { FilteredPageReqTpl } from '../../shared/paging/filtered-page-req-tpl';
import { FilteredPageRespTpl } from '../../shared/paging/filtered-page-resp-tpl';
import { ThemeDataGenService } from '../../shared/services/theme-data-gen-service';
import { ThemeDataMapService } from '../../shared/services/theme-data-map-service';
import { ThemeDataStoreService } from '../../shared/services/theme-data-store-service';

@Component({
    selector: 'app-theme-edit',
    templateUrl: './theme-edit.component.html',
    styleUrls: ['./theme-edit.component.css']
})

export class ThemeEditComponent implements OnInit  {
    item: Theme = new Theme();
    
    themeEditForm = new FormGroup({
        id: new FormControl<number>(0),
        name: new FormControl<string>('', [Validators.maxLength(50)]),
        description: new FormControl<string>(''),
    });
    
    constructor(
            private themeDataStoreService: ThemeDataStoreService,
            private themeDataGenService: ThemeDataGenService,
            private themeDataMapService: ThemeDataMapService,
            private route: ActivatedRoute,
            private router: Router) {
    }
    
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            let idVal = params.get('id');
            this.item.id = idVal !== null ? parseInt(idVal) : 0;
            
            if (!this.item?.id) {
                this.item = new Theme;
                this.populate();
            } else {
            
                this.themeDataStoreService.detail(this.item.id).subscribe(data => { {
                    this.item = data;
                    this.populate();
                }});
            }
            
        });
        
        this.populate();
    }
    
    onSubmit() {
        this.themeEditForm.markAllAsTouched();
        if (!this.themeEditForm.invalid) {
            if (this.themeEditForm.controls['id'].value === null || !(this.themeEditForm.controls['id'].value > 0)) {
                this.themeDataStoreService.create(this.themeEditForm.value).subscribe(newItem =>  {
                    this.router.navigate(["/","theme","theme-listing"]);
                });
            } else {
            
                this.themeDataStoreService.update(this.themeEditForm.value).subscribe(newItem =>  {
                    this.item = newItem;
                });
            }
        }
    }
    
    onExit() {
    }
    
    populateRandom(): void {
        this.themeDataGenService.populateRandom(this.item);
        this.populate();
    }
    
    populate(): void {
        this.themeDataMapService.populate(this.themeEditForm as FormGroup, this.item);
    }
}

