import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProfileUser } from '../dto/model/profile-user';
import { FilteredPageReqTpl } from '../paging/filtered-page-req-tpl';
import { FilteredPageRespTpl } from '../paging/filtered-page-resp-tpl';

@Injectable( {
    providedIn: 'root',
})

export class ProfileUserDataStoreService {
    private apiUrl=environment.apiUrl;
    
    constructor(private httpClient: HttpClient) {
        this.apiUrl = environment.apiUrl;
    }
    
    detail(id: any): Observable<ProfileUser> {
        return this.httpClient.get<ProfileUser>(`${this.apiUrl}/profile-user/${id}`)
            .pipe(
                map((data: ProfileUser)=> {
                    data.createdDate = new Date(data.createdDate);
                    data.lastLoginDate = new Date(data.lastLoginDate);
                    return data;
                })
                
            );
    }
    
    create(item: any): Observable<ProfileUser> {
        return this.httpClient.post<ProfileUser>(`${this.apiUrl}/profile-user`, item);
    }
    
    update(item: any): Observable<ProfileUser> {
        return this.httpClient.put<ProfileUser>(`${this.apiUrl}/profile-user`, item);
    }
    
    listing(req: FilteredPageReqTpl<ProfileUser>): Observable<FilteredPageRespTpl<ProfileUser>> {
        let params = new HttpParams();
        
        params = params.append("pageNum", req.pageNum);
        params = params.append("pageSize", req.pageSize);
        params = params.append("sortBy", req.sortBy);
        params = params.append("sortAsc", req.sortAsc);
        params = params.append("searchValue", req.searchValue);
        
        return this.httpClient.get<FilteredPageRespTpl<ProfileUser>>(`${this.apiUrl}/profile-user`, { params} );
    }
}

