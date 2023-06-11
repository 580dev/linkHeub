import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hackaton';

  ngOnInit(): void {
    localStorage.setItem('events', JSON.stringify([]));
    localStorage.setItem('interets', JSON.stringify([{id: 1, libelle:'Randonnée'}, {id:2, libelle:'Music'}, {id:3, libelle:'Mode'}, {id:4, libelle:'MMA'}]));

  }
}
