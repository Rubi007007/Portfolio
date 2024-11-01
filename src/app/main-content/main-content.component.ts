import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ContactComponent } from './contact/contact.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, AboveTheFoldComponent, AboutMeComponent, SkillsComponent, PortfolioComponent, ContactComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Portfolio - R. Schmittel');
  }
}
