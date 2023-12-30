package com.example.demo.db_model;

import java.time.*;
import java.util.*;
import jakarta.persistence.*;

/**
* @class Permission
* 
*/

@Entity
public class Permission {
    public static final int MAX_LEN_ID = 10;
    public static final int MAX_LEN_CODE = 50;
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE)
    public long id;
    public String code;
    public String description;
    
    public long getId()	{ return(id); }
    public void setId(long id)	{ this.id = id; }
    public String getCode()	{ return(code); }
    public void setCode(String code)	{ this.code = code; }
    public String getDescription()	{ return(description); }
    public void setDescription(String description)	{ this.description = description; }
}

