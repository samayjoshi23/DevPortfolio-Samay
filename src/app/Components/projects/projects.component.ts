import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  
  skillsList: any[] = [
    {
      title: "Front-End",
      description: "Skill 1, Skill2, Skill3, Skill4"
    },
    {
      title: "Back-End",
      description: "Skill 1"
    },
    {
      title: "Tools",
      description: "Skill 1, Skill2"
    },
    {
      title: "Others",
      description: "Skill 1, Skill 2, Skill 3, Skill 4"
    },
  ];

  projects : any[] = [
    {
      id: 1,
      title: "Foody travelers",
      description: "A tour & trip booking with Indian State wise Packages, including options to try out famous food options of the city and state",
      images: ["link1", "link2"],
      stack: ["Node.JS", "EJS", "Express.JS", "MongoDB"]
    },
    {
      id: 2,
      title: "Bunk India",
      description: "A hostel management web app with Occupany management, tiffin service and monthly fee billings",
      images: ["link1", "link2"],
      stack: ["Angular 12", "MySQL", "GoDaddy"]
    },
    {
      id: 3,
      title: "Pill n Chill",
      description: "A online medicinal E-Commerce platform, with separate portals for Admin (Managing categoies, tags, pricing and billings) and User (Cart)",
      images: ["link1", "link2"],
      stack: [".Net Web API", "Angular 13", "SQL Server", "Bootstrap", "Azure"]
    },
    {
      id: 4,
      title: "Saventin Ultrastructures",
      description: "A construction portfolio and a Admin recruitment portal, with Role and Content Management",
      images: ["link1", "link2"],
      stack: ["Angular 16", "Firebase Realtime DB", "Firebase Storage", "Bootstrap"]
    },
  ];

  constructor(){

  }

  ngOnInit(): void {}

}
