import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesManagerComponent } from './employees-manager/employees-manager.component';  //required for navigation
import { EmployeesReportsComponent } from './employees-reports/employees-reports.component';  //required for navigation
import { EmployeesModuleContainerComponent } from './employees-module-container/employees-module-container.component';//required for navigation

const routes: Routes = [
  { path: 'employees',   //required for navigation - parent employees
    component: EmployeesModuleContainerComponent, children: [
      { path: 'manage', component: EmployeesManagerComponent },      //url employees\manage
      { path: 'reports', component: EmployeesReportsComponent }   //url employees\reports
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule {}