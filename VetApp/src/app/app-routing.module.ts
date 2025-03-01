import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsModuleContainerComponent } from './features/clients/clients-module-container/clients-module-container.component';
import { EmployeesModuleContainerComponent } from './features/employees/employees-module-container/employees-module-container.component';

const routes: Routes = [
  { path: 'clients',      component: ClientsModuleContainerComponent },
  { path: 'employees',    component: EmployeesModuleContainerComponent },
  { path: '', redirectTo: 'clients/all', pathMatch: 'full' }, //Default url redirected to that. Handle BUG { path: '', redirectTo: '/clients', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
