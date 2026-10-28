import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';
import { CaseStudy } from '../../models/portfolio.models';

export interface GalleryRequest {
  caseStudy: CaseStudy;
  index: number;
  opener: HTMLElement;
}

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrl: './case-study.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class CaseStudyComponent {
  protected readonly currentIndex = signal(0);
  protected readonly isSwapping = signal(false);
  protected readonly currentImage = computed(() => this.caseStudy().images[this.currentIndex()]);
  protected readonly isPortrait = computed(() => this.caseStudy().portraitImages.includes(this.currentImage()));
  /** Every screen is a phone screenshot: show three phones side by side instead of one small one. */
  protected readonly isPhoneSet = computed(() => {
    const { images, portraitImages } = this.caseStudy();
    return images.length >= 3 && images.every((img) => portraitImages.includes(img));
  });
  protected readonly phoneTrio = computed(() => {
    const images = this.caseStudy().images;
    return [0, 1, 2].map((offset) => images[(this.currentIndex() + offset) % images.length]);
  });

  caseStudy = input.required<CaseStudy>();
  /** Technology currently filtered on; its tag is highlighted. */
  highlight = input<string | null>(null);
  /** Mirror the layout (picture on the right) for alternating rows. */
  reversed = input(false);
  eager = input(false);

  openGallery = output<GalleryRequest>();

  onThumbClick(index: number): void {
    if (index === this.currentIndex()) return;
    this.isSwapping.set(true);
    setTimeout(() => this.currentIndex.set(index), 140);
  }

  onStageLoad(): void {
    this.isSwapping.set(false);
  }

  onOpenClick(event: Event): void {
    this.openGallery.emit({
      caseStudy: this.caseStudy(),
      index: this.currentIndex(),
      opener: event.currentTarget as HTMLElement,
    });
  }
}
