import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { P404Component } from './shared/components/p404/p404.component';



const routes: Routes = [

  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },

  
  {
    path: "auth",
    loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule)
  },

  {
    path: '**', pathMatch: 'full',
    component: P404Component
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
