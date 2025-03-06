import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';  
/**
 * LinkComponent is a reusable component that renders a navigational link.
 * It allows customization of the displayed label, target route, and appearance.
 */
@Component({
  selector: 'app-link', // Defines the component's selector to be used in templates.
  imports: [RouterModule, NgClass], // Imports RouterModule to enable routing functionality.
  templateUrl: './link.component.html', // Specifies the HTML template for the component.
  styleUrl: './link.component.scss' // Defines the stylesheet for component styling.
})
export class LinkComponent {
  /**
   * The label to be displayed for the link.
   * Default value is 'Enlace'.
   */
  readonly label = input<string>('Enlace');

  /**
   * The route path to navigate when the link is clicked.
   * Default value is an empty string.
   */
  readonly route = input<string>('');

  /**
   * The color of the link text.
   * Available options: 'primary', 'warning', 'info', 'danger', 'secondary'.
   * Default value is 'primary'.
   */
  readonly color = input<'primary' | 'warning' | 'info' | 'danger' | 'secondary'>('primary');

  /**
   * Determines whether the link text should be underlined.
   * Default value is true.
   */
  readonly underline = input<boolean>(true);
}
