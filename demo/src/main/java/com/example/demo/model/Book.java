package com.example.demo.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;
import lombok.Data;

@Entity
@Data
public class Book {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String phoneNumber;
    private LocalDate date;
    private LocalDateTime time;
    private String description;

    @ManyToOne
    @JoinColumn(name = "agent_id")  // Foreign key column
    private Agent agent;  // New relationship

    public Book() {
    }

    public Book(Long id, String name, String email, String phoneNumber, LocalDate date, LocalDateTime time, String description) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.date = date;
        this.time = time;
        this.description = description;
    }
}
