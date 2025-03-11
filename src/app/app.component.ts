import { Component } from '@angular/core';
import { faPlus, faUser,faTrash } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from './atoms/button/button.component';
import { DynamicSelectComponent } from './atoms/dynamic-select/dynamic-select.component';
import { RoutesNavDynamicSelect } from './interfaces/RoutesNavDynamicSelect';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent, DynamicSelectComponent],
  templateUrl: './app.component.html',
/*   styleUrl: './app.component.scss' */
})
export class AppComponent {
  title = 'frontend';
faUser = faUser;
  plus=faPlus;
  faTrash = faTrash;
  status: number = 2;
  public arrayRoutes: RoutesNavDynamicSelect[] = [
            {
                  "option": "",
                  "value": "https://www.ejemplo.com/inicio"
            },
            {
                  "option": "",
                  "value": "https://www.ejemplo.com/nosotros"
            },
            {
                  "option": "",
                  "value": "https://www.ejemplo.com/servicios"
            },
            {
                  "option": "",
                  "value": "https://www.ejemplo.com/contacto"
            },
            {
                  "option": "",
                  "value": "https://www.ejemplo.com/blog"
            },
            {
                  "option": "",
                  "value": "https://www.ejemplo.com/galeria"
            },
            {
                  "option": "",
                  "value": "https://www.ejemplo.com/faq"
            },
            {
                  "option": "",
                  "value": "https://www.ejemplo.com/privacidad"
            },
            {
                  "option": "",
                  "value": "https://www.ejemplo.com/terminos"
            },
            {
                  "option": "",
                  "value": "https://www.ejemplo.com/soporte"
            }
  ]
  open() {
    console.log('open');

  }
}