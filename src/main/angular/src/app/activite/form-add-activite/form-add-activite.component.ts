import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActiviteService } from 'src/app/services/activite.service';

@Component({
  selector: 'app-form-add-activite',
  templateUrl: './form-add-activite.component.html',
  styleUrls: ['./form-add-activite.component.css']
})
export class FormAddActiviteComponent implements OnInit {

  constructor(private ngZone: NgZone,
    private formBuilder: FormBuilder,
    private serviceActivite : ActiviteService) {
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
