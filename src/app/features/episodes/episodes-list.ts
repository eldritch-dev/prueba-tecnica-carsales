import { Component, computed, inject, Signal  } from '@angular/core';

import { EpisodesService } from './service/episodes-service';
import { Paginator } from '../../shared/paginator';
import { EpisodesCard } from './episodes-card';
import { Episodes } from './models/episodes-model';
import { ErrorService } from '../../shared/components/errors/service/error-service';
import { ErrorMessage } from '../../shared/components/errors/error-message';
import { TESButton } from '../../shared/tes-button';

@Component({
  selector: 'app-episodes-list',
  standalone: true,
  imports: [ErrorMessage, Paginator, EpisodesCard, TESButton],
  template: `
    <section>
      <div class="flex justify-between">
        <h1 class="text-2xl font-semibold mb-4">Rick y Morty Episodes</h1>
        <app-tes-button (click)="triggerError()"></app-tes-button>
      </div>
      <app-error-message [isVisible]="errorService.isErrorVisible()" [error]="(errorService.error()?.error ?? '')" [traceId]="errorService.error()?.traceId"></app-error-message>
      @defer (hydrate on viewport) {
        @if (hasEpisodes()) {
          <ul class="sm:flex sm:flex-col sm:justify-center place-items-center lg:gap-4 lg:grid lg:grid-cols-2 lg:justify-center">
            @for (episode of episodes().episodes; track episode.id) {
              <app-episodes-card [data]="episode" class="w-full"></app-episodes-card>
            }
          </ul>
          <app-paginator (pageChange)="onPageChange($event)" [totalPages]="episodes().totalPages" [actualPage]="episodes().actualPage"></app-paginator>
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
  errorService = inject(ErrorService);

  readonly episodes: Signal<Episodes> = this.episodesService.episodes;

  hasEpisodes: Signal<boolean> = computed(() =>
    !!this.episodes().episodes && this.episodes().episodes.length > 0
  );

    onPageChange(page: number) {
      this.episodesService.goToPage(page);
    }

  triggerError() {
    this.errorService.triggerTestError()
  }
}
