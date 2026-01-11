import { Component, Input } from '@angular/core'
import { Character } from '../../features/characters/models/character-model';

@Component({
  selector: 'app-fb-characters-card',
  standalone: true,
  template: `
    <a href="#" class="flex flex-col items-center bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs md:flex-row w-full mb-4">
      <img class="object-cover w-full rounded-base h-64 md:h-auto md:max-w-48 mb-4 md:mb-0" [src]="data?.image" alt="">
      <div class="flex flex-col justify-between md:p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-heading">{{ data?.name }}</h5>
        <p class="text-body">Species: {{ data?.species }}</p>
        <span class="mb-6 text-body">Gender: {{ data?.gender }}</span>
        <div>
          <button type="button" class="inline-flex items-center w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
            Locations
            <svg class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
          </button>
        </div>
      </div>
    </a>
  `,
  styles: []
})
export class FbCharactersCard {
  @Input() data?: Character = undefined;

}
