import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choix-interet',
  templateUrl: './choix-interet.component.html',
  styleUrls: ['./choix-interet.component.css']
})
export class ChoixInteretComponent {
  selectedOption: string = '';
  selectedOptions: string[] = [];
  availableOptions: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  constructor(private router: Router) {}

  onSubmit() {
    if (this.selectedOption) {
      this.selectedOptions.push(this.selectedOption);
      this.selectedOption = '';
    }
  }

  removeOption(option: string) {
    const index = this.selectedOptions.indexOf(option);
    if (index !== -1) {
      this.selectedOptions.splice(index, 1);
    }
  }

  saveInteret() {
    this.router.navigate(['create-event'])
  }
}
