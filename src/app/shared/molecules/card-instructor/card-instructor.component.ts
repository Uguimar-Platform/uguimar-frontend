import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from '../../atoms/label/label.component';

/**
 * @Component CardInstructorComponent
 * Represents an instructor's profile card with customizable theme styles.
 */
@Component({
  selector: 'card-instructor-molecule',
  standalone: true,
  templateUrl: './card-instructor.component.html',
  styleUrls: [],
  imports: [CommonModule, LabelComponent],
})
export class CardInstructorComponent {
  /** The instructor's full name */
  readonly name = input<string>('');

  /** The instructor's profile picture URL */
  readonly image = input<string>('');

  /** The instructor's opinion or review */
  readonly opinion = input<string>('');

  /** The theme of the card (light or dark) */
  readonly theme = input<'light' | 'dark'>('light');
}
