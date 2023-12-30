package com.example.demo.dto;

import com.example.demo.db_model.*;
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
    public String pusername;
    public String email;
    
    public LocalDateTime createdDate;
    public LocalDateTime lastLoginDate;
    public Address mailingAddress;
    public Address physicalAddress;
    public List<Role> roles;
    public long themeId;
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
    public Address getMailingAddress()	{ return(mailingAddress); }
    public void setMailingAddress(Address mailingAddress)	{ this.mailingAddress = mailingAddress; }
    public Address getPhysicalAddress()	{ return(physicalAddress); }
    public void setPhysicalAddress(Address physicalAddress)	{ this.physicalAddress = physicalAddress; }
    public List<Role> getRoles()	{ return(roles); }
    public void setRoles(List<Role> roles)	{ this.roles = roles; }
    public long getThemeId()	{ return(themeId); }
    public void setThemeId(long themeId)	{ this.themeId = themeId; }
    public boolean getActive()	{ return(active); }
    public void setActive(boolean active)	{ this.active = active; }
}

