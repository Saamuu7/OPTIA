import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { HeroBackgroundComponent } from './hero-background.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule, HeroBackgroundComponent],
  template: `
    <section id="inicio" class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <app-hero-background></app-hero-background>

      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          
          <div class="mb-6">
            <span class="inline-block px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium">
              OPTIA
            </span>
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Creamos Sitios Web 
            <span class="gradient-text glow-text">Modernos</span> y de Alto
            Rendimiento
          </h1>

          <p class="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Soluciones digitales diseñadas para hacer crecer tu negocio.
            Transformamos ideas en experiencias web excepcionales.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a routerLink="/" fragment="portfolio"
               class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 rounded-md px-8 gradient-bg hover:glow-strong transition-all duration-300 text-lg text-primary-foreground min-w-[200px]">
              Ver Nuestro Trabajo
              <lucide-icon name="arrow-right" class="ml-2 h-5 w-5"></lucide-icon>
            </a>
            
            <a href="https://wa.me/646236118" target="_blank" rel="noopener noreferrer"
               class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 rounded-md px-8 border border-primary/30 bg-transparent hover:bg-primary/10 hover:border-primary transition-all duration-300 text-lg min-w-[200px]">
              <lucide-icon name="message-circle" class="mr-2 h-5 w-5"></lucide-icon>
              Hablar por WhatsApp
            </a>
          </div>
        </div>

        <!-- Scroll indicator -->
        <div class="mt-16 flex flex-col items-center">
          <span class="text-muted-foreground text-sm mb-3">Descubre más</span>
          <div class="w-6 h-10 rounded-full border-2 border-primary/40 flex items-start justify-center p-2">
            <div class="w-1.5 h-3 rounded-full gradient-bg animate-scrolldown"></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes scrolldown {
      0% { transform: translateY(0); opacity: 1; }
      50% { transform: translateY(10px); opacity: 0.5; }
      100% { transform: translateY(0); opacity: 1; }
    }
    .animate-scrolldown {
      animation: scrolldown 2s ease-in-out infinite;
    }
  `]
})
export class HeroComponent { }
