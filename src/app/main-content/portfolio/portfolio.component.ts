import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProjectsdataService } from '../../projects.service';
import { SingleProjectComponent } from './single-project/single-project.component';
import { SingleProjectMirroredComponent } from './single-project-mirrored/single-project-mirrored.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, SingleProjectComponent, SingleProjectMirroredComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  projectsData = inject(ProjectsdataService)

}