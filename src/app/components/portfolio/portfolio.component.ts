import { Component, ElementRef, OnInit, ViewChild, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

interface Project {
    title: string;
    category: string;
    image: string;
    description: string;
    status: 'active' | 'coming_soon' | 'in_progress';
}

@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    animations: [
        trigger('staggerFadeIn', [
            transition(':enter', [
                query('div.group', [
                    style({ opacity: 0, transform: 'translateY(30px)' }),
                    stagger(100, [
                        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
                    ])
                ], { optional: true })
            ])
        ]),
        trigger('fadeInUp', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(30px)' }),
                animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
            ])
        ])
    ],
    template: `
    <section id="portfolio" class="py-24 relative" #sectionRef>
      <div class="container mx-auto px-4">
        <div *ngIf="isVisible()" @fadeInUp class="text-center mb-16">
          <span class="text-primary text-sm font-semibold uppercase tracking-wider">
            Portfolio
          </span>
          <h2 class="text-3xl md:text-4xl font-bold mt-2">
            Nuestros Proyectos
          </h2>
          <p class="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Explora algunos de nuestros trabajos más destacados
          </p>
        </div>

        <div *ngIf="isVisible()" @staggerFadeIn class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div *ngFor="let project of projects"
               class="group relative rounded-xl overflow-hidden bg-card border border-border transition-all duration-500"
               [ngClass]="{
                 'hover:border-primary/30 hover:glow': project.status === 'active',
                 'opacity-80': project.status !== 'active'
               }">
            
            <div class="aspect-video overflow-hidden relative">
              <img [src]="project.image"
                   [alt]="project.title"
                   class="w-full h-full object-cover transition-transform duration-700"
                   [ngClass]="{
                     'group-hover:scale-110': project.status === 'active',
                     'grayscale filter blur-[2px]': project.status !== 'active'
                   }"
                   loading="lazy" />
              
              <div class="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent transition-opacity duration-500"
                   [ngClass]="{
                     'opacity-0 group-hover:opacity-100': project.status === 'active',
                     'opacity-100 bg-black/40 flex items-center justify-center backdrop-blur-[1px]': project.status !== 'active'
                   }">
                
                <div *ngIf="project.status !== 'active'" 
                     class="bg-background/90 border border-primary/20 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 transform -rotate-3 hover:scale-105 transition-transform">
                  <ng-container *ngIf="project.status === 'coming_soon'">
                    <lucide-icon name="lock" class="w-4 h-4 text-primary"></lucide-icon>
                    <span class="text-primary font-semibold text-sm">Próximamente</span>
                  </ng-container>
                  <ng-container *ngIf="project.status === 'in_progress'">
                    <lucide-icon name="hammer" class="w-4 h-4 text-primary"></lucide-icon>
                    <span class="text-primary font-semibold text-sm">En Construcción</span>
                  </ng-container>
                </div>
              </div>
            </div>

            <div class="p-6">
              <div class="flex items-center justify-between mb-2">
                <span class="text-primary text-sm font-medium">{{ project.category }}</span>
                <span *ngIf="project.status !== 'active'" 
                      class="text-[10px] uppercase tracking-wider text-muted-foreground border border-border px-2 py-0.5 rounded-full">
                  {{ project.status === 'coming_soon' ? 'Coming Soon' : 'WIP' }}
                </span>
              </div>
              
              <h3 class="text-xl font-semibold mt-1 mb-2">{{ project.title }}</h3>
              <p class="text-muted-foreground text-sm mb-4">{{ project.description }}</p>
              
              <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:text-accent-foreground h-9 px-3"
                      [disabled]="project.status !== 'active'"
                      [ngClass]="{
                        'border-primary/30 hover:bg-primary/10 hover:border-primary group/btn': true,
                        'opacity-50': project.status !== 'active'
                      }">
                <ng-container *ngIf="project.status === 'active'">
                  Ver Proyecto
                  <lucide-icon name="external-link" class="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1"></lucide-icon>
                </ng-container>
                <span *ngIf="project.status !== 'active'">No Disponible</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class PortfolioComponent implements OnInit, OnDestroy {
    @ViewChild('sectionRef', { static: true }) sectionRef!: ElementRef;

    isVisible = signal(false);
    observer: IntersectionObserver | undefined;

    projects: Project[] = [
        {
            title: "StyleCut Manager",
            category: "Sistema de Gestión",
            image: "/portfolio_hairdresser.png",
            description: "Plataforma completa para peluquerías: web para clientes con citas online y panel de administración para gestión de agenda.",
            status: "active",
        },
        {
            title: "Ink Masters Studio",
            category: "Web App & Reservas",
            image: "/portfolio_tattoo.png",
            description: "Solución digital para estudios de tatuaje con sistema de reservas avanzado y gestión de artistas similar a StyleCut.",
            status: "active",
        },
        {
            title: "DriveMaster CRM",
            category: "CRM & Gestión",
            image: "/portfolio_driving_school.png",
            description: "Sistema integral de gestión para autoescuelas: control de alumnos, agenda de profesores y seguimiento de flota.",
            status: "active",
        },
        {
            title: "Próximamente",
            category: "En Desarrollo",
            image: "/optia_logo.jpg",
            description: "Información no disponible por el momento.",
            status: "coming_soon",
        },
        {
            title: "Próximamente",
            category: "En Desarrollo",
            image: "/optia_logo.jpg",
            description: "Información no disponible por el momento.",
            status: "coming_soon",
        },
        {
            title: "Próximamente",
            category: "En Desarrollo",
            image: "/optia_logo.jpg",
            description: "Información no disponible por el momento.",
            status: "in_progress",
        },
    ];

    ngOnInit() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.isVisible.set(true);
                    this.observer?.disconnect();
                }
            });
        }, { threshold: 0.1 });

        this.observer.observe(this.sectionRef.nativeElement);
    }

    ngOnDestroy() {
        this.observer?.disconnect();
    }
}
