import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faker } from '@faker-js/faker';
import { Observable, of } from 'rxjs';
import { Address } from '../../shared/dto/model/address';
import { Role } from '../../shared/dto/model/role';
import { Theme } from '../../shared/dto/model/theme';
import { User } from '../../shared/dto/model/user';
import { FilteredPageReqTpl } from '../../shared/paging/filtered-page-req-tpl';
import { FilteredPageRespTpl } from '../../shared/paging/filtered-page-resp-tpl';
import { UserDataGenService } from '../../shared/services/user-data-gen-service';
import { UserDataMapService } from '../../shared/services/user-data-map-service';
import { UserDataStoreService } from '../../shared/services/user-data-store-service';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [ CommonModule, ReactiveFormsModule ],
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit  {
    item: User = new User();
    
    userForm = new FormGroup({
        id: new FormControl<number>(0),
        firstName: new FormControl<string>('', [Validators.required, Validators.maxLength(255)]),
        lastName: new FormControl<string>('', [Validators.required, Validators.maxLength(255)]),
        username: new FormControl<string>('', [Validators.maxLength(255)]),
        email: new FormControl<string>('', [Validators.required, Validators.maxLength(255)]),
        
        createdDate: new FormControl<Date>(new Date()),
        lastLoginDate: new FormControl<Date>(new Date()),
        mailingAddress: new FormControl(''),
        physicalAddress: new FormControl(''),
        roles: new FormArray([]),
        active: new FormControl<boolean>(false),
        theme: new FormControl<string>('', [Validators.maxLength(255)]),
        
    });
    
    roleOptions: Observable<FilteredPageRespTpl<Role>> = new Observable<FilteredPageRespTpl<Role>>;
    roleOptionsReq: FilteredPageReqTpl<Role> = new FilteredPageReqTpl<Role>;
    themeOptions: Observable<FilteredPageRespTpl<Theme>> = new Observable<FilteredPageRespTpl<Theme>>;
    themeOptionsReq: FilteredPageReqTpl<Theme> = new FilteredPageReqTpl<Theme>;
    
    constructor(
            private userDataStoreService: UserDataStoreService,
            private userDataGenService: UserDataGenService,
            private userDataMapService: UserDataMapService,
            private route: ActivatedRoute,
            private router: Router) {
    }
    
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            let idVal = params.get('id');
            this.item.id = idVal !== null ? parseInt(idVal) : 0;
            
            if (!this.item?.id) {
                this.item = new User;
                this.populate();
            } else {
            
                this.userDataStoreService.detail(this.item.id).subscribe(data => { {
                    this.item = data;
                    this.populate();
                }});
            }
            
        });
        
        this.populate();
    }
    
    onSubmit() {
        this.userForm.markAllAsTouched();
        if (!this.userForm.invalid) {
            if (this.userForm.controls['id'].value === null || !(this.userForm.controls['id'].value > 0)) {
                this.userDataStoreService.create(this.userForm.value).subscribe(newItem =>  {
                    this.router.navigate(["/","user-listing"]);
                });
            } else {
            
                this.userDataStoreService.update(this.userForm.value).subscribe(newItem =>  {
                    this.item = newItem;
                });
            }
        }
    }
    
    onExit() {
    }
    
    populateRandom(): void {
        this.userDataGenService.populateRandom(this.item);
        this.populate();
    }
    
    populate(): void {
        this.userDataMapService.populate(this.userForm as FormGroup, this.item);
    }
}

