import { Component, Input } from '@angular/core'; // Importa los módulos necesarios de Angular
import { CommonModule } from '@angular/common'; // Importa el módulo CommonModule de Angular

@Component({
  selector: 'app-label-atom', // Define el selector del componente
  imports: [CommonModule], // Importa el módulo CommonModule
  templateUrl: './label.component.html', // Ruta del archivo de plantilla HTML
  styleUrl: './label.component.scss', // Ruta del archivo de estilos SCSS
})
export class LabelComponent {
  readonly text: string = ''; // Texto del label
  readonly forId: string = ''; // ID del input asociado
  readonly color: string = '#333'; // Color del texto
  readonly fontSize: string = '16px'; // Tamaño de la fuente
  readonly fontWeight: string = 'normal'; // Peso de la fuente
  readonly textAlign: string = 'left'; // Alineación del texto
  readonly icon: string = ''; // Icono opcional
  readonly iconPosition: 'left' | 'right' = 'left'; // Posición del icono (izquierda o derecha)
}
