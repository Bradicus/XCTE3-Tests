import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProfileListing } from '../dto/model/profile-listing';
import { FilteredPageReqTpl } from '../paging/filtered-page-req-tpl';
import { FilteredPageRespTpl } from '../paging/filtered-page-resp-tpl';

@Injectable( {
    providedIn: 'root',
})

export class ProfileListingDataStoreService {
    private apiUrl=environment.apiUrl;
    
    constructor(private httpClient: HttpClient) {
        this.apiUrl = environment.apiUrl;
    }
    
    detail(id: any): Observable<ProfileListing> {
        return this.httpClient.get<ProfileListing>(`${this.apiUrl}/profile-listing/${id}`)
            .pipe(
                map((data: ProfileListing)=> {
                    data.createdDate = new Date(data.createdDate);
                    data.lastLoginDate = new Date(data.lastLoginDate);
                    return data;
                })
                
            );
    }
    
    create(item: any): Observable<ProfileListing> {
        return this.httpClient.post<ProfileListing>(`${this.apiUrl}/profile-listing`, item);
    }
    
    update(item: any): Observable<ProfileListing> {
        return this.httpClient.put<ProfileListing>(`${this.apiUrl}/profile-listing`, item);
    }
    
    listing(req: FilteredPageReqTpl<ProfileListing>): Observable<FilteredPageRespTpl<ProfileListing>> {
        let params = new HttpParams();
        
        params = params.append("pageNum", req.pageNum);
        params = params.append("pageSize", req.pageSize);
        params = params.append("sortBy", req.sortBy);
        params = params.append("sortAsc", req.sortAsc);
        params = params.append("searchAll", req.searchValue);
        
        return this.httpClient.get<FilteredPageRespTpl<ProfileListing>>(`${this.apiUrl}/profile-listing`, { params} );
    }
}

