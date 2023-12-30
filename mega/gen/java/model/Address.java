package com.example.demo.model;

import jakarta.persistence.*;

/**
* @class Address
*
*/

@Entity
public class Address
{
    public static final int MAX_LEN_STREET_1 = 50;
    public static final int MAX_LEN_STREET_2 = 50;
    public static final int MAX_LEN_CITY = 50;
    public static final int MAX_LEN_STATE = 2;
    public static final int MAX_LEN_COUNTRY = 2;
    public static final int MAX_LEN_ZIP_CODE = 20;
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
    private String street1;
    private String street2;
    private String city;
    private String state;
    private String country;
    private String zipCode;
    
    long getId()	{ return(id); }
    void setId(long id)	{ this.id = id; }
    String getStreet1()	{ return(street1); }
    void setStreet1(String street1)	{ this.street1 = street1; }
    String getStreet2()	{ return(street2); }
    void setStreet2(String street2)	{ this.street2 = street2; }
    String getCity()	{ return(city); }
    void setCity(String city)	{ this.city = city; }
    String getState()	{ return(state); }
    void setState(String state)	{ this.state = state; }
    String getCountry()	{ return(country); }
    void setCountry(String country)	{ this.country = country; }
    String getZipCode()	{ return(zipCode); }
    void setZipCode(String zipCode)	{ this.zipCode = zipCode; }
}
