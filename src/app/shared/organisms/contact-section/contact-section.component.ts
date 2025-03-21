import { Component } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button.component';
import { InputFieldComponent } from '../../molecules/input-field/input-field.component';
import { LabelComponent } from '../../atoms/label/label.component';

/**
 * @Component ContactSectionComponent
 * This component represents the contact section of a webpage.
 * It consists of several input elements, labels, and a button that allow users to send messages or communicate via a form.
 */

@Component({
  selector: 'app-contact-section',
  imports: [ButtonComponent, InputFieldComponent, LabelComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {}
