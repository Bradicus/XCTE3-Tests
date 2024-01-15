import java.time.*;
import java.util.*;
import jakarta.persistence.*;
import java.time.LocalDateTime;

package com.example.demo.db_model;

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
}

