import { Component, inject, Signal  } from '@angular/core';

import { Episode } from './models/episode-model';
import { EpisodesService } from './service/episodes-service';
import { FbPaginator } from '../../shared/ui/fb-paginator';

@Component({
  selector: 'app-episodes-list',
  standalone: true,
  imports: [FbPaginator],
  template: `
    <section>
      <h1 class="text-2xl font-semibold mb-4">Rick y Morty Episodes</h1>

      @defer (hydrate on viewport) {
        @if (episodes().length > 0) {
          <ul class="sm:flex sm:flex-col sm:justify-center place-items-center lg:gap-4 lg:grid lg:grid-cols-2 lg:justify-center">
            @for (episode of episodes(); track episode.id) {
              <a href="#" class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium">
                <h5 class="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">Episode {{ episode.id }}: {{ episode.name }}</h5>
                <p class="text-body">Air Date: {{ episode.air_Date }}</p>
              </a>
            }
          </ul>
          <app-fb-paginator></app-fb-paginator>
        } @else {
          <p class="text-slate-500">No episode has been found...</p>
        }
      } @placeholder {
        <div>Loading Episodes</div>
      }
    </section>
  `,
  styles: ``
})
export class EpisodesList {
  episodesService = inject(EpisodesService);

  readonly episodes: Signal<Episode[]> = this.episodesService.episodes;
}
