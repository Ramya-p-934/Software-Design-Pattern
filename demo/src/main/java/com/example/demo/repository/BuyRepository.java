package com.example.demo.repository;

import com.example.demo.model.Buy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BuyRepository extends JpaRepository<Buy, Long> {
    // You can add custom query methods here if needed
}
