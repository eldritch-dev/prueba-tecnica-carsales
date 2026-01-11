import { inject, Injectable, Signal, signal, WritableSignal } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap, catchError, of, BehaviorSubject } from 'rxjs';

import { environment } from "../../../environments/environment";
import { Episodes } from "../models/episodes-model";


@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  private readonly resourceExtension = "episodes";
  private readonly apiUrl = environment.baseUrl + this.resourceExtension;

  private http = inject(HttpClient);

  private pageSubject = new BehaviorSubject<number>(1);
  readonly totalPages = signal(0);

  readonly episodes: Signal<Episodes> = toSignal(
    this.pageSubject.pipe(
      switchMap(page =>
        this.http.get<Episodes>(this.apiUrl, { params: { page: page.toString() } })
          .pipe(
            catchError(err => {
              this.error.set(err.message);
              return of({} as Episodes);
            })
          )
      )
    ),
    { initialValue: {} as Episodes }
  );
  readonly error: WritableSignal<string | null> = signal<string | null>(null);

  goToPage(page: number) {
    this.pageSubject.next(page);
  }
}
