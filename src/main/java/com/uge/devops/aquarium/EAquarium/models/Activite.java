package com.uge.devops.aquarium.EAquarium.models;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Entity
public class Activite {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String nom;
    private String jour;
    private String heureDebut;
    private String heureFin;
    private boolean activitePublic;
    private int idBassin;
    private int idSecteur;
    @ManyToMany(targetEntity=Employe.class)
    private List<Employe> employes;


    public Activite() {
    }

    public Activite(int id, String nom, String jour, String heureDebut, String heureFin, boolean activitePublic, int idBassin, int idSecteur, List<Employe> employes) {
        this.id = id;
        this.nom = nom;
        this.jour = jour;
        this.heureDebut = heureDebut;
        this.heureFin = heureFin;
        this.activitePublic = activitePublic;
        this.idBassin = idBassin;
        this.idSecteur = idSecteur;
        this.employes = employes;
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

    public String getJour() {
        return jour;
    }

    public void setJour(String jour) {
        this.jour = jour;
        try {
            SimpleDateFormat formatter1=new SimpleDateFormat("yyyy-MM-dd");
            Date date1=formatter1.parse(jour);
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            this.jour = sdf.format(date1);

        } catch (Exception e) {
            System.out.println("Erreur " + e.getMessage());
        }
    }

    public String getHeureDebut() {
        return heureDebut;
    }

    public void setHeureDebut(String heureDebut) {
        this.heureDebut = heureDebut;
    }

    public String getHeureFin() {
        return heureFin;
    }

    public void setHeureFin(String heureFin) {
        this.heureFin = heureFin;
    }

    public boolean isActivitePublic() {
        return activitePublic;
    }

    public void setActivitePublic(boolean activitePublic) {
        this.activitePublic = activitePublic;
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

    public List<Employe> getEmployes() {
        return employes;
    }

    public void setEmployes(List<Employe> employes) {
        this.employes = employes;
    }

    @Override
    public String toString() {
        return "Activite{" +
                "id=" + id +
                ", nom='" + nom + '\'' +
                ", jour='" + jour + '\'' +
                ", heureDebut='" + heureDebut + '\'' +
                ", heureFin='" + heureFin + '\'' +
                ", activitePublic=" + activitePublic +
                ", idBassin=" + idBassin +
                ", idSecteur=" + idSecteur +
                ", employes=" + employes +
                '}';
    }
}
