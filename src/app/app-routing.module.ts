import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { StrengthsComponent } from './strengths/strengths.component';
import { SpecializationComponent } from './specialization/specialization.component';
import { CollaborationsComponent } from './collaborations/collaborations.component';
import { RegistrationsComponent } from './registrations/registrations.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'strengths', component: StrengthsComponent },
  { path: 'specialization', component: SpecializationComponent },
  { path: 'registrations', component: RegistrationsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'collaborations', component: CollaborationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
