import { CommonModule } from '@angular/common';
import { Component, forwardRef, input } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

/**
 * This component displays a configurable input field with error message support.
 * Supports properties: type, placeholder, label, disabled, width, height, backgroundColor, and errorMessage.
 */
@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [FormsModule, CommonModule, FontAwesomeModule],
  templateUrl: './error-message.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ErrorMessageComponent),
      multi: true,
    },
  ],
})
export class ErrorMessageComponent implements ControlValueAccessor {
  readonly type = input('text');
  readonly placeholder = input('');
  readonly label = input('');
  readonly disabled = input(false);
  readonly width = input('100%');
  readonly height = input('40px');
  readonly backgroundColor = input('#ffffff');
  readonly customClass = input<string | Record<string, boolean>>('');
  readonly labelIcon = input<IconDefinition | null>(null);
  readonly errorMessage = input<string | null>(null); // Error message input

  value: string = '';
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  /**
   * Sets the value of the component.
   * @param value - The value to be set.
   */
  writeValue(value: string): void {
    this.value = value ?? '';
  }

  /**
   * Registers a function to be called when the value changes.
   * @param fn - The function to register.
   */
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  /**
   * Registers a function to be called when the component loses focus.
   * @param fn - The function to register.
   */
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  /**
   * Handles the input event.
   * Updates the component value and notifies value change and touch events.
   * @param event - The input event.
   */
  onInputChange(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.value = inputValue;
    this.onChange(inputValue);
    this.onTouched();
  }

  /**
   * Checks if the input has an error.
   * @returns boolean indicating if an error message exists.
   */
  hasError(): boolean {
    return !!this.errorMessage();
  }
}