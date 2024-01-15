import com.example.demo.db_model.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

package com.example.demo.data;

public interface AddressDataStore extends JpaRepository<Address, Long> {
    
    Page<Address> findByActiveTrue(PageRequest pageRequest);
}

