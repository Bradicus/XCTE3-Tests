package com.example.demo.api;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.mapstruct.factory.Mappers;
import com.example.demo.data.*;
import java.util.*;
import java.time.LocalDateTime;

/**
* Web API controller
*/

@RestController
public class UserController {
    
    @Autowired
    private UserDataStore userDataStore;
    
    /*
    * Web API get single user
    */
    @GetMapping("user/{id}")
    public User GetUser() {
        var item = userDataStore.findById(id);
        
        return item.get();
    }
}

