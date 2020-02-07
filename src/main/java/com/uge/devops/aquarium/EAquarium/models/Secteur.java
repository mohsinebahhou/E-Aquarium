package com.uge.devops.aquarium.EAquarium.models;

import javax.persistence.*;
import java.util.List;

@Entity
public class Secteur {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String nom;
    private String localisation;
    @ManyToMany(targetEntity=Bassin.class)
    private List<Bassin> bassins;

    public Secteur(int id, String nom, String localisation, List<Bassin> bassins) {
        this.id = id;
        this.nom = nom;
        this.localisation = localisation;
        this.bassins = bassins;
    }

    public Secteur() {
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

    public String getLocalisation() {
        return localisation;
    }

    public void setLocalisation(String localisation) {
        this.localisation = localisation;
    }

    public List<Bassin> getBassins() {
        return bassins;
    }

    public void setBassins(List<Bassin> bassins) {
        this.bassins = bassins;
    }

    public void ajouterBassin(Bassin b){
        this.bassins.add(b);
    }

    public void supprimerAnimal(Bassin b){
        this.bassins.remove(b);
    }

    @Override
    public String toString() {
        return "Secteur{" +
                "id=" + id +
                ", nom='" + nom + '\'' +
                ", localisation='" + localisation + '\'' +
                ", bassins=" + bassins +
                '}';
    }
}
