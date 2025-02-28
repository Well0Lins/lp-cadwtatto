import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EventListComponent } from "../event-list/event-list.component";
import { FooterComponent } from "../../shared/componentes/footer/footer.component";
import { NavbarComponent } from "../../shared/componentes/navbar/navbar.component";
import { StorePageComponent } from "../store-page/store-page.component";

@Component({
  selector: 'app-home-page',
  imports: [
    CommonModule,
    EventListComponent,
    FooterComponent,
    NavbarComponent,
    StorePageComponent
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
