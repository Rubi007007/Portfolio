import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Datenschutz - R. Schmittel');
  }
}
