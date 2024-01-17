package com.example.demo.api;

import com.example.demo.dto.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.mapstruct.factory.Mappers;
import com.example.demo.db.model.*;
import com.example.demo.db.store.*;
import com.example.demo.mapper.*;
import java.util.*;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import java.time.LocalDateTime;

/**
* Web API controller
*/

@RestController
public class ProfileUserController {
    @Autowired
    private ProfileDataStore profileDataStore;
    
    ProfileMapper mapper = Mappers.getMapper( ProfileMapper.class );
    
    /*
    * Web API get single profile user
    */
    @GetMapping("profile-user/{id}")
    public ProfileUser GetProfileUser(@PathVariable("id") long id) {
        var item = profileDataStore.findById(id);
        
        if (item.isPresent()) {
            var mappedItem = new ProfileUser();
            mapper.map(item.get(), mappedItem);
            return mappedItem;
        }
        
        return null;
    }
    
    /*
    * Web API create single profile user
    */
    @PostMapping(path = "profile-user",
        consumes = MediaType.APPLICATION_JSON_VALUE, 
        produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ProfileUser> PostProfileUser(@RequestBody ProfileUser item) {
        var dataItem = new Profile();
        mapper.map(item, dataItem);
        Profile savedItem = profileDataStore.saveAndFlush(dataItem);
        
        var returnItem = new ProfileUser();
        mapper.map(savedItem, returnItem);
        return new ResponseEntity<ProfileUser>(returnItem, HttpStatus.CREATED);
    }
    
    /*
    * Web API update single profile user
    */
    @PutMapping(path = "profile-user",
        consumes = MediaType.APPLICATION_JSON_VALUE, 
        produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ProfileUser> PutProfileUser(@RequestBody ProfileUser item) {
        var dataItem = profileDataStore.findById(item.id);
        
        if (dataItem.isPresent()) {
            mapper.map(item, dataItem.get());
            Profile savedItem = profileDataStore.saveAndFlush(dataItem.get());
            var returnItem = new ProfileUser();
            mapper.map(savedItem, returnItem);
            return new ResponseEntity<ProfileUser>(returnItem, HttpStatus.CREATED);
        } else {
        
            return null;
        }
    }
}

