package com.uge.devops.aquarium.EAquarium.service;


import com.uge.devops.aquarium.EAquarium.models.Espece;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EspeceService {
    @Autowired
    private EspeceRepository Especes;

    public Iterable<Espece> getEspeces() {
        return Especes.findAll();
    }

    public Espece getEspeceById(int id) { return Especes.findById(id);}

    public List<Espece> getEspeceByNom(String nom) { return Especes.findByNom(nom);}

    public Espece addEspece(Espece p ){
        return this.Especes.save(p);
    }

    public void addEspece (List<Espece> list){ this.Especes.saveAll(list);}

    public void deleteEspece(int id) { this.Especes.deleteById(id);}
}
