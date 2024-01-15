import com.example.demo.db_model.*;
import java.util.*;
import java.time.LocalDateTime;

package com.example.demo.dto;

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

