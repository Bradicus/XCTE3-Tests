import java.time.*;
import java.util.*;
import jakarta.persistence.*;

package com.example.demo.db_model;

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
}

