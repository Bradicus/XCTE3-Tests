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
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Page;
import com.example.demo.dto.FilteredPageRespTpl;
import java.util.function.Function;
import com.example.demo.util.*;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

/**
* Web API controller
*/

@RestController
public class ThemeController {
    
    @Autowired
    private ThemeDataStore themeDataStore;
    
    /*
    * Web API get single theme
    */
    @GetMapping("theme/{id}")
    public Theme GetTheme(@PathVariable("id") long id) {
        var item = themeDataStore.findById(id);
        
        return item.get();
    }
    
    /*
    * Web API get many theme
    */
    @GetMapping(path = "theme", produces = MediaType.APPLICATION_JSON_VALUE)
    public FilteredPageRespTpl<Theme> GetThemes(
            @RequestParam(defaultValue="0") Integer pageNum,
            @RequestParam(defaultValue="10") Integer pageSize,
            @RequestParam(defaultValue="") String sortBy,
            @RequestParam(defaultValue="true") Boolean sortAsc) {
        Sort sort = null;
        if (sortBy.length() > 0 && sortBy.length() > 0) {
            sort = Filter.getSort(sortBy, sortAsc);
        }
        
        PageRequest pageRequest = Filter.getPageRequest(pageNum, pageSize, sort);
        Page<Theme> items;
        items = themeDataStore.findAll(pageRequest);
        
        var response = new FilteredPageRespTpl<Theme>();
        response.data = items.getContent();
        response.pageCount = items.getTotalPages();
        response.pageNum = pageNum.intValue();
        response.pageSize = pageSize;
        response.sortBy = sortBy;
        
        return response;
    }
    
    /*
    * Web API create single theme
    */
    @PostMapping(path = "theme",
        consumes = MediaType.APPLICATION_JSON_VALUE, 
        produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Theme> PostTheme(@RequestBody Theme item) {
        Theme savedItem = themeDataStore.saveAndFlush(item);
        return new ResponseEntity<Theme>(savedItem, HttpStatus.CREATED);
    }
    
    /*
    * Web API update single theme
    */
    @PutMapping(path = "theme",
        consumes = MediaType.APPLICATION_JSON_VALUE, 
        produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Theme> PutTheme(@RequestBody Theme item) {
        var dataItem = themeDataStore.findById(item.id);
        
        if (dataItem.isPresent()) {
            Theme savedItem = themeDataStore.saveAndFlush(item);
            return new ResponseEntity<Theme>(savedItem, HttpStatus.CREATED);
        } else {
        
            return null;
        }
    }
}

