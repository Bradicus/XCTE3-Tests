package {BaseNs}.api;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.mapstruct.factory.Mappers;
import {BaseNs}.db.*;
import {BaseNs}.db.store.*;
import java.util.*;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Page;
import com.example.demo.dto.FilteredPageRespTpl;
import com.example.demo.util.*;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

/**
* Web API controller
*/

@RestController
public class EntityController {
    final List<Integer> pageSizes = List.of(5,25,50,100);
    
    @Autowired
    private EntityDataStore entityDataStore;
    
    /*
    * Web API get single entity
    */
    @GetMapping("entity/{id}")
    public Entity GetEntity(@PathVariable("id") int id) {
        var item = entityDataStore.findById(id);
        
        return item.get();
    }
    
    /*
    * Web API get many entity
    */
    @GetMapping(path = "entity", produces = MediaType.APPLICATION_JSON_VALUE)
    public FilteredPageRespTpl<Entity> GetEntitys(
            @RequestParam(defaultValue="0") Integer pageNum,
            @RequestParam(defaultValue="5") Integer pageSize,
            @RequestParam(defaultValue="") String sortBy,
            @RequestParam(defaultValue="true") Boolean sortAsc) {
        Sort sort = null;
        if (sortBy.length() > 0 && sortBy.length() > 0) {
            sort = Filter.getSort(sortBy, sortAsc);
        }
        
        if (pageSizes.size() > 0 && !pageSizes.contains(pageSize))
            pageSize = pageSizes.get(0);
        
        PageRequest pageRequest = Filter.getPageRequest(pageNum, pageSize, sort);
        Page<Entity> items;
        items = entityDataStore.findAll(pageRequest);
        
        var response = new FilteredPageRespTpl<Entity>();
        response.data = items.getContent();
        response.pageCount = items.getTotalPages();
        response.pageNum = pageNum.intValue();
        response.pageSize = pageSize;
        response.sortBy = sortBy;
        
        return response;
    }
    
    /*
    * Web API create single entity
    */
    @PreAuthorize("hasAuthority('admin')")
    @PostMapping(path = "entity",
        consumes = MediaType.APPLICATION_JSON_VALUE, 
        produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Entity> PostEntity(@RequestBody Entity item) {
        Entity savedItem = entityDataStore.saveAndFlush(item);
        return new ResponseEntity<Entity>(savedItem, HttpStatus.CREATED);
    }
    
    /*
    * Web API update single entity
    */
    @PutMapping(path = "entity",
        consumes = MediaType.APPLICATION_JSON_VALUE, 
        produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Entity> PutEntity(@RequestBody Entity item) {
        var dataItem = entityDataStore.findById(item.id);
        
        if (dataItem.isPresent()) {
            Entity savedItem = entityDataStore.saveAndFlush(item);
            return new ResponseEntity<Entity>(savedItem, HttpStatus.CREATED);
        } else {
        
            return null;
        }
    }
}

