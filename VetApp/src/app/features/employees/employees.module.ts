import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';    //required to use ngModel in the html <input [(ngModel)]="employee.name" />
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesModuleContainerComponent } from './employees-module-container/employees-module-container.component';
import { EmployeesManagerComponent } from './employees-manager/employees-manager.component';
import { EmployeesReportsComponent } from './employees-reports/employees-reports.component';
import { EmployeesModuleMenuComponent } from './employees-module-menu/employees-module-menu.component';
import { EmployeesManagerMasterComponent } from './employees-manager-master/employees-manager-master.component';
import { EmployeesManagerDetailsComponent } from './employees-manager-details/employees-manager-details.component';


@NgModule({
  declarations: [EmployeesModuleContainerComponent, EmployeesManagerComponent, EmployeesReportsComponent, EmployeesModuleMenuComponent, EmployeesManagerMasterComponent, EmployeesManagerDetailsComponent],
  imports: [
    CommonModule,
//    FormsModule,                              //required to use ngModel in the html <input [(ngModel)]="employee.name" />
    EmployeesRoutingModule
  ],
  exports: [EmployeesModuleMenuComponent]     //required for navigation
})
export class EmployeesModule { }