import { Component, input } from '@angular/core';
import { LabelComponent } from '../../atoms/label/label.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChartSimple, faUser } from '@fortawesome/free-solid-svg-icons';

/**
 * Component that represents a course card.
 *
 * This component displays detailed information about a course, including its name,
 * image, description, instructor, recommended age, price, and category.
 */
@Component({
  selector: 'app-cardCourses',
  imports: [CommonModule, LabelComponent, ButtonComponent, FontAwesomeModule],
  templateUrl: './card-courses.component.html',
  styleUrl: './card-courses.component.scss',
})
export class CardCoursesComponent {
  /**
   * Representative image of the course.
   * @type {string}
   */
  readonly courseImage = input<string>('ImagenCurso');

  /**
   * Alternative description for the course image.
   * @type {string}
   */
  readonly alt = input<string>('DescripcionCurso');

  /**
   * Course name.
   * @type {string}
   */
  readonly courseName = input<string>('NombreCurso');
  /**
   * Name of the instructor teaching the course.
   * @type {string}
   */
  readonly teacher = input<string>('Profesor');

  /**
   * Recommended age for taking the course.
   * @type {string}
   */
  readonly age = input<string>('Edad');

  /**
   * Course price.
   * @type {string}
   */
  readonly price = input<string>('Precio');

  /**
   * Category to which the course belongs.
   * @type {string}
   */
  readonly category = input<string>('CategoriaCurso');

  /**
   * User icon imported from FontAwesome.
   * @type {IconDefinition}
   */
  protected userIcon = faUser;

  /**
   * Bar chart icon imported from FontAwesome.
   * @type {IconDefinition}
   */
  protected barIcon = faChartSimple;
}
