import { Component, computed, inject, signal, Signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersService } from './service/characters-service';
import { CharactersCard } from './characters-card';
import { Paginator } from '../../shared/paginator';
import { Characters } from './models/characters-model';
import { ErrorService } from '../../shared/components/errors/service/error-service';
import { ErrorMessage } from '../../shared/components/errors/error-message';
import { TESButton } from '../../shared/tes-button';



@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [TESButton, CommonModule, CharactersCard, Paginator, ErrorMessage],
  template: `
    <section>
      <div class="flex justify-between">
        <h1 class="text-2xl font-semibold mb-4">Rick y Morty Characters</h1>
        <app-tes-button (click)="triggerError()"></app-tes-button>
      </div>
      <app-error-message [isVisible]="errorService.isErrorVisible()" [error]="(errorService.error()?.error ?? '')" [traceId]="errorService.error()?.traceId"></app-error-message>
      @defer (hydrate on viewport) {
        @if (hasCharacters()) {
          <ul class="sm:flex sm:flex-col sm:justify-center place-items-center lg:gap-4 lg:grid lg:grid-cols-2 lg:justify-center">
            @for (char of characters().characters; track char.id) {
              <app-characters-card [data]="char" class="w-full"></app-characters-card>
            }
          </ul>
          <app-paginator (pageChange)="onPageChange($event)" [totalPages]="characters().totalPages" [actualPage]="characters().actualPage"></app-paginator>
        } @else {
          <p class="text-slate-500">No character has been found...</p>
        }
      } @placeholder {
        <div>Loading Characters</div>
      }
    </section>
  `
})
export class CharactersList {
  charactersService = inject(CharactersService);
  errorService = inject(ErrorService);

  readonly characters: Signal<Characters> = this.charactersService.characters;

  hasCharacters: Signal<boolean> = computed(() =>
    this.characters().characters && this.characters().characters.length > 0
  );

  onPageChange(page: number) {
    this.charactersService.goToPage(page);
  }

  triggerError() {
    this.errorService.triggerTestError()
  }
}
