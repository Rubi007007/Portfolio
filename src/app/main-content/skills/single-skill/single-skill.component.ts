import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-single-skill',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './single-skill.component.html',
  styleUrl: './single-skill.component.scss'
})
export class SingleSkillComponent {
  @Input()skill = {
    name: "HTML",
    img: "html-icon.png"
  }

  inputData = "";

  @Output()skillname = new EventEmitter<string>();

  sendInputData() {
    this.skillname.emit(this.inputData);
    this.inputData = "";
  }
}
