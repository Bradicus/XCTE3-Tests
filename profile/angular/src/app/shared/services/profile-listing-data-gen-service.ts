import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Observable } from 'rxjs';
import { ProfileListing } from '../dto/model/profile-listing';

@Injectable( {
    providedIn: 'root',
})

export class ProfileListingDataGenService {
    private apiUrl=environment.apiUrl;
    
    constructor() {
    }
    
    populateRandom(item: ProfileListing): void {
        if (item.id == undefined)
            item.id = 0;
        item.firstName = faker.person.firstName();
        item.lastName = faker.person.lastName();
        item.pusername = faker.string.alpha(11);
        item.email = faker.person.firstName() + "." + faker.person.lastName() + "@example.com";
        
        item.createdDate = faker.date.recent();
        item.lastLoginDate = faker.date.recent();
        item.active = faker.datatype.boolean();
}
}

