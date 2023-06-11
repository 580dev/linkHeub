import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService, ROLE_USER } from '../app-service/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email?: string;
  password?: string;

  constructor(private router: Router, private appServeice: AppService){}

  login() {
    const user = this.appServeice.findUserByEmail(this.email!)
    if(this.email === user?.email && this.password === user?.password) {
      if(user?.role === ROLE_USER.BDE) {
        this.router.navigate(['admin/list-event'])
      } else {
        this.router.navigate(['student/choix-interet'])
      }
      localStorage.setItem("currentUser", JSON.stringify(user))
    } else {
      alert("Email ou Password incorrect!")
    }
    
  }
}
