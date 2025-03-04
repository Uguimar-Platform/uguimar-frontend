import { CommonModule } from '@angular/common';
import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  // Inputs como signals
  color = input<'primary' | 'warning' | 'info' | 'danger' | 'secondary'>('primary');
  outline = input<boolean>(false);
  label = input<string>('');
  icon = input<IconDefinition | null>(null);
  iconPosition = input<'left' | 'right'>('left');
  fullWidth = input<boolean>(false);
  disabled = input<boolean>(false);
  type = input<'button' | 'submit' | 'reset'>('button');

  // Output
  click = output<void>();


  onClick() {
    if (!this.disabled()) {
      this.click.emit();
    }
  }
}