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
      icon: "",
      url: "",
      name: "Insta"
    },
    {
      icon: "",
      url: "",
      name: "LinkedIn"
    },
    {
      icon: "",
      url: "",
      name: "Facebook"
    },
    {
      icon: "",
      url: "",
      name: "Github"
    }
  ];

  pageLinks: any[] = [
    {
      section: "About me",
      url: ""
    },
    {
      section: "Resume",
      url: ""
    },
    {
      section: "Contact me",
      url: ""
    },
    {
      section: "Experience",
      url: ""
    }
  ];
}
