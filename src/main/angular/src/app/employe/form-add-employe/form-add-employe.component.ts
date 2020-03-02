import { Component, OnInit, NgZone, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployeService } from 'src/app/services/employe.service';
import { Employe } from 'src/app/interfaces/employe';

@Component({
  selector: 'app-form-add-employe',
  templateUrl: './form-add-employe.component.html',
  styleUrls: ['./form-add-employe.component.css']
})
export class FormAddEmployeComponent implements OnInit {
   employe : any = {"id":-1,"nom":"","login":"","password":"","prenom":"","statut":"visiteur","dateNaissance":"","adresse":"","numSecuriteSocial":"","telephone":""}
   pseudo : string
  constructor(private ngZone: NgZone,
    private formBuilder: FormBuilder,
    private serviceEmploye : EmployeService) { 
      this.employe=this.serviceEmploye.employe
      this.pseudo=this.serviceEmploye.pseudo
    }


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

  connecter(){
    console.log("Test connceter")
    this.employe=this.serviceEmploye.employe
    console.log("Test connceter " + this.employe)
    this.pseudo=this.serviceEmploye.pseudo
  }



  onFormSubmit() {
    this.serviceEmploye.saveEmploye(this.employeForm.value);
  }



}
