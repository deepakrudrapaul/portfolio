import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { AppConstants } from "../../shared/utils/app-constants";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  icons = AppConstants.Icon;


}
