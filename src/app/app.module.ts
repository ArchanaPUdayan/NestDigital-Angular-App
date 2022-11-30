import { Component, NgModule } from '@angular/core';
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
import { RoutingComponent } from './routing/routing.component';
import { RouterModule, Routes } from '@angular/router';
const myRoute:Routes=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"Gallery",
  component:GalleryComponent
  },
  {
    path:"Contact",
    component:ContactusComponent
  },
  {
    path:"About",
    component:AboutusComponent
  },
  {
    path:"Admin",
    component:AdminloginComponent
  },
  {
    path:"Employee",
    component:EmployeeComponent
  }
]

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
    AboutusComponent,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
