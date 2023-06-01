import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { PaginacionComponent } from './components/paginacion/paginacion.component';
import { MenuComponent } from './components/menu/menu.component';
import { P404Component } from './components/p404/p404.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    PaginacionComponent,
    MenuComponent,
    P404Component

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    PaginacionComponent,

  ]
})
export class SharedModule { }
