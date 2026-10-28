import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { AccentPreset, THEME_CONFIG, ThemeMode } from '../config/theme.config';

const MODE_KEY = 'theme';
const ACCENT_KEY = 'theme-accent';
/** Resolved CSS variables, read by the inline script in index.html before first paint. */
const VARS_KEY = 'theme-vars';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly storage = this.safeStorage();

  readonly accents: AccentPreset[] = THEME_CONFIG.accents;

  private readonly modeState = signal<ThemeMode>(this.initialMode());
  private readonly accentState = signal<string>(this.initialAccent());

  readonly mode = this.modeState.asReadonly();
  readonly accentId = this.accentState.asReadonly();
  readonly accent = computed(() => this.accents.find((a) => a.id === this.accentState()) ?? this.accents[0]);

  constructor() {
    effect(() => this.apply(this.modeState(), this.accent()));
  }

  toggleMode(): void {
    this.setMode(this.modeState() === 'dark' ? 'light' : 'dark');
  }

  setMode(mode: ThemeMode): void {
    this.modeState.set(mode);
    this.storage?.setItem(MODE_KEY, mode);
  }

  setAccent(id: string): void {
    if (!this.accents.some((a) => a.id === id)) return;
    this.accentState.set(id);
    this.storage?.setItem(ACCENT_KEY, id);
  }

  private apply(mode: ThemeMode, accent: AccentPreset): void {
    const palette = THEME_CONFIG.palettes[mode];
    const colours = accent[mode];
    const vars: Record<string, string> = {
      '--bg': palette.bg,
      '--surface': palette.surface,
      '--surface-2': palette.surface2,
      '--ink': palette.ink,
      '--muted': palette.muted,
      '--tile': palette.tile,
      '--accent': colours.accent,
      '--accent-ink': colours.accentInk,
    };

    const root = this.document.documentElement;
    root.dataset['theme'] = mode;
    root.style.colorScheme = mode;
    for (const [name, value] of Object.entries(vars)) root.style.setProperty(name, value);

    this.storage?.setItem(VARS_KEY, JSON.stringify({ mode, vars }));
  }

  private initialMode(): ThemeMode {
    const saved = this.storage?.getItem(MODE_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
    if (THEME_CONFIG.followSystemMode) {
      const prefersLight = this.document.defaultView?.matchMedia?.('(prefers-color-scheme: light)').matches;
      return prefersLight ? 'light' : 'dark';
    }
    return THEME_CONFIG.defaultMode;
  }

  private initialAccent(): string {
    const saved = this.storage?.getItem(ACCENT_KEY);
    return saved && THEME_CONFIG.accents.some((a) => a.id === saved) ? saved : THEME_CONFIG.defaultAccent;
  }

  private safeStorage(): Storage | null {
    try {
      return this.document.defaultView?.localStorage ?? null;
    } catch {
      return null;
    }
  }
}
