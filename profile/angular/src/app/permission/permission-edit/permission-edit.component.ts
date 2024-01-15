import { Component, OnInit, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { faker } from '@faker-js/faker';
import { Observable, of } from 'rxjs';
import { Permission } from '../../shared/dto/model/permission';
import { FilteredPageReqTpl } from '../../shared/paging/filtered-page-req-tpl';
import { FilteredPageRespTpl } from '../../shared/paging/filtered-page-resp-tpl';
import { PermissionDataGenService } from '../../shared/services/permission-data-gen-service';
import { PermissionDataMapService } from '../../shared/services/permission-data-map-service';
import { PermissionDataStoreService } from '../../shared/services/permission-data-store-service';

@Component({
    selector: 'app-permission-edit',
    templateUrl: './permission-edit.component.html',
    styleUrls: ['./permission-edit.component.css']
})

export class PermissionEditComponent implements OnInit  {
    item: Permission = new Permission();
    
    permissionEditForm = new FormGroup({
        id: new FormControl<number>(0, [Validators.maxLength(10)]),
        code: new FormControl<string>('', [Validators.maxLength(50)]),
        description: new FormControl<string>(''),
    });
    
    constructor(
            private permissionDataStoreService: PermissionDataStoreService,
            private permissionDataGenService: PermissionDataGenService,
            private permissionDataMapService: PermissionDataMapService,
            private route: ActivatedRoute) {
    }
    
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            let idVal = params.get('id');
            this.item.id = idVal !== null ? parseInt(idVal) : 0;
            
            if (!this.item?.id) {
                this.item = new Permission;
            } else {
            
                this.permissionDataStoreService.detail(this.item.id).subscribe(data => { {
                    this.item = data;
                    this.populate();
                }});
            }
            
        });
        
        this.populate();
    }
    
    onSubmit() {
        if (!this.permissionEditForm.invalid) {
            if (this.permissionEditForm.controls['id'].value === null || !(this.permissionEditForm.controls['id'].value > 0)) {
                this.permissionDataStoreService.create(this.permissionEditForm.value).subscribe(newItem =>  {
                    this.item = newItem;
                });
            } else {
            
                this.permissionDataStoreService.update(this.permissionEditForm.value).subscribe(newItem =>  {
                    this.item = newItem;
                });
            }
        }
    }
    
    onExit() {
    }
    
    populateRandom(): void {
        this.permissionDataGenService.populateRandom(this.item);
        this.populate();
    }
    
    populate(): void {
        this.permissionDataMapService.populate(this.permissionEditForm as FormGroup, this.item);
    }
}

