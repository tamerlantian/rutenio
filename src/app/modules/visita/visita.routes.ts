import { Routes } from '@angular/router';

export default [
  {
    path: '',
    redirectTo: 'lista',
    pathMatch: 'full',
  },
  {
    path: 'lista',
    loadComponent: () =>
      import('./componentes/visita-lista/visita-lista.component'),
  },
  {
    path: 'nuevo',
    loadComponent: () =>
      import('./componentes/visita-nuevo/visita-nuevo.component'),
  },
] as Routes;