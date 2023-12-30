package com.example.demo.data;

import com.example.demo.db_model.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface PermissionDataStore extends JpaRepository<Permission, Long> {
}

