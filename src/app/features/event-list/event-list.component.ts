import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { link } from 'fs';
import { CardComponent } from "../../shared/componentes/card/card.component";

@Component({
  selector: 'app-event-list',
  imports: [CommonModule, CardComponent],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss'
})
export class EventListComponent implements OnInit {
 
  events = [
    {title: 'Penumbra', description: 'https://drive.google.com/drive/folders/16lNEDc36bqUyi3QAxogYV0cF_xdiWjgx' },
    {title: 'Ressonância', description: 'https://drive.google.com/drive/folders/1aDqMNIfRoS24nXNilp0WOkeZdwBvaphq' },
    {title: 'Penumbra', description: 'https://drive.google.com/drive/folders/16lNEDc36bqUyi3QAxogYV0cF_xdiWjgx' },
    {title: 'Ressonância', description: 'https://drive.google.com/drive/folders/1aDqMNIfRoS24nXNilp0WOkeZdwBvaphq' },
    {title: 'Penumbra', description: 'https://drive.google.com/drive/folders/16lNEDc36bqUyi3QAxogYV0cF_xdiWjgx' },
    {title: 'Ressonância', description: 'https://drive.google.com/drive/folders/1aDqMNIfRoS24nXNilp0WOkeZdwBvaphq' },
    {title: 'Penumbra', description: 'https://drive.google.com/drive/folders/16lNEDc36bqUyi3QAxogYV0cF_xdiWjgx' },
    {title: 'Ressonância', description: 'https://drive.google.com/drive/folders/1aDqMNIfRoS24nXNilp0WOkeZdwBvaphq' },
    {title: 'Penumbra', description: 'https://drive.google.com/drive/folders/16lNEDc36bqUyi3QAxogYV0cF_xdiWjgx' },
    {title: 'Ressonância', description: 'https://drive.google.com/drive/folders/1aDqMNIfRoS24nXNilp0WOkeZdwBvaphq' }
  ]
  limite = 3;

  constructor() {}

  ngOnInit(): void {}

  mostrarMais() {
    this.limite += 3;
  }
}
