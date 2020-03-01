import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-form-add-employe',
  templateUrl: './form-add-employe.component.html',
  styleUrls: ['./form-add-employe.component.css']
})
export class FormAddEmployeComponent implements OnInit {

  constructor(private ngZone: NgZone,
    private formBuilder: FormBuilder,
    private serviceEmploye : EmployeService) { }

  ngOnInit(): void {
  }


  employeForm = this.formBuilder.group({
    nom: '',
    prenom: '',
    login:'',
    password: '',
    adresse:'',
    telephone: '',
    dateNaissance: '',
    numSecuriteSocial: '',
    statut: ''
  });



  onFormSubmit() {
    this.serviceEmploye.saveEmploye(this.employeForm.value);
  }


  

}
