import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [
    trigger('bounceInOut', [
      state('void', style({
        transform: 'scale(0)'
      })),
      transition('void <=> *', animate(1000, style({ transform: 'scale(1.2)' }))),
    ])
  ]
})
export class ContactComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}