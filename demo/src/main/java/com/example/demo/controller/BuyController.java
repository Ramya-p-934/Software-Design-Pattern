package com.example.demo.controller;

import com.example.demo.model.Buy;
import com.example.demo.service.BuyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/buys")
public class BuyController {

    @Autowired
    private BuyService buyService;

    @GetMapping
    public ResponseEntity<List<Buy>> getAllBuys() {
        List<Buy> buys = buyService.getAllBuys();
        return new ResponseEntity<>(buys, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Buy> getBuyById(@PathVariable Long id) {
        Optional<Buy> buy = buyService.getBuyById(id);
        return buy.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Buy> createBuy(@RequestBody Buy buy) {
        Buy newBuy = buyService.saveBuy(buy);
        return new ResponseEntity<>(newBuy, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Buy> updateBuy(@PathVariable Long id, @RequestBody Buy buy) {
        if (!buyService.getBuyById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        buy.setId(id);
        Buy updatedBuy = buyService.saveBuy(buy);
        return ResponseEntity.ok(updatedBuy);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBuy(@PathVariable Long id) {
        if (!buyService.getBuyById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        buyService.deleteBuy(id);
        return ResponseEntity.noContent().build();
    }
}
