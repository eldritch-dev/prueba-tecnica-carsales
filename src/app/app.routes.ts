import { Routes } from '@angular/router';
import { AppLayout } from './core/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: AppLayout,
    children: [
       {
        path: 'characters',
        loadChildren: () =>
          import('./features/characters/characters-routes')
            .then(m => m.CharacterRoutes)
      },
      {
        path: 'episodes',
        loadChildren: () =>
          import('./features/episodes/episodes-routes')
            .then(m => m.EpisodeRoutes)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'characters'
      }
    ]
  }
];
