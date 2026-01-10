import { Component, inject, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Character } from './models/characters-model';
import { CharactersService } from './service/characters-service';
import { FbCard } from '../../shared/ui/fb-card';
import { FbPaginator } from '../../shared/ui/fb-paginator';


@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [CommonModule, FbCard, FbPaginator],
  template: `
    <section>
      <h1 class="text-2xl font-semibold mb-4">Personajes de Rick y Morty</h1>

      @defer (hydrate on viewport) {
        @if (characters().length > 0) {
          <ul class="sm:flex sm:flex-col sm:justify-center place-items-center lg:gap-4 lg:grid lg:grid-cols-2 lg:justify-center">
            @for (char of characters(); track char.id) {
              <app-fb-card [data]="char" class="w-full"></app-fb-card>
            }
          </ul>
          <app-fb-paginator></app-fb-paginator>
        } @else {
          <p class="text-slate-500">No se ha encontrado ningún personaje...</p>
        }
      } @placeholder {
        <div>Cargando personajes...</div>
      }
    </section>
  `
})
export class CharactersList {
  charactersService = inject(CharactersService);

  readonly characters: Signal<Character[]> = this.charactersService.characters;
}
