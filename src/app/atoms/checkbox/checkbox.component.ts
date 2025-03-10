import { Component, input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html'
})
export class CheckboxComponent {
  readonly id = 'checkbox-unique'; 
  readonly label = input<string>('');
  readonly color = input<string>('text-gray-900');
  readonly disabled = input<boolean>(false);
  
}