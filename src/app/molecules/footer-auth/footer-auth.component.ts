import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkComponent } from '../../atoms/link/link.component';

/**
 * @component FooterAuthComponent
 * @description Component that represents the footer for authenticated sections of the application.
 * This component includes links and common elements, using the CommonModule and LinkComponent.
 * The template and styles are defined in external files (footer-auth.component.html and footer-auth.component.scss).
 */
@Component({
  /**
   * @selector app-footer-auth
   * @description CSS selector used to instantiate this component in HTML templates.
   */
  selector: 'app-footer-auth',
  imports: [CommonModule, LinkComponent],
  templateUrl: './footer-auth.component.html',
  styleUrl: './footer-auth.component.scss',
})
export class FooterAuthComponent {}
