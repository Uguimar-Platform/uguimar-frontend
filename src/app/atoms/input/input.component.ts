import { CommonModule } from '@angular/common';
import { Component, forwardRef, input } from '@angular/core';
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

/**
 * This component allows you to display a configurable input field.
 * Supports the properties: type, placeholder, label, disabled, width, height and backgroundColor.
 */
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule, CommonModule, FontAwesomeModule],
  templateUrl: './input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  readonly type = input('text');
  readonly placeholder = input('');
  readonly label = input('');
  readonly disabled = input(false);
  readonly width = input('100%');
  readonly height = input('40px');
  readonly backgroundColor = input('#ffffff');
  readonly customClass = input<string | Record<string, boolean>>('');
  readonly labelIcon = input<IconDefinition | null>(null);

  // Password visibility properties
  showPassword = false;
  eyeIcon = faEyeSlash;
  eyeIconVisible = faEye;

  value = '';
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: (value: string) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
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

  readonly minDate = input<string | null>(null);
  readonly maxDate = input<string | null>(null);

  /**
   * Toggles the password visibility
   */
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  /**
   * Gets the effective input type based on password visibility or date type
   */
  getEffectiveType(): string {
    if (this.type() === 'password' && this.showPassword) {
      return 'text';
    }
    if (this.type() === 'date') {
      return 'date';
    }
    return this.type();
  }

  /**
   * Gets the minimum date for date inputs
   */
  getMinDate(): string | null {
    return this.minDate();
  }

  /**
   * Gets the maximum date for date inputs
   */
  getMaxDate(): string | null {
    return this.maxDate();
  }
}
