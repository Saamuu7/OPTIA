import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [CommonModule, HeaderComponent, FooterComponent],
    template: `
    <app-header></app-header>
    <main class="min-h-screen p-4">
      <h1>Portfolio Page</h1>
    </main>
    <app-footer></app-footer>
  `
})
export class PortfolioComponent { }
