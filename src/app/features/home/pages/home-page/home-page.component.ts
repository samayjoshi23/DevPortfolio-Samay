import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutComponent } from '../../components/about/about.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { StackBandComponent } from '../../components/stack-band/stack-band.component';
import { WorkComponent } from '../../components/work/work.component';

@Component({
  selector: 'app-home-page',
  imports: [HeroComponent, StackBandComponent, WorkComponent, AboutComponent, ExperienceComponent, ContactComponent],
  template: `
    <app-hero />
    <app-stack-band />
    <app-work />
    <app-about />
    <app-experience />
    <app-contact />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
