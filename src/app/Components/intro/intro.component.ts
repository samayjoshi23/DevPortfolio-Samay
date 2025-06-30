import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SocialMediaLink } from '../../Models/StatModels';
import { socialMediaHandles, staticData } from '../../Models/StaticData';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {
  resumeLink: string = staticData.URL.Resume;
  socialHandles: SocialMediaLink[] = socialMediaHandles;
}
