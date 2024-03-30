import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, map } from 'rxjs';
import { Theme } from '../dto/model/theme';
import { FilteredPageReqTpl } from '../paging/filtered-page-req-tpl';
import { FilteredPageRespTpl } from '../paging/filtered-page-resp-tpl';

@Injectable( {
    providedIn: 'root',
})

export class ThemeDataStoreService {
    private apiUrl=environment.apiUrl;
    
    constructor(private httpClient: HttpClient) {
        this.apiUrl = environment.apiUrl;
    }
    
    detail(id: any): Observable<Theme> {
        return this.httpClient.get<Theme>(`${this.apiUrl}/theme/${id}`);
    }
    
    create(item: any): Observable<Theme> {
        return this.httpClient.post<Theme>(`${this.apiUrl}/theme`, item);
    }
    
    update(item: any): Observable<Theme> {
        return this.httpClient.put<Theme>(`${this.apiUrl}/theme`, item);
    }
    
    listing(req: FilteredPageReqTpl<Theme>): Observable<FilteredPageRespTpl<Theme>> {
        let params = new HttpParams();
        
        params = params.append("pageNum", req.pageNum);
        params = params.append("pageSize", req.pageSize);
        params = params.append("sortBy", req.sortBy);
        params = params.append("sortAsc", req.sortAsc);
        
        return this.httpClient.get<FilteredPageRespTpl<Theme>>(`${this.apiUrl}/theme`, { params} );
    }
}

