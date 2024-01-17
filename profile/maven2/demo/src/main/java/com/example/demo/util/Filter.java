package com.example.demo.util;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;

/**
* @class Filter
* 
*/
public class Filter {
    
    public static PageRequest getPageRequest(Integer pageNum, Integer pageSize, Sort sort) {
        PageRequest pageRequest = null;
        if (pageNum != null && pageSize > 0) {
            pageRequest = PageRequest.of(pageNum, pageSize);
        } else {
        
            pageRequest = PageRequest.of(0, Integer.MAX_VALUE);
        }
        
        if (sort != null) {
            pageRequest = pageRequest.withSort(sort);
        }
        
        return pageRequest;
    }
    
    public static Sort getSort(String sortBy, Boolean sortAsc) {
        Sort sort = null;
        if (sortBy != null) {
            sort = Sort.by(sortBy);
            if (sortAsc == true) {
                sort = sort.ascending();
            } else {
            
                sort = sort.descending();
            }
        }
        
        return sort;
    }
}

