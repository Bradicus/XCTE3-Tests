import { Component, OnInit, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { faker } from '@faker-js/faker';
import { Observable, of } from 'rxjs';
import { Permission } from '../../shared/dto/model/permission';
import { Role } from '../../shared/dto/model/role';
import { FilteredPageReqTpl } from '../../shared/paging/filtered-page-req-tpl';
import { FilteredPageRespTpl } from '../../shared/paging/filtered-page-resp-tpl';
import { PermissionDataStoreService } from '../../shared/services/permission-data-store-service';
import { RoleDataGenService } from '../../shared/services/role-data-gen-service';
import { RoleDataMapService } from '../../shared/services/role-data-map-service';
import { RoleDataStoreService } from '../../shared/services/role-data-store-service';

@Component({
    selector: 'app-!{modelname}-edit',
    templateUrl: './!{modelname}-edit.component.html',
    styleUrls: ['./!{modelname}-edit.component.css']
})

export class !{ModelName}EditComponent implements OnInit  {
    item: Role = new Role();
    
    !{ModelName}EditForm = new FormGroup({
        id: new FormControl<number>(0, [Validators.maxLength(10)]),
        name: new FormControl<string>('', [Validators.maxLength(50)]),
        description: new FormControl<string>(''),
        permissions: new FormArray([]),
    });
    permissionOptions: Observable<FilteredPageRespTpl<Permission>> = new Observable<FilteredPageRespTpl<Permission>>;
    permissionOptionsReq: FilteredPageReqTpl<Permission> = new FilteredPageReqTpl<Permission>;
    
    constructor(
            private roleDataStoreService: RoleDataStoreService,
            private roleDataGenService: RoleDataGenService,
            private roleDataMapService: RoleDataMapService,
            private permissionDataStoreService: PermissionDataStoreService,
            private route: ActivatedRoute) {
    }
    
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            let idVal = params.get('id');
            this.item.id = idVal !== null ? parseInt(idVal) : 0;
            
            if (!this.item?.id) {
                this.item = new Role;
            } else {
            
                this.roleDataStoreService.detail(this.item.id).subscribe(data => { {
                    this.item = data;
                    this.populate();
                }});
            }
            
        });
        this.permissionOptions = this.permissionDataStoreService.listing(this.permissionOptionsReq);
        
        this.populate();
    }
    
    onSubmit() {
        if (!this.!{ModelName}EditForm.invalid) {
            if (this.!{ModelName}EditForm.controls['id'].value === null || !(this.!{ModelName}EditForm.controls['id'].value > 0)) {
                this.roleDataStoreService.create(this.!{ModelName}EditForm.value).subscribe(newItem =>  {
                    this.item = newItem;
                });
            } else {
            
                this.roleDataStoreService.update(this.!{ModelName}EditForm.value).subscribe(newItem =>  {
                    this.item = newItem;
                });
            }
        }
    }
    
    onExit() {
    }
    
    populateRandom(): void {
        this.roleDataGenService.populateRandom(this.item);
        this.populate();
    }
    
    populate(): void {
        this.roleDataMapService.populate(this.!{ModelName}EditForm as FormGroup, this.item);
    }
}

