package com.uge.devops.aquarium.EAquarium.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Affectation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private int idEmploye;
    private int idBassin;
    private int idSecteur;

    public Affectation(int id, int idEmploye, int idBassin, int idSecteur) {
        this.id = id;
        this.idEmploye = idEmploye;
        this.idBassin = idBassin;
        this.idSecteur = idSecteur;
    }

    public Affectation() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIdEmploye() {
        return idEmploye;
    }

    public void setIdEmploye(int idEmploye) {
        this.idEmploye = idEmploye;
    }

    public int getIdBassin() {
        return idBassin;
    }

    public void setIdBassin(int idBassin) {
        this.idBassin = idBassin;
    }

    public int getIdSecteur() {
        return idSecteur;
    }

    public void setIdSecteur(int idSecteur) {
        this.idSecteur = idSecteur;
    }

    @Override
    public String toString() {
        return "Affectation{" +
                "id=" + id +
                ", idEmploye=" + idEmploye +
                ", idBassin=" + idBassin +
                ", idSecteur=" + idSecteur +
                '}';
    }
}
