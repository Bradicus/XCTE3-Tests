package com.example.demo.db.store;

import com.example.demo.db.model.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

/**
* @class PermissionDataStore
* 
*/
public interface PermissionDataStore extends JpaRepository<Permission, Long> {
}

