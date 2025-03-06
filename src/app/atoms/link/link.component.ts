import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * LinkComponent is a reusable component that renders a navigational link.
 * It allows customization of the displayed label and the target route.
 */
@Component({
  selector: 'app-link', // Defines the component's selector to be used in templates.
  imports: [RouterModule], // Imports RouterModule to enable routing functionality.
  templateUrl: './link.component.html', // Specifies the HTML template for the component.
  styleUrl: './link.component.scss' // Defines the stylesheet for component styling.
})
export class LinkComponent {
  /**
   * The label to be displayed for the link.
   * Default value is 'Enlace'.
   */
  @Input() label: string = 'Enlace';

  /**
   * The route path to navigate when the link is clicked.
   * Default value is an empty string.
   */
  @Input() route: string = '';
}