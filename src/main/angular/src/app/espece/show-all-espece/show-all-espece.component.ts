import { Component, OnInit } from '@angular/core';
import { EspeceService } from 'src/app/services/espece.service';
import { Observable, Subscription } from 'rxjs';
import { Animal } from 'src/app/interfaces/animal';
import { Espece } from 'src/app/interfaces/espece';



export interface ShowEspece  {
  espece : Espece;
  nbrPensionnaires : any;
  listAnimals : any;
}


@Component({
  selector: 'app-show-all-espece',
  templateUrl: './show-all-espece.component.html',
  styleUrls: ['./show-all-espece.component.css']
})


export class ShowAllEspeceComponent implements OnInit {
  

  listShowEspece : Array<ShowEspece>=[];



  constructor(private servcieEspece : EspeceService) { 
   }

  ngOnInit(): void {
    this.servcieEspece.getPensionnairesByEspece().subscribe(
      data => this.listShowEspece = data,
      error => console.log(error)) 
  }



}
