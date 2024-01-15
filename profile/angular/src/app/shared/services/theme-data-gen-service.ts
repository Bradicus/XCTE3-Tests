import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Observable } from 'rxjs';
import { Theme } from '../dto/model/theme';

@Injectable( {
    providedIn: 'root',
})

export class ThemeDataGenService {
    private apiUrl=environment.apiUrl;
    
    constructor() {
    }
    
    populateRandom(item: Theme): void {
        if (item.id == undefined)
            item.id = 0;
        item.name = faker.string.alpha(11);
        item.description = faker.string.alpha(11);
    }
}

