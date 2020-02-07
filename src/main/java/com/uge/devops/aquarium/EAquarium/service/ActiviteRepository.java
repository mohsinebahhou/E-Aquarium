package com.uge.devops.aquarium.EAquarium.service;

import com.uge.devops.aquarium.EAquarium.models.Activite;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ActiviteRepository extends CrudRepository<Activite, Integer> {

    List<Activite> findByNom(String nom);
    Activite findById(int id);
}
