import { PagingFilter } from './paging-filter';
import { SortFilter } from './sort-filter';
/**
* @class DataFilter
* 
*/

export class DataFilter {
    paging: PagingFilter = PagingFilter.new;
    search: SearchFilters[] = [];
    sort: SortFilter = SortFilter.new;
    staticFilter: StaticFilter = StaticFilter.new;
}

