import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Inicio'
  },
  {
    path: 'test',
    loadComponent: () => import('./pages/test/test.component').then(m => m.TestComponent),
    title: 'Página de Prueba'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
