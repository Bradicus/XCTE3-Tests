import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faker } from '@faker-js/faker';
import { Observable, of } from 'rxjs';
import { Entity } from '../../shared/dto/model/entity';
import { Stat } from '../../shared/dto/model/stat';
import { FilteredPageReqTpl } from '../../shared/paging/filtered-page-req-tpl';
import { FilteredPageRespTpl } from '../../shared/paging/filtered-page-resp-tpl';
import { EntityDataGenService } from '../../shared/services/entity-data-gen-service';
import { EntityDataMapService } from '../../shared/services/entity-data-map-service';
import { EntityDataStoreService } from '../../shared/services/entity-data-store-service';

@Component({
    selector: 'app-entity-edit',
    standalone: true,
    imports: [ CommonModule, ReactiveFormsModule ],
    templateUrl: './entity-edit.component.html',
    styleUrls: ['./entity-edit.component.css']
})

export class EntityEditComponent implements OnInit  {
    item: Entity = new Entity();
    
    entityEditForm = new FormGroup({
        id: new FormControl<number>(0),
        name: new FormControl<string>('', [Validators.required]),
        stats: new FormArray([]),
    });
    
    constructor(
            private entityDataStoreService: EntityDataStoreService,
            private entityDataGenService: EntityDataGenService,
            private entityDataMapService: EntityDataMapService,
            private route: ActivatedRoute,
            private router: Router) {
    }
    
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            let idVal = params.get('id');
            this.item.id = idVal !== null ? parseInt(idVal) : 0;
            
            if (!this.item?.id) {
                this.item = new Entity;
                this.populate();
            } else {
            
                this.entityDataStoreService.detail(this.item.id).subscribe(data => { {
                    this.item = data;
                    this.populate();
                }});
            }
            
        });
        
        this.populate();
    }
    
    onSubmit() {
        this.entityEditForm.markAllAsTouched();
        if (!this.entityEditForm.invalid) {
            if (this.entityEditForm.controls['id'].value === null || !(this.entityEditForm.controls['id'].value > 0)) {
                this.entityDataStoreService.create(this.entityEditForm.value).subscribe(newItem =>  {
                    this.router.navigate(["/","entity-edit", newItem.id]);
                });
            } else {
            
                this.entityDataStoreService.update(this.entityEditForm.value).subscribe(newItem =>  {
                    this.item = newItem;
                });
            }
        }
    }
    
    onExit() {
    }
    
    populateRandom(): void {
        this.entityDataGenService.populateRandom(this.item);
        this.populate();
    }
    
    populate(): void {
        this.entityDataMapService.populate(this.entityEditForm as FormGroup, this.item);
    }
}

