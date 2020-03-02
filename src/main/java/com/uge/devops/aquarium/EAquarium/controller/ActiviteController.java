package com.uge.devops.aquarium.EAquarium.controller;


import com.uge.devops.aquarium.EAquarium.models.Activite;
import com.uge.devops.aquarium.EAquarium.models.Animal;
import com.uge.devops.aquarium.EAquarium.models.Employe;
import com.uge.devops.aquarium.EAquarium.service.ActiviteService;
import com.uge.devops.aquarium.EAquarium.service.EmployeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

@RestController
public class ActiviteController {

    @Autowired
    ActiviteService ActiviteService;

    @Autowired
    EmployeService EmployeService;

    @PostConstruct
    public void init(){
        Activite a1 = new Activite(1,"Activite1","2020-02-24","14:00","18:00",true,1,1,new ArrayList<Employe>(Arrays.asList(EmployeService.getEmployeById(1))));
        Activite a2 = new Activite(2,"Activite2","2020-02-25","14:00","18:00",true,1,1,new ArrayList<Employe>(Arrays.asList(EmployeService.getEmployeById(4))));
        Activite a3 = new Activite(3,"Activite3","2020-02-26","14:00","18:00",true,1,1,new ArrayList<Employe>(Arrays.asList(EmployeService.getEmployeById(4))));
        ActiviteService.addActivite(new ArrayList<Activite>(Arrays.asList(a1, a2,a3)));
    }

    @GetMapping("/Activite")
    public Iterable<Activite> getActivites() {
        return ActiviteService.getActivites();
    }

    @GetMapping("/Activite/{id}")
    public Activite getActivite(@PathVariable Integer id) {
        return ActiviteService.getActiviteById(id);
    }


    @PostMapping(path = "/Activites")
    public void addActivites(@RequestBody List<Activite> list) {
        ActiviteService.addActivite(list);
    }

    @PostMapping(path = "/Activite")
    public void addActivite(@RequestBody Activite a) {
        ActiviteService.addActivite(a);
    }

    @PutMapping(value = "/Activite")
    public Activite updateActivite( @RequestBody Activite a) {
        return ActiviteService.addActivite(a);
    }

    @DeleteMapping("/Activite/{id}")
    public void deleteActivite(@PathVariable int id) {
        ActiviteService.deleteActivite(id);
    }

    @GetMapping("/SearchActivite/{jour}/{heure}")
    public Iterable<Activite> rechercherActivite(@PathVariable String jour,@PathVariable String heure) {

        return ActiviteService.RechercherActivite(jour,heure);
    }


}
