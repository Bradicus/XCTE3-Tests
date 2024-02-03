package com.example.demo.db.store;

import com.example.demo.db.model.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import java.time.LocalDateTime;

/**
* @class ProfileDataStore
* 
*/
public interface ProfileDataStore extends JpaRepository<Profile, Long> {
    
    @Query("SELECT profile FROM Profile profile WHERE (active=true) AND (firstName LIKE CONCAT('%',:firstName,'%') OR lastName LIKE CONCAT('%',:lastName,'%') OR email LIKE CONCAT('%',:email,'%'))")
    Page<Profile> searchAll(PageRequest pageRequest, String firstName, String lastName, String email);
}

