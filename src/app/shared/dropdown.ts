import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CharactersService } from '../features/characters/service/characters-service';
import { BreakpointService } from '../services/breakpoint-service';

@Component({
  selector: 'app-dropdown-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <div class="relative inline-block w-48">
    <select class="selector" [(ngModel)]="selection" (change)="onChange()">
      @for (item of dataSource; track item) {
        <option [value]="item" class="option">
          {{ item | titlecase }}
        </option>
      }
    </select>
    <span class="placeholder absolute">Filtra por {{ type }}</span>
    @if (selection) {
      <button type="button" (click)="clear()" class="close-btn absolute">
        X
      </button>
    }
  </div>
  `,
  styles: `
    .selector {
      width: 100%;
      border-radius: 12px;
      height: 2rem;
      border: 1px solid var(--color-gray-500);
      padding: 2px;

      .option {
        color: var(--color-gray-200);
      }
    }

    .placeholder {
      font-size: 12px;
      font-weight: 300;
      right: 5.5rem;
      top: -30%;
      padding: 0 3px;
      background: white;
    }

    .close-btn {
      font-family: "Inter", sans-serif;
      font-weight: 300;
      right: 1.5rem;
      top: 15%;
    }
  `
})
export class DropdownSelector {
  @Input() dataSource: readonly string[] = [];
  @Input() service?: CharactersService; // ESPECIFICAR EPISODESSERVICE SI SE LLEGA A USAR EN ESA VISTA
  @Input() filterKey!: string;
  @Input() type!: string;

  breakpointService = inject(BreakpointService)

  selection: string | null = null;
  placeholder: string = '';

  onChange() {
    if (this.service && this.filterKey) {
      this.service.goToPage(1, { [this.filterKey]: this.selection! });
    }
  }

  clear() {
    this.selection = null;
    if (this.service && this.filterKey) {
      this.service.goToPage(1, { [this.filterKey]: '' });
    }
  }
}
