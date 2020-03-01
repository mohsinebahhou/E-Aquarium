import { Injectable, NgModule } from '@angular/core';
import { Animal } from '../interfaces/animal';
import { HttpHeaders, HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

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



export class AnimalService {

  constructor(private http: HttpClient) { }

  saveAnimal(animal: any)  {
    console.log(animal);
    this.http.post("/animal",animal,httpOptions).subscribe(res => {     
      console.log(animal);
    },
    (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {				 
            console.log('An error occurred:', err.error.message);
          } else {			 
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
