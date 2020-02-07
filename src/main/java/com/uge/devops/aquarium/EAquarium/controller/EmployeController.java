package com.uge.devops.aquarium.EAquarium.controller;


import com.uge.devops.aquarium.EAquarium.models.Employe;
import com.uge.devops.aquarium.EAquarium.service.EmployeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmployeController {

    @Autowired
    EmployeService EmployeService;

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
}
