import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

/**
 * Component representing a subscription plan card.
 */
@Component({
  selector: 'app-card-plan',
  standalone: true,
  imports: [NgClass, FontAwesomeModule],
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
  readonly textColor = input<'blue-dark' | 'blue-medium' | 'blue-light' | 'blue-lightest' | 'blue-lighter' | 'blue-faint' | 'grey-light' | 'white'>('blue-medium');

  /**
   * Color of the background of the card-plan.
   * @param {string} bgColor
   */
  readonly bgColor = input<'blue-dark' | 'blue-medium' | 'blue-light' | 'blue-lightest' | 'blue-lighter' | 'blue-faint' | 'grey-light' | 'white'>('white');

  /**
   * Color of the button of the card-plan.
   * @param {string} btnColor
   */
  readonly btnColor = input<'blue-dark' | 'blue-medium' | 'blue-light' | 'blue-lightest' | 'blue-lighter' | 'blue-faint' | 'grey-light' | 'white'>('blue-dark');

  /**
   * Image URL for the user logo.
   * @param {string} logoImage
   */
  readonly logoImage = input<string>('');

  /**
   * FontAwesome icon representing a user.
   */
  faUser = faUser;

  /**
   * FontAwesome icon representing a checkmark for validation or confirmation.
   */
  faCheckCircle = faCheckCircle;

  /**
   * Returns an array with a length equal to the number of users.
   * Used to iterate and display the correct number of user icons.
   * @returns {number[]} Array to iterate over
   */
  getUserIcons(): number[] {
    return Array(this.users()).fill(0);
  }

  /**
   * Gets the corresponding Tailwind CSS class for the text color.
   * @returns {string} The Tailwind CSS class for the text color.
   */
  getTextColorClass(): string {
    const colorMap: Record<string, string> = {
      'blue-dark': 'text-[#081F5C]',
      'blue-medium': 'text-[#334EAC]',
      'blue-light': 'text-[#7096D1]',
      'blue-lightest': 'text-[#D0E3FF]',
      'blue-lighter': 'text-[#E7F1FF]',
      'blue-faint': 'text-[#F9FCFF]',
      'grey-light': 'text-[#E7E7E7]',
      'white': 'text-[#FFFFFF]'
    };
    return colorMap[this.textColor()] || 'text-[#334EAC]';
  }

  /**
   * Gets the corresponding Tailwind CSS class for the background color.
   * @returns {string} The Tailwind CSS class for the background color.
   */
  getBackgroundColorClass(): string {
    const colorMap: Record<string, string> = {
      'blue-dark': 'bg-[#081F5C]',
      'blue-medium': 'bg-[#334EAC]',
      'blue-light': 'bg-[#7096D1]',
      'blue-lightest': 'bg-[#D0E3FF]',
      'blue-lighter': 'bg-[#E7F1FF]',
      'blue-faint': 'bg-[#F9FCFF]',
      'grey-light': 'bg-[#E7E7E7]',
      'white': 'bg-[#FFFFFF]'
    };
    return colorMap[this.bgColor()] || 'bg-white';
  }

  /**
   * Gets the corresponding Tailwind CSS class for the button background color.
   * @returns {string} The Tailwind CSS class for the button background color.
   */
  getButtonBackgroundClass(): string {
    const colorMap: Record<string, string> = {
      'blue-dark': 'bg-[#081F5C] hover:bg-blue-700',
      'blue-medium': 'bg-[#334EAC] hover:bg-blue-500',
      'blue-light': 'bg-[#7096D1] hover:bg-blue-300',
      'blue-lightest': 'bg-[#D0E3FF] hover:bg-blue-100',
      'blue-lighter': 'bg-[#E7F1FF] hover:bg-blue-50',
      'blue-faint': 'bg-[#F9FCFF] hover:bg-gray-200',
      'grey-light': 'bg-[#E7E7E7] hover:bg-gray-200',
      'white': 'bg-[#FFFFFF] hover:bg-gray-100'
    };
    return colorMap[this.btnColor()] || 'bg-blue-800 hover:bg-blue-700';
  }
}