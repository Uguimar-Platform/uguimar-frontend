import { Component, Input, signal } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html'
})
export class CheckboxComponent {
  @Input() label = signal<string>('');
  @Input() color = signal<string>('text-gray-900');
  @Input() disabled = signal<boolean>(false);
  
  control = new FormControl(false); // Para formmulario reactivo 
}
