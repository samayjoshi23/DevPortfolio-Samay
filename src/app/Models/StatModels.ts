export interface StaticData {
  Stat: CareerStatistics;
  URL: StaticURLs;
}

export interface CareerStatistics {
  Experience: number;
  Projects: number;
  Recognition: number;
  Clients: number;
}

export interface StaticURLs {
  Resume: string;
  Insta: string;
  LinkedIn: string;
  Github: string;
}

export interface SocialMediaLink {
  icon: string;
  url: string;
  name: string;
}