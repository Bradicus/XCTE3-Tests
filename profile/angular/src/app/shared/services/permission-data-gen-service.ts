import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Permission } from '../dto/model/permission';

@Injectable( {
    providedIn: 'root',
})

export class PermissionDataGenService {
    private apiUrl=environment.apiUrl;
    
    constructor() {
    }
    
    populateRandom(item: Permission): void {
        if (item.id == undefined)
            item.id = 0;
        item.code = faker.string.alpha(11);
        item.description = faker.string.alpha(11);
    }
}

