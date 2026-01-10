import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
export class AppLayout {}
