import { Component, OnInit, NgZone } from '@angular/core';
import { Secteur } from 'src/app/interfaces/secteur';
import { Bassin } from 'src/app/interfaces/bassin';
import { FormBuilder } from '@angular/forms';
import { SecteurService } from 'src/app/services/secteur.service';
import { BassinService } from 'src/app/services/bassin.service';
import { EmployeService } from 'src/app/services/employe.service';
import { Employe } from 'src/app/interfaces/employe';
import { AffectationService } from 'src/app/services/affectation.service';

@Component({
  selector: 'app-form-add-affectation',
  templateUrl: './form-add-affectation.component.html',
  styleUrls: ['./form-add-affectation.component.css']
})
export class FormAddAffectationComponent implements OnInit {
  listSecteur : Array<Secteur>
  listBassin : Array<Bassin>
  listEmploye : Array<Employe>

  constructor(private ngZone: NgZone,
    private formBuilder: FormBuilder,
    private serviceEmploye : EmployeService,
    private serviceSecteur : SecteurService,
    private seviceBassin : BassinService,
    private serviceAffectation : AffectationService
    ) {

      this.serviceSecteur.getAll().subscribe(
        data => this.listSecteur = data,
        error => console.log(error))     
    
        this.seviceBassin.getAll().subscribe(
          data => this.listBassin = data,
          error => console.log(error)) 

          this.serviceEmploye.getAll().subscribe(
            data => this.listEmploye = data,
            error => console.log(error)) 
    
     }

  ngOnInit(): void {
  }

  affectationForm = this.formBuilder.group({
    idEmploye:'',
    idBassin: '',
    idSecteur: ''
  });


  onFormSubmit() {
    this.serviceAffectation.saveAffectation(this.affectationForm.value);
  }

}
