import { Component } from '@angular/core';
import { NgOptimizedImage, provideCloudinaryLoader } from '@angular/common';
import { RouterLink } from "@angular/router";
import { AppConstants } from "../../shared/utils/app-constants";

@Component({
  selector: 'app-hero',
  standalone: true,
  providers:[provideCloudinaryLoader("https://res.cloudinary.com/deepak-paul")],
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  icons = AppConstants.Icon;


}
