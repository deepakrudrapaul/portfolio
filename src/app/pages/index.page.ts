import { Component } from '@angular/core';
import { AppConstants } from '../shared/utils/app-constants';
import { NgFor } from '@angular/common';
import { TimelineComponent } from '../shared/ui/timeline/timeline.component';
import { FooterComponent } from '../shared/ui/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [NgFor, TimelineComponent, FooterComponent],
  standalone: true,
  template: `
    <section class="h-screen bg-primary relative z-0">
      <div class="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto">
        <div class="mt-20">
          <div class="flex flex-row justify-between gap-5 items-center mt-20">
            <h2
              class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
            >
              Hello, <br />
              I'm <span class="text-tertiary">Deepak</span>
            </h2>
          </div>

          <div class="mt-20 text-secondary text-[20px] max-w-3xl">
            I am a web developer with experience in TypeScript and JavaScript,
            and expertise in frameworks like React, Angular, Angular JS, and
            Node.js.
            <p class="mt-5">
              <strong>Let's work together to bring IDEAS to LIFE.</strong>
            </p>
          </div>
          <div class="flex mt-20 gap-5">
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

          <div class="mt-20">
            <button
              type="button"
              class="text-white bg-black-100 hover:bg-gray-900 focus:outline-none focus:ring-1 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="h-screen bg-primary relative z-0">
      <div class="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto ">
        <div>
          <h2
            class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
          >
            Work Experience.
          </h2>
        </div>

        <div class="mt-20 ml-5">
          <app-timeline [events]="work" />
        </div>
      </div>
    </section>
  `,
})
export default class HomeComponent {
  icons = AppConstants.Icon;
  services = AppConstants.Services;
  work = AppConstants.Work;
}
