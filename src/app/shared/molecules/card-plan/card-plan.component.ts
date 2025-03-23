import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from '../../atoms/button/button.component';
import { MatIconModule } from '@angular/material/icon';

/**
 * Component representing a subscription plan card.
 */
@Component({
  selector: 'app-card-plan',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ButtonComponent, MatIconModule],
  templateUrl: './card-plan.component.html',
  styleUrl: './card-plan.component.scss',
})
export class CardPlanComponent {

  /**
   * Name of the plan.
   * @param {string} plan - ("Básico", "Dúo", "Expert")
   */
  readonly plan = input<string>('');

  /**
   * Price of the subscription plan.
   * @param {number} price
   */
  readonly price = input<number>(0);

  /**
   * Number of users allowed.
   * @param {number} users - (1, 2, 3)
   */
  readonly users = input<number>(1);

  /**
   * List of benefits included in the plan.
   * @param {string[]} benefits
   */
  readonly benefits = input<string[]>([]);

  /**
   * Color of the text of the card-plan.
   * @param {string} textColor
   */
  readonly textColor = input<string>('#fff');

  /**
   * Color of the background of the card-plan.
   * @param {string} bgColor
   */
  readonly bgColor = input<string>('#fff');

  /**
   * Color of the button of the card-plan.
   * @param {string} btnColor
   */
  readonly btnColor = input<string>('#fff');

  readonly logoColor = input<string>('#fff');
  /**
   * Image URL for the user logo.
   * @param {string} logoImage
   */
  readonly logoImage = input<string>('');

  /**
   * FontAwesome icon representing a checkmark for validation or confirmation.
   */
  readonly icon = input<string>('check_circle');

  /**
   * FontAwesome icon size representing a check mark for validation or confirmation 
   */
  iconSize = '17px';

  /**
   * Returns an array with a length equal to the number of users.
   * Used to iterate and display the correct number of user icons.
   * @returns {number[]} Array to iterate over
   */
  getUserIcons(): number[] {
    return Array(this.users()).fill(0);
  }

  /**
  * Handles the button click event.
  */
  onButtonClick(): void {
    //logica para seleccionar el plan
  }
}
