package com.example.demo.db.store;

import com.example.demo.db.model.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

/**
* @class ThemeDataStore
* 
*/
public interface ThemeDataStore extends JpaRepository<Theme, Long> {
}

