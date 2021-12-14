import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAjoutComponent } from './form-ajout/form-ajout.component';
import { TableauEvenementComponent } from './tableau-evenement/tableau-evenement.component';
import { StatsPrixMoyenComponent } from './stats-prix-moyen/stats-prix-moyen.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'formajout', component: FormAjoutComponent }, 
  { path: 'tableauEvenement', component: TableauEvenementComponent },
  { path: '', component: StatsPrixMoyenComponent },  
  { path: 'user', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
