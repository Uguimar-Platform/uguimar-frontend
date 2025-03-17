import { Routes } from '@angular/router';
export const HOME_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/landing/landing.component'),
  },
];
