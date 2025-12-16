import { Component, ElementRef, OnInit, ViewChild, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
// import { trigger, transition, style, animate, stagger, query, keyframes } from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section id="nosotros" class="py-24 relative" #sectionRef>
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <!-- Content -->
          <div>
            <span class="text-primary text-sm font-semibold uppercase tracking-wider">
              Sobre Nosotros
            </span>
            <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Impulsamos Negocios con
              <span class="gradient-text">Tecnología</span>
            </h2>
            <p class="text-muted-foreground text-lg leading-relaxed mb-6">
              En OPTIA, creemos que cada negocio merece una presencia digital
              excepcional. Combinamos creatividad, tecnología y estrategia para
              crear experiencias web que no solo se ven increíbles, sino que
              también generan resultados reales.
            </p>
            <p class="text-muted-foreground leading-relaxed mb-8">
              Nuestro enfoque se centra en entender tus objetivos y traducirlos
              en soluciones digitales que conecten con tu audiencia y potencien
              el crecimiento de tu marca.
            </p>

            <!-- Values -->
            <div class="grid grid-cols-3 gap-4">
              <div *ngFor="let value of values" 
                   class="value-item text-center p-4 rounded-lg bg-card border border-border">
                <lucide-icon [name]="value.icon" class="w-6 h-6 text-primary mx-auto mb-2"></lucide-icon>
                <span class="text-sm font-medium block">{{ value.label }}</span>
              </div>
            </div>
          </div>

          <!-- Visual -->
          <div class="relative">
            <div class="relative rounded-2xl overflow-hidden border border-border">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                   alt="Equipo OPTIA trabajando"
                   class="w-full h-auto"
                   loading="lazy" />
              <div class="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            </div>
            
            <!-- Floating badge -->
            <div class="absolute -bottom-6 -left-6 p-4 rounded-xl glass border-glow">
              <div class="text-3xl font-bold gradient-text">50+</div>
              <div class="text-sm text-muted-foreground">Proyectos Exitosos</div>
            </div>

            <!-- Decorative elements -->
            <div class="absolute -top-4 -right-4 w-24 h-24 rounded-full border border-primary/20"></div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class AboutComponent implements OnInit, OnDestroy {
  @ViewChild('sectionRef', { static: true }) sectionRef!: ElementRef;

  values = [
    { icon: 'target', label: "Claridad", description: "Comunicación directa y transparente" },
    { icon: 'lightbulb', label: "Rendimiento", description: "Sitios rápidos y optimizados" },
    { icon: 'trending-up', label: "Diseño Estratégico", description: "Cada decisión con propósito" },
  ];

  ngOnInit() { }
  ngOnDestroy() { }
}
