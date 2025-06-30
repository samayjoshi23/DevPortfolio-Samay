import { SocialMediaLink, StaticData } from "./StatModels";

export const staticData : StaticData = {
    Stat: {        
        Experience: 3,
        Projects: 8,
        Recognition: 2,
        Clients: 3,
    },
    URL: {
        Resume: "assets/Files/SamayJoshi-Resume-Jul2025.pdf",
        Insta: "https://www.instagram.com/sam_j_001/",
        LinkedIn: "www.linkedin.com/in/samay-joshi-1306631ab",
        Github: "https://github.com/samayjoshi23"
    }
}



export const socialMediaHandles: SocialMediaLink[] = [
  {
    icon: 'fa-brands fa-instagram',
    url: staticData.URL.Insta,
    name: 'Instagram',
  },
  {
    icon: 'fa-brands fa-linkedin',
    url: staticData.URL.LinkedIn,
    name: 'LinkedIn',
  },
  {
    icon: 'fa-brands fa-facebook',
    url: '',
    name: 'Facebook',
  },
  {
    icon: 'fa-brands fa-github',
    url: staticData.URL.Github,
    name: 'Github',
  },
];
