import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { GalleryComponent } from './gallery/gallery.component';
import { QueryFormComponent } from './query-form/query-form.component';

const routes: Routes = [
  {path: 'home', component: BannerComponent},
  {path: 'about', component: AboutComponent},
  {path: 'benefits', component: BenefitsComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'contact', component: QueryFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
