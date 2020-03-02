import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActiviteService } from 'src/app/services/activite.service';
import { AnimalService } from 'src/app/services/animal.service';
import { SecteurService } from 'src/app/services/secteur.service';
import { BassinService } from 'src/app/services/bassin.service';
import { Secteur } from 'src/app/interfaces/secteur';
import { Bassin } from 'src/app/interfaces/bassin';

@Component({
  selector: 'app-form-add-activite',
  templateUrl: './form-add-activite.component.html',
  styleUrls: ['./form-add-activite.component.css']
})
export class FormAddActiviteComponent implements OnInit {
  listSecteur : Array<Secteur>
  listBassin : Array<Bassin>

  constructor(private ngZone: NgZone,
    private formBuilder: FormBuilder,
    private serviceActivite : ActiviteService,
    private serviceSecteur : SecteurService,
    private seviceBassin : BassinService,
    ) {

      this.serviceSecteur.getAll().subscribe(
        data => this.listSecteur = data,
        error => console.log(error))     
    
        this.seviceBassin.getAll().subscribe(
          data => this.listBassin = data,
          error => console.log(error)) 
    
     }

  ngOnInit(): void {
  }


  activiteForm = this.formBuilder.group({
    nom: '',
    jour: '',
    heureDebut:'',
    heureFin: '',
    activitePublic:'',
    idBassin: '',
    idSecteur: ''
  });


  onFormSubmit() {
    this.serviceActivite.saveActivite(this.activiteForm.value);
  }


}
