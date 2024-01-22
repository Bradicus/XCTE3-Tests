import { PagingFilter } from './paging-filter';
import { SearchFilter } from './search-filter';
import { SortFilter } from './sort-filter';
import { StaticFilter } from './static-filter';
/**
* @class DataFilter
* 
*/

export class DataFilter {
    paging: PagingFilter = new PagingFilter();
    searches: SearchFilter[] = [];
    sort: SortFilter = new SortFilter();
    staticFilter: StaticFilter = new StaticFilter();
}

