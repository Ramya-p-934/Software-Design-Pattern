package com.example.demo.service;

import com.example.demo.model.Sell;
import com.example.demo.repository.SellRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SellService {

    @Autowired
    private SellRepository sellRepository;

    public List<Sell> getAllSells() {
        return sellRepository.findAll();
    }

    public Optional<Sell> getSellById(Long id) {
        return sellRepository.findById(id);
    }

    public Sell saveSell(Sell sell) {
        return sellRepository.save(sell);
    }

    public void deleteSell(Long id) {
        sellRepository.deleteById(id);
    }
}
