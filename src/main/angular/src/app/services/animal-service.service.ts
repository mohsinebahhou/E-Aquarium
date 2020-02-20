import { Injectable, NgModule } from '@angular/core';
import { Animal } from 'src/app/interfaces/animal';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientModule,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { error } from 'util';


export interface AnimalResponse {
	results?: Animal[]; 
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


@NgModule({
  imports: [
      HttpClientModule
  ]
})


export class AnimalServiceService {


  constructor(private http: HttpClient) { }

  saveAnimal(animal: any)  {
    console.log(animal);
    this.http.post("/animal",animal,httpOptions).subscribe(res => {     
      console.log(animal);
    },
    (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            //A client-side or network error occurred.				 
            console.log('An error occurred:', err.error.message);
          } else {
            //Backend returns unsuccessful response codes such as 404, 500 etc.				 
            console.log('Backend returned status code: ', err.status);
            console.log('Response body:', err.error);
          }
        }
    );
 }

 getAll(): Observable<any> {
  return this.http.get("/animal")
}
}
