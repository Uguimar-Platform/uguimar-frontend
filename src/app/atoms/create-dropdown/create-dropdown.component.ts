/**
 * This is the CreateDropdownComponent, a basic Angular component
 * that serves as a foundation for a dropdown feature.
 */

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-dropdown', // Defines the custom HTML tag for this component
  imports: [CommonModule], // Currently, no external modules are imported
  templateUrl: './create-dropdown.component.html', // Path to the HTML template for the component
  styleUrl: './create-dropdown.component.scss' // Path to the SCSS file for styling the component
})
export class CreateDropdownComponent {
  options = [
    {
      id : 1,
      name : 'Adulto (+18 años)'
    },
    {
      id : 2,
      name : 'Joven (13-17 años)'
    },
    {
      id : 3,
      name : 'Niño (0-12 años)'
    }
  ]

}
