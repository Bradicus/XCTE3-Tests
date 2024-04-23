package com.example.demo.api;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.mapstruct.factory.Mappers;
import com.example.demo.data.*;
import java.util.*;

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
    public Theme GetTheme() {
        var item = themeDataStore.findById(id);
        
        return item.get();
    }
}

