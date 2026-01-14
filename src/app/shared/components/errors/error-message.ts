import { Component, inject, Input, Signal, signal, WritableSignal } from '@angular/core';
import { ErrorService } from './service/error-service';


@Component({
  selector: 'app-error-message',
  standalone: true,
  template: `
    @if (errorService.isErrorVisible() && error) {
      <div id="alert-additional-content-2" class="p-4 mb-4 text-sm text-fg-danger-strong rounded-base bg-danger-soft border border-danger-subtle" role="alert">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <svg class="w-4 h-4 shrink-0 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
            <span class="sr-only">Info</span>
            <h3 class="font-medium">There has been an error:</h3>
          </div>
          <button type="button" (click)="close()" data-dismiss-target="#alert-additional-content-2" aria-label="Close" class="ms-auto -mx-1.5 -my-1.5 bg-danger-soft text-fg-danger-strong rounded focus:ring-2 focus:ring-danger-medium p-1.5 hover:bg-danger-medium inline-flex items-center justify-center h-8 w-8 shrink-0">
            <span class="sr-only">Close</span>
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
          </button>
        </div>
        <div class="mt-2 mb-4">
          <p>
            Error Message: {{ error  }}
          </p>
          <p>
            Trace Id: {{ traceId ?? 'Not Available' }}
          </p>
        </div>
      </div>
    }
  `,
})
export class ErrorMessage {
  @Input() error: string | null = null;
  @Input() traceId?: string | null;
  @Input() isVisible: boolean = true;

  errorService = inject(ErrorService);

  close() {
    this.errorService.hideError();
  }


}
