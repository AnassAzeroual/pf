import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  // use hash in route
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,withHashLocation()),
    provideClientHydration(),
    provideAnimations(),
  ]
};
