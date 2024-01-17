package com.example.demo.dto;

import com.example.demo.db.model.*;
import java.util.*;
import java.time.LocalDateTime;

/**
* @class ProfileUser
*
*/
public class ProfileUser {
    public long id;
    public String firstName;
    public String lastName;
    public String email;
    
    public LocalDateTime createdDate;
    public LocalDateTime lastLoginDate;
    public Address mailingAddress;
    public Address physicalAddress;
    public long themeId;
}

