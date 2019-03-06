// Import Angular router module
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import components
import { HomeComponent } from './components/home/home.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { VisitanosComponent } from './components/visitanos/visitanos.component';
import { BlogComponent } from './components/blog/blog.component';
import {PrivacyPolicyComponent} from './components/privacy-policy/privacy-policy.component';
import {CookiesComponent} from './components/cookies/cookies.component';
import {LegalComponent} from './components/legal/legal.component';


// Routes array
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'history',
    component: HistoriaComponent
  },
  {
    path: 'services',
    component: ServiciosComponent
  },
  {
    path: 'visit-us',
    component: VisitanosComponent
  },
  {
    path: 'contact',
    component: ContactosComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'cookies',
    component: CookiesComponent
  },
  {
    path: 'legal',
    component: LegalComponent
  },
  {
    path: '**',  // Not found view
    component: HomeComponent
  }
];

// Export router module
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


