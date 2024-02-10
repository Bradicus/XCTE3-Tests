import { FilteredPageReqTpl } from '../paging/filtered-page-req-tpl';
import { FilteredPageRespTpl } from '../paging/filtered-page-resp-tpl';
@Injectable( {
    providedIn: 'root',
})

export class ThemeSharedDataStoreService {
    item: Observable<Theme[]> = new Observable<Theme[]>;
    lastUpdate: Date = new Date(0);
    expireMinutes: Number = 5;
    
    constructor(private themeDataStoreService: ThemeDataStoreService) {
    }
    
    listing(req: FilteredPageReqTpl<Theme>): Observable<FilteredPageRespTpl<Theme>> {
        if ((this.lastUpdate + this.expireMinutes * 60000) < new Date()) {
            this.item = themeDataStoreService.listing(req);
        }
        
        return this.item;
    }
}

