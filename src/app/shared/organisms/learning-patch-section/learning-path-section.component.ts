// learning-path-section.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../atoms/button/button.component';
import { LabelComponent } from '../../atoms/label/label.component';
import { InputComponent } from '../../atoms/input/input.component';
import { IconCloudComponent } from '../../atoms/icon-cloud/icon-cloud.component';
import { InputFieldComponent } from '../../molecules/input-field/input-field.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'learning-path-section',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    LabelComponent,
    InputComponent,
    IconCloudComponent,
    InputFieldComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './learning-path-section.component.html',
  styleUrl: './learning-path-section.component.scss',
})
export class LearningPathSectionComponent {
  pathInputControl = new FormControl('', { nonNullable: true });

  generatePath() {
    console.log('Generando ruta personalizada:', this.pathInputControl.value);
  }
}
