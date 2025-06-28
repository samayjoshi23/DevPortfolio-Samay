import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  skillsList: any[] = [
    {
      title: 'Languages & Frameworks',
      description:
        'Angular 9+, .NET Web API, Node.js, JavaScript, SQL, Firebase, EJS ',
    },
    {
      title: 'Frontend & Backend',
      description:
        'Reactive Forms, UI/UX, Optimization, REST APIs, Entity Framework, Console Apps, Microservices ',
    },
    {
      title: 'Database & Cloud',
      description:
        'SQL Server, T-SQL, Stored Procedures, Query Tuning, Azure, AWS, GCP ',
    },
    {
      title: 'Dev Tools & CRM',
      description:
        'Postman, Azure DevOps, Azure Git, Selenium (basic), Salesforce, HubSpot, Freshworks, Dynamics 365 ',
    },
    {
      title: 'Practices',
      description:
        'SOLID, Agile/Scrum, CI/CD, Unit Testing, Factory & Repository Patterns',
    },
  ];

  projects: any[] = [
    {
      id: 1,
      title: 'Saventin Ultrastructures',
      description:
        'Admin dashboard for HRMS, CMS, and project portfolio management with real-time updates and role-based access.',
      images: ['link1', 'link2'],
      stack: [
        'Angular 16',
        'Firebase Realtime DB',
        'Firebase Storage',
        'Hostinger',
      ],
    },
    {
      id: 2,
      title: 'Bunk India - Hostel Manager',
      description:
        'Hostel management system for student data, room occupancy, food services, and automated monthly billing.',
      images: ['link1', 'link2'],
      stack: ['Vanilla JS', 'HTML', 'CSS', 'GoDaddy'],
    },
    {
      id: 3,
      title: 'Pill’n Chill',
      description:
        'Full-stack E-Commerce platform with user cart, product management, admin portal, and Stripe payment integration.',
      images: ['link1', 'link2'],
      stack: [
        'Angular',
        '.NET Web API',
        'SQL Server',
        'Azure',
        'Figma',
        'Stripe',
      ],
    },
    {
      id: 4,
      title: 'Foody Travelers',
      description:
        'Tour and food exploration platform offering city-wise packages with regional cuisines and trip booking features.',
      images: ['link1', 'link2'],
      stack: ['Node.js', 'Express.js', 'EJS', 'MongoDB'],
    },
    {
      id: 5,
      title: 'Samarth CRM & CMS (In Progress)',
      description:
        'Custom CRM system with CMS and role-based access, designed as a PWA with planned AWS EC2 deployment.',
      images: ['link1', 'link2'],
      stack: ['Angular', '.NET Web API', 'SQL Server', 'AWS EC2', 'Figma'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
