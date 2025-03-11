import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./layouts/auth-layout/auth-layout.component'),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./layouts/admin-layout/admin-layout.component'),
    children: [
      {
        path: 'courses',
        loadComponent: () => import('./pages/courses/views/courses.component'),
      },

      {
        path: 'courses/:id',
        loadComponent: () => import('./pages/courses/views/courses.component'),
      },
    ],
  },
];
