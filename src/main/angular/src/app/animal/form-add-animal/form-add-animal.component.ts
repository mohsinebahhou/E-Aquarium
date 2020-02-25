import { Component, OnInit, Input, NgZone } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AnimalService, AnimalResponse } from 'src/app/services/animal.service';
import { Observable } from 'rxjs';
import { Animal } from 'src/app/interfaces/animal';



@Component({
  selector: 'app-form-add-animal',
  templateUrl: './form-add-animal.component.html',
  styleUrls: ['./form-add-animal.component.css']
})
export class FormAddAnimalComponent implements OnInit {

  listAnimal : Observable<Animal>;

  constructor(private ngZone: NgZone,
    private formBuilder: FormBuilder,
    private serviceAnimal : AnimalService) {
      this.serviceAnimal.getAll().subscribe(
        data => this.listAnimal = data,
        error => console.log("Erreur "+error)   
        )
     }



    Show(){
      console.log("@@@@@@@@@@@@@@@@@@@@@@@@@")
      console.log("show"+this.listAnimal)
      this.listAnimal.forEach(element => {
        console.log(element)
      });
    } 


  

  ngOnInit() {
/*
    console.log("---------ngOnInit-------------")
    this.serviceAnimal.getAll().subscribe(
      data => this.listAnimal = data,
      error => console.log("Erreur "+error)   
      )
    console.log("#############################################")
    //console.log("ngOninit"+this.listAnimal)
    this.Show();
    console.log("---------ngOnInit-------------")
*/
    
  }

  ngAfterViewInit(){
    /*
    console.log("---------ngAfterViewInit-------------")
    this.serviceAnimal.getAll().subscribe(
      data => this.listAnimal = data,
      error => console.log("Erreur "+error)   
      )
    console.log("#############################################")
    console.log("ngAfterViewInit"+this.listAnimal)
    this.Show();
    console.log("---------ngAfterViewInit-------------")

    */
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
