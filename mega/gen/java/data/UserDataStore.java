package com.example.demo.data;

import com.example.demo.model.*;
import org.springframework.data.jpa.repository.*;

public interface UserDataStore extends JpaRepository<User, Long>
{
    
}
