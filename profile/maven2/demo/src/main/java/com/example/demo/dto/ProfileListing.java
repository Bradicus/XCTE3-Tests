package com.example.demo.dto;

import java.time.*;
import java.util.*;
import java.time.LocalDateTime;

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
    
    public long getId()	{ return(id); }
    public void setId(long id)	{ this.id = id; }
    public String getFirstName()	{ return(firstName); }
    public void setFirstName(String firstName)	{ this.firstName = firstName; }
    public String getLastName()	{ return(lastName); }
    public void setLastName(String lastName)	{ this.lastName = lastName; }
    public String getPusername()	{ return(pusername); }
    public void setPusername(String pusername)	{ this.pusername = pusername; }
    public String getEmail()	{ return(email); }
    public void setEmail(String email)	{ this.email = email; }
    
    public LocalDateTime getCreatedDate()	{ return(createdDate); }
    public void setCreatedDate(LocalDateTime createdDate)	{ this.createdDate = createdDate; }
    public LocalDateTime getLastLoginDate()	{ return(lastLoginDate); }
    public void setLastLoginDate(LocalDateTime lastLoginDate)	{ this.lastLoginDate = lastLoginDate; }
    public boolean getActive()	{ return(active); }
    public void setActive(boolean active)	{ this.active = active; }
}

