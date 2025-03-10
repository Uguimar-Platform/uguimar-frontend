import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent {
  label = signal<string>('');
  checked = signal<boolean>(false);
  color = signal<string>('text-gray-900'); 
}