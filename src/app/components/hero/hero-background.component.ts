import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-background',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Gradient orbs with CSS Animation -->
      <div class="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] animate-blob-pulse-1"></div>
      <div class="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-[100px] animate-blob-pulse-2"></div>

      <!-- Grid pattern -->
      <div
        class="absolute inset-0 opacity-[0.02]"
        style="background-image: linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px);
               background-size: 60px 60px;"
      ></div>

      <!-- Floating particles (CSS) -->
      <div class="absolute w-2 h-2 rounded-full gradient-bg top-[20%] left-[10%] animate-float-1"></div>
      <div class="absolute w-2 h-2 rounded-full gradient-bg top-[35%] left-[25%] animate-float-2"></div>
      <div class="absolute w-2 h-2 rounded-full gradient-bg top-[50%] left-[40%] animate-float-3"></div>
      <div class="absolute w-2 h-2 rounded-full gradient-bg top-[65%] left-[55%] animate-float-1"></div>
      <div class="absolute w-2 h-2 rounded-full gradient-bg top-[80%] left-[70%] animate-float-2"></div>
      <div class="absolute w-2 h-2 rounded-full gradient-bg top-[95%] left-[85%] animate-float-3"></div>

      <!-- Geometric lines -->
      <svg class="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(201, 100%, 52%)" />
            <stop offset="100%" stopColor="hsl(214, 100%, 50%)" />
          </linearGradient>
        </defs>
        <line x1="0" y1="100%" x2="100%" y2="0" stroke="url(#lineGradient)" stroke-width="1" />
        <line x1="20%" y1="100%" x2="100%" y2="20%" stroke="url(#lineGradient)" stroke-width="0.5" />
      </svg>
    </div>
  `,
  styles: [`
    @keyframes blobPulse1 {
      0% { transform: scale(1); opacity: 0.3; }
      50% { transform: scale(1.2); opacity: 0.5; }
      100% { transform: scale(1); opacity: 0.3; }
    }
    @keyframes blobPulse2 {
      0% { transform: scale(1.2); opacity: 0.2; }
      50% { transform: scale(1); opacity: 0.4; }
      100% { transform: scale(1.2); opacity: 0.2; }
    }
    @keyframes float1 {
      0% { transform: translate(0, 0); opacity: 0.2; }
      50% { transform: translate(10px, -20px); opacity: 0.6; }
      100% { transform: translate(0, 0); opacity: 0.2; }
    }
    @keyframes float2 {
      0% { transform: translate(0, 0); opacity: 0.2; }
      50% { transform: translate(-15px, 15px); opacity: 0.6; }
      100% { transform: translate(0, 0); opacity: 0.2; }
    }
    @keyframes float3 {
      0% { transform: translate(0, 0); opacity: 0.2; }
      50% { transform: translate(15px, 15px); opacity: 0.6; }
      100% { transform: translate(0, 0); opacity: 0.2; }
    }
    .animate-blob-pulse-1 { animation: blobPulse1 8s ease-in-out infinite; }
    .animate-blob-pulse-2 { animation: blobPulse2 10s ease-in-out infinite; }
    .animate-float-1 { animation: float1 6s ease-in-out infinite; }
    .animate-float-2 { animation: float2 7s ease-in-out infinite; }
    .animate-float-3 { animation: float3 8s ease-in-out infinite; }
  `]
})
export class HeroBackgroundComponent { }
