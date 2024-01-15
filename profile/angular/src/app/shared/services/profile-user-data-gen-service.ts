import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Observable } from 'rxjs';
import { Address } from '../dto/model/address';
import { ProfileUser } from '../dto/model/profile-user';
import { AddressDataGenService } from './address-data-gen-service';

@Injectable( {
    providedIn: 'root',
})

export class ProfileUserDataGenService {
    private apiUrl=environment.apiUrl;
    
    constructor(private addressDataGenService: AddressDataGenService) {
    }
    
    populateRandom(item: ProfileUser): void {
        if (item.id == undefined)
            item.id = 0;
        item.firstName = faker.person.firstName();
        item.lastName = faker.person.lastName();
        item.email = faker.person.firstName() + "." + faker.person.lastName() + "@example.com";
        
        item.createdDate = faker.date.recent();
        item.lastLoginDate = faker.date.recent();
        this.addressDataGenService.populateRandom(item.mailingAddress);
        this.addressDataGenService.populateRandom(item.physicalAddress);
        item.themeId = 1;
    }
}

