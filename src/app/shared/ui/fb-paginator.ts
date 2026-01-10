import { Component, inject, Signal } from "@angular/core";

import { BreakpointService } from '../../services/breakpoint-observer';

@Component({
  selector: 'app-fb-paginator',
  standalone: true,
  template: `
    @if (!isSm()) {
      <nav class="flex justify-center">
      <ul class="flex justify-items-center -space-x-px text-sm">
        <li>
          <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-s-base text-sm px-3 h-9 focus:outline-none">Previous</a>
        </li>
        <li>
          <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">1</a>
        </li>
        <li>
          <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">2</a>
        </li>
        <li>
          <a href="#" aria-current="page" class="flex items-center justify-center text-fg-brand bg-neutral-tertiary-medium box-border border border-default-medium hover:text-fg-brand font-medium text-sm w-9 h-9 focus:outline-none">3</a>
        </li>
        <li>
          <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">4</a>
        </li>
        <li>
          <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">5</a>
        </li>
        <li>
          <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-e-base text-sm px-3 h-9 focus:outline-none">Next</a>
        </li>
      </ul>
    </nav>
    }
  `
})
export class FbPaginator {
  breakPointService = inject(BreakpointService);

  readonly isSm: Signal<Boolean> = this.breakPointService.isSm;
}
