import { Component, input } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../atoms/input/input.component';
import { ErrorMessageComponent } from '../../atoms/error-message/error-message.component';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

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
export class InputFieldComponent {
  readonly label = input<string | undefined>(undefined);
  readonly type = input<string>('text');
  readonly placeholder = input<string | undefined>(undefined);
  readonly disabled = input<boolean>(false);
  readonly width = input<string>('100%');
  readonly height = input<string>('40px');
  readonly customClass = input<string | Record<string, boolean> | undefined>(
    undefined
  );
  readonly labelIcon = input<IconDefinition | undefined>(undefined);
  readonly errorClass = input<string>('text-red-500 text-sm mt-1');

  control = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required],
  });

  get hasError(): boolean {
    return this.control.invalid && (this.control.dirty || this.control.touched);
  }

  get errorMessage(): string | null {
    if (this.control.errors?.['required']) {
      return 'Este campo es obligatorio.';
    }
    return null;
  }
}
