package com.uge.devops.aquarium.EAquarium.service;

import com.uge.devops.aquarium.EAquarium.models.Bassin;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface BassinRepository extends CrudRepository<Bassin, Integer> {

    List<Bassin> findByNom(String nom);
    Bassin findById(int id);
}