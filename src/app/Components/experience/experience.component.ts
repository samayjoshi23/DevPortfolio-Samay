import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  expStats: any[] = [
    {
      icon: 'ico',
      title: '12+',
      description: 'Years of experience',
    },
    {
      icon: 'ico',
      title: '18+',
      description: 'Clients',
    },
    {
      icon: 'ico',
      title: '120+',
      description: 'Projects done',
    },
    {
      icon: 'ico',
      title: '6+',
      description: 'Awards winner',
    },
  ];

  offerings: any[] = [
    {
      icon: 'icon',
      title: 'Web developement',
      description: 'here is the description for the current section.',
    },
    {
      icon: 'icon',
      title: 'Database management',
      description: 'here is the description for the current section.',
    },
    {
      icon: 'icon',
      title: 'API development',
      description: 'here is the description for the current section.',
    },
    {
      icon: 'icon',
      title: 'Performance optimization',
      description: 'here is the description for the current section.',
    },
    {
      icon: 'icon',
      title: 'CRM and HRMS solutions',
      description: 'here is the description for the current section.',
    },
    {
      icon: 'icon',
      title: 'E-commerce Solutions',
      description: 'here is the description for the current section.',
    },
  ];
}
