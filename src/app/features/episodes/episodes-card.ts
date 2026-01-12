import { Component, Input } from '@angular/core'
import { Episode } from './models/episode-model';

@Component({
  selector: 'app-episodes-card',
  standalone: true,
  template: `
    <a href="#" class="flex flex-col items-center bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs md:flex-row w-full mb-4">
      <div class="flex flex-col justify-between md:p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-heading">{{ data?.id }}. {{ data?.name }}</h5>
        <p class="text-body">Air Date: {{ data?.air_Date }}</p>
        <p class="text-body">Episode: {{ data?.episode }}</p>
        <div>
        </div>
      </div>
    </a>
  `,
  styles: []
})
export class EpisodesCard {
  @Input() data?: Episode = undefined;

}
