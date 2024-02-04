import { Component, OnInit, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Theme } from '../../shared/dto/model/theme';
import { FilteredPageReqTpl } from '../../shared/paging/filtered-page-req-tpl';
import { FilteredPageRespTpl } from '../../shared/paging/filtered-page-resp-tpl';
import { ThemeDataGenService } from '../../shared/services/theme-data-gen-service';
import { ThemeDataMapService } from '../../shared/services/theme-data-map-service';
import { ThemeDataStoreService } from '../../shared/services/theme-data-store-service';

@Component({
    selector: 'app-theme-view',
    templateUrl: './theme-view.component.html',
    styleUrls: ['./theme-view.component.css']
})

export class ThemeViewComponent implements OnInit  {
    public item: Theme = new Theme();
    
    themeViewForm = new FormGroup({
        id: new FormControl<number>({value: 0, disabled: true}),
        name: new FormControl<string>({value: '', disabled: true}, [Validators.maxLength(50)]),
        description: new FormControl<string>({value: '', disabled: true}),
    });
    
    constructor(
            private themeDataStoreService: ThemeDataStoreService,
            private themeDataGenService: ThemeDataGenService,
            private themeDataMapService: ThemeDataMapService,
            private route: ActivatedRoute) {
    }
    
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            let idVal = params.get('id');
            this.item.id = idVal !== null ? parseInt(idVal) : 0;
            
            if (!this.item?.id) {
                this.item = new Theme;
            } else {
            
                this.themeDataStoreService.detail(this.item.id).subscribe(data => { {
                    this.item = data;
                    this.populate();
                }});
            }
            
        });
        
        this.populate();
    }
    
    populate(): void {
        this.themeDataMapService.populate(this.themeViewForm as FormGroup, this.item);
    }
}

