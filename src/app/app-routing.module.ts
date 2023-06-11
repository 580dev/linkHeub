import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChoixInteretComponent } from './choix-interet/choix-interet.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { ListInteretComponent } from './list-interet/list-interet.component';
import {ListEventComponent} from "./list-event/list-event.component";


const routes: Routes = [
  {path: '', component: LoginComponent},
  {
    path: 'student', children: [
      {path: 'choix-interet', component: ChoixInteretComponent},
      {path: 'create-event', component: CreateEventComponent},
      // {path: 'list-event', component: ListEventComponent},
    ]
  },
  {
    path: 'admin', children: [
      {path: 'list-interet', component: ListInteretComponent},
      {path: 'create-event', component: CreateEventComponent},
      {path: 'list-event', component: ListEventComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
