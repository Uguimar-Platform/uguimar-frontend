import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';

/**
 * LinkComponent is a reusable component that renders a navigational link.
 * It allows customization of the displayed label, target route, and appearance.
 */
@Component({
  selector: 'app-link', // Defines the component's selector to be used in templates.
  standalone: true, // Componente independiente
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
   * @param {'blue-dark' | 'blue-medium' | 'blue-light' | 'blue-lightest' | 'blue-lighter' | 'blue-faint' | 'grey-light'} color - Color of the link (Default: 'blue-medium')
   */
  readonly color = input<string>('blue-medium');

  /**
   * Gets the CSS class for text color based on the selected color option.
   * @returns {string} CSS class for the text color
   */
  getTextColorClass(): string {
    switch (this.color()) {
      case 'blue-dark':
        return 'text-[#081F5C]';
      case 'blue-medium':
        return 'text-[#334EAC]';
      case 'blue-light':
        return 'text-[#7098D1]';
      case 'blue-lightest':
        return 'text-[#D0E3FF]';
      case 'blue-lighter':
        return 'text-[#E7F1FF]';
      case 'blue-faint':
        return 'text-[#F9FCFF]';
      case 'grey-light':
        return 'text-[#E7E7E7]';
      default:
        return 'text-[#334EAC]';
    }
  }

  /**
   * Determines whether the link text should be underlined.
   * @param {boolean} underline - Whether the link should have an underline (Default: true)
   */
  readonly underline = input<boolean>(true);
}
