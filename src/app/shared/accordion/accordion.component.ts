import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from '../atoms/label/label.component';

/**
 * This component implements a dropdown button that initially shows only the title
 * and when clicked, displays its content below with a smooth animation.
 */
@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule, LabelComponent],
  templateUrl: './accordion.component.html',
})
export class AccordionComponent {
  /** Title of the accordion section that's always visible */
  readonly title = input<string>('');

  /** Content that will be shown/hidden when the accordion is toggled */
  readonly content = input<string>('');

  /** Controls whether the accordion is initially open (false by default) */
  readonly isOpen = input<boolean>(false);

  /** Internal state to track open/closed state */
  private _isExpanded = false;

  /**
   * Determines if the accordion content should be visible
   * Returns true if either manually expanded or initially set to open
   */
  get isExpanded(): boolean {
    return this._isExpanded || this.isOpen();
  }

  /** Toggles the expanded/collapsed state of the accordion */
  toggleAccordion(): void {
    this._isExpanded = !this._isExpanded;
  }
}
