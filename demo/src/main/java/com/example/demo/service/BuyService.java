package com.example.demo.service;

import com.example.demo.model.Buy;
import com.example.demo.repository.BuyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BuyService {

    @Autowired
    private BuyRepository buyRepository;

    public List<Buy> getAllBuys() {
        return buyRepository.findAll();
    }

    public Optional<Buy> getBuyById(Long id) {
        return buyRepository.findById(id);
    }

    public Buy saveBuy(Buy buy) {
        return buyRepository.save(buy);
    }

    public void deleteBuy(Long id) {
        buyRepository.deleteById(id);
    }
}
