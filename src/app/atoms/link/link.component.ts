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
  styleUrl: './link.component.scss', // Defines the stylesheet for component styling.
})
export class LinkComponent {
  /**
   * The label to be displayed for the link.
   * @param {string} label - Text displayed for the link (Default: 'Enlace')
   */
  readonly label = input<string>('Enlace');

  /**
   * The route path to navigate when the link is clicked.
   * @param {string} route - Path used for navigation (Default: '')
   */
  readonly route = input<string>('');

  /**
   * The color of the link text.
   * @param {'primary' | 'warning' | 'info' | 'danger' | 'secondary'} color - Color of the link (Default: 'primary')
   */
  readonly color = input<
    'primary' | 'warning' | 'info' | 'danger' | 'secondary'
  >('primary');

  /**
   * Determines whether the link text should be underlined.
   * @param {boolean} underline - Whether the link should have an underline (Default: true)
   */
  readonly underline = input<boolean>(true);
}
