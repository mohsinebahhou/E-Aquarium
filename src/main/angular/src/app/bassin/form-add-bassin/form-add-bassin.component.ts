import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Animal } from 'src/app/interfaces/animal';
import { FormControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { BassinServiceService, BassinResponse } from 'src/app/services/bassin-service.service';

@Component({
  selector: 'app-form-add-bassin',
  templateUrl: './form-add-bassin.component.html',
  styleUrls: ['./form-add-bassin.component.css']
})
export class FormAddBassinComponent implements OnInit {

  constructor(private ngZone: NgZone,
    private formBuilder: FormBuilder,
    private serviceBassin: BassinServiceService) {
      this.serviceBassin.getAll().subscribe(
        data => this.listBassin = data,
        error => console.log(error))

     }

    listBassin : Observable<BassinResponse>;

  ngOnInit() {
  }

  bassinForm = this.formBuilder.group({
    nom: '',
    capacite: '',
    volume:'',
    etat: ''
  });



  onFormSubmit() {
    this.serviceBassin.saveBassin(this.bassinForm.value);
  }
}
