import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { AnimalService } from 'src/app/services/animal.service';
import { Animal } from 'src/app/interfaces/animal';



const  ELEMENT_DATA: Animal[] = [];

@Component({
  selector: 'app-show-animals',
  templateUrl: './show-animals.component.html',
  styleUrls: ['./show-animals.component.css']
})
export class ShowAnimalsComponent implements OnInit {
   listAnimal : Array<Animal>

  constructor(private serviceAnimals : AnimalService) { 
    this.serviceAnimals.getAll().subscribe(
      data => this.listAnimal = data,
      error => console.log(error)) 
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  ngOnInit(): void {
    this.serviceAnimals.getAll().subscribe(
      data => this.listAnimal = data,
      error => console.log(error)) 
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }






  displayedColumns: string[] = ['nom', 'sex', 'signeDistinctif', 'dateArrivee', 'dateDepart'];
  dataSource :any

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log("Key" + filterValue)
    let animals : Array<Animal>
    this.listAnimal.forEach(a => {
      if(a.nom==filterValue ||a.sex==filterValue  || a.signeDistinctif==filterValue || a.dateArrivee==filterValue || a.dateDepart==filterValue){
        animals.push(a)
      }
    });
    this.listAnimal=animals
  }


  show(){
    this.listAnimal.forEach(a => {
      console.log("animal " + a);
    });
  }

}
