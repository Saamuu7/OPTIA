import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="relative border-t border-border">
      <!-- Top gradient line -->
      <div class="absolute top-0 left-0 right-0 h-px gradient-bg"></div>

      <div class="container mx-auto px-4 py-16">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <!-- Brand -->
          <div class="md:col-span-2">
            <a routerLink="/" class="flex items-center">
              <img src="/logo.png" alt="OPTIA Logo" class="h-10 w-auto object-contain" />
            </a>
            <p class="text-muted-foreground mt-4 max-w-sm">
              Creamos experiencias digitales que transforman negocios. Tu éxito
              es nuestra misión.
            </p>
            <div class="flex gap-4 mt-6">
              <a *ngFor="let social of socialLinks"
                 [href]="social.href"
                 target="_blank"
                 class="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary/30 hover:text-primary transition-all duration-300 hover:scale-110"
                 [attr.aria-label]="social.label">
                 <ng-container [ngSwitch]="social.label">
                   <svg *ngSwitchCase="'Instagram'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                   <svg *ngSwitchCase="'WhatsApp'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
                 </ng-container>
              </a>
            </div>
          </div>

          <!-- Links -->
          <div>
            <h4 class="font-semibold mb-4">Servicios</h4>
            <ul class="space-y-3">
              <li *ngFor="let link of footerLinks.servicios">
                <a routerLink="/" [fragment]="link.fragment" class="text-muted-foreground hover:text-foreground transition-colors duration-300">
                  {{ link.name }}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold mb-4">Empresa</h4>
            <ul class="space-y-3">
              <li *ngFor="let link of footerLinks.empresa">
                <a routerLink="/" [fragment]="link.fragment" class="text-muted-foreground hover:text-foreground transition-colors duration-300">
                  {{ link.name }}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-sm text-muted-foreground">
            © {{ currentYear }} OPTIA. Todos los derechos reservados.
          </p>
          <div class="flex gap-6 text-sm text-muted-foreground">
            <a routerLink="/privacy-policy" class="hover:text-foreground transition-colors">
              Política de Privacidad
            </a>
            <a routerLink="/terms-of-service" class="hover:text-foreground transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  footerLinks = {
    servicios: [
      { name: "Diseño Web", fragment: "servicios" },
      { name: "Desarrollo", fragment: "servicios" },
      { name: "E-commerce", fragment: "servicios" },
      { name: "SEO", fragment: "servicios" },
    ],
    empresa: [
      { name: "Sobre Nosotros", fragment: "nosotros" },
      { name: "Portfolio", fragment: "portfolio" },
      { name: "Contacto", fragment: "contacto" },
    ],
  };

  socialLinks = [
    { href: "https://www.instagram.com/opt.iaagency/", label: "Instagram" },
    { href: "https://wa.me/1234567890", label: "WhatsApp" },
  ];
}
