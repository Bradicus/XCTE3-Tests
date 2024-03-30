import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, map } from 'rxjs';
import { Entity } from '../dto/model/entity';
import { FilteredPageReqTpl } from '../paging/filtered-page-req-tpl';
import { FilteredPageRespTpl } from '../paging/filtered-page-resp-tpl';

@Injectable( {
    providedIn: 'root',
})

export class EntityDataStoreService {
    private apiUrl=environment.apiUrl;
    
    constructor(private httpClient: HttpClient) {
        this.apiUrl = environment.apiUrl;
    }
    
    detail(id: any): Observable<Entity> {
        return this.httpClient.get<Entity>(`${this.apiUrl}/entity/${id}`);
    }
    
    create(item: any): Observable<Entity> {
        return this.httpClient.post<Entity>(`${this.apiUrl}/entity`, item);
    }
    
    update(item: any): Observable<Entity> {
        return this.httpClient.put<Entity>(`${this.apiUrl}/entity`, item);
    }
    
    listing(req: FilteredPageReqTpl<Entity>): Observable<FilteredPageRespTpl<Entity>> {
        let params = new HttpParams();
        
        params = params.append("pageNum", req.pageNum);
        params = params.append("pageSize", req.pageSize);
        params = params.append("sortBy", req.sortBy);
        params = params.append("sortAsc", req.sortAsc);
        
        return this.httpClient.get<FilteredPageRespTpl<Entity>>(`${this.apiUrl}/entity`, { params} );
    }
}

