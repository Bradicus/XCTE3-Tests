import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormArray } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user-listing/user.component';
import { UserComponent } from './user-view/user.component';
import { UserRoutingModule } from './user.routing.module';

@NgModule({
    declarations: [
        UserComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        UserRoutingModule
    ],
    exports:[
        RouterModule,
        UserComponent
    ],
    providers: [],
})
export class UserModule {
}

