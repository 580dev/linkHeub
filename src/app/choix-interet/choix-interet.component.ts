import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService, Interet } from '../app-service/app.service';

@Component({
  selector: 'app-choix-interet',
  templateUrl: './choix-interet.component.html',
  styleUrls: ['./choix-interet.component.css']
})
export class ChoixInteretComponent {
  selectedOption?: number;
  selectedOptions:  Interet[] = [];
  availableOptions:  Interet[] = [];

  constructor(private router: Router, private appService: AppService) {
    this.availableOptions = this.appService.centreInterets
  }

  onSubmit() {
    if (this.selectedOption) {
      let option: Interet = this.availableOptions.find(item => item.id == this.selectedOption)!
      this.selectedOption = undefined;
      this.selectedOptions.push(option);
    }
  }

  removeOption(index: number) {
      this.selectedOptions.splice(index, 1);
  }

  saveInteret() {
    const user = JSON.parse(localStorage.getItem('currentUser')!)
    this.appService.addInteretsToUser(this.selectedOptions, user.id)
    // localStorage.setItem('interests', JSON.stringify(this.selectedOptions));
    // console.log(localStorage.getItem('interests'));
    this.router.navigate(['student/create-event'])
  }
}
