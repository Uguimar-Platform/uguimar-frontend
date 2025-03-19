import { Component } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button.component';
import { DynamicSelectComponent } from '../../atoms/dynamic-select/dynamic-select.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [ButtonComponent, DynamicSelectComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {}
