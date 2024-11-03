import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface Project {
  name: string;
  img: string;
  descriptionKey: string; // Verwendung des Schlüssels für die Übersetzung
  programmingLanguages: string[];
}

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, TranslateModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {
  @Input() project: any;

  inputData = "";
  description: string = "";

  @Output()projectname = new EventEmitter<string>();

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.updateDescription(); // Bei Initialisierung die Beschreibung setzen

    // Abonnieren von Sprachänderungen
    this.translate.onLangChange.subscribe(() => {
      this.updateDescription();
    });
  }

  private updateDescription() {
    if (this.project) {
      this.translate.get(this.project.descriptionKey).subscribe((translatedText: string) => {
        this.description = translatedText; // Setzen der Übersetzung auf die Property
      });
    }
  }

  sendInputData() {
    this.projectname.emit(this.inputData);
    this.inputData = "";
  }

  openExternalLink(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
