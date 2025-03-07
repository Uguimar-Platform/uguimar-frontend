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
  styleUrls: ['./label.component.scss'], // Rutas de los archivos de estilos CSS
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
   * @param 'primary'
   */
  readonly color = input<
    | 'primary'
    | 'secondary'
    | 'blue-dark'
    | 'blue-medium'
    | 'blue-light'
    | 'blue-lightest'
    | 'blue-lighter'
    | 'blue-faint'
    | 'grey-light'
    | 'white'
    | 'black'
  >('primary');

  /** Cursor pointer para indicar que es un elemento interactivo.
   * @param 'false'
   */
  readonly cursorPointer = input<boolean>(false);

  /** Tamaño de la fuente del label.
   * @param 'text-base'
   */
  readonly fontSize = input<
    | 'text-xs'
    | 'text-sm'
    | 'text-base'
    | 'text-lg'
    | 'text-xl'
    | 'text-2xl'
    | '12px'
    | '16px'
    | '20px'
    | '48px'
    | '60px'
  >('text-base');

  /** Estilo de la fuente: normal o cursiva.
   * @param 'normal'
   */
  readonly fontStyle = input<'normal' | 'italic'>('normal');

  /** Familia de la fuente del label.
   * @param 'Onest'
   */
  readonly fontFamily = input<'Onest' | 'Poppins'>('Poppins');

  /** Decoración del texto (ninguno, subrayado, tachado).
   * @param 'none'
   */
  readonly textDecoration = input<'none' | 'underline' | 'line-through'>(
    'none'
  );

  /** Peso de la fuente (negrita, delgada, normal).
   * @param 'normal'
   */
  readonly fontWeight = input<'normal' | 'bold' | 'lighter'>('normal');

  /** Alineación del texto dentro del label.
   * Puede ser 'left', 'center' o 'right'.
   * @param 'left'
   */
  readonly textAlign = input<'left' | 'center' | 'right'>('left');
}
