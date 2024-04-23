import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Address } from '../dto/model/address';

@Injectable( {
    providedIn: 'root',
})

export class AddressDataGenService {
    private apiUrl=environment.apiUrl;
    
    constructor() {
    }
    
    populateRandom(item: Address): void {
        if (item.id == undefined)
            item.id = 0;
        item.street1 = faker.location.street();
        item.street2 = faker.location.secondaryAddress();
        item.city = faker.location.city();
        item.state = faker.location.state({ abbreviated: true });
        item.country = faker.location.country();
        item.zipCode = faker.location.zipCode();
    }
    
    initData(item:Address)(): void {
        item.id = 0;
        item.street1 = '';
        item.street2 = '';
        item.city = '';
        item.state = '';
        item.country = '';
        item.zipCode = '';
    }
}

