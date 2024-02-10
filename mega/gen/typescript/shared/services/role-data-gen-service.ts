import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Observable } from 'rxjs';
import { Role } from '../dto/model/role';

@Injectable( {
    providedIn: 'root',
})

export class RoleDataGenService {
    private apiUrl=environment.apiUrl;
    
    constructor() {
    }
    
    populateRandom(item: Role): void {
        if (item.id == undefined)
            item.id = 0;
        item.name = faker.string.alpha(11);
        item.description = faker.string.alpha(11);
    }
    
    initData(item: Role): void {
        item.id = 0;
        item.name = '';
        item.description = '';
    }
}

