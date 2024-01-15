import java.time.*;
import java.util.*;
import jakarta.persistence.*;

package com.example.demo.db_model;

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

