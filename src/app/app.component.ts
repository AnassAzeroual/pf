import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimatedSectionComponent } from './animated-section/animated-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AnimatedSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pf';
}
