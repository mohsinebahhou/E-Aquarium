package com.uge.devops.aquarium.EAquarium.service;


import com.uge.devops.aquarium.EAquarium.models.Activite;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActiviteService {
    @Autowired
    private ActiviteRepository Activites;

    public Iterable<Activite> getActivites() {
        return Activites.findAll();
    }

    public Activite getActiviteById(int id) { return Activites.findById(id);}

    public List<Activite> getActiviteByNom(String nom) { return Activites.findByNom(nom);}

    public Activite addActivite(Activite p ){
        return this.Activites.save(p);
    }

    public void addActivite (List<Activite> list){ this.Activites.saveAll(list);}

    public void deleteActivite(int id) { this.Activites.deleteById(id);}
}
