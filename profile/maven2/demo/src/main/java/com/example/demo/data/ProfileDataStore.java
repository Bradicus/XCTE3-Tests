package com.example.demo.data;

import com.example.demo.db_model.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import java.time.LocalDateTime;

public interface ProfileDataStore extends JpaRepository<Profile, Long> {
    
    Page<Profile> findByFirstNameContainsOrLastNameContainsOrEmailContains(PageRequest pageRequest, String firstName, String lastName, String email);
}

