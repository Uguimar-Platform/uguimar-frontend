import { Component, input } from '@angular/core';
import { LabelComponent } from '../../atoms/label/label.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChartSimple, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cardCourses',
  imports: [CommonModule, LabelComponent, ButtonComponent, FontAwesomeModule],
  templateUrl: './card-courses.component.html',
  styleUrl: './card-courses.component.scss',
})
export class CardCoursesComponent {
  readonly courseImage = input<string>('ImagenCurso');
  readonly alt = input<string>('DescripcionCurso');
  readonly courseName = input<string>('NombreCurso');
  readonly professor = input<string>('Profesor');
  readonly age = input<string>('Edad');
  readonly price = input<string>('Precio');
  readonly category = input<string>('CategoriaCurso');

  // Iconos para profesor y edad
  protected userIcon = faUser;
  protected barIcon = faChartSimple;
}
