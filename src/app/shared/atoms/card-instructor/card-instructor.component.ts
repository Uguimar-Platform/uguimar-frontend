import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-instructor',
  standalone: true,
  templateUrl: './card-instructor.component.html',
  styleUrls: [],
})
export class CardInstructorComponent {
  readonly name = input<string>('');
  readonly image = input<string>('');
  readonly opinion = input<string>('');
}
