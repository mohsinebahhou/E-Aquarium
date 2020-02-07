package com.uge.devops.aquarium.EAquarium.service;


import com.uge.devops.aquarium.EAquarium.models.Employe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeService {
    @Autowired
    private EmployeRepository Employes;

    public Iterable<Employe> getEmployes() {
        return Employes.findAll();
    }

    public Employe getEmployeById(int id) { return Employes.findById(id);}

    public List<Employe> getEmployeByNom(String nom) { return Employes.findByNom(nom);}

    public Employe addEmploye(Employe p ){
        return this.Employes.save(p);
    }

    public void addEmploye (List<Employe> list){ this.Employes.saveAll(list);}

    public void deleteEmploye(int id) { this.Employes.deleteById(id);}
}
