import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LinkComponent } from '../../atoms/link/link.component';

/**
 * NavigationMenuComponent
 *
 * This component represents the main navigation menu of the application.
 * It displays a list of links to different sections of the app.
 *
 * @component
 * @example
 * <app-navigation-menu></app-navigation-menu>
 */
@Component({
  selector: 'app-navigation-menu',
  standalone: true,
  imports: [CommonModule, LinkComponent],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.scss',
})
export class NavigationMenuComponent {
  /**
   * List of menu items displayed in the navigation menu.
   * Each item contains a label and a route.
   *
   * @property {Array<{label: string, route: string}>} menuItems
   */
  menuItems = [
    { label: 'Inicio', route: '/' },
    { label: 'Cursos', route: '/cursos' },
    { label: 'Planes', route: '/planes' },
    { label: 'FAQ', route: '/faq' },
    { label: 'Rutas', route: '/rutas' },
    { label: 'Feedback', route: '/feedback' },
  ];
}
