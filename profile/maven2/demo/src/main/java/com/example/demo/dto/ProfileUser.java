package com.example.demo.dto;

import com.example.demo.db_model.*;
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
    
    public long getId()	{ return(id); }
    public void setId(long id)	{ this.id = id; }
    public String getFirstName()	{ return(firstName); }
    public void setFirstName(String firstName)	{ this.firstName = firstName; }
    public String getLastName()	{ return(lastName); }
    public void setLastName(String lastName)	{ this.lastName = lastName; }
    public String getEmail()	{ return(email); }
    public void setEmail(String email)	{ this.email = email; }
    
    public LocalDateTime getCreatedDate()	{ return(createdDate); }
    public void setCreatedDate(LocalDateTime createdDate)	{ this.createdDate = createdDate; }
    public LocalDateTime getLastLoginDate()	{ return(lastLoginDate); }
    public void setLastLoginDate(LocalDateTime lastLoginDate)	{ this.lastLoginDate = lastLoginDate; }
    public Address getMailingAddress()	{ return(mailingAddress); }
    public void setMailingAddress(Address mailingAddress)	{ this.mailingAddress = mailingAddress; }
    public Address getPhysicalAddress()	{ return(physicalAddress); }
    public void setPhysicalAddress(Address physicalAddress)	{ this.physicalAddress = physicalAddress; }
    public long getThemeId()	{ return(themeId); }
    public void setThemeId(long themeId)	{ this.themeId = themeId; }
}

