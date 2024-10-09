import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { MainContentComponent } from "./main-content/main-content.component";
import { HeaderComponent } from './shared/header/header.component';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, MainContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'portfolio';

  ngOnInit() {
    AOS.init({
      duration: 1000, // Dauer der Animation in Millisekunden
      once: true, // Animation nur einmal abspielen
      mirror: false // Animationen beim Scrollen nach oben abspielen
    });
  }
}
