import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Company } from '../../Models/CompanyModel';
import { Education } from '../../Models/EducationModel';
import { careerStatistics } from '../../Models/Stats';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent implements OnInit {
  slectedCompanyData: Company | null = null;
  experience: number = careerStatistics.experience;
  companyList: Company[] = [
    {
      id: 1,
      logo: './../../../assets/Company/spektra.jfif',
      name: 'Spektra Systems, India',
      duration: '2022 - 2024',
      position: 'Associtate Software Development Engineer',
      keyPoints: [
        'Built Angular components using Reactive Forms with custom validators.',
        'Integrated REST APIs with Angular frontends using HttpClient.',
        'Assisted in developing .NET Web API endpoints and basic database procedures.',
        'Handled form validations and dynamic control behaviors.',
        'Participated in Git workflows and team sprint ceremonies.',
      ],
      tags: [
        'Reactive Forms',
        '.NET Web API',
        'SQL Server',
        'REST API',
        'Team Collaboration',
        'Git'
      ],
    },
    {
      id: 2,
      logo: './../../../assets/Company/spektra.jfif',
      name: 'Spektra Systems, India',
      duration: '2024 - Present',
      position: 'Software Development Engineer - 1',
      keyPoints: [
        'Designed full-stack features using Angular, .NET Web API, and SQL Server.',
        'Integrated external APIs with custom payloads and polling logic.',
        'Implemented step-wise process tracking using enums and structured error handling.',
        'Optimized T-SQL queries and modularized backend logic for scalability.',
        'Mentored junior developers and contributed to code reviews and architecture decisions.',
      ],
      tags: [
        'Full-Stack',
        'Angular',
        '.NET',
        'SQL Optimization',
        'External API Integration',
        'Mentorship',
        'Architecture',
      ],
    },
  ];

  educationList: Education[] = [
    {
      id: 1,
      duration: '2016 - 2019',
      course: 'B.Sc. (Under Graduation)',
      description:
        "Bachelor's of Science Degree in Mathematics, Physics and Computer Applications",
    },
    {
      id: 2,
      duration: '2019 - 2022',
      course: 'MCA (Post Graduation)',
      description: "Master's Degree in Computer Applications",
    },
    {
      id: 3,
      duration: '2021 - 2022',
      course: 'Full stack developer bootcamp',
      description: 'Full Stack Development in NodeJs, EJS, Express and MongoDB',
    },
    {
      id: 3,
      duration: '2022 - 2022',
      course: 'Internship',
      description:
        'Internship at Spektra Systems for Full Stack Development in .Net, Angular and SQL Server',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.educationList = [...this.educationList.reverse()];
    this.companyList = [...this.companyList.reverse()];
    this.onSelectCompany(this.companyList.length);
  }

  onSelectCompany(id: number) {
    this.slectedCompanyData = this.companyList.find((x) => x.id == id) ?? null;
  }
}
