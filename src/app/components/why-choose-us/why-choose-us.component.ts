import { Component, ElementRef, OnInit, ViewChild, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

@Component({
    selector: 'app-why-choose-us',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    animations: [
        trigger('fadeInRight', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateX(-30px)' }),
                animate('0.6s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
            ])
        ]),
        trigger('staggerFadeIn', [
            transition(':enter', [
                query('div.reason-item', [
                    style({ opacity: 0, transform: 'translateY(20px)' }),
                    stagger(100, [
                        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
                    ])
                ], { optional: true })
            ])
        ])
    ],
    template: `
    <section class="py-24 relative overflow-hidden" #sectionRef>
      <div class="container mx-auto px-4 relative z-10">
        <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-20">
          
          <!-- Left side - sticky title -->
          <div *ngIf="isVisible()" @fadeInRight class="lg:w-1/3 lg:sticky lg:top-32">
            <span class="text-primary text-sm font-semibold uppercase tracking-wider">
              Por Qué Elegirnos
            </span>
            <h2 class="text-3xl md:text-5xl font-bold mt-2 leading-tight">
              Tu Éxito es Nuestra
              <span class="gradient-text">Prioridad</span>
            </h2>
            <p class="text-muted-foreground mt-4">
              Más de 50 proyectos exitosos nos respaldan
            </p>
            
            <!-- Decorative element -->
            <div class="hidden lg:block mt-12">
              <div class="w-24 h-1 gradient-bg rounded-full"></div>
            </div>
          </div>

          <!-- Right side - timeline style list -->
          <div *ngIf="isVisible()" @staggerFadeIn class="lg:w-2/3 space-y-0">
            <div *ngFor="let reason of reasons; let i = index; let last = last" 
                 class="reason-item group relative">
              
              <!-- Connecting line -->
              <div *ngIf="!last" class="absolute left-6 top-16 w-px h-full bg-gradient-to-b from-primary/30 to-transparent"></div>
              
              <div class="flex items-start gap-6 py-8 border-b border-border/50 group-hover:border-primary/30 transition-colors">
                <!-- Number/Icon -->
                <div class="relative">
                  <div class="w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center text-primary font-bold text-sm group-hover:bg-primary group-hover:text-foreground group-hover:border-primary transition-all duration-300">
                    {{ reason.number }}
                  </div>
                </div>
                
                <!-- Content -->
                <div class="flex-1 pt-1">
                  <div class="flex items-center gap-3 mb-2">
                    <lucide-icon [name]="reason.icon" class="w-5 h-5 text-primary"></lucide-icon>
                    <h3 class="text-xl font-semibold group-hover:text-primary transition-colors">
                      {{ reason.title }}
                    </h3>
                  </div>
                  <p class="text-muted-foreground leading-relaxed pl-8">
                    {{ reason.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class WhyChooseUsComponent implements OnInit, OnDestroy {
    @ViewChild('sectionRef', { static: true }) sectionRef!: ElementRef;

    isVisible = signal(false);
    observer: IntersectionObserver | undefined;

    reasons = [
        {
            icon: 'check-circle',
            title: "Diseño Limpio y Moderno",
            description: "Creamos interfaces elegantes y funcionales que destacan tu marca.",
            number: "01",
        },
        {
            icon: 'zap',
            title: "Experiencia en Conversión",
            description: "Optimizamos cada elemento para maximizar resultados y conversiones.",
            number: "02",
        },
        {
            icon: 'shield',
            title: "Webs Rápidas y Seguras",
            description: "Rendimiento superior con las mejores prácticas de seguridad.",
            number: "03",
        },
        {
            icon: 'users',
            title: "Acompañamiento Personalizado",
            description: "Te guiamos en cada paso del proceso con atención dedicada.",
            number: "04",
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
