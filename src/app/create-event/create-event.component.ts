import { Component, OnInit } from '@angular/core';
import {EventModel} from "../model/event.model";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit{
  selectedOption: string = '';
  selectedOptions: string[] = [];
  availableOptions: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  imageDataUrl: any;

  event : EventModel = new EventModel();

  ngOnInit(): void {
    this.readImage()
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageDataUrl = reader.result as string;
        this.event.banner =this.imageDataUrl;

      };
      reader.readAsDataURL(file);
    }
  }

  readImage() {
    this.imageDataUrl = localStorage.getItem('image');
  }


  saveEvent() {
    localStorage.setItem('event', JSON.stringify(this.event));
    console.log(localStorage.getItem('event'))
    this.event = new EventModel();
  }
}
