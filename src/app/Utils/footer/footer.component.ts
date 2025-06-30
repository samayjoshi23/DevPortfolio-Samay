import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SocialMediaLink } from '../../Models/StatModels';
import { socialMediaHandles, staticData } from '../../Models/StaticData';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  handles: SocialMediaLink[] = socialMediaHandles;

  pageLinks: any[] = [
    {
      section: "About me",
      url: "#intro",
      type: "link"
    },
    {
      section: "Resume",
      url: staticData.URL.Resume,
      type: "file"
    },
    {
      section: "Projects",
      url: "#projects",
      type: "link"
    },
    {
      section: "Experience",
      url: "#experience",
      type: "link"
    }
  ];
}
