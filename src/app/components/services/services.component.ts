import { Component, ElementRef, OnInit, ViewChild, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    animations: [
        trigger('staggerFadeIn', [
            transition(':enter', [
                query('div', [
                    style({ opacity: 0, transform: 'translateY(20px)' }),
                    stagger(100, [
                        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
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
    <section id="servicios" class="py-24 relative" #sectionRef>
      <div class="container mx-auto px-4">
        <div *ngIf="isVisible()" @fadeInUp class="text-center mb-16">
          <span class="text-primary text-sm font-semibold uppercase tracking-wider">
            Nuestros Servicios
          </span>
          <h2 class="text-3xl md:text-5xl font-bold mt-2">Qué Hacemos</h2>
        </div>

        <div *ngIf="isVisible()" @staggerFadeIn class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6">
          <div *ngFor="let service of services" class="text-center">
            <div class="w-14 h-14 mx-auto rounded-xl gradient-bg flex items-center justify-center mb-4">
              <lucide-icon [name]="service.icon" class="w-7 h-7 text-foreground"></lucide-icon>
            </div>
            <h3 class="font-semibold mb-2">{{ service.title }}</h3>
            <p class="text-muted-foreground text-sm leading-relaxed">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent implements OnInit, OnDestroy {
    @ViewChild('sectionRef', { static: true }) sectionRef!: ElementRef;

    isVisible = signal(false);
    observer: IntersectionObserver | undefined;

    services = [
        {
            icon: 'palette',
            title: "Diseño Web Profesional",
            description: "Creamos diseños únicos y atractivos que reflejan la identidad de tu marca.",
        },
        {
            icon: 'code',
            title: "Desarrollo Web a Medida",
            description: "Soluciones personalizadas con las últimas tecnologías.",
        },
        {
            icon: 'shopping-cart',
            title: "Tiendas Online",
            description: "E-commerce optimizados para convertir visitantes en clientes.",
        },
        {
            icon: 'search',
            title: "SEO & Optimización",
            description: "Posicionamiento en buscadores para aumentar tu visibilidad.",
        },
        {
            icon: 'layers',
            title: "Branding y UX/UI",
            description: "Experiencias de usuario intuitive y diseño de marca coherente.",
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
