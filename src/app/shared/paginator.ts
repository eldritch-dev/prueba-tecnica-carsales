import { Component, EventEmitter, inject, Input, Output, Signal } from "@angular/core";
import { NgClass } from "@angular/common";

import { BreakpointService } from '../services/breakpoint-observer';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [NgClass],
  template: `
    @if (!isSm()) {
      <nav class="flex justify-center mt-8">
        <ul class="flex justify-items-center -space-x-px text-sm">
          <li>
            <button [disabled]="actualPage === 1" (click)="goToPage(actualPage - 1)" [ngClass]="{'hover:bg-neutral-tertiary-medium hover:text-heading': actualPage !== 1}" class="flex items-center justify-center bg-neutral-secondary-medium box-border border border-default-medium font-medium rounded-s-base text-sm px-3 h-9 focus:outline-none">
              <a [ngClass]="{'cursor-pointer text-body': actualPage !== 1, 'text-gray-400': actualPage === 1}">Previous</a>
            </button>
          </li>
          @for (page of pages; track page) {
            <li>
              <button [disabled]="actualPage === page" (click)="goToPage(page)" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">
                <a [ngClass]="{'cursor-pointer text-body': actualPage !== page, 'text-blue-500': actualPage === page}">{{ page }}</a>
              </button>
            </li>
          }
          <li>
            <button [disabled]="actualPage === totalPages" (click)="goToPage(actualPage + 1)" [ngClass]="{'hover:bg-neutral-tertiary-medium hover:text-heading': actualPage !== totalPages}" class="flex items-center justify-center bg-neutral-secondary-medium box-border border border-default-medium font-medium rounded-e-base text-sm px-3 h-9 focus:outline-none">
              <a [ngClass]="{'cursor-pointer text-body': actualPage !== totalPages, 'text-gray-400': actualPage === totalPages}">Next</a>
            </button>
          </li>
        </ul>
      </nav>
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
