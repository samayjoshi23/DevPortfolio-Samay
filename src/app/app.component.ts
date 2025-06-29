import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Utils/navbar/navbar.component';
import { FooterComponent } from './Utils/footer/footer.component';
import { CarousalComponent } from './Utils/carousal/carousal.component';
import { IntroComponent } from './Components/intro/intro.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { ExperienceComponent } from './Components/experience/experience.component';
import { EducationComponent } from './Components/education/education.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FooterComponent,
    IntroComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    NavbarComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PortfolioUI';
}