package com.example.demo.api;

import com.example.demo.dto.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.mapstruct.factory.Mappers;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Page;
import com.example.demo.dto.FilteredPageRespTpl;
import com.example.demo.util.*;
import com.example.demo.db.model.*;
import com.example.demo.db.store.*;
import com.example.demo.mapper.*;
import java.util.*;
import java.time.LocalDateTime;

/**
* Web API controller
*/

@RestController
public class ProfileListingController {
    final List<Integer> pageSizes = List.of(5,25,50,100);
    
    final List<String> searchCols = List.of("first name","last name","email");
    
    @Autowired
    private ProfileDataStore profileDataStore;
    
    ProfileMapper mapper = Mappers.getMapper( ProfileMapper.class );
    
    /*
    * Web API get many profile listing
    */
    @GetMapping(path = "profile-listing", produces = MediaType.APPLICATION_JSON_VALUE)
    public FilteredPageRespTpl<ProfileListing> GetProfileListings(
            @RequestParam(defaultValue="0") Integer pageNum,
            @RequestParam(defaultValue="5") Integer pageSize,
            @RequestParam(defaultValue="") String sortBy,
            @RequestParam(defaultValue="true") Boolean sortAsc,
            @RequestParam(defaultValue="") String searchAll) {
        Sort sort = null;
        if (sortBy.length() > 0 && sortBy.length() > 0) {
            sort = Filter.getSort(sortBy, sortAsc);
        }
        
        if (pageSizes.size() > 0 && !pageSizes.contains(pageSize))
            pageSize = pageSizes.get(0);
        
        PageRequest pageRequest = Filter.getPageRequest(pageNum, pageSize, sort);
        Page<Profile> items;
        items = profileDataStore.searchForFirstNameLastNameEmail(pageRequest, searchAll, searchAll, searchAll);
        
        var mappedItems = items.map(item -> mapper.mapToProfileListing(item));
        var response = new FilteredPageRespTpl<ProfileListing>();
        response.pageCount = mappedItems.getTotalPages();
        response.data = mappedItems.getContent();
        response.pageNum = pageNum.intValue();
        response.pageSize = pageSize;
        response.sortBy = sortBy;
        
        return response;
    }
}

