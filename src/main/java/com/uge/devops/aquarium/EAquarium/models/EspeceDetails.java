package com.uge.devops.aquarium.EAquarium.models;

import java.util.ArrayList;
import java.util.List;

public class EspeceDetails {
    private Espece espece;
    private int nbrPensionnaires;
    private Iterable<Animal> listAnimals;

    public EspeceDetails(Espece espece) {
        this.espece = espece;
        this.nbrPensionnaires = 0;
        this.listAnimals = new ArrayList<>();
    }

    public Espece getEspece() {
        return espece;
    }

    public void setEspece(Espece espece) {
        this.espece = espece;
    }

    public int getNbrPensionnaires() {
        return nbrPensionnaires;
    }

    public void setNbrPensionnaires(int nbrPensionnaires) {
        this.nbrPensionnaires = nbrPensionnaires;
    }

    public Iterable<Animal> getListAnimals() {
        return listAnimals;
    }

    public void setListAnimals(Iterable<Animal> listAnimals) {
        this.listAnimals = listAnimals;
    }

    public void addAnimal(Animal a){
        //this.listAnimals.add(a);
    }

    public void incrementNbrPensionnaire(){
        this.nbrPensionnaires++;
    }
}
