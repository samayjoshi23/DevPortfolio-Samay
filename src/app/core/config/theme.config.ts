/**
 * Single place to configure the site's colour scheme.
 *
 * - `palettes` hold the neutral colours (ground, surfaces, text) for each mode.
 * - `accents` are the brand colours a visitor can pick from in the navbar.
 *   Each accent defines a colour per mode plus the text colour used on top of it,
 *   so buttons stay readable (aim for 4.5:1 contrast or better).
 *
 * Add, remove or reorder accents freely; the picker renders whatever is listed here.
 * If you change `defaultMode` / `defaultAccent`, update the matching fallback
 * values at the top of `src/styles.scss` so the very first paint matches.
 */

export type ThemeMode = 'dark' | 'light';

export interface ThemePalette {
  bg: string;
  surface: string;
  surface2: string;
  ink: string;
  muted: string;
  /** Background behind technology logos (they are designed for light grounds). */
  tile: string;
}

export interface AccentColour {
  accent: string;
  accentInk: string;
}

export interface AccentPreset {
  id: string;
  label: string;
  dark: AccentColour;
  light: AccentColour;
}

export interface ThemeConfig {
  defaultMode: ThemeMode;
  /** When true and the visitor has made no choice, follow the OS light/dark setting. */
  followSystemMode: boolean;
  defaultAccent: string;
  palettes: Record<ThemeMode, ThemePalette>;
  accents: AccentPreset[];
}

export const THEME_CONFIG: ThemeConfig = {
  defaultMode: 'dark',
  followSystemMode: false,
  defaultAccent: 'blue',
  palettes: {
    dark: {
      bg: '#0e0f12',
      surface: '#17181c',
      surface2: '#202127',
      ink: '#f4f4f5',
      muted: '#a9a9b4',
      tile: '#f4f4f5',
    },
    light: {
      bg: '#f6f6f7',
      surface: '#ebebee',
      surface2: '#e0e0e5',
      ink: '#0e0f12',
      muted: '#4f4f5a',
      tile: '#ffffff',
    },
  },
  accents: [
    { id: 'blue', label: 'Blue', dark: { accent: '#5b95ff', accentInk: '#0b0c0f' }, light: { accent: '#1d5fd8', accentInk: '#ffffff' } },
    { id: 'emerald', label: 'Emerald', dark: { accent: '#34d399', accentInk: '#0b0c0f' }, light: { accent: '#047857', accentInk: '#ffffff' } },
    { id: 'amber', label: 'Amber', dark: { accent: '#fbbf24', accentInk: '#0b0c0f' }, light: { accent: '#b45309', accentInk: '#ffffff' } },
    { id: 'rose', label: 'Rose', dark: { accent: '#fb7185', accentInk: '#0b0c0f' }, light: { accent: '#be123c', accentInk: '#ffffff' } },
    { id: 'cyan', label: 'Cyan', dark: { accent: '#22d3ee', accentInk: '#0b0c0f' }, light: { accent: '#0e7490', accentInk: '#ffffff' } },
  ],
};
