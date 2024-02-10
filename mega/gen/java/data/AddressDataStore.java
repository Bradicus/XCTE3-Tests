package com.example.demo.data;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

/**
* @class AddressDataStore
* 
*/
public interface AddressDataStore extends JpaRepository<Address, Long> {
}

