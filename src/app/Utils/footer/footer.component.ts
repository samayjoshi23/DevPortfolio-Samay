import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  handles: any[] = [
    {
      icon: "fa-brands fa-instagram",
      url: "",
      name: "Instagram"
    },
    {
      icon: "fa-brands fa-linkedin",
      url: "",
      name: "LinkedIn"
    },
    {
      icon: "fa-brands fa-facebook",
      url: "",
      name: "Facebook"
    },
    {
      icon: "fa-brands fa-github",
      url: "",
      name: "Github"
    }
  ];

  pageLinks: any[] = [
    {
      section: "About me",
      url: "#intro"
    },
    {
      section: "Resume",
      url: ""
    },
    {
      section: "Projects",
      url: "#projects"
    },
    {
      section: "Experience",
      url: "#experience"
    }
  ];
}
