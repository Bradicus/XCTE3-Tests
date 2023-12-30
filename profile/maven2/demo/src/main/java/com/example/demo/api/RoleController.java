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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Page;
import com.example.demo.dto.FilteredPageRespTpl;
import com.example.demo.util.*;

/**
* Web API controller
*/

@RestController
public class RoleController {
    @Autowired
    private RoleDataStore roleDataStore;
    
    /*
    * Web API get single role
    */
    @GetMapping("role/{id}")
    public Role GetRole(@PathVariable("id") long id) {
        var item = roleDataStore.findById(id);
        
        return item.get();
    }
    
    /*
    * Web API create single role
    */
    @PostMapping(path = "role",
        consumes = MediaType.APPLICATION_JSON_VALUE, 
        produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Role> PostRole(@RequestBody Role item) {
        Role savedItem = roleDataStore.saveAndFlush(item);
        return new ResponseEntity<Role>(savedItem, HttpStatus.CREATED);
    }
    
    /*
    * Web API update single role
    */
    @PutMapping(path = "role",
        consumes = MediaType.APPLICATION_JSON_VALUE, 
        produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Role> PutRole(@RequestBody Role item) {
        var dataItem = roleDataStore.findById(item.id);
        
        if (dataItem.isPresent()) {
            Role savedItem = roleDataStore.saveAndFlush(item);
            return new ResponseEntity<Role>(savedItem, HttpStatus.CREATED);
        } else {
        
            return null;
        }
}
    
    /*
    * Web API get many role
    */
    @GetMapping(path = "role", produces = MediaType.APPLICATION_JSON_VALUE)
    public FilteredPageRespTpl<Role> GetRoles(
            @RequestParam(defaultValue="0") Integer pageNum,
            @RequestParam(defaultValue="10") Integer pageSize,
            @RequestParam(defaultValue="") String sortBy,
            @RequestParam(defaultValue="true") Boolean sortAsc,
            @RequestParam(defaultValue="") String searchValue) {
        Sort sort = null;
        if (sortBy.length() > 0 && sortBy.length() > 0) {
            sort = Filter.getSort(sortBy, sortAsc);
        }
        
        PageRequest pageRequest = Filter.getPageRequest(pageNum, pageSize, sort);
        Page<Role> items;
        items = roleDataStore.findAll(pageRequest);
        
        var response = new FilteredPageRespTpl<Role>();
        response.data = items.getContent();
        response.pageCount = items.getTotalPages();
        response.pageNum = pageNum.intValue();
        response.pageSize = pageSize;
        response.sortBy = sortBy;
        response.searchValue = searchValue;
        
        return response;
    }
    
    /*
    * Web API delete single role
    */
    @DeleteMapping(path = "role",
        consumes = MediaType.APPLICATION_JSON_VALUE, 
        produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Boolean> DeleteRole(@RequestBody Role item) {
        var dataItem = roleDataStore.findById(item.id);
        
        if (dataItem.isPresent()) {
            roleDataStore.delete(item);
            return new ResponseEntity<Boolean>(true, HttpStatus.NO_CONTENT);
        } else {
        
            return null;
        }
}
}

