import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CareerStatistics, careerStatistics } from '../../Models/Stats';
import { Offerings, Statistics } from '../../Models/ExperienceModel';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  staticData: CareerStatistics = careerStatistics;

  expStats: Statistics[] = [
    {
      icon: 'fa-solid fa-briefcase',
      title: this.staticData.experience + '+',
      description: 'Years of professional experience',
    },
    {
      icon: 'fa-solid fa-user-check',
      title: this.staticData.clients + '+',
      description: 'Satisfied clients served',
    },
    {
      icon: 'fa-solid fa-code-branch',
      title: this.staticData.projects + '+',
      description: 'Projects successfully delivered',
    },
    {
      icon: 'fa-solid fa-award',
      title: this.staticData.recognition + '+',
      description: 'Awards and recognitions',
    },
  ];

  offerings: Offerings[] = [
    {
      title: 'Custom Web Apps & Dashboards',
      description:
        'Full-stack development of Scalable Web Apps with Deployment support.',
      icon: 'fa-solid fa-laptop',
    },
    {
      title: 'Develop and Integrate REST APIs',
      description:
        'Build secure, well-structured APIs and connect external services.',
      icon: 'fa-solid fa-plug',
    },
    {
      title: 'Angular Frontend Development',
      description:
        'Create dynamic, responsive uis with Angular and Reactive Forms.',
      icon: 'fa-solid fa-layer-group',
    },
    {
      title: 'Backend services with .NET',
      description: 'Build clean, modular, and efficient .NET Web APIs with C#.',
      icon: 'fa-solid fa-server',
    },
    {
      title: 'SQL Database Design & Optimization',
      description:
        'Design schemas, write procedures, and tune slow SQL queries.',
      icon: 'fa-solid fa-database',
    },
    {
      title: 'Bug Fixing & Refactoring',
      description: 'debug and improve existing angular/.net codebases.',
      icon: 'fa-solid fa-screwdriver-wrench',
    },
    {
      title: 'Custom CRM Development',
      description:
        'Design and build tailored CRM systems for lead tracking, sales, and internal operations using Angular and .NET.',
      icon: 'fa-solid fa-address-card',
    },
    {
      title: 'MVPs & Rapid Prototyping',
      description: 'Quick turnaround MVPs to validate your product idea.',
      icon: 'fa-solid fa-rocket',
    },
  ];
}
