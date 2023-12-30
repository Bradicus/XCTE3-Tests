package com.example.demo.api;

import com.example.demo.model.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.demo.data.*;

/**
* Web API controller
*/

@RestController
public class AddressController
{
    @Autowired
    private AddressDataStore addressDataStore;
    
    /*
    * Web API get single address
    */
    @GetMapping("address/{id}")
    public Address GetAddress(long id)
    {
        var item = addressDataStore.findById(id);
        return item.get();
    }
}
