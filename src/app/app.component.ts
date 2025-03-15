import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  faUser,
  faEnvelope,
  faCalendar,
  faLock,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

import { ButtonComponent } from './atoms/button/button.component';
import { DynamicSelectComponent } from './atoms/dynamic-select/dynamic-select.component';
import { RoutesNavDynamicSelect } from './interfaces/RoutesNavDynamicSelect';
import { LinkComponent } from './atoms/link/link.component';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './atoms/error-message/error-message.component';
import { LabelComponent } from './atoms/label/label.component';
import { CheckboxComponent } from './atoms/checkbox/checkbox.component';
import { CreateDropdownComponent } from './atoms/create-dropdown/create-dropdown.component';
import { NavigationMenuComponent } from './molecules/navigation-menu/navigation-menu.component';
import { DynamicIconComponent } from './molecules/dynamic-icon/dynamic-icon.component';
import { FooterAuthComponent } from './molecules/footer-auth/footer-auth.component';
import { InputFieldComponent } from './molecules/input-field/input-field.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonComponent,
    LabelComponent,
    CommonModule,
    DynamicSelectComponent,
    LinkComponent,
    ErrorMessageComponent,
    CheckboxComponent,
    CreateDropdownComponent,
    NavigationMenuComponent,
    InputFieldComponent,
    ReactiveFormsModule,
    DynamicIconComponent,
    FooterAuthComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'frontend';

  // Icons
  faUser = faUser;
  faEnvelope = faEnvelope;
  faCalendar = faCalendar;
  faLock = faLock;
  plus = faPlus;
  faTrash = faTrash;

  // Dynamic select options
  public arrayRoutes: RoutesNavDynamicSelect[] = [
    {
      option: '',
      value: 'https://www.ejemplo.com/inicio',
    },
    {
      option: '',
      value: 'https://www.ejemplo.com/nosotros',
    },
    {
      option: '',
      value: 'https://www.ejemplo.com/servicios',
    },
    {
      option: '',
      value: 'https://www.ejemplo.com/contacto',
    },
    {
      option: '',
      value: 'https://www.ejemplo.com/blog',
    },
    {
      option: '',
      value: 'https://www.ejemplo.com/galeria',
    },
    {
      option: '',
      value: 'https://www.ejemplo.com/faq',
    },
    {
      option: '',
      value: 'https://www.ejemplo.com/privacidad',
    },
    {
      option: '',
      value: 'https://www.ejemplo.com/terminos',
    },
    {
      option: '',
      value: 'https://www.ejemplo.com/soporte',
    },
  ];

  errorMessage: string | null = 'Este es un mensaje de error por default';

  open() {
    console.log('open');
  }

  // Form
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    // Initialize the form
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      birthdate: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  // Getter for password form control
  get passwordControl() {
    return this.registrationForm.get('password') as FormControl;
  }
}
