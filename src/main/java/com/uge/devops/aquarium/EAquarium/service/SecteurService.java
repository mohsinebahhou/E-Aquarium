package com.uge.devops.aquarium.EAquarium.service;


import com.uge.devops.aquarium.EAquarium.models.Secteur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SecteurService {
    @Autowired
    private SecteurRepository Secteurs;

    public Iterable<Secteur> getSecteurs() {
        return Secteurs.findAll();
    }

    public Secteur getSecteurById(int id) { return Secteurs.findById(id);}

    public List<Secteur> getSecteurByNom(String nom) { return Secteurs.findByNom(nom);}

    public Secteur addSecteur(Secteur p ){
        return this.Secteurs.save(p);
    }

    public void addSecteur (List<Secteur> list){ this.Secteurs.saveAll(list);}

    public void deleteSecteur(int id) { this.Secteurs.deleteById(id);}
}
