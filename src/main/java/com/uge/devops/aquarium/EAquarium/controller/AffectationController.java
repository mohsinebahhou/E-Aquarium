package com.uge.devops.aquarium.EAquarium.controller;


import com.uge.devops.aquarium.EAquarium.models.Affectation;
import com.uge.devops.aquarium.EAquarium.service.AffectationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AffectationController {

    @Autowired
    AffectationService AffectationService;

    @GetMapping("/Affectation")
    public Iterable<Affectation> getAffectations() {
        return AffectationService.getAffectations();
    }

    @GetMapping("/Affectation/{id}")
    public Affectation getAffectation(@PathVariable Integer id) {
        return AffectationService.getAffectationById(id);
    }


    @PostMapping(path = "/Affectations")
    public void addAffectations(@RequestBody List<Affectation> list) {
        AffectationService.addAffectation(list);
    }

    @PostMapping(path = "/Affectation")
    public void addAffectation(@RequestBody Affectation a) {
        AffectationService.addAffectation(a);
    }

    @PutMapping(value = "/Affectation")
    public Affectation updateAffectation( @RequestBody Affectation a) {
        return AffectationService.addAffectation(a);
    }

    @DeleteMapping("/Affectation/{id}")
    public void deleteAffectation(@PathVariable int id) {
        AffectationService.deleteAffectation(id);
    }
}
