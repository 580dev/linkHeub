import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ChoixInteretComponent } from './choix-interet/choix-interet.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { ListInteretComponent } from './list-interet/list-interet.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChoixInteretComponent,
    CreateEventComponent,
    ListInteretComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
