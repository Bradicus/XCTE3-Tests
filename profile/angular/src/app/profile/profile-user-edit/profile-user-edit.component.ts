import { Component, OnInit, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { faker } from '@faker-js/faker';
import { Observable, of } from 'rxjs';
import { Address } from '../../shared/dto/model/address';
import { ProfileUser } from '../../shared/dto/model/profile-user';
import { Theme } from '../../shared/dto/model/theme';
import { FilteredPageReqTpl } from '../../shared/paging/filtered-page-req-tpl';
import { FilteredPageRespTpl } from '../../shared/paging/filtered-page-resp-tpl';
import { ProfileUserDataGenService } from '../../shared/services/profile-user-data-gen-service';
import { ProfileUserDataMapService } from '../../shared/services/profile-user-data-map-service';
import { ProfileUserDataStoreService } from '../../shared/services/profile-user-data-store-service';
import { ThemeDataStoreService } from '../../shared/services/theme-data-store-service';

@Component({
    selector: 'app-profile-user-edit',
    templateUrl: './profile-user-edit.component.html',
    styleUrls: ['./profile-user-edit.component.css']
})

export class ProfileUserEditComponent implements OnInit  {
    item: ProfileUser = new ProfileUser();
    
    profileUserEditForm = new FormGroup({
        id: new FormControl<number>(0),
        firstName: new FormControl<string>('', [Validators.required, Validators.maxLength(255)]),
        lastName: new FormControl<string>('', [Validators.required, Validators.maxLength(255)]),
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
        themeId: new FormControl<number>(0),
        
    });
    
    themeOptions: Observable<FilteredPageRespTpl<Theme>> = new Observable<FilteredPageRespTpl<Theme>>;
    themeOptionsReq: FilteredPageReqTpl<Theme> = new FilteredPageReqTpl<Theme>;
    
    constructor(
            private profileUserDataStoreService: ProfileUserDataStoreService,
            private profileUserDataGenService: ProfileUserDataGenService,
            private profileUserDataMapService: ProfileUserDataMapService,
            private themeDataStoreService: ThemeDataStoreService,
            private route: ActivatedRoute) {
    }
    
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            let idVal = params.get('id');
            this.item.id = idVal !== null ? parseInt(idVal) : 0;
            
            if (!this.item?.id) {
                this.item = new ProfileUser;
            } else {
            
                this.profileUserDataStoreService.detail(this.item.id).subscribe(data => { {
                    this.item = data;
                    this.populate();
                }});
            }
            
        });
        
        this.themeOptions = this.themeDataStoreService.listing(this.themeOptionsReq);
        
        this.populate();
    }
    
    onSubmit() {
        if (!this.profileUserEditForm.invalid) {
            if (this.profileUserEditForm.controls['id'].value === null || !(this.profileUserEditForm.controls['id'].value > 0)) {
                this.profileUserDataStoreService.create(this.profileUserEditForm.value).subscribe(newItem =>  {
                    this.item = newItem;
                });
            } else {
            
                this.profileUserDataStoreService.update(this.profileUserEditForm.value).subscribe(newItem =>  {
                    this.item = newItem;
                });
            }
        }
    }
    
    onExit() {
    }
    
    populateRandom(): void {
        this.profileUserDataGenService.populateRandom(this.item);
        this.populate();
    }
    
    populate(): void {
        this.profileUserDataMapService.populate(this.profileUserEditForm as FormGroup, this.item);
    }
}

