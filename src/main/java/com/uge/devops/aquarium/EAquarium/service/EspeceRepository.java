package com.uge.devops.aquarium.EAquarium.service;

import com.uge.devops.aquarium.EAquarium.models.Espece;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface EspeceRepository extends CrudRepository<Espece, Integer> {

    List<Espece> findByNom(String nom);
    Espece findById(int id);
}