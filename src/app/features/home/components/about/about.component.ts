import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../../../core/directives/reveal.directive';
import { ABOUT_PARAGRAPHS, ABOUT_PRINCIPLES, ABOUT_TITLE, SERVICES } from '../../data/portfolio.data';

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class AboutComponent {
  protected readonly title = ABOUT_TITLE;
  protected readonly paragraphs = ABOUT_PARAGRAPHS;
  protected readonly principles = ABOUT_PRINCIPLES;
  protected readonly services = SERVICES;
}
