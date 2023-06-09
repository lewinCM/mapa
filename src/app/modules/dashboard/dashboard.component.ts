import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public sidebarItems = [
    { label: 'Estudiante', icon: 'label', url: './student' },
    { label: 'Teacher', icon: 'label', url: './teacher' },
    { label: 'Admin', icon: 'label', url: './admin' },
  ]
}
