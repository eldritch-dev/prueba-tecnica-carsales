import { Component, Input } from '@angular/core'
import { Episode } from './models/episode-model';

@Component({
  selector: 'app-episodes-card',
  standalone: true,
  template: `
    <div class="ptc-card">
      <div class="content txt-color">
        <h5 class="mb-2 text-2xl bold-txt tracking-tight title-color">{{ data?.id }}. {{ data?.name }}</h5>
        <p>Air Date: {{ data?.air_Date }}</p>
        <p>Episode: {{ data?.episode }}</p>
        <div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class EpisodesCard {
  @Input() data?: Episode = undefined;

}
