package com.uge.devops.aquarium.EAquarium.controller;


import com.uge.devops.aquarium.EAquarium.models.Espece;
import com.uge.devops.aquarium.EAquarium.service.EspeceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EspeceController {

    @Autowired
    EspeceService EspeceService;

    @GetMapping("/Espece")
    public Iterable<Espece> getEspeces() {
        return EspeceService.getEspeces();
    }

    @GetMapping("/Espece/{id}")
    public Espece getEspece(@PathVariable Integer id) {
        return EspeceService.getEspeceById(id);
    }


    @PostMapping(path = "/Especes")
    public void addEspeces(@RequestBody List<Espece> list) {
        EspeceService.addEspece(list);
    }

    @PostMapping(path = "/Espece")
    public void addEspece(@RequestBody Espece a) {
        EspeceService.addEspece(a);
    }

    @PutMapping(value = "/Espece")
    public Espece updateEspece( @RequestBody Espece a) {
        return EspeceService.addEspece(a);
    }

    @DeleteMapping("/Espece/{id}")
    public void deleteEspece(@PathVariable int id) {
        EspeceService.deleteEspece(id);
    }
}
