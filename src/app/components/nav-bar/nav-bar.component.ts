import { CommonModule } from "@angular/common";
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AppConstants } from "../../shared/utils/app-constants";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  toggle: boolean = false;
  navLinks = AppConstants.NavLinks;
  icons = AppConstants.Icon;



  toggleMenu() {
    this.toggle = !this.toggle;
  }

}
