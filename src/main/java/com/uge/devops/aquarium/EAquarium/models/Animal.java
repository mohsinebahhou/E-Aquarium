package com.uge.devops.aquarium.EAquarium.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Animal {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String nom;
    private String sex;
    private String signeDistinctif;
    private String dateArrivee;
    private String dateDepart;
    private int idEspece;
    private int idBassin;

    public Animal() {
    }

    public Animal(int id, String nom, String sex, String signeDistinctif, String dateArrivee, String dateDepart, int idEspece, int idBassin) {
        this.id = id;
        this.nom = nom;
        this.sex = sex;
        this.signeDistinctif = signeDistinctif;
        this.dateArrivee = dateArrivee;
        this.dateDepart = dateDepart;
        this.idEspece = idEspece;
        this.idBassin = idBassin;
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

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getSigneDistinctif() {
        return signeDistinctif;
    }

    public void setSigneDistinctif(String signeDistinctif) {
        this.signeDistinctif = signeDistinctif;
    }

    public String getDateArrivee() {
        return dateArrivee;
    }

    public void setDateArrivee(String dateArrivee) {
        this.dateArrivee = dateArrivee;
    }

    public String getDateDepart() {
        return dateDepart;
    }

    public void setDateDepart(String dateDepart) {
        this.dateDepart = dateDepart;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIdEspece() {
        return idEspece;
    }

    public void setIdEspece(int idEspece) {
        this.idEspece = idEspece;
    }

    public int getIdBassin() {
        return idBassin;
    }

    public void setIdBassin(int idBassin) {
        this.idBassin = idBassin;
    }

    @Override
    public String toString() {
        return "Animal{" +
                "id=" + id +
                ", nom='" + nom + '\'' +
                ", sex='" + sex + '\'' +
                ", signeDistinctif='" + signeDistinctif + '\'' +
                ", dateArrivee='" + dateArrivee + '\'' +
                ", dateDepart='" + dateDepart + '\'' +
                ", IdEspece=" + idEspece +
                ", IdBassin=" + idBassin +
                '}';
    }


}
