import { Component } from '@angular/core';
import { DividingLineComponent } from '../../shared/dividing-line/dividing-line.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [DividingLineComponent, TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
