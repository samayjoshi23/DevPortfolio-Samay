import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../../../core/directives/reveal.directive';
import { EDUCATION, EXPERIENCE, TOOL_GROUPS } from '../../data/portfolio.data';

@Component({
  selector: 'app-experience',
  imports: [RevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class ExperienceComponent {
  protected readonly experience = EXPERIENCE;
  protected readonly education = EDUCATION;
  protected readonly tools = TOOL_GROUPS;
  /** Whole years since joining the current company, so the intro never goes stale. */
  protected readonly yearsAtCurrent = new Date().getFullYear() - EXPERIENCE[0].startYear;
}
