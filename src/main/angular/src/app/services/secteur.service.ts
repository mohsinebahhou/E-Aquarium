import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientModule,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


export class SecteurService {

  constructor(private http: HttpClient) { }

  saveSecteur(bassin: any)  {
    console.log(bassin);
    this.http.post("/Secteur",bassin,httpOptions).subscribe(res => {     
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
  return this.http.get("/Secteur")
}
}
