import com.example.demo.db_model.*;
import java.util.*;
import java.time.LocalDateTime;

package com.example.demo.dto;

/**
* @class ProfileAdmin
*
*/
public class ProfileAdmin {
    public long id;
    public String firstName;
    public String lastName;
    public String username;
    public String email;
    
    public LocalDateTime createdDate;
    public LocalDateTime lastLoginDate;
    public Address mailingAddress;
    public Address physicalAddress;
    public List<Role> roles;
    public long themeId;
    public boolean active;
}

