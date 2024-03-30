import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, map } from 'rxjs';
import { Address } from '../dto/model/address';
import { FilteredPageReqTpl } from '../paging/filtered-page-req-tpl';
import { FilteredPageRespTpl } from '../paging/filtered-page-resp-tpl';

@Injectable( {
    providedIn: 'root',
})

export class AddressDataStoreService {
    private apiUrl=environment.apiUrl;
    
    constructor(private httpClient: HttpClient) {
        this.apiUrl = environment.apiUrl;
    }
    
    detail(id: any): Observable<Address> {
        return this.httpClient.get<Address>(`${this.apiUrl}/address/${id}`);
    }
    
    create(item: any): Observable<Address> {
        return this.httpClient.post<Address>(`${this.apiUrl}/address`, item);
    }
    
    update(item: any): Observable<Address> {
        return this.httpClient.put<Address>(`${this.apiUrl}/address`, item);
    }
    
    listing(req: FilteredPageReqTpl<Address>): Observable<FilteredPageRespTpl<Address>> {
        let params = new HttpParams();
        
        params = params.append("pageNum", req.pageNum);
        params = params.append("pageSize", req.pageSize);
        params = params.append("sortBy", req.sortBy);
        params = params.append("sortAsc", req.sortAsc);
        
        return this.httpClient.get<FilteredPageRespTpl<Address>>(`${this.apiUrl}/address`, { params} );
    }
}

