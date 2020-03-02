import { Component, OnInit, Input, NgZone } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AnimalService, AnimalResponse } from 'src/app/services/animal.service';
import { Observable } from 'rxjs';
import { Animal } from 'src/app/interfaces/animal';
import { BassinService } from 'src/app/services/bassin.service';
import { Bassin } from 'src/app/interfaces/bassin';
import { EspeceService } from 'src/app/services/espece.service';
import { Espece } from 'src/app/interfaces/espece';



@Component({
  selector: 'app-form-add-animal',
  templateUrl: './form-add-animal.component.html',
  styleUrls: ['./form-add-animal.component.css']
})
export class FormAddAnimalComponent implements OnInit {

  listAnimal : Observable<Animal>;
  listBassin : Array<Bassin>
  listEspece : Array<Espece>

  constructor(private ngZone: NgZone,
    private formBuilder: FormBuilder,
    private serviceAnimal : AnimalService,private seviceBassin : BassinService,private serviceEspece : EspeceService) {
      this.serviceAnimal.getAll().subscribe(
        data => this.listAnimal = data,
        error => console.log("Erreur "+error)   
        )

        this.seviceBassin.getAll().subscribe(
          data => this.listBassin = data,
          error => console.log(error)) 

          this.serviceEspece.getAll().subscribe(
            data => this.listEspece = data,
            error => console.log(error)) 
     }






  

  ngOnInit() {

    
  }

  ngAfterViewInit(){

  }

  animalForm = this.formBuilder.group({
    nom: '',
    sex: '',
    signeDistinctif:'',
    dateArrivee: '',
    dateDepart:'',
    idEspece: '',
    idBassin: ''
  });

  onFormSubmit() {
    this.serviceAnimal.saveAnimal(this.animalForm.value);
  }
}
