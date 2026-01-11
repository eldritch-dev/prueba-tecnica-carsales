import { Component, inject, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersService } from './service/characters-service';
import { FbCharactersCard } from '../../shared/ui/fb-characters-card';
import { FbPaginator } from '../../shared/ui/fb-paginator';
import { Characters } from './models/characters-model';



@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [CommonModule, FbCharactersCard, FbPaginator],
  template: `
    <section>
      <h1 class="text-2xl font-semibold mb-4">Rick y Morty Characters</h1>
      @defer (hydrate on viewport) {
        @if (characters() && characters().characters.length > 0) {
          <ul class="sm:flex sm:flex-col sm:justify-center place-items-center lg:gap-4 lg:grid lg:grid-cols-2 lg:justify-center">
            @for (char of characters().characters; track char.id) {
              <app-fb-characters-card [data]="char" class="w-full"></app-fb-characters-card>
            }
          </ul>
          <app-fb-paginator (pageChange)="onPageChange($event)" [totalPages]="characters().totalPages" [actualPage]="characters().actualPage"></app-fb-paginator>
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

  readonly characters: Signal<Characters> = this.charactersService.characters;

  onPageChange(page: number) {
    this.charactersService.goToPage(page);
  }
}
