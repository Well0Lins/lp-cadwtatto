import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { link } from 'fs';
import { CardComponent } from "../../shared/componentes/card/card.component";

@Component({
  selector: 'app-event-list',
  imports: [CommonModule, CardComponent],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss'
})
export class EventListComponent {
  events = [
    {title: 'Penumbra', link: 'https://drive.google.com/drive/folders/16lNEDc36bqUyi3QAxogYV0cF_xdiWjgx' },
    {title: 'Ressonância', link: 'https://drive.google.com/drive/folders/1aDqMNIfRoS24nXNilp0WOkeZdwBvaphq' }
  ]
}
