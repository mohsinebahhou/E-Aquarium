package com.uge.devops.aquarium.EAquarium.controller;


import com.uge.devops.aquarium.EAquarium.models.Animal;
import com.uge.devops.aquarium.EAquarium.service.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AnimalController {

    @Autowired
    AnimalService animalService;

    @GetMapping("/animal")
    public Iterable<Animal> getAnimaux() {
        return animalService.getAnimals();
    }

    @GetMapping("/animal/{id}")
    public Animal getAnimal(@PathVariable Integer id) {
        return animalService.getAnimalById(id);
    }


    @PostMapping(path = "/animaux")
    public void addAnimals(@RequestBody List<Animal> list) {
        animalService.addAnimal(list);
    }

    @PostMapping(path = "/animal")
    public void addAnimal(@RequestBody Animal a) {
        animalService.addAnimal(a);
    }

    @PutMapping(value = "/animal")
    public Animal updateAnimal( @RequestBody Animal a) {
        return animalService.addAnimal(a);
    }

    @DeleteMapping("/animal/{id}")
    public void deleteAnimal(@PathVariable int id) {
        animalService.deleteAnimal(id);
    }
}
