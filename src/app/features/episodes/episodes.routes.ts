import { Routes } from '@angular/router';

export const EpisodeRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./episodes-list').then(c => c.EpisodesList)
  }
];
