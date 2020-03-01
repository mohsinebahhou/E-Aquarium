import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormAddAnimalComponent } from './animal/form-add-animal/form-add-animal.component';
import { FormAddEspeceComponent } from './espece/form-add-espece/form-add-espece.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormAddActiviteComponent } from './activite/form-add-activite/form-add-activite.component';
import { EmploiDuTempsComponent } from './employe/emploi-du-temps/emploi-du-temps.component';
import { ShowAnimalsComponent } from './animal/show-animals/show-animals.component';
import { ShowAllEspeceComponent } from './espece/show-all-espece/show-all-espece.component';


const routes: Routes = [
  { path: 'AddAnimal', component: FormAddAnimalComponent},
  { path: 'AddEspece',        component: FormAddEspeceComponent },
  { path: 'AjouterActivite',        component: FormAddActiviteComponent },
  { path: 'EmploiDuTemps',        component: EmploiDuTempsComponent },
  { path: 'AfficherTousLesAnimaux',        component: ShowAnimalsComponent },
  { path: 'AfficherTousLesEspeces',        component: ShowAllEspeceComponent },
  { path: '',   redirectTo: '/AddAnimal', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];


/*
const appRoutes: Routes = [

]; 

*/



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/*
const appRoutes: Routes = [
  { path: 'AddAnimal', component: FormAddAnimalComponent},
  { path: 'AddBassin',        component: FormAddBassinComponent},
  { path: 'AddEspece',        component: FormAddEspeceComponent },
  { path: '',   redirectTo: '/AddAnimal', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

*/

