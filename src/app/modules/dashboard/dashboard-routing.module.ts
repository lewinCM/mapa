import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { StudentComponent } from './pages/student/student.component';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  {
    path: "", component: DashboardComponent,
    children: [
      {
        path: "teacher", component: TeacherComponent
      },
      {
        path: "student", component: StudentComponent
      },
      {
        path: "admin", component: AdminComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
