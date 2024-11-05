import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [
    trigger('slideInOut', [
      state('void', style({
        transform: 'translateX(-100%)'
      })),
      transition('void <=> *', animate(1000)),
    ])
  ]
})
export class AboutComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
