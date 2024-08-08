package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.Model;
import com.example.demo.repository.Repository;

@Service
public class Services {

    @Autowired
    private Repository repo;

    public Model saveuser(Model model) {
        return repo.save(model);
    }
}
