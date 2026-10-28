import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, OnDestroy, OnInit, inject, input } from '@angular/core';

/**
 * Fades and lifts an element in the first time it scrolls into view.
 * Content stays visible without JavaScript or with reduced motion (see `.reveal` in styles.scss).
 */
@Directive({
  selector: '[appReveal]',
  host: { class: 'reveal', '[style.--i]': 'appReveal() || 0' },
})
export class RevealDirective implements OnInit, OnDestroy {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly document = inject(DOCUMENT);
  private observer: IntersectionObserver | null = null;

  /** Stagger position: each step delays the entrance by 75ms. */
  appReveal = input<number | ''>(0);

  ngOnInit(): void {
    const el = this.element.nativeElement;
    const view = this.document.defaultView;
    if (!view || !('IntersectionObserver' in view)) {
      el.classList.add('is-in');
      return;
    }
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.classList.add('is-in');
          this.observer?.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
