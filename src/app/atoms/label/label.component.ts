import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Componente `LabelComponent`
 * Representa una etiqueta (`label`) personalizable en Angular.
 */

/** 
Method that implements the logic to protect routes.
It is responsible for verifying the validity of the JWT token and assigning the decoded user to the request.*
@param context The execution context that contains information about the current request.
@returns True if the token is valid, or throws an HTTP exception if it is not.*/

@Component({
  selector: 'app-label', // Nombre del selector que se usará en el HTML
  imports: [CommonModule], // Importa CommonModule para utilizar directivas comunes
  templateUrl: './label.component.html', // Ruta del archivo de plantilla HTML
  changeDetection: ChangeDetectionStrategy.OnPush, // Estrategia de detección de cambios eficiente
})
export class LabelComponent {
  /** Texto que se mostrará en el label.
   @param '' (Cadena vacía)
   */
  readonly text = input<string>('');

  /**ID del input al que se asocia el label (para `for` en HTML).
   * @param '' (Cadena vacía)
   */
  readonly forId = input<string>('');

  /**  Color del texto del label.
   * Puede ser uno de los valores predefinidos.
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

  /** Familia de la fuente del label.
   * @param 'font-onest'
   */
  readonly fontFamily = input<
    | 'font-onest' // Onest Font Family
    | 'font-poppins' // Poppins
    | 'font-blackMango' // Black Mango
    | 'font-sfProDisplay' // SF Pro Display
  >('font-poppins');
}
