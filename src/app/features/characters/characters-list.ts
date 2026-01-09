import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from './models/characters-model';


@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <h1 class="text-2xl font-semibold mb-4">Personajes de Rick y Morty</h1>

      @if (characters.length > 0) {
        <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          @for (char of characters; track char.id) {
            <li class="p-4 border rounded">
              <h2 class="font-medium">{{ char.name }}</h2>
              <p class="text-sm text-slate-600">{{ char.species }}</p>
            </li>
          }
        </ul>
      } @else {
        <p class="text-slate-500">No se ha encontrado ningún personaje...</p>
      }
    </section>
  `
})
export class CharactersList {
  readonly characters: Character[] = [];
}
