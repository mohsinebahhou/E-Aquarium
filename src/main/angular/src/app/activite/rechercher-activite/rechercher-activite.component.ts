import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActiviteService } from 'src/app/services/activite.service';
import { Observable } from 'rxjs';
import { Activite } from 'src/app/interfaces/activite';
import { MatTableDataSource } from '@angular/material/table';

export interface ActiviteSearch{
  jour: string,
  heureDebut: string
}


@Component({
  selector: 'app-rechercher-activite',
  templateUrl: './rechercher-activite.component.html',
  styleUrls: ['./rechercher-activite.component.css']
})
export class RechercherActiviteComponent implements OnInit {

  listActivite :  Array<Activite>;
  unlockArray : boolean = true

  constructor(private ngZone: NgZone,
    private formBuilder: FormBuilder,
    private serviceActivite : ActiviteService) {
      this.serviceActivite.getAll().subscribe(
        data => this.listActivite = data,
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


displayedColumns: string[] = ['nom', 'jour', 'heureDebut', 'heureFin', 'idBassin','idSecteur'];
dataSource :any

  onFormSubmit() {
    this.unlockArray=true
    var activiteSearch : ActiviteSearch = this.activiteForm.value
    this.serviceActivite.getActiviteByJourAndHeur(activiteSearch.jour,activiteSearch.heureDebut).subscribe(
      data => this.listActivite = data,
      error => console.log(error))  
      this.dataSource = new MatTableDataSource(this.listActivite);
  }

}
