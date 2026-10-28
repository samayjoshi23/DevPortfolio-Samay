import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TECHNOLOGIES } from '../../data/portfolio.data';

/** A slow, endless band of the technologies I use. Pauses on hover; static with reduced motion. */
@Component({
  selector: 'app-stack-band',
  templateUrl: './stack-band.component.html',
  styleUrl: './stack-band.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class StackBandComponent {
  protected readonly technologies = TECHNOLOGIES;
}
