package com.uge.devops.aquarium.EAquarium.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Espece {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String nom;
    private int esperanceVie;
    private String regimeAlimentaire;
    private int niveauMenace;

    public Espece(int id, String nom, int esperanceVie, String regimeAlimentaire, int niveauMenace) {
        this.id = id;
        this.nom = nom;
        this.esperanceVie = esperanceVie;
        this.regimeAlimentaire = regimeAlimentaire;
        this.niveauMenace = niveauMenace;
    }

    public Espece() {
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

    public int getEsperanceVie() {
        return esperanceVie;
    }

    public void setEsperanceVie(int esperanceVie) {
        this.esperanceVie = esperanceVie;
    }

    public String getRegimeAlimentaire() {
        return regimeAlimentaire;
    }

    public void setRegimeAlimentaire(String regimeAlimentaire) {
        this.regimeAlimentaire = regimeAlimentaire;
    }

    public int getNiveauMenace() {
        return niveauMenace;
    }

    public void setNiveauMenace(int niveauMenace) {
        this.niveauMenace = niveauMenace;
    }

    @Override
    public String toString() {
        return "Espece{" +
                "id=" + id +
                ", nom='" + nom + '\'' +
                ", esperanceVie='" + esperanceVie + '\'' +
                ", regimeAlimentaire='" + regimeAlimentaire + '\'' +
                ", niveauMenace=" + niveauMenace +
                '}';
    }
}
