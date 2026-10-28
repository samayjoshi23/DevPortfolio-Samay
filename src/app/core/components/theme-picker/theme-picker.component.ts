import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, inject, signal } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'relative inline-flex',
    '(document:click)': 'onDocumentClick($event)',
    '(document:keydown.escape)': 'close()',
  },
})
export class ThemePickerComponent {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly document = inject(DOCUMENT);
  protected readonly theme = inject(ThemeService);

  protected readonly isOpen = signal(false);

  onToggleClick(): void {
    this.isOpen.update((open) => !open);
  }

  onAccentClick(id: string): void {
    this.theme.setAccent(id);
  }

  onModeClick(): void {
    this.theme.toggleMode();
  }

  onDocumentClick(event: MouseEvent): void {
    if (this.isOpen() && !this.host.nativeElement.contains(event.target as Node)) this.isOpen.set(false);
  }

  close(): void {
    if (!this.isOpen()) return;
    this.isOpen.set(false);
    this.document.getElementById('theme-picker-button')?.focus();
  }
}
