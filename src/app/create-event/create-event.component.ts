import { Component, OnInit } from '@angular/core';
import {AppService, EventModel, Interet} from "../app-service/app.service";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit{

  constructor(private appService : AppService) {}

  selectedOption?: number;
  selectedOptions: Interet[] = [];
  availableOptions!: Interet[]
  imageDataUrl: any;

  title: string = ""
  description: string = ""

  notif: boolean = false;

  ngOnInit(): void {
    // this.readImage()
    this.availableOptions = this.appService.getInterets();
  }

  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];

  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       this.imageDataUrl = reader.result as string;
  //       // this.event.image =this.imageDataUrl;

  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }

  readImage() {
    // this.imageDataUrl = localStorage.getItem('image');
  }


  saveEvent() {
    const interet = this.availableOptions.find(item => item.id == this.selectedOption)!
    let event : EventModel = {
      interet: interet,
      titre: this.title,
      description: this.description,
    }
    console.log(event)
    this.appService.addEvent(event)
    this.notif=true;
  }
}
