import { Component, OnInit, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
    selector: 'app-profile-user-view',
    templateUrl: './profile-user-view.component.html',
    styleUrls: ['./profile-user-view.component.css']
})

export class ProfileUserViewComponent implements OnInit  {
    public item: ProfileUser = new ProfileUser();
    
    profileUserViewForm = new FormGroup({
        id: new FormControl<number>({value: 0, disabled: true}),
        firstName: new FormControl<string>({value: '', disabled: true}, [Validators.required, Validators.maxLength(255)]),
        lastName: new FormControl<string>({value: '', disabled: true}, [Validators.required, Validators.maxLength(255)]),
        email: new FormControl<string>({value: '', disabled: true}, [Validators.required, Validators.maxLength(255)]),
        
        createdDate: new FormControl<Date>({value: new Date(), disabled: true}),
        lastLoginDate: new FormControl<Date>({value: new Date(), disabled: true}),
        mailingAddress: new FormGroup({
            id: new FormControl<number>({value: 0, disabled: true}),
            street1: new FormControl<string>({value: '', disabled: true}, [Validators.required, Validators.maxLength(50)]),
            street2: new FormControl<string>({value: '', disabled: true}, [Validators.maxLength(50)]),
            city: new FormControl<string>({value: '', disabled: true}, [Validators.required, Validators.maxLength(50)]),
            state: new FormControl<string>({value: '', disabled: true}, [Validators.required, Validators.maxLength(2)]),
            country: new FormControl<string>({value: '', disabled: true}, [Validators.required, Validators.maxLength(50)]),
            zipCode: new FormControl<string>({value: '', disabled: true}, [Validators.required, Validators.maxLength(20)]),
            active: new FormControl<boolean>({value: false, disabled: true}),
        }),
        physicalAddress: new FormGroup({
            id: new FormControl<number>({value: 0, disabled: true}),
            street1: new FormControl<string>({value: '', disabled: true}, [Validators.required, Validators.maxLength(50)]),
            street2: new FormControl<string>({value: '', disabled: true}, [Validators.maxLength(50)]),
            city: new FormControl<string>({value: '', disabled: true}, [Validators.required, Validators.maxLength(50)]),
            state: new FormControl<string>({value: '', disabled: true}, [Validators.required, Validators.maxLength(2)]),
            country: new FormControl<string>({value: '', disabled: true}, [Validators.required, Validators.maxLength(50)]),
            zipCode: new FormControl<string>({value: '', disabled: true}, [Validators.required, Validators.maxLength(20)]),
            active: new FormControl<boolean>({value: false, disabled: true}),
        }),
        themeId: new FormControl<number>({value: 0, disabled: true}),
        
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
    
    populate(): void {
        this.profileUserDataMapService.populate(this.profileUserViewForm as FormGroup, this.item);
    }
}

