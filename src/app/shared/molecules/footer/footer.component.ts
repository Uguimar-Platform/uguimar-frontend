import { Component } from '@angular/core';
import { LinkComponent } from '../../atoms/link/link.component';

/**
 * @component FooterAuthComponent
 * @description Component that represents the footer for authenticated sections of the application.
 * This component includes links and common elements, using the CommonModule and LinkComponent.
 * The template and styles are defined in external files (footer-auth.component.html and footer-auth.component.scss).
 */
@Component({
  /**
   * @selector footer-molecule
   * @description CSS selector used to instantiate this component in HTML templates.
   */
  selector: 'footer-molecule',
  imports: [LinkComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
