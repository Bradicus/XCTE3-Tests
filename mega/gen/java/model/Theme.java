package com.example.demo.model;

import jakarta.persistence.*;

/**
* @class Theme
*
*/

@Entity
public class Theme
{
    public static final int MAX_LEN_NAME = 50;
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
    private String name;
    private String description;
    
    long getId()	{ return(id); }
    void setId(long id)	{ this.id = id; }
    String getName()	{ return(name); }
    void setName(String name)	{ this.name = name; }
    String getDescription()	{ return(description); }
    void setDescription(String description)	{ this.description = description; }
}
