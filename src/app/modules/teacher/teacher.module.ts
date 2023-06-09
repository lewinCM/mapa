import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherHomeComponent } from './teacher-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeModule } from '../home/home.module';
import { DetailComponent } from './pages/detail/detail.component';
import { ListTeacherComponent } from './pages/list-teacher/list-teacher.component';


@NgModule({
  declarations: [
    TeacherHomeComponent,
    DetailComponent,
    ListTeacherComponent,

  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    SharedModule,
    HomeModule


  ],
  exports: [
    TeacherHomeComponent
  ]
})
export class TeacherModule { }
