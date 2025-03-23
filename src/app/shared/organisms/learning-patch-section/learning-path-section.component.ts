import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../atoms/button/button.component';
import { LabelComponent } from '../../atoms/label/label.component';
import { InputFieldComponent } from '../../molecules/input-field/input-field.component';

/**
 * Component that represents a section for creating or configuring a learning path.
 * This component is standalone (`standalone: true`) and uses reusable components such as
 * `ButtonComponent`, `LabelComponent`, and `InputFieldComponent` to build its user interface.
 * 
 * @selector 'learning-path-section' - Selector used to embed this component in HTML templates.
 * @standalone true - Indicates that this component is standalone and does not need to be declared in a module.
 * @templateUrl './learning-path-section.component.html' - Path to the associated HTML template file.
*/
@Component({
  selector: 'learning-path-section',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    LabelComponent,
    InputFieldComponent,
  ],
  templateUrl: './learning-path-section.component.html',
  styleUrls: [],
})

/**
  * Form control for handling input in the learning path field.
  * This control is initialized with an empty value and is configured as non-nullable,
  * meaning it will not accept null values.
  * 
  * @type {FormControl}
  * @default new FormControl('', { nonNullable: true })
*/
export class LearningPathSectionComponent {
  pathInputControl = new FormControl('', { nonNullable: true });
}
