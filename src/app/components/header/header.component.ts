import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  animations: [
    trigger('slideDown', [
      state('void', style({ transform: 'translateY(-100%)', opacity: 0 })),
      transition(':enter', [
        animate('0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
    trigger('mobileMenu', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px) scale(0.95)' }),
        animate('0.2s ease-out', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
      ]),
      transition(':leave', [
        animate('0.2s ease-in', style({ opacity: 0, transform: 'translateY(-10px) scale(0.95)' }))
      ])
    ])
  ],
  template: `
    <div class="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
      <header
        [@slideDown]
        class="pointer-events-auto relative w-full max-w-5xl rounded-full border transition-all duration-300"
        [ngClass]="{
          'bg-background/80 backdrop-blur-md border-white/10 shadow-lg py-2': scrolled() || isOpen(),
          'bg-transparent border-transparent py-4': !scrolled() && !isOpen()
        }"
      >
        <div class="px-6 flex items-center justify-between">
          <!-- Logo -->
          <a routerLink="/" class="flex items-center shrink-0">
            <img src="/logo.png" alt="OPTIA Logo" class="h-16 w-auto object-contain" />
          </a>

          <!-- Desktop Nav -->
          <nav class="hidden md:flex items-center gap-1 bg-secondary/30 p-1 rounded-full border border-white/5 backdrop-blur-sm">
            <a *ngFor="let link of navLinks"
               routerLink="/"
               [fragment]="link.fragment"
               class="cursor-pointer px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full transition-all duration-300">
              {{ link.name }}
            </a>
          </nav>

          <!-- CTA & Mobile Toggle -->
          <div class="flex items-center gap-3">
            <a routerLink="/" fragment="contacto"
               class="hidden md:inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 rounded-full gradient-bg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 px-6 text-primary-foreground">
              Empezar
            </a>

            <button
              class="md:hidden p-2 text-foreground hover:bg-secondary rounded-full transition-colors"
              (click)="toggleMenu()"
              aria-label="Toggle menu"
            >
              <!-- Menu Icon -->
              <svg *ngIf="!isOpen()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              <!-- X Icon -->
              <svg *ngIf="isOpen()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu Dropdown -->
        <div *ngIf="isOpen()" @mobileMenu class="absolute top-full left-0 right-0 mt-2 p-4 bg-card/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden mx-2">
          <div class="flex flex-col space-y-2">
            <a *ngFor="let link of navLinks"
               routerLink="/"
               [fragment]="link.fragment"
               (click)="isOpen.set(false)"
               class="flex items-center justify-between p-3 rounded-xl hover:bg-secondary/50 transition-colors group cursor-pointer">
              <span class="text-foreground font-medium">{{ link.name }}</span>
              <span class="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
            <div class="h-px bg-border my-2"></div>
            <a routerLink="/" fragment="contacto"
               (click)="isOpen.set(false)"
               class="w-full inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 rounded-xl gradient-bg text-primary-foreground hover:bg-primary/90">
              Empezar Proyecto
            </a>
          </div>
        </div>
      </header>
    </div>
  `
})
export class HeaderComponent {
  navLinks = [
    { name: "Inicio", fragment: "inicio" },
    { name: "Servicios", fragment: "servicios" },
    { name: "Portfolio", fragment: "portfolio" },
    { name: "Nosotros", fragment: "nosotros" },
    { name: "Contacto", fragment: "contacto" },
  ];

  isOpen = signal(false);
  scrolled = signal(false);

  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrolled.set(window.scrollY > 20);
  }

  toggleMenu() {
    this.isOpen.update(v => !v);
  }
}
