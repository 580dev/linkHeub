import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-interet',
  templateUrl: './list-interet.component.html',
  styleUrls: ['./list-interet.component.css']
})
export class ListInteretComponent {

  constructor(private router: Router) {}

  goToCreateEvent() {
    this.router.navigate(['admin/create-event'])
  }
}
