import { ChangeDetectionStrategy, Component, DestroyRef, inject, input, signal } from '@angular/core';

type ResumeState = 'idle' | 'saving' | 'done';

/** Download link that shows what you get (format, size, date) and confirms the download. */
@Component({
  selector: 'app-resume-button',
  templateUrl: './resume-button.component.html',
  styleUrl: './resume-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeButtonComponent {
  private timers: ReturnType<typeof setTimeout>[] = [];

  private readonly destroyRef = inject(DestroyRef);

  protected readonly state = signal<ResumeState>('idle');

  url = input.required<string>();
  size = input.required<string>();
  updated = input.required<string>();

  constructor() {
    this.destroyRef.onDestroy(() => this.clearTimers());
  }

  onDownloadClick(): void {
    this.clearTimers();
    this.state.set('saving');
    this.timers.push(
      setTimeout(() => this.state.set('done'), 650),
      setTimeout(() => this.state.set('idle'), 3200),
    );
  }

  private clearTimers(): void {
    this.timers.forEach(clearTimeout);
    this.timers = [];
  }
}
