import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AdminComponent } from './pages/admin/admin.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { StudentComponent } from './pages/student/student.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent,
    TeacherComponent,
    StudentComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
