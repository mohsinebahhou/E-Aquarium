package com.uge.devops.aquarium.EAquarium.service;


import com.uge.devops.aquarium.EAquarium.models.Bassin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BassinService {
    @Autowired
    private BassinRepository Bassins;

    public Iterable<Bassin> getBassins() {
        return Bassins.findAll();
    }

    public Bassin getBassinById(int id) { return Bassins.findById(id);}

    public List<Bassin> getBassinByNom(String nom) { return Bassins.findByNom(nom);}

    public Bassin addBassin(Bassin p ){
        return this.Bassins.save(p);
    }

    public void addBassin (List<Bassin> list){ this.Bassins.saveAll(list);}

    public void deleteBassin(int id) { this.Bassins.deleteById(id);}
}
