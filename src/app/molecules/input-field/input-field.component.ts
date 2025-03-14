import { Component, input, effect, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../atoms/input/input.component';
import { ErrorMessageComponent } from '../../atoms/error-message/error-message.component';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

/**
 * Component that implements a reusable input field.
 * Combines the InputComponent and ErrorMessageComponent atoms to create a molecule
 * that handles form validation and displays error messages.
 */
@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    ErrorMessageComponent,
  ],
  templateUrl: './input-field.component.html',
})
export class InputFieldComponent implements OnInit {
  /**
   * Label that will be displayed next to the input field.
   * @param undefined - Default value if no label is provided.
   */
  readonly label = input<string | undefined>(undefined);

  /**
   * Type of input field (text, password, email, etc).
   * @param 'text' - Default value if not specified.
   */
  readonly type = input<string>('text');

  /**
   * Placeholder text that appears when the field is empty.
   * @param undefined - Default value if no placeholder is provided.
   */
  readonly placeholder = input<string | undefined>(undefined);

  /**
   * Determines if the input field is disabled.
   * @param false - By default, the field is enabled.
   */
  readonly disabled = input<boolean>(false);

  /**
   * Width of the input field.
   * @param '100%' - Default value to occupy all available width.
   */
  readonly width = input<string>('100%');

  /**
   * Height of the input field.
   * @param '40px' - Default value for height.
   */
  readonly height = input<string>('40px');

  /**
   * Custom CSS classes for the input field.
   * @param undefined - Default value if no custom classes are provided.
   */
  readonly customClass = input<string | Record<string, boolean> | undefined>(
    undefined
  );

  /**
   * Icon that will be displayed next to the field label.
   * @param undefined - Default value if no icon is provided.
   */
  readonly labelIcon = input<IconDefinition | undefined>(undefined);

  /**
   * CSS classes for the error message.
   * @param 'text-red-500 text-sm mt-1' - Default style for error messages.
   */
  readonly errorClass = input<string>('text-red-500 text-sm mt-1');

  /**
   * Indicates if the field is required.
   * @param true - By default, the field is required.
   */
  readonly required = input<boolean>(true);

  /**
   * Indicates if the field should be validated as an email address.
   * @param false - By default, it's not validated as an email.
   */
  readonly email = input<boolean>(false);

  /**
   * Minimum length required for the field value.
   * @param null - By default, there is no minimum length.
   */
  readonly minLength = input<number | null>(null);

  /**
   * Maximum length allowed for the field value.
   * @param null - By default, there is no maximum length.
   */
  readonly maxLength = input<number | null>(null);

  /**
   * External form control to use instead of the internal one
   */
  readonly formControl = input<FormControl | null>(null);

  /**
   * Form control to handle the field value and validation.
   * Initialized with an empty string and the corresponding validators.
   */
  control!: FormControl<string>;

  ngOnInit() {
    // Use external form control if provided, otherwise create internal one
    this.control =
      this.formControl() ||
      new FormControl<string>('', {
        nonNullable: true,
        validators: this.getValidators(),
      });

    // If using compareWith, we need to update validation when the compared field changes
    if (this.compareWith()) {
      this.compareWith()!.valueChanges.subscribe(() => {
        this.control.updateValueAndValidity();
      });
    }
  }

  /**
   * The constructor is used to initialize the effect that updates the validators
   * when input properties change.
   */
  constructor() {
    effect(() => {
      // Only update validators if using internal control
      if (!this.formControl()) {
        // Store the current value to preserve it during the update
        const currentValue = this.control?.value;

        // Update validators based on current properties
        this.updateValidators();

        // Restore the original value if it changed during the update
        if (this.control?.value !== currentValue) {
          this.control?.setValue(currentValue, { emitEvent: false });
        }
      }
    });
  }

  /**
   * Method that updates the form control validators.
   * Called when relevant input properties change.
   */
  private updateValidators(): void {
    this.control.setValidators(this.getValidators());
    this.control.updateValueAndValidity();
  }

  /**
   * Reference to another form control to compare values with (for password confirmation)
   */
  readonly compareWith = input<FormControl | null>(null);

  /**
   * Custom error message for when the field doesn't match the compareWith field
   */
  readonly matchErrorMessage = input<string>('Invalid password confirmation');

  /**
   * Gets the array of validators based on configured properties.
   * @returns Array of validators to apply to the control.
   */
  private getValidators() {
    const validators = [];

    // Add required field validator if applicable
    if (this.required()) {
      validators.push(Validators.required);
    }

    // Add email format validator if applicable
    if (this.email()) {
      validators.push(Validators.email);
    }

    // Add minimum length validator if specified
    if (this.minLength() !== null) {
      validators.push(Validators.minLength(this.minLength()!));
    }

    // Add maximum length validator if specified
    if (this.maxLength() !== null) {
      validators.push(Validators.maxLength(this.maxLength()!));
    }

    // Add comparison validator if compareWith is specified
    if (this.compareWith()) {
      validators.push(this.createCompareValidator());
    }

    return validators;
  }

  /**
   * Creates a validator that compares the control value with another control's value
   * @returns A validator function
   */
  private createCompareValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!this.compareWith()) return null;

      const compareValue = this.compareWith()!.value;
      const currentValue = control.value;

      // Only validate if both values exist
      if (
        compareValue === undefined ||
        compareValue === null ||
        currentValue === undefined ||
        currentValue === null
      ) {
        return null;
      }

      // Ensure we're comparing strings in the same format
      const compareValueStr = String(compareValue).trim();
      const currentValueStr = String(currentValue).trim();

      return compareValueStr === currentValueStr ? null : { match: true };
    };
  }

  /**
   * Determines if the field has a validation error that should be displayed.
   * Only shows errors if the user has interacted with the field.
   * @returns true if there is an error to display, false otherwise.
   */
  hasError(): boolean {
    return this.control.invalid && (this.control.dirty || this.control.touched);
  }

  /**
   * Gets the appropriate error message based on the type of validation error.
   * @returns Error message or null if there is no error.
   */
  get errorMessage(): string | null {
    // Required field error
    if (this.control.errors?.['required']) {
      return 'Este campo es obligatorio.';
    }

    // Email format error
    if (this.control.errors?.['email']) {
      return 'Usuario o correo electrónico inválido';
    }

    // Minimum length error
    if (this.control.errors?.['minlength']) {
      return `Este campo debe tener al menos ${this.minLength()} caracteres.`;
    }

    // Maximum length error
    if (this.control.errors?.['maxlength']) {
      return `Este campo no debe exceder ${this.maxLength()} caracteres.`;
    }

    // Match error (for password confirmation)
    if (this.control.errors?.['match']) {
      return this.matchErrorMessage();
    }

    return null;
  }
}
