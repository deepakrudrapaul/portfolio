import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppConstants } from '../../shared/utils/app-constants';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="bg-primary relative z-0">
      <div
        class="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl border-t border-gray-800 mx-auto "
      >
        <div>
          <ol class="flex justify-center gap-10">
          <li *ngFor="let link of navLinks"  [ngClass]="{'text-white': true, 'text-secondary': false}" class="hover:text-orange-300 text-[18px] font-medium cursor-pointer">
            <a *ngIf="!link.external" [routerLink]="[link.path]">{{link.title}}</a>
            <a *ngIf="link.external" target="_blank" href="{{link.path}}">{{link.title}}</a>
        </li>
          </ol>

          <div class="flex justify-center gap-5 py-5">
            <a href="https://github.com/deepakrudrapaul" target="_blank">
            <div
              class="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                [src]="icons.github"
                alt="Github"
                class="w-1/2 h-1/2 object-contain"
              />
            </div>
          </a>

            <a href="https://www.linkedin.com/in/deepak-rudra-paul/" target="_blank">
            <div
              class="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                [src]="icons.linkedin"
                alt="Github"
                class="w-1/2 h-1/2 object-contain"
              />
            </div>
          </a>

            <a href="https://twitter.com/deepakrudrapaul" target="_blank">
            <div
              class="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                [src]="icons.twitter"
                alt="Twitter"
                class="w-1/2 h-1/2 object-contain"
              />
            </div>
          </a>
          </div>

          <div class="flex justify-center">
            <p class="order-1 text-base">© 2023 Deepak Paul</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class FooterComponent {
  icons = AppConstants.Icon;
  navLinks = AppConstants.NavLinks;
}
