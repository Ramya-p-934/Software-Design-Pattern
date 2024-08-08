package com.example.demo.model;



import org.apache.catalina.User;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class Model {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String title;
    private String description;
    private long price;
    private String address;
    private String city;
    private String state;
    private String zipCode;
    private String propertyType;
    private String status;
    private int bedrooms;
    private int bathrooms;
    private int squareFeet;
    private int lotSize;
    private int yearBuilt;
    
    // @ManyToOne
    // @JoinColumn(name = "user_id")
    // private User user;

    
    // Getters and setters
}
