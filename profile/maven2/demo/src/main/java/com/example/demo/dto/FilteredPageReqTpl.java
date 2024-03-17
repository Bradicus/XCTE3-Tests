package com.example.demo.dto;

/**
* @class FilteredPageReqTpl
* 
*/

public class FilteredPageReqTpl<T> {
    public int pageNum;
    public int pageSize;
    public String sortBy;
    public boolean sortAsc;
    public String searchCols;
    public FilteredPageSearchParam searchParams;
}

