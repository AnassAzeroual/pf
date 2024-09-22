import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animated-section',
  standalone: true,
  imports: [],
  templateUrl: './animated-section.component.html',
  styleUrl: './animated-section.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ])
  ]
})


export class AnimatedSectionComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
