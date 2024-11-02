import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { MainContentComponent } from "./main-content/main-content.component";
import { HeaderComponent } from './shared/header/header.component';
import { Router, NavigationEnd } from '@angular/router';
import AOS from 'aos';
import { ImprintComponent } from "./imprint/imprint.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, MainContentComponent, ImprintComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'portfolio';
  showBackground: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showBackground = event.url === '/' || event.url === '/#atf' || event.url === '/#about-me-section' || event.url === '/#skills' || event.url === '/#portfolio'; // Passe '/home' ggf. an die Landing Page an
      }
    });

    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
  }
}
