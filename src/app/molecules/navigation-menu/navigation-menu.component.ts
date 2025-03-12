import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LinkComponent } from '../../atoms/link/link.component';

@Component({
  selector: 'app-navigation-menu',
  standalone: true,
  imports: [CommonModule, LinkComponent],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.scss',
})
export class NavigationMenuComponent {
  menuItems = [
    { label: 'Inicio', route: '/' },
    { label: 'Cursos', route: '/cursos' },
    { label: 'Planes', route: '/planes' },
    { label: 'FAQ', route: '/faq' },
    { label: 'Rutas', route: '/rutas' },
    { label: 'Feedback', route: '/feedback' },
  ];
}
