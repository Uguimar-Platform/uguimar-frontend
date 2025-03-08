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

  /** Tamaño de la fuente del label en px.
   * @param 'text-base'
   */
  readonly fontSize = input<
    | 'text-xs' // 0.75rem (12px)
    | 'text-sm' // 0.875rem (14px)
    | 'text-base' // 1rem (16px)
    | 'text-lg' // 1.125rem (18px)
    | 'text-xl' // 1.25rem (20px)
    | 'text-2xl' // 1.5rem (24px)
    | 'text-3xl' // 1.875rem (30px)
    | 'text-4xl' // 2.25rem (36px)
    | 'text-5xl' // 3rem (48px)
    | 'text-6xl' // 3.75rem (60px)
    | 'text-7xl' // 4.5rem (72px)
    | 'text-8xl' // 6rem (96px)
    | 'text-9xl' // 8rem (128px)
  >('text-base');

  /** G de la fuente del label.
   * @param 'font-normal'
   */
  readonly fontWeight = input<
    | 'font-black' // 100
    | 'font-bold' // 200
    | 'font-light' // 300
    | 'font-regular' // 400
    | 'font-medium' // 500
  >('font-regular');

}
