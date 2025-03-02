import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsModuleContainerComponent } from './features/clients/clients-module-container/clients-module-container.component';
import { EmployeesModuleContainerComponent } from './features/employees/employees-module-container/employees-module-container.component';


//Lazy loading - 
//ClientsModule loads loaded dynamically, The first time the user navigates to /clients (not  at app startup).
//the remote API call in ClientsManagerComponent only triggers if the user visits /clients/manage.
const routes: Routes = [
  {path: 'clients', loadChildren: () => import('./features/clients/clients.module').then(m => m.ClientsModule)},
  {path: 'employees', loadChildren: () => import('./features/employees/employees.module').then(m => m.EmployeesModule)},
  { path: '', redirectTo: 'clients/all', pathMatch: 'full' }, //Default url redirected to that. Handle BUG { path: '', redirectTo: '/clients', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}




//Eager loading - 
//ClientsModule loads eagerly at app startup.
//However, the remote API call in ClientsManagerComponent only triggers if the user visits /clients/manage.
// const routes: Routes = [
//   { path: 'clients',      component: ClientsModuleContainerComponent },
//   { path: 'employees',    component: EmployeesModuleContainerComponent },
//   { path: '', redirectTo: 'clients/all', pathMatch: 'full' }, //Default url redirected to that. Handle BUG { path: '', redirectTo: '/clients', pathMatch: 'full' }
// ];
