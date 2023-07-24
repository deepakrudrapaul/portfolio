import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppConstants } from '../../utils/app-constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-primary relative z-0">
      <div
        class="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl border-t border-gray-800 mx-auto "
      >
        <div>
          <ol class="flex justify-center gap-10">
            <li>About</li>
            <li>Work</li>
            <li>Blog</li>
            <li>Contact</li>
          </ol>

          <div class="flex justify-center gap-5 py-5">
            <div
              class="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                [src]="icons.github"
                alt="Github"
                class="w-1/2 h-1/2 object-contain"
              />
            </div>

            <div
              class="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                [src]="icons.twitter"
                alt="Twitter"
                class="w-1/2 h-1/2 object-contain"
              />
            </div>
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
}
