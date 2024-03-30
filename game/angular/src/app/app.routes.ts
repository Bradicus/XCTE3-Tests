import { Routes } from '@angular/router';
import { EntityEditComponent } from './entity/entity-edit/entity-edit.component';
import { StatEditComponent } from './stat/stat-edit/stat-edit.component';

/**
* @class Routes
* 
*/
export const routes: Routes = [
    { path: 'entity/entity-edit/:id', component: EntityEditComponent },
    { path: 'stat/stat-edit/:id', component: StatEditComponent },
];
