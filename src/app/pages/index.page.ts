import { Component } from '@angular/core';
import { AppConstants } from '../shared/utils/app-constants';
import { NgFor } from '@angular/common';
import { TimelineComponent } from '../components/timeline/timeline.component';
import { HeroComponent } from "../components/hero/hero.component";

@Component({
  selector: 'app-home',
  imports: [NgFor, HeroComponent, TimelineComponent],
  standalone: true,
  template: `
    
    <app-hero/>

    <section class="min-h-screen bg-primary relative z-0">
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


    <section class="h-screen bg-primary relative z-0">
      <div class="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto ">
        <div>
          <h2
            class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
          >
            Open Source.
          </h2>
        </div>

        <div class="mt-20 ml-5">
        <img src="https://github-readme-stats.vercel.app/api?username=deepakrudrapaul&show_icons=true&theme=transparent&hide=contribs" alt="Github stats">
        <!-- <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=deepakrudrapaul&theme=transparent" alt="Top languages"/>   -->
      </div>
      </div>
    </section>
  `,
})
export default class HomeComponent {
  services = AppConstants.Services;
  work = AppConstants.Work;
}
