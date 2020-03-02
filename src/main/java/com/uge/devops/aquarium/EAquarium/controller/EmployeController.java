package com.uge.devops.aquarium.EAquarium.controller;


import com.uge.devops.aquarium.EAquarium.models.Activite;
import com.uge.devops.aquarium.EAquarium.models.Animal;
import com.uge.devops.aquarium.EAquarium.models.Employe;
import com.uge.devops.aquarium.EAquarium.service.EmployeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
public class EmployeController {

    @Autowired
    EmployeService EmployeService;


    @PostConstruct
    public void init(){
        Employe e1 = new Employe(1,"Bahhou","Mohsine","mohsine","123","Paris","07456787652","1993-11-14","72345678987654345","employe");
        Employe e2 = new Employe(2,"Laplace","Olivier","olivier","123","Paris","07456787652","1989-01-12","72345678987654345","gestionnaire");
        Employe e3 = new Employe(3,"Celier","Antoine","antoine","123","Paris","07456787652","1990-10-11","72345678987654345","responsable");
        Employe e4 = new Employe(4,"Decourbe","John","john","123","Paris","07456787652","1980-11-04","72345678987654345","employe");
        EmployeService.addEmploye(new ArrayList<Employe>(Arrays.asList(e1,e2,e3,e4)));
    }
    @GetMapping("/Employe")
    public Iterable<Employe> getEmployes() {
        return EmployeService.getEmployes();
    }

    @GetMapping("/Employe/{id}")
    public Employe getEmploye(@PathVariable Integer id) {
        return EmployeService.getEmployeById(id);
    }


    @PostMapping(path = "/Employes")
    public void addEmployes(@RequestBody List<Employe> list) {
        EmployeService.addEmploye(list);
    }

        @PostMapping(path = "/Employe")
    public void addEmploye(@RequestBody Employe a) {
        EmployeService.addEmploye(a);
    }

    @PutMapping(value = "/Employe")
    public Employe updateEmploye( @RequestBody Employe a) {
        return EmployeService.addEmploye(a);
    }

    @DeleteMapping("/Employe/{id}")
    public void deleteEmploye(@PathVariable int id) {
        EmployeService.deleteEmploye(id);
    }

    @GetMapping("/Login/{login}/{password}")
    public Employe Authentification(@PathVariable String login,@PathVariable String password) {
        Employe e = EmployeService.Authentification(login,password);
        return e;
    }
}
