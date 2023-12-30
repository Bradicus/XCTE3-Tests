import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProfileAdmin } from '../dto/model/profile-admin';
import { FilteredPageReqTpl } from '../paging/filtered-page-req-tpl';
import { FilteredPageRespTpl } from '../paging/filtered-page-resp-tpl';

@Injectable( {
    providedIn: 'root',
})

export class ProfileAdminDataStoreService {
    private apiUrl=environment.apiUrl;
    
    constructor(private httpClient: HttpClient) {
        this.apiUrl = environment.apiUrl;
    }
    
    detail(id: any): Observable<ProfileAdmin> {
        return this.httpClient.get<ProfileAdmin>(`${this.apiUrl}/profile-admin/${id}`)
            .pipe(
                map((data: ProfileAdmin)=> {
                    data.createdDate = new Date(data.createdDate);
                    data.lastLoginDate = new Date(data.lastLoginDate);
                    return data;
                })
                
            );
    }
    
    create(item: any): Observable<ProfileAdmin> {
        return this.httpClient.post<ProfileAdmin>(`${this.apiUrl}/profile-admin`, item);
    }
    
    update(item: any): Observable<ProfileAdmin> {
        return this.httpClient.put<ProfileAdmin>(`${this.apiUrl}/profile-admin`, item);
    }
    
    listing(req: FilteredPageReqTpl<ProfileAdmin>): Observable<FilteredPageRespTpl<ProfileAdmin>> {
        let params = new HttpParams();
        
        params = params.append("pageNum", req.pageNum);
        params = params.append("pageSize", req.pageSize);
        params = params.append("sortBy", req.sortBy);
        params = params.append("sortAsc", req.sortAsc);
        params = params.append("searchValue", req.searchValue);
        
        return this.httpClient.get<FilteredPageRespTpl<ProfileAdmin>>(`${this.apiUrl}/profile-admin`, { params} );
    }
}

