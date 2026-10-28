import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { ThemePickerComponent } from '../../components/theme-picker/theme-picker.component';

@Component({
  selector: 'app-navbar',
  imports: [ThemePickerComponent],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'sticky top-0 z-30 block bg-bg/95 transition-colors' },
})
export class NavbarComponent {
  protected readonly theme = inject(ThemeService);

  onModeClick(): void {
    this.theme.toggleMode();
  }
}
