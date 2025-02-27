import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EventListComponent } from "../event-list/event-list.component";
import { FooterComponent } from "../../shared/componentes/footer/footer.component";
import { NavbarComponent } from "../../shared/componentes/navbar/navbar.component";

@Component({
  selector: 'app-home-page',
  imports: [
    CommonModule,
    EventListComponent,
    FooterComponent,
    NavbarComponent
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
