import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { MainContentComponent } from "./main-content/main-content.component";
import { HeaderComponent } from './shared/header/header.component';
import { Router, NavigationEnd } from '@angular/router';
import { ImprintComponent } from "./imprint/imprint.component";
import { TranslateService } from '@ngx-translate/core';
import AOS from 'aos';

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

  constructor(private router: Router, private translate: TranslateService) {
    this.translate.addLangs(['en', 'de']);
    this.translate.setDefaultLang('en');

    this.translate.use('en');
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showBackground = event.url === '/' || event.url === '/#atf' || event.url === '/#about-me-section' || event.url === '/#skills' || event.url === '/#portfolio' || event.url === '/#about-me';
      }
    });

    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
  }
}
