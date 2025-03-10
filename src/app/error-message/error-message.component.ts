import { CommonModule } from '@angular/common';
import { Component, forwardRef, input } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

/**
 * This component displays a configurable input field with support for error messages.
 * It supports properties such as type, placeholder, label, disabled, width, height, backgroundColor, and errorMessage.
 */
@Component({
  selector: 'app-error-message', // Defines the component's selector to be used in HTML templates
  standalone: true, // Marks this component as standalone
  imports: [FormsModule, CommonModule, FontAwesomeModule], // Imports necessary modules
  templateUrl: './error-message.component.html', // Associated HTML file
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, // Provides a way to connect the component with Angular forms
      useExisting: forwardRef(() => ErrorMessageComponent), // Uses a forward reference to the current component
      multi: true, // Allows multiple providers
    },
  ],
})
export class ErrorMessageComponent implements ControlValueAccessor {
  readonly type = input('text'); // Input type (default: text)
  readonly placeholder = input(''); // Placeholder text
  readonly label = input(''); // Input label
  readonly disabled = input(false); // Disabled state (default: false)
  readonly width = input('100%'); // Input field width
  readonly height = input('40px'); // Input field height
  readonly backgroundColor = input('#ffffff'); // Background color
  readonly customClass = input<string | Record<string, boolean>>(''); // Custom CSS class
  readonly labelIcon = input<IconDefinition | null>(null); // Icon for the label
  readonly errorMessage = input<string | null>(null); // Error message

  value: string = ''; // Current value of the input
  onChange: (value: string) => void = () => {}; // Function to handle value changes
  onTouched: () => void = () => {}; // Function to handle touch events

  /**
   * Sets the component's value.
   * @param value - The value to set.
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
   * Updates the component's value and notifies both value change and touch events.
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
   * @returns A boolean indicating whether there is an error message.
   */
  hasError(): boolean {
    return !!this.errorMessage();
  }
}
