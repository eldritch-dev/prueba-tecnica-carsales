import { Injectable, Signal, inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { ErrorResponse } from "../models/error-model";
import { environment } from "../../../../environments/environment";
import { toSignal } from "@angular/core/rxjs-interop";
import { catchError, of, Subject, switchMap } from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private readonly resourceExtension = "explicit-error";
  private readonly apiUrl = environment.baseUrl + this.resourceExtension;
  private http = inject(HttpClient);

  private trigger$ = new Subject<void>();

  readonly error: Signal<ErrorResponse | null> = toSignal(
    this.trigger$.pipe(
      switchMap(() =>
        this.http.get<ErrorResponse>(this.apiUrl).pipe(
          catchError((err) => of(err.error ?? { error: 'Unknown error' }))
        )
      )
    ),
    { initialValue: null }
  );

  triggerTestError() {
    this.trigger$.next();
  }
}
