import { Component, OnInit, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faker } from '@faker-js/faker';
import { Observable, of } from 'rxjs';
import { Address } from '../../shared/dto/model/address';
import { ProfileAdmin } from '../../shared/dto/model/profile-admin';
import { Role } from '../../shared/dto/model/role';
import { Theme } from '../../shared/dto/model/theme';
import { FilteredPageReqTpl } from '../../shared/paging/filtered-page-req-tpl';
import { FilteredPageRespTpl } from '../../shared/paging/filtered-page-resp-tpl';
import { ProfileAdminDataGenService } from '../../shared/services/profile-admin-data-gen-service';
import { ProfileAdminDataMapService } from '../../shared/services/profile-admin-data-map-service';
import { ProfileAdminDataStoreService } from '../../shared/services/profile-admin-data-store-service';
import { RoleDataStoreService } from '../../shared/services/role-data-store-service';
import { ThemeDataStoreService } from '../../shared/services/theme-data-store-service';

@Component({
    selector: 'app-profile-admin-edit',
    templateUrl: './profile-admin-edit.component.html',
    styleUrls: ['./profile-admin-edit.component.css']
})

export class ProfileAdminEditComponent implements OnInit  {
    item: ProfileAdmin = new ProfileAdmin();
    
    profileAdminEditForm = new FormGroup({
        id: new FormControl<number>(0),
        firstName: new FormControl<string>('', [Validators.required, Validators.maxLength(255)]),
        lastName: new FormControl<string>('', [Validators.required, Validators.maxLength(255)]),
        username: new FormControl<string>('', [Validators.maxLength(255)]),
        email: new FormControl<string>('', [Validators.required, Validators.maxLength(255)]),
        
        createdDate: new FormControl<Date>(new Date()),
        lastLoginDate: new FormControl<Date>(new Date()),
        mailingAddress: new FormGroup({
            id: new FormControl<number>(0),
            street1: new FormControl<string>('', [Validators.required, Validators.maxLength(50)]),
            street2: new FormControl<string>('', [Validators.maxLength(50)]),
            city: new FormControl<string>('', [Validators.required, Validators.maxLength(50)]),
            state: new FormControl<string>('', [Validators.required, Validators.maxLength(2)]),
            country: new FormControl<string>('', [Validators.required, Validators.maxLength(50)]),
            zipCode: new FormControl<string>('', [Validators.required, Validators.maxLength(20)]),
            active: new FormControl<boolean>(false),
        }),
        physicalAddress: new FormGroup({
            id: new FormControl<number>(0),
            street1: new FormControl<string>('', [Validators.required, Validators.maxLength(50)]),
            street2: new FormControl<string>('', [Validators.maxLength(50)]),
            city: new FormControl<string>('', [Validators.required, Validators.maxLength(50)]),
            state: new FormControl<string>('', [Validators.required, Validators.maxLength(2)]),
            country: new FormControl<string>('', [Validators.required, Validators.maxLength(50)]),
            zipCode: new FormControl<string>('', [Validators.required, Validators.maxLength(20)]),
            active: new FormControl<boolean>(false),
        }),
        roles: new FormArray([]),
        themeId: new FormControl<number>(0),
        active: new FormControl<boolean>(false),
        
    });
    
    roleOptions: Observable<FilteredPageRespTpl<Role>> = new Observable<FilteredPageRespTpl<Role>>;
    roleOptionsReq: FilteredPageReqTpl<Role> = new FilteredPageReqTpl<Role>;
    themeOptions: Observable<FilteredPageRespTpl<Theme>> = new Observable<FilteredPageRespTpl<Theme>>;
    themeOptionsReq: FilteredPageReqTpl<Theme> = new FilteredPageReqTpl<Theme>;
    
    constructor(
            private profileAdminDataStoreService: ProfileAdminDataStoreService,
            private profileAdminDataGenService: ProfileAdminDataGenService,
            private profileAdminDataMapService: ProfileAdminDataMapService,
            private roleDataStoreService: RoleDataStoreService,
            private themeDataStoreService: ThemeDataStoreService,
            private route: ActivatedRoute,
            private router: Router) {
    }
    
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            let idVal = params.get('id');
            this.item.id = idVal !== null ? parseInt(idVal) : 0;
            
            if (!this.item?.id) {
                this.item = new ProfileAdmin;
                this.populate();
            } else {
            
                this.profileAdminDataStoreService.detail(this.item.id).subscribe(data => { {
                    this.item = data;
                    this.populate();
                }});
            }
            
        });
        
        this.roleOptions = this.roleDataStoreService.listing(this.roleOptionsReq);
        this.themeOptions = this.themeDataStoreService.listing(this.themeOptionsReq);
        
        this.populate();
    }
    
    onSubmit() {
        this.profileAdminEditForm.markAllAsTouched();
        if (!this.profileAdminEditForm.invalid) {
            if (this.profileAdminEditForm.controls['id'].value === null || !(this.profileAdminEditForm.controls['id'].value > 0)) {
                this.profileAdminDataStoreService.create(this.profileAdminEditForm.value).subscribe(newItem =>  {
                    this.router.navigate(["/","profile","profile-admin-edit", newItem.id]);
                });
            } else {
            
                this.profileAdminDataStoreService.update(this.profileAdminEditForm.value).subscribe(newItem =>  {
                    this.item = newItem;
                });
            }
        }
    }
    
    onExit() {
    }
    
    populateRandom(): void {
        this.profileAdminDataGenService.populateRandom(this.item);
        this.populate();
    }
    
    populate(): void {
        this.profileAdminDataMapService.populate(this.profileAdminEditForm as FormGroup, this.item);
    }
}

