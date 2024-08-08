package com.example.demo.model;

import java.time.LocalDate;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class Tenant {

    
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
    
        @Column(name = "name", nullable = false)
        private String name;
    
        @Column(name = "contact", nullable = false)
        private String contact;
    
        @Column(name = "lease_start", nullable = false)
        private LocalDate leaseStart;
    
        @Column(name = "lease_end", nullable = false)
        private LocalDate leaseEnd;
    
        // Constructors, getters, and setters
    
        public Tenant() {
        }
    
        public Tenant(String name, String contact, LocalDate leaseStart, LocalDate leaseEnd) {
            this.name = name;
            this.contact = contact;
            this.leaseStart = leaseStart;
            this.leaseEnd = leaseEnd;
        }
    
        public Long getId() {
            return id;
        }
    
        public void setId(Long id) {
            this.id = id;
        }
    
        public String getName() {
            return name;
        }
    
        public void setName(String name) {
            this.name = name;
        }
    
        public String getContact() {
            return contact;
        }
    
        public void setContact(String contact) {
            this.contact = contact;
        }
    
        public LocalDate getLeaseStart() {
            return leaseStart;
        }
    
        public void setLeaseStart(LocalDate leaseStart) {
            this.leaseStart = leaseStart;
        }
    
        public LocalDate getLeaseEnd() {
            return leaseEnd;
        }
    
        public void setLeaseEnd(LocalDate leaseEnd) {
            this.leaseEnd = leaseEnd;
        }
    }
   