package com.example.demo.gen;

import com.example.demo.db.model.*;
import com.github.javafaker.Faker;
import java.util.concurrent.TimeUnit;
import java.time.LocalDateTime;

/**
* @class ProfileDataGen
* 
*/
public class ProfileDataGen {
    
    void populateRandom(Faker faker, Profile item) {
        item.firstName = faker.name().firstName();
        item.lastName = faker.name().lastName();
        item.username = faker.letterify("????????");;
        item.email = faker.name().firstName() + "." + faker.name().lastName() + "@example.com";
        
        item.createdDate = LocalDateTime.ofInstant(faker.date().past(100, TimeUnit.DAYS).toInstant(), null);
        item.lastLoginDate = LocalDateTime.ofInstant(faker.date().past(100, TimeUnit.DAYS).toInstant(), null);
        item.active = faker.bool().bool();
    }
}

