import { Component, OnInit, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    selector: 'app-role-edit',
    templateUrl: './role-edit.component.html',
    styleUrls: ['./role-edit.component.css']
})

export class RoleEditComponent implements OnInit  {
    item: Role = new Role();
    
    roleEditForm = new FormGroup({
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
            private route: ActivatedRoute,
            private router: Router) {
    }
    
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            let idVal = params.get('id');
            this.item.id = idVal !== null ? parseInt(idVal) : 0;
            
            if (!this.item?.id) {
                this.item = new Role;
                this.populate();
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
        this.roleEditForm.markAllAsTouched();
        if (!this.roleEditForm.invalid) {
            if (this.roleEditForm.controls['id'].value === null || !(this.roleEditForm.controls['id'].value > 0)) {
                this.roleDataStoreService.create(this.roleEditForm.value).subscribe(newItem =>  {
                    this.router.navigate(["/","role","role-listing"]);
                });
            } else {
            
                this.roleDataStoreService.update(this.roleEditForm.value).subscribe(newItem =>  {
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
        this.roleDataMapService.populate(this.roleEditForm as FormGroup, this.item);
    }
}

