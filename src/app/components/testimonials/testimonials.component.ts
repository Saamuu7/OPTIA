import { Component, ElementRef, OnInit, ViewChild, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
    selector: 'app-testimonials',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    animations: [
        trigger('fadeInUp', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(30px)' }),
                animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
            ])
        ]),
        trigger('scaleIn', [
            transition(':enter', [
                style({ opacity: 0, transform: 'scale(0.95)' }),
                animate('0.6s 0.2s ease-out', style({ opacity: 1, transform: 'scale(1)' }))
            ])
        ]),
        trigger('staggerFadeIn', [
            transition(':enter', [
                query('div.testimonial-card', [
                    style({ opacity: 0, transform: 'translateY(30px)' }),
                    stagger(100, [
                        animate('0.6s 0.3s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
                    ])
                ], { optional: true })
            ])
        ])
    ],
    template: `
    <section class="py-24 relative overflow-hidden" #sectionRef>
      <!-- Background decoration -->
      <div class="absolute inset-0">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div *ngIf="isVisible()" @fadeInUp class="text-center mb-16">
          <span class="text-primary text-sm font-semibold uppercase tracking-wider">
            Testimonios
          </span>
          <h2 class="text-3xl md:text-5xl font-bold mt-2">
            Lo Que Dicen Nuestros Clientes
          </h2>
        </div>

        <!-- Featured testimonial -->
        <div *ngIf="isVisible()" @scaleIn class="max-w-4xl mx-auto mb-12">
          <div class="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-card via-card to-card/50 border border-primary/20">
            <!-- Large quote mark -->
            <div class="absolute -top-6 left-8 text-8xl text-primary/20 font-serif">
              "
            </div>
            
            <div class="relative z-10">
              <div class="flex gap-1 mb-6">
                <lucide-icon *ngFor="let _ of [].constructor(testimonials[0].rating)" 
                            name="star" 
                            class="w-5 h-5 fill-primary text-primary"></lucide-icon>
              </div>
              
              <p class="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-medium">
                {{ testimonials[0].content }}
              </p>
              
              <div class="flex items-center gap-4">
                <img [src]="testimonials[0].image"
                     [alt]="testimonials[0].name"
                     class="w-14 h-14 rounded-full object-cover ring-2 ring-primary/30 ring-offset-2 ring-offset-background"
                     loading="lazy" />
                <div>
                  <div class="font-semibold text-lg">{{ testimonials[0].name }}</div>
                  <div class="text-primary">{{ testimonials[0].role }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Other testimonials -->
        <div *ngIf="isVisible()" @staggerFadeIn class="flex flex-col md:flex-row gap-6 justify-center">
          <div *ngFor="let testimonial of testimonials.slice(1)" class="testimonial-card flex-1 max-w-md">
            <div class="h-full p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300">
              <div class="flex gap-1 mb-4">
                 <lucide-icon *ngFor="let _ of [].constructor(testimonial.rating)" 
                            name="star" 
                            class="w-4 h-4 fill-primary text-primary"></lucide-icon>
              </div>

              <p class="text-muted-foreground mb-6 leading-relaxed">
                "{{ testimonial.content }}"
              </p>

              <div class="flex items-center gap-3">
                <img [src]="testimonial.image"
                     [alt]="testimonial.name"
                     class="w-10 h-10 rounded-full object-cover border border-border"
                     loading="lazy" />
                <div>
                  <div class="font-medium text-sm">{{ testimonial.name }}</div>
                  <div class="text-xs text-muted-foreground">
                    {{ testimonial.role }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class TestimonialsComponent implements OnInit, OnDestroy {
    @ViewChild('sectionRef', { static: true }) sectionRef!: ElementRef;

    isVisible = signal(false);
    observer: IntersectionObserver | undefined;

    testimonials = [
        {
            name: "María García",
            role: "CEO, TechStart",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
            content: "OPTIA transformó completamente nuestra presencia online. El diseño es impresionante y las conversiones aumentaron un 150%.",
            rating: 5,
        },
        {
            name: "Carlos Rodríguez",
            role: "Fundador, EcoStore",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
            content: "Profesionales, creativos y muy atentos. Nuestra tienda online supera todas las expectativas. Altamente recomendados.",
            rating: 5,
        },
        {
            name: "Ana Martínez",
            role: "Directora, Studio Creativo",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
            content: "El equipo de OPTIA entiende perfectamente las necesidades del cliente. Entregaron un sitio web que supera cualquier expectativa.",
            rating: 5,
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
