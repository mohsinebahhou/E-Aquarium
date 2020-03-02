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

  employe : any = {"id":-1,"nom":"","login":"","password":"","prenom":"","statut":"visiteur","dateNaissance":"","adresse":"","numSecuriteSocial":"","telephone":""}


  pseudo : string="none"
  constructor(private http: HttpClient) { }

  saveEmploye(bassin: any)  {
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


getMOHSINE(): Observable<any> {
  return this.http.get("/Employe/9")
}


login(login : any , pwd : any): Observable<any> {
  return this.http.get("/Login/" +login +"/"+pwd)
}


onConnect(e : any){
  console.log("callOncect : " + e)
  this.employe=e
  this.pseudo="onnnnn"
}

onDisconnected(){
  this.employe== {"id":-1,"nom":"","login":"","password":"","prenom":"","statut":"visiteur","dateNaissance":"","adresse":"","numSecuriteSocial":"","telephone":""}
  this.pseudo="none"
}
}
