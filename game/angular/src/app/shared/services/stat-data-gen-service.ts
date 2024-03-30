import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Stat } from '../dto/model/stat';

@Injectable( {
    providedIn: 'root',
})

export class StatDataGenService {
    private apiUrl=environment.apiUrl;
    
    constructor() {
    }
    
    populateRandom(item: Stat): void {
        if (item.id == undefined)
            item.id = 0;
        item.name = faker.string.alpha(11);
        item.curValue = faker.number.float();
        item.maxValue = faker.number.float();
    }
}

