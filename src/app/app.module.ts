import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { ViewfrdsComponent } from './viewfrds/viewfrds.component';
import { ViewcousesComponent } from './viewcouses/viewcouses.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    EmployeeComponent,
    EmployeeRegistrationComponent,
    ViewfrdsComponent,
    ViewcousesComponent,
    NavigationComponent,
    HomeComponent,
    GalleryComponent,
    ContactusComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
