import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private router: Router){}

  login() {
    // Ajoutez ici le code pour gérer la connexion
    console.log('email:', this.email);
    console.log('Mot de passe:', this.password);

    this.router.navigate(['choix-interet'])
  }
}
