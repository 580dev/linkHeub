import { Component, OnInit } from '@angular/core';
import { AppService, EventModel } from '../app-service/app.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit{
  events!: EventModel[]

  constructor(private appService: AppService) {
    this.events = this.appService.getEvents()
  }

  ngOnInit(): void {
    
  }
}
