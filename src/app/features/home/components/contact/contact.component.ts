import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../../../core/directives/reveal.directive';
import { PROFILE, SOCIAL_LINKS } from '../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  imports: [RevealDirective],
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class ContactComponent {
  protected readonly profile = PROFILE;
  protected readonly socialLinks = SOCIAL_LINKS;
  protected readonly emailUser = PROFILE.email.split('@')[0];
  protected readonly emailDomain = PROFILE.email.split('@')[1];
  protected readonly mailto = `mailto:${PROFILE.email}?subject=${encodeURIComponent('Project enquiry')}`;
}
