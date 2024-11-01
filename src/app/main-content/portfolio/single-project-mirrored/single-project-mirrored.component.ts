import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-single-project-mirrored',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './single-project-mirrored.component.html',
  styleUrl: './single-project-mirrored.component.scss'
})
export class SingleProjectMirroredComponent {
  @Input()project = {
    name: "El Pollo Loco",
    img: "el-pollo-loco-project.png",
    description: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
    programmingLanguages: ["JavaScript", "HTML", "CSS"]
  }

  inputData = "";

  @Output()projectname = new EventEmitter<string>();

  sendInputData() {
    this.projectname.emit(this.inputData);
    this.inputData = "";
  }

  openExternalLink(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
