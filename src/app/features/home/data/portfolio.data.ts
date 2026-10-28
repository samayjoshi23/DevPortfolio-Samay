import {
  CaseStudy,
  EducationEntry,
  ExperienceGroup,
  Fact,
  Profile,
  Service,
  SideProject,
  SocialLink,
  Technology,
  ToolGroup,
} from '../models/portfolio.models';

const PROJECTS = 'assets/Projects';
const GITHUB = 'https://github.com/samayjoshi23';
const screens = (dir: string, files: string[]) => files.map((f) => `${PROJECTS}/${dir}/${f}`);

export const PROFILE: Profile = {
  firstName: 'Samay',
  lastName: 'Joshi',
  role: 'AI-driven full-stack developer · Angular, .NET & SQL Server',
  pitch:
    'I design and build web apps end to end, from the screen people use to the API and database behind it, with AI coding agents built into how I plan, write and review every feature. Based in Jabalpur, India, working with clients anywhere.',
  location: 'Jabalpur, Madhya Pradesh',
  email: 'sam.science97@gmail.com',
  resume: { url: 'assets/Files/SamayJoshi-Resume-Jul2025.pdf', size: '645 KB', updated: 'July 2025' },
};

export const FACTS: Fact[] = [
  { value: '5+', label: 'Years building for clients' },
  { value: '10+', label: 'Projects built' },
  { value: 'Spektra', label: 'Software Development Engineer' },
  { value: 'Jabalpur', label: 'Madhya Pradesh, India' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/samay-joshi-1306631ab' },
  { label: 'GitHub', url: 'https://github.com/samayjoshi23' },
  { label: 'Instagram', url: 'https://www.instagram.com/sam_j_001/' },
];

export const TECHNOLOGIES: Technology[] = [
  { name: 'Angular', logo: 'angular' },
  { name: '.NET', logo: 'dot-net' },
  { name: 'C#', logo: 'c-sharp' },
  { name: 'SQL Server', logo: 'sql' },
  { name: 'Azure', logo: 'azure' },
  { name: 'Node.js', logo: 'node' },
  { name: 'Express', logo: 'express' },
  { name: 'MongoDB', logo: 'mongo-db' },
  { name: 'JavaScript', logo: 'js' },
  { name: 'Google Cloud', logo: 'gcp' },
  { name: 'HTML', logo: 'html' },
  { name: 'CSS', logo: 'css' },
].map((t) => ({ ...t, logo: `assets/Logos/${t.logo}.png` }));

/** Filter chips in display order. 'All' stays last; DEFAULT_FILTER is selected on load. */
export const ALL_FILTER = 'All';
export const PROJECT_FILTERS = ['Angular', '.NET', 'SQL Server', 'Firebase', 'Node.js', 'MongoDB', ALL_FILTER];
export const DEFAULT_FILTER = 'Angular';
/** Logo shown on each filter chip; 'All' draws its own icon. */
export const FILTER_ICONS: Record<string, string> = {
  Angular: 'assets/Logos/angular.png',
  '.NET': 'assets/Logos/dot-net.png',
  'SQL Server': 'assets/Logos/sql.png',
  Firebase: 'assets/Logos/firebase.svg',
  'Node.js': 'assets/Logos/node.png',
  MongoDB: 'assets/Logos/mongo-db.png',
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    key: 'saventin',
    title: 'Saventin Ultrastructures',
    kind: 'Client project · Construction company',
    description:
      'A construction firm needed one place for its people, its content and its projects. I built the public website and an admin console in Angular, backed by a .NET API and SQL Server on Azure, with a service switcher that can move the whole app onto Firebase when required.',
    points: [
      'HRMS and CMS modules, each behind role-based access',
      'One admin for leads, enquiries, job applications and reports',
      '.NET Web API and SQL Server on an Azure VM, shipped through Azure Pipelines',
      'Media stored on Cloudflare R2',
      'A service switcher that flips the backend to Firebase when needed',
    ],
    stack: ['Angular', '.NET', 'SQL Server', 'Azure VM', 'Azure Pipelines', 'Cloudflare R2', 'Firebase'],
    live: 'https://saventin.in',
    // Site v3: home, about, services, projects, contact, then the admin dashboard, leads and reports.
    images: screens('Saventin', ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png']),
    portraitImages: [],
  },
  {
    key: 'fintrackr',
    title: 'FinTrackr',
    kind: 'My own product · Live in production',
    tagline: 'Offline-first personal finance',
    description:
      'An expense tracker I designed, built and shipped on my own. FinTrackr handles accounts, budgets, goals and shared group expenses, saves every change on the device first, and syncs to the cloud when you’re back online.',
    points: [
      'Accounts, budgets, goals and recurring transactions',
      'Shared group expenses with settlements between members',
      'Local-first data in IndexedDB with a retrying sync queue to Firestore',
      'Installable PWA with push notifications and monthly reports',
    ],
    stack: ['Angular', 'Firebase', 'Cloud Functions', 'PWA', 'IndexedDB', 'Tailwind CSS', 'ApexCharts'],
    live: 'https://fintrackr-e7734.web.app/',
    // Rendered from the app's UI mockups with sample names and amounts.
    images: screens('FinTrackr', ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png']),
    portraitImages: screens('FinTrackr', ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png']),
  },
  {
    key: 'pillnchill',
    title: 'Pill’n Chill',
    kind: 'Client project · Online pharmacy',
    description:
      'I took this pharmacy store from Figma mockups to a live Azure deployment: an Angular storefront where customers find medicines and pay in a few taps, with a .NET and SQL Server back end keeping orders and stock in order.',
    points: [
      'Designed every screen in Figma first, then built them in Angular',
      'Cart and Stripe checkout on a .NET Web API with SQL Server',
      'Admin portal for managing products and orders',
      'Deployed and hosted on Azure',
    ],
    stack: ['Angular', '.NET', 'C#', 'SQL Server', 'Stripe', 'Azure', 'Figma'],
    repo: `${GITHUB}/Pill-n-Chill`,
    images: screens('PillnChill', ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png']),
    portraitImages: [],
  },
  {
    key: 'foody',
    title: 'Foody Travelers',
    kind: 'Personal project · Travel booking',
    description:
      'An idea I wanted to test: what if every trip came with the local food? I designed and built a site where each city package pairs places to see with dishes to try, and booking works just as well on a phone.',
    points: [
      'City tour packages paired with regional cuisine',
      'Booking flow from package to confirmation',
      'A mobile layout designed on its own, not squeezed from desktop',
      'Server-rendered with Express and EJS, data in MongoDB',
    ],
    stack: ['Node.js', 'Express', 'EJS', 'MongoDB'],
    repo: `${GITHUB}/foody-travelers-v2.0`,
    images: screens('FoodyTravelers', ['6.png', '7.png', '1.jpg', '3.jpg', '2.jpg', '4.jpg', '5.jpg']),
    portraitImages: screens('FoodyTravelers', ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']),
  },
  {
    key: 'other',
    title: 'Websites for small businesses',
    kind: 'Freelance · Gym, organics, food court',
    description:
      'Small businesses need a site that looks sharp and loads fast. I designed and hand-built responsive sites for Ateesha Organics, a fitness club and a food court, with the small interactive touches that make a site feel finished.',
    points: [
      'Membership plans, product pages and menus shaped around each business',
      'Responsive on every screen, from phone to desktop',
      'Hand-written HTML, CSS and JavaScript with animated, interactive components',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Node.js', 'Express'],
    images: screens('Other', ['1.png', '2.png', '3.png', '4.png', '6.png', '5.png']),
    portraitImages: [],
  },
];

export const SIDE_PROJECTS: SideProject[] = [
  {
    title: 'Automated Parking System',
    state: 'Completed',
    description:
      'I first wrote this as a C# console app, then rebuilt it full-stack: an Angular front end over a .NET 6 Web API, with Entity Framework migrations and a SQL Server database.',
    stack: ['Angular', '.NET', 'C#', 'Entity Framework', 'SQL Server'],
    repo: `${GITHUB}/Autometed-Pakring-System`,
  },
  {
    title: 'Samarth Spacewood LLP',
    state: 'In design',
    description: 'A custom CRM and CMS with role-based access, planned as a PWA on AWS. I’m working out the flows in Figma before building.',
    stack: ['Angular', '.NET', 'SQL Server', 'PWA', 'AWS', 'Figma'],
  },
  {
    title: 'Bunk India',
    state: 'Shipped',
    description: 'A hostel manager for student records, room occupancy and meals, with monthly bills generated automatically. Hosted on GoDaddy.',
    stack: ['JavaScript', 'HTML', 'CSS'],
  },
];

export const ABOUT_TITLE = 'Designer by training, AI-driven by choice.';

export const ABOUT_PARAGRAPHS: string[] = [
  'I started out designing things people look at: graphic design at NICE, UI/UX in Figma, a year as content designer at Jabalpur Incubation Center. Then I wanted to build what I drew, so I learned to code.',
  'That habit stuck. Today I’m a Software Development Engineer at Spektra Systems, where I take features from the first sketch to production: Angular on the screen, .NET Web API and SQL Server behind it, and the Azure pipeline that ships it. I tune slow queries, mentor junior developers and sit in on architecture decisions.',
  'AI changed how I work, not what I stand for. Coding agents like Claude Code and Cursor write the scaffolding, the refactors and the first drafts, while I set the direction, make the design and architecture calls, and review every line before it ships. It means one developer can carry a product end to end, the way I did with FinTrackr.',
  'Outside my day job I build for clients and for myself, from construction admin consoles to an offline-first finance app.',
];

/** How I work, in three lines; shown beside the story. */
export const ABOUT_PRINCIPLES: Service[] = [
  { title: 'Design first', description: 'Every screen starts in Figma, so the build has a target before a line is written.' },
  { title: 'AI writes, I decide', description: 'Agents draft and refactor at speed; design, architecture and code review stay with me.' },
  { title: 'Own it end to end', description: 'Interface, API, database and deployment, through to the live site and what happens after.' },
];

export const SERVICES: Service[] = [
  { title: 'Web apps & dashboards', description: 'Full-stack apps with roles, real-time data and deployment.' },
  { title: 'Angular front ends', description: 'Responsive interfaces with Reactive Forms that hold up.' },
  { title: '.NET APIs & integrations', description: 'Clean C# Web APIs, payments and third-party services.' },
  { title: 'SQL design & tuning', description: 'Schemas, stored procedures, and slow queries made fast.' },
  { title: 'Custom CRMs', description: 'Lead tracking, sales and internal tools.' },
  { title: 'AI-driven MVPs & refactors', description: 'A first version or a cleanup, built fast with coding agents and reviewed by hand.' },
];

/** Grouped by organisation, newest first. */
export const EXPERIENCE: ExperienceGroup[] = [
  {
    org: 'Spektra Systems',
    startYear: 2022,
    period: '2022 – now',
    roles: [
      {
        title: 'Software Development Engineer 1',
        when: '2024 – now',
        note: 'Promoted',
        current: true,
        points: [
          'Design full-stack features with Angular, .NET Web API and SQL Server.',
          'Integrate external APIs with custom payloads and polling logic.',
          'Built step-by-step process tracking with enums and structured error handling.',
          'Optimise T-SQL queries and split backend logic into modules that scale.',
          'Mentor junior developers; take part in code reviews and architecture decisions.',
        ],
        tags: ['Angular', '.NET', 'SQL optimisation', 'API integration', 'Mentorship', 'Architecture'],
      },
      {
        title: 'Associate Software Development Engineer',
        when: '2022 – 2024',
        note: 'Hired full time',
        points: [
          'Built Angular components with Reactive Forms and custom validators.',
          'Connected Angular front ends to REST APIs with HttpClient.',
          'Helped develop .NET Web API endpoints and database procedures.',
          'Handled form validation and dynamic control behaviour.',
        ],
        tags: ['Reactive Forms', '.NET Web API', 'SQL Server', 'REST APIs', 'Git'],
      },
      {
        title: 'Full-stack intern',
        when: '2022',
        points: ['Full-stack development in .NET, Angular and SQL Server.'],
      },
    ],
  },
  {
    org: 'Jabalpur Incubation Center',
    startYear: 2020,
    period: '2020 – 2021',
    roles: [{ title: 'Content editor & designer', when: '2020 – 2021', points: ['Graphic design and content for the centre.'] }],
  },
  {
    org: 'Jain Classes',
    startYear: 2018,
    period: '2018 – 2019',
    roles: [{ title: 'Programming tutor', when: '2018 – 2019', points: ['Taught C, C++, HTML and CSS.'] }],
  },
];

/** Oldest first: read as a journey from left to right. */
export const EDUCATION: EducationEntry[] = [
  { when: '2016', title: 'Graphic design', where: 'National Institute of Cine Education', kind: 'course' },
  { when: '2016 – 2019', title: 'B.Sc. Maths, Physics, Computer Science', where: 'Govt. Model Science College, Jabalpur', kind: 'degree' },
  { when: '2019 – 2022', title: 'MCA', where: 'Jabalpur Engineering College', kind: 'degree' },
  { when: '2021', title: 'Full-stack web development', where: 'Udemy · Node.js, Express, MongoDB', kind: 'course' },
];

export const TOOL_GROUPS: ToolGroup[] = [
  { label: 'Languages & frameworks', items: ['Angular', '.NET Web API', 'C#', 'Node.js', 'JavaScript', 'SQL'] },
  { label: 'Data & cloud', items: ['SQL Server', 'T-SQL', 'MongoDB', 'Firebase', 'Azure', 'AWS', 'GCP'] },
  { label: 'AI-driven development', items: ['Claude Code', 'Cursor', 'Agent skills'] },
  { label: 'Design & tools', items: ['Figma', 'Postman', 'Azure DevOps', 'Git'] },
  { label: 'Practices', items: ['SOLID', 'Agile/Scrum', 'CI/CD', 'Unit testing'] },
];
