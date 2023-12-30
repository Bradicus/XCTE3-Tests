package com.example.demo.data;

import com.example.demo.model.*;
import org.springframework.data.jpa.repository.*;

public interface ThemeDataStore extends JpaRepository<Theme, Long>
{
    
}
