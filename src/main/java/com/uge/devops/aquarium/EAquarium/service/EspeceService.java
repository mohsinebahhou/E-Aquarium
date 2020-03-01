package com.uge.devops.aquarium.EAquarium.service;


import com.uge.devops.aquarium.EAquarium.models.Animal;
import com.uge.devops.aquarium.EAquarium.models.Espece;
import com.uge.devops.aquarium.EAquarium.models.EspeceDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
public class EspeceService {
    @Autowired
    private EspeceRepository Especes;

    @Autowired
    AnimalService animalService;

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

    public Iterable<EspeceDetails> PensionnairesByEspeces(){
        Iterable<Espece> listEspeces = getEspeces();
        Iterable<Animal> listAnimals = animalService.getAnimals();
        List<EspeceDetails> res = new ArrayList<>();
        for (Espece espece:listEspeces) {
            EspeceDetails especeDetails = new EspeceDetails(espece);
            List<Animal> list = new ArrayList<>();
            for (Animal animal: listAnimals) {
                if(animal.getIdEspece()==espece.getId()){
                    list.add(animal);
                    especeDetails.incrementNbrPensionnaire();
                }
            }
            especeDetails.setListAnimals(list);
            System.out.println(("RRRRRRRRR : " + especeDetails.getListAnimals()));
            res.add(especeDetails);
        }

        System.out.println("Tableau : "+res);
        return res;
    }


    /*
    public int nbrPensionnairesByEspece(int idEspece){
        Iterable<Animal> list = animalService.getAnimals();
        List<Animal> res = new ArrayList<>();
        for (Animal animal: list) {
            if(animal.getIdEspece()==idEspece) res.add(animal);
        }
        System.out.println("Size : "+res.size());
        return res.size();
    }

    */



}
