import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { ProfileListing } from '../../shared/dto/model/profile-listing';
import { FilteredPageReqTpl } from '../../shared/paging/filtered-page-req-tpl';
import { FilteredPageRespTpl } from '../../shared/paging/filtered-page-resp-tpl';
import { ProfileListingDataStoreService } from '../../shared/services/profile-listing-data-store-service';

@Component({
    selector: 'app-profile-listing',
    templateUrl: './profile-listing.component.html',
    styleUrls: ['./profile-listing.component.css']
})

export class ProfileListingComponent implements OnInit  {
    public pageObv: Observable<FilteredPageRespTpl<ProfileListing>> = new Observable<FilteredPageRespTpl<ProfileListing>>;
    public page: FilteredPageRespTpl<ProfileListing> = new FilteredPageRespTpl<ProfileListing>;
    public pageReq: FilteredPageReqTpl<ProfileListing> = new FilteredPageReqTpl<ProfileListing>;
    
    public searchFirstNameOrLastNameOrEmailSubject: Subject<string> = new Subject<string>();
    
    constructor(
            private profileListingDataStoreService: ProfileListingDataStoreService,
            private route: ActivatedRoute) {
        this.searchFirstNameOrLastNameOrEmailSubject.pipe(
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
        this.pageObv = this.profileListingDataStoreService.listing(this.pageReq);
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
        this.searchFirstNameOrLastNameOrEmailSubject.next(event.target.value);
    }
    
    onDisable(item: ProfileListing) {
    }
}

