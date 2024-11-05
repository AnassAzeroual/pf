import { trigger, state, style, transition, animate } from '@angular/animations';
import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  animations: [
    trigger('scaleInOut', [
      state('void', style({
        transform: 'scale(0)'
      })),
      transition('void <=> *', animate(1000)),
    ])
  ]
})
export class ProjectsComponent implements OnInit {
  projects = [
    { name: 'Project 1', description: 'Description of Project 1.', image: 'https://via.placeholder.com/300' },
    { name: 'Project 2', description: 'Description of Project 2.', image: 'https://via.placeholder.com/300' },
    { name: 'Project 3', description: 'Description of Project 3.', image: 'https://via.placeholder.com/300' },
  ];

  constructor() { }

  ngOnInit(): void { }
}
