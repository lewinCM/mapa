import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { P404Component } from './shared/components/p404/p404.component';



const routes: Routes = [

  { path: 'home', component: HomePageComponent },
  {
    path: "maps",
    loadChildren: () => import("./modules/maps/maps.module").then(m => m.MapsModule)
  },
  {
    path: "dashboard",
    loadChildren: () => import("./modules/dashboard/dashboard.module").then(m => m.DashboardModule)
  },

  {
    path: "profesors",
    loadChildren: () => import("./modules/teacher/teacher.module").then(m => m.TeacherModule)
  },
  {
    path: "auth",
    loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "", redirectTo: 'home', pathMatch: 'full',
  },

  {
    path: '**',
    component: P404Component
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
