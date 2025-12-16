import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-not-found',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <main class="min-h-screen p-4 flex flex-col items-center justify-center">
      <h1>404 - Not Found</h1>
      <a routerLink="/" class="text-blue-500 hover:underline">Go Home</a>
    </main>
  `
})
export class NotFoundComponent { }
