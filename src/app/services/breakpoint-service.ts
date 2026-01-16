import { Injectable, signal, WritableSignal } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Injectable({ providedIn: 'root' })
export class BreakpointService {
  readonly isSm: WritableSignal<Boolean> = signal(false);

  constructor(private observer: BreakpointObserver) {
    this.observer
      .observe(['(max-width: 639px)'])
      .subscribe(result => this.isSm.set(result.matches));
  }
}
