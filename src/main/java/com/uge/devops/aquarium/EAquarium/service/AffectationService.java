package com.uge.devops.aquarium.EAquarium.service;


import com.uge.devops.aquarium.EAquarium.models.Affectation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AffectationService {
    @Autowired
    private AffectationRepository Affectations;

    public Iterable<Affectation> getAffectations() {
        return Affectations.findAll();
    }

    public Affectation getAffectationById(int id) { return Affectations.findById(id);}

    public List<Affectation> getAffectationByIdEmploye(int id) { return Affectations.findByIdEmploye(id);}

    public Affectation addAffectation(Affectation p ){
        return this.Affectations.save(p);
    }

    public void addAffectation (List<Affectation> list){ this.Affectations.saveAll(list);}

    public void deleteAffectation(int id) { this.Affectations.deleteById(id);}
}
