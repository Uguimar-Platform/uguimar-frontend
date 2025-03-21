import { Component, input, signal } from '@angular/core';
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
  /* 
  This is a signal to the dynamic selection component from the button-atom.s
   */
  protected signalClickButton = signal<boolean>(false);
  /**
   * Method for update signalClickButton
   * @param
   */
  protected clickSearch() {
    this.signalClickButton.set(!this.signalClickButton());
  }
  /**
   * Method for event click button StartFree
   * @param
   */
  protected clickStartFree() {
    alert('click startFree');
  }
}
