package com.example.demo.db.model;

import java.time.*;
import java.util.*;
import jakarta.persistence.*;

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
    
    public long getId()	{ return(id); }
    public void setId(long id)	{ this.id = id; }
    public String getStreet1()	{ return(street1); }
    public void setStreet1(String street1)	{ this.street1 = street1; }
    public String getStreet2()	{ return(street2); }
    public void setStreet2(String street2)	{ this.street2 = street2; }
    public String getCity()	{ return(city); }
    public void setCity(String city)	{ this.city = city; }
    public String getState()	{ return(state); }
    public void setState(String state)	{ this.state = state; }
    public String getCountry()	{ return(country); }
    public void setCountry(String country)	{ this.country = country; }
    public String getZipCode()	{ return(zipCode); }
    public void setZipCode(String zipCode)	{ this.zipCode = zipCode; }
    public boolean getActive()	{ return(active); }
    public void setActive(boolean active)	{ this.active = active; }
}

