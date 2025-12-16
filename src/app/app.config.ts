import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  LucideAngularModule,
  ArrowRight, MessageCircle, Palette, Code, ShoppingCart, Search, Layers,
  Lock, Hammer, ExternalLink, Target, Lightbulb, TrendingUp, Star, Mail,
  Instagram, Cookie, ShieldCheck, ShieldAlert, X, Menu, Phone,
  CheckCircle, Zap, Shield, Users
} from 'lucide-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withInMemoryScrolling({
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    })),
    provideAnimations(),
    importProvidersFrom(LucideAngularModule.pick({
      ArrowRight, MessageCircle, Palette, Code, ShoppingCart, Search, Layers,
      Lock, Hammer, ExternalLink, Target, Lightbulb, TrendingUp, Star, Mail,
      Instagram, Cookie, ShieldCheck, ShieldAlert, X, Menu, Phone,
      CheckCircle, Zap, Shield, Users
    }))
  ]
};
