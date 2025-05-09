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
    path: 'fundamentals',
    loadComponent: () => import('./pages/fundamentals/fundamentals.component').then(m => m.FundamentalsComponent),
    title: 'Fundamentos'
  },
  {
    path: 'skills',
    loadComponent: () => import('./pages/skills/skills.component').then(m => m.SkillsComponent),
    title: 'Técnicas'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
