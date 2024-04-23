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
import java.util.function.Function;
import com.example.demo.util.*;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

/**
* Web API controller
*/

@RestController
public class StatController {
    final List<Integer> pageSizes = List.of(5,25,50,100);
    
    @Autowired
    private StatDataStore statDataStore;
    
    /*
    * Web API get single stat
    */
    @GetMapping("stat/{id}")
    public Stat GetStat(@PathVariable("id") int id) {
        var item = statDataStore.findById(id);
        
        return item.get();
    }
    
    /*
    * Web API get many stat
    */
    @GetMapping(path = "stat", produces = MediaType.APPLICATION_JSON_VALUE)
    public FilteredPageRespTpl<Stat> GetStats(
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
        Page<Stat> items;
        items = statDataStore.findAll(pageRequest);
        
        var response = new FilteredPageRespTpl<Stat>();
        response.data = items.getContent();
        response.pageCount = items.getTotalPages();
        response.pageNum = pageNum.intValue();
        response.pageSize = pageSize;
        response.sortBy = sortBy;
        
        return response;
    }
    
    /*
    * Web API create single stat
    */
    @PostMapping(path = "stat",
        consumes = MediaType.APPLICATION_JSON_VALUE, 
        produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Stat> PostStat(@RequestBody Stat item) {
        Stat savedItem = statDataStore.saveAndFlush(item);
        return new ResponseEntity<Stat>(savedItem, HttpStatus.CREATED);
    }
    
    /*
    * Web API update single stat
    */
    @PutMapping(path = "stat",
        consumes = MediaType.APPLICATION_JSON_VALUE, 
        produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Stat> PutStat(@RequestBody Stat item) {
        var dataItem = statDataStore.findById(item.id);
        
        if (dataItem.isPresent()) {
            Stat savedItem = statDataStore.saveAndFlush(item);
            return new ResponseEntity<Stat>(savedItem, HttpStatus.CREATED);
        } else {
        
            return null;
        }
    }
}

