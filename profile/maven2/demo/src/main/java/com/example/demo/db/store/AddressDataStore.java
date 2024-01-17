package com.example.demo.db.store;

import com.example.demo.db.model.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface AddressDataStore extends JpaRepository<Address, Long> {
    
    Page<Address> findByActiveTrue(PageRequest pageRequest);
}

