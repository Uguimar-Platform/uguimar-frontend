import { CommonModule } from '@angular/common';
import {
  Component,
  input,
  output,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  FontAwesomeModule,
  IconDefinition,
} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  // Inputs como signals
  readonly color = input<
    'primary' | 'warning' | 'info' | 'danger' | 'secondary'
  >('primary');
  readonly outline = input<boolean>(false);
  readonly label = input<string>('');
  readonly icon = input<IconDefinition | null>(null);
  readonly iconPosition = input<'left' | 'right'>('left');
  readonly fullWidth = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly type = input<'button' | 'submit' | 'reset'>('button');

  // Output
  buttonClick = output<void>();

  onClick() {
    if (!this.disabled()) {
      this.buttonClick.emit();
    }
  }
}
