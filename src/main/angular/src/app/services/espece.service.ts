import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientModule,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bassin } from '../interfaces/bassin';
import { Espece } from '../interfaces/espece';
import { Animal } from '../interfaces/animal';


export interface EspeceResponse {
	results?: Espece[]; 
}


export interface ShowEspece  {
  espece : Espece;
  nbrPensionnaires : number;
  listAnimals : Array<Animal>;
}


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


export class EspeceService {




  constructor(private http: HttpClient) { }

  saveEspece(espece: any)  {
    console.log(espece);
    this.http.post("/Espece",espece,httpOptions).subscribe(res => {     
      console.log(espece);
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
   console.log("Call getAll")
  return this.http.get("/Espece")
}

getPensionnairesByEspece() : Observable<any>{
  return this.http.get("/Pensionnaires");
}



}
