import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @ViewChild('name') nameInput!: ElementRef;
  isNameInvalid: boolean = false;


  checkValue() {
    const nameValue = this.nameInput.nativeElement.value;
    
    if (nameValue === '') {
      this.isNameInvalid = true;
    } else {
      this.isNameInvalid = false;
    }
  }
}
