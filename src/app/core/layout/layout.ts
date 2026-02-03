import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BreakpointService } from './breakpoint';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="layout flex flex-col">
      <header class="header">
        <span class="title text-lg flex items-center" [ngClass]="{'justify-center': breakPointService.isSm(), 'ml-8': !breakPointService.isSm()}" style="width:100%">Prueba Técnica Carsales</span>
        @if (!breakPointService.isSm()) {
          <div class="flex">
            <div class="flex justify-evenly items-center">
              <button type="button" (click)="goToCharacters()" class="cosmic-btn">
                Characters
              </button>
              <button type="button" (click)="goToEpisodes()" class="cosmic-btn">
                Episodes
              </button>
            </div>
            <button class="tooltip-group">
              <a target="_blank" class="ml-12 flex justify-center items-center" href="https://github.com/eldritch-dev/prueba-tecnica-carsales">
                <svg viewBox="0 0 20 20" class="size-5 blue-gh-btn">
                  <path d="M10 0C4.475 0 0 4.475 0 10a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.287-.6-1.175-1.025-1.412-.35-.188-.85-.65-.013-.663.788-.013 1.35.725 1.538 1.025.9 1.512 2.337 1.087 2.912.825.088-.65.35-1.088.638-1.338-2.225-.25-4.55-1.112-4.55-4.937 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.274.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0020 10c0-5.525-4.475-10-10-10z"></path>
                </svg>
              </a>
              <span class="tooltip">Frontend</span>
            </button>
            <button class="tooltip-group">
              <a target="_blank" class="ml-2 mr-6 flex justify-center items-center" href="https://github.com/eldritch-dev/PruebaTecnicaCarsales">
                <svg viewBox="0 0 20 20" class="size-5 pink-gh-btn">
                  <path d="M10 0C4.475 0 0 4.475 0 10a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.287-.6-1.175-1.025-1.412-.35-.188-.85-.65-.013-.663.788-.013 1.35.725 1.538 1.025.9 1.512 2.337 1.087 2.912.825.088-.65.35-1.088.638-1.338-2.225-.25-4.55-1.112-4.55-4.937 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.274.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0020 10c0-5.525-4.475-10-10-10z"></path>
                </svg>
              </a>
              <span class="tooltip">Backend</span>
            </button>
          </div>
        }
      </header>


      @if (breakPointService.isSm()) {
        <div class="flex flex-col items-center" style="background-color: #f5f5f5">
          <button type="button" (click)="goToCharacters()" class="mt-2 cosmic-btn">
            Characters
          </button>
          <button type="button" (click)="goToEpisodes()" class="my-2 cosmic-btn">
            Episodes
          </button>
        </div>
      }

      <main class="flex-1 w-full">
        <div class="mx-auto max-w-7xl px-4 py-6">
          <router-outlet />
        </div>
      </main>

      <footer [ngClass]="{'flex-col': breakPointService.isSm()}" class="w-full flex justify-between bg-slate-100 border-t">
        <div class="max-w-7xl px-4 text-sm text-color" [ngClass]="{'py-4': !breakPointService.isSm(), 'mt-2': breakPointService.isSm()}">
          Desarrollado por <a aria-label="GitHub back-end repository" class="font-semibold text-slate-900" target="_blank" href="https://eldritch.dev">Javier Gutiérrez</a>
        </div>
        <div class="max-w-7xl px-4 text-sm text-color" [ngClass]="{'py-4': !breakPointService.isSm(), 'mb-2': breakPointService.isSm()}">
          Enero 2026
        </div>
      </footer>

    </div>
  `,
  styles: `
    .layout {
      width: 100%;
      min-height: 100vh;
      font-family: "Inter", sans-serif;

      .header {
        width: 100%;
        background-color: #1e293b;
        color: white;
        display: flex;
        justify-content: space-between;
        height: 4rem;

        .title {
          font-weight: 600;
        }
      }
    }

    .github-btn {
      position: relative;
    }

    .tooltip-group {
      position: relative;
    }

    .tooltip {
      position: absolute;
      margin-top: 0.25rem;
      right: 25%;
      background: #6b7280;
      color: white;
      font-size: 12px;
      padding: 0.25rem 0.5rem;
      border-radius: 8px;
      white-space: nowrap;
      display: none;
    }

    .tooltip-group:hover .tooltip {
      display: block;
    }
  `
})
export class AppLayout {
  router = inject(Router);
  breakPointService = inject(BreakpointService);

  goToEpisodes() {
    this.router.navigate(['/episodes']);
  }
  goToCharacters() {
    this.router.navigate(['/characters']);
  }
}
