import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Impressum - R. Schmittel');
  }
}
