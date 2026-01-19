import { Component, Input, signal, WritableSignal } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { CharactersService } from '../features/characters/service/characters-service';
import { CharacterSuggestionDto } from '../features/characters/models/character-model';
import { catchError, debounceTime, of, switchMap } from 'rxjs';


@Component({
  selector: 'app-search-component',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="relative w-48">
      <input
        type="text"
        [formControl]="searchControl"
        (keydown.enter)="searchByEnter(searchControl.value)"
      />
      <span class="placeholder absolute">Busca por Nombre</span>
      @if (searchControl.value) {
        <button type="button" (click)="clear()" class="close-btn absolute">
          X
        </button>
      }

      @if(suggestions().length > 0) {
        <ul class="autocomplete-list">
        @for(suggestion of suggestions(); track suggestion.name) {
          <li (click)="selectSuggestion(suggestion)">{{ suggestion.name }}</li>
        }
        </ul>
      }
    </div>
  `,
  styles: `
    input {
      width: 100%;
      height: 2rem;
      border: 1px solid var(--color-gray-500);
      border-radius: 12px;
      padding-left: 12px;
    }

    .placeholder {
      font-size: 12px;
      font-weight: 300;
      left: 0.5rem;
      top: -30%;
      padding: 0 3px;
      background: white;
    }

    .autocomplete-list {
      position: absolute;
      z-index: 1000;
      background: white;
      border: 1px solid var(--color-gray-500);
      width: 100%;
      max-height: 200px;
      overflow-y: auto;
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .autocomplete-list li {
      padding: 4px 8px;
      cursor: pointer;
    }

    .autocomplete-list li:hover {
      background-color: #eee;
    }

    .close-btn {
      font-family: "Inter", sans-serif;
      font-weight: 300;
      right: 0.75rem;
      top: 15%;
    }

    .close-btn:hover {
      color: var(--color-gray-500);
    }
  `
})
export class SearchComponent {
  @Input() service!: CharactersService;

  searchControl = new FormControl('', { nonNullable: true });

  suggestions: WritableSignal<CharacterSuggestionDto[]> = signal([]);

  constructor() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        switchMap((query: string) => query.length > 0
          ? this.service.getSuggestions(query).pipe(catchError(() => of([]))) : of([])
        )
      )
      .subscribe((res: CharacterSuggestionDto[]) => {
        this.suggestions.set(res)
      }
    );
  }

  selectSuggestion(item: CharacterSuggestionDto) {
    this.searchControl.setValue(item.name, { emitEvent: false });
    this.suggestions.set([]);
    this.service.goToPage(1, { name: item.name });
  }

  searchByEnter(value: string) {
    this.service.goToPage(1, { name: value });
    this.suggestions.set([]);
  }

  clear() {
    this.searchControl.setValue('');
    this.service.goToPage(1, { name: '' });
  }
}
