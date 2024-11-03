import { CommonModule } from '@angular/common';
import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isOverlayVisible = false;
  isClosing = false;

  constructor(private renderer: Renderer2, private translate: TranslateService) {}
  @ViewChild('menu', { static: true }) menu!: ElementRef;

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  toggleOverlay() {
    this.isOverlayVisible = !this.isOverlayVisible;
    if (this.isOverlayVisible) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else {
      this.closeOverlay();
    }
  }

  closeOverlay() {
    this.isClosing = true;

    setTimeout(() => {
      this.isOverlayVisible = false;
      this.isClosing = false;
      this.renderer.removeStyle(document.body, 'overflow');
    }, 500);
  }

  setActiveLink(event: Event) {
    const target = event.target as HTMLElement;
    if (target.tagName === 'A') {
      const links = this.menu.nativeElement.querySelectorAll('a');
      links.forEach((link: HTMLElement) => this.renderer.removeClass(link, 'active'));
      this.renderer.addClass(target, 'active');
    }
  }
}
