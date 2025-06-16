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
    path: 'resources',
    loadComponent: () => import('./pages/resources/resources.component').then(m => m.ResourcesComponent),
    title: 'Recursos y Referencias'
  },
  {
    path: 'patterns',
    loadComponent: () => import('./pages/patterns/patterns.component').then(m => m.PatternsComponent),
    title: 'Patrones de Costura'
  },
  {
    path: 'contacts',
    loadComponent: () => import('./pages/contacts/contacts.component').then(m => m.ContactsComponent),
    title: 'Contacto'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
