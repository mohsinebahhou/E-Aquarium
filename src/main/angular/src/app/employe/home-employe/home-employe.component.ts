import { Component, OnInit, Input, NgZone } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Employe } from 'src/app/interfaces/employe';
import { FormBuilder } from '@angular/forms';
import { EmployeService } from 'src/app/services/employe.service';


export interface loginForm{
  login: any
  password: any
}


@Component({
  selector: 'app-home-employe',
  templateUrl: './home-employe.component.html',
  styleUrls: ['./home-employe.component.css']
})
export class HomeEmployeComponent {


  Signin : boolean =false
  @Input() employe : Employe = {"id":-1,"nom":"","login":"","password":"","prenom":"","statut":"visiteur","dateNaissance":"","adresse":"","numSecuriteSocial":"","telephone":""}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private ngZone: NgZone,
    private formBuilder: FormBuilder,
    private serviceEmploye : EmployeService) {}



  employeForm = this.formBuilder.group({
    login:'',
    password: ''
  });



  onFormSubmit() {
    var loginform : loginForm
    loginform = this.employeForm.value
    console.log("login : " + loginform.login +"pwd : " + loginform.password);
    this.serviceEmploye.login(loginform.login,loginform.password).subscribe(
      data => this.employe = data,
      error => console.log(error))   
    this.Signin=true 
  }


  seDeconnecter(){
    this.Signin=false
    this.employe  = {"id":-1,"nom":"","login":"","password":"","prenom":"","statut":"visiteur","dateNaissance":"","adresse":"","numSecuriteSocial":"","telephone":""}
  }



}
