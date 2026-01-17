import { Component, Input } from '@angular/core'
import { Character } from './models/character-model';

@Component({
  selector: 'app-characters-card',
  standalone: true,
  template: `
    <div href="#" class="ptc-card">
      <img class="thumbnail" [src]="data?.image" alt="">
      <div class="content txt-color">
        <h5 class="mb-2 text-2xl bold-txt tracking-tight title-color">{{ data?.id }}. {{ data?.name }}</h5>
        <p>Species: {{ data?.species }}</p>
        <span>Gender: {{ data?.gender }}</span>
        <span class="mb-6">Origin: {{ data?.origin?.name }}</span>
      </div>
    </div>
  `,
  styles: ``
})
export class CharactersCard {
  @Input() data?: Character = undefined;

}
