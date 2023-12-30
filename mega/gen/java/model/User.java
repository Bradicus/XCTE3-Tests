package com.example.demo.model;

import java.time.*;
import java.util.*;
import jakarta.persistence.*;

/**
* @class User
*
*/

@Entity
public class User
{
    public static final int MAX_LEN_FIRST_NAME = 255;
    public static final int MAX_LEN_LAST_NAME = 255;
    public static final int MAX_LEN_USERNAME = 255;
    public static final int MAX_LEN_EMAIL = 255;
    
    public static final int MAX_LEN_ROLES = 50;
    public static final int MAX_LEN_THEME = 255;
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
    private String firstName;
    private String lastName;
    private String username;
    private String email;
    
    private LocalDateTime createdDate;
    private LocalDateTime lastLoginDate;
    private Address mailingAddress;
    private Address physicalAddress;
    @ManyToMany
    private List<String> roles;
    private boolean active;
    @OneToMany
    private String theme;
    
    long getId()	{ return(id); }
    void setId(long id)	{ this.id = id; }
    String getFirstName()	{ return(firstName); }
    void setFirstName(String firstName)	{ this.firstName = firstName; }
    String getLastName()	{ return(lastName); }
    void setLastName(String lastName)	{ this.lastName = lastName; }
    String getUsername()	{ return(username); }
    void setUsername(String username)	{ this.username = username; }
    String getEmail()	{ return(email); }
    void setEmail(String email)	{ this.email = email; }
    
    LocalDateTime getCreatedDate()	{ return(createdDate); }
    void setCreatedDate(LocalDateTime createdDate)	{ this.createdDate = createdDate; }
    LocalDateTime getLastLoginDate()	{ return(lastLoginDate); }
    void setLastLoginDate(LocalDateTime lastLoginDate)	{ this.lastLoginDate = lastLoginDate; }
    Address getMailingAddress()	{ return(mailingAddress); }
    void setMailingAddress(Address mailingAddress)	{ this.mailingAddress = mailingAddress; }
    Address getPhysicalAddress()	{ return(physicalAddress); }
    void setPhysicalAddress(Address physicalAddress)	{ this.physicalAddress = physicalAddress; }
    List<String> getRoles()	{ return(roles); }
    void setRoles(List<String> roles)	{ this.roles = roles; }
    boolean getActive()	{ return(active); }
    void setActive(boolean active)	{ this.active = active; }
    String getTheme()	{ return(theme); }
    void setTheme(String theme)	{ this.theme = theme; }
    
}
