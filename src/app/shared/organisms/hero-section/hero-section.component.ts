import { Component, input, viewChild } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button.component';
import { DynamicSelectComponent } from '../../atoms/dynamic-select/dynamic-select.component';
import { LabelComponent } from '../../atoms/label/label.component';
import { RoutesNavDynamicSelect } from '../../../core/interfaces/RoutesNavDynamicSelect';

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
  /* 
    array routes for dynamic select component.
   */
  public arrayRoutes: RoutesNavDynamicSelect[] = [
    { value: '/home', option: 'Home' },
    { value: '/about', option: 'About' },
    { value: '/contact', option: 'Contact' },
  ];

  // signal for dynamic select component for change event.
  protected dynamicSelectMolecule =
    viewChild<DynamicSelectComponent>('dynamicSelect');

  /**
   * Method for click buttonAtom
   * @param
   */
  protected clickSearch() {
    this.dynamicSelectMolecule()?.eventNavigate();
  }
  /**
   * Method for event click button StartFree
   * @param
   */
  protected clickStartFree() {
    alert('click startFree');
  }
}
