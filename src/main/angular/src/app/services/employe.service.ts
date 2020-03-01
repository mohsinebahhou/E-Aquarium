import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientModule,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employe } from '../interfaces/employe';


export interface EmployeResponse {
	results?: Employe[]; 
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


export class EmployeService {

  constructor(private http: HttpClient) { }

  sabeEmploye(bassin: any)  {
    console.log(bassin);
    this.http.post("/Employe",bassin,httpOptions).subscribe(res => {     
      console.log(bassin);
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
  return this.http.get("/Employe")
}
}
