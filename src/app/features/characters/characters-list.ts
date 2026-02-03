import { Component, computed, inject, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersService } from './service/characters-service';
import { CharactersCard } from './characters-card';
import { Paginator } from '../../shared/paginator';
import { Characters } from './models/characters-model';
import { ErrorService } from '../../core/error/error.service';
import { ErrorMessage } from '../../core/error/error-message';
import { TESButton } from '../../shared/tes-button';
import { BreakpointService } from '../../core/layout/breakpoint';
import { DropdownSelector } from '../../shared/dropdown';
import { GENDERS, SPECIES } from '../characters/models/character-constants';
import { SearchComponent } from '../../shared/search';



@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [SearchComponent, DropdownSelector, TESButton, CommonModule, CharactersCard, Paginator, ErrorMessage],
  template: `
    <section>
      <div class="section-header" [ngClass]="{'flex-col': breakPointService.isSm()}">
        <h1 class="view-title bold-txt title-color" [ngClass]="{'text-center': breakPointService.isSm()}">Rick y Morty Characters</h1>
        <app-search-component [service]="charactersService" [ngClass]="{'w-56 mb-4 flex justify-center': breakPointService.isSm(), 'w-48': !breakPointService.isSm()}"></app-search-component>
        <app-dropdown-selector [dataSource]="species" [service]="charactersService" filterKey="species" type="Especie" [ngClass]="{'w-56 mb-4 flex justify-center': breakPointService.isSm(), 'w-48': !breakPointService.isSm()}"></app-dropdown-selector>
        <app-dropdown-selector [dataSource]="genders" [service]="charactersService" filterKey="gender" type="Género" [ngClass]="{'w-56 mb-4 flex justify-center': breakPointService.isSm(), 'w-48': !breakPointService.isSm()}"></app-dropdown-selector>
        <app-tes-button (click)="triggerError()" [ngClass]="{'mb-4 flex justify-center': breakPointService.isSm()}"></app-tes-button>
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

  species = SPECIES;
  genders = GENDERS;

  onPageChange(page: number) {
    this.charactersService.goToPage(page);
  }

  triggerError() {
    this.errorService.triggerTestError()
  }
}
