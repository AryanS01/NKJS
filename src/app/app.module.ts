import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CollaborationsComponent } from './collaborations/collaborations.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationsComponent } from './registrations/registrations.component';
import { SpecializationComponent } from './specialization/specialization.component';
import { StrengthsComponent } from './strengths/strengths.component';
import { SlideComponent } from './slide/slide.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CollaborationsComponent,
    ContactComponent,
    GalleryComponent,
    HomeComponent,
    NavbarComponent,
    RegistrationsComponent,
    SpecializationComponent,
    StrengthsComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
