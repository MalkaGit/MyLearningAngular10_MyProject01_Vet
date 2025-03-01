import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsModuleContainerComponent } from './clients-module-container/clients-module-container.component';
import { ClientsManagerComponent } from './clients-manager/clients-manager.component';
import { ClientsReportsComponent } from './clients-reports/clients-reports.component';
import { ClientsModuleMenuComponent } from './clients-module-menu/clients-module-menu.component';


@NgModule({
  declarations: [ClientsModuleContainerComponent, ClientsManagerComponent, ClientsReportsComponent, ClientsModuleMenuComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ],
  exports: [ClientsModuleMenuComponent]   //required for navigation
})
export class ClientsModule { }

