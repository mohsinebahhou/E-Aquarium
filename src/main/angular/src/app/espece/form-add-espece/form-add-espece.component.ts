import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { EspeceService } from 'src/app/services/espece.service';

@Component({
  selector: 'app-form-add-espece',
  templateUrl: './form-add-espece.component.html',
  styleUrls: ['./form-add-espece.component.css']
})
export class FormAddEspeceComponent implements OnInit {


  constructor(private ngZone: NgZone,
    private formBuilder: FormBuilder,
    private especeService : EspeceService) { }

  ngOnInit(): void {
  }


  especeForm = this.formBuilder.group({
    nom: '',
    esperanceVie: '',
    regimeAlimentaire:'',
    niveauMenace: ['', [Validators.min(0), Validators.max(10)]]
  });

 
  onFormSubmit() {
    this.especeService.saveEspece(this.especeForm.value);
  }

}
