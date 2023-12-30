import { Component, OnInit, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { faker } from '@faker-js/faker';
import { Observable, of } from 'rxjs';
import { Address } from '../../shared/dto/model/address';
import { FilteredPageReqTpl } from '../../shared/paging/filtered-page-req-tpl';
import { FilteredPageRespTpl } from '../../shared/paging/filtered-page-resp-tpl';
import { AddressDataGenService } from '../../shared/services/address-data-gen-service';
import { AddressDataMapService } from '../../shared/services/address-data-map-service';
import { AddressDataStoreService } from '../../shared/services/address-data-store-service';

@Component({
    selector: 'app-address-edit',
    templateUrl: './address-edit.component.html',
    styleUrls: ['./address-edit.component.css']
})

export class AddressEditComponent implements OnInit  {
    item: Address = new Address();
    
    addressEditForm = new FormGroup({
        id: new FormControl<number>(0),
        street1: new FormControl<string>('', [Validators.required, Validators.maxLength(50)]),
        street2: new FormControl<string>('', [Validators.maxLength(50)]),
        city: new FormControl<string>('', [Validators.required, Validators.maxLength(50)]),
        state: new FormControl<string>('', [Validators.required, Validators.maxLength(2)]),
        country: new FormControl<string>('', [Validators.required, Validators.maxLength(50)]),
        zipCode: new FormControl<string>('', [Validators.required, Validators.maxLength(20)]),
    });
    
    constructor(
            private addressDataStoreService: AddressDataStoreService,
            private addressDataGenService: AddressDataGenService,
            private addressDataMapService: AddressDataMapService,
            private route: ActivatedRoute) {
    }
    
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            let idVal = params.get('id');
            this.item.id = idVal !== null ? parseInt(idVal) : 0;
            
            if (!this.item?.id) {
                this.item = new Address;
            } else {
            
                this.addressDataStoreService.detail(this.item.id).subscribe(data => { {
                    this.item = data;
                    this.populate();
                }});
}
            
        });
        
        this.populate();
    }
    
    onSubmit() {
        if (!this.addressEditForm.invalid) {
            if (this.addressEditForm.controls['id'].value === null || !(this.addressEditForm.controls['id'].value > 0)) {
                this.addressDataStoreService.create(this.addressEditForm.value).subscribe(newItem =>  {
                    this.item = newItem;
                });
} else {
            
                this.addressDataStoreService.update(this.addressEditForm.value).subscribe(newItem =>  {
                    this.item = newItem;
                });
}
}
}
    
    onExit() {
    }
    
    populateRandom(): void {
        this.addressDataGenService.populateRandom(this.item);
        this.populate();
    }
    
    populate(): void {
        this.addressDataMapService.populate(this.addressEditForm as FormGroup, this.item);
    }
}

