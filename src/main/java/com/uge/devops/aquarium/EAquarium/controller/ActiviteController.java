package com.uge.devops.aquarium.EAquarium.controller;


import com.uge.devops.aquarium.EAquarium.models.Activite;
import com.uge.devops.aquarium.EAquarium.models.Employe;
import com.uge.devops.aquarium.EAquarium.service.ActiviteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ActiviteController {

    @Autowired
    ActiviteService ActiviteService;

    @GetMapping("/Activite")
    public Iterable<Activite> getActivites() {
        return ActiviteService.getActivites();
    }

    @GetMapping("/Activite/{id}")
    public Activite getActivite(@PathVariable Integer id) {
        Employe e = new Employe(1, "Bahhou", "Mohsine", "mohsine", "123", "Paris", "0456789456" ,"14/11/1993", "7 18 61 00 112 338 23", "Responsable");
        List<Employe> list = new ArrayList<>();
        list.add(e);
        Activite a = new Activite(1,"Activite1","7/02/2020","14:00","18:00",true,1,1,list);
        //return ActiviteService.getActiviteById(id);
        return a;
    }


    @PostMapping(path = "/Activites")
    public void addActivites(@RequestBody List<Activite> list) {
        ActiviteService.addActivite(list);
    }

    @PostMapping(path = "/Activite")
    public void addActivite(@RequestBody Activite a) {
        ActiviteService.addActivite(a);
    }

    @PutMapping(value = "/Activite")
    public Activite updateActivite( @RequestBody Activite a) {
        return ActiviteService.addActivite(a);
    }

    @DeleteMapping("/Activite/{id}")
    public void deleteActivite(@PathVariable int id) {
        ActiviteService.deleteActivite(id);
    }
}
