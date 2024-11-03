import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-single-skill',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './single-skill.component.html',
  styleUrl: './single-skill.component.scss'
})
export class SingleSkillComponent {
  @Input()skill = {
    name: "HTML",
    img: "html-icon.png",
    number: 1
  }

  inputData = "";

  @Output()skillname = new EventEmitter<string>();

  sendInputData() {
    this.skillname.emit(this.inputData);
    this.inputData = "";
  }
}
