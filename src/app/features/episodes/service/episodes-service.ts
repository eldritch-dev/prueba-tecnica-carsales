import { inject, Injectable, Signal, signal } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

import { environment } from "../../../environments/environment";
import { Episode } from "../models/episode-model";


@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  private readonly resourceExtension = "episodes";
  private readonly apiUrl = environment.baseUrl + this.resourceExtension;
  private http = inject(HttpClient);

  readonly episodes: Signal<Episode[]> = toSignal(
      this.http.get<Episode[]>(this.apiUrl),
      { initialValue: [] }
    );
  readonly error: Signal<string | null> = signal<string | null>(null);
}
