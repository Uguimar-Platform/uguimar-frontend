import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../atoms/button/button.component';
import { LabelComponent } from '../../atoms/label/label.component';
import { InputFieldComponent } from '../../molecules/input-field/input-field.component';

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
export class LearningPathSectionComponent {
  pathInputControl = new FormControl('', { nonNullable: true });
}
