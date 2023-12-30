package com.example.demo.api;

import com.example.demo.model.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.demo.data.*;

/**
* Web API controller
*/

@RestController
public class RoleController
{
    @Autowired
    private RoleDataStore roleDataStore;
    
    /*
    * Web API get single role
    */
    @GetMapping("role/{id}")
    public Role GetRole(long id)
    {
        var item = roleDataStore.findById(id);
        return item.get();
    }
}
