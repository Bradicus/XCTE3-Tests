import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../dto/model/user';
import { FilteredPageReqTpl } from '../paging/filtered-page-req-tpl';
import { FilteredPageRespTpl } from '../paging/filtered-page-resp-tpl';

@Injectable( {
    providedIn: 'root',
})

export class UserDataStoreService {
    private apiUrl=environment.apiUrl;
    
    constructor(private httpClient: HttpClient) {
        this.apiUrl = environment.apiUrl;
    }
    
    detail(id: any): Observable<User> {
        return this.httpClient.get<User>(`${this.apiUrl}/user/${id}`)
            .pipe(
                map((data: User)=> {
                    data.createdDate = new Date(data.createdDate);
                    data.lastLoginDate = new Date(data.lastLoginDate);
                    return data;
                })
                
            );
    }
    
    listing(req: FilteredPageReqTpl<User>): Observable<FilteredPageRespTpl<User>> {
        let params = new HttpParams();
        
        params = params.append("pageNum", req.pageNum);
        params = params.append("pageSize", req.pageSize);
        params = params.append("sortBy", req.sortBy);
        params = params.append("sortAsc", req.sortAsc);
        params = params.append("searchValue", req.searchValue);
        
        return this.httpClient.get<FilteredPageRespTpl<User>>(`${this.apiUrl}/user`, { params} );
    }
    
    create(item: any): Observable<User> {
        return this.httpClient.post<User>(`${this.apiUrl}/user`, item);
    }
    
    update(item: any): Observable<User> {
        return this.httpClient.put<User>(`${this.apiUrl}/user`, item);
    }
}

