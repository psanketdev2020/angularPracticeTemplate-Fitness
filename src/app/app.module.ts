import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';

// ngx-bootstrap modules
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BenefitsComponent } from './benefits/benefits.component';

// ngx-slick-slider modal
import { SlickCarouselModule  } from 'ngx-slick-carousel';
import { QueryFormComponent } from './query-form/query-form.component';
import { GalleryComponent } from './gallery/gallery.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    AboutComponent,
    BenefitsComponent,
    QueryFormComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
