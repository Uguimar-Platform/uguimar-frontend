import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from '../../atoms/button/button.component';

/**
 * Component representing a subscription plan card.
 */
@Component({
  selector: 'app-card-plan',
  standalone: true,
  imports: [NgClass, NgFor, NgIf, ButtonComponent, FontAwesomeModule],
  templateUrl: './card-plan.component.html',
  styleUrl: './card-plan.component.scss',
})
export class CardPlanComponent {
  @Input() plan: string = ''; // Nombre del plan
  @Input() price: number = 0; // Precio del plan
  @Input() users: number = 1; // Número de usuarios permitidos
  @Input() benefits: string[] = []; // Lista de beneficios

  // Colores independientes para texto, fondo y botón
  @Input() textColor: 'blue-dark' | 'blue-medium' | 'blue-light' | 'blue-lightest' | 'blue-lighter' | 'blue-faint' | 'grey-light' | 'white' = 'blue-medium';
  @Input() bgColor: 'blue-dark' | 'blue-medium' | 'blue-light' | 'blue-lightest' | 'blue-lighter' | 'blue-faint' | 'grey-light' | 'white' = 'white';
  @Input() btnColor: 'blue-dark' | 'blue-medium' | 'blue-light' | 'blue-lightest' | 'blue-lighter' | 'blue-faint' | 'grey-light' | 'white' = 'blue-dark';

  faUser = faUser;
  faCheckCircle = faCheckCircle;

  getTextColorClass(): string {
    const colorMap: Record<string, string> = {
      'blue-dark': 'text-[#081F5C]',
      'blue-medium': 'text-[#334EAC]',
      'blue-light': 'text-[#7098D1]',
      'blue-lightest': 'text-[#D0E3FF]',
      'blue-lighter': 'text-[#E7F1FF]',
      'blue-faint': 'text-[#F9FCFF]',
      'grey-light': 'text-[#E7E7E7]',
      'white': 'text-[#FFFFFF]'
    };
    return colorMap[this.textColor] || 'text-[#334EAC]';
  }

  getBackgroundColorClass(): string {
    const colorMap: Record<string, string> = {
      'blue-dark': 'bg-blue-800',
      'blue-medium': 'bg-blue-600',
      'blue-light': 'bg-blue-400',
      'blue-lightest': 'bg-blue-200',
      'blue-lighter': 'bg-blue-100',
      'blue-faint': 'bg-blue-50',
      'grey-light': 'bg-gray-100',
      'white': 'bg-white'
    };
    return colorMap[this.bgColor] || 'bg-white';
  }

  getButtonBackgroundClass(): string {
    const colorMap: Record<string, string> = {
      'blue-dark': 'bg-blue-800 hover:bg-blue-700',
      'blue-medium': 'bg-blue-600 hover:bg-blue-500',
      'blue-light': 'bg-blue-400 hover:bg-blue-300',
      'blue-lightest': 'bg-blue-200 hover:bg-blue-100',
      'blue-lighter': 'bg-blue-100 hover:bg-blue-50',
      'blue-faint': 'bg-blue-50 hover:bg-gray-200',
      'grey-light': 'bg-gray-100 hover:bg-gray-200',
      'white': 'bg-white hover:bg-gray-100'
    };
    return colorMap[this.btnColor] || 'bg-blue-800 hover:bg-blue-700';
  }
}
