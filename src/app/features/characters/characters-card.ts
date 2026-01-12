import { Component, Input } from '@angular/core'
import { Character } from './models/character-model';

@Component({
  selector: 'app-characters-card',
  standalone: true,
  template: `
    <div href="#" class="flex flex-col items-center bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs md:flex-row w-full mb-4">
      <img class="object-cover w-full rounded-base h-64 md:h-auto md:max-w-48 mb-4 md:mb-0" [src]="data?.image" alt="">
      <div class="flex flex-col justify-between md:p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-heading">{{ data?.id }}. {{ data?.name }}</h5>
        <p class="text-body">Species: {{ data?.species }}</p>
        <span class="text-body">Gender: {{ data?.gender }}</span>
        <span class="mb-6 text-body">Origin: {{ data?.origin?.name }}</span>
      </div>
</div>
  `,
  styles: []
})
export class CharactersCard {
  @Input() data?: Character = undefined;

}
