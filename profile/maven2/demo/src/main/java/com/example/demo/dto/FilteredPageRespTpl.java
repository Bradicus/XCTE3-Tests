package com.example.demo.dto;

import java.util.List;

/**
* @class FilteredPageRespTpl
* 
*/

public class FilteredPageRespTpl<T> {
    public List<T> data;
    public int pageNum;
    public int pageSize;
    public int pageCount;
    public String sortBy;
    public boolean sortAsc;
    public String searchCols;
    public String searchValue;
}

