import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChoixInteretComponent } from './choix-interet/choix-interet.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'choix-interet', component: ChoixInteretComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
