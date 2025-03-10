import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Angular component that displays an error message.
 *
 * This component is standalone and can be reused to display
 * custom error messages in different parts of the application.
 */
@Component({
  selector: 'app-error-message', // Selector that identifies the component in templates.
  standalone: true, // Indicates that the component is standalone.
  templateUrl: './error-message.component.html', // Path to the associated HTML template.
})
export class ErrorMessageComponent {
  /**
   * Error message to be displayed in the component.
   *
   * @type {string | null}
   * @default null
   */
  readonly message = input<string | null>(null);

  /**
   * Custom class or set of classes to customize the styling of the component.
   *
   * @type {string | Record<string, boolean>}
   * @default ''
   */
  readonly customClass = input<string | Record<string, boolean>>('');
}
