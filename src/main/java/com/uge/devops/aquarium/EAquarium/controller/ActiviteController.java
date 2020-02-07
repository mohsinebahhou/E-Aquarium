package com.uge.devops.aquarium.EAquarium.controller;


import com.uge.devops.aquarium.EAquarium.models.Activite;
import com.uge.devops.aquarium.EAquarium.service.ActiviteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
        return ActiviteService.getActiviteById(id);
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
