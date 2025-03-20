import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/main-layout/main-layout.component'),
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/home/home.routes').then(m => m.HOME_ROUTES),
      }
    ],
  },
  {
    path: 'auth',
    loadComponent: () => import('./layouts/auth-layout/auth-layout.component'),
  },
];
