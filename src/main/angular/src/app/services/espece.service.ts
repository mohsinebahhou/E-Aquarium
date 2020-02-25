import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientModule,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bassin } from '../interfaces/bassin';
import { Espece } from '../interfaces/espece';


export interface EspeceResponse {
	results?: Espece[]; 
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
  return this.http.get("/Espece")
}
}
