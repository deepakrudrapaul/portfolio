import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports:[],
  standalone: true,
  template:`
  <section class="h-screen bg-primary relative z-0">
    <div class="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto">
        <h2 class="mt-12">Contact Page</h2>
    </div>
  </section>
  `
})
export default class ContactComponent {
  
}
