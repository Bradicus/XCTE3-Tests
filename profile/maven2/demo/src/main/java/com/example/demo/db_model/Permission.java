import java.time.*;
import java.util.*;
import jakarta.persistence.*;

package com.example.demo.db_model;

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
}

