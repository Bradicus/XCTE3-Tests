import java.time.*;
import java.util.*;
import jakarta.persistence.*;

package com.example.demo.db_model;

/**
* @class Address
* 
*/

@Entity
public class Address {
    public static final int MAX_LEN_STREET_1 = 50;
    public static final int MAX_LEN_STREET_2 = 50;
    public static final int MAX_LEN_CITY = 50;
    public static final int MAX_LEN_STATE = 2;
    public static final int MAX_LEN_COUNTRY = 50;
    public static final int MAX_LEN_ZIP_CODE = 20;
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE)
    public long id;
    public String street1;
    public String street2;
    public String city;
    public String state;
    public String country;
    public String zipCode;
    public boolean active;
}

