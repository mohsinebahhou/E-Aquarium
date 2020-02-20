import { Component, OnInit, Input, NgZone } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { EspeceServiceService, EspeceResponse } from 'src/app/services/espece-service.service';

@Component({
  selector: 'app-form-add-espece',
  templateUrl: './form-add-espece.component.html',
  styleUrls: ['./form-add-espece.component.css']
})
export class FormAddEspeceComponent implements OnInit {

  constructor(private ngZone: NgZone,
    private formBuilder: FormBuilder,
    private serviceEspece: EspeceServiceService) {
      this.serviceEspece.getAll().subscribe(
        data => this.listEspece = data,
        error => console.log(error))
     }

    listEspece : Observable<EspeceResponse>;

  ngOnInit() {
  }

  especeForm = this.formBuilder.group({
    nom: '',
    esperanceVie: '',
    regimeAlimentaire:'',
    niveauMenace: ''
  });


  onFormSubmit() {
    this.serviceEspece.saveEspece(this.especeForm.value);
  }

}
