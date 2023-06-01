import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './modules/home/home.module';
// import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    HomeModule
    // SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
