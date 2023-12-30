package com.example.demo.db_model;

import java.time.*;
import java.util.*;
import jakarta.persistence.*;

/**
* @class Role
* 
*/

@Entity
public class Role {
    public static final int MAX_LEN_ID = 10;
    public static final int MAX_LEN_NAME = 50;
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE)
    public long id;
    public String name;
    public String description;
    @ManyToMany(cascade = CascadeType.ALL)
    public List<Permission> permissions;
    
    public long getId()	{ return(id); }
    public void setId(long id)	{ this.id = id; }
    public String getName()	{ return(name); }
    public void setName(String name)	{ this.name = name; }
    public String getDescription()	{ return(description); }
    public void setDescription(String description)	{ this.description = description; }
    public List<Permission> getPermissions()	{ return(permissions); }
    public void setPermissions(List<Permission> permissions)	{ this.permissions = permissions; }
}

