import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-cookie-consent',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  animations: [
    trigger('slideUp', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.5s ease-in', style({ transform: 'translateY(100%)', opacity: 0 }))
      ])
    ]),
    trigger('expand', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('0.3s ease-out', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.3s ease-in', style({ height: 0, opacity: 0 }))
      ])
    ])
  ],
  template: `
    <div *ngIf="showConsent()" @slideUp class="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6">
      <div class="max-w-4xl mx-auto bg-card/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        <div class="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">

          <div class="flex-1 space-y-4">
            <div class="flex items-center gap-3">
              <div class="p-2 bg-primary/10 rounded-full text-primary">
                <lucide-icon name="cookie" [size]="24"></lucide-icon>
              </div>
              <h3 class="text-xl font-semibold">Valoramos tu privacidad</h3>
            </div>

            <p class="text-muted-foreground text-sm leading-relaxed">
              Utilizamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y personalizar el contenido.
              Puedes configurar tus preferencias o aceptar todas las cookies. Consulta nuestra
              <a routerLink="/privacy-policy" class="text-primary hover:underline">Política de Privacidad</a>.
            </p>

            <div *ngIf="showDetails()" @expand class="space-y-3 pt-2 text-sm text-foreground/80">
              <div class="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                <lucide-icon name="shield-check" class="w-5 h-5 text-green-500 mt-0.5 shrink-0"></lucide-icon>
                <div>
                  <span class="font-semibold block">Necesarias (Siempre activas)</span>
                  <span class="text-xs text-muted-foreground">Esenciales para que la web funcione correctamente. No guardan datos personales.</span>
                </div>
              </div>
              <div class="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 border border-transparent hover:border-primary/20 transition-colors">
                <lucide-icon name="shield-alert" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></lucide-icon>
                <div>
                  <span class="font-semibold block">Analíticas y Marketing</span>
                  <span class="text-xs text-muted-foreground">Nos ayudan a entender cómo usas la web para mejorarla.</span>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button *ngIf="!showDetails()"
                    (click)="showDetails.set(true)"
                    class="md:order-1 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              Configurar
            </button>
            
            <button *ngIf="showDetails()"
                    (click)="handleAcceptNecessary()"
                    class="md:order-1 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              Solo necesarias
            </button>

            <button (click)="handleAcceptAll()"
                    class="md:order-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gradient-bg hover:glow-strong text-primary-foreground h-10 px-4 py-2">
              Aceptar todas
            </button>
          </div>

          <button (click)="showConsent.set(false)"
                  class="absolute top-4 right-4 text-muted-foreground hover:text-foreground md:hidden">
            <lucide-icon name="x" [size]="20"></lucide-icon>
          </button>
        </div>
      </div>
    </div>
  `
})
export class CookieConsentComponent implements OnInit {
  showConsent = signal(false);
  showDetails = signal(false);

  ngOnInit() {
    // const consent = localStorage.getItem('cookie-consent');
    // if (!consent) {
    setTimeout(() => this.showConsent.set(true), 1500);
    // }
  }

  handleAcceptAll() {
    localStorage.setItem('cookie-consent', 'all');
    this.showConsent.set(false);
  }

  handleAcceptNecessary() {
    localStorage.setItem('cookie-consent', 'necessary');
    this.showConsent.set(false);
  }

  handleRejectAll() {
    localStorage.setItem('cookie-consent', 'rejected');
    this.showConsent.set(false);
  }
}
