import { ChangeDetectionStrategy, Component, input } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 

/**
 * Componente `LabelComponent`
 * Representa una etiqueta (`label`) personalizable en Angular.
 */
@Component({
  selector: 'app-label', // Nombre del selector que se usará en el HTML
  imports: [CommonModule], // Importa CommonModule para utilizar directivas comunes
  templateUrl: './label.component.html', // Ruta del archivo de plantilla HTML
  changeDetection: ChangeDetectionStrategy.OnPush, // Estrategia de detección de cambios eficiente
})
export class LabelComponent {
  
  /*Texto que se mostrará en el label.
   * @default '' (Cadena vacía)
   */
  readonly text = input<string>('');

  /*ID del input al que se asocia el label (para `for` en HTML).
   * @default '' (Cadena vacía)
   */
  readonly forId = input<string>('');

  /* Color del texto del label.
   * Puede ser uno de los valores predefinidos.
   * @default 'primary'
   */
  readonly color = input<'primary' | 'secondary' | 'blue-dark' | 'blue-medium' | 'blue-light' | 'light-blue' | 'almost-white' | 'gray'>('primary');

  /* Tamaño de la fuente del label.
   * @default 'text-base'
   */
  readonly fontSize = input<'text-xs' | 'text-sm' | 'text-base' | 'text-lg' | 'text-xl' | 'text-2xl'>('text-base');

  /* Estilo de la fuente: normal o cursiva.
   * @default 'normal'
   */
  readonly fontStyle = input<'normal' | 'italic'>('normal');

  /* Decoración del texto (ninguno, subrayado, tachado).
   * @default 'none'
   */
  readonly textDecoration = input<'none' | 'underline' | 'line-through'>('none');

  /* Peso de la fuente (negrita, delgada, normal).
   * @default 'normal'
   */
  readonly fontWeight = input<'normal' | 'bold' | 'lighter'>('normal');

  /* Alineación del texto dentro del label.
   * Puede ser 'left', 'center' o 'right'.
   * @default 'left'
   */
  readonly textAlign = input<'left' | 'center' | 'right'>('left');
}

