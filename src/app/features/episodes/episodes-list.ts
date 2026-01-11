import { Component, computed, inject, Signal  } from '@angular/core';

import { EpisodesService } from './service/episodes-service';
import { FbPaginator } from '../../shared/ui/fb-paginator';
import { FbEpisodesCard } from '../../shared/ui/fb-episodes-card';
import { Episodes } from './models/episodes-model';

@Component({
  selector: 'app-episodes-list',
  standalone: true,
  imports: [FbPaginator, FbEpisodesCard],
  template: `
    <section>
      <h1 class="text-2xl font-semibold mb-4">Rick y Morty Episodes</h1>
      @defer (hydrate on viewport) {
        @if (hasEpisodes()) {
          <ul class="sm:flex sm:flex-col sm:justify-center place-items-center lg:gap-4 lg:grid lg:grid-cols-2 lg:justify-center">
            @for (episode of episodes().episodes; track episode.id) {
              <app-fb-episodes-card [data]="episode" class="w-full"></app-fb-episodes-card>
            }
          </ul>
          <app-fb-paginator (pageChange)="onPageChange($event)" [totalPages]="episodes().totalPages" [actualPage]="episodes().actualPage"></app-fb-paginator>
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

  readonly episodes: Signal<Episodes> = this.episodesService.episodes;

  hasEpisodes: Signal<boolean> = computed(() =>
    !!this.episodes().episodes && this.episodes().episodes.length > 0
  );

  onPageChange(page: number) {
    this.episodesService.goToPage(page);
  }
}
