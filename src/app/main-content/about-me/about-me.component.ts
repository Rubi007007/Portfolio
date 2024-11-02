import { Component } from '@angular/core';
import { DividingLineComponent } from '../../shared/dividing-line/dividing-line.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [DividingLineComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
