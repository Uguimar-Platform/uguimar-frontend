import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-category-courses',
  imports: [CommonModule],
  templateUrl: './card-category-courses.component.html',
  styleUrl: './card-category-courses.component.scss'
})
export class CardCategoryCoursesComponent {
  readonly title = input<string>('')
  readonly course = input<string>('')
  readonly description = input<string>('')
  readonly image = input<string>('')
  readonly buttonText = input<string>('')
  readonly buttonLink = input<string>('')
}
