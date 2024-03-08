import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Role } from '../dto/model/role';
import { FilteredPageReqTpl } from '../paging/filtered-page-req-tpl';
import { FilteredPageRespTpl } from '../paging/filtered-page-resp-tpl';

@Injectable( {
    providedIn: 'root',
})

export class RoleDataStoreService {
    private apiUrl=environment.apiUrl;
    
    constructor(private httpClient: HttpClient) {
        this.apiUrl = environment.apiUrl;
    }
    
    detail(id: any): Observable<Role> {
        return this.httpClient.get<Role>(`${this.apiUrl}/role/${id}`);
    }
    
    create(item: any): Observable<Role> {
        return this.httpClient.post<Role>(`${this.apiUrl}/role`, item);
    }
    
    update(item: any): Observable<Role> {
        return this.httpClient.put<Role>(`${this.apiUrl}/role`, item);
    }
    
    listing(req: FilteredPageReqTpl<Role>): Observable<FilteredPageRespTpl<Role>> {
        let params = new HttpParams();
        
        params = params.append("pageNum", req.pageNum);
        params = params.append("pageSize", req.pageSize);
        params = params.append("sortBy", req.sortBy);
        params = params.append("sortAsc", req.sortAsc);
        
        return this.httpClient.get<FilteredPageRespTpl<Role>>(`${this.apiUrl}/role`, { params} );
    }
}

