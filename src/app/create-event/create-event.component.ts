import { Component } from '@angular/core';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {
  selectedOption: string = '';
  selectedOptions: string[] = [];
  availableOptions: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
}
