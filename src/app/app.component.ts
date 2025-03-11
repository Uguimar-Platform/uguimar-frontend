import { Component } from '@angular/core';

import { faPlus, faUser, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from './atoms/button/button.component';
import { DynamicSelectComponent } from './atoms/dynamic-select/dynamic-select.component';
import { RoutesNavDynamicSelect } from './interfaces/RoutesNavDynamicSelect';
import { LinkComponent } from './atoms/link/link.component';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './atoms/error-message/error-message.component';
import { LabelComponent } from './atoms/label/label.component';
import { CheckboxComponent } from './atoms/checkbox/checkbox.component';
import { CreateDropdownComponent } from './atoms/create-dropdown/create-dropdown.component';

@Component({
  selector: 'app-root',

  imports: [
    ButtonComponent,
    LabelComponent,
    CommonModule,
    DynamicSelectComponent,
    LinkComponent,
    ErrorMessageComponent,
    CheckboxComponent,
    CreateDropdownComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  /*   styleUrl: './app.component.scss' */
})
export class AppComponent {
  title = 'frontend';
  faUser = faUser;
  plus = faPlus;
  faTrash = faTrash;
  status = 2;
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
}
