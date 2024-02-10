import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeComponent } from './theme-listing/theme.component';
import { ThemeComponent } from './theme-view/theme.component';

const routes: Routes = [
    {
        path: 'theme', 
        children: [ 
            { path: 'theme-listing', component: ThemeComponent },
            { path: 'theme-edit/:id', component: ThemeComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule {
}

