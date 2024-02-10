package com.example.demo.data;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import java.time.LocalDateTime;

/**
* @class UserDataStore
* 
*/
public interface UserDataStore extends JpaRepository<User, Long> {
}

