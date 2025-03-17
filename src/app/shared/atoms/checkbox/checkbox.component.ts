import { Component, input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  standalone: true, // Añadimos esta línea
})
export class CheckboxComponent {
  readonly id = 'checkbox-' + Math.random().toString(36).substr(2, 9);
  readonly label = input<string>('');
  readonly disabled = input<boolean>(false);
  readonly color = input<string>('blue-dark');

  getTextColorClass(): string {
    switch (this.color()) {
      case 'blue-dark':
        return 'text-[#081F5C]';
      case 'blue-medium':
        return 'text-[#334EAC]';
      case 'blue-light':
        return 'text-[#7098D1]';
      case 'blue-lightest':
        return 'text-[#D0E3FF]';
      case 'blue-lighter':
        return 'text-[#E7F1FF]';
      case 'blue-faint':
        return 'text-[#F9FCFF]';
      case 'grey-light':
        return 'text-[#E7E7E7]';
      default:
        return 'text-[#081F5C]';
    }
  }
}
