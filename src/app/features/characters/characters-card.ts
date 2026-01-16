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
  styles: `
    .ptc-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1.5rem;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      width: 100%;

      .thumbnail {
        height: 16rem;
        width: 100%;
        object-fit: cover;
        border-radius: 12px;
        margin-bottom: 1rem;
      }

      .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        line-height: 1.5rem;
      }
    }

    @media (width >= 48rem) {
      .ptc-card {
        flex-direction: row;

        .thumbnail {
          height: auto;
          max-width: 12rem;
          margin-bottom: 0;
        }

        .content {
          padding: 1rem;
        }
      }
    }
  `
})
export class CharactersCard {
  @Input() data?: Character = undefined;

}
