import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SingleSkillComponent } from './single-skill/single-skill.component';
import { SkillsdataService } from '../../skills.service';
import { BackgroundGreenComponent } from '../../shared/background-green/background-green.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SingleSkillComponent, BackgroundGreenComponent, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skillsData = inject(SkillsdataService)

}
