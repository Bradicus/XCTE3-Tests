import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faker } from '@faker-js/faker';
import { Observable, of } from 'rxjs';
import { Stat } from '../../shared/dto/model/stat';
import { FilteredPageReqTpl } from '../../shared/paging/filtered-page-req-tpl';
import { FilteredPageRespTpl } from '../../shared/paging/filtered-page-resp-tpl';
import { StatDataGenService } from '../../shared/services/stat-data-gen-service';
import { StatDataMapService } from '../../shared/services/stat-data-map-service';
import { StatDataStoreService } from '../../shared/services/stat-data-store-service';

@Component({
    selector: 'app-stat-edit',
    standalone: true,
    imports: [ CommonModule, ReactiveFormsModule ],
    templateUrl: './stat-edit.component.html',
    styleUrls: ['./stat-edit.component.css']
})

export class StatEditComponent implements OnInit  {
    item: Stat = new Stat();
    
    statEditForm = new FormGroup({
        id: new FormControl<number>(0),
        name: new FormControl<string>('', [Validators.required]),
        curValue: new FormControl<number>(0),
        maxValue: new FormControl<number>(0, [Validators.required]),
    });
    
    constructor(
            private statDataStoreService: StatDataStoreService,
            private statDataGenService: StatDataGenService,
            private statDataMapService: StatDataMapService,
            private route: ActivatedRoute,
            private router: Router) {
    }
    
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            let idVal = params.get('id');
            this.item.id = idVal !== null ? parseInt(idVal) : 0;
            
            if (!this.item?.id) {
                this.item = new Stat;
                this.populate();
            } else {
            
                this.statDataStoreService.detail(this.item.id).subscribe(data => { {
                    this.item = data;
                    this.populate();
                }});
            }
            
        });
        
        this.populate();
    }
    
    onSubmit() {
        this.statEditForm.markAllAsTouched();
        if (!this.statEditForm.invalid) {
            if (this.statEditForm.controls['id'].value === null || !(this.statEditForm.controls['id'].value > 0)) {
                this.statDataStoreService.create(this.statEditForm.value).subscribe(newItem =>  {
                    this.router.navigate(["/","stat-edit", newItem.id]);
                });
            } else {
            
                this.statDataStoreService.update(this.statEditForm.value).subscribe(newItem =>  {
                    this.item = newItem;
                });
            }
        }
    }
    
    onExit() {
    }
    
    populateRandom(): void {
        this.statDataGenService.populateRandom(this.item);
        this.populate();
    }
    
    populate(): void {
        this.statDataMapService.populate(this.statEditForm as FormGroup, this.item);
    }
}

