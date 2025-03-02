import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsManagerComponent } from './clients-manager/clients-manager.component'; //required for navigation
import { ClientsReportsComponent } from './clients-reports/clients-reports.component'; //
import { ClientsModuleContainerComponent } from './clients-module-container/clients-module-container.component'; //required for navigation


const routes: Routes = [
  { path: 'clients',        ////required for navigation - parent client
       component: ClientsModuleContainerComponent, children: [
      { path: 'manage', component: ClientsManagerComponent },        //url clients\manage
      { path: 'reports', component: ClientsReportsComponent }     //url clients\reports
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }