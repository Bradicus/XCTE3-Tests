import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, map } from 'rxjs';
import { Stat } from '../dto/model/stat';
import { FilteredPageReqTpl } from '../paging/filtered-page-req-tpl';
import { FilteredPageRespTpl } from '../paging/filtered-page-resp-tpl';

@Injectable( {
    providedIn: 'root',
})

export class StatDataStoreService {
    private apiUrl=environment.apiUrl;
    
    constructor(private httpClient: HttpClient) {
        this.apiUrl = environment.apiUrl;
    }
    
    detail(id: any): Observable<Stat> {
        return this.httpClient.get<Stat>(`${this.apiUrl}/stat/${id}`);
    }
    
    create(item: any): Observable<Stat> {
        return this.httpClient.post<Stat>(`${this.apiUrl}/stat`, item);
    }
    
    update(item: any): Observable<Stat> {
        return this.httpClient.put<Stat>(`${this.apiUrl}/stat`, item);
    }
    
    listing(req: FilteredPageReqTpl<Stat>): Observable<FilteredPageRespTpl<Stat>> {
        let params = new HttpParams();
        
        params = params.append("pageNum", req.pageNum);
        params = params.append("pageSize", req.pageSize);
        params = params.append("sortBy", req.sortBy);
        params = params.append("sortAsc", req.sortAsc);
        
        return this.httpClient.get<FilteredPageRespTpl<Stat>>(`${this.apiUrl}/stat`, { params} );
    }
}

