import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { Permission } from '../../shared/dto/model/permission';
import { FilteredPageReqTpl } from '../../shared/paging/filtered-page-req-tpl';
import { FilteredPageRespTpl } from '../../shared/paging/filtered-page-resp-tpl';
import { PermissionDataStoreService } from '../../shared/services/permission-data-store-service';

@Component({
    selector: 'app-permission-listing',
    standalone: true,
    imports: [ CommonModule, RouterModule ],
    templateUrl: './permission-listing.component.html',
    styleUrls: ['./permission-listing.component.css']
})

export class PermissionListingComponent implements OnInit  {
    public pageObv: Observable<FilteredPageRespTpl<Permission>> = new Observable<FilteredPageRespTpl<Permission>>;
    public page: FilteredPageRespTpl<Permission> = new FilteredPageRespTpl<Permission>;
    public pageReq: FilteredPageReqTpl<Permission> = new FilteredPageReqTpl<Permission>;
    
    public codeSubject: Subject<string> = new Subject<string>();
    public descriptionSubject: Subject<string> = new Subject<string>();
    
    constructor(private permissionDataStoreService: PermissionDataStoreService, private route: ActivatedRoute) {
        this.codeSubject.pipe(
            debounceTime(250),
            distinctUntilChanged())
        .subscribe((p) =>  { this.goToPage(0); });
        
        this.descriptionSubject.pipe(
            debounceTime(250),
            distinctUntilChanged())
        .subscribe((p) =>  { this.goToPage(0); });
    }
    
    ngOnInit() {
        this.updatePageData();
    }
    
    getVisiblePageCount() {
        return Math.min((this.page?.pageCount ?? 0, 10));
    }
    
    updatePageData() {
        this.pageObv = this.permissionDataStoreService.listing(this.pageReq);
        this.pageObv.subscribe((p) =>   {
            this.page = p;
            this.pageReq.pageNum = this.page.pageNum;
            this.pageReq.pageSize = this.page.pageSize;
        });
    }
    
    goToPage(pageNum: number) {
        this.pageReq.pageNum = pageNum;
        this.updatePageData();
    }
    
    goToPreviousPage() {
        if (this.pageReq.pageNum > 0)
            this.goToPage(this.pageReq.pageNum - 1);
    }
    
    goToNextPage() {
        if (this.pageReq.pageNum < this.page.pageCount - 1)
            this.goToPage(this.pageReq.pageNum + 1);
    }
    
    sortBy(colName: string) {
        if (colName === this.pageReq.sortBy) {
            this.pageReq.sortAsc = !this.pageReq.sortAsc;
        } else {
        
            this.pageReq.sortBy = colName;
            this.pageReq.sortAsc = true;
        }
        
        this.updatePageData();
    }
    
    onSearchCode(event: any) {
        this.pageReq.searchParams.set('code', event.target.value);
        this.codeSubject.next(event.target.value);
    }
    
    onSearchDescription(event: any) {
        this.pageReq.searchParams.set('description', event.target.value);
        this.descriptionSubject.next(event.target.value);
    }
    
    onDelete(item: Permission) {
        this.permissionDataStoreService.delete(item)
    }
}

