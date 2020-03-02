import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Activite } from '../interfaces/activite';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


export class AffectationService {
  constructor(private http: HttpClient) { }

  saveAffectation(activite: any)  {
    console.log(activite);
    this.http.post("/Affectation",activite,httpOptions).subscribe(res => {     
      console.log(activite);
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
  return this.http.get("/Affectation")
}
}
