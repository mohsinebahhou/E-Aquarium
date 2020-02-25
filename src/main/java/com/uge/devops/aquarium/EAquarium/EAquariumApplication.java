package com.uge.devops.aquarium.EAquarium;

import com.uge.devops.aquarium.EAquarium.models.Bassin;
import com.uge.devops.aquarium.EAquarium.service.BassinService;
import org.junit.Before;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EAquariumApplication {

	@Autowired
	BassinService bassinService;

	public static void main(String[] args) {
		SpringApplication.run(EAquariumApplication.class, args);
	}



}
