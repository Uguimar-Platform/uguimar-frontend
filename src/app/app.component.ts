import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
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

import { RoutesNavDynamicSelect } from './interfaces/RoutesNavDynamicSelect';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
