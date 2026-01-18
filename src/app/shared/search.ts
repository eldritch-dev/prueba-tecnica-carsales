import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { CharactersService } from '../features/characters/service/characters-service';


@Component({
  selector: 'app-search-component',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <input type="text" [formControl]="searchControl" (keydown.enter)="this.service.goToPage(1, { 'name': searchControl.value })" />
  `,
  styles: ``
})
export class SearchComponent {
  @Input() service!: CharactersService;
  @Input() page!: number;

  searchControl = new FormControl('', { nonNullable: true });
}
