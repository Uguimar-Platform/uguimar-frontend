import { Component, input, EventEmitter } from '@angular/core';

/**
 * This is a customizable select component that supports properties like id, name, value, checked, disabled, label, and class.
 * It emits change events when the selection changes.
 */
@Component({
  selector: 'app-select',
  standalone: true,
  imports: [],
  templateUrl: './select.component.html',
})
export class SelectComponent {
  /**
   * Input property for the 'id' attribute of the select element.
   * @param id string - The unique identifier for the select element.
   */
  readonly id = input('');

  /**
   * Input property for the 'name' attribute of the select element.
   * @param name string - The name attribute used to identify the select element in a form.
   */
  readonly name = input('');

  /**
   * Input property for the 'value' attribute of the select element.
   * @param value string - The current value of the select element.
   */
  readonly value = input('');

  /**
   * Input property to determine if the select element is checked.
   * @param checked boolean - Indicates whether the select element is checked (relevant for certain use cases).
   */
  readonly checked = input(false);

  /**
   * Input property to determine if the select element is disabled.
   * @param disabled boolean - Indicates whether the select element is disabled.
   */
  readonly disabled = input(false);

  /**
   * Input property for the label text associated with the select element.
   * @param label string - The label text displayed alongside the select element.
   */
  readonly label = input('');

  /**
   * Input property for additional CSS classes to be applied to the select element.
   * @param class string - Additional CSS classes for styling the select element.
   */
  readonly class = input('');

  /**
   * Output property to emit change events when the selection changes.
   * @param change EventEmitter - Emits the new value whenever the user interacts with the select element.
   */
  readonly change = new EventEmitter();

  /**
   * Emits a change event if the select is not disabled.
   * This method is triggered when the user interacts with the select element.
   * @param event Event - The change event triggered by the select element.
   */
  emitChange() {
    if (!this.disabled()) {
      this.change.emit(this.value()); // Emit the current value of the select element
    }
  }
}
