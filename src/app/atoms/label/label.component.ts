import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';


/**
* `LabelComponent` component
* Represents a customizable label in Angular.
*/

/** 
Method that implements the logic to protect routes.
It is responsible for verifying the validity of the JWT token and assigning the decoded user to the request.*
@param context The execution context that contains information about the current request.
@returns True if the token is valid, or throws an HTTP exception if it is not.*/

@Component({
  selector: 'app-label', // Name of the selector to be used in the HTML
  imports: [CommonModule], // Import CommonModule to use common directives
  templateUrl: './label.component.html', // HTML template file path
  changeDetection: ChangeDetectionStrategy.OnPush, // Efficient change detection strategy
})
export class LabelComponent {

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
}
