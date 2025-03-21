import { Component, input } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button.component';
import { DynamicSelectComponent } from '../../atoms/dynamic-select/dynamic-select.component';
import { LabelComponent } from '../../atoms/label/label.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [ButtonComponent, DynamicSelectComponent, LabelComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  /* 
    This images property is used for hero section images.
   */
  protected images = input<string[]>([
    '/assets/images/1.webp',
    '/assets/images/2.webp',
    '/assets/images/3.webp',
  ]);
}
