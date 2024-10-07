import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProjectsdataService } from '../../projects.service';
import { SingleProjectComponent } from './single-project/single-project.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, SingleProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  projectsData = inject(ProjectsdataService)

}
