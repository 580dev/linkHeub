import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChoixInteretComponent } from './choix-interet/choix-interet.component';
import { CreateEventComponent } from './create-event/create-event.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'choix-interet', component: ChoixInteretComponent},
  {path: 'create-event', component: CreateEventComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
