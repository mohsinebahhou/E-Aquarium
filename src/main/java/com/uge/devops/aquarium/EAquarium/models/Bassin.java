package com.uge.devops.aquarium.EAquarium.models;

import javax.persistence.*;
import java.util.List;

@Entity
public class Bassin {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String nom;
    private int capacite;
    private double volume;
    private String etat;
    @ManyToMany(targetEntity=Animal.class)
    private List<Animal> animaux;

    public Bassin(int id, String nom, int capacite, double volume, String etat, List<Animal> animaux) {
        this.id = id;
        this.nom = nom;
        this.capacite = capacite;
        this.volume = volume;
        this.etat = etat;
        this.animaux = animaux;
    }


    public Bassin() {
    }

    public int getId() {
        return id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public int getCapacite() {
        return capacite;
    }

    public void setCapacite(int capacite) {
        this.capacite = capacite;
    }

    public double getVolume() {
        return volume;
    }

    public void setVolume(double volume) {
        this.volume = volume;
    }

    public String getEtat() {
        return etat;
    }

    public void setEtat(String etat) {
        this.etat = etat;
    }

    public List<Animal> getAnimaux() {
        return animaux;
    }

    public void setAnimaux(List<Animal> animaux) {
        this.animaux = animaux;
    }


    public void ajouterAnimal(Animal a){
        this.animaux.add(a);
    }

    public void supprimerAnimal(Animal a){
        this.animaux.remove(a);
    }

    @Override
    public String toString() {
        return "Bassin{" +
                "id=" + id +
                ", nom='" + nom + '\'' +
                ", capacite=" + capacite +
                ", volume=" + volume +
                ", etat='" + etat + '\'' +
                ", animaux=" + animaux +
                '}';
    }
}
