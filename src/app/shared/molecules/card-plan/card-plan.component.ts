import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from '../../atoms/button/button.component';

/**
 * Component that represents a subscription plan card.
 * Displays the plan name, price, allowed users, benefits, and a customizable color theme.
 */

@Component({
  selector: 'app-card-plan',
  imports: [NgClass, ButtonComponent, FontAwesomeModule],
  templateUrl: './card-plan.component.html',
  styleUrl: './card-plan.component.scss'
})
export class CardPlanComponent {

  /**
   * Name of the plan.
   * @param {string} plan - ("Basic", "Dúo", "Expert")
   */
  readonly plan = input<string>('');

  /**
   * Price of the subscription plan.
   * @param {number} price
   */
  readonly price = input<number>();

  /**
   * Number of users allowed.
   * @param {number} users - ("One", "Two", "Three")
   */
  readonly users = input<number>();

  /**
   * List of benefits included in the plan.
   * @param {string[]} benefits
   */
  readonly benefits = input<string[]>();

  /**
   * Background color for the card.
   * @param {'blue-dark' | 'blue-medium' | 'blue-light' | 'blue-lightest' | 'blue-lighter' | 'blue-faint' | 'grey-light'} color
   */
  readonly color = input<string>('');

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
  getBackgroundColorClass(): string {
  switch (this.color()) {
    case 'blue-dark':
      return 'bg-blue-800';
    case 'blue-medium':
      return 'bg-blue-600'; 
    case 'blue-light':
      return 'bg-blue-400';
    case 'blue-lightest':
      return 'bg-blue-200';
    case 'blue-lighter':
      return 'bg-blue-100';
    case 'blue-faint':
      return 'bg-blue-50';
    case 'grey-light':
      return 'bg-gray-100';
    default:
      return 'bg-white';
  }
}

}