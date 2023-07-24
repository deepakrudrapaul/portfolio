import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './shared/ui/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/ui/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, FooterComponent],
  template: `
    <app-nav-bar />
    <router-outlet></router-outlet>
    <app-footer />
  `,
})
export class AppComponent {}
