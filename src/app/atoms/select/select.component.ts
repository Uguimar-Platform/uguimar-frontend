
import { Component, input, output, EventEmitter } from '@angular/core';
/**
 * This component customizable select component with support for id, name, value, checked, disabled, label, class, and emits change events.
 */

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [],
  templateUrl: './select.component.html',
})
export class SelectComponent {
  readonly id = input('');
  readonly name = input('');
  readonly value = input('');
  readonly checked = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly label = input('');
  readonly class = input('');
  readonly change = new EventEmitter<string>();

  /**
   * Emits a change event if the select is not disabled.
   */
  emitChange() {
    if (!this.disabled()) {
      this.change.emit(this.value());
    }
  }
  
}
