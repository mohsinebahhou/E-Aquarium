package com.uge.devops.aquarium.EAquarium.controller;


import com.uge.devops.aquarium.EAquarium.models.Animal;
import com.uge.devops.aquarium.EAquarium.models.Bassin;
import com.uge.devops.aquarium.EAquarium.service.AnimalService;
import com.uge.devops.aquarium.EAquarium.service.BassinService;
import org.junit.Before;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@RestController
public class BassinController {

    @Autowired
    BassinService BassinService;

    @Autowired
    AnimalService animalService;

    @PostConstruct
    public void init(){
        Bassin b1 = new Bassin(1,"Bassin 1",30,100,"Bonne");
        Bassin b2 = new Bassin(2,"Bassin 2",50,150,"Ancien");
        b1.ajouterAnimal(animalService.getAnimalById(1));
        b1.ajouterAnimal(animalService.getAnimalById(2));
        b1.ajouterAnimal(animalService.getAnimalById(3));
        b2.ajouterAnimal(animalService.getAnimalById(4));
        b2.ajouterAnimal(animalService.getAnimalById(5));
        b2.ajouterAnimal(animalService.getAnimalById(6));
        BassinService.addBassin(b1);
        BassinService.addBassin(b2);
        System.out.println("SetupBassin");
    }

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
