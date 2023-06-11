import { Component, OnInit } from '@angular/core';
import {AppService, EventModel, Interet} from "../app-service/app.service";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit{

  constructor(private appService : AppService) {
  }
  selectedOption!: Interet;
  selectedOptions: Interet[] = [];
  availableOptions: Interet[] = this.appService.getInterets();
  imageDataUrl: any;

  event : EventModel = {
    id: 1,
    titre: "",
    description: "",
    date: "",
    interet: {
      id: 1,
      libelle: "Randonnée"
    }
  }
  notif: boolean = false;

  ngOnInit(): void {
    this.readImage()
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageDataUrl = reader.result as string;
        this.event.image =this.imageDataUrl;

      };
      reader.readAsDataURL(file);
    }
  }

  readImage() {
    this.imageDataUrl = localStorage.getItem('image');
  }


  saveEvent() {
    this.event.interet = this.selectedOption;
    this.appService.addEvent(this.event)
    this.notif=true;
  }
}
