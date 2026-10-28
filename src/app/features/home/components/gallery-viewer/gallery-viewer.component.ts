import { ChangeDetectionStrategy, Component, ElementRef, computed, signal, viewChild } from '@angular/core';
import { CaseStudy } from '../../models/portfolio.models';

/** Full-screen viewer for every screen of one project: arrows, keyboard, swipe and a thumbnail strip. */
@Component({
  selector: 'app-gallery-viewer',
  templateUrl: './gallery-viewer.component.html',
  styleUrl: './gallery-viewer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryViewerComponent {
  private opener: HTMLElement | null = null;
  private touchStartX: number | null = null;

  protected readonly caseStudy = signal<CaseStudy | null>(null);
  protected readonly index = signal(0);
  protected readonly total = computed(() => this.caseStudy()?.images.length ?? 0);
  protected readonly image = computed(() => this.caseStudy()?.images[this.index()] ?? '');

  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  open(caseStudy: CaseStudy, index: number, opener: HTMLElement): void {
    this.caseStudy.set(caseStudy);
    this.index.set(index);
    this.opener = opener;
    this.dialog().nativeElement.showModal();
  }

  step(delta: number): void {
    const total = this.total();
    if (total) this.index.set((this.index() + delta + total) % total);
  }

  onThumbClick(i: number): void {
    this.index.set(i);
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') this.step(1);
    if (event.key === 'ArrowLeft') this.step(-1);
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchEnd(event: TouchEvent): void {
    if (this.touchStartX === null) return;
    const dx = event.changedTouches[0].clientX - this.touchStartX;
    if (Math.abs(dx) > 40) this.step(dx < 0 ? 1 : -1);
    this.touchStartX = null;
  }

  onCloseClick(): void {
    this.dialog().nativeElement.close();
  }

  onClosed(): void {
    this.opener?.focus();
  }
}
