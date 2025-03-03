import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import {
  FontAwesomeModule,
  IconDefinition,
} from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  readonly color = input<'primary' | 'warning' | 'info' | 'danger' | 'secondary'>('primary');
  readonly outline = input<boolean>(false);
  readonly label = input<string>('');

  click= output<void>();

  readonly icon = input<IconDefinition | null>(faTrash);

  readonly iconPosition = input<'left' | 'right'>('left');

  onClick() {
    this.click.emit();
  }



}
