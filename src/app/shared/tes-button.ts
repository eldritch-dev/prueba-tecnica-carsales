import { Component } from "@angular/core";

@Component({
  selector: 'app-tes-button',
  standalone: true,
  template: `
    <button
      type="button"
      class="text-heading hover:text-white hover:cursor-pointer h-8 ml-4 bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 text-center leading-5"
    >
      Test Error Service
    </button>
  `,
  styles: ``
})
export class TESButton {}
