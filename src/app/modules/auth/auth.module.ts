import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthProfileComponent } from './auth-profile.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthProfileComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule


  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
