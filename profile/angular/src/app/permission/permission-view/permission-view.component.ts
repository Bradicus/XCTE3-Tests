import { Component, OnInit, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Permission } from '../../shared/dto/model/permission';
import { FilteredPageReqTpl } from '../../shared/paging/filtered-page-req-tpl';
import { FilteredPageRespTpl } from '../../shared/paging/filtered-page-resp-tpl';
import { PermissionDataGenService } from '../../shared/services/permission-data-gen-service';
import { PermissionDataMapService } from '../../shared/services/permission-data-map-service';
import { PermissionDataStoreService } from '../../shared/services/permission-data-store-service';

@Component({
    selector: 'app-permission-view',
    templateUrl: './permission-view.component.html',
    styleUrls: ['./permission-view.component.css']
})

export class PermissionViewComponent implements OnInit  {
    public item: Permission = new Permission();
    
    permissionViewForm = new FormGroup({
        id: new FormControl<number>({value: 0, disabled: true}, [Validators.maxLength(10)]),
        code: new FormControl<string>({value: '', disabled: true}, [Validators.maxLength(50)]),
        description: new FormControl<string>({value: '', disabled: true}),
    });
    
    constructor(
            private permissionDataStoreService: PermissionDataStoreService,
            private permissionDataGenService: PermissionDataGenService,
            private permissionDataMapService: PermissionDataMapService,
            private route: ActivatedRoute) {
    }
    
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            let idVal = params.get('id');
            this.item.id = idVal !== null ? parseInt(idVal) : 0;
            
            if (!this.item?.id) {
                this.item = new Permission;
            } else {
            
                this.permissionDataStoreService.detail(this.item.id).subscribe(data => { {
                    this.item = data;
                    this.populate();
                }});
            }
            
        });
        
        this.populate();
    }
    
    populate(): void {
        this.permissionDataMapService.populate(this.permissionViewForm as FormGroup, this.item);
    }
}

