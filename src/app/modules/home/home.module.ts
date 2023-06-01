import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './pages/hero/hero.component';
import { CategoryComponent } from './pages/category/category.component';
import { TeacherModule } from '../teacher/teacher.module';


@NgModule({
  declarations: [
    HomePageComponent,
    HeroComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    TeacherModule,
    RouterModule
  ]
})
export class HomeModule { }
