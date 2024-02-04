import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Theme } from '../../shared/dto/model/theme';
import { FilteredPageReqTpl } from '../../shared/paging/filtered-page-req-tpl';
import { FilteredPageRespTpl } from '../../shared/paging/filtered-page-resp-tpl';
import { ThemeDataStoreService } from '../../shared/services/theme-data-store-service';

@Component({
    selector: 'app-listing',
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.css']
})

export class ListingComponent implements OnInit  {
    public pageObv: Observable<FilteredPageRespTpl<Theme>> = new Observable<FilteredPageRespTpl<Theme>>;
    public page: FilteredPageRespTpl<Theme> = new FilteredPageRespTpl<Theme>;
    public pageReq: FilteredPageReqTpl<Theme> = new FilteredPageReqTpl<Theme>;
    
    constructor(private themeDataStoreService: ThemeDataStoreService, private route: ActivatedRoute) {
    }
    
    ngOnInit() {
        this.updatePageData();
    }
    
    getVisiblePageCount() {
        return Math.min((this.page?.pageCount ?? 0, 10));
    }
    
    updatePageData() {
        this.pageObv = this.themeDataStoreService.listing(this.pageReq);
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
    
    onSearch(event: any) {
        this.pageReq.searchValue = event.target.value;
    }
}

