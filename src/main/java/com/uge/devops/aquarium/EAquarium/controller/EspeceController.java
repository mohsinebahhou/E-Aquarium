package com.uge.devops.aquarium.EAquarium.controller;


import com.uge.devops.aquarium.EAquarium.models.Bassin;
import com.uge.devops.aquarium.EAquarium.models.Espece;
import com.uge.devops.aquarium.EAquarium.service.EspeceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
public class EspeceController {

    @Autowired
    EspeceService EspeceService;

    @PostConstruct
    public void init(){
        Espece e1 = new Espece(1,"Espece1",70,"Carnivore",3);
        Espece e2 = new Espece(2,"Espece2",60,"Herbivore",7);
        addEspeces(new ArrayList<>(Arrays.asList(e1,e2)));
    }

    @GetMapping("/Espece")
    public Iterable<Espece> getEspeces() {
        return EspeceService.getEspeces();
    }

    @GetMapping("/Espece/{id}")
    public Espece getEspece(@PathVariable Integer id) {
        return EspeceService.getEspeceById(id);
    }


    @PostMapping(path = "/Especes")
    public void addEspeces(@RequestBody List<Espece> list) {
        EspeceService.addEspece(list);
    }

    @PostMapping(path = "/Espece")
    public void addEspece(@RequestBody Espece a) {
        EspeceService.addEspece(a);
    }

    @PutMapping(value = "/Espece")
    public Espece updateEspece( @RequestBody Espece a) {
        return EspeceService.addEspece(a);
    }

    @DeleteMapping("/Espece/{id}")
    public void deleteEspece(@PathVariable int id) {
        EspeceService.deleteEspece(id);
    }
}
