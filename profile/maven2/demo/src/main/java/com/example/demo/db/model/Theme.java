package com.example.demo.db.model;

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
}

