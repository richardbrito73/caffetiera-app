import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { VisitanosComponent } from './components/visitanos/visitanos.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { BlogComponent } from './components/blog/blog.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { LegalComponent } from './components/legal/legal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoriaComponent,
    ServiciosComponent,
    VisitanosComponent,
    ContactosComponent,
    BlogComponent,
    PrivacyPolicyComponent,
    CookiesComponent,
    LegalComponent
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
