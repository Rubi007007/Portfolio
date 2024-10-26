import { CommonModule } from '@angular/common';
import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isOverlayVisible = false;
  isClosing = false;

  constructor(private renderer: Renderer2) {}
  @ViewChild('menu', { static: true }) menu!: ElementRef;

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
