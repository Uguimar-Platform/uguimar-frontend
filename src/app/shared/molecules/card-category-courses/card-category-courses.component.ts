import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-category-courses',
  imports: [],
  templateUrl: './card-category-courses.component.html',
  styleUrl: './card-category-courses.component.scss'
})
export class CardCategoryCoursesComponent {
  @Input({required : true}) title!: string;
  @Input({required : true}) course!: string;
  @Input({required : true}) description!: string;
  @Input({required : true}) image!: string;
  @Input({required : true}) buttonText!: string;
  @Input({required : true}) buttonLink!: string;
}
