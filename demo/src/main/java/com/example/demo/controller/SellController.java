package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Sell;
import com.example.demo.service.SellService;

@RestController
@RequestMapping("/api/sells")
public class SellController {

    @Autowired
    private SellService sellService;

    @GetMapping
    public ResponseEntity<List<Sell>> getAllSells() {
        List<Sell> sells = sellService.getAllSells();
        return new ResponseEntity<>(sells, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Sell> getSellById(@PathVariable Long id) {
        Optional<Sell> sell = sellService.getSellById(id);
        return sell.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Sell> createSell(@RequestBody Sell sell) {
        Sell newSell = sellService.saveSell(sell);
        return new ResponseEntity<>(newSell, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Sell> updateSell(@PathVariable Long id, @RequestBody Sell sell) {
        if (!sellService.getSellById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        sell.setId(id);
        Sell updatedSell = sellService.saveSell(sell);
        return ResponseEntity.ok(updatedSell);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSell(@PathVariable Long id) {
        if (!sellService.getSellById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        sellService.deleteSell(id);
        return ResponseEntity.noContent().build();
    }
}
