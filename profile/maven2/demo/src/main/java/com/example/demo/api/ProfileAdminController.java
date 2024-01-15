import com.example.demo.dto.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.mapstruct.factory.Mappers;
import com.example.demo.db_model.*;
import com.example.demo.data.*;
import com.example.demo.mapper.*;
import java.util.*;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import java.time.LocalDateTime;

package com.example.demo.api;

/**
* Web API controller
*/

@RestController
public class ProfileAdminController {
    @Autowired
    private ProfileDataStore profileDataStore;
    
    ProfileMapper mapper = Mappers.getMapper( ProfileMapper.class );
    
    /*
    * Web API get single profile admin
    */
    @GetMapping("profile-admin/{id}")
    public ProfileAdmin GetProfileAdmin(@PathVariable("id") long id) {
        var item = profileDataStore.findById(id);
        
        if (item.isPresent()) {
            var mappedItem = new ProfileAdmin();
            mapper.map(item.get(), mappedItem);
            return mappedItem;
        }
        
        return null;
    }
    
    /*
    * Web API create single profile admin
    */
    @PostMapping(path = "profile-admin",
        consumes = MediaType.APPLICATION_JSON_VALUE, 
        produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ProfileAdmin> PostProfileAdmin(@RequestBody ProfileAdmin item) {
        var dataItem = new Profile();
        mapper.map(item, dataItem);
        Profile savedItem = profileDataStore.saveAndFlush(dataItem);
        
        var returnItem = new ProfileAdmin();
        mapper.map(savedItem, returnItem);
        return new ResponseEntity<ProfileAdmin>(returnItem, HttpStatus.CREATED);
    }
    
    /*
    * Web API update single profile admin
    */
    @PutMapping(path = "profile-admin",
        consumes = MediaType.APPLICATION_JSON_VALUE, 
        produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ProfileAdmin> PutProfileAdmin(@RequestBody ProfileAdmin item) {
        var dataItem = profileDataStore.findById(item.id);
        
        if (dataItem.isPresent()) {
            mapper.map(item, dataItem.get());
            Profile savedItem = profileDataStore.saveAndFlush(dataItem.get());
            var returnItem = new ProfileAdmin();
            mapper.map(savedItem, returnItem);
            return new ResponseEntity<ProfileAdmin>(returnItem, HttpStatus.CREATED);
        } else {
        
            return null;
        }
    }
}

