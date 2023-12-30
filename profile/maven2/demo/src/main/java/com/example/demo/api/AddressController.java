package com.example.demo.api;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.mapstruct.factory.Mappers;
import com.example.demo.db_model.*;
import com.example.demo.data.*;
import java.util.*;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Page;
import com.example.demo.dto.FilteredPageRespTpl;
import com.example.demo.util.*;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

/**
* Web API controller
*/

@RestController
public class AddressController {
    final List<Integer> pageSizes = List.of(5,25,50,100);
    
    @Autowired
    private AddressDataStore addressDataStore;
    
    /*
    * Web API get single address
    */
    @GetMapping("address/{id}")
    public Address GetAddress(@PathVariable("id") long id) {
        var item = addressDataStore.findById(id);
        
        return item.get();
    }
    
    /*
    * Web API get many address
    */
    @GetMapping(path = "address", produces = MediaType.APPLICATION_JSON_VALUE)
    public FilteredPageRespTpl<Address> GetAddresss(
            @RequestParam(defaultValue="0") Integer pageNum,
            @RequestParam(defaultValue="5") Integer pageSize,
            @RequestParam(defaultValue="") String sortBy,
            @RequestParam(defaultValue="true") Boolean sortAsc,
            @RequestParam(defaultValue="") String searchValue) {
        Sort sort = null;
        if (sortBy.length() > 0 && sortBy.length() > 0) {
            sort = Filter.getSort(sortBy, sortAsc);
        }
        
        if (pageSizes.size() > 0 && !pageSizes.contains(pageSize))
            pageSize = pageSizes.get(0);
        
        PageRequest pageRequest = Filter.getPageRequest(pageNum, pageSize, sort);
        Page<Address> items;
        items = addressDataStore.findAll(pageRequest);
        
        var response = new FilteredPageRespTpl<Address>();
        response.data = items.getContent();
        response.pageCount = items.getTotalPages();
        response.pageNum = pageNum.intValue();
        response.pageSize = pageSize;
        response.sortBy = sortBy;
        response.searchValue = searchValue;
        
        return response;
    }
    
    /*
    * Web API create single address
    */
    @PostMapping(path = "address",
        consumes = MediaType.APPLICATION_JSON_VALUE, 
        produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Address> PostAddress(@RequestBody Address item) {
        Address savedItem = addressDataStore.saveAndFlush(item);
        return new ResponseEntity<Address>(savedItem, HttpStatus.CREATED);
    }
    
    /*
    * Web API update single address
    */
    @PutMapping(path = "address",
        consumes = MediaType.APPLICATION_JSON_VALUE, 
        produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Address> PutAddress(@RequestBody Address item) {
        var dataItem = addressDataStore.findById(item.id);
        
        if (dataItem.isPresent()) {
            Address savedItem = addressDataStore.saveAndFlush(item);
            return new ResponseEntity<Address>(savedItem, HttpStatus.CREATED);
        } else {
        
            return null;
        }
}
}

