package com.example.demo.dto;

import com.example.demo.db.model.*;
import java.util.*;
import java.time.LocalDateTime;

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

