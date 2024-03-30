import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Entity } from '../dto/model/entity';
import { Stat } from '../dto/model/stat';

@Injectable( {
    providedIn: 'root',
})

export class EntityDataGenService {
    private apiUrl=environment.apiUrl;
    
    constructor() {
    }
    
    populateRandom(item: Entity): void {
        if (item.id == undefined)
            item.id = 0;
        item.name = faker.string.alpha(11);
    }
}

