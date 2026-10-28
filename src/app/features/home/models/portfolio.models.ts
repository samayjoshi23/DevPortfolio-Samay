export interface Profile {
  firstName: string;
  lastName: string;
  role: string;
  pitch: string;
  location: string;
  email: string;
  resume: { url: string; size: string; updated: string };
}

export interface Fact {
  value: string;
  label: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface Technology {
  name: string;
  logo: string;
}

export interface CaseStudy {
  key: string;
  title: string;
  kind: string;
  description: string;
  points: string[];
  stack: string[];
  /** Full paths to every screen, in display order. Empty shows a title card instead. */
  images: string[];
  /** Shown on the title card when there are no screens yet. */
  tagline?: string;
  /** Screens taken on a phone, shown uncropped. */
  portraitImages: string[];
  /** Public source code, when there is one. */
  repo?: string;
  /** Live production site. Live client/product work does not share its source. */
  live?: string;
}

export interface SideProject {
  title: string;
  state: string;
  description: string;
  stack: string[];
  repo?: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface Role {
  title: string;
  when: string;
  points: string[];
  tags?: string[];
  /** How the role started, e.g. "Promoted". */
  note?: string;
  current?: boolean;
}

export interface ExperienceGroup {
  org: string;
  startYear: number;
  period: string;
  roles: Role[];
}

export interface EducationEntry {
  when: string;
  title: string;
  where: string;
  kind: 'degree' | 'course';
}

export interface ToolGroup {
  label: string;
  items: string[];
}
