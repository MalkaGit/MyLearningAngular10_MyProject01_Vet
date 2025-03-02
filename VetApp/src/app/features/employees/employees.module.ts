import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesModuleContainerComponent } from './employees-module-container/employees-module-container.component';
import { EmployeesManagerComponent } from './employees-manager/employees-manager.component';
import { EmployeesReportsComponent } from './employees-reports/employees-reports.component';
import { EmployeesModuleMenuComponent } from './employees-module-menu/employees-module-menu.component';


@NgModule({
  declarations: [EmployeesModuleContainerComponent, EmployeesManagerComponent, EmployeesReportsComponent, EmployeesModuleMenuComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ],
  exports: [EmployeesModuleMenuComponent]     //required for navigation
})
export class EmployeesModule { }