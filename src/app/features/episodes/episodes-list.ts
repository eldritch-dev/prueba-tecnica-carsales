import { Component, computed, inject, Signal  } from '@angular/core';
import { NgClass } from '@angular/common';

import { EpisodesService } from './service/episodes-service';
import { Paginator } from '../../shared/paginator';
import { EpisodesCard } from './episodes-card';
import { Episodes } from './models/episodes-model';
import { ErrorService } from '../../shared/components/errors/service/error-service';
import { ErrorMessage } from '../../shared/components/errors/error-message';
import { TESButton } from '../../shared/tes-button';
import { BreakpointService } from '../../services/breakpoint-service';

@Component({
  selector: 'app-episodes-list',
  standalone: true,
  imports: [NgClass, ErrorMessage, Paginator, EpisodesCard, TESButton],
  template: `
    <section>
      <div class="section-header" [ngClass]="{'flex-col': breakPointService.isSm()}">
        <h1 class="view-title bold-txt title-color">Rick y Morty Episodes</h1>
        <app-tes-button (click)="triggerError()" [ngClass]="{'mb-4': breakPointService.isSm()}"></app-tes-button>
      </div>
      <app-error-message [isVisible]="errorService.isErrorVisible()" [error]="(errorService.error()?.error ?? '')" [traceId]="errorService.error()?.traceId"></app-error-message>
      @defer (hydrate on viewport) {
        @if (hasEpisodes()) {
          <ul class="ptc-list">
            @for (episode of episodes().episodes; track episode.id) {
              <app-episodes-card [data]="episode" style="width: 100%;"></app-episodes-card>
            }
          </ul>
          <app-paginator (pageChange)="onPageChange($event)" [totalPages]="episodes().totalPages" [actualPage]="episodes().actualPage"></app-paginator>
        } @else {
          <p>No episode has been found...</p>
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
  breakPointService = inject(BreakpointService);

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
