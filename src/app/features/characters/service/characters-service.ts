import { inject, Injectable, Signal, signal, WritableSignal } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject, catchError, of, switchMap } from "rxjs";

import { environment } from "../../../environments/environment";
import { Characters } from "../models/characters-model";
import { Character } from "../models/character-model";


@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private readonly resourceExtension = "characters";
  private readonly apiUrl = environment.baseUrl + this.resourceExtension;
  private http = inject(HttpClient);

  private pageSubject = new BehaviorSubject<number>(1);
  readonly totalPages = signal(0);

  readonly characters: Signal<Characters> = toSignal(
    this.pageSubject.pipe(
      switchMap(page =>
        this.http.get<Characters>(this.apiUrl, { params: { page: page.toString() } })
          .pipe(
            catchError(err => {
              this.error.set(err.message);
              return of({} as Characters);
            })
          )
      )
    ),
    { initialValue: {} as Characters }
  );
  readonly error: WritableSignal<string | null> = signal<string | null>(null);

  goToPage(page: number) {
    this.pageSubject.next(page);
  }
}
