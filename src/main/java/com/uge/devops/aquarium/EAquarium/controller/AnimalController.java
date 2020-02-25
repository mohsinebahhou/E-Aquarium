package com.uge.devops.aquarium.EAquarium.controller;


import com.uge.devops.aquarium.EAquarium.models.Animal;
import com.uge.devops.aquarium.EAquarium.service.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
public class AnimalController {

    @Autowired
    AnimalService animalService;

    @PostConstruct
    public void init(){
        Animal a1 = new Animal(1,"Poisson1","Male","p1","14/2/2020","22/2/2020",1,1);
        Animal a2 = new Animal(2,"Poisson2","Male","p1","14/2/2020","22/2/2020",1,1);
        Animal a3 = new Animal(3,"Poisson3","Male","p1","14/2/2020","22/2/2020",1,1);
        Animal a4 = new Animal(4,"Poisson4","Male","p1","14/2/2020","22/2/2020",1,2);
        Animal a5 = new Animal(5,"Poisson5","Male","p1","14/2/2020","22/2/2020",2,2);
        Animal a6 = new Animal(6,"Poisson6","Male","p1","14/2/2020","22/2/2020",2,2);
        animalService.addAnimal(new ArrayList<Animal>(Arrays.asList(a1, a2, a3,a4,a5,a6)));
    }

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
    public void addAnimal(@RequestBody Animal a)
    {
        System.out.println("addAnimal");
        System.out.println(a);
        System.out.println("addAnimal");
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
