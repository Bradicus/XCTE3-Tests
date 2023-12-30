package com.example.demo.api;

import com.example.demo.model.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.demo.data.*;

/**
* Web API controller
*/

@RestController
public class UserController
{
    @Autowired
    private UserDataStore userDataStore;
    
    /*
    * Web API get single user
    */
    @GetMapping("user/{id}")
    public User GetUser(long id)
    {
        var item = userDataStore.findById(id);
        return item.get();
    }
}
