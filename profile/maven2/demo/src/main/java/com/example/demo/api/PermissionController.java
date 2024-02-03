package com.example.demo.api;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.mapstruct.factory.Mappers;
import com.example.demo.db.model.*;
import com.example.demo.db.store.*;
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
public class PermissionController {
    @Autowired
    private PermissionDataStore permissionDataStore;
    
    /*
    * Web API get single permission
    */
    @GetMapping("permission/{id}")
    public Permission GetPermission(@PathVariable("id") long id) {
        var item = permissionDataStore.findById(id);
        
        return item.get();
    }
    
    /*
    * Web API create single permission
    */
    @PostMapping(path = "permission",
        consumes = MediaType.APPLICATION_JSON_VALUE, 
        produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Permission> PostPermission(@RequestBody Permission item) {
        Permission savedItem = permissionDataStore.saveAndFlush(item);
        return new ResponseEntity<Permission>(savedItem, HttpStatus.CREATED);
    }
    
    /*
    * Web API update single permission
    */
    @PutMapping(path = "permission",
        consumes = MediaType.APPLICATION_JSON_VALUE, 
        produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Permission> PutPermission(@RequestBody Permission item) {
        var dataItem = permissionDataStore.findById(item.id);
        
        if (dataItem.isPresent()) {
            Permission savedItem = permissionDataStore.saveAndFlush(item);
            return new ResponseEntity<Permission>(savedItem, HttpStatus.CREATED);
        } else {
        
            return null;
        }
    }
    
    /*
    * Web API get many permission
    */
    @GetMapping(path = "permission", produces = MediaType.APPLICATION_JSON_VALUE)
    public FilteredPageRespTpl<Permission> GetPermissions(
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
        Page<Permission> items;
        items = permissionDataStore.findAll(pageRequest);
        
        var response = new FilteredPageRespTpl<Permission>();
        response.data = items.getContent();
        response.pageCount = items.getTotalPages();
        response.pageNum = pageNum.intValue();
        response.pageSize = pageSize;
        response.sortBy = sortBy;
        response.searchValue = searchValue;
        
        return response;
    }
    
    /*
    * Web API delete single permission
    */
    @DeleteMapping(path = "permission",
        consumes = MediaType.APPLICATION_JSON_VALUE, 
        produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Boolean> DeletePermission(@RequestBody Permission item) {
        var dataItem = permissionDataStore.findById(item.id);
        
        if (dataItem.isPresent()) {
            permissionDataStore.delete(item);
            return new ResponseEntity<Boolean>(true, HttpStatus.NO_CONTENT);
        } else {
        
            return null;
        }
    }
}

