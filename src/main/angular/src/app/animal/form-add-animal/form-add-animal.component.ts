import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Animal } from 'src/app/interfaces/animal';
import { FormControl, FormBuilder } from '@angular/forms';
import { AnimalServiceService, AnimalResponse } from 'src/app/services/animal-service.service';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-form-add-animal',
  templateUrl: './form-add-animal.component.html',
  styleUrls: ['./form-add-animal.component.css']
})
export class FormAddAnimalComponent implements OnInit {

 
  constructor(private ngZone: NgZone,
    private formBuilder: FormBuilder,
    private serviceAddAnimalService: AnimalServiceService) {
      this.serviceAddAnimalService.getAll().subscribe(
        data => this.listAnimal = data,
        error => console.log(error))

     }

    listAnimal : Observable<AnimalResponse>;

  ngOnInit() {
  }

  personForm = this.formBuilder.group({
    nom: '',
    sex: '',
    signeDistinctif:'',
    dateArrivee: '',
    dateDepart:'',
    idEspece: '',
    idBassin: ''
  });

  onFormSubmit() {
    this.serviceAddAnimalService.saveAnimal(this.personForm.value);
    //this.serviceAddAnimalService.saveAnimal(a);
  }

}
