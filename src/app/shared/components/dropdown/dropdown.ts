import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharactersService } from '../../../features/characters/service/characters-service';

@Component({
  selector: 'app-dropdown-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <div class="relative inline-block w-48">
    <select class="selector" [(ngModel)]="selection" (change)="onChange()">
      <option value="" disabled selected>Filtra por Género</option>
      @for (item of dataSource; track item) {
        <option [value]="item">
          {{ item | titlecase }}
        </option>
      }
    </select>
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
      border: 1px solid var(--color-gray-200);
      padding: 2px;
    }

    .close-btn {
      right: 1.5rem;
      top: 50%;
      transform: translateY(-50%);
      color: #6B7280;
      background: transparent;
      border: none;
      cursor: pointer;
    }

    .close-btn:hover {
      color: #374151;
    }
  `
})
export class DropdownSelector {
  @Input() dataSource: readonly string[] = [];
  @Input() service?: CharactersService; // ESPECIFICAR OTRAS OPCIONES
  @Input() filterKey!: string;

  selection: string | null = null;

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
