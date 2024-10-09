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
  @ViewChild('email') mailInput!: ElementRef;
  @ViewChild('message') messageInput!: ElementRef;
  @ViewChild('checkbox') checkboxInput!: ElementRef;

  isNameInvalid: boolean = false;
  isNameValid: boolean = false;
  isMailInvalid: boolean = false;
  isMailValid: boolean = false;
  isMessageInvalid: boolean = false;
  isMessageValid: boolean = false;
  isCheckboxChecked: boolean = false;
  isFormValid: boolean = false;

  contactData = {
    name: '',
    email: '',
    message: '',
  }

  onSubmit() {
    console.log('test')
  }

  checkValueName() {
    const nameValue = this.nameInput.nativeElement.value;
    
    if (nameValue === '') {
      this.isNameInvalid = true;
    } else {
      this.isNameInvalid = false;
    }

    this.checkFormValidity();
  }

  checkValidName() {
    const nameValue = this.nameInput.nativeElement.value;
    
    if (nameValue === '') {
      this.isNameValid = false;
      this.isNameInvalid = true;
    } else {
      this.isNameValid = true;
      this.isNameInvalid = false;
    }

    this.checkFormValidity();
  }

  checkValueMail() {
    const mailValue = this.mailInput.nativeElement.value;
    const emailPattern = /^[a-zA-Z0-9._\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}$/;

    if (mailValue === '' || !emailPattern.test(mailValue)) {
      this.isMailInvalid = true;
    } else {
      this.isMailInvalid = false;
    }

    this.checkFormValidity();
  }

  checkValidMail() {
    const mailValue = this.mailInput.nativeElement.value;
    const emailPattern = /^[a-zA-Z0-9._\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}$/;

    if (mailValue === '' || !emailPattern.test(mailValue)) {
      this.isMailInvalid = true;
      this.isMailValid = false;
    } else {
      this.isMailInvalid = false;
      this.isMailValid = true;
    }

    this.checkFormValidity();
  }

  checkValueMessage() {
    const messageValue = this.messageInput.nativeElement.value;

    if (messageValue === '') {
      this.isMessageInvalid = true;
    } else {
      this.isMessageInvalid = false;
    }
    
    this.checkFormValidity();
  }

  checkValidMessage() {
    const messageValue = this.messageInput.nativeElement.value;

    if (messageValue === '') {
      this.isMessageInvalid = true;
      this.isMessageValid = false;
    } else {
      this.isMessageInvalid = false;
      this.isMessageValid = true;
    }

    this.checkFormValidity();
  }

  toggleCheckbox() {
    this.isCheckboxChecked = !this.isCheckboxChecked;
    this.checkFormValidity();
  }

  checkFormValidity() {
    this.isFormValid = this.isNameValid && this.isMailValid && this.isMessageValid && this.isCheckboxChecked;
  }
}
