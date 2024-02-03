package com.example.demo.db.model;

import java.time.*;
import java.util.*;
import jakarta.persistence.*;
import java.time.LocalDateTime;

/**
* @class Profile
* 
*/

@Entity
public class Profile {
    public static final int MAX_LEN_FIRST_NAME = 255;
    public static final int MAX_LEN_LAST_NAME = 255;
    public static final int MAX_LEN_USERNAME = 255;
    public static final int MAX_LEN_EMAIL = 255;
    
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE)
    public long id;
    public String firstName;
    public String lastName;
    public String username;
    public String email;
    
    public LocalDateTime createdDate;
    public LocalDateTime lastLoginDate;
    @OneToOne(cascade = CascadeType.ALL)
    public Address mailingAddress;
    @OneToOne(cascade = CascadeType.ALL)
    public Address physicalAddress;
    @ManyToMany(cascade = CascadeType.ALL)
    public List<Role> roles;
    @OneToOne(cascade = CascadeType.ALL)
    public Theme theme;
    public boolean active;
    
    public long getId()	{ return(id); }
    public void setId(long id)	{ this.id = id; }
    public String getFirstName()	{ return(firstName); }
    public void setFirstName(String firstName)	{ this.firstName = firstName; }
    public String getLastName()	{ return(lastName); }
    public void setLastName(String lastName)	{ this.lastName = lastName; }
    public String getUsername()	{ return(username); }
    public void setUsername(String username)	{ this.username = username; }
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
    public Theme getTheme()	{ return(theme); }
    public void setTheme(Theme theme)	{ this.theme = theme; }
    public boolean getActive()	{ return(active); }
    public void setActive(boolean active)	{ this.active = active; }
}

