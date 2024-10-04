import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SingleSkillComponent } from './single-skill/single-skill.component';
import { SkillsdataService } from '../../skills.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SingleSkillComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skillsData = inject(SkillsdataService)

}
