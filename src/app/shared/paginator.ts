import { Component, EventEmitter, inject, Input, Output, Signal } from "@angular/core";
import { NgClass } from "@angular/common";

import { BreakpointService } from '../core/layout/breakpoint';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [NgClass],
  template: `
    @if (!isSm()) {
      <nav class="flex justify-center mt-8">
        <ul class="flex justify-items-center -space-x-px text-sm">
          <li>
            <button [disabled]="actualPage === 1" (click)="goToPage(actualPage - 1)" class="flex items-center justify-center semi-bold-txt border border-default-medium rounded-s-base text-sm px-3 h-9">
              <a [ngClass]="{'cursor-pointer text-default-gray': actualPage !== 1, 'text-gray-400': actualPage === 1}" style="font-family: 'Inter', sans-serif;">Anterior</a>
            </button>
          </li>
          @for (page of pages; track page) {
            <li>
              <button [disabled]="actualPage === page" (click)="goToPage(page)" class="flex items-center justify-center semi-bold-txt bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9">
                <a [ngClass]="{'cursor-pointer text-default-gray': actualPage !== page, 'text-blue-500': actualPage === page}" style="font-family: 'Inter', sans-serif;">{{ page }}</a>
              </button>
            </li>
          }
          <li>
            <button [disabled]="actualPage === totalPages" (click)="goToPage(actualPage + 1)" class="flex items-center justify-center semi-bold-txt border border-default-medium font-medium rounded-e-base text-sm px-3 h-9">
              <a [ngClass]="{'cursor-pointer text-default-gray': actualPage !== totalPages, 'text-gray-400': actualPage === totalPages}" style="font-family: 'Inter', sans-serif;">Siguiente</a>
            </button>
          </li>
        </ul>
      </nav>
    }
  `,
  styles: `
    > * + * { margin-left: -1px; }

    button {
      background-color: #f9fafb;
      box-sizing: border-box;
      appearance: none;
      border-style: solid;
    }

    button:hover {
      background-color: #e5e7eb;
    }

    ul, ol {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    ul > li + li {
      margin-left: -1px;
    }

    .border-default-medium {
      border-color: var(--border-default-medium);
    }

    .rounded-s-base {
      border-start-start-radius: var(--radius-base);
      border-end-start-radius: var(--radius-base);
    }

    .rounded-e-base {
      border-start-end-radius: var(--radius-base);
      border-end-end-radius: var(--radius-base);
    }
  `
})
export class Paginator {
  breakPointService = inject(BreakpointService);

  @Input() totalPages: number = 0;
  @Input() actualPage: number = 1;
  @Output() pageChange = new EventEmitter<number>();

  readonly isSm: Signal<Boolean> = this.breakPointService.isSm;

  get pages(): number[] {
    let start = Math.max(this.actualPage - 2, 1);
    let end = Math.min(start + 4, this.totalPages);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  goToPage(page: number) {
    this.actualPage = page;
    this.pageChange.emit(page);
  }
}
