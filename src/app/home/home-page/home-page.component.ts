import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EventListComponent } from "../event-list/event-list.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { BannerComponent } from "../banner/banner.component";
import { NavbarComponent } from "../../shared/navbar/navbar.component";

@Component({
  selector: 'app-home-page',
  imports: [
    CommonModule,
    EventListComponent,
    FooterComponent,
    BannerComponent,
    NavbarComponent
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
