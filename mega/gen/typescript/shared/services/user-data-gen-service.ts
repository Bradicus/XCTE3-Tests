import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../dto/model/user';
import { AddressDataGenService } from './address-data-gen-service';

@Injectable( {
    providedIn: 'root',
})

export class UserDataGenService {
    private apiUrl=environment.apiUrl;
    
    constructor(private addressDataGenService: AddressDataGenService) {
    }
    
    populateRandom(item: User): void {
        if (item.id == undefined)
            item.id = 0;
        item.firstName = faker.person.firstName();
        item.lastName = faker.person.lastName();
        item.username = faker.string.alpha(11);
        item.email = faker.person.firstName() + "." + faker.person.lastName() + "@example.com";
        
        item.createdDate = faker.date.recent();
        item.lastLoginDate = faker.date.recent();
        item.roles.push(1);
        item.active = faker.datatype.boolean();
        item.theme = 1;
    }
    
    initData(item:User)(): void {
        item.id = 0;
        item.firstName = '';
        item.lastName = '';
        item.username = '';
        item.email = '';
        
        item.createdDate = new Date();
        item.lastLoginDate = new Date();
        item.mailingAddress = new Address();
        item.physicalAddress = new Address();
        item.roles = [];
        item.active = false;
        item.theme = '';
    }
}

