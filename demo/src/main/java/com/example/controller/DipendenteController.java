package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.example.domain.*;
import com.example.repository.*;

@RestController
@RequestMapping(path = "/api/dipendente", produces = "application/json")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE,
    RequestMethod.PUT }, maxAge = 3600)
public class DipendenteController {
    
    @Autowired // dependecy injection di JPA 
    DipendenteRepo dipendenterepo; 

    @GetMapping("/saluto")
    public String saluto(){
        return "ciao";
    }

    @GetMapping("")
    public List<Dipendente> findAll(){
        // leggere tutti i dip
        return this.dipendenterepo.findAll();
    }
}
