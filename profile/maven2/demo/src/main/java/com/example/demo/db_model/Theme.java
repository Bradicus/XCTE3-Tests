package com.example.demo.db_model;

import java.time.*;
import java.util.*;
import jakarta.persistence.*;

/**
* @class Theme
* 
*/

@Entity
public class Theme {
    public static final int MAX_LEN_NAME = 50;
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE)
    public long id;
    public String name;
    public String description;
    
    public long getId()	{ return(id); }
    public void setId(long id)	{ this.id = id; }
    public String getName()	{ return(name); }
    public void setName(String name)	{ this.name = name; }
    public String getDescription()	{ return(description); }
    public void setDescription(String description)	{ this.description = description; }
}

