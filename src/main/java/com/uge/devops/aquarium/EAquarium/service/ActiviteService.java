package com.uge.devops.aquarium.EAquarium.service;


import com.uge.devops.aquarium.EAquarium.models.Activite;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class ActiviteService {
    @Autowired
    private ActiviteRepository Activites;

    public Iterable<Activite> getActivites() {
        return Activites.findAll();
    }

    public Activite getActiviteById(int id) { return Activites.findById(id);}

    public List<Activite> getActiviteByNom(String nom) { return Activites.findByNom(nom);}

    public Activite addActivite(Activite p ){
        return this.Activites.save(p);
    }

    public void addActivite (List<Activite> list){ this.Activites.saveAll(list);}

    public void deleteActivite(int id) { this.Activites.deleteById(id);}

    public Iterable<Activite> RechercherActivite(String jour,String heure){

        try {
            Locale loc = new Locale("en", "US");
            SimpleDateFormat formatter1=new SimpleDateFormat("E MMM dd yyyy",loc);
            Date date1=formatter1.parse(jour);
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            jour = sdf.format(date1);
            StringTokenizer st = new StringTokenizer(heure,":");
            heure = st.nextToken();
        } catch (Exception e) {
            System.out.println("Erreur " + e.getMessage());
        }

        Iterable<Activite> list = getActivites();
        List<Activite> res = new ArrayList<>();
        for (Activite a : list) {
            if(a.isActivitePublic()){
                StringTokenizer st = new StringTokenizer(a.getHeureDebut(),":");
                String heureDebut = st.nextToken();
                if(a.getJour().equals(jour) && heure.equals(heureDebut)) res.add(a);
            }
        }
        return res;
    }
}
