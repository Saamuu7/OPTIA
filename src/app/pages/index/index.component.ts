import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesComponent } from '../../components/services/services.component';
import { PortfolioComponent } from '../../components/portfolio/portfolio.component';
import { AboutComponent } from '../../components/about/about.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { WhyChooseUsComponent } from '../../components/why-choose-us/why-choose-us.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    WhyChooseUsComponent,
    PortfolioComponent,
    AboutComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <main class="min-h-screen bg-background text-foreground">
      <app-header></app-header>
      <app-hero></app-hero>
      <app-services></app-services>
      <app-why-choose-us></app-why-choose-us>
      <app-portfolio></app-portfolio>
      <app-about></app-about>
      <app-testimonials></app-testimonials>
      <app-contact></app-contact>
      <app-footer></app-footer>
    </main>
  `
})
export class IndexComponent { }
