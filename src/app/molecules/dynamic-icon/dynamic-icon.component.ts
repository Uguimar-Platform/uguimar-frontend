import { Component, input } from '@angular/core';
import { IconCloudComponent } from '../../atoms/icon-cloud/icon-cloud.component';
import { LabelComponent } from '../../atoms/label/label.component';

@Component({
  selector: 'app-dynamic-icon',
  imports: [
    IconCloudComponent,
    LabelComponent
  ],
  templateUrl: './dynamic-icon.component.html'
})
export class DynamicIconComponent {
  /** Text to be displayed in the label.
  @param '' (Empty string)
  */
  readonly text = input<string>('');

  /**ID of the input to which the label is associated (for `for` in HTML).
   * @param '' (Empty string)
   */
  readonly forId = input<string>('');

  /** Color of the label text.
   * Can be one of the predefined values.
   * @param 'black'
   */
  readonly color = input<
    | 'black'
    | 'blue-dark'
    | 'blue-medium'
    | 'blue-light'
    | 'blue-lightest'
    | 'blue-lighter'
    | 'blue-faint'
    | 'grey-light'
    | 'white'
  >('black');

  /** Font family of the label.
   * @param 'font-onest'
   */
  readonly fontFamily = input<
    | 'font-onest' // Onest Font Family
    | 'font-poppins' // Poppins
    | 'font-blackMango' // Black Mango
    | 'font-sfProDisplay' // SF Pro Display
  >('font-poppins');

  /** Font Size of the label
   */
  fontSize = input<string>("");
  /** Font Weight of the label
   */
  fontWeight = input<string>("");
}
