package com.example.demo.api;

import com.example.demo.model.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.demo.data.*;

/**
* Web API controller
*/

@RestController
public class ThemeController
{
    @Autowired
    private ThemeDataStore themeDataStore;
    
    /*
    * Web API get single theme
    */
    @GetMapping("theme/{id}")
    public Theme GetTheme(long id)
    {
        var item = themeDataStore.findById(id);
        return item.get();
    }
}
