import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Activite } from '../interfaces/activite';
import { Observable } from 'rxjs';

export interface ActiviteResponse {
	results?: Activite[]; 
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


export class ActiviteService {

  constructor(private http: HttpClient) { }

  saveActivite(activite: any)  {
    console.log(activite);
    this.http.post("/Activite",activite,httpOptions).subscribe(res => {     
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
  return this.http.get("/Activite")
}


getActiviteByJourAndHeur(jour : any , heure : any): Observable<any> {
  return this.http.get("/SearchActivite/" + jour+"/"+heure)
}

}
