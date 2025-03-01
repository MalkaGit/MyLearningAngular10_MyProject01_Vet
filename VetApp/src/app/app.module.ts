import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainLayoutContainerComponent } from './layouts/main/main-layout-container/main-layout-container.component';
import { MainLayoutMenuComponent } from './layouts/main/main-layout-menu/main-layout-menu.component';
import { ClientsModule } from './features/clients/clients.module'; // Import ClientsModule
import { EmployeesModule } from './features/employees/employees.module'; // Import EmployeesModule


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutContainerComponent,
    MainLayoutMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ClientsModule,  //required for navigation
    EmployeesModule //required for navigation
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
