import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Observable } from 'rxjs';
import { Address } from '../dto/model/address';
import { ProfileAdmin } from '../dto/model/profile-admin';
import { Role } from '../dto/model/role';
import { AddressDataGenService } from './address-data-gen-service';

@Injectable( {
    providedIn: 'root',
})

export class ProfileAdminDataGenService {
    private apiUrl=environment.apiUrl;
    
    constructor(private addressDataGenService: AddressDataGenService) {
    }
    
    populateRandom(item: ProfileAdmin): void {
        if (item.id == undefined)
            item.id = 0;
        item.firstName = faker.person.firstName();
        item.lastName = faker.person.lastName();
        item.username = faker.string.alpha(11);
        item.email = faker.person.firstName() + "." + faker.person.lastName() + "@example.com";
        
        item.createdDate = faker.date.recent();
        item.lastLoginDate = faker.date.recent();
        this.addressDataGenService.populateRandom(item.mailingAddress);
        this.addressDataGenService.populateRandom(item.physicalAddress);
        item.themeId = 1;
        item.active = faker.datatype.boolean();
    }
}

