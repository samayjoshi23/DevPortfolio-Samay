import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarousalComponent } from '../../Utils/carousal/carousal.component';
import { Project, Skill } from '../../Models/ProjectModel';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, CarousalComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  basePath: string = "assets/Projects";
  logoBasePath: string = "assets/Logos";
  selectedProject: Project | null = null;

  logos: string[] = [
    "angular.png",
    "azure.png",
    "dot-net.png",
    "c-sharp.png",
    "gcp.png",
    "js.png",
    "sql.png",
    "express.png",
    "node.png",
    "mongo-db.png",
    "css.png",
    "html.png"
  ] 

  skillsList: Skill[] = [
    {
      title: 'Languages & Frameworks',
      description: 'Angular 9+, .NET Web API, Node.js, JavaScript, SQL, Firebase, EJS ',
    },
    {
      title: 'Frontend & Backend',
      description: 'Reactive Forms, UI/UX, Optimization, REST APIs, Entity Framework, Console Apps, Microservices ',
    },
    {
      title: 'Database & Cloud',
      description: 'SQL Server, T-SQL, Stored Procedures, Query Tuning, Azure, AWS, GCP ',
    },
    {
      title: 'Dev Tools & CRM',
      description: 'Postman, Azure DevOps, Azure Git, Selenium (basic), Salesforce, HubSpot, Freshworks, Dynamics 365 ',
    },
    {
      title: 'Practices',
      description: 'SOLID, Agile/Scrum, CI/CD, Unit Testing, Factory & Repository Patterns',
    },
  ];

  projects: Project[] = [
    {
      id: 1,
      title: 'Saventin Ultrastructures',
      description: 'Admin dashboard for HRMS, CMS, and project portfolio management with real-time updates and role-based access.',
      dir: "Saventin",
      images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png'],
      stack: ['Angular 16', 'Firebase Realtime DB', 'Firebase Storage', 'Hostinger'],
      thumb: ""
    },
    {
      id: 2,
      title: 'Pill’n Chill',
      description: 'Full-stack E-Commerce platform with user cart, product management, admin portal, and Stripe payment integration.',
      dir: "PillnChill",
      images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png'],
      stack: ['Angular', '.NET Web API', 'SQL Server', 'Azure', 'Figma', 'Stripe'],
      thumb: ""
    },
    {
      id: 3,
      title: 'Foody Travelers',
      description: 'Tour and food exploration platform offering city-wise packages with regional cuisines and trip booking features.',
      dir: "FoodyTravelers",
      images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.png', '7.png'],
      stack: ['Node.js', 'Express.js', 'EJS', 'MongoDB'],
      thumb: ""
    },
    {
      id: 4,
      title: 'Samarth Spacewood LLP (In Design)',
      description: 'Custom CRM system with CMS and role-based access, designed as a PWA with planned AWS EC2 deployment.',
      dir: "",
      images: [],
      stack: ['Angular', '.NET Web API', 'SQL Server', 'AWS EC2', 'Figma'],
      thumb: ""
    },
    {
      id: 5,
      title: 'X-Track (Under Development)',
      description: 'A stop solution for tracking expenses and setting monthly budgets for expenditure and proper categorization of the records with Graphical representation.',
      dir: "",
      images: [],
      stack: ['Angular', 'Supabase DB', 'Figma'],
      thumb: ""
    },
    {
      id: 6,
      title: 'Bunk India - Hostel Manager',
      description: 'Hostel management system for student data, room occupancy, food services, and automated monthly billing.',
      dir: "",
      images: [],
      stack: ['Vanilla JS', 'HTML', 'CSS', 'GoDaddy'],
      thumb: ""
    },
    {
      id: 7,
      title: 'Other Projects',
      description: 'Some of the minor projects I worked on...',
      dir: "Other",
      images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'],
      stack: ['HTML', 'CSS', 'JavaScript', 'ExpressJs', 'NodeJs', 'MongoDB', 'EJS'],
      thumb: ""
    },
  ];

  constructor() {}

  ngOnInit(): void {
    for(let p = 0; p < this.projects.length; p++){
      for(let i = 0; i < this.projects[p].images.length; i++){
        let path = `${this.basePath}/${this.projects[p].dir}/${this.projects[p].images[i]}`;
        this.projects[p].images[i] = path;
      }

      this.projects[p].thumb = this.projects[p].images.length > 0 
        ? this.projects[p].images[0]
        : this.basePath + "/no-img.jpg";
    }
    
    this.selectedProject = this.projects[0];
    console.log(this.selectedProject)
    console.log(this.projects)
  }

  previewProject(id: number) {
    let project = this.projects.find(p => p.id == id);
    this.selectedProject = !project ? this.projects[0] : project;
  }

}
