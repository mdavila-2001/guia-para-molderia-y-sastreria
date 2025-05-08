import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'test',
    loadComponent: () => import('./pages/test/test.component').then(m => m.TestComponent),
    title: 'Página de Prueba'
  }
];
