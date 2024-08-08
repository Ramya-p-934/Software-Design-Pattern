package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Signup {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String sellerName;
    private String phoneNumber;
    private String propertyAddress;
    private String propertyDescription;
    private String propertyImage;
    private String documents;
     public Signup()
     {

     }
    public Signup(Long id, String sellerName, String phoneNumber, String propertyAddress, String propertyDescription,
            String propertyImage, String documents) {
        this.id = id;
        this.sellerName = sellerName;
        this.phoneNumber = phoneNumber;
        this.propertyAddress = propertyAddress;
        this.propertyDescription = propertyDescription;
        this.propertyImage = propertyImage;
        this.documents = documents;
    }

     
}
