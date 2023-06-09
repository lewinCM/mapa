import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherHomeComponent } from './teacher-home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ListTeacherComponent } from './pages/list-teacher/list-teacher.component';

const routes: Routes = [
  {
    path: "", component: TeacherHomeComponent,
    children: [
      { path: 'list', component: ListTeacherComponent },
      { path: 'teachers/list/detail', component: DetailComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
