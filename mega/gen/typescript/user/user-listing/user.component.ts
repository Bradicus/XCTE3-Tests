import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../shared/dto/model/user';
import { FilteredPageReqTpl } from '../../shared/paging/filtered-page-req-tpl';
import { FilteredPageRespTpl } from '../../shared/paging/filtered-page-resp-tpl';
import { UserDataStoreService } from '../../shared/services/user-data-store-service';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [ CommonModule, RouterModule ],
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit  {
    public pageObv: Observable<FilteredPageRespTpl<User>> = new Observable<FilteredPageRespTpl<User>>;
    public page: FilteredPageRespTpl<User> = new FilteredPageRespTpl<User>;
    public pageReq: FilteredPageReqTpl<User> = new FilteredPageReqTpl<User>;
    
    constructor(private userDataStoreService: UserDataStoreService, private route: ActivatedRoute) {
    }
    
    ngOnInit() {
        this.updatePageData();
    }
    
    getVisiblePageCount() {
        return Math.min((this.page?.pageCount ?? 0, 10));
    }
    
    updatePageData() {
        this.pageObv = this.userDataStoreService.listing(this.pageReq);
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
}

