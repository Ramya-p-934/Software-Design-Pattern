package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Model;
import com.example.demo.service.Services;

@RestController

public class ModelController {

    @Autowired
    private Services services;

    @PostMapping("/save")
    public ResponseEntity<Model> saveModel(@RequestBody Model model) {
        Model savedModel = services.saveuser(model);
        return new ResponseEntity<>(savedModel, HttpStatus.CREATED);
    }
}
