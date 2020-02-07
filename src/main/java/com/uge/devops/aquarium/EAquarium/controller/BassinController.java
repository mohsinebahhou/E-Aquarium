package com.uge.devops.aquarium.EAquarium.controller;


import com.uge.devops.aquarium.EAquarium.models.Bassin;
import com.uge.devops.aquarium.EAquarium.service.BassinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BassinController {

    @Autowired
    BassinService BassinService;

    @GetMapping("/Bassin")
    public Iterable<Bassin> getBassins() {
        return BassinService.getBassins();
    }

    @GetMapping("/Bassin/{id}")
    public Bassin getBassin(@PathVariable Integer id) {
        return BassinService.getBassinById(id);
    }


    @PostMapping(path = "/Bassins")
    public void addBassins(@RequestBody List<Bassin> list) {
        BassinService.addBassin(list);
    }

    @PostMapping(path = "/Bassin")
    public void addBassin(@RequestBody Bassin a) {
        BassinService.addBassin(a);
    }

    @PutMapping(value = "/Bassin")
    public Bassin updateBassin( @RequestBody Bassin a) {
        return BassinService.addBassin(a);
    }

    @DeleteMapping("/Bassin/{id}")
    public void deleteBassin(@PathVariable int id) {
        BassinService.deleteBassin(id);
    }
}
