import { inject, Injectable, Signal, signal, WritableSignal } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject, catchError, of, switchMap } from "rxjs";

import { environment } from "../../../environments/environment";
import { Characters } from "../models/characters-model";
import { CharacterQuery } from "../models/character-query";


@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private readonly resourceExtension = "characters";
  private readonly apiUrl = environment.baseUrl + this.resourceExtension;
  private http = inject(HttpClient);

  private querySubject = new BehaviorSubject<CharacterQuery>({ page: 1, filters: {} });
  readonly totalPages = signal(0);

  readonly characters: Signal<Characters> = toSignal(
    this.querySubject.pipe(
      switchMap(query => {
        const params: Record<string, string> = { page: query.page.toString() };
        if (query.filters) Object.assign(params, query.filters);

        return this.http.get<Characters>(this.apiUrl, { params })
          .pipe(
            catchError(err => {
              this.error.set(err.message);
              return of({} as Characters);
            })
          );
      })
    ),
    { initialValue: {} as Characters }
  );
  readonly error: WritableSignal<string | null> = signal<string | null>(null);

  goToPage(page: number, filters?: Record<string, string>) {
    const current = this.querySubject.getValue();
    this.querySubject.next({
      page, filters: { ...current.filters, ...filters }
    });
  }
}
