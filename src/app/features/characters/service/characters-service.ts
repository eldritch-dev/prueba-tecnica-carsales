import { inject, Injectable, Signal, signal } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

import { environment } from "../../../environments/environment";
import { Character } from "../models/characters-model";


@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private readonly resourceExtension = "characters";
  private readonly apiUrl = environment.baseUrl + this.resourceExtension;
  private http = inject(HttpClient);

  readonly characters: Signal<Character[]> = toSignal(
      this.http.get<Character[]>(this.apiUrl),
      { initialValue: [] }
    );
  readonly error: Signal<string | null> = signal<string | null>(null);
}
