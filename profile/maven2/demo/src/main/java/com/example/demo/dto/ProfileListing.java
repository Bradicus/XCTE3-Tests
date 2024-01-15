import java.time.*;
import java.util.*;
import java.time.LocalDateTime;

package com.example.demo.dto;

/**
* @class ProfileListing
*
*/
public class ProfileListing {
    public long id;
    public String firstName;
    public String lastName;
    public String pusername;
    public String email;
    
    public LocalDateTime createdDate;
    public LocalDateTime lastLoginDate;
    public boolean active;
}

