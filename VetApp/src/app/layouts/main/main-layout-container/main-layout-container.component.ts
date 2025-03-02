import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout-container',
  templateUrl: './main-layout-container.component.html',
  styleUrls: ['./main-layout-container.component.scss']
})
export class MainLayoutContainerComponent {
  isClientsPage: boolean = false;
  isEmployeesPage: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isClientsPage = this.router.url.includes('/clients');
      this.isEmployeesPage = this.router.url.includes('/employees');
    });
  }
}