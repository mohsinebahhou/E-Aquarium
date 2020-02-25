import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientModule,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bassin } from '../interfaces/bassin';


export interface BassinResponse {
	results?: Bassin[]; 
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


export class BassinServiceService {

  constructor(private http: HttpClient) { }

  saveBassin(bassin: any)  {
    console.log(bassin);
    this.http.post("/Bassin",bassin,httpOptions).subscribe(res => {     
      console.log(bassin);
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
  return this.http.get("/Bassin")
}
}
