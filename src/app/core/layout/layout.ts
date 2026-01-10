import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="min-h-screen flex flex-col">
      <header class="w-full bg-slate-900 text-white">
        <div class="mx-auto max-w-7xl px-4 h-14 flex items-center">
          <span class="text-lg font-semibold">Prueba Técnica Carsales</span>
          <button
            type="button"
            (click)="goToCharacters()"
            class="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
          >
            Characters
          </button>
          <button
            type="button"
            (click)="goToEpisodes()"
            class="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
          >
            Episodes
          </button>
        </div>
      </header>

      <main class="flex-1 w-full">
        <div class="mx-auto max-w-7xl px-4 py-6">
          <router-outlet />
        </div>
      </main>

      <footer class="w-full bg-slate-100 border-t">
        <div class="mx-auto max-w-7xl px-4 py-4 text-sm text-slate-600">
          © 2026
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
