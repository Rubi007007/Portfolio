import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {
  @Input()project = {
    name: "El Pollo Loco",
    img: "el-pollo-loco-icon.png",
  }

  inputData = "";

  @Output()projectname = new EventEmitter<string>();

  sendInputData() {
    this.projectname.emit(this.inputData);
    this.inputData = "";
  }
}
