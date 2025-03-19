import { Component } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button.component';
import { InputFieldComponent } from '../../molecules/input-field/input-field.component';
@Component({
  selector: 'app-contact-section',
  imports: [ButtonComponent, InputFieldComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {}
