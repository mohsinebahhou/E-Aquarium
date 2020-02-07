package com.uge.devops.aquarium.EAquarium.controller;


import com.uge.devops.aquarium.EAquarium.models.Secteur;
import com.uge.devops.aquarium.EAquarium.service.SecteurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SecteurController {

    @Autowired
    SecteurService SecteurService;

    @GetMapping("/Secteur")
    public Iterable<Secteur> getSecteurs() {
        return SecteurService.getSecteurs();
    }

    @GetMapping("/Secteur/{id}")
    public Secteur getSecteur(@PathVariable Integer id) {
        return SecteurService.getSecteurById(id);
    }


    @PostMapping(path = "/Secteurs")
    public void addSecteurs(@RequestBody List<Secteur> list) {
        SecteurService.addSecteur(list);
    }

    @PostMapping(path = "/Secteur")
    public void addSecteur(@RequestBody Secteur a) {
        SecteurService.addSecteur(a);
    }

    @PutMapping(value = "/Secteur")
    public Secteur updateSecteur( @RequestBody Secteur a) {
        return SecteurService.addSecteur(a);
    }

    @DeleteMapping("/Secteur/{id}")
    public void deleteSecteur(@PathVariable int id) {
        SecteurService.deleteSecteur(id);
    }
}
