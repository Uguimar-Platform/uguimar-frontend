import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  FontAwesomeModule,
  IconDefinition,
} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
// Entradas (@Input) para personalizar el botón
  @Input() color: 'primary' | 'warning' | 'info' | 'danger' | 'secondary' = 'primary';
  @Input() outline: boolean = false;
  @Input() label: string = '';
  @Input() icon: IconDefinition | null = null;
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() fullWidth: boolean = false;
  @Input() disabled: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() set preset(value: 'submit' | 'reset' | null) {
    if (value === 'submit') {
      this.color = 'primary';
      this.type = 'submit';
    } else if (value === 'reset') {
      this.color = 'primary';
      this.type = 'reset';
    }
  }
  // Propiedad para los presets


  @Output() click = new EventEmitter<void>();
// Salida (@Output) para emitir eventos

// Método que se ejecuta al hacer clic
  onClick() {
    if (!this.disabled) {
      this.click.emit();// Emite el evento solo si no está deshabilitado
    }
  }
}
