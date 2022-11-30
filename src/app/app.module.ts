import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    EmployeeComponent,
    EmployeeRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
