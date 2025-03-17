//Importing necessary modules from Angular
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  /**
   * @component CreateDropdownComponent
   * @description
   * This component represents a dropdown selection menu. It dynamically
   * loads a predefined list of options based on user categories.
   */

  selector: 'app-create-dropdown',
  /**
   * @selector 'app-create-dropdown'
   * Defines the custom HTML tag for this component, allowing it to be
   * used in templates as <app-create-dropdown>.
   */

  imports: [CommonModule],
  /**
   * @imports [CommonModule]
   * Includes CommonModule to provide built-in Angular directives
   * such as *ngFor and *ngIf.
   */

  templateUrl: './create-dropdown.component.html',
  /**
   * @templateUrl './create-dropdown.component.html'
   * Links the HTML file that defines the component's structure.
   */

  styleUrl: './create-dropdown.component.scss',
  /**
   * @styleUrl './create-dropdown.component.scss'
   * Links the SCSS file that contains the component's styles.
   */
})

//Component class definition
export class CreateDropdownComponent {
  options = signal([
    /**
     * @property options
     * @type {Array<{ id: number, name: string }>}
     * @description
     * Predefined list of dropdown options representing different
     * age categories for user selection.
     */

    {
      id: 1, //Unique identifier for the option
      name: 'Adulto (+18 años)', //Label displayed in the dropdown
    },
    {
      id: 2,
      name: 'Joven (11-17 años)',
    },
    {
      id: 3,
      name: 'Niño (6-10 años)',
    },
  ]);
}
