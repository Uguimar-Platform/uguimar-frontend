import { CommonModule } from '@angular/common';
import {
  Component,
  input,
  output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'button-atom',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  // Inputs
  readonly customClass = input<string>(''); // Clases de Tailwind personalizadas
  readonly label = input<string>('');
  readonly textColor = input<string>('#fff');
  readonly icon = input<string | undefined>(undefined);
  readonly iconColor = input<string>('#000');
  iconPosition = input<'left' | 'right'>('left');

  // Output
  buttonClick = output<void>();
}
