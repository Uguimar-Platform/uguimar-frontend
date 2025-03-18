import { Component } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button.component';
import { InputComponent } from '../../atoms/input/input.component';
@Component({
  selector: 'app-contact-section',
  imports: [ButtonComponent, InputComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {}
