package com.uge.devops.aquarium.EAquarium.service;

import com.uge.devops.aquarium.EAquarium.models.Animal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnimalService {

    @Autowired
    private AnimalRepository animals;

    public Iterable<Animal> getAnimals() {
        return animals.findAll();
    }

    public Animal getAnimalById(int id) { return animals.findById(id);}

    public List<Animal> getAnimalByNom(String nom) { return animals.findByNom(nom);}

    public Animal addAnimal(Animal p ){
        return this.animals.save(p);
    }

    public void addAnimal (List<Animal> list){ this.animals.saveAll(list);}

    public void deleteAnimal(int id) { this.animals.deleteById(id);}

}
