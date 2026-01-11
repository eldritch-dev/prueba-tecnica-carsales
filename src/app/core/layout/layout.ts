import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="min-h-screen flex flex-col">
      <header class="w-full bg-slate-900 text-white flex justify-between h-16">
        <span class="text-lg font-semibold flex items-center ml-8">Prueba Técnica Carsales</span>
        <div class="flex">
          <div class="flex justify-evenly items-center">
            <button
              type="button"
              (click)="goToCharacters()"
              class="text-heading hover:text-white h-8 bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 text-center leading-5"
            >
              Characters
            </button>
            <button
              type="button"
              (click)="goToEpisodes()"
              class=" text-heading hover:text-white h-8 ml-4 bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 text-center leading-5"
            >
              Episodes
            </button>
          </div>
          <button class="group relative">
            <a aria-label="GitHub frontend repository" data-tooltip-target="frontend-tooltip" target="_blank" class="group ml-12 flex justify-center items-center" href="https://github.com/eldritch-dev/prueba-tecnica-carsales">
              <svg viewBox="0 0 20 20" class="size-5 fill-blue-400 hover:fill-white">
                <path d="M10 0C4.475 0 0 4.475 0 10a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.287-.6-1.175-1.025-1.412-.35-.188-.85-.65-.013-.663.788-.013 1.35.725 1.538 1.025.9 1.512 2.337 1.087 2.912.825.088-.65.35-1.088.638-1.338-2.225-.25-4.55-1.112-4.55-4.937 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.274.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0020 10c0-5.525-4.475-10-10-10z"></path>
              </svg>
            </a>
            <span
              class="absolute right-1/4  mb-2 hidden group-hover:block whitespace-nowrap bg-gray-500 text-white text-xs px-2 py-1 rounded">
              Frontend
            </span>
          </button>
          <button class="group relative">
            <a aria-label="GitHub back-end repository" target="_blank" class="ml-2 mr-6 flex justify-center items-center" href="https://github.com/eldritch-dev/PruebaTecnicaCarsales">
              <svg viewBox="0 0 20 20" class="size-5 fill-pink-400 hover:fill-white">
                <path d="M10 0C4.475 0 0 4.475 0 10a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.287-.6-1.175-1.025-1.412-.35-.188-.85-.65-.013-.663.788-.013 1.35.725 1.538 1.025.9 1.512 2.337 1.087 2.912.825.088-.65.35-1.088.638-1.338-2.225-.25-4.55-1.112-4.55-4.937 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.274.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0020 10c0-5.525-4.475-10-10-10z"></path>
              </svg>
            </a>
            <span
              class="absolute right-5/7 mb-2 hidden group-hover:block whitespace-nowrap bg-gray-500 text-white text-xs px-2 py-1 rounded">
              Backend
            </span>
          </button>
          </div>
      </header>

      <main class="flex-1 w-full">
        <div class="mx-auto max-w-7xl px-4 py-6">
          <router-outlet />
        </div>
      </main>

      <footer class="w-full flex justify-between bg-slate-100 border-t">
        <div class="max-w-7xl px-4 py-4 text-sm text-slate-600">
          Desarrollado por Javier Gutiérrez
        </div>
        <div class="max-w-7xl px-4 py-4 text-sm text-slate-600">
          Noviembre 2026
        </div>
      </footer>

    </div>
  `
})
export class AppLayout {
  router = inject(Router);

  goToEpisodes() {
    this.router.navigate(['/episodes']);
  }
  goToCharacters() {
    this.router.navigate(['/characters']);
  }
}
