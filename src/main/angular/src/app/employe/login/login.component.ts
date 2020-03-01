import { Component, OnInit, NgZone, Output ,EventEmitter} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployeService } from 'src/app/services/employe.service';
import { Employe } from 'src/app/interfaces/employe';
import { Observable } from 'rxjs';




export interface loginForm{
  login: any
  password: any
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  employe : Employe = {"id":-1,"nom":"","login":"","password":"","prenom":"","statut":"client","dateNaissance":"","adresse":"","numSecuriteSocial":"","telephone":""}
  mohsine : Employe
  list : Array<Employe>
  listeee : Array<Employe>

  @Output() loginEvent = new EventEmitter<Employe>();


  constructor(private ngZone: NgZone,
    private formBuilder: FormBuilder,
    private serviceEmploye : EmployeService) {
      this.serviceEmploye.getAll().subscribe(
        data => this.list= data,
        error => console.log(error))

        this.serviceEmploye.getMOHSINE().subscribe(
          data => this.mohsine= data,
          error => console.log(error))
     }

  ngOnInit(): void {
  }


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

      let clonedEmploye = Object.assign({}, this.employe); 
      this.loginEvent.emit(clonedEmploye);
      /*
    console.log(this.employe)
    console.log(this.employe.id)
    console.log(this.employe.nom)
*/
    

   
  }
}
