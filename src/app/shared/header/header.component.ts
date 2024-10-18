import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isOverlayVisible = false;
  isClosing = false; // Variable für den Schließzustand

  constructor(private renderer: Renderer2) {}

  toggleOverlay() {
    this.isOverlayVisible = !this.isOverlayVisible;
    if (this.isOverlayVisible) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else {
      this.closeOverlay();
    }
  }

  closeOverlay() {
    this.isClosing = true; // Schließzustand aktivieren

    // Entferne das Overlay nach der Animationsdauer (500ms) und setze den Zustand zurück
    setTimeout(() => {
      this.isOverlayVisible = false;
      this.isClosing = false;
      this.renderer.removeStyle(document.body, 'overflow');
    }, 500); // Zeit muss der Animationsdauer in der CSS entsprechen
  }
}
