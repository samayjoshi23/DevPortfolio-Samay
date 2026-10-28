import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FACTS, PROFILE } from '../../data/portfolio.data';
import { ResumeButtonComponent } from '../resume-button/resume-button.component';

@Component({
  selector: 'app-hero',
  imports: [ResumeButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class HeroComponent {
  protected readonly profile = PROFILE;
  protected readonly facts = FACTS;
}
