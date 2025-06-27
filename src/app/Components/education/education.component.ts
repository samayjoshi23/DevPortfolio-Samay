import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent implements OnInit {

  slectedCompanyData: any = null;
  keyBullets: any[] = [];
  tags: any[] = [];
  companyList: any[] = [
    {
      id: 1,
      logo: "",
      name: "Spektra Systems, India",
      duration: "2022 - 2024",
      position: "Associtate Software Development Engineer",
      keyPoints: [
        "point 1",
        "point 2",
      ],
      tags: ["tag1", "tag2"]
    },
    {
      id: 2,
      logo: "",
      name: "Spektra Systems, India",
      duration: "2024 - Present",
      position: "Software Development Engineer - 1",
      keyPoints: [
        "point 1",
        "point 2",
        "point 3",
        "point 4"
      ],
      tags: ["tag1", "tag2", "tag3"]
    },
  ];

  educationList: any[] = [
    {
      id: 1,
      duration: "2016 - 2019",
      course: "B.Sc. (Under Graduation)",
      description: "Bachelor's of Science Degree in Mathematics, Physics and Computer Applications"
    },
    {
      id: 2,
      duration: "2019 - 2022",
      course: "MCA (Post Graduation)",
      description: "Master's Degree in Computer Applications"
    },
    {
      id: 3,
      duration: "2021 - 2022",
      course: "Full stack developer bootcamp",
      description: "Full Stack Development in NodeJs, EJS, Express and MongoDB"
    },
    {
      id: 3,
      duration: "2022 - 2022",
      course: "Internship",
      description: "Internship at Spektra Systems for Full Stack Development in .Net, Angular and SQL Server"
    }
  ];

  constructor(){}

  ngOnInit(): void {
    this.educationList = [...this.educationList.reverse()];
    this.companyList = [...this.companyList.reverse()];
    this.onSelectCompany(this.companyList.length);
  }

  onSelectCompany(id: number){
    this.slectedCompanyData = this.companyList.find(x => x.id == id);
    this.keyBullets = [...this.slectedCompanyData.keyPoints];
    this.tags = [...this.slectedCompanyData.tags];
  }
}
