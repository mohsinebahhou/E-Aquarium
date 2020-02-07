package com.uge.devops.aquarium.EAquarium.service;

import com.uge.devops.aquarium.EAquarium.models.Activite;
import com.uge.devops.aquarium.EAquarium.models.Affectation;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AffectationRepository extends CrudRepository<Affectation, Integer> {

    List<Affectation> findByIdEmploye(int id);
    Affectation findById(int id);
}