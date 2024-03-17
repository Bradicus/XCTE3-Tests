import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Permission } from '../dto/model/permission';
import { FilteredPageReqTpl } from '../paging/filtered-page-req-tpl';
import { FilteredPageRespTpl } from '../paging/filtered-page-resp-tpl';

@Injectable( {
    providedIn: 'root',
})

export class PermissionDataStoreService {
    private apiUrl=environment.apiUrl;
    
    constructor(private httpClient: HttpClient) {
        this.apiUrl = environment.apiUrl;
    }
    
    detail(id: any): Observable<Permission> {
        return this.httpClient.get<Permission>(`${this.apiUrl}/permission/${id}`);
    }
    
    create(item: any): Observable<Permission> {
        return this.httpClient.post<Permission>(`${this.apiUrl}/permission`, item);
    }
    
    update(item: any): Observable<Permission> {
        return this.httpClient.put<Permission>(`${this.apiUrl}/permission`, item);
    }
    
    delete(item: any): any {
        return this.httpClient.delete<Permission>(`${this.apiUrl}/permission/${item.id}`);
    }
    
    listing(req: FilteredPageReqTpl<Permission>): Observable<FilteredPageRespTpl<Permission>> {
        let params = new HttpParams();
        
        params = params.append("pageNum", req.pageNum);
        params = params.append("pageSize", req.pageSize);
        params = params.append("sortBy", req.sortBy);
        params = params.append("sortAsc", req.sortAsc);
        for (let [key, value] of  req.searchParams) {
            params = params.append(key, value);
        }
        
        return this.httpClient.get<FilteredPageRespTpl<Permission>>(`${this.apiUrl}/permission`, { params} );
    }
}

