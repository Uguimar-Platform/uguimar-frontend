import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

/**
 * Component that represents a course category card.
 */
@Component({
  selector: 'app-card-category-courses',
  imports: [CommonModule],
  templateUrl: './card-category-courses.component.html',
  styleUrl: './card-category-courses.component.scss',
})
export class CardCategoryCoursesComponent {
  /**
   * Title of the card.
   * @param '' (Empty string)
   */
  readonly title = input<string>('');

  /**
   * Name of the course associated with the card.
   * @param '' (Empty string)
   */
  readonly course = input<string>('');

  /**
   * Brief description of the course.
   * @param '' (Empty string)
   */
  readonly description = input<string>('');

  /**
   * URL of the image to be displayed on the card.
   * @param '' (Empty string)
   */
  readonly image = input<string>('');

  /**
   * Text to be displayed on the action button.
   * @param '' (Empty string)
   */
  readonly buttonText = input<string>('');

  /**
   * Link to which the action button will redirect.
   * @param '' (Empty string)
   */
  readonly buttonLink = input<string>('');
}
