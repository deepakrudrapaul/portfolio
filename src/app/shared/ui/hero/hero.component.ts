import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppConstants } from "../../utils/app-constants";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  icons = AppConstants.Icon;


}
