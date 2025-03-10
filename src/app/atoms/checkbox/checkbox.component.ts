import { Component, input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html'
})
export class CheckboxComponent {
  readonly id = input<string>('checkbox-' + Math.random().toString(36).substr(2, 9)); //El cambio
  readonly label = input<string>('');
  readonly color = input<string>('text-gray-900');
  readonly disabled = input<boolean>(false);
  
  control = new FormControl(false); // Para formulario reactivo 
}