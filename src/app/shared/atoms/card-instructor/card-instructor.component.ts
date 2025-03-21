import { Component, input } from '@angular/core';
import { LabelComponent } from '../label/label.component';

/**
 * @Component CardInstructorComponent
 * This component represents an instructor's card, displaying their name, image, and opinion.
 * It uses the LabelComponent for displaying the instructor's name.
 *
 * - `name`: The instructor's full name.
 * - `image`: The URL of the instructor's profile picture.
 * - `opinion`: The instructor's opinion or review.
 *
 * The component is marked as standalone and imports the LabelComponent for modularity.
 */
@Component({
  selector: 'app-card-instructor',
  standalone: true,
  templateUrl: './card-instructor.component.html',
  styleUrls: [],
  imports: [LabelComponent],
})
export class CardInstructorComponent {
  /** The instructor's full name */
  readonly name = input<string>('');

  /** The instructor's profile picture URL */
  readonly image = input<string>('');

  /** The instructor's opinion or review */
  readonly opinion = input<string>('');
}
