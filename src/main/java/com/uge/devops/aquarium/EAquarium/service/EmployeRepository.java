package com.uge.devops.aquarium.EAquarium.service;

import com.uge.devops.aquarium.EAquarium.models.Employe;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface EmployeRepository extends CrudRepository<Employe, Integer> {

    List<Employe> findByNom(String nom);
    Employe findById(int id);
}