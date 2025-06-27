import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  darkMode: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // Load saved preference on component init
    const savedTheme = localStorage.getItem('theme');
    this.darkMode = savedTheme === 'dark';
    this.changeTheme(this.darkMode);
  }

  changeTheme(isDarkMode: boolean) {
    this.darkMode = isDarkMode;

    const element = document.querySelector('#app-body');

    if (this.darkMode) {
      element?.classList.add('dark');
      element?.classList.remove('light');
      localStorage.setItem('theme', 'dark'); // Save preference
    } else {
      element?.classList.remove('dark');
      element?.classList.add('light');
      localStorage.setItem('theme', 'light'); // Save preference
    }
  }
}
