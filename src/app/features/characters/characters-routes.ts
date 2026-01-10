import { Routes } from '@angular/router';

export const CharacterRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./characters-list').then(c => c.CharactersList)
  }
];
