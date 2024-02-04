package com.example.demo.gen;

import com.example.demo.db.model.*;
import com.github.javafaker.Faker;

/**
* @class AddressDataGenDataGen
* 
*/
public class AddressDataGenDataGen {
    
    void populateRandom(Faker faker, Address item) {
        item.street1 = faker.address().streetAddress();
        item.street2 = faker.address().secondaryAddress();
        item.city = faker.address().city();
        item.state = faker.address().stateAbbr();
        item.country = faker.address().country();
        item.zipCode = faker.address().zipCode();
        item.active = faker.bool().bool();
    }
}

