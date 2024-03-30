import { FilteredPageSearchParam } from './filtered-page-search-param';
export class FilteredPageReqTpl<T> {
    pageNum: number = 0;
    pageSize: number = 10;
    sortBy: string = "";
    sortAsc: boolean = true;
    searchCols: string = "";
    searchParams: FilteredPageSearchParam = new FilteredPageSearchParam();
}

