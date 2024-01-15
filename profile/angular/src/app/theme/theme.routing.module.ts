import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeEditComponent } from './theme-edit/theme-edit.component';
import { ThemeListingComponent } from './theme-listing/theme-listing.component';
import { ThemeViewComponent } from './theme-view/theme-view.component';

const routes: Routes = [
    {
        path: 'theme', 
        children: [ 
            { path: 'theme-listing', component: ThemeListingComponent },
            { path: 'theme-view/:id', component: ThemeViewComponent },
            { path: 'theme-edit/:id', component: ThemeEditComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule {
}

