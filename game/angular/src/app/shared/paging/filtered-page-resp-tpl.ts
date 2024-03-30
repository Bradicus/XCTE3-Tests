export class FilteredPageRespTpl<T> {
    data: T[] = [];
    pageNum: number = 0;
    pageSize: number = 10;
    pageCount: number = 0;
    sortBy: string = "";
    sortAsc: boolean = true;
}

