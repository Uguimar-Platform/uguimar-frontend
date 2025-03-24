import {
  Component,
  input,
  output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

/**
 * @description
 * Reusable atomic button component in Angular.
 * Uses Angular Material for icons and allows customization with Tailwind CSS classes.
 * Implements `ChangeDetectionStrategy.OnPush` for performance optimization.
 */
@Component({
  selector: 'button-atom',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  /**
   * Custom Tailwind CSS classes for additional button styling.
   * @default '' (no additional classes)
   */
  readonly customClass = input<string>('');

  /**
   * Text to be displayed inside the button.
   * @default '' (no text)
   */
  readonly label = input<string>('');

  /**
   * Text color of the button.
   * @default '#fff' (white)
   */
  readonly textColor = input<string>('#fff');

  /**
   * Name of the Angular Material icon to be displayed inside the button.
   * If not provided, no icon will be displayed.
   * @default undefined (no icon)
   */
  readonly icon = input<string | undefined>(undefined);

  /**
   * Color of the icon inside the button.
   * @default '#000' (black)
   */
  readonly iconColor = input<string>('#000');

  /**
   * Position of the icon inside the button.
   * It can be placed either on the left or right of the text.
   * @default 'left' (left)
   */
  iconPosition = input<'left' | 'right'>('left');

  /**
   * Event emitted when the button is clicked.
   */
  buttonClick = output<void>();
}
