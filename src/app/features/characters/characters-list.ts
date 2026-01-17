import { Component, computed, inject, signal, Signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersService } from './service/characters-service';
import { CharactersCard } from './characters-card';
import { Paginator } from '../../shared/paginator';
import { Characters } from './models/characters-model';
import { ErrorService } from '../../shared/components/errors/service/error-service';
import { ErrorMessage } from '../../shared/components/errors/error-message';
import { TESButton } from '../../shared/tes-button';
import { BreakpointService } from '../../services/breakpoint-service';
import { DropdownSelector } from '../../shared/components/dropdown/dropdown';
import { GENDERS } from '../characters/models/character-constants';



@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [DropdownSelector, TESButton, CommonModule, CharactersCard, Paginator, ErrorMessage],
  template: `
    <section>
      <div class="section-header" [ngClass]="{'flex-col': breakPointService.isSm()}">
        <h1 class="view-title bold-txt title-color">Rick y Morty Characters</h1>
        <app-dropdown-selector [dataSource]="genders" [service]="charactersService" filterKey="gender" [ngClass]="{'w-56 mb-4': breakPointService.isSm(), 'w-48': !breakPointService.isSm()}"></app-dropdown-selector>
        <app-tes-button (click)="triggerError()" [ngClass]="{'mb-4': breakPointService.isSm()}"></app-tes-button>
      </div>
      <app-error-message [isVisible]="errorService.isErrorVisible()" [error]="(errorService.error()?.error ?? '')" [traceId]="errorService.error()?.traceId"></app-error-message>
      @defer (hydrate on viewport) {
        @if (hasCharacters()) {
          <ul class="ptc-list">
            @for (char of characters().characters; track char.id) {
              <app-characters-card [data]="char" style="width: 100%;"></app-characters-card>
            }
          </ul>
          <app-paginator (pageChange)="onPageChange($event)" [totalPages]="characters().totalPages" [actualPage]="characters().actualPage"></app-paginator>
        } @else {
          <p>No character has been found...</p>
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
  breakPointService = inject(BreakpointService);

  readonly characters: Signal<Characters> = this.charactersService.characters;

  hasCharacters: Signal<boolean> = computed(() =>
    this.characters().characters && this.characters().characters.length > 0
  );

  genders = GENDERS;

  onPageChange(page: number) {
    this.charactersService.goToPage(page);
  }

  triggerError() {
    this.errorService.triggerTestError()
  }
}
