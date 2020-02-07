package com.uge.devops.aquarium.EAquarium.service;

import com.uge.devops.aquarium.EAquarium.models.Secteur;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface SecteurRepository extends CrudRepository<Secteur, Integer> {

    List<Secteur> findByNom(String nom);
    Secteur findById(int id);
}