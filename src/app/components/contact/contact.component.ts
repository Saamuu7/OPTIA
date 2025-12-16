import { Component, ElementRef, OnInit, ViewChild, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    animations: [
        trigger('fadeInUp', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(30px)' }),
                animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
            ])
        ]),
        trigger('fadeInUpDelayed', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(30px)' }),
                animate('0.6s 0.1s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
            ])
        ])
    ],
    template: `
    <section id="contacto" class="py-24 relative" #sectionRef>
      <div class="container mx-auto px-4">
        <div *ngIf="isVisible()" @fadeInUp class="text-center mb-16">
          <span class="text-primary text-sm font-semibold uppercase tracking-wider">
            Contacto
          </span>
          <h2 class="text-3xl md:text-4xl font-bold mt-2">
            Hablemos de Tu Proyecto
          </h2>
          <p class="text-muted-foreground mt-4 max-w-2xl mx-auto">
            ¿Listo para llevar tu negocio al siguiente nivel? Cuéntanos tu idea.
          </p>
        </div>

        <div *ngIf="isVisible()" @fadeInUpDelayed class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="mailto:optiasmma@gmail.com"
               class="flex flex-col items-center p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group">
              <div class="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <lucide-icon name="mail" class="w-8 h-8"></lucide-icon>
              </div>
              <div class="text-center">
                <div class="text-sm text-muted-foreground mb-1">Email</div>
                <div class="font-medium text-lg">optiasmma@gmail.com</div>
              </div>
            </a>

            <a href="https://wa.me/34646236118"
               target="_blank"
               rel="noopener noreferrer"
               class="flex flex-col items-center p-8 rounded-xl bg-card border border-border hover:border-whatsapp/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group">
              <div class="w-16 h-16 rounded-full bg-whatsapp flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <lucide-icon name="message-circle" class="w-8 h-8"></lucide-icon>
              </div>
              <div class="text-center">
                <div class="text-sm text-muted-foreground mb-1">WhatsApp</div>
                <div class="font-medium text-lg text-whatsapp">+34 646 236 118</div>
              </div>
            </a>

            <a href="https://www.instagram.com/opt.iaagency/"
               target="_blank"
               rel="noopener noreferrer"
               class="flex flex-col items-center p-8 rounded-xl bg-card border border-border hover:border-pink-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group">
              <div class="w-16 h-16 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <lucide-icon name="instagram" class="w-8 h-8 text-white"></lucide-icon>
              </div>
              <div class="text-center">
                <div class="text-sm text-muted-foreground mb-1">Síguenos</div>
                <div class="font-medium text-lg">@opt.iaagency</div>
              </div>
            </a>
          </div>

          <div class="mt-12 text-center text-muted-foreground">
            <p>Estamos disponibles para atenderte y resolver todas tus dudas sin compromiso.</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent implements OnInit, OnDestroy {
    @ViewChild('sectionRef', { static: true }) sectionRef!: ElementRef;

    isVisible = signal(false);
    observer: IntersectionObserver | undefined;

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
